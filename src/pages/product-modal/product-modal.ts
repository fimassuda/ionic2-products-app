import { Component } from '@angular/core';
import { NavController, ViewController, NavParams, ToastController } from 'ionic-angular';
import { ProductService } from '../../providers/product-service';
import { CategoryService } from '../../providers/category-service';

@Component({
  selector: 'page-product-modal',
  templateUrl: 'product-modal.html'
})
export class ProductModalPage {

  product: any;
  categories: Array<any>;

  constructor(
    public navCtrl: NavController,
    private viewCtrl: ViewController,
    private productService: ProductService,
    private categoryService: CategoryService,
    private toastCtrl: ToastController,
    private params: NavParams) {
      this.product = params.get('product') || {};
      this.categoryService.findAll().then((categories: Array<any>) => {
        this.categories = categories;
      }, (error) => {
        console.error("Erro ao buscar categorias: " + error)
      });
    }

  close(){
    this.viewCtrl.dismiss();
  }

  save(){

    if (this.product.id != undefined){
      this.productService.update(this.product).then((res) => {
        if (res) {
          this.viewCtrl.dismiss();
          this.toast();
        }
      }, (error) => {
        console.error("Erro ao cadastrar categoria: " + error);
      });
    } else {
      this.productService.insert(this.product).then((res) => {
        if (res) {
          this.viewCtrl.dismiss();
          this.toast();
        }
      }, (error) => {
        console.error("Erro ao cadastrar categoria: " + error);
      });
    }
  }

  toast(){
    let toast = this.toastCtrl.create({
      message: 'Produto adicionado com sucesso!',
      duration: 3000,
      position: 'bottom'
    });

    toast.present();
  }
}