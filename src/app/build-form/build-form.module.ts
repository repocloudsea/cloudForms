import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import { NewFormComponent } from './new-form/new-form.component';
import { FrameQuestionComponent } from './frame-question/frame-question.component';
import { FrameShortQuestionComponent } from './frame-short-question/frame-short-question.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FrameLongQuestionComponent } from './frame-long-question/frame-long-question.component';
import { FrameDropdownQuestionComponent } from './frame-dropdown-question/frame-dropdown-question.component';
import { FrameDateQuestionComponent } from './frame-date-question/frame-date-question.component';
import { FrameLegalQuestionComponent } from './frame-legal-question/frame-legal-question.component';
import { FrameYesNoQuestionComponent } from './frame-yesno-question/frame-yesno-question.component';
import { FrameNumberQuestionComponent } from './frame-number-question/frame-number-question.component';
import { FrameEmailQuestionComponent } from './frame-email-question/frame-email-question.component';
import { FrameWelcomeScreenComponent } from './frame-welcome-screen/frame-welcome-screen.component';
import { FrameThankyouScreenComponent } from './frame-thankyou-screen/frame-thankyou-screen.component';
import { FrameRatingQuestionComponent } from './frame-rating-question/frame-rating-question.component';
import { FrameMultichoiceQuestionComponent } from './frame-multichoice-question/frame-multichoice-question.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    NewFormComponent,
    FrameQuestionComponent,
    FrameShortQuestionComponent,
    FrameLongQuestionComponent,
    FrameDropdownQuestionComponent,
    FrameDateQuestionComponent,
    FrameLegalQuestionComponent,
    FrameYesNoQuestionComponent,
    FrameNumberQuestionComponent,
    FrameEmailQuestionComponent,
    FrameWelcomeScreenComponent,
    FrameThankyouScreenComponent,
    FrameRatingQuestionComponent,
    FrameMultichoiceQuestionComponent
  ]
})
export class BuildFormModule { }
