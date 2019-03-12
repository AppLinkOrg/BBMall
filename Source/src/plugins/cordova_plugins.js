import {
  Toast
} from 'mint-ui'
import {
  fileUploadAPI
} from '@/config/env'


export const _Camera = {

  chooseSinglePicture: function(srcType, width, height, cb) {
    var that = this
    var options = {
      quality: 100,
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: srcType,
      encodingType: Camera.EncodingType.JPEG,
      mediaType: Camera.MediaType.PICTURE,
      allowEdit: true,
      targetWidth: width,
      targetHeight: height,
      correctOrientation: true
    }

    navigator.camera.getPicture(onSuccess, onFail, options)

    function onSuccess(res) {
      that.uploadFile(res, 'member', cb)
    }

    function onFail(message) {
      Toast({
        message: '打开图片遇到问题',
        position: 'bottom',
        duration: 3000
      })
    }

  },
  choosePictures: function() {
    console.log(ImagePicker)
    ImagePicker.getPictures(function(result) {
      console.log(result)
    }, function(err) {
      console.log(err)
    }, {
      maximumImagesCount: 9,
      width: 200,
      height: 200,
      quality: 100
    })
  },
  uploadFile: function(fileUrl, _module, cb) {

    var options = new FileUploadOptions()
    options.fileKey = "img"
    options.fileName = fileUrl.substr(fileUrl.lastIndexOf('/') + 1)
    // options.mimeType = "image/jpeg"
    var ft = new FileTransfer()
    ft.upload(fileUrl,
      encodeURI(fileUploadAPI + "?field=img&module=" + _module),
      success,
      err,
      options)

    function success(r) {
      var photo = r.response.toString().split("|~~|")[1]
      Toast({
        message: '设置头像成功',
        position: 'center',
        duration: 3000
      })
      cb && cb(photo)
    }

    function err(error) {
      Toast({
        message: '上传头像失败，请确保网络正常后再试',
        position: 'bottom',
        duration: 3000
      })
    }

  }

}