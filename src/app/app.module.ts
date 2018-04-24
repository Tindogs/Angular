import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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

import { UserUpdateComponent } from './user-update/user-update.component';
import { UserUpdateFormComponent } from './user-update-form/user-update-form.component';
import { DogToMatchDirective } from './dog-to-match.directive';
import { DogMatchedComponent } from './dog-matched/dog-matched.component';
import { DogMatchesComponent } from './dog-matches/dog-matches.component';
import { DogMatchedDetailComponent } from './dog-matched-detail/dog-matched-detail.component';
import { DogMatchedDashboardComponent } from './dog-matched-dashboard/dog-matched-dashboard.component';




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
    DogListComponent,
    UserUpdateComponent,
    UserUpdateFormComponent,
    DogToMatchDirective,
    DogMatchedComponent,
    DogMatchesComponent,
    DogMatchedDetailComponent,
    DogMatchedDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    NgbModule.forRoot(),

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AppRoutingModule    
  ],
  providers: [UsersService,
              DogsService,
              UploadsService],
  bootstrap: [AppComponent],
  entryComponents: [DogMatchedComponent]
})
export class AppModule { }
