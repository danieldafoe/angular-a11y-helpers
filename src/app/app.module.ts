import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import { AngularA11yHelpersModule } from 'angular-a11y-helpers';
import { PreviewFocusFirstComponent } from './preview-focus-first/preview-focus-first.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    PreviewFocusFirstComponent,
    WelcomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AngularA11yHelpersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
