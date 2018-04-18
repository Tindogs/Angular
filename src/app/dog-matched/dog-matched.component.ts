import { Component, Input, OnInit } from '@angular/core';
import { Dog } from '../model/dog';
import { UsersService } from '../users.service';

@Component({
  selector: 'dog-matched',
  templateUrl: './dog-matched.component.html',
  styleUrls: ['./dog-matched.component.css']
})
export class DogMatchedComponent implements OnInit {

  @Input() dogsToMatch: Dog[];
  @Input() dog: Dog;
  @Input() userId: string;

  constructor(private _userService: UsersService) { }

  ngOnInit() {
    console.log(this.dog);
    this.userId = this._userService.getUserId();
  }

}
