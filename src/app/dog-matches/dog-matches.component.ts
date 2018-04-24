import { Component, OnInit, Input } from '@angular/core';
import { Dog } from '../model/dog';
import { Router } from '@angular/router';


@Component({
  selector: 'dog-matches',
  templateUrl: './dog-matches.component.html',
  styleUrls: ['./dog-matches.component.css']
})
export class DogMatchesComponent implements OnInit {

  @Input() listadoMatches: any[];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  DogDetail(dog){
    console.log(dog);
    this.router.navigate([`dogs_matched_dashboard/${dog.id_user_dog_matched}/${dog.id_dog_matched}`])

  }

}
