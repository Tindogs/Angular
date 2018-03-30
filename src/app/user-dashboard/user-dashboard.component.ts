import { Component, OnInit } from '@angular/core';
import { Dog } from '../model/dog';

import { Router } from '@angular/router';
import { User } from '../model/user'
import { UsersService } from '../users.service'

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  
  private _perretes: Dog[];
  user: User;

  constructor(private router: Router,
              private _usersService: UsersService) {
    
                this._perretes = [
                  new Dog("1","Bobby",10,"Snouzer",true,"Brown",null,null,"Es muy cariñoso",null),
                  new Dog("2","Perry",6,"Cocker",true,"White&Black",null,null,"Es muy gruñón",null)
                ]
               }

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
