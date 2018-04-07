import { Component, Input, OnInit } from '@angular/core';
import { User } from '../model/user'
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  constructor(
    private _usersService: UsersService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  UpdateUserSubmit(user: User): void {
    this._usersService.updateUser(user)
    .subscribe((user) => {
      alert('El contacto se ha actualizado correctamente :-)');
      this._router.navigate(['/user_dashboard']);
  });
  }

}
