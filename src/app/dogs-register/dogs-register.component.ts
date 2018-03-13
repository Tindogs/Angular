import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Dog } from '../model/dog'
@Component({
  selector: 'dogs-register',
  templateUrl: './dogs-register.component.html',
  styleUrls: ['./dogs-register.component.css']
})
export class DogsRegisterComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {

  }

  newDogSubmit($event) {
    var isTrueSet = ($event.value.purebreed == 'true');
    const dog = new Dog("",
                $event.value.dogAge,
                $event.value.dogBreed,
                isTrueSet,
                $event.value.dogColor,
                {},
                [],
                $event.value.description,
                []
              )
    /* 
       Aquí iría la llamada al servicio 
       enviandole el perro que vamos a añadir 
    */
    
  }


}
