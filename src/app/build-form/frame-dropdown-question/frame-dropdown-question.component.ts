import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-frame-dropdown-question',
  templateUrl: './frame-dropdown-question.component.html',
  styleUrls: ['./frame-dropdown-question.component.css']
})
export class FrameDropdownQuestionComponent implements OnInit {
  question: string;
  description: string;
  choicesText: string;
  isRequired: boolean;
  choices: string[];

  constructor(private router: Router) {
    this.choices = [];
  }

  ngOnInit() {
  }

  cancel(): void {
    this.router.navigate(['workspace/form/questions']);
  }

  /*this method convert choicesText into choices array*/
  splitChoices(): void {
    if (this.choicesText) {
      this.choices = this.choicesText.split(/[\n,;]+/);
    }
  }
}
