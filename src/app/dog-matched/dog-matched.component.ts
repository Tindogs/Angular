import { Component, Input, OnInit } from '@angular/core';
import { Dog } from '../model/dog';

@Component({
  selector: 'dog-matched',
  templateUrl: './dog-matched.component.html',
  styleUrls: ['./dog-matched.component.css']
})
export class DogMatchedComponent implements OnInit {

  @Input() dogsToMatch: Dog[];
  @Input() dog: Dog;

  constructor() { }

  ngOnInit() {
  }

}
