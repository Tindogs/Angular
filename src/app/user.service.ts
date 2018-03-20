import { Injectable } from '@angular/core';
import { User } from './model/user';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map"
import { environment } from '../environments/environment';

@Injectable()
export class UserService {

  constructor(private _http: Http) {};

  registerNewUser(user: User): Observable<User>{
    console.log(user);
    return this._http
                .post(`${environment.apiURL}/users/register/`, user)
                .map((respuesta: Response) => {
                  return User.newFromJson(respuesta.json)
                  //return respuesta.json() as User;
                })
  }
}
