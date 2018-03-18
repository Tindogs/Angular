import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { UserLoginComponent } from './user-login/user-login.component'
import { UserSignupComponent } from './user-signup/user-signup.component'
import { DogsRegisterComponent } from './dogs-register/dogs-register.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const appRoutes: Routes = [
  { path: 'login', component: UserLoginComponent },
  { path: 'new_user', component: UserSignupComponent },
  { path: 'new_dog/:id', component: DogsRegisterComponent }, // :id Es la referencia al usuario que quiere añadir el perro
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,
      { enableTracing: true }) 
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
