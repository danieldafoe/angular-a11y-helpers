import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PreviewFocusFirstComponent } from './preview-focus-first/preview-focus-first.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: WelcomeComponent },
  { path: 'directives/focus-first', component: PreviewFocusFirstComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
