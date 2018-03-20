import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '../model/user';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  @Output() newRegister = new EventEmitter<User>();

  /*
  Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
  */
  userSignUp(signUpForm: FormGroup): void {
    let user = User.newFromJson(signUpForm.value);
    this.newRegister.emit(user);
    signUpForm.reset();
  }
}
