import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  showLoader: boolean;
  p_bar_value_p: number;
  p_bar_value_b: number;
  p_bar_buffer: number;
  constructor() {
  }

  showProgressBar() {
    this.showLoader = true;
  }

  hideProgressBar() {
    this.showLoader = false;
  }

  getPosts() {

    // Show Progress
    this.showProgressBar();

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        console.log('success');
      }).catch(error => {
        console.log('error');
      }).finally(() => {

        // Hide Progress
        this.hideProgressBar();

      })
  }

  runDeterminateProgress() {
    this.showProgressBar()
    for (let index = 0; index <= 100; index++) {
      this.setPercentBar(index);
    }
  }

  streamMedia() {
    this.showProgressBar()
    for (let index = 0; index <= 100; index++) {
      this.setPercentBarBuffer(index);
      this.setBufferBar(index)
    }
  }

  setPercentBar(i) {
    setTimeout(() => {
      let apc = (i / 100)
      this.p_bar_value_p = apc;
    }, 50 * i);
  }

  setPercentBarBuffer(i) {
    setTimeout(() => {
      let apc = (i / 100)
      this.p_bar_value_b = apc;
    }, 200 * i);
  }

  setBufferBar(i) {
    setTimeout(() => {
      let apc = (i / 100)
      this.p_bar_buffer = apc;
    }, 150 * i);
  }

}
