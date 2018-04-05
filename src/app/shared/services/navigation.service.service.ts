import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class NavigationService {

  constructor(private router: Router) { }

  /*This method navigate to questions page*/
  goToQuestions(formId: string): void {
    this.router.navigate(['workspace/forms', formId, 'questions']);
  }

  /*This method navigate to frame-question page on the basis of controlType*/
  goToFrameQuestion(formId: string, controlType: string, order: number): void {
    setTimeout(() => {
      this.router.navigate(['workspace/forms', formId, 'questions', controlType, order]);
    }, 1000);
  }
}
