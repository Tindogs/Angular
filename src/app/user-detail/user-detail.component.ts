import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



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

  photo_user: string = "./../assets/No_Image.png";
  constructor() { }
    
  ngOnInit() {
    if(this.user.photo) {
        this.photo_user = this.user.photo
    }
  }

  newDogClick($event) {
    this.addNewDog.emit()    
  }

}
