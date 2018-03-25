import { Component, OnInit } from '@angular/core';

import { User } from '../model/user'
import { UsersService } from '../users.service'

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  user: User;
  constructor(private _usersService: UsersService) { }

  ngOnInit() {
    this._usersService.getUserProfile()
                      .subscribe(user => {
                        this.user = user
                      })
  }

}
