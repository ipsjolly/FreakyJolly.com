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
            //Selecting Default Radio item here
            this.radioSelected = "item_3";
            this.getSelecteditem();
          }

          // Get row item from array  
          getSelecteditem(){
            this.radioSel = ITEMS.find(Item => Item.value === this.radioSelected);
            this.radioSelectedString = JSON.stringify(this.radioSel);
          }
          // Radio Change Event
          onItemChange(item){
            this.getSelecteditem();
          }

      }
