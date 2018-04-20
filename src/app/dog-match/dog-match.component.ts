import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

import { DogsService } from '../dogs.service'

import { Dog } from '../model/dog'
import { Query } from '../model/query'

import { DogToMatchDirective } from '../dog-to-match.directive';
import { DogMatchedComponent } from '../dog-matched/dog-matched.component';
import { UsersService } from '../users.service';

@Component({
  selector: 'dog-match',
  templateUrl: './dog-match.component.html',
  styleUrls: ['./dog-match.component.css']
})
export class DogMatchComponent implements OnInit {

  dog: Dog;
  otherDog: Dog;
  dogsToMatch: Dog[];
  queryDog: Query;
  dog_id: string;
  userId: string;
  currentDogIndex: number = -1;
  dogMatched: Dog;
  dogMatchedList: Dog[];

  @ViewChild(DogToMatchDirective) dogToMatchHost: DogToMatchDirective;

  constructor(
    private _userService: UsersService,
    private _dogsService: DogsService,
    private route: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    this.userId = this._userService.getUserId();
    this.dog_id = this.route.snapshot.paramMap.get('id');
    console.log("ID DE MI PERRO")
    console.log(this.dog_id)

    // Suscripción al Servicio Search
    this._dogsService.getDogSearch(this.dog_id)
    .subscribe((dogsToMatch) => {
      this.dogsToMatch = dogsToMatch;
      console.log(this.dogsToMatch)
      this.loadNextDog();
    });

    // Suscripción al Servicio Matches
    this._dogsService.getDogMatches(this.dog_id)
    .subscribe((dogMatchedList) => {
      this.dogMatchedList = dogMatchedList[0];
      console.log(this.dogMatchedList)
    });

  }


  loadNextDog() {
    this.currentDogIndex = (this.currentDogIndex + 1) % this.dogsToMatch.length;
    let dogItem = this.dogsToMatch[this.currentDogIndex];

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(DogMatchedComponent);

    let viewContainerRef = this.dogToMatchHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.dog = dogItem;
    this.otherDog = dogItem
  }

  onDislike($event) {
    const dislike = {
      "like" : "false"
    }
    this._dogsService.likeOtherDog(this.userId, this.dog_id, this.otherDog.id, dislike)
    .subscribe((otherDog) => {
      console.log("PERRO DESLIKEADO");
      console.log(otherDog);
      this.loadNextDog();
    })
    
  }

  onDoubt($event) {
    this.loadNextDog()
  }

  onLike($event) {
    const like = {
      "like" : "true"
    }

    this._dogsService.likeOtherDog(this.userId, this.dog_id, this.otherDog.id, like)
    .subscribe((dogMatched) => {
      if (dogMatched.match == true) {
        this.dogMatched = dogMatched.dog;
        alert("Has hecho Match con: " + dogMatched.dog.name);
      }
      // this.onSetDog(this.dogMatched);
      this.loadNextDog();
      
    })

  }

  // onSetDog(dog: Dog){
  //   console.log("DOG SET");
  //   this.dog = dog;
  //   console.log(this.dog);
  // }

}
