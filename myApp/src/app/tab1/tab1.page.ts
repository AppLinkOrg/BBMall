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
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers: [GoodsApi]
})
export class Tab1Page extends AppBase {
  constructor(public router: Router,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public goodsApi: GoodsApi) {
    super(router, navCtrl, modalCtrl, toastCtrl, alertCtrl);
  }

  recommgoodsT = null;
  recommgoodsM = null;
  recommgoodsML = null;
  recommgoodsMR = null;
  recommgoodsB = null;
  recommgoodscat = [];
  storylist = [];

  onMyLoad() {
    this.goodsApi.indexrecommgoods({ position: "T", limit: " 0,1" }).then((indexrecommgoods) => {
      if (indexrecommgoods.length > 0) {
        this.recommgoodsT = indexrecommgoods[0];
      }
    });
    this.goodsApi.indexrecommgoods({ position: "M", limit: " 0,1" }).then((indexrecommgoods) => {
      if (indexrecommgoods.length > 0) {
        this.recommgoodsM = indexrecommgoods[0];
      }
    });
    this.goodsApi.indexrecommgoods({ position: "ML", limit: " 0,1" }).then((indexrecommgoods) => {
      if (indexrecommgoods.length > 0) {
        this.recommgoodsML = indexrecommgoods[0];
      }
    });
    this.goodsApi.indexrecommgoods({ position: "MR", limit: " 0,1" }).then((indexrecommgoods) => {
      if (indexrecommgoods.length > 0) {
        this.recommgoodsMR = indexrecommgoods[0];
      }
    });
    this.goodsApi.indexrecommgoods({ position: "B", limit: " 0,1" }).then((indexrecommgoods) => {
      if (indexrecommgoods.length > 0) {
        this.recommgoodsB = indexrecommgoods[0];
      }
    });
    this.goodsApi.indexgoodscat({}).then(recommgoodscat => {
      this.recommgoodscat = recommgoodscat;
    });
    this.goodsApi.storylist({}).then(storylist => {
      this.storylist = storylist;
    });

  }

  onMyShow() {
    //this.gotoGoods(1);
  }

  tryGoto(obj) {
    console.log(obj);
    if (obj.gototype == 'A') {
      this.gotoGoods(obj.goods_id);
    }
    if (obj.gototype == 'B') {
      this.gotoGoodsCategory(obj.goodscat_id);
    }
    if (obj.gototype == 'C') {
      this.gotoStory(obj.story_id);
    }
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
