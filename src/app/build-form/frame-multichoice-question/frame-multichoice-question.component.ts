import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {isNullOrUndefined} from 'util';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-frame-multichoice-question',
  templateUrl: './frame-multichoice-question.component.html',
  styleUrls: ['./frame-multichoice-question.component.css']
})
export class FrameMultichoiceQuestionComponent implements OnInit {
  multiChoiceForm: FormGroup;

  constructor(private router: Router,
              private fb: FormBuilder) {}

  ngOnInit() {
    this.multiChoiceForm = this.fb.group({
      choices: this.fb.array([new FormControl()]),
      question: '',
      description: '',
      isRequired: false,
      isMultiSelect: false
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
  add(): void {
    this.choices.push(new FormControl());
  }

  /*This method remove choice from choices option*/
  remove(index: number): void {
    if (this.choices && (this.choices.length > 1)) {
      this.choices.removeAt(index);
    }
  }
  cancel(): void {
    this.router.navigate(['workspace/form/questions']);
  }
}
