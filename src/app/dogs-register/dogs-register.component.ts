import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { DogsService } from '../dogs.service'

import { Dog } from '../model/dog'
@Component({
  selector: 'dogs-register',
  templateUrl: './dogs-register.component.html',
  styleUrls: ['./dogs-register.component.css']
})

export class DogsRegisterComponent implements OnInit {

  /* Esta lista tiene que venir del servicio dogs */
  breeds: string[];
  userId: string;

  constructor(private dogService: DogsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.breeds = this.dogService.getDogsBreed()
  }

  newDogSubmit($event) {
    var purebreed = ($event.value.purebreed == 'true');
    const dog = new Dog("",
                $event.value.dogAge,
                $event.value.dogBreed,
                purebreed,
                $event.value.dogColor,
                {},
                [],
                $event.value.description,
                $event.value.photos
              )
    /* 
       Aquí iría la llamada al servicio 
       enviandole el perro que vamos a añadir 
    */
   this.dogService.registerNewDog(this.userId,dog)
   
    
  }


}
