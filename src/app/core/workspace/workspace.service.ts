import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {CloudForm} from '../../shared/models/cloud-form.model';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {HandleError, HttpErrorHandler} from '../../shared/services/http-error-handler.service';
import {catchError, retry} from 'rxjs/operators';
import {FormsResponse} from '../../shared/models/forms-response.model';

@Injectable()
export class WorkspaceService {
  private handleError: HandleError;

  constructor(private http: HttpClient,
              private httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('WorkspaceService');
  }

  /*This method gets all cloudForms for the user*/
  getForms(userId: string): Observable<FormsResponse> {
    const url = `${environment.rootUrl}/forms/userid/${userId}`;
    return this.http.get<FormsResponse>(url)
      .pipe(
        catchError(this.handleError('getForms', new FormsResponse()))
      );
  }

  /*This method saves CloudForm*/
  saveForm(form: CloudForm): Observable<CloudForm> {
    const url = `${environment.rootUrl}/forms`;
    return this.http.post<CloudForm>(url, form)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError('saveForm', form))
      );
  }
}
