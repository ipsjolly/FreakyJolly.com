import { Component } from '@angular/core';

import {Item} from '../app/item';
import {ITEMS} from '../app/mock-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  radioSel:any;
  radioSelected:string;
  radioSelectedString:string;
  itemsList: Item[] = ITEMS;

    
    constructor() {
      this.itemsList = ITEMS;
      this.radioSelected = "item_3";
      this.getSelecteditem();
     }

    getSelecteditem(){
      this.radioSel = ITEMS.find(Item => Item.value === this.radioSelected);
      this.radioSelectedString = JSON.stringify(this.radioSel);
    }

    onItemChange(item){
      this.getSelecteditem();
    }

}
