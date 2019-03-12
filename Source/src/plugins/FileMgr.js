export class FileMgr{
    static Upload(filepath,uploadapi,callback,failcallback){
        var options = new FileUploadOptions();
        options.fileKey = "img";

        var ft = new FileTransfer();
        ft.upload(filepath, encodeURI(uploadapi), callback, (e)=>{
            console.log("uploadfile");
            console.log(e);
            failcallback(filepath);
        }, options);
    }
}