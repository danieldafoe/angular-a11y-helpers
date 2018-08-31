import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { CommonModule } from '@angular/common';

import { AahFocusFirstDirective } from './directives/focus-first.directive';
import { AahAnnouncerComponent } from './components/announcer/announcer.component';

@NgModule({
  imports: [],
  declarations: [
    AahFocusFirstDirective,
    AahAnnouncerComponent
  ],
  exports: [
    AahFocusFirstDirective,
    AahAnnouncerComponent
  ],
  entryComponents: [AahAnnouncerComponent]
})
export class AngularA11yHelpersModule { }
