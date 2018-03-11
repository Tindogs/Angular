import { Dog } from './dog'

export class User {

    constructor(
        public id: number,
        public first_name: string,
        public last_name: string,
        public phone: string,
        public email: string,
        public username: string,
        public password: string,
        public coordinates: string,
        public dogs: Dog[]
     ) {}

    static newFromJson(json: any): User {
        return new User(
            json.id,
            json.first_name,
            json.last_name,
            json.phone,
            json.email,
            json.username,
            json.password,
            json.coordinates,
            json.dogs
        );
    }
}
