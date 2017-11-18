import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutUsComponent} from './about-us/about-us.component';
import {HomeComponent} from './home/home.component';
import {CertificationComponent} from './certification/certification.component';
import {ContactComponent} from './contact/contact.component';
import {JourneyComponent} from './journey/journey.component';

const routes: Routes = [
 {path: 'Home', component: HomeComponent},
  {path: 'About', component: AboutUsComponent},
  {path: 'Certification', component: CertificationComponent},
  {path: 'Contact', component: ContactComponent},
  {path: 'Journey', component: JourneyComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'Home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
