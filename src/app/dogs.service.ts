import { Injectable } from '@angular/core';
import { User } from './model/user';
import { Dog } from './model/dog';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResultApi } from './model/results_interface';

@Injectable()
export class DogsService {

  constructor(private _http: HttpClient) { }



  registerNewDog(userId: string, dog: Dog): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'token': localStorage.getItem('token')
      })
    };
    return this._http
                .put<ResultApi>(`${environment.apiURL}/dogs/withuser/${userId}`, dog, httpOptions)
                .map((respuesta: ResultApi) => {
                    if(respuesta.success == true) {
                      console.log("Registrar nuevo perro")
                      return User.newFromJson(respuesta.result)
                    }
                })
  }

  getDogsBreed(): string[] {
    
    return ["Affenpinscher","Afghan Hound","Afghan Shepherd","Aidi","Airedale Terrier","Cão Fila de São Miguel","Carolina Dog","Carpathian Shepherd Dog","Catahoula Leopard Dog","Catalan Sheepdog","Caucasian Shepherd Dog","Cavalier King Charles Spaniel","Central Asian Shepherd Dog","Cesky Fousek","Cesky Terrier","Chesapeake Bay Retriever","Polish Hunting Dog","Polish Lowland Sheepdog","Polish Tatra Sheepdog","Pomeranian","Pont-Audemer Spaniel","Poodle","Porcelaine","Portuguese Podengo","Portuguese Pointer","Portuguese Water Dog","Welsh Terrier","West Highland White Terrier","West Siberian Laika","Westphalian Dachsbracke","Wetterhoun","Whippet","White Shepherd","Wirehaired Pointing Griffon","Wirehaired Vizsla"]
    
  }

}
