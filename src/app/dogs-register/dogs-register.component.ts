import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { DogsService } from '../dogs.service'

import { Dog } from '../model/dog'
@Component({
  selector: 'dogs-register',
  templateUrl: './dogs-register.component.html',
  styleUrls: ['./dogs-register.component.css']
})
export class DogsRegisterComponent implements OnInit {
 
  constructor(private _dogService: DogsService ) { }

  ngOnInit() {

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
   this._dogService.registerNewDog(dog)
    
  }


}
