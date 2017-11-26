import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {CommonUtilsService} from '../../shared/services/common-utils.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {CloudForm} from '../../shared/models/cloud-form.model';
import {environment} from '../../../environments/environment';

@Injectable()
export class WorkspaceService {

  constructor(private http: Http,
              private utils: CommonUtilsService) { }

  /*This method gets all cloudForms*/
  getCloudForms(): Observable<CloudForm[]> {
    const options = this.utils.getRequestOptions();
    return this.http.get(environment.getCloudForms, options)
      .map(this.utils.extractData)
      .catch(this.utils.handleError);
  }

  /*This method save CloudForms*/
  saveCloudForm(cloudForm: CloudForm): Observable<CloudForm> {
    const options = this.utils.getRequestOptions();
    return this.http.post(environment.saveCloudForms, cloudForm, options)
      .map(this.utils.extractData)
      .catch(this.utils.handleError);
  }
}
