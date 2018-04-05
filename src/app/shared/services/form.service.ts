import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {CloudForm} from '../models/cloud-form.model';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {HandleError, HttpErrorHandler} from './http-error-handler.service';
import {catchError, retry} from 'rxjs/operators';
import {Element} from '../models/element.model';
import {element} from 'protractor';

@Injectable()
export class FormService {
  private handleError: HandleError;

  constructor(private http: HttpClient,
              private httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('FormService');
  }

  /*This method gets form created by user*/
  getForm(formId: string): Observable<CloudForm> {
    const url = `${environment.rootUrl}/forms/${formId}`;
    return this.http.get<CloudForm>(url)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError('getForm', new CloudForm(), true))
      );
  }

  /*This method update element into form*/
  updateElement(formId: string, question: Element<string>): Observable<CloudForm> {
    const url = `${environment.rootUrl}/forms/${formId}`;
    return this.http.patch<CloudForm>(url, {op: 'UPDATE', path: '/elements', value: JSON.stringify(question)})
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError('getForm', new CloudForm(), true))
      );
  }
}
