import { Pipe, PipeTransform } from '@angular/core';
import {QuestionTypeLabel} from '../constants/question-type-label.constant';

@Pipe({
  name: 'questionType'
})
export class QuestionTypePipe implements PipeTransform {

  transform(value: string, type: string): any {
    return value || QuestionTypeLabel[type];
  }

}
