import { Component, Input, OnInit } from '@angular/core';
import { Dog } from '../model/dog';
import { UsersService } from '../users.service';
import { ActivatedRoute, ParamMap } from '@angular/router'


@Component({
  selector: 'dog-matched',
  templateUrl: './dog-matched.component.html',
  styleUrls: ['./dog-matched.component.css']
})
export class DogMatchedComponent implements OnInit {

  @Input() dogsToMatch: Dog[];
  @Input() dog: Dog;
  @Input() userId: string;
  @Input() dog_id: string;

  constructor(private _userService: UsersService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.userId = this._userService.getUserId();
    this.dog_id = this.route.snapshot.paramMap.get('id');
  }

}
