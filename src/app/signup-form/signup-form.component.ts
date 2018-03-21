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

  @Output() newRegister = new EventEmitter<User>();

  constructor(private uploads: UploadsService) { }

  ngOnInit(){

  }
  /*
  Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
  */
  userSignUp(signUpForm: FormGroup): void {

    if( this.photoUrl == "./../assets/No_Image.png") {
      signUpForm.value.photos = []
    } else {
      signUpForm.value.photos = [this.photoUrl]
    }

    let user = User.newFromJson(signUpForm.value);
    this.newRegister.emit(user);
    signUpForm.reset();
  }

  uploadFile($event) {
    const file = $event.target.files[0];
    const filePath = file.lastModified + file.name;
    this.uploads.uploadPhoto(filePath,file)
        .subscribe( photoUrl => this.photoUrl =  photoUrl )    
  }
}
