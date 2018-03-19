import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { DogsRegisterComponent } from './dogs-register/dogs-register.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { DogRegisterFormComponent } from './dog-register-form/dog-register-form.component';

import { UsersService } from './users.service';


@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserSignupComponent,
    DogsRegisterComponent,
    LoginFormComponent,
    SignupFormComponent,
    DogRegisterFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
