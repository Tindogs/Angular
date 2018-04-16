import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

import { DogsService } from '../dogs.service'

import { Dog } from '../model/dog'
import { Query } from '../model/query'

import { DogToMatchDirective } from '../dog-to-match.directive';
import { DogMatchedComponent } from '../dog-matched/dog-matched.component';

@Component({
  selector: 'dog-match',
  templateUrl: './dog-match.component.html',
  styleUrls: ['./dog-match.component.css']
})
export class DogMatchComponent implements OnInit {

  dog: Dog;
  dogsToMatch: Dog[];
  queryDog: Query;
  dog_id: string;
  currentDogIndex: number = -1;
  @ViewChild(DogToMatchDirective) dogToMatchHost: DogToMatchDirective;

  constructor(
    private _dogsService: DogsService,
    private route: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    this.dog_id = this.route.snapshot.paramMap.get('id');
    // this.dogsToMatch = [
    //   new Dog("","Matched Dog 1",4,"",true,"verde",this.queryDog,[],"Lorem ipsum perrete",["./../assets/bob_esponja.jpg"]),
    //   new Dog("","Matched Dog 2",7,"",true,"marrón",this.queryDog,[],"Lorem ipsum perrete",["./../assets/gary.jpg"]),
    //   new Dog("","Matched Dog 3",14,"",true,"blanco y negro",this.queryDog,[],"Lorem ipsum chiquitor",["./../assets/patricio.jpg"])
    // ]
    console.log(this.dog_id)
    this._dogsService.getDogSearch(this.dog_id)
    .subscribe((dogsToMatch) => {
      this.dogsToMatch = dogsToMatch;
      console.log(this.dogsToMatch)
      this.loadNextDog();
    });

    //this.loadNextDog();
  }


  loadNextDog() {
    this.currentDogIndex = (this.currentDogIndex + 1) % this.dogsToMatch.length;
    let dogItem = this.dogsToMatch[this.currentDogIndex];

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(DogMatchedComponent);

    let viewContainerRef = this.dogToMatchHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.dog = dogItem
    console.log(dogItem)
  }

  onDislike(event) {
    this.loadNextDog()
  }

  onLike(event) {
    this.loadNextDog()
  }


}
