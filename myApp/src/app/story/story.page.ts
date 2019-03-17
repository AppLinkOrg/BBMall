import { Component } from '@angular/core';
import { AppBase } from '../AppBase';
import { Router } from '@angular/router';
import { NavController, ModalController, ToastController, AlertController, NavParams } from '@ionic/angular';
import { GoodsApi } from 'src/providers/goods.api';

@Component({
  selector: 'app-story',
  templateUrl: './story.page.html',
  styleUrls: ['./story.page.scss'],
  providers: [GoodsApi]
})
export class StoryPage extends AppBase {
  constructor(public router: Router,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public goodsApi: GoodsApi,
    public navParams:NavParams) {
    super(router, navCtrl, modalCtrl, toastCtrl, alertCtrl);
  }

  onMyLoad() {
    alert(this.navParams.get("id"));
  }

}
