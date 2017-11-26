import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {CommonUtilsService} from './common-utils.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {CloudForm} from '../models/cloud-form.model';
import {environment} from '../../../environments/environment';

@Injectable()
export class FormService {

  constructor(private http: Http,
              private utils: CommonUtilsService) { }

  /*This method gives all questions for specified cloudForm*/
  getForm(formId: string): Observable<CloudForm> {
    const options = this.utils.getRequestOptions();
    const serviceUrl = environment.getForm; /*+ '/' + formId;*/
    return this.http.get(environment.getForm, options)
      .map(this.utils.extractData)
      .catch(this.utils.handleError);
  }
}
