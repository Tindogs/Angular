import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Router } from '@angular/router';

import { Login } from '../model/login';
import { User } from '../model/user';
import { UsersService } from '../users.service';

@Component({
  selector: 'user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  

  constructor( private _userService: UsersService,
               private router: Router) { }

  doLogin(login: Login): void {
    console.log("UserLoginComponent:: doLogin" + login);
     this._userService.loginUser(login)
        .subscribe(() => {
        //alert('El contacto se ha creado correctamente :-)');        
        this.router.navigate(['/user_detail']);

      });
  }
}
