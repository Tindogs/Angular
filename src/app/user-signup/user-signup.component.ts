import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { User } from '../model/user';
import { UsersService } from '../users.service';


@Component({
  selector: 'user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent {

  constructor(private _usersService: UsersService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  newSubmit(user: User): void {
    console.log("Usuario creado en NewSubmit: " + user)
    this._usersService.registerNewUser(user)
    .subscribe((user) => {
      alert('El contacto se ha creado correctamente :-)');
      this._router.navigate([`/new_dog/${user.id}`]);
  });
  }
}
