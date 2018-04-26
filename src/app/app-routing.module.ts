import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { UserLoginComponent } from './user-login/user-login.component'
import { UserLogoutComponent } from './user-logout/user-logout.component'
import { UserSignupComponent } from './user-signup/user-signup.component'
import { DogsRegisterComponent } from './dogs-register/dogs-register.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { DogMatchComponent } from './dog-match/dog-match.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { DogMatchedDashboardComponent } from './dog-matched-dashboard/dog-matched-dashboard.component';

const appRoutes: Routes = [
  { path: 'login', component: UserLoginComponent },
  { path: 'logout', component: UserLogoutComponent },
  { path: 'new_user', component: UserSignupComponent },
  { path: 'new_dog/:id', component: DogsRegisterComponent }, // :id Es la referencia al usuario que quiere añadir el perro
  { path: 'user_dashboard', component:  UserDashboardComponent},
  { path: 'dogs_match/:id', component: DogMatchComponent }, // :id Del perro que va buscando match
  { path: 'user_update/:id', component: UserUpdateComponent }, // :id del usuario a actualizar
  { path: 'dogs_matched_dashboard/:ownerId/:dogId', component: DogMatchedDashboardComponent }, // :id del perro matcheado y id del dueño
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes/*,
    { enableTracing: true }*/) 
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
