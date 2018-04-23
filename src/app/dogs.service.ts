import { Injectable } from '@angular/core';
import { User } from './model/user';
import { Dog } from './model/dog';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResultApi } from './model/results_interface';
import { UsersService } from './users.service';
import { Query } from './model/query';

@Injectable()
export class DogsService {
  
  dogs : Observable<Dog[]>;
  user : Observable<User>;

  constructor(private _http: HttpClient, private _users: UsersService) { }

  registerNewDog(userId: string, dog: Dog): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'token': localStorage.getItem('token')
      })
    };
    
    const dogQuery = { "name": dog.name, "age": dog.age, "breed": dog.breed, "purebreed": dog.purebreed, "color": dog.color, "description": dog.description,  "photos": dog.photos, "queryage": dog.query.age, "querymaxkms": dog.query.max_kms, "queryreproductive": dog.query.reproductive, "querybreed": dog.query.breed, "likes_from_others": [] }
    return this._http
                .put<ResultApi>(`${environment.apiURL}/users/${userId}/dogs`, dogQuery, httpOptions)
                .map((respuesta: ResultApi) => {
                    if(respuesta.success == true) {
                      console.log("Registrar nuevo perro")
                      console.log(respuesta)
                      return User.newFromJson(respuesta.result)
                    } 
                })
  }

  updateQueryDog(userId: string, dogId: string, query: Query): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'token': localStorage.getItem('token')
      })
    };
    console.log(query);
    return this._http
                .put<ResultApi>(`${environment.apiURL}/users/${userId}/dogs/${dogId}`, query, httpOptions)
                .map((respuesta: ResultApi) => {
                    if(respuesta.success == true) {
                      console.log("Query Dogs Update")
                      console.log(respuesta)
                      return User.newFromJson(respuesta.result)
                    } 
                })
  }

  getDogsBreed(): string[] {  
    return ["Affenpinscher","Afghan Hound","Afghan Shepherd","Aidi","Airedale Terrier","Cão Fila de São Miguel","Carolina Dog","Carpathian Shepherd Dog","Catahoula Leopard Dog","Catalan Sheepdog","Caucasian Shepherd Dog","Cavalier King Charles Spaniel","Central Asian Shepherd Dog","Cesky Fousek","Cesky Terrier","Chesapeake Bay Retriever","Polish Hunting Dog","Polish Lowland Sheepdog","Polish Tatra Sheepdog","Pomeranian","Pont-Audemer Spaniel","Poodle","Porcelaine","Portuguese Podengo","Portuguese Pointer","Portuguese Water Dog","Welsh Terrier","West Highland White Terrier","West Siberian Laika","Westphalian Dachsbracke","Wetterhoun","Whippet","White Shepherd","Wirehaired Pointing Griffon","Wirehaired Vizsla"]
  }

  getDogSearch(dogId: string): Observable<Dog[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'token': this._users.getUserToken()
      })
    };
    const userId = this._users.getUserId();
    console.log("PETICION API SEARCH");
    this.dogs = this._http.get<ResultApi>(`${environment.apiURL}/users/${userId}/dogs/${dogId}/search`, httpOptions)
              .map(response => {
                return Dog.newCollectionFromJson(response.result)
              })
    return this.dogs
  }

  likeOtherDog(userId: string, dogId: string, otherDogId: string, like: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'token': localStorage.getItem('token')
      })
    };
    console.log(like);
    return this._http
                .put<ResultApi>(`${environment.apiURL}/users/${userId}/dogs/${dogId}/like/${otherDogId}`, like, httpOptions)
                .map((respuesta: ResultApi) => {
                    if(respuesta.success == true) {
                      console.log("Like From Others")
                      console.log(respuesta)
                      return respuesta.result.match;
                    } 
                })
  }

  getDogMatches(dogId: string): Observable<any[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'token': this._users.getUserToken()
      })
    };
    const userId = this._users.getUserId();
    const token = this._users.getUserToken();
    console.log("PETICION API MATCHES");
    return this._http.get<ResultApi>(`${environment.apiURL}/users/${userId}/dogs/${dogId}/matches`, httpOptions)
              .map(response => {
                return response.result;
              })
  }

}
