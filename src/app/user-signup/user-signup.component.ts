import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { User } from '../model/user';
import { UsersService } from '../users.service';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent {

  constructor(private _usersService: UsersService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _modalService: NgbModal) { }

  newSubmit(user: User, userSignupModal: NgbModal): void {
    console.log("Usuario creado en NewSubmit: " + user)
    this._usersService.registerNewUser(user)
    .subscribe((user) => {
      // alert('El contacto se ha creado correctamente :-)');
      this._modalService.open(userSignupModal, { centered: true });
      this._router.navigate([`/new_dog/${user.id}`]);
  });
  }
}
