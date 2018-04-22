import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '../model/user';

import { UploadsService } from '../uploads.service';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit{

  photoUrl: string = "./../assets/No_Image.png";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  //Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
  //passwordPattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"

  @Output() newRegister = new EventEmitter<User>();

  constructor(private uploads: UploadsService) { }

  ngOnInit(){
  }

  userSignUp(signUpForm: FormGroup): void {

    if( this.photoUrl == "./../assets/No_Image.png") {
      signUpForm.value.photo = []
    } else {
      signUpForm.value.photo = [this.photoUrl]
    }

    this.newRegister.emit(signUpForm.value);
    signUpForm.reset();
  }

  uploadFile($event) {
    const file = $event.target.files[0];
    const filePath = file.lastModified + file.name;
    this.uploads.uploadPhoto(filePath,file)
        .subscribe( photoUrl => this.photoUrl =  photoUrl )    
  }
}
