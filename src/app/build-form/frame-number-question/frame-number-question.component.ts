import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-frame-number-question',
  templateUrl: './frame-number-question.component.html',
  styleUrls: ['./frame-number-question.component.css']
})
export class FrameNumberQuestionComponent implements OnInit {
  question: string;
  description: string;
  minCount: number;
  maxCount: number;
  isRequired: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  cancel(): void {
    this.router.navigate(['workspace/form/questions']);
  }
}
