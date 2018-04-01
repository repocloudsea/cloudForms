import {QuestionBase} from './question-base.model';

export class CloudForm {
  id: any;
  title: string;
  language: string;
  userId: string;
  webHook: string;
  status: string;
  questions: QuestionBase<any>[];
}
