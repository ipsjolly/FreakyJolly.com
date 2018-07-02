import { Component } from '@angular/core';
import { NavController  } from 'ionic-angular';
import { HomePage } from '../home/home';
import { JsonData } from '../../assets/jsondata';

@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html'
})
export class GalleryPage {
  constructor(public navCtrl: NavController,public jsonData: JsonData) {
  }
  navigateToHome(islide) {
    let curslide = islide.inum;
    console.log(curslide);
    this.navCtrl.push(HomePage, {
      initSlide: curslide
    })
  }

}
