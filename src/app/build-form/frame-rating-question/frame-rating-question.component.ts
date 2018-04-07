import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NavigationService} from '../../shared/services/navigation.service.service';
import {CommonUtilsService} from '../../shared/services/common-utils.service';
import {FormService} from '../../shared/services/form.service';

const SHAPES = {
  stars: 'fa fa-star-o fa-4x',
  hearts: 'fa fa-heart-o fa-4x',
  users: 'fa fa-user-o fa-4x',
  thumbsUp: 'fa fa-thumbs-o-up fa-4x',
  flags: 'fa fa-flag-o fa-4x',
  ticks: 'fa fa-check-circle-o fa-4x',
  pencils: 'fa fa-pencil-square-o fa-4x'
}

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

  get shapeStyle(): string {
    return SHAPES[this.shape] || SHAPES.stars;
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
      type: 'rate',
      order: this.order,
      question: this.question,
      helpText: this.description,
      required: this.isRequired,
      rates: this.rates,
      shapes: this.shape
    });
  }
}
