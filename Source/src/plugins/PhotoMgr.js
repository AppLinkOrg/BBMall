export class PhotoMgr {
  static getPicture(onSuccess, onFail) {
    navigator.camera.getPicture(onSuccess, onFail, {
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY
    });
  }
  static takePhoto(onSuccess, onFail) {
    navigator.camera.getPicture(onSuccess, onFail, {
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.CAMERA,
      encodingType: Camera.EncodingType.JPEG,
      mediaType: Camera.MediaType.PICTURE,
      allowEdit: true,
      correctOrientation: true
    });
  }
}
