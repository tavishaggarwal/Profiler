import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutUsComponent} from './about-us/about-us.component';

const routes: Routes = [
 {
    path: 'Home',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {path: 'About', component: AboutUsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
