import { Injectable } from '@angular/core';
import { Dog } from './model/dog';

@Injectable()
export class DogsService {

  constructor() { }

  registerNewDog(dog: Dog) {
    JSON.stringify(dog)
    console.log(dog)
  }

}
