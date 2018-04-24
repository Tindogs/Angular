import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DogsService } from '../dogs.service';
import { Subscription } from 'rxjs/Subscription';
import { Dog } from '../model/dog';

@Component({
  selector: 'dog-matched-dashboard',
  templateUrl: './dog-matched-dashboard.component.html',
  styleUrls: ['./dog-matched-dashboard.component.css']
})
export class DogMatchedDashboardComponent implements OnInit {

  userMatchedId: string;
  dogMatchedId: string;
  userServiceSubscription: Subscription;

  dogMatched: Dog;

  constructor(
    private route: ActivatedRoute,
    private _dogsService: DogsService
  ) { }

  ngOnInit() {
    this.userMatchedId = this.route.snapshot.paramMap.get('ownerId');
    this.dogMatchedId = this.route.snapshot.paramMap.get('dogId');

    console.log("Propietario: " + this.userMatchedId);
    console.log("Perro: " + this.dogMatchedId);

      // Me suscribo al servicio para pintar el detalle
    this.userServiceSubscription = this._dogsService.getDogMatched(this.userMatchedId, this.dogMatchedId)
                    .subscribe(dogMatched => {
                      this.dogMatched = dogMatched;
                      console.log(dogMatched);
                    })   
  }

}
