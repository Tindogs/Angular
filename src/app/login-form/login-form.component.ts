import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Login } from '../model/login';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent{

  @Output() loginClick = new EventEmitter<Login>();

  userLogin(loginForm: FormGroup):void { 
    console.log("LoginFormComponent:: userLogin" + loginForm);
    let login = Login.newFromJson(loginForm.value);
    this.loginClick.emit(login);
    loginForm.reset();
  }
}
