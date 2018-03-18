import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  @Output() newRegister = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  /*
  Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
  */
  userSignUp(signUpForm) {
    console.log("Entro")
    this.newRegister.emit(signUpForm)
  }
}
