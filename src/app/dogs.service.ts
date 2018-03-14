import { Injectable } from '@angular/core';
import { Dog } from './model/dog';

@Injectable()
export class DogsService {

  constructor() { }

  registerNewDog(dog: Dog) {
    console.log(dog)
  }

}
