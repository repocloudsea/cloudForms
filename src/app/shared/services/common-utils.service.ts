import { Injectable } from '@angular/core';
import {Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';
import {TextboxElement} from '../models/textbox-element.model';
import {NumberElement} from '../models/number-element.model';
import {ChoicesElement} from '../models/choices-element.model';
import {LegalElement} from '../models/legal-element.model';
import {RateElement} from '../models/rate-element.model';
import {YesNoElement} from '../models/yesno-element.model';
import {EmailElement} from '../models/email-element.model';
import {DateElement} from '../models/date-element.model';
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

  /*This method construct question element object for textbox element*/
  createElement(options: {
    type?: string,
    order?: number,
    question?: string,
    helpText?: string,
    required?: boolean,
    value?: string,
    refId?: string,
    attachmentUrl?: string,
    maxLength?: number,
    minLength?: number,
    maxValue?: number,
    minValue?: number,
    choices?: string[],
    howMany?: number,
    rates?: number,
    shapes?: string,
    yesbuttonText?: string,
    noButtonText?: string,
    format?: string
  } = {}): any {
    if ((options.type === 'shortText') || (options.type === 'longText')) {
      return new TextboxElement(options);
    }
    if (options.type === 'number') {
      return new NumberElement(options);
    }
    if ((options.type === 'dropDown') || options.type === 'multipleChoice') {
      return new ChoicesElement((options));
    }
    if (options.type === 'legal') {
      return new LegalElement(options);
    }
    if (options.type === 'rate') {
      return new RateElement(options);
    }
    if (options.type === 'yesno') {
      return new YesNoElement(options);
    }
    if (options.type === 'email') {
      return new EmailElement(options);
    }
    if (options.type === 'date') {
      return new DateElement(options);
    }
  }
}
