import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, ROUTES } from '@angular/router';
import { SignInComponent } from '../sign-in/sign-in.component';
import { HomeComponent } from '../home/home.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';



const appRoutes: Routes = [  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'aboutUs/whyResonance', component: ContactUsComponent },
  { path: 'aboutUs/ourMission', component: ContactUsComponent },
  { path: 'ourCourses/Foundation', component: ContactUsComponent },
  { path: 'ourCourses/IIT', component: ContactUsComponent },
  { path: 'ourCourses/NEET', component: ContactUsComponent },
  { path: 'ourCourses/LongTerm', component: ContactUsComponent },
  { path: 'achievements/JEEResults', component: ContactUsComponent },
  { path: 'achievements/EAMCET', component: ContactUsComponent },
  { path: 'campusLife/Labs', component: ContactUsComponent },
  { path: 'campusLife/Library', component: ContactUsComponent },
  { path: 'campusLife/boardingFacilities', component: ContactUsComponent },
  { path: 'campusLife/foodAndHealth', component: ContactUsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'signIn', component: SignInComponent },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
