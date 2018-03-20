import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { User } from '../model/user';
import { UserService } from '../user.service';


@Component({
  selector: 'user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent {

  constructor(private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  newSubmit(user: User): void {
    this._userService.registerNewUser(user)
    .subscribe(() => {
      alert('El contacto se ha creado correctamente :-)');
      this._router.navigate(['/new_dog/oeoeoeoeoe']);
  });
  }
}
