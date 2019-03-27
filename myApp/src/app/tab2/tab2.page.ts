import { Component } from '@angular/core';
import { AppBase } from '../AppBase';
import { Router } from '@angular/router';
import { NavController, ModalController, ToastController, AlertController } from '@ionic/angular';
import { ViewController } from '@ionic/core';
import { GoodsApi } from 'src/providers/goods.api';
import { StoryPage } from '../story/story.page';
import { GoodsPage } from '../goods/goods.page';
import { GoodscategoryPage } from '../goodscategory/goodscategory.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers: [GoodsApi]
})
export class Tab2Page  extends AppBase {
  constructor(public router: Router,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public goodsApi: GoodsApi) {
    super(router, navCtrl, modalCtrl, toastCtrl, alertCtrl);
  }
}
