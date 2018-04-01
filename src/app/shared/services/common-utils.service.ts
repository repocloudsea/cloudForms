import { Injectable } from '@angular/core';
import {Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';
declare var $: any;

@Injectable()
export class CommonUtilsService {

  constructor() { }

  /*This method returns headers required for service request*/
  getRequestOptions(): RequestOptions {
    const headers = new Headers({ 'Content-Type': 'application/json'});
    const options = new RequestOptions({ headers: headers });
    return options;
  }

  /*This method returns object from service json response*/
  extractData(res: Response) {
    return res.json() || {};
  }

  /*This method handle error logging and propogation to component*/
  handleError(error: Response | any) {
    let errorResponse = {};
    if (error) {
      if (error instanceof Response) {
        errorResponse = error.json();
      } else {
        const errorMsg = error.message ? error.message : error.toString;
        errorResponse = {message: errorMsg};
      }
    }
    return Observable.throw(errorResponse);
  }

  /*This method shows loader*/
  showLoader(index: number): void {
    setTimeout(() => {
      $('#loader' + index).addClass('x-loader-spin');
    }, 100);
  }

  /*This method shows loader*/
  hideLoader(index: number): void {
    $('#loader' + index).removeClass('x-loader-spin');
  }

  /*This method stored in local storage of browser*/
  store(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  /*This method retrieve from local storage of browser*/
  retrieve(key: string): any {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  }
}
