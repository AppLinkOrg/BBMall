import { Component } from '@angular/core';
import { AppBase } from '../AppBase';
import { Router } from '@angular/router';
import { NavController, ModalController, ToastController, AlertController, NavParams } from '@ionic/angular';
import { GoodsApi } from 'src/providers/goods.api';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
  providers:[GoodsApi]
})
export class CheckoutPage  extends AppBase {
  constructor(public router: Router,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public goodsApi: GoodsApi) {
    super(router, navCtrl, modalCtrl, toastCtrl, alertCtrl);
    this.headerscroptshow=0;
  }
  opencartdetail=false;
  opensign=false;
  loginid="";
  password="";

  contact="";
  name="";
  address="";
  mobile="";
  city="";
}
