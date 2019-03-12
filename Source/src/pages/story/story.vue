<template>
  <div>
    <div class="wrapper-main-content scroll" >
      <div class="container-fluid">
        <!-- E42: Top story in Story page -->
        <div class="row full">
          <div class="col-xs-14">
            <!-- has uploaded desktop video: .top-img-md.top-img-md--video -->
            <!-- if not: .top-img-md  -->
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
                style="z-index: 2;background-color: rgba(237,237,237,0.52);"
              >
                <div class="top-story-md--content-wrapper col-xs-12 col-md-6" style="color:#343a40">
                  <h4>STORY</h4>

                  <h1>American Aesop Hub</h1>

                  <h3>New York, USA</h3>

                  <p>
                    Nestled amongst skyscrapers in Manhattan's Flatiron district, Australian skin care brand Aesop has taken root on American soil with a new office space. Tacklebox Architecture was selected to design the New York office
                    and American headquarters for Aesop Skin Care. The design brief calls for architectural modesty with a domestic quality and at the core of the office, an almost 10-meter-long Vipp kitchen invites for communal gatherings.
                  </p>
                </div>
              </div>
              <!-- ./Module E42-->
            </div>
          </div>
        </div>

        <!-- E40: PROMOTED TEXT MODULE -->
        <div class="row full slide-to-top">
          <div class="col-xs-14">
            <div class="promoted-text-md has-spacing dark_grey" style="background-color: #ffffff;">
              <div class="promoted-text-md--wrapper">
                <h4>Julia Collis, Retail Design Creative Manager at Aesop</h4>

                <h3>'Our offices remain modest in design ambition, favouring quality over opulence. The clean, restrained aesthetic of a Vipp kitchen aligns seamlessly with the New York office.'</h3>
              </div>
            </div>
          </div>
        </div>
        <!-- ./Module E40 -->
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
    data.story = null;
    return data;
  }
  onMyShow() {
    //var id=this.$route.params.id;
    var id = 1;
    this.post("goods", "story", { id: id }).then(story => {
      this.story = story;
      setTimeout(() => {
        document.querySelector("body").classList.add("story-page");
        document.querySelector("body").classList.add("show-top-story");
      }, 1000);
    });
  }
}
var content = new Content();
var body = content.generateBodyJson();

export default body;
</script>

