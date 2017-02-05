import { Component } from '@angular/core';
import { NavController, AlertController, ModalController } from 'ionic-angular';
import { ProductService } from '../../providers/product-service';
import { ProductModalPage } from '../product-modal/product-modal';

@Component({
  selector: 'page-product',
  templateUrl: 'product.html'
})
export class ProductPage {

  products: Array<any>;

  constructor(
    public navCtrl: NavController,
    private productService: ProductService,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController) {
    this.findAll();
  }

  findAll(){
    this.productService.findAll().then((products: Array<any>) => {
      this.products = products;
    }, error => {
      console.error("Erro ao listar products");
    });
  }

  removeProduct(product){
    let alert = this.alertCtrl.create({
      title: 'Deletar Categoria',
      subTitle: 'Deseja realmente deletar a categoria \'' + product.nome + '\'?',
      buttons: [{
        text: 'Cancelar'
      },{
        text: 'Deletar',
        handler: (data) => {
          this.productService.delete(product.id).then((res) => {
            if (res) {
              this.findAll();
            }
          }, (error) => {
            console.error('Erro ao deletar categoria: ' + error);
          });
        }
      }
      ]
    });
    alert.present();
  }

  updateProduct(product){
    let modal = this.modalCtrl.create(ProductModalPage, {
      product: Object.assign({}, product)
    });

    modal.onDidDismiss(() => {
      this.findAll();
    })

    modal.present();
  }

  addProduct(){
    let modal = this.modalCtrl.create(ProductModalPage);

    modal.onDidDismiss(() => {
      this.findAll();
    })

    modal.present();
  }


}
