import { Component, Input } from '@angular/core';

@Component({
  selector: 'dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent {

  @Input() listado: string[];

}
