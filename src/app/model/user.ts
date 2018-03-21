import { Dog } from './dog'

export class User {

    constructor(
        public id: number,
        public first_name: string,
        public last_name: string,
        public email: string,
        public username: string,
        public password: string,
        public coordinates: number[],
        public photo: String,
        public dogs: Dog[]
     ) {}

    static newFromJson(json: any): User {
        return new User(
            json.id,
            json.first_name,
            json.last_name,
            json.email,
            json.username,
            json.password,
            json.coordinates,
            json.photo,
            json.dogs
        );
    }
}
