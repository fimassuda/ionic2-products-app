import {CategoryPage} from '../pages/category/category';
import {ProductPage} from '../pages/product/product';
import {NgModule} from '@angular/core';
import {IonicModule, IonicApp} from 'ionic-angular';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import { CategoryModalPage } from '../pages/category-modal/category-modal';
import { ProductModalPage } from '../pages/product-modal/product-modal';
import { CategoryService } from '../providers/category-service';
import { ProductService } from '../providers/product-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CategoryPage,
    ProductPage,
    CategoryModalPage,
    ProductModalPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CategoryPage,
    ProductPage,
    CategoryModalPage,
    ProductModalPage
  ],
  providers: [
    ProductService,
    CategoryService
  ]
})
export class AppModule {}
