import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavigationService} from '../../shared/services/navigation.service.service';
import {CommonUtilsService} from '../../shared/services/common-utils.service';
import {FormService} from '../../shared/services/form.service';

@Component({
  selector: 'app-frame-short-question',
  templateUrl: './frame-short-question.component.html',
  styleUrls: ['./frame-short-question.component.css']
})
export class FrameShortQuestionComponent implements OnInit {
  question: string;
  description: string;
  maxLength: number;
  isRequired: boolean;
  formId: string;
  order: number;

  constructor(private navigate: NavigationService,
              private route: ActivatedRoute,
              private utils: CommonUtilsService,
              private formService: FormService) {
    this.formId = this.route.snapshot.paramMap.get('id');
    this.order = +this.route.snapshot.paramMap.get('order');
  }

  ngOnInit() {
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

  /*This method create short-question element*/
  createElement() {
    return this.utils.createElement({
      type: 'shortText',
      order: this.order,
      question: this.question,
      helpText: this.description,
      required: this.isRequired,
      maxLength: this.maxLength});
  }
}
