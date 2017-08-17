
export class Item {

    constructor(public description: string,
         public quantity: number,
          public price: number) {
    }

    toString() {
        return `Item, description: ${this.description},
        quantity: ${this.quantity},
         price: ${this.price}.`;
    }
}
