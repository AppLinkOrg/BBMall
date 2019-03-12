<template>
  <div class="div">
      <div id="target"></div>
    <div class="top-wrapper">
      <div class="top extra menu sticky">
        <div class="wrap">
          <div class="settings">
            <a href="#" class="open-popup" data-target="language_popup">
              <span class="label">Language:</span>
              <span class="dropdown">English US</span>
            </a>
            <a href="#" class="open-popup" data-target="country_popup">
              <span class="label">Country:</span>
              <span class="dropdown">United States – USD</span>
            </a>
          </div>
          <div class="right">
            <a href="/en-us/content/contact" class="hidden-sm">Contact</a>
            <a href="/en-us/content/press" class="hidden-sm">Press</a>
            <a href="/en-us/content/partners" class="hidden-sm">Partners</a>
            <a href="/en-us/content/about-vipp" class="hidden-sm">About Vipp</a>
            <a href="/en-us/content/career" class="hidden-sm">Career</a>
            <a href="/en-us/content/store-locator" class="hidden-sm">Store locator</a>
            <a href="/en-us/user" class="hidden-sm">My account</a>
            <a href="#" class="btn-icon-close">
              <i class="icon-close"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="top-wrapper">
      <div class="top primary menu sticky">
        <div class="wrap">
          <router-link fade-onload to="/" title="Home" rel="home" id="logo" style="opacity: 1;">
            <img class="logo logo-black" :src="uploadpath+'inst/'+InstInfo.logo" alt="Home">
          </router-link>
          <div class="right" fade-onload style="opacity: 1;">
            <router-link to="/cart">
              <img
                class="basket-icn basket-icn--black"
                :src="uploadpath+'resource/'+res.basket"
                alt="basket"
              >
              <span id="number-item-in-cart"></span>
            </router-link>
            <a class="btn-menu-burger" href="#" @click="showMenu()">
              <img
                class="icon-menu icon-menu--black"
                :src="uploadpath+'resource/'+res.menu"
                alt="menu"
              >
              <i class="icon-close"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Menu is displayed on mobile device -->
    <div class="tray-menu--mask" @click="hideMenu()"></div>
    <div class="tray-menu">
      <ul class="main menu-level menu-current menu-in">
        <li>
          <div>
            <img class="logo" src="https://vipp.com/sites/all/themes/vipp/logo.png" alt="Home">
          </div>
          <div>
            <img
              class="basket-icn"
              src="https://vipp.com/sites/all/themes/vipp/assets/img/icon-basket@2x.png"
              alt="basket"
            >
          </div>
        </li>
        <li>
          <ul class="first-nav">
            <li>
              <a href="#" class="big-txt" data-submenu="submenu-1">
                Shop
                <img
                  class="icon-arrow"
                  src="https://vipp.com/sites/all/themes/vipp/assets/img/icon-arrow-right.png"
                  alt="arrow"
                >
              </a>
            </li>
            <li class="padder">&nbsp;</li>

            <li>
              <a href="https://vipp.com/en-us/kitchen/vipp-kitchen" class="big-txt">Kitchen</a>
            </li>
            <li class="padder">&nbsp;</li>

            <li>
              <a href="https://vipp.com/en-us/kitchen/professionals" class="big-txt">Professionals</a>
            </li>
            <li class="padder">&nbsp;</li>

            <li>
              <a href="https://www.vipp.com/en-us/hotel" class="big-txt">Hotel</a>
            </li>
            <li class="padder">&nbsp;</li>

            <li>
              <a href="#" class="big-txt" data-submenu="submenu-2">
                Stories
                <img
                  class="icon-arrow"
                  src="https://vipp.com/sites/all/themes/vipp/assets/img/icon-arrow-right.png"
                  alt="arrow"
                >
              </a>
            </li>
            <li class="padder">&nbsp;</li>
          </ul>
        </li>
        <li class="padder">&nbsp;</li>
        <li>
          <!--<ul class="second-nav">
                <li><a href="about-us.html">About us</a></li>
                <li><a href="press.html">Press</a></li>
                <li><a href="#">Partners</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Find a Vipp store</a></li>
                <li><a href="#">My account</a></li>
          </ul>-->
          <ul class="second-nav">
            <li>
              <a href="/en-us/content/contact" class>Contact</a>
            </li>
            <li>
              <a href="/en-us/content/press" class>Press</a>
            </li>
            <li>
              <a href="/en-us/content/partners" class>Partners</a>
            </li>
            <li>
              <a href="/en-us/content/about-vipp" class>About Vipp</a>
            </li>
            <li>
              <a href="/en-us/content/career" class>Career</a>
            </li>
            <li>
              <a href="/en-us/content/store-locator" class>Store locator</a>
            </li>
            <li>
              <a href="/en-us/user" class>My account</a>
            </li>
          </ul>
        </li>
        <li class="padder">&nbsp;</li>
        <li>
          <ul class="third-nav">
            <li>
              <a href="#" data-submenu="submenu-3" class="normal-txt">
                English US
                <img
                  class="icon-arrow"
                  src="https://vipp.com/sites/all/themes/vipp/assets/img/icon-arrow-right.png"
                  alt="arrow"
                >
              </a>
            </li>
            <li>
              <a href="#" data-submenu="submenu-4" class="normal-txt">
                United States – USD
                <img
                  class="icon-arrow"
                  src="https://vipp.com/sites/all/themes/vipp/assets/img/icon-arrow-right.png"
                  alt="arrow"
                >
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <ul class="tray-menu--submenu menu-level submenu-1">
        <li>
          <ul class="top-menu">
            <li>
              <a href="#" class="btn-back normal-txt">
                <img
                  class="icon-arrow icon-arrow--left"
                  alt="arrow-left"
                  src="https://vipp.com/sites/all/themes/vipp/assets/img/icon-arrow-left.png"
                >Back
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" class="normal-txt">Select products</a>
        </li>
        <li class="padder">&nbsp;</li>
        <li>
          <a href="/en-us/products">All products</a>
        </li>
        <li class="padder">&nbsp;</li>
        <li>
          <a href="/en-us/shop/kitchen">Kitchen</a>
        </li>
        <li>
          <a href="/en-us/shop/bathroom">Bathroom</a>
        </li>
        <li>
          <a href="/en-us/shop/bins">Bins</a>
        </li>
        <li>
          <a href="/en-us/shop/lighting">Lighting</a>
        </li>
        <li>
          <a href="/en-us/shop/furniture">Furniture</a>
        </li>
        <li>
          <a href="/en-us/shop/accessories">Accessories</a>
        </li>
        <li>
          <a href="/en-us/shop/spare-parts">Spare parts</a>
        </li>
        <li class="padder">&nbsp;</li>
        <li class="spaceabove large">
          <a href="/en-us/kitchen/vipp-kitchen">Vipp kitchen</a>
        </li>
      </ul>
      <ul class="tray-menu--submenu menu-level submenu-2">
        <li>
          <ul class="top-menu">
            <li>
              <a href="#" class="btn-back normal-txt">
                <img
                  class="icon-arrow icon-arrow--left"
                  alt="arrow-left"
                  src="https://vipp.com/sites/all/themes/vipp/assets/img/icon-arrow-left.png"
                >Back
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="javascript:void(0);" class="normal-txt">Select Stories</a>
        </li>
        <li class="padder">&nbsp;</li>
        <li class="cate-stories active">
          <a href="/en-us/content/stories-list-us" data-cate-id="0">All stories</a>
        </li>
        <li class="padder">&nbsp;</li>
        <li class="cate-stories">
          <a href data-cate-link data-cate-id="31">Vipp history</a>
        </li>
        <li class="cate-stories">
          <a href data-cate-link data-cate-id="27">Kitchen stories</a>
        </li>
      </ul>
      <ul class="tray-menu--submenu menu-level submenu-3">
        <li>
          <ul class="top-menu">
            <li>
              <a href="#" class="btn-back normal-txt">
                <img
                  class="icon-arrow icon-arrow--left"
                  alt="arrow-left"
                  src="https://vipp.com/sites/all/themes/vipp/assets/img/icon-arrow-left.png"
                >Back
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" class="normal-txt">Select Language</a>
        </li>
        <li class="padder">&nbsp;</li>
        <li>
          <a class href="/da">Danish</a>
        </li>
        <li>
          <a class href="/en">English</a>
        </li>
        <li>
          <a class="active" href="/en-us">English US</a>
        </li>
        <li>
          <a class href="/fr">French</a>
        </li>
        <li>
          <a class href="/de">German</a>
        </li>
        <li>
          <a class href="/no">Norwegian Bokmål</a>
        </li>
      </ul>
      <ul class="tray-menu--submenu menu-level submenu-4">
        <li>
          <ul class="top-menu">
            <li>
              <a href="#" class="btn-back normal-txt">
                <img
                  class="icon-arrow icon-arrow--left"
                  alt="arrow-left"
                  src="https://vipp.com/sites/all/themes/vipp/assets/img/icon-arrow-left.png"
                >Back
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" class="normal-txt">SELECT country – currency</a>
        </li>
        <li class="padder">&nbsp;</li>
        <form
          action="/en-us"
          method="post"
          id="e-common-form-change-country"
          accept-charset="UTF-8"
        >
          <div>
            <div class="form-item form-type-select form-item-country">
              <label for="edit-country">Country</label>
              <select id="edit-country" name="country" class="form-select">
                <option value="AT">Austria - EUR</option>
                <option value="BE">Belgium - EUR</option>
                <option value="CZ">Czech Republic - EUR</option>
                <option value="DK">Denmark - DKK</option>
                <option value="FI">Finland - EUR</option>
                <option value="FR">France - EUR</option>
                <option value="DE">Germany - EUR</option>
                <option value="GR">Greece - EUR</option>
                <option value="IE">Ireland - EUR</option>
                <option value="IT">Italy - EUR</option>
                <option value="LU">Luxembourg - EUR</option>
                <option value="NL">Netherlands - EUR</option>
                <option value="NO">Norway - NOK</option>
                <option value="PL">Poland - EUR</option>
                <option value="PT">Portugal - EUR</option>
                <option value="ES">Spain - EUR</option>
                <option value="SE">Sweden - SEK</option>
                <option value="GB">United Kingdom - GBP</option>
                <option value="US">United States - USD</option>
              </select>
            </div>
            <input id="current-link" type="hidden" name="current_link" value>
            <input type="submit" id="edit-submit--2" name="op" value="OK" class="form-submit">
            <input
              type="hidden"
              name="form_build_id"
              value="form-s57EJN1FqSAj3VnRK37EKvD2W6BUzJdqaS2YtrhEaSc"
            >
            <input type="hidden" name="form_id" value="e_common_form_change_country">
          </div>
        </form>
      </ul>

      <ul class="tray-menu--submenu menu-level submenu-5">
        <li>
          <ul class="top-menu">
            <li>
              <a href="#" class="btn-back normal-txt">Back</a>
            </li>
          </ul>
        </li>
        <div class="popup-box notification">
          <div class="popup-title normal-txt">
            <h3>You are about to change your shipping location</h3>
          </div>
          <div class="popup-content">
            <p>You are about to change your shipping location. &nbsp;This might result in some products being removed from your cart.</p>
            <p>
              For more information, please read our
              <a
                href="/en/content/terms-and-conditions"
                target="_blank"
              >terms &amp; conditions</a>
            </p>
          </div>
          <div class="wrap-bottom">
            <a href="#" class="button grey">Continue</a>
            <a href="#" class="underline">Back</a>
          </div>
        </div>
      </ul>
    </div>
    <transition name="router-slid" mode="out-in">
      <router-view></router-view>
    </transition>
    <div class="footer">
      <div class="bt-scroll-top" @click="goTop()">
        <i class="icon-arrow-down"></i>
      </div>
      <ul>
        <li>
          <router-link to="/contact" style="color:#282828">联系我们</router-link>
        </li>
        <li>
          <router-link to="/newsletter" style="color:#282828">接收最新</router-link>
        </li>
        <li>
          <router-link to="/news" style="color:#282828">新闻资讯</router-link>
        </li>
      </ul>

      <div class="copyright">COPYRIGHT @ {{InstInfo.name}} {{year}}</div>
      <div class="term">
        <router-link to="/terms" style="color:#282828">相关条款</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { AppBase } from "../app/AppBase";
class Content extends AppBase {
  constructor() {
    super();
  }
  setData(data) {
    data.year = new Date().getFullYear();
    return data;
  }
  showMenu() {
    document.querySelector("body").classList.add( "open-tray-menu");
  }
  hideMenu() {
    document.querySelector("body").classList.remove("open-tray-menu");
  }
  onMyShow() {
    window.addEventListener("scroll", this.scrollToTop);
  }
  scrollToTop() {
    var scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    console.log(scrollTop);
  }
  goTop(){
      target.scrollIntoView();
  }
}
var content = new Content();
var body = content.generateBodyJson();
body.methods.showMenu = content.showMenu;
body.methods.hideMenu = content.hideMenu;
body.methods.scrollToTop = content.scrollToTop;
body.methods.goTop = content.goTop;

export default body;
</script>

<style lang="scss" scoped>
@import "src/style/vue-transition.scss";
.div {
  min-height: 100%;
}
</style>
