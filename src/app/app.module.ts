import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularA11yHelpersModule } from 'angular-a11y-helpers';
import { WelcomeComponent } from './welcome/welcome.component';
import { PreviewFocusFirstComponent } from './preview-focus-first/preview-focus-first.component';
import { PreviewAnnouncerServiceComponent } from './preview-announcer-service/preview-announcer-service.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PreviewFocusFirstComponent,
    PreviewAnnouncerServiceComponent
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
