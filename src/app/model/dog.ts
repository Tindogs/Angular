
export class Dog {
    constructor(
        public id: string,
        public age: string,
        public breed: string,
        public purebreed: string,
        public color: string,
        public query: any,
        public likes_from_others: any[],
        public description: string,
        public photos: string[]
    ) {}

    static newFromJson(json: any): Dog {
        return new Dog(
            json._id,
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
