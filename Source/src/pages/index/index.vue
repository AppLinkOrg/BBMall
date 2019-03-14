<template>
  <div class="wrapper-main-content">
    <div class="wrapper-main-content">
      <div class="container-fluid">
        <!-- Module E01: Top element -->
        <div class="row full has-fold" :v-if="recommgoodsT!=null">
          <div class="col-xs-14">
            <div
              class="hero-product-container"
              :style="{backgroundImage: 'url(' + uploadpath+'indexrecommgoods/' +recommgoodsT.photo+ ')'}"
            >
              <div class="hero-product-description white">
                <h4>{{recommgoodsT.intro}}</h4>
                <h1 class="hero-heading">{{recommgoodsT.slogen}}</h1>
                <a @click="tryGoto(recommgoodsT)" class="btn-md">
                  <span>{{recommgoodsT.btntxt}}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- ./E01 -->
        <div v-for="(cat, i) of recommgoodscat">
          <div v-if="i==1&&recommgoodsM!=null">
            <div style="height:30px;"></div>
            <div class="row full has-fold">
              <div class="col-xs-14">
                <!-- has uploaded mobile video: .top-img-md.top-img-md--on-mobile.top-img-md--video -->
                <!-- if not: .top-img-md.top-img-md--on-mobile  -->
                <div
                  class="top-img-md top-img-md--on-mobile"
                  :style="{backgroundImage: 'url(' + uploadpath+'indexrecommgoods/' +recommgoodsM.photo+ ')'}"
                >
                  <div
                    class="top-img-md--image"
                    :style="{backgroundImage: 'url(' + uploadpath+'indexrecommgoods/' +recommgoodsM.photo+ ')'}"
                  ></div>

                  <div class="top-img-md--content white">
                    <h4>{{recommgoodsM.intro}}</h4>

                    <h1 class="hero-heading">{{recommgoodsM.slogen}}</h1>
                    <a
                      href="#"
                      @click="tryGoto(recommgoodsM)"
                      class="button view-now white"
                    >{{recommgoodsM.btntxt}}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="i==2&&recommgoodsML!=null&&recommgoodsMR!=null">
            <div style="height:30px;"></div>
            <div class="row full collection-teaser slide-to-top">
              <div class="col-xs-14">
                <div class="row full">
                  <div class="col-xs-7">
                    <div
                      class="hero-story-container fade-onscroll in-view"
                      :style="{backgroundImage: 'url(' + uploadpath+'indexrecommgoods/' +recommgoodsML.photo+ ')'}"
                    >
                      <img :src="uploadpath+'indexrecommgoods/' +recommgoodsML.photo" alt>
                      <div class="hero-story-description">
                        <div class="hero-story-description__wrapper">
                          <h4>{{recommgoodsML.intro}}</h4>
                          <h1>{{recommgoodsML.slogen}}</h1>
                          <a
                            href="#"
                            @click="tryGoto(recommgoodsML)"
                            class="button white view-now"
                          >{{recommgoodsML.btntxt}}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-7">
                    <div
                      class="hero-story-container fade-onscroll in-view"
                      :style="{backgroundImage: 'url(' + uploadpath+'indexrecommgoods/' +recommgoodsMR.photo+ ')'}"
                    >
                      <img :src="uploadpath+'indexrecommgoods/' +recommgoodsMR.photo" alt>
                      <div class="hero-story-description">
                        <div class="hero-story-description__wrapper">
                          <h4>{{recommgoodsMR.intro}}</h4>

                          <h1>{{recommgoodsMR.slogen}}</h1>
                          <a
                            href="#"
                            @click="tryGoto(recommgoodsMR)"
                            class="button white view-now"
                          >{{recommgoodsMR.btntxt}}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="i==3&&recommgoodsB!=null">
            <div style="height:30px;"></div>
            <div class="row full has-fold">
              <div class="col-xs-14">
                <!-- has uploaded mobile video: .top-img-md.top-img-md--on-mobile.top-img-md--video -->
                <!-- if not: .top-img-md.top-img-md--on-mobile  -->
                <div
                  class="top-img-md top-img-md--on-mobile"
                  :style="{backgroundImage: 'url(' + uploadpath+'indexrecommgoods/' +recommgoodsB.photo+ ')'}"
                >
                  <div
                    class="top-img-md--image"
                    :style="{backgroundImage: 'url(' + uploadpath+'indexrecommgoods/' +recommgoodsB.photo+ ')'}"
                  ></div>

                  <div class="top-img-md--content white">
                    <h4>{{recommgoodsB.intro}}</h4>

                    <h1 class="hero-heading">{{recommgoodsB.slogen}}</h1>
                    <a
                      href="#"
                      @click="tryGoto(recommgoodsB)"
                      class="button view-now white"
                    >{{recommgoodsB.btntxt}}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="row full wrapper-content product-column product-four-column slide-to-top"
            v-bind:class="{ 'product-four-column--wide': cat.inindexgoodsstyle=='3' }"
          >
            <div class="col-md-12 product-column-title">
              <h3>{{cat.inindexheader}}</h3>
            </div>
            <ul class="col-md-12 product-list">
              <li class="col-md-6" v-for="goods of cat.goodslist">
                <a @click="gotoGoods(goods.id)">
                  <div class="item in-view">
                    <div class="mo"></div>
                    <div class="line">
                      <span class="one-line">{{goods.name}}</span>
                      <span class="price">{{goods.pricetxt}}</span>
                    </div>
                    <div class="container portrait loaded">
                      <div class="img-wrapper">
                        <img :src="uploadpath+'goods/' +goods.cover">
                      </div>
                    </div>
                    <div class="line">
                      <p class="seriesnumber">{{goods.sno}}</p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>

            <a
              href="#"
              @click="pushParam('/goodscat',{id:cat.id})"
              class="view-more visible-xs"
            >{{cat.inindexfooter}}</a>
            <!-- E36: MODULE TOP IMAGE -->
          </div>
        </div>
        <div style="height:30px;"></div>
        <div class="row full slide-to-top">
          <div class="col-xs-14">
            <div class="mod-stories-thumb no-margin stories-three-columns">
              <ul >
                <li class="item-text-on-img fade-onscroll in-view" v-for="story of storylist">
                  <a @click="push('/story/'+story.id)">
                    <div
                      class="wrap-img wrap-img--landscape"
                      :style="{backgroundImage: 'url(' + uploadpath+'story/' +story.banner+ ')'}"
                    >
                      <img :src="uploadpath+'story/' +story.banner" alt>
                    </div>
                    <div
                      class="wrap-img wrap-img--portrait"
                      :style="{backgroundImage: 'url(' + uploadpath+'story/' +story.banner+ ')'}"
                    >
                      <img :src="uploadpath+'story/' +story.banner" alt>
                    </div>
                    <div class="wrap-text">
                      <h4>{{story.label}}</h4>
                      <h3>{{story.title}}</h3>
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
class Content extends AppBase {
  constructor() {
    super();
  }

