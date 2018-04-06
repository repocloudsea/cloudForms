import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavigationService} from '../../shared/services/navigation.service.service';
import {CommonUtilsService} from '../../shared/services/common-utils.service';
import {FormService} from '../../shared/services/form.service';

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

  /*this method convert choicesText into choices array*/
  splitChoices(): void {
    if (this.choicesText) {
      this.choices = this.choicesText.split(/[\n,;]+/);
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
      type: 'dropDown',
      order: this.order,
      question: this.question,
      helpText: this.description,
      required: this.isRequired,
      choices: this.choices
    });
  }
}
