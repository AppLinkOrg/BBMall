import { Component } from '@angular/core';
import { AppBase } from '../AppBase';
import { Router } from '@angular/router';
import { NavController, ModalController, ToastController, AlertController, NavParams } from '@ionic/angular';
import { GoodsApi } from 'src/providers/goods.api';
import { AppUtil } from '../app.util';

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

  story = null;
  goods = [];
  rstory = [];
  showcov=false;
  scrolltop=0;

  onMyLoad(){
    var id=this.navParams.get("id");
    this.goodsApi.story({id:id}).then((story)=>{
      
      story.content = AppUtil.HtmlDecode(story.content);
      this.story=story;
      this.goodsApi.storygoods({story_id:id}).then((goods)=>{
        this.goods=goods;
      });
      this.goodsApi.storystory({story_id:id}).then((rstory)=>{
        this.rstory=rstory;
      });
      setTimeout(()=>{
        this.showcov=true;
      },2000);
    });


    
  }
  logScrollStart(){
    console.log("logScrollStart");
  }
  logScrolling(e){
    console.log(e);
    this.scrolltop=e.detail.scrollTop;
  }
  logScrollEnd(){
    console.log("logScrollEnd");
  }
}
