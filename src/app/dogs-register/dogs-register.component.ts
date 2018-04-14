import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { DogsService } from '../dogs.service'

import { Dog } from '../model/dog'
import { Query } from '../model/query'

@Component({
  selector: 'dogs-register',
  templateUrl: './dogs-register.component.html',
  styleUrls: ['./dogs-register.component.css']
})

export class DogsRegisterComponent implements OnInit {

  /* Esta lista tiene que venir del servicio dogs */
  breeds: string[];
  userId: string;
  queryDog: Query;

  constructor(private _dogsService: DogsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.breeds = this._dogsService.getDogsBreed()
  }

  newDogSubmit($event) {
    var purebreed = ($event.value.purebreed == 'true');
    this.queryDog = new Query(1,1,true, $event.value.dogBreed);
    const dog = new Dog("",
                $event.value.dogName,
                $event.value.dogAge,
                $event.value.dogBreed,
                purebreed,
                $event.value.dogColor,
                this.queryDog,
                [],
                $event.value.description,
                $event.value.photos
              );
              
   this._dogsService.registerNewDog(this.userId,dog)
   .subscribe(dog => {
     this.router.navigate(['/user_dashboard']);
   })
  }
}
