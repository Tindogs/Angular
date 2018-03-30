import { Component, OnInit } from '@angular/core';
import { Dog } from '../model/dog';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  
  private _perretes: Dog[];

  constructor() {
    this._perretes = [
      new Dog("1","Bobby","10","Snouzer",true,"Brown",null,null,"Es muy cariñoso",null),
      new Dog("2","Perry","6","Cocker",true,"White&Black",null,null,"Es muy gruñón",null)
    ]

   }


  ngOnInit() {
  }

}
