import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '../model/user';
import { UploadsService } from '../uploads.service';
import { UsersService } from '../users.service'
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'user-update-form',
  templateUrl: './user-update-form.component.html',
  styleUrls: ['./user-update-form.component.css']
})
export class UserUpdateFormComponent implements OnInit, OnDestroy {

  photoUrl: string = "./../assets/No_Image.png";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  //Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
  //passwordPattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
  userServiceSubscription: Subscription;

  @Output() newUpdateUser = new EventEmitter<User>();
  user : User;

  constructor(
    private _uploads: UploadsService,
    private _router : Router,
    private _usersService: UsersService) { }

  ngOnInit() {
    this.userServiceSubscription = this._usersService.getUserProfile()
                      .subscribe(user => {
                        this.user = user;
                        console.log(user)
                      })
  }

  ngOnDestroy() {
    this.userServiceSubscription.unsubscribe();
  }

  updateUser(updateForm: FormGroup): void {
    if( this.photoUrl == "./../assets/No_Image.png") {
      updateForm.value.photo = []
    } else {
      updateForm.value.photo = [this.photoUrl]
    }

    this.newUpdateUser.emit(updateForm.value);
    updateForm.reset();
  }

  uploadFile($event) {
    const file = $event.target.files[0];
    const filePath = file.lastModified + file.name;
    this._uploads.uploadPhoto(filePath,file)
        .subscribe( photoUrl => this.photoUrl =  photoUrl )    
  }

}
