import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';

import { Login } from './model/login';
import { User } from './model/user';
import { ResultApi } from './model/results_interface';


@Injectable()
export class UsersService {

  user : Observable<User>;
  constructor(private _http: Http, private _httpClient: HttpClient) { }

  loginUser(login: Login): Observable<User> {
    console.log("UsersService:: loginUser " + login.email + " " + login.password);
    return this._http
          .post(`${environment.apiURL}/users/authenticate/`, login)
          .map((response: Response) => {
            console.log("UsersService:: response" + response['result']);
            console.log("UsersService:: response" + JSON.stringify(response.json()));
            this.registerWebToken(response.json().token)
            this.registerId(response.json().result._id)
            return  User.newFromJson((response.json().result));
          });
    
  }

  registerNewUser(user: User): Observable<User>{
    return this._http
                .post(`${environment.apiURL}/users/register/`, user)
                .map((respuesta: Response) => { 
                  this.registerWebToken(respuesta.json().token)
                  return User.newFromJson(respuesta.json().result)
                })
  }

  getUserProfile(): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'token': this.getUserToken()
      })
    };
    const id = this.getUserId();
    this.user = this._httpClient.get<ResultApi>(`${environment.apiURL}/users/${id}`,httpOptions)
              .map(response => {
                return User.newFromJson(response.result)
              })
    return this.user
  }

  updateUser(user: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'token': this.getUserToken()
      })
    };
    const id = this.getUserId();
    this.user = this._httpClient
              .put<ResultApi>(`${environment.apiURL}/users/${id}`, user, httpOptions)
              .map(response => {
                return User.newFromJson(response.result)
              })
    return this.user
  }

  registerWebToken(token) {
    localStorage.setItem('token',token)
  }

  registerId(id) {
    localStorage.setItem('user_id',id)
  }

  getUserId() {
    return localStorage.getItem('user_id');
  }

  getUserToken() {
    return localStorage.getItem('token')
  }

  /*getUserObject() {
    this.user.subscribe()     
  }*/

}
