import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WorkspaceComponent } from './core/workspace/workspace.component';
import { NewFormComponent } from './build-form/new-form/new-form.component';
import {FrameQuestionComponent} from './build-form/frame-question/frame-question.component';
import {FrameShortQuestionComponent} from './build-form/frame-short-question/frame-short-question.component';
import {FrameLongQuestionComponent} from './build-form/frame-long-question/frame-long-question.component';
import {FrameDropdownQuestionComponent} from './build-form/frame-dropdown-question/frame-dropdown-question.component';
import {FrameDateQuestionComponent} from './build-form/frame-date-question/frame-date-question.component';
import {FrameLegalQuestionComponent} from './build-form/frame-legal-question/frame-legal-question.component';
import {FrameYesNoQuestionComponent} from './build-form/frame-yesno-question/frame-yesno-question.component';
import {FrameNumberQuestionComponent} from './build-form/frame-number-question/frame-number-question.component';
import {FrameEmailQuestionComponent} from './build-form/frame-email-question/frame-email-question.component';
import {FrameWelcomeScreenComponent} from './build-form/frame-welcome-screen/frame-welcome-screen.component';
import {FrameThankyouScreenComponent} from './build-form/frame-thankyou-screen/frame-thankyou-screen.component';
import {FrameRatingQuestionComponent} from './build-form/frame-rating-question/frame-rating-question.component';
import {FrameMultichoiceQuestionComponent} from './build-form/frame-multichoice-question/frame-multichoice-question.component';
import {GenerateFormComponent} from './share-form/generate-form/generate-form.component';
import {AnalyzeDashboardComponent} from './analyze/analyze-dashboard/analyze-dashboard.component';

const appRoutes: Routes = [
  {path: 'workspace', component: WorkspaceComponent},
  {path: 'workspace/form/questions', component: NewFormComponent},
  {path: 'workspace/form/screen/welcome', component: FrameWelcomeScreenComponent},
  {path: 'workspace/form/screen/thankyou', component: FrameThankyouScreenComponent},
  {path: 'workspace/form/questions/shortText', component: FrameShortQuestionComponent},
  {path: 'workspace/form/questions/longText', component: FrameLongQuestionComponent},
  {path: 'workspace/form/questions/dropdown', component: FrameDropdownQuestionComponent},
  {path: 'workspace/form/questions/date', component: FrameDateQuestionComponent},
  {path: 'workspace/form/questions/legal', component: FrameLegalQuestionComponent},
  {path: 'workspace/form/questions/yesNo', component: FrameYesNoQuestionComponent},
  {path: 'workspace/form/questions/number', component: FrameNumberQuestionComponent},
  {path: 'workspace/form/questions/email', component: FrameEmailQuestionComponent},
  {path: 'workspace/form/questions/rating', component: FrameRatingQuestionComponent},
  {path: 'workspace/form/questions/multipleChoice', component: FrameMultichoiceQuestionComponent},
  {path: 'share', component: GenerateFormComponent},
  {path: 'analyze/dashboard', component: AnalyzeDashboardComponent},
  {path: '', redirectTo: 'workspace', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
