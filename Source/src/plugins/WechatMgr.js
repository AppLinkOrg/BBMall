export class WechatMgr{
    static checkInstalled(callback){
        var Wechat=window.Wechat;
        console.log("checkInstalled");
        if(Wechat==undefined){
            console.log("wechat is not running in website");
            callback(false);
            return;
        }
        Wechat.isInstalled(function(installed) {
            callback(true);
        }, function(reason) {
            console.log("Failed: " + reason);
            callback(false);
        });
    }

    static authUserInfo(callback){
        var Wechat=window.Wechat;
        if(Wechat==undefined){
            console.log("wechat is not running in website");
            callback(false);
            return;
        }
        var scope = "snsapi_userinfo",
        state = "_" + (+new Date());
        Wechat.auth(scope, state, function (response) {
            // you may use response.code to get the access token.
            callback(response);
        }, function (reason) {
            alert("授权失败" + reason);
        });
    }
}