import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { OTPValidationComponent } from './otp-validation/otp-validation.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { SingupComponent } from './singup/singup.component';
import { HomeComponent } from './portal/home/home.component';
import { ChangePasswordComponent } from './portal/change-password/change-password.component';

const routes: Routes = [
  {path:'nav-bar',component:NavBarComponent}
  ,{path:'',component:LoginComponent}
  ,{path:'login',component:LoginComponent}
  ,{path:'forgot-password',component:ForgotPasswordComponent}
  ,{path:'otp-validation',component:OTPValidationComponent}
  ,{path:'singup',component:SingupComponent}
  ,{path:'newpassword',component:NewpasswordComponent}
  ,{path:'home',component:HomeComponent}
  ,{path:'home/change-password',component:ChangePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
