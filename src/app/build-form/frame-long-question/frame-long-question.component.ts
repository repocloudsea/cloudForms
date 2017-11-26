import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-frame-long-question',
  templateUrl: './frame-long-question.component.html',
  styleUrls: ['./frame-long-question.component.css']
})
export class FrameLongQuestionComponent implements OnInit {
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
