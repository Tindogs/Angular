import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';


import { UploadsService } from '../uploads.service';

@Component({
  selector: 'dog-register-form',
  templateUrl: './dog-register-form.component.html',
  styleUrls: ['./dog-register-form.component.css']
})
export class DogRegisterFormComponent implements OnInit {
  
  dogRegisterForm: FormGroup;
  photoUrl: string = "./../assets/No_Image.png";

  @Input() dataDropdown: string[]

  @Output() newDogRegister = new EventEmitter<any>();

  constructor(private uploads: UploadsService) { }

  ngOnInit() {
  }

  createNewDog(aform) {
    var form = aform.form
    if( this.photoUrl == "./../assets/No_Image.png") {
      form.value.photos = []
    } else {
      form.value.photos = [this.photoUrl]
    }
    
    this.newDogRegister.emit(form)

  }

  uploadFile($event) {
    const file = $event.target.files[0];
    const filePath = file.lastModified + file.name;
    this.uploads.uploadPhoto(filePath,file)
        .subscribe( photoUrl => this.photoUrl =  photoUrl )    
  }
  
}
