export class Dog {

    constructor(
        public owner_id: number,
        public owner_name: string,
        public age: string,
        public breed: string,
        public purebreed: string,
        public color: string,
        public query: string,
        public likes_from_others: string,
        public description: string,
        public photos: string[]
    ) {}

    static newFromJson(json: any): Dog {
        return new Dog(
            json.owner_id,
            json.owner_name,
            json.age,
            json.breed,
            json.purebreed,
            json.color,
            json.query,
            json.likes_from_others,
            json.description,
            json.photos
        );
    }

    static newCollectionFromJson(json: any[]): Dog[] {
        return json.map((dogJson: any): Dog => {
            return Dog.newFromJson(dogJson);
        });
    }
}
