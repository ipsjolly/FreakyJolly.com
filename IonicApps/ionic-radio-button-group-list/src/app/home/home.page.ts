import { Component, ViewChild } from '@angular/core';
import { IonRadioGroup } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('radioGroup') radioGroup: IonRadioGroup

  defaultSelectedRadio = "radio_2";
  //Get value on ionChange on IonRadioGroup
  selectedRadioGroup: any;
  //Get value on ionSelect on IonRadio item
  selectedRadioItem: any;

  radio_list = [
    {
      id: '1',
      name: 'radio_list',
      value: 'radio_1',
      text: 'One',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '2',
      name: 'radio_list',
      value: 'radio_2',
      text: 'Two',
      disabled: false,
      checked: true,
      color: 'secondary'
    }, {
      id: '3',
      name: 'radio_list',
      value: 'radio_3',
      text: 'Three',
      disabled: false,
      checked: false,
      color: 'danger'
    },
  ];

  radioGroupChange(event) {
    console.log("radioGroupChange", event.detail);
    this.selectedRadioGroup = event.detail;
  }

  radioFocus() {
    console.log("radioFocus");
  }
  radioSelect(event) {
    console.log("radioSelect", event.detail);
    this.selectedRadioItem = event.detail;
  }
  radioBlur() {
    console.log("radioBlur");
  }


  selectTwo() {
    this.radioGroup.value = 'radio_2'
  }

}
