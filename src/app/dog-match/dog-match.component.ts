import { Component, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

import { DogsService } from '../dogs.service'

import { Dog } from '../model/dog'
import { DogToMatchDirective } from '../dog-to-match.directive';
import { DogMatchedComponent } from '../dog-matched/dog-matched.component';

@Component({
  selector: 'dog-match',
  templateUrl: './dog-match.component.html',
  styleUrls: ['./dog-match.component.css']
})
export class DogMatchComponent implements OnInit, OnDestroy {

  dog: Dog;
  dogsToMatch: Dog[];
  dog_id: string;
  currentDogIndex: number = -1;
  @ViewChild(DogToMatchDirective) dogToMatchHost: DogToMatchDirective;
  interval: any;

  constructor(
    private _dogsService: DogsService,
    private route: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    this.dog = new Dog(this.route.snapshot.paramMap.get('id'),"Doogo",3,"oeoe",true,"verde",{},[],"Lorem ippsum",[]);
    this.dogsToMatch = [
      new Dog("","Matched Dog 1",4,"",true,"verde",{},[],"loreoeoeoeoeo moemoe mo",["./../assets/bob_esponja.jpg"]),
      new Dog("","Matched Dog 2",7,"",true,"marrón",{},[],"Lorem ipsum perrete",["./../assets/gary.jpg"]),
      new Dog("","Matched Dog 3",14,"",true,"blanco y negro",{},[],"Lorem ipsum chiquitor",["./../assets/patricio.jpg"])
    ]

    this.loadNextDog();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
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

  getNextDog() {

  }

}
