import { Component, OnInit, OnDestroy } from '@angular/core';
import { Dog } from '../model/dog';

import { Router } from '@angular/router';
import { User } from '../model/user'
import { UsersService } from '../users.service'
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit, OnDestroy {
  
  private _perretes: Dog[];
  user: User;
  userServiceSubscription: Subscription;


  constructor(
    private router: Router,
    private _usersService: UsersService) { }

  ngOnInit() {
    this.userServiceSubscription = this._usersService.getUserProfile()
                      .subscribe(user => {
                        this.user = user;
                        this._perretes = this.user.dogs;
                        console.log(this.user.photo)
                      })
  }

  ngOnDestroy() {
    this.userServiceSubscription.unsubscribe();
  }

  addNewDog($event) {
    this.router.navigate([`new_dog/${this.user.id}`])
  }

  updateUser($event) {
    this.router.navigate([`user_update/${this.user.id}`])
  }

}
