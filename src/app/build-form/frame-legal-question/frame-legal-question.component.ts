import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-frame-legal-question',
  templateUrl: './frame-legal-question.component.html',
  styleUrls: ['./frame-legal-question.component.css']
})
export class FrameLegalQuestionComponent implements OnInit {
  question: string;
  description: string;
  isRequired: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  cancel(): void {
    this.router.navigate(['workspace/form/questions']);
  }
}
