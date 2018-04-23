import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Dog } from '../model/dog'
import { Query } from '../model/query'

import { DogToMatchDirective } from '../dog-to-match.directive';
import { DogMatchedComponent } from '../dog-matched/dog-matched.component';
import { UsersService } from '../users.service';
import { DogsService } from '../dogs.service'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

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
  dogMatchedList$: Observable<Dog[]>;
  dogServiceSubscription: Subscription;

  @ViewChild(DogToMatchDirective) dogToMatchHost: DogToMatchDirective;

  constructor(
    private _userService: UsersService,
    private _dogsService: DogsService,
    private route: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver,
    private _modalService: NgbModal
  ) { }

  ngOnInit() {
    this.userId = this._userService.getUserId();
    this.dog_id = this.route.snapshot.paramMap.get('id');
    console.log("ID DE MI PERRO");
    console.log(this.dog_id);

    // Suscripción al Servicio Search
    this.dogServiceSubscription = this._dogsService.getDogSearch(this.dog_id)
    .subscribe((dogsToMatch) => {
      this.dogsToMatch = dogsToMatch;
      console.log(this.dogsToMatch)
      this.loadNextDog();
    });

    // Suscripción al Servicio Matches
    this.dogMatchedList$ = this._dogsService.getDogMatches(this.dog_id);

  }

  ngOnDestroy() {
    this.dogServiceSubscription.unsubscribe();
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
    this.dogServiceSubscription = this._dogsService.likeOtherDog(this.userId, this.dog_id, this.otherDog.id, dislike)
    .subscribe((otherDog) => {
      console.log("PERRO DESLIKEADO");
      console.log(otherDog);
      // Actualizo los matches
      this.dogMatchedList$ = this._dogsService.getDogMatches(this.dog_id);
    })
    
    this.loadNextDog();
    
  }

  onDoubt($event) {
    this.loadNextDog()
  }

  onLike($event, dogMatchModal) {
    const like = {
      "like" : "true"
    }

    this.dogServiceSubscription = this._dogsService.likeOtherDog(this.userId, this.dog_id, this.otherDog.id, like)
    .subscribe((dogMatched) => {
      if (dogMatched.match == true) {
        this.dogMatched = dogMatched.dog;
        this.openModal(dogMatchModal);
        //alert("Has hecho Match con: " + dogMatched.dog.name);
        // Actualizo los matches
      this.dogMatchedList$ = this._dogsService.getDogMatches(this.dog_id);
      }
    })

    this.loadNextDog();

  }

  openModal(dogMatchModal){
    this._modalService.open(dogMatchModal, { centered: true })
  }

}
