import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {element} from 'protractor';

const DATE_FORMATE = {
  DDMMYYYY: ['DD', 'MM', 'YYYY'],
  MMDDYYYY: ['MM', 'DD', 'YYYY'],
  YYYYMMDD: ['YYYY', 'MM', 'DD']
};

@Component({
  selector: 'app-frame-date-question',
  templateUrl: './frame-date-question.component.html',
  styleUrls: ['./frame-date-question.component.css']
})
export class FrameDateQuestionComponent implements OnInit {
  question: string;
  description: string;
  isRequired: boolean;
  structure: string;
  separator: string;
  dateFormate: string;

  constructor(private router: Router) {
    this.structure = 'DDMMYYYY';
    this.separator = '/';
  }

  ngOnInit() {
    this.generateDateFormate();
  }

  cancel(): void {
    this.router.navigate(['workspace/form/questions']);
  }

  /*This method take input from structure and separator and generate data formate*/
  generateDateFormate(): void {
    if (this.separator && this.structure) {
      const elements = DATE_FORMATE[this.structure];
      this.dateFormate = elements[0] + ' ' + this.separator + ' ' + elements[1] + ' ' + this.separator + ' ' + elements[2];
    }
  }
}
