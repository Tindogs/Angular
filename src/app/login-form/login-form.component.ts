import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Login } from '../model/login';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent{
  
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  @Output() loginClick = new EventEmitter<Login>();

  userLogin(loginForm: FormGroup):void { 
    console.log("LoginFormComponent:: userLogin" + loginForm);
    let login = Login.newFromJson(loginForm.value);
    this.loginClick.emit(login);
    loginForm.reset();
  }
}
