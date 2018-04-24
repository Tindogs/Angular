import { Component, OnInit, Input } from '@angular/core';
import { Dog } from '../model/dog';


@Component({
  selector: 'dog-matched-detail',
  templateUrl: './dog-matched-detail.component.html',
  styleUrls: ['./dog-matched-detail.component.css']
})
export class DogMatchedDetailComponent implements OnInit {

  @Input() dogMatched : Dog;

  constructor() { }

  ngOnInit() { 
                      
  }

}
