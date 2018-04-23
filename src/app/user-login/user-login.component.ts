import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Router } from '@angular/router';

import { Login } from '../model/login';
import { User } from '../model/user';
import { UsersService } from '../users.service';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  user: User;
  modal: NgbModalRef;

  constructor( private _usersService: UsersService,
               private router: Router,
              private _modalService: NgbModal) { }

  doLogin(login: Login, loginErrorModal, loginOkModal): void {
     this._usersService.loginUser(login)
      .subscribe(
        user => { 
          console.log(user);
          this.user = user;
          this.openloginOkModal(loginOkModal);
        },
        err => {
          this.openModal(loginErrorModal);
        }
      );
  }

  openloginOkModal(loginOkModal) {
    this.modal = this._modalService.open(loginOkModal, { centered: true });
    //    this.router.navigate([`/user_dashboard/`]);
    
  }

  closeloginOkModal(){
    this.modal.close();
    this.router.navigate([`/user_dashboard/`]);
  }

  openModal(loginErrorModal) {
    this._modalService.open(loginErrorModal, { centered: true });
  }
}
