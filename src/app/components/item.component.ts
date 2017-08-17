import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Item } from '../Item';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    providers: [ItemService]
})
export class ItemComponent implements OnInit {
    items: Item[] = [];
    totalQuantity = 0;
    totalPrice = 0;

    constructor(itemService: ItemService) {
        this.items = itemService.getItems();
    }

    ngOnInit() {
    }

    removeItem(item: Item) {
        this.items = this.items.filter(i => i !== item);
        this.totalQuantity -= item.quantity;
        this.totalPrice -= item.quantity * item.price;
    }

    addNewItem(description: string, quantity: number, price: number) {
        this.items.push(new Item(description, quantity, price));
        this.totalQuantity = (this.totalQuantity + quantity);
        this.totalPrice =  this.totalPrice + quantity * price ;
    }

    clearAll() {
        this.items = [];
        this.totalPrice = 0;
        this.totalQuantity = 0;
    }
}

