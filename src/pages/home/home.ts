import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ProductPage } from '../product/product';
import { CategoryPage } from '../category/category';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tabRoot1: any;
  tabRoot2: any;

  constructor(public navCtrl: NavController) {
    this.tabRoot1 = ProductPage;
    this.tabRoot2 = CategoryPage;
  }

}
