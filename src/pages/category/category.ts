import { Component } from '@angular/core';
import { NavController, AlertController, ModalController } from 'ionic-angular';
import { CategoryService } from '../../providers/category-service';
import { CategoryModalPage } from '../category-modal/category-modal';

@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage {

  categories: Array<any>;

  constructor(
    public navCtrl: NavController,
    private categoryService: CategoryService,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController) {
    this.findAll();
  }

  findAll(){
    this.categoryService.findAll().then((categories: Array<any>) => {
      this.categories = categories;
    }, error => {
      console.error("Erro ao listar categories");
    });
  }

  removeCategory(category){
    let alert = this.alertCtrl.create({
      title: 'Deletar Categoria',
      subTitle: 'Deseja realmente deletar a categoria \'' + category.nome + '\'?',
      buttons: [{
        text: 'Cancelar'
      },{
        text: 'Deletar',
        handler: (data) => {
          this.categoryService.delete(category.id).then((res) => {
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

  updateCategory(category){
    let modal = this.modalCtrl.create(CategoryModalPage, {category: category});

    modal.onDidDismiss(() => {
      this.findAll();
    })

    modal.present();
  }

  addCategory(){
    let modal = this.modalCtrl.create(CategoryModalPage);

    modal.onDidDismiss(() => {
      this.findAll();
    })

    modal.present();
  }

}
