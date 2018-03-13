import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { Dog } from '../model/dog'

@Component({
  selector: 'dog-register-form',
  templateUrl: './dog-register-form.component.html',
  styleUrls: ['./dog-register-form.component.css']
})
export class DogRegisterFormComponent implements OnInit {
  form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  createNewDog(aform) {
    //const new_dog = new Dog()
    console.log(aform)
    /*this.form = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    });*/
  }
  
}
