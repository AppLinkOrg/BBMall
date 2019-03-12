/**
 * 配置编译线上跟线下之前的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *
 **/

let fileUploadAPI = 'http://cmsdev.app-link.org/alucard263096/ariesmall/fileupload'
let imgBaseUrl = 'http://applinkupload.oss-cn-shenzhen.aliyuncs.com/alucard263096/ariesmall/'
let baseUrl = 'http://cmsdev.app-link.org/alucard263096/ariesmall/'
if (process.env.NODE_ENV == 'development') {} else if (process.env.NODE_ENV == 'production') {
  baseUrl = 'http://cmsdev.app-link.org/alucard263096/ariesmall/'
}

export {
  baseUrl,
  imgBaseUrl,
  fileUploadAPI
}