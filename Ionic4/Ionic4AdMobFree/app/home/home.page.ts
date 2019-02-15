import { Component, OnInit } from '@angular/core';
import { AdmobFreeService } from '../service/admobfree.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit {

  constructor(
    private admobFreeService: AdmobFreeService,
  ) {}

  ngOnInit() {
    this.admobFreeService.BannerAd();
  }

  showInterstitial(){
    this.admobFreeService.InterstitialAd();
  }
  
  showRewardVideo(){
    this.admobFreeService.RewardVideoAd();
  }


}
