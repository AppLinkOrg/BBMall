<template>
  <div>
    <div class='topfix' >
            <img :src="uploadpath+'resource/'+res.back" style="height:20px;"  @click="back()" />
    </div>
    <div class="top-story-md">
      <div 
        class="top-story-md--image desktop"
        :style="{backgroundImage: 'url(' + uploadpath+'story/' +story.banner+ ')'}"
      >
        <img :src="uploadpath+'story/' +story.banner" alt>
      </div>

      <div
        class="top-story-md--image mobile"
        data-height="1706"
        data-width="1280"
        :style="{backgroundImage: 'url(' + uploadpath+'story/' +story.banner+ ')'}"
      >
        <img :src="uploadpath+'story/' +story.banner" alt>
      </div>
      <div
        class="top-story-md--content row"
        style="z-index: 2;"
      >
        <div class="top-story-md--content-wrapper col-xs-12 col-md-6" >
          <h4>{{story.label}}</h4>
          <h1>{{story.title}}</h1>
          <h3>{{story.subtitle}}</h3>
          <p style="font-size:14px;line-height:20px;">{{story.summary}}</p>
        </div>
      </div>
      <!-- ./Module E42-->
    </div>

    <div class="wrapper-main-content">
      <div class="container-fluid" v-html="story.content"></div>
    </div>

    <div class="wrapper-main-content">
      <div class="container-fluid">
        <div
          class="row full wrapper-content product-column product-four-column slide-to-top"
          v-if="goods.length>0"
        >
          <div class="col-md-12 product-column-title">
            <h3>{{story.goodsheader}}</h3>
          </div>
          <ul class="col-md-12 product-list">
            <li class="col-md-6" v-for="g of goods">
              <a @click="gotoGoods(g.goods_id)">
                <div class="item in-view">
                  <div class="mo">
                    <div
                      class="super-img"
                      nid
                      :style="{backgroundImage: 'url(' + uploadpath+'goods/' +g.goods_cover+ ')'}"
                    >
                      <img :src="uploadpath+'goods/' +g.goods_cover">
                    </div>
                  </div>
                  <div class="line">
                    <span class="one-line">{{g.goods_name}}</span>
                    <span class="price">{{g.goods_pricetxt}}</span>
                  </div>
                  <div class="container portrait loaded">
                    <div
                      class="img-wrapper"
                      style="width: 168px; height: 168px; position: relative;"
                    >
                      <img :src="uploadpath+'goods/' +g.goods_cover">
                    </div>
                  </div>
                  <div class="line">
                    <p class="seriesnumber">{{g.goods_sno}}</p>
                    <div class="color-indicator">
                      <!--<div class="color" style="background: #fff; border: 1px solid #a4a4a4;"></div>-->
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>


        <div style="height:30px;"></div>
        <div class="row full slide-to-top">
          <div class="col-xs-14">
            <div class="mod-stories-thumb no-margin stories-three-columns">
              <ul >
                <li class="item-text-on-img fade-onscroll in-view" v-for="s of rstory">
                  <a  @click="refresh(s.rstory_id)">
                    <div
                      class="wrap-img wrap-img--landscape"
                      :style="{backgroundImage: 'url(' + uploadpath+'story/' +s.rstory_banner+ ')'}"
                    >
                      <img :src="uploadpath+'story/' +s.rstory_banner" alt>
                    </div>
                    <div
                      class="wrap-img wrap-img--portrait"
                      :style="{backgroundImage: 'url(' + uploadpath+'story/' +s.rstory_banner+ ')'}"
                    >
                      <img :src="uploadpath+'story/' +s.rstory_banner" alt>
                    </div>
                    <div class="wrap-text">
                      <h4>{{s.rstory_label}}</h4>
                      <h3>{{s.rstory_title}}</h3>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>
<script>
import { AppBase } from "../../app/AppBase";
import { AppUtil } from "../../app/apputil.js";

class Content extends AppBase {
  constructor() {
    super();
  }
  setData(data) {
    data.story = null;
    data.goods = [];
    data.rstory = [];
    return data;
  }
  
  onMyShow() {
    document.querySelector("body").classList.remove("show-top-story");
    var id=this.$route.params.id;
    //alert(id);
    //var id = 3;
    //document.querySelector("body").classList.add("story-page");
    this.post("goods", "story", { id: id }).then(story => {
      story.content = AppUtil.HtmlDecode(story.content);
      this.story = story;
      this.post("goods", "storygoods", { story_id: id }).then(goods => {
        this.goods = goods;
      });
      this.post("goods", "storystory", { story_id: id }).then(rstory => {
        this.rstory = rstory;
      });

      setTimeout(() => {
        document.querySelector("body").classList.add("show-top-story");
      }, 2000);
    });
  }
  destroyed() {
    document.querySelector("body").classList.remove("show-top-story");
  }
  scrollTopChange(top) {}
  refresh(id){
    this.push("/story/"+id);
    this.onMyShow();
  }
}
var content = new Content();
var body = content.generateBodyJson();
body.methods.refresh=content.refresh;

export default body;
</script>

<style scoped>
.topfix{
    z-index: 3;
    position: absolute;
    top: 0;
    left: 0;
    width:100vw;
    padding:10px;
}
</style>
