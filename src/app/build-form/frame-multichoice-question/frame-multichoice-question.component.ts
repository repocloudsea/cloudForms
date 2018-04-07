import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {NavigationService} from '../../shared/services/navigation.service.service';
import {CommonUtilsService} from '../../shared/services/common-utils.service';
import {FormService} from '../../shared/services/form.service';

@Component({
  selector: 'app-frame-multichoice-question',
  templateUrl: './frame-multichoice-question.component.html',
  styleUrls: ['./frame-multichoice-question.component.css']
})
export class FrameMultichoiceQuestionComponent implements OnInit {
  multiChoiceForm: FormGroup;
  formId: string;
  order: number;

  constructor(private fb: FormBuilder,
              private navigate: NavigationService,
              private route: ActivatedRoute,
              private utils: CommonUtilsService,
              private formService: FormService) {
    this.formId = this.route.snapshot.paramMap.get('id');
    this.order = +this.route.snapshot.paramMap.get('order');
  }

  ngOnInit() {
    this.multiChoiceForm = this.fb.group({
      choices: this.fb.array([new FormControl()]),
      question: '',
      description: '',
      isRequired: false
    });
  }

  get choices(): FormArray {
    return this.multiChoiceForm.get('choices') as FormArray;
  };

  get question(): FormControl {
    return this.multiChoiceForm.get('question') as FormControl;
  }

  get isRequired(): FormControl {
    return this.multiChoiceForm.get('isRequired') as FormControl;
  }

  get description(): FormControl {
    return this.multiChoiceForm.get('description') as FormControl;
  }

  /*This method add choice to choices option*/
  add(index: number): void {
    this.choices.push(new FormControl());
  }

  /*This method remove choice from choices option*/
  remove(index: number): void {
    if (this.choices && (this.choices.length > 1)) {
      this.choices.removeAt(index);
    }
  }

  /*This method cancel question creation and redirected to form page*/
  cancel(): void {
    this.navigate.goToQuestions(this.formId);
  }

  /*This method save long-question element for given form*/
  save(): void {
    if (this.question.value) {
      this.formService.updateElement(this.formId, this.createElement())
        .subscribe((form) => {
          this.navigate.goToQuestions(this.formId);
        });
    }
  }

  /*This method create long-question element*/
  createElement() {
    return this.utils.createElement({
      type: 'multipleChoice',
      order: this.order,
      question: this.question.value,
      helpText: this.description.value,
      required: this.isRequired.value,
      choices: this.choices.value
    });
  }
}
