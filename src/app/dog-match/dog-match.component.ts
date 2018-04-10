import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

import { DogsService } from '../dogs.service'

import { Dog } from '../model/dog'

@Component({
  selector: 'dog-match',
  templateUrl: './dog-match.component.html',
  styleUrls: ['./dog-match.component.css']
})
export class DogMatchComponent implements OnInit {

  dog: Dog;
  dogsToMatch: Dog[];
  dog_id: string;
  constructor(private _dogsService: DogsService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.dog = new Dog(this.route.snapshot.paramMap.get('id'),"Doogo",3,"oeoe",true,"verde",{},[],"Lorem ippsum",[]);
    this.dogsToMatch = [
      new Dog("","Matched Dog1",4,"",true,"verde",{},[],"loreoeoeoeoeo moemoe mo",["./../assets/No_Image.png"]),
      new Dog("","Matched Dog2",7,"",true,"marrón",{},[],"Lorem ipsum perrete",["./../assets/No_Image.png"])
    ]
    console.log(this.dogsToMatch)
  }

  onDislike(event) {
    this.getNextDog()
  }

  onLike(event) {
    this.getNextDog()
  }

  getNextDog() {

  }

}
