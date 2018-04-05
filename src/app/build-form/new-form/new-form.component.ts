import { Component, OnInit } from '@angular/core';
import {FormService} from '../../shared/services/form.service';
import {QuestionBase} from '../../shared/models/question-base.model';
import {CloudForm} from '../../shared/models/cloud-form.model';
import {ControlType} from '../../shared/enums/control-type.enum';
import {ControlIcons} from '../../shared/constants/control-icon.constant';
import {isNullOrUndefined} from 'util';
import {ActivatedRoute, Router} from '@angular/router';
import {WelcomeScreen} from '../../shared/models/welcome-screen.model';
import {ThankyouScreen} from '../../shared/models/thankyou-screen.model';
import {Element} from '../../shared/models/element.model';
import {NavigationService} from '../../shared/services/navigation.service.service';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent implements OnInit {
  questions: QuestionBase<any>[];
  elements: Element<any>[];
  controlType = ControlType;
  controlIcons = ControlIcons;
  isWelcomeScreen = false;
  isThankYouScreen = false;
  formId: string;

  constructor(private formService: FormService,
              private router: Router,
              private route: ActivatedRoute,
              private navigate: NavigationService) {
    this.formId = this.route.snapshot.paramMap.get('id');
    this.elements = [];
  }

  ngOnInit() {
    this.formService.getForm(this.formId)
      .subscribe((cloudForm: CloudForm) => {
        if (cloudForm.elements && cloudForm.elements.length > 0) {
          this.elements = cloudForm.elements;
        }
      }, (error) => {
        console.log('GetForm service failing');
      });
  }

  /*This method construct question on the basis of controlType and navigate to frame question page*/
  frameQuestion(controlIndex: number): void {
    if (controlIndex) {
      const elementLength = this.elements.length + 1;
      const element = new Element({type: ControlType[controlIndex], order: elementLength});
      this.elements.push(element);
      this.navigate.goToFrameQuestion(this.formId, element.type, element.order);
    }
  }

  /*This method returns icon class name base on the controlType*/
  setControlIcon(controlType: string): string {
    return this.controlIcons[controlType] || this.controlIcons.shortText;
  }

  /*This method calls on drag start for questions*/
  drag(event, controlIndex: number) {
    const elementLength = this.elements.length + 1;
    const element = new Element({type: ControlType[controlIndex], order: elementLength});
    event.dataTransfer.setData('object', JSON.stringify(element));
  }

  /*This method calls on drop event from questions*/
  drop(event, index?: number) {
    event.preventDefault();
    const json = event.dataTransfer.getData('object');
    if (json) {
      const element = JSON.parse(json);
      if (!isNullOrUndefined(index)) {
        console.log('Element Index: ' + index);
        this.elements.splice(index, 0, element);
      } else {
        this.elements.push(element);
      }
      this.navigate.goToFrameQuestion(this.formId, element.type, element.order);
    }
  }

  allowDrop(ev) {
    ev.preventDefault();
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
      this.router.navigate(['workspace/forms', this.formId, 'screen', screenType]);
    }, 2000);
  }

}
