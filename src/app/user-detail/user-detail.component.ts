import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UsersService } from '../users.service'
import { User } from '../model/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Output() addNewDog = new EventEmitter<any>();
  @Input() user : User;

  constructor(
  ) { }
    
  ngOnInit() {
  }

  newDogClick($event) {
    this.addNewDog.emit()    
  }

}
