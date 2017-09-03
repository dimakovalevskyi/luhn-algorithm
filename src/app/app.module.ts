import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MdInputModule, MdIconModule, MdProgressBarModule, MdToolbarModule, MdButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { PreviewComponent } from './preview/preview.component';
import { ProgressComponent } from './progress/progress.component';

import { ValuesService } from './values.service';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    PreviewComponent,
    ProgressComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdInputModule,
    MdIconModule,
    MdProgressBarModule,
    MdToolbarModule,
    MdButtonModule,
    FormsModule
  ],
  providers: [
    ValuesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
