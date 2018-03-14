import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { environment } from '../environments/environment.1';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { DogsRegisterComponent } from './dogs-register/dogs-register.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { DogRegisterFormComponent } from './dog-register-form/dog-register-form.component';

import { DogsService } from './dogs.service'

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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule
  ],
  providers: [DogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
