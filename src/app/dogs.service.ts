import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dog } from './model/dog';

@Injectable()
export class DogsService {

  constructor(private http: HttpClient) { }

  registerNewDog(userId: string, dog: Dog) {
    
    const jsonDog = JSON.stringify(dog)
    console.log(jsonDog)

  }

  getDogsBreed(): string[] {
    
    return ["Affenpinscher","Afghan Hound","Afghan Shepherd","Aidi","Airedale Terrier","Cão Fila de São Miguel","Carolina Dog","Carpathian Shepherd Dog","Catahoula Leopard Dog","Catalan Sheepdog","Caucasian Shepherd Dog","Cavalier King Charles Spaniel","Central Asian Shepherd Dog","Cesky Fousek","Cesky Terrier","Chesapeake Bay Retriever","Polish Hunting Dog","Polish Lowland Sheepdog","Polish Tatra Sheepdog","Pomeranian","Pont-Audemer Spaniel","Poodle","Porcelaine","Portuguese Podengo","Portuguese Pointer","Portuguese Water Dog","Welsh Terrier","West Highland White Terrier","West Siberian Laika","Westphalian Dachsbracke","Wetterhoun","Whippet","White Shepherd","Wirehaired Pointing Griffon","Wirehaired Vizsla"]
    
  }

}
