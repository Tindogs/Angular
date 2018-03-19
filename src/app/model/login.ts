export class Login {

    constructor(
        public email: string,
        public password: string
    ) {}

    static newFromJson(json: any): Login { 
        return new Login(
            json.email,
            json.password
        );    
    }
}
