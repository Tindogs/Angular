export class Query {
    constructor(
        public age: Number, 
        public max_kms: Number,
        public reproductive: Boolean,
        public breed: String
    ){}

    static newFromJson(json: any): Query { 
        return new Query(
            json.age,
            json.max_kms,
            json.reproductive,
            json.breed
        );    
    }
}