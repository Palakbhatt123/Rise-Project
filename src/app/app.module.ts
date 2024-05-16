import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { OTPValidationComponent } from './otp-validation/otp-validation.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCard, MatCardModule} from '@angular/material/card';
import { SingupComponent } from './singup/singup.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './portal/home/home.component';
import {FullCalendarModule} from '@fullcalendar/angular';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { ChangePasswordComponent } from './portal/change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    ForgotPasswordComponent,
    OTPValidationComponent,
    SingupComponent,
    NewpasswordComponent,
    HomeComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    FullCalendarModule,
    NgxWebstorageModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
