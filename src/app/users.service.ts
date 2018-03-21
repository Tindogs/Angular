import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';

import { Login } from './model/login';
import { User } from './model/user';


@Injectable()
export class UsersService {

  constructor(private _http: Http) { }

  loginUser(login: Login): Observable<User> {
    console.log("UsersService:: loginUser " + login.email + " " + login.password);
    return this._http
          .post('http://34.239.83.44:3000/apiv1/users/authenticate/', login)
          .map((response: Response) => {
            console.log("UsersService:: response" + response['result']);
            console.log("UsersService:: response" + JSON.stringify(response.json()));
            return User.newFromJson((response.json().result));
          });
  }

  registerNewUser(user: User): Observable<User>{
    return this._http
                .post(`${environment.apiURL}/users/register/`, user)
                .map((respuesta: Response) => {
                  
                  localStorage.setItem('token', respuesta.json().token)
                  return User.newFromJson(respuesta.json().result)
                  
                })
  }
}
