import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-frame-rating-question',
  templateUrl: './frame-rating-question.component.html',
  styleUrls: ['./frame-rating-question.component.css']
})
export class FrameRatingQuestionComponent implements OnInit {
  question: string;
  description: string;
  shape: string;
  noOfSteps: number;
  isRequired: boolean;
  steps = [];

  constructor(private router: Router) {
    this.noOfSteps = 3;
    this.shape = 'fa fa-star-o fa-4x';
  }

  ngOnInit() {
    this.addToSteps();
  }

  cancel(): void {
    this.router.navigate(['workspace/form/questions']);
  }

  addToSteps(): void {
    if (this.noOfSteps && (this.noOfSteps > 10)) {
      this.noOfSteps = 10;
    }
    if (this.noOfSteps && (this.noOfSteps < 3)) {
      this.noOfSteps = 3;
    }
    this.steps = new Array(this.noOfSteps);
  }
}
