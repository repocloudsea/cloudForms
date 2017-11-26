import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-frame-yesno-question',
  templateUrl: './frame-yesno-question.component.html',
  styleUrls: ['./frame-yesno-question.component.css']
})
export class FrameYesNoQuestionComponent implements OnInit {
  question: string;
  description: string;
  isRequired: boolean;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  cancel(): void {
    this.router.navigate(['workspace/form/questions']);
  }
}
