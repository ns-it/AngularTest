import { Component } from '@angular/core';
import { ItemService } from './services/item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
   providers: [ItemService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Simple Checkout Test';
}
