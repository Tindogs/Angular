import { Component, Input, OnInit } from '@angular/core';
import { User } from '../model/user'
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  constructor(
    private _usersService: UsersService,
    private _router: Router,
    private _modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  UpdateUserSubmit(user: User, userUpdateModal: NgbModal): void {
    this._usersService.updateUser(user)
    .subscribe((user) => {
      //alert('El contacto se ha actualizado correctamente :-)');
      this._modalService.open(userUpdateModal, { centered: true });
      this._router.navigate(['/user_dashboard']);
  });
  }

}
