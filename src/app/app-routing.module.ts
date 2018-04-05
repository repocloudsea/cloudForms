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
  {path: 'workspace/forms/:id/questions', component: NewFormComponent},
  {path: 'workspace/forms/:id/screen/welcome', component: FrameWelcomeScreenComponent},
  {path: 'workspace/forms/:id/screen/thankyou', component: FrameThankyouScreenComponent},
  {path: 'workspace/forms/:id/questions/shortText/:order', component: FrameShortQuestionComponent},
  {path: 'workspace/forms/:id/questions/longText/:order', component: FrameLongQuestionComponent},
  {path: 'workspace/forms/:id/questions/dropdown/:order', component: FrameDropdownQuestionComponent},
  {path: 'workspace/forms/:id/questions/date/:order', component: FrameDateQuestionComponent},
  {path: 'workspace/forms/:id/questions/legal/:order', component: FrameLegalQuestionComponent},
  {path: 'workspace/forms/:id/questions/yesNo/:order', component: FrameYesNoQuestionComponent},
  {path: 'workspace/forms/:id/questions/number/:order', component: FrameNumberQuestionComponent},
  {path: 'workspace/forms/:id/questions/email/:order', component: FrameEmailQuestionComponent},
  {path: 'workspace/forms/:id/questions/rating/:order', component: FrameRatingQuestionComponent},
  {path: 'workspace/forms/:id/questions/multipleChoice/:order', component: FrameMultichoiceQuestionComponent},
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
