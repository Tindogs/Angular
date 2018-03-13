import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { Dog } from '../model/dog'

@Component({
  selector: 'dogs-register',
  templateUrl: './dogs-register.component.html',
  styleUrls: ['./dogs-register.component.css']
})
export class DogsRegisterComponent implements OnInit {
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
