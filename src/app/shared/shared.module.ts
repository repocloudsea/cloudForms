import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {CommonUtilsService} from './services/common-utils.service';
import {FormService} from './services/form.service';
import {QuestionTypePipe} from './pipes/question-type.pipe';
import { FilterByPipe } from './pipes/filter-by.pipe';
import {HttpErrorHandler} from './services/http-error-handler.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SearchBarComponent,
    QuestionTypePipe,
    FilterByPipe
  ],
  declarations: [
    SearchBarComponent,
    QuestionTypePipe,
    FilterByPipe
  ],
  providers: [
    CommonUtilsService,
    FormService,
    HttpErrorHandler
  ]
})
export class SharedModule { }
