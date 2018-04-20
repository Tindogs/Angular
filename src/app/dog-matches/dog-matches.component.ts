import { Component, OnInit, Input } from '@angular/core';
import { Dog } from '../model/dog';

@Component({
  selector: 'dog-matches',
  templateUrl: './dog-matches.component.html',
  styleUrls: ['./dog-matches.component.css']
})
export class DogMatchesComponent implements OnInit {

  @Input() listadoMatches: Dog;

  constructor() { }

  ngOnInit() {
  }

}
