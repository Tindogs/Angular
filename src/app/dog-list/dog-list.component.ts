import { Component, Input, Output, OnInit, NgModule, EventEmitter } from '@angular/core';
import { User } from '../model/user';
import { Dog } from '../model/dog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DogsService } from '../dogs.service'
import { FormGroup } from '@angular/forms';
import { Query } from '../model/query';


@Component({
  selector: 'dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {

  @Output() newDogSettings = new EventEmitter<any>();
  @Output() newDogMatch = new EventEmitter<Dog>();
  @Input() listado: Dog;
  breeds: string[];
  dog: Dog
  dogId : string

  constructor(private _dogsService: DogsService,
    private _modalService: NgbModal) {

  }

  ngOnInit() {
    this.breeds = this._dogsService.getDogsBreed()
  }

  MatchDog(dog){
    this.dog = dog;
    this.dogId = dog.id;
    this.newDogMatch.emit(dog);
  }

  DogSettings(dog, dogModal){
    this.dog = dog;
    this.dogId = dog.id
    
    this._modalService.open(dogModal, { centered: true });
  }

  dogQuery($event){
    //console.log(this.dogId)
    const miObjeto = {
      "formulario" : $event.value,
      "dogId" : this.dogId
    }
    this.newDogSettings.emit(miObjeto);
  }

}
