import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Flashlight } from '@ionic-native/flashlight';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isOn = false;
  constructor(public navCtrl: NavController,private flashlight: Flashlight) {

  }

  onTorch(){
    if(this.flashlight.available()){
      this.isOn = false;
      this.flashlight.switchOn();
    }else{
      alert("Flashlight Not Available");
    }
  }
  offTorch(){
    this.isOn = true;
    this.flashlight.switchOff();
  }


}
