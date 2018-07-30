import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularA11yHelpersModule } from 'angular-a11y-helpers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularA11yHelpersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
