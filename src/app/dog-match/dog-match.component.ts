import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

import { DogsService } from '../dogs.service'

import { Dog } from '../model/dog'

@Component({
  selector: 'app-dog-match',
  templateUrl: './dog-match.component.html',
  styleUrls: ['./dog-match.component.css']
})
export class DogMatchComponent implements OnInit {

  dog: Dog;
  matchedDog: Dog;
  dog_id: string;
  constructor(private _dogsService: DogsService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.dog = new Dog(this.route.snapshot.paramMap.get('id'),"Doogo",3,"oeoe",true,"verde",{},[],"Lorem ippsum",[]);
    this.matchedDog = new Dog("","",4,"",true,"verde",{},[],"loreoeoeoeoeo moemoe mo",["./../assets/No_Image.png"]);
  }

  onDislike(event) {
    this.getNextDog()
  }
  
  onLike(event) {
    /* Comprobar si el perro que acabamos de ver está en nuestro array like_from_others */    

    /* Aquí hay que llamar al servicio dogs y actualizar los datos del perro al que has hecho like */

    this.getNextDog()
  }

  getNextDog() {
    
  }

}
