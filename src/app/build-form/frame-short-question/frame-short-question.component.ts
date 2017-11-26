import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-frame-short-question',
  templateUrl: './frame-short-question.component.html',
  styleUrls: ['./frame-short-question.component.css']
})
export class FrameShortQuestionComponent implements OnInit {
  question: string;
  description: string;
  maxCount: number;
  minCount: number;
  isRequired: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  cancel(): void {
    this.router.navigate(['workspace/form/questions']);
  }
}
