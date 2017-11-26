import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { WorkspaceComponent } from './core/workspace/workspace.component';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import {BuildFormModule} from './build-form/build-form.module';
import {ShareFormModule} from './share-form/share-form.module';
import {AnalyzeModule} from './analyze/analyze.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkspaceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
    BuildFormModule,
    ShareFormModule,
    AnalyzeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
