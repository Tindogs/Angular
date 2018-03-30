import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { DogsRegisterComponent } from './dogs-register/dogs-register.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { DogRegisterFormComponent } from './dog-register-form/dog-register-form.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { DogMatchComponent } from './dog-match/dog-match.component'
import { DogListComponent } from './dog-list/dog-list.component';

import { UsersService } from './users.service'
import { DogsService } from './dogs.service'
import { UploadsService } from './uploads.service';




@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserSignupComponent,
    DogsRegisterComponent,
    LoginFormComponent,
    SignupFormComponent,
    DogRegisterFormComponent,
    PageNotFoundComponent,
    UserDetailComponent,
    UserDashboardComponent,
    DogMatchComponent,
    DogListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AppRoutingModule    
  ],
  providers: [UsersService,
              DogsService,
              UploadsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
