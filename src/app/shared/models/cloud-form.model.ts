import {QuestionBase} from './question-base.model';

export class CloudForm {
  id: any;
  name: string;
  language: string;
  questions: QuestionBase<any>[];
}
