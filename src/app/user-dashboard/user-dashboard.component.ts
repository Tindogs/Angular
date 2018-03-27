import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { User } from '../model/user'
import { UsersService } from '../users.service'

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  user: User;
  constructor(private router: Router,
              private _usersService: UsersService) { }

  ngOnInit() {
    this._usersService.getUserProfile()
                      .subscribe(user => {
                        this.user = user
                      })
  }

  addNewDog($event) {
    this.router.navigate([`new_dog/${this.user.id}`])
  }

}
