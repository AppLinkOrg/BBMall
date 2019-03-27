import { Component, ViewChild } from '@angular/core';
import { AppBase } from '../AppBase';
import { Router } from '@angular/router';
import { NavController, ModalController, ToastController, AlertController, NavParams,IonSlides } from '@ionic/angular';
import { GoodsApi } from 'src/providers/goods.api';
import { AppUtil } from '../app.util';
import { DomSanitizer } from '@angular/platform-browser';
import { StoryPage } from '../story/story.page';
import { GoodscategoryPage } from '../goodscategory/goodscategory.page';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.page.html',
  styleUrls: ['./goods.page.scss'],
  providers: [GoodsApi]
})
export class GoodsPage extends AppBase {
  @ViewChild(IonSlides) slides: IonSlides;

  constructor(public router: Router,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public goodsApi: GoodsApi,
    public navParams: NavParams,
    private sanitizer: DomSanitizer) {
    super(router, navCtrl, modalCtrl, toastCtrl, alertCtrl);
    this.headerscroptshow = 480;
  }
  title = "";
  goods = {};
  bannerlist=[];
  num=1;
  inattrselect=false;
  goodsattrlist=[];
  goodsattr={};
  rgoodslist=[];


  onMyLoad() {
    var id = this.navParams.get("id");
    this.goodsApi.goods({ id: id }).then((goods) => {

      goods.content = AppUtil.HtmlDecode(goods.content);
      goods.content = this.sanitizer.bypassSecurityTrustHtml(goods.content);

      goods.detail = AppUtil.HtmlDecode(goods.detail);
      goods.detail = this.sanitizer.bypassSecurityTrustHtml(goods.detail);
      this.title=goods.name;
      this.goods = goods;
    });
    this.goodsApi.goodsbanner({goods_id:id}).then((bannerlist)=>{
      this.bannerlist=bannerlist;
    });
    this.goodsApi.goodsattr({goods_id:id}).then((goodsattrlist)=>{
      for(let item of goodsattrlist){
        if(item.isdefault_value=='Y'){
          this.goodsattr=item;
          break;
        }
      }
      this.goodsattrlist=goodsattrlist;
    });

    this.goodsApi.goodsgoods({origoods_id:id}).then((rgoodslist)=>{
      
      this.rgoodslist=rgoodslist;
    });
    
  }

  add(){
    this.num++;
  }
  minus(){
    this.num--;
    if(this.num<1){
      this.num=1;
    }
  }
  pindex=0;
  slideChanged(){
    this.slides.getActiveIndex().then((pindex)=>{
      this.pindex=pindex;
    });
  }
  gotoStory(id) {
    console.log(this.modal);
    this.showModal(StoryPage, { id: id });
  }
  gotoGoods(id) {
    this.showModal(GoodsPage, { id: id });
  }
  gotoGoodsCategory(id) {
    this.showModal(GoodscategoryPage, { id: id });
  }
}
