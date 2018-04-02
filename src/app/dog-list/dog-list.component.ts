import { Component, Input, OnInit } from '@angular/core';
import { User } from '../model/user';
import { Dog } from '../model/dog';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {

  @Input() listado: Dog;

  photo_user: string[] = ["./../assets/No_Image.png"]

  ngOnInit() {
    if(this.listado.photos) {
        this.photo_user = this.listado.photos
    }
  }

}
