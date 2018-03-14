import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { AngularFireStorage } from 'angularfire2/storage';

import { Dog } from '../model/dog'

@Component({
  selector: 'dog-register-form',
  templateUrl: './dog-register-form.component.html',
  styleUrls: ['./dog-register-form.component.css']
})
export class DogRegisterFormComponent implements OnInit {
  
  form: FormGroup;
  downloadURL: Observable<string>;
  photoUrl: string;
  @Output() newRegister = new EventEmitter<any>();

  constructor(private storage: AngularFireStorage) { }

  ngOnInit() {
  }

  createNewDog(aform) {
    console.log(aform)
    this.form = aform.form
    this.form.value.photos = [this.photoUrl]
    this.newRegister.emit(this.form)

  }

  uploadFile($event) {
    
    
    const file = $event.target.files[0];
    const filePath = file.lastModified + file.name;
    const task = this.storage.upload(filePath, file);
    
    // get notified when the download URL is available
    
    this.downloadURL = task.downloadURL();
    task.downloadURL().subscribe(x => this.photoUrl =  x)

  }
  
}
