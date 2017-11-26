import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyzeDashboardComponent } from './analyze-dashboard/analyze-dashboard.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [AnalyzeDashboardComponent]
})
export class AnalyzeModule { }
