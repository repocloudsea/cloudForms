import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-frame-email-question',
  templateUrl: './frame-email-question.component.html',
  styleUrls: ['./frame-email-question.component.css']
})
export class FrameEmailQuestionComponent implements OnInit {
  question: string;
  description: string;
  maxChar: number;
  isRequired: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  cancel(): void {
    this.router.navigate(['workspace/form/questions']);
  }
}
