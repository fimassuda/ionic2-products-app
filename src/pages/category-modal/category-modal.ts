import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { CategoryService } from '../../providers/category-service';

@Component({
  selector: 'page-category-modal',
  templateUrl: 'category-modal.html'
})
export class CategoryModalPage {

  category: any;

  constructor(
    public navCtrl: NavController,
    private viewCtrl: ViewController,
    private categoryService: CategoryService,
    private params: NavParams) {
      this.category = params.get('category') || {};
    }

  close(){
    this.viewCtrl.dismiss();
  }

  save(){

    if (this.category.id != undefined){
      this.categoryService.update(this.category).then((res) => {
        if (res) {
          this.viewCtrl.dismiss();
        }
      }, (error) => {
        console.error("Erro ao cadastrar categoria: " + error);
      });
    } else {
      this.categoryService.insert(this.category).then((res) => {
        if (res) {
          this.viewCtrl.dismiss();
        }
      }, (error) => {
        console.error("Erro ao cadastrar categoria: " + error);
      });
    }
  }

}
