import {
  basename
} from "path";
import {
  baseUrl,
  imgBaseUrl,
  fileUploadAPI
} from '../config/env';
import http from '@/config/http';
import { PhotoMgr } from '@/plugins/PhotoMgr';
import { FileMgr } from '@/plugins/FileMgr';


export class AppBase {

  // data = {
  //   PageTitle: "",
  //   InstInfo: {},
  //   res: [],
  //   MemberInfo: null,
  //   uploadpath: imgBaseUrl
  // };
  static Resources = null;
  static InstInfo = null;
  Params={};
  Page = null;
  title = "";
  constructor(page) {

  }


  onBaseLoad(options) {
    console.log("onBaseLoad:param");
    console.log(this.$route.params);
    this.onMyLoad();
  }

  
  onMyLoad(options) {
    console.log("onMyLoad");
  }
  onBaseShow() {
    console.log("onBaseShow");
    if (AppBase.InstInfo == null||1==1) {
      this.post("inst", "info", {}).then((InstInfo) => {
        this.InstInfo = InstInfo;
        AppBase.InstInfo = InstInfo;
      });
    } else {
      this.InstInfo = AppBase.InstInfo;
    }
    if (AppBase.Resources == null||1==1) {
      this.post("inst", "resources", {}).then((resources) => {
        this.res = resources;
        AppBase.Resources = resources;
      });
    } else {
      this.res = AppBase.Resources;
    }

    var token = window.localStorage.getItem("UserToken");
    //alert(token);
    if (token == null) {
      this.MemberInfo = null;
      this.onMyShow();
    } else {
      this.post("member", "info", {}).then((memberinfo) => {
        if (memberinfo == null || memberinfo.mobile == undefined || memberinfo.mobile == "") {
          memberinfo = null;
        } else {}
        this.MemberInfo = memberinfo;
        this.onMyShow();
      });
    }
  }

  onMyShow() {
    console.log("onMyShow");
  }

  post(model, func, params) {
    return http.post('api/' + model + '/' + func, params).then((ret) => {
      return ret;
    });
  }

  setData(data){
    return data;
  }

  generateBodyJson() {
    var base = this;
    return {
      Base: base,
      data(){
        return base.setData({
          PageTitle: "",
          InstInfo: {},
          res: [],
          MemberInfo: null,
          uploadpath: imgBaseUrl
        });
      },
      methods: {
        onMyLoad: base.onMyLoad,
        onMyShow: base.onMyShow,
        onBaseLoad: base.onBaseLoad,
        onBaseShow: base.onBaseShow,
        toast: base.toast,
        info: base.info,
        confirm: base.confirm,
        post: base.post,
        isLogin: base.isLogin,
        push: base.push,
        pushParam: base.pushParam,
        back: base.back,
        store: base.store,
        dataReturn:base.dataReturn,
        dataReturnCallback:base.dataReturnCallback,
        logout: base.logout,
        takePhoto: base.takePhoto,
        choosePhoto: base.choosePhoto,
        uploadFile: base.uploadFile,
        gotoGoods: base.gotoGoods
      },
      onMyLoad: base.onMyLoad,
      onMyShow: base.onMyShow,
      beforeCreate: base.beforeCreate,
      created: base.created,
      beforeMount: base.beforeMount,
      mounted: base.mounted,
      beforeUpdate: base.beforeUpdate,
      updated: base.updated,
      beforeDestory: base.beforeDestory,
      destroyed: base.destroyed
    }
  }
  beforeCreate() {
    console.log("beforeCreate");
  }
  created() {
    console.log("created");
    this.onBaseLoad();
  }
  beforeMount() {
    console.log("beforeMount");
  }
  mounted() {
    console.log("mounted");
    this.onBaseShow();
  }
  beforeUpdate() {
    //console.log("beforeUpdate");
  }
  updated() {
    //console.log("updated");
  }
  beforeDestory() {
    console.log("beforeDestory");
  }
  destroyed() {
    console.log("destroyed");
  }
  toast(message, position = "", icon = "") {
    Toast({
      message: message,
      position: position,
      iconClass: icon,
      duration: (message.length / 5) * 1000 + 3000
    });
  }
  info(message) {
    MessageBox.alert(message);
  }
  confirm(message, callback) {
    return MessageBox.confirm(message, "提示").then((action) => {
      return action == "confirm";
    });
  }
  isLogin() {
    return this.MemberInfo != null;
  }
  logout(){
    this.MemberInfo=null;
    window.localStorage.removeItem("UserToken");
  }
  push(url, needlogin = false) {
    if (needlogin == false) {
      this.$router.push(url);
    } else {
      if (this.isLogin() == false) {
        this.push("/login");
      } else {
        this.$router.push(url);
      }
    }
  }
  pushParam(name,param, needlogin = false) {
    console.log("go to push param");
    console.log(param);
    console.log(name);
    console.log(this.$router);
    if (needlogin == false) {
      this.$router.push({ name: name, params: param});
    } else {
      if (this.isLogin() == false) {
        this.push("/login");
      } else {
        this.$router.push({ name: name, params: param});
      }
    }
  }
  back(level = -1) {
    this.$router.go(level);
  }

  store(name, key = null) {
    if (key == null) {
      return window.localStorage.getItem(name);
    } else {
      window.localStorage.setItem(name, key);
      return "";
    }
  }
  dataReturn(data){
    this.$emit("dataReturnCallback",data);
  }
  dataReturnCallback(retdata){
    console.log(retdata);
  }
  //拍照
  takePhoto(success){
   
    PhotoMgr.takePhoto(success,(e)=>{
      console.log("take photo fail");
      console.log(e);
    });
  }
  //获取手机图片
  choosePhoto(success){
    
    PhotoMgr.getPicture(success,(e)=>{
      
      console.log("get photo fail");
      console.log(e);
    });
  }
  
  uploadFile(  filepath, module,callback,allcompletecallback=undefined) {
    var filearr=[];
    if(Array.isArray(filepath)){
      filearr=filepath;
    }else{
      filearr.push(filepath);
    }
    var uploadapi=fileUploadAPI + "?field=img&module=" + module;
    Indicator.open({
      text: '上传中',
      spinnerType: 'fading-circle'
    });
    var all=filearr.length;
    var rets=[];
    var count=0;
    for(var f of filearr){
      FileMgr.Upload(f,uploadapi,(data)=>{
        console.log(data);
        count++;
        var ret=data.response.toString().split("|~~|")[1];
        rets.push(ret);
        if(count>=all){
          Indicator.close();
          if(allcompletecallback!=undefined){
            allcompletecallback(rets);
          }
        }
        if(callback!=undefined){
          callback(ret);
        }
      },(uploadfile)=>{
        count++;
        if(count>=all){
          Indicator.close();
        }
      });
    }
  }

  gotoGoods(goods_id){
    this.pushParam("goods",{id:goods_id});
  }

  //   let options: FileUploadOptions = {
  //       fileKey: 'img'
  //   }


  //   var fileTransfer: FileTransferObject = transfer.create();
  //   return fileTransfer.upload(filepath, ApiConfig.getFileUploadAPI() + "?field=img&module=" + module, options)
  //       .then((data) => {
  //           // success
  //           //alert(data);
  //           return data.response.toString().split("|~~|")[1];
  //       }, (err) => {
  //           alert("upload faile");
  //           // error
  //       })
  // }
}
