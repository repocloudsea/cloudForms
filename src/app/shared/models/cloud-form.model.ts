import {QuestionBase} from './question-base.model';
import {Links} from './links.model';
import {Element} from './element.model';

export class CloudForm {
  id: any;
  title: string;
  language: string;
  userId: string;
  webHook: string;
  status: string;
  questions: QuestionBase<any>[];
  elements: Element<any>[];
  _links: Links;
}
