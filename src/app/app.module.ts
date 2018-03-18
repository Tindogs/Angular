import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

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
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

import { DogsService } from './dogs.service'
import { UploadsService } from './uploads.service'

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserSignupComponent,
    DogsRegisterComponent,
    LoginFormComponent,
    SignupFormComponent,
    DogRegisterFormComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AppRoutingModule    
  ],
  providers: [DogsService,
              UploadsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
