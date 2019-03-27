import { Component } from '@angular/core';
import { AppBase } from '../AppBase';
import { Router } from '@angular/router';
import { NavController, ModalController, ToastController, AlertController, NavParams } from '@ionic/angular';
import { GoodsApi } from 'src/providers/goods.api';
import { StoryPage } from '../story/story.page';
import { GoodsPage } from '../goods/goods.page';

@Component({
  selector: 'app-goodscategory',
  templateUrl: './goodscategory.page.html',
  styleUrls: ['./goodscategory.page.scss'],
  providers: [GoodsApi]
})
export class GoodscategoryPage extends AppBase {
  constructor(public router: Router,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public goodsApi: GoodsApi,
    public navParams: NavParams) {
    super(router, navCtrl, modalCtrl, toastCtrl, alertCtrl);
    this.headerscroptshow=281;
  }
  title = "";
  bannerlist = [];
  cat={};
  goodslist=[];
  onMyLoad() {
    var id = this.navParams.get("id");
    this.goodsApi.catbanner({ goodscat_id: id }).then((bannerlist) => {
      this.bannerlist = bannerlist;
    });
    this.goodsApi.cat({id:id}).then((cat)=>{
      this.title=cat.name;
      this.cat=cat;
    });
    this.goodsApi.catgoods({goodscat_id:id}).then((goodslist)=>{
      this.goodslist=goodslist;
    });
  }

  gotoStory(id) {
    this.showModal(StoryPage, { id: id });
  }
  gotoGoods(id) {
    this.showModal(GoodsPage, { id: id });
  }
  gotoGoodsCategory(id) {
    this.showModal(GoodscategoryPage, { id: id });
  }
}
