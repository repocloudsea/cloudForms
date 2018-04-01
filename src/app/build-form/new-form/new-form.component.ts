import { Component, OnInit } from '@angular/core';
import {FormService} from '../../shared/services/form.service';
import {QuestionBase} from '../../shared/models/question-base.model';
import {CloudForm} from '../../shared/models/cloud-form.model';
import {ControlType} from '../../shared/enums/control-type.enum';
import {ControlIcons} from '../../shared/constants/control-icon.constant';
import {isNullOrUndefined} from 'util';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {WelcomeScreen} from '../../shared/models/welcome-screen.model';
import {ThankyouScreen} from '../../shared/models/thankyou-screen.model';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent implements OnInit {
  questions: QuestionBase<any>[];
  cloudForm: CloudForm;
  controlType = ControlType;
  controlIcons = ControlIcons;
  isWelcomeScreen = false;
  isThankYouScreen = false;
  formId: string;

  constructor(private formService: FormService,
              private router: Router,
              private route: ActivatedRoute) {
    this.questions = [];
    this.formId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.formService.getForm(this.formId)
      .subscribe((cloudForm) => {
        if (cloudForm.questions && cloudForm.questions.length > 0) {
          this.questions = cloudForm.questions;
          if (!this.questions) {
            this.questions = [];
          }
        }
      }, (error) => {
        console.log('GetForm service failing');
      });
  }

  /*This method construct question on the basis of controlType and navigate to frame question page*/
  frameQuestion(controlIndex: number): void {
    if (controlIndex) {
      const questionLength = this.questions.length + 1;
      const question = new QuestionBase(ControlType[controlIndex], questionLength);
      this.questions.push(question);
      this.navigateToFrameQuestion(question.controlType);
    }
  }

  /*This method returns icon class name base on the controlType*/
  setControlIcon(controlType: string): string {
    return this.controlIcons[controlType] || this.controlIcons.shortText;
  }

  /*This method calls on drag start for questions*/
  drag(event, controlIndex: number) {
    const questionLength = this.questions.length + 1;
    const question = new QuestionBase(ControlType[controlIndex], questionLength);
    event.dataTransfer.setData('object', JSON.stringify(question));
  }

  /*This method calls on drop event from questions*/
  drop(event, index?: number) {
    event.preventDefault();
    const json = event.dataTransfer.getData('object');
    if (json) {
      const question = JSON.parse(json);
      if (!isNullOrUndefined(index)) {
        console.log('Element Index: ' + index);
        this.questions.splice(index, 0, question);
      } else {
        this.questions.push(question);
      }
      this.navigateToFrameQuestion(question.controlType);
    }
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  /*This method navigate to frame-question page on the basis of controlType*/
  private navigateToFrameQuestion(controlType: string): void {
    setTimeout(() => {
      this.router.navigate(['workspace/form/questions', controlType]);
    }, 2000);
  }

  /*This method calls on drag start for welcome and thankYou screen*/
  dragScreen(event, screenType: string) {
    event.dataTransfer.setData('screenType', screenType);
  }

  /*This method calls on drop event from welcome and thankYou screen*/
  dropScreen(event, screenSpace: string) {
    event.preventDefault();
    const type = event.dataTransfer.getData('screenType');
    if (screenSpace === type) {
      this.enableScreen(screenSpace);
      this.navigateToScreen(screenSpace);
    }
  }

  /*This method enable screen based on type*/
  enableScreen(type): void {
    if (type === 'welcome') {
      this.isWelcomeScreen = true;
    } else if (type === 'thankyou') {
      this.isThankYouScreen = true;
    }
  }

  /*This method navigate to frame-screen page on the basis of screenType*/
  navigateToScreen(screenType: string): void {
    setTimeout(() => {
      this.router.navigate(['workspace/form/screen', screenType]);
    }, 2000);
  }

}
