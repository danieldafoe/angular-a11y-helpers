import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { PreviewFocusFirstComponent } from './preview-focus-first/preview-focus-first.component';
import { PreviewAnnouncerServiceComponent } from './preview-announcer-service/preview-announcer-service.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: WelcomeComponent },
  { path: 'directives/focus-first', component: PreviewFocusFirstComponent },
  { path: 'services/announcer', component: PreviewAnnouncerServiceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
