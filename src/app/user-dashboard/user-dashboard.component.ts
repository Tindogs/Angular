import { Component, OnInit, OnDestroy } from '@angular/core';
import { Dog } from '../model/dog';

import { Router } from '@angular/router';
import { User } from '../model/user'
import { UsersService } from '../users.service'
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit, OnDestroy {
  
  private _perretes: Dog[];
  user: User;
  userServiceSubscription: Subscription;


  constructor(
    private router: Router,
    private _usersService: UsersService) { }

  ngOnInit() {

    this.userServiceSubscription = this._usersService.getUserProfile()
                      .subscribe(user => {
                        this.user = user;
                        this._perretes = this.user.dogs;

                        // LLamo a la función de Geolocalización
                        this.getGeolocation(this.user);
                      })    
                      
  }

  ngOnDestroy() {
    this.userServiceSubscription.unsubscribe();
  }

  addNewDog($event) {
    this.router.navigate([`new_dog/${this.user.id}`])
  }

  updateUser($event) {
    this.router.navigate([`user_update/${this.user.id}`])
  }

  getGeolocation(user: User) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (data) => {
          console.log(data.coords);
          user.coordinates = [data.coords.latitude, data.coords.longitude];
          // Llamo al servicio updateUser y me suscribo pasando las coordinates
          this.userServiceSubscription = this._usersService.updateUser(user)
          .subscribe((user) => {
            this.user = user;
          });
        },
        (error) => {
          console.log(error);
        } 
      );
    }
    else {
      console.log("EL navegador no soporta GeoLocalización")
    }
    
  }

}
