import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent {

  @Input() listado: string[];

}
