import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';

import { UsersService } from '../users.service'
import { User } from '../model/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() user : User
  constructor(private router: Router) { }
    
  ngOnInit() {
  }

  newDogClick($event) {
    console.log("click")
    
    /* Esto tiene que ir en el componente padre */
    this.router.navigate([`new_dog/${this.user.id}`])
  }

}
