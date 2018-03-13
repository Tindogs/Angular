import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { Dog } from '../model/dog'

@Component({
  selector: 'dog-register-form',
  templateUrl: './dog-register-form.component.html',
  styleUrls: ['./dog-register-form.component.css']
})
export class DogRegisterFormComponent implements OnInit {
  
  form: FormGroup;
  @Output() newDogRegister = new EventEmitter<FormGroup>();
  constructor() { }

  ngOnInit() {
  }

  createNewDog(aform) {
    //const new_dog = new Dog()
    this.form = aform.form
    this.newDogRegister.emit(this.form)
    /*this.form = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    });*/
  }

  click() {
    console.log("Click")
  }
  
}
