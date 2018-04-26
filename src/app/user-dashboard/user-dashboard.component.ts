import { Component, OnInit, OnDestroy } from '@angular/core';
import { Dog } from '../model/dog';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../model/user'
import { UsersService } from '../users.service'
import { Subscription } from 'rxjs/Subscription';
import { Query } from '../model/query';
import { DogsService } from '../dogs.service';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit, OnDestroy {
  
  private _perretes: Dog[];
  user: User;
  userId: string;
  query: Query;
  userServiceSubscription: Subscription;
  showAlert: boolean = false;


  constructor(
    // private route: ActivatedRoute,
    private router: Router,
    private _usersService: UsersService,
    private _dogsService: DogsService) { }

  ngOnInit() {
    // this.userId = this.route.snapshot.paramMap.get('id');
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

  updateDogSettings($event){
    // console.log($event); 
    this.userId = String(this.user.id);
    this.query = $event.formulario;

    this._dogsService.updateQueryDog(this.userId, $event.dogId, this.query)
    .subscribe(dog => {
      //alert('Los ajustes de búsqueda se han cambiado correctamente :-)');
      this.showAlert = true;
      this.router.navigate(['/user_dashboard']);
    })
  }

  dogMatch(dog){
    //alert("Vamos a buscarle Novia a: " + dog.name);
    this.router.navigate([`/dogs_match/${dog.id}`]);
  }

  getGeolocation(user: User) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (data) => {
          console.log(data.coords);
          user.coordinates = [data.coords.longitude, data.coords.latitude];
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
