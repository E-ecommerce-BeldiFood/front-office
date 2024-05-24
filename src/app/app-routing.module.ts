import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ProfileComponent } from './components/profile/profile.component';

/*children: [{
    

}]*/

const routes: Routes = [
  { path: '', component: LandingPageComponent , },
  {path:'Login', component: LoginComponent },

  {path:'Register', component: RegisterComponent},
  {path:'ResetPassword', component: ResetPasswordComponent },
  {path:'Profile', component: ProfileComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }