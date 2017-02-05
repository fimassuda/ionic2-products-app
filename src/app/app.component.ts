import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';

import { CategoryService } from '../providers/category-service';
import { ProductService } from '../providers/product-service';


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`,
  providers: [
    CategoryService,
    ProductService
  ]
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