  setData(data) {
    data.recommgoodsT = null;
    data.recommgoodsM = null;
    data.recommgoodsML = null;
    data.recommgoodsMR = null;
    data.recommgoodsB = null;
    data.recommgoodscat = [];
    data.storylist = [];
    return data;
  }

  onMyShow() {
    this.post("goods", "indexrecommgoods", {
      position: "T",
      limit: " 0,1"
    }).then(recommgoods => {
      if (recommgoods.length > 0) {
        this.recommgoodsT = recommgoods[0];
      }
    });
    this.post("goods", "indexrecommgoods", {
      position: "M",
      limit: " 0,1"
    }).then(recommgoods => {
      if (recommgoods.length > 0) {
        this.recommgoodsM = recommgoods[0];
      }
    });
    this.post("goods", "indexrecommgoods", {
      position: "ML",
      limit: " 0,1"
    }).then(recommgoods => {
      if (recommgoods.length > 0) {
        this.recommgoodsML = recommgoods[0];
      }
    });
    this.post("goods", "indexrecommgoods", {
      position: "MR",
      limit: " 0,1"
    }).then(recommgoods => {
      if (recommgoods.length > 0) {
        this.recommgoodsMR = recommgoods[0];
      }
    });
    this.post("goods", "indexrecommgoods", {
      position: "B",
      limit: " 0,1"
    }).then(recommgoods => {
      if (recommgoods.length > 0) {
        this.recommgoodsB = recommgoods[0];
      }
    });
    this.post("goods", "indexgoodscat", {}).then(recommgoodscat => {
      this.recommgoodscat = recommgoodscat;
    });
    this.post("goods", "storylist", {}).then(storylist => {
      this.storylist = storylist;
    });
  }
  tryGoto(recommgoods) {
    if (recommgoods.gototype == "A") {
      this.gotoGoods(recommgoods.goods_id);
    } else {
      this.pushParam("/goodscat", recommgoods.goodscat_id);
    }
  }
}
var content = new Content();
var body = content.generateBodyJson();
body.methods.tryGoto = content.tryGoto;

export default body;
</script>