//home.page.ts
import { Component } from '@angular/core';
import { InAppPurchase } from '@ionic-native/in-app-purchase/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  productIds = ['prod1', 'prod2']; // <- Add your product Ids here
  products: any;

  constructor(
    private iap: InAppPurchase
  ) { }

  checkProducts() {
    this.iap
      .getProducts(this.productIds)
      .then((products) => {
        console.log(products);
        this.products = products
        //  [{ productId: 'com.yourapp.prod1', 'title': '...', description: '...', price: '...' }, ...]
      })
      .catch((err) => {
        console.log(err);
      });
  }


  buyProducts(productId) {
    this.iap
      .buy(productId)
      .then((data) => {
        console.log(data);
        alert('Purchase was successful!');
      })
      .catch((err) => {
        console.log(err);
        alert('Something went wrong');
      });
  }

  restorePurchase() {
    this.iap
      .restorePurchases()
      .then((data) => {
        console.log(data);
        alert('Purchase was successful!');
      })
      .catch((err) => {
        console.log(err);
        alert('Something went wrong');
      });
  }

}
