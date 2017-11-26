import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateFormComponent } from './generate-form/generate-form.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [GenerateFormComponent]
})
export class ShareFormModule { }
