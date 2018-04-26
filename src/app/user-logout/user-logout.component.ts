import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'user-logout',
  templateUrl: './user-logout.component.html',
  styleUrls: ['./user-logout.component.css']
})
export class UserLogoutComponent implements OnInit {

  constructor(
    private _usersService: UsersService
  ) { }

  ngOnInit() {
    this._usersService.removeId();
    this._usersService.removeWebToken();
  }

}
