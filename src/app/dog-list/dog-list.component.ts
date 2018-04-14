import { Component, Input, OnInit, NgModule } from '@angular/core';
import { User } from '../model/user';
import { Dog } from '../model/dog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DogsService } from '../dogs.service'

@Component({
  selector: 'dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {

  @Input() listado: Dog;
  breeds: string[];
  dog: Dog

  constructor(private _dogsService: DogsService,
    private _modalService: NgbModal) {

  }

  ngOnInit() {
    this.breeds = this._dogsService.getDogsBreed()
  }

  onClickDog(dog){
    // Aquí pasaría el id del perro pulsado
    // Me suscribiría al servicio para hacer la petición del Search
    //alert("Iría al Match")
    //alert("Han tocado el perrete: " + dog.name)
    this.dog = dog;
  }

  DogSettings(dog, dogModal){
    //alert("Iría a los ajustes del perro tales como la Query")
    this.dog = dog;
    this._modalService.open(dogModal, { centered: true });
  }

  onSaveSettings(dog){
    this.dog = dog;
    console.log("dog");
  }

}
