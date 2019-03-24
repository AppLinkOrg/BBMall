import { ApiConfig } from "./api.config";
import { AppUtil } from "./app.util";
import { NavController, ModalController, ToastController, NavParams, AlertController }
    from "@ionic/angular";
import { InstApi } from "../providers/inst.api";
import { MemberApi } from "../providers/member.api";
import { AppComponent } from "./app.component";
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { ReturnStatement } from "@angular/compiler";
import { ViewController } from '@ionic/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

export class AppBase implements OnInit {
    public needlogin = false;

    public static myapp: AppComponent = null;
    public static instapi: InstApi = null;
    public static memberapi: MemberApi = null;
    public static UNICODE = "yyh";

    public statusBarStyle = "X";//{DARK}
    public uploadpath: string = ApiConfig.getUploadPath();
    public util = AppUtil;
    public static Resources = null;
    public res = [];
    public static InstInfo = null;
    public InstInfo = { logo: "", memberlogo: "" };
    public MemberInfo = { id: "", name: "", photo: "", introduce: "" };

    public options = null;

    public firseonshow = true;
    public scrolltop = 0;
    public headerscroptshow = 0;


    public constructor(
        public router: Router,
        public navCtrl: NavController,
        public modalCtrl: ModalController,
        public toastCtrl: ToastController,
        public alertCtrl: AlertController) {


    }
    setStatusBar() {
        //  this.statusBar.styleLightContent();
    }
    ngOnInit() {

        ApiConfig.SetUnicode(AppBase.UNICODE);
        this.getResources();
        this.getInstInfo();
        this.onMyLoad();
        this.setStatusBar();
    }
    onMyLoad() {
    }
    getInstInfo() {
        if (AppBase.InstInfo == null) {
            AppBase.instapi.info({}, false).then((instinfo) => {
                AppBase.InstInfo = instinfo;
                this.InstInfo = instinfo;
                console.log(instinfo);
            });
        } else {
            this.InstInfo = AppBase.InstInfo;
        }
    }
    getMemberInfo() {
        AppBase.memberapi.info({}).then((memberinfo) => {
            if (memberinfo == null || memberinfo.mobile == undefined || memberinfo.mobile == "") {
                //alert("?");
                memberinfo = null;
            }
            this.MemberInfo = memberinfo;

        });
    }
    getResources() {
        if (AppBase.Resources == null) {
            AppBase.instapi.resources({}, false).then((res) => {
                AppBase.Resources = res;
                this.res = res;
            });
        } else {
            this.res = AppBase.Resources;
        }
    }
    ionViewDidEnter() {
        var token = window.localStorage.getItem("token");
        //alert(token);
        if (token == null) {
            if (this.needlogin == true) {
                this.modal("LoginPage", {});
            } else {

                this.onMyShow();
            }
        } else {
            ApiConfig.SetToken(token);
            AppBase.memberapi.info({}).then((memberinfo) => {
                if (memberinfo == null || memberinfo.mobile == undefined || memberinfo.mobile == "") {

                    memberinfo = null;
                    if (this.needlogin == true) {
                        this.modal("LoginPage", {});
                        return;
                    }
                }
                this.MemberInfo = memberinfo;
                this.onMyShow();
            });
        }
        this.firseonshow = false;
    }
    onMyShow() {

    }
    onPullRefresh(ref) {
        this.onMyShow();
        ref.complete();
    }
    doRefresh(ref) {
        this.onPullRefresh(ref);
        // setTimeout(() => {
        //     ref.complete();
        // }, 1000);
    }
    onLoadMoreRefresh(ref) {
        ref.complete();
    }
    doInfinite(infiniteScroll) {
        this.onLoadMoreRefresh(infiniteScroll);
        // setTimeout(() => {
        //   infiniteScroll.complete();
        // }, 1000);
    }
    back() {
        this.navCtrl.pop();
    }
    close() {
        this.modalCtrl.dismiss({});
    }
    returnData(data) {
        this.modalCtrl.dismiss(data);
    }
    nagivate(pagename, param = {}) {
        this.router.navigate([pagename], { queryParams: param })
    }
    async modal(pageobj, param = {}, callback = null) {
        var modal = await this.modalCtrl.create({
            component: pageobj,
            componentProps: param
        });
        await modal.present();
    }

    content(title, key) {
        this.modal("ContentPage", { title, key });
    }

    decode(val) {
        return AppUtil.HtmlDecode(val);
    }
    contentToLine(str) {
        if (str == null) {
            return "";
        }
        return str.split("\n");
    }

    tel(tel) {
        window.location.href = "tel:" + tel;
    }
    async toast(msg) {
        if (msg == "") {
            return;
        }
        console.log(((msg.length / 3) + 1) * 1000);
        const toast = await this.toastCtrl.create({
            message: msg,
            duration: ((msg.length / 3) + 1) * 1000
        });
        toast.present();
    }
    async alert(msg) {

        const alert = await this.alertCtrl.create({
            header: "提示",
            subHeader: msg,
            buttons: ["知道了"]
        });
        alert.present();
    }
    async confirm(msg, confirmcallback) {

        const alert = await this.alertCtrl.create({
            header: "提示",
            subHeader: msg,
            buttons: [{
                text: "取消",
                handler: () => {
                    console.log('Disagree clicked');

                    confirmcallback(false);
                }
            }, {
                text: "好的",
                handler: () => {
                    confirmcallback(true);
                }
            }]
        });
        alert.present();
    }
    async checkLogin(callback) {

    }
    hasLogin() {
        return this.MemberInfo != null;
    }
    store(key, value = null) {
        if (value == null) {
            return window.localStorage.getItem(name);
        } else {
            window.localStorage.setItem(name, value);
            return "";
        }
    }

    async uploadFile(transfer: FileTransfer, filepath: string, module: string) {
        let options: FileUploadOptions = {
            fileKey: 'img'
        }


        var fileTransfer: FileTransferObject = await transfer.create();
        return fileTransfer.upload(filepath, ApiConfig.getFileUploadAPI() + "?field=img&module=" + module, options)
            .then((data) => {
                // success
                //alert(data);
                return data.response.toString().split("|~~|")[1];
            }, (err) => {
                alert("upload faile");
                // error
            })
    }
    getMemberPhoto(photo: string) {
        if (photo == null || photo == undefined || photo.trim() == "") {
            return this.uploadpath + "inst/" + this.InstInfo.logo;
        } else {
            return this.uploadpath + "member/" + photo;
        }
    }

    logScrollStart() {
        console.log("logScrollStart");
    }
    logScrolling(e) {
        console.log(e);
        this.scrolltop = e.detail.scrollTop;
    }
    logScrollEnd() {
        console.log("logScrollEnd");
    }
    gotoDiv(id){
        var target = document.querySelector('#'+id );
        target.scrollIntoView();
    }
}