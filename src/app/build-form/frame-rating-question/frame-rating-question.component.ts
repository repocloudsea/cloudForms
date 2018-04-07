import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NavigationService} from '../../shared/services/navigation.service.service';
import {CommonUtilsService} from '../../shared/services/common-utils.service';
import {FormService} from '../../shared/services/form.service';

@Component({
  selector: 'app-frame-rating-question',
  templateUrl: './frame-rating-question.component.html',
  styleUrls: ['./frame-rating-question.component.css']
})
export class FrameRatingQuestionComponent implements OnInit {
  question: string;
  description: string;
  shape: string;
  rates: number;
  isRequired: boolean;
  steps = [];
  formId: string;
  order: number;

  constructor(private navigate: NavigationService,
              private route: ActivatedRoute,
              private utils: CommonUtilsService,
              private formService: FormService) {
    this.rates = 3;
    this.shape = 'stars';
    this.formId = this.route.snapshot.paramMap.get('id');
    this.order = +this.route.snapshot.paramMap.get('order');
  }

  ngOnInit() {
    this.addToSteps();
  }

  addToSteps(): void {
    if (this.rates && (this.rates > 10)) {
      this.rates = 10;
    }
    if (this.rates && (this.rates < 3)) {
      this.rates = 3;
    }
    this.steps = new Array(this.rates);
  }

  /*This method cancel question creation and redirected to form page*/
  cancel(): void {
    this.navigate.goToQuestions(this.formId);
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
      type: 'rates',
      order: this.order,
      question: this.question,
      helpText: this.description,
      required: this.isRequired,
      rates: this.rates,
      shapes: this.shape
    });
  }
}
