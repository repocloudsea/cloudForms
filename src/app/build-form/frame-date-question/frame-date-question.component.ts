import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {element} from 'protractor';
import {NavigationService} from '../../shared/services/navigation.service.service';
import {CommonUtilsService} from '../../shared/services/common-utils.service';
import {FormService} from '../../shared/services/form.service';

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
  formId: string;
  order: number;

  constructor(private navigate: NavigationService,
              private route: ActivatedRoute,
              private utils: CommonUtilsService,
              private formService: FormService) {
    this.formId = this.route.snapshot.paramMap.get('id');
    this.order = +this.route.snapshot.paramMap.get('order');
    this.structure = 'DDMMYYYY';
    this.separator = '/';
  }

  /*This method cancel question creation and redirected to form page*/
  cancel(): void {
    this.navigate.goToQuestions(this.formId);
  }

  ngOnInit() {
    this.generateDateFormate();
  }

  /*This method take input from structure and separator and generate data formate*/
  generateDateFormate(): void {
    if (this.separator && this.structure) {
      const elements = DATE_FORMATE[this.structure];
      this.dateFormate = elements[0] + ' ' + this.separator + ' ' + elements[1] + ' ' + this.separator + ' ' + elements[2];
    }
  }
  /*This method save long-question element for given form*/
  save(): void {
    if (this.question) {
      this.formService.updateElement(this.formId, this.createElement())
        .subscribe((form) => {
          this.navigate.goToQuestions(this.formId);
        });
    }
  }

  /*This method create long-question element*/
  createElement() {
    return this.utils.createElement({
      type: 'date',
      order: this.order,
      question: this.question,
      helpText: this.description,
      required: this.isRequired,
      format: this.dateFormate
    });
  }
}
