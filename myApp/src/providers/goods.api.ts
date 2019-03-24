import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RequestOptions } from '@angular/http';
import { ApiConfig } from '../app/api.config'
@Injectable()
export class GoodsApi {

    constructor(public http: Http) {

    }


    public indexgoodscat(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'goods/indexgoodscat';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('goods/indexgoodscat', data, res)) {
                    if (showLoadingModal) {
                        ApiConfig.DimissLoadingModal();
                    }
                    if (res == null) {
                        return null;
                    }
                    return res.json();
                } else {
                    return Promise.reject(res);
                }
            })
            .catch(err => {
                if (showLoadingModal) {
                    ApiConfig.DimissLoadingModal();
                }
                return ApiConfig.ErrorHandle('goods/indexgoodscat', data, err);
            });
    }


    public indexrecommgoods(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'goods/indexrecommgoods';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('goods/indexrecommgoods', data, res)) {
                    if (showLoadingModal) {
                        ApiConfig.DimissLoadingModal();
                    }
                    if (res == null) {
                        return null;
                    }
                    return res.json();
                } else {
                    return Promise.reject(res);
                }
            })
            .catch(err => {
                if (showLoadingModal) {
                    ApiConfig.DimissLoadingModal();
                }
                return ApiConfig.ErrorHandle('goods/indexrecommgoods', data, err);
            });
    }


    public story(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'goods/story';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('goods/story', data, res)) {
                    if (showLoadingModal) {
                        ApiConfig.DimissLoadingModal();
                    }
                    if (res == null) {
                        return null;
                    }
                    return res.json();
                } else {
                    return Promise.reject(res);
                }
            })
            .catch(err => {
                if (showLoadingModal) {
                    ApiConfig.DimissLoadingModal();
                }
                return ApiConfig.ErrorHandle('goods/story', data, err);
            });
    }


    public storylist(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'goods/storylist';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('goods/storylist', data, res)) {
                    if (showLoadingModal) {
                        ApiConfig.DimissLoadingModal();
                    }
                    if (res == null) {
                        return null;
                    }
                    return res.json();
                } else {
                    return Promise.reject(res);
                }
            })
            .catch(err => {
                if (showLoadingModal) {
                    ApiConfig.DimissLoadingModal();
                }
                return ApiConfig.ErrorHandle('goods/storylist', data, err);
            });
    }


    public storygoods(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'goods/storygoods';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('goods/storygoods', data, res)) {
                    if (showLoadingModal) {
                        ApiConfig.DimissLoadingModal();
                    }
                    if (res == null) {
                        return null;
                    }
                    return res.json();
                } else {
                    return Promise.reject(res);
                }
            })
            .catch(err => {
                if (showLoadingModal) {
                    ApiConfig.DimissLoadingModal();
                }
                return ApiConfig.ErrorHandle('goods/storygoods', data, err);
            });
    }


    public storystory(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'goods/storystory';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('goods/storystory', data, res)) {
                    if (showLoadingModal) {
                        ApiConfig.DimissLoadingModal();
                    }
                    if (res == null) {
                        return null;
                    }
                    return res.json();
                } else {
                    return Promise.reject(res);
                }
            })
            .catch(err => {
                if (showLoadingModal) {
                    ApiConfig.DimissLoadingModal();
                }
                return ApiConfig.ErrorHandle('goods/storystory', data, err);
            });
    }


    public catbanner(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'goods/catbanner';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('goods/catbanner', data, res)) {
                    if (showLoadingModal) {
                        ApiConfig.DimissLoadingModal();
                    }
                    if (res == null) {
                        return null;
                    }
                    return res.json();
                } else {
                    return Promise.reject(res);
                }
            })
            .catch(err => {
                if (showLoadingModal) {
                    ApiConfig.DimissLoadingModal();
                }
                return ApiConfig.ErrorHandle('goods/catbanner', data, err);
            });
    }


    public catgoods(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'goods/catgoods';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('goods/catgoods', data, res)) {
                    if (showLoadingModal) {
                        ApiConfig.DimissLoadingModal();
                    }
                    if (res == null) {
                        return null;
                    }
                    return res.json();
                } else {
                    return Promise.reject(res);
                }
            })
            .catch(err => {
                if (showLoadingModal) {
                    ApiConfig.DimissLoadingModal();
                }
                return ApiConfig.ErrorHandle('goods/catgoods', data, err);
            });
    }


    public cat(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'goods/cat';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('goods/cat', data, res)) {
                    if (showLoadingModal) {
                        ApiConfig.DimissLoadingModal();
                    }
                    if (res == null) {
                        return null;
                    }
                    return res.json();
                } else {
                    return Promise.reject(res);
                }
            })
            .catch(err => {
                if (showLoadingModal) {
                    ApiConfig.DimissLoadingModal();
                }
                return ApiConfig.ErrorHandle('goods/cat', data, err);
            });
    }


    public goods(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'goods/goods';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('goods/goods', data, res)) {
                    if (showLoadingModal) {
                        ApiConfig.DimissLoadingModal();
                    }
                    if (res == null) {
                        return null;
                    }
                    return res.json();
                } else {
                    return Promise.reject(res);
                }
            })
            .catch(err => {
                if (showLoadingModal) {
                    ApiConfig.DimissLoadingModal();
                }
                return ApiConfig.ErrorHandle('goods/goods', data, err);
            });
    }


    public goodsbanner(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'goods/goodsbanner';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('goods/goodsbanner', data, res)) {
                    if (showLoadingModal) {
                        ApiConfig.DimissLoadingModal();
                    }
                    if (res == null) {
                        return null;
                    }
                    return res.json();
                } else {
                    return Promise.reject(res);
                }
            })
            .catch(err => {
                if (showLoadingModal) {
                    ApiConfig.DimissLoadingModal();
                }
                return ApiConfig.ErrorHandle('goods/goodsbanner', data, err);
            });
    }


    public goodsattr(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'goods/goodsattr';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('goods/goodsattr', data, res)) {
                    if (showLoadingModal) {
                        ApiConfig.DimissLoadingModal();
                    }
                    if (res == null) {
                        return null;
                    }
                    return res.json();
                } else {
                    return Promise.reject(res);
                }
            })
            .catch(err => {
                if (showLoadingModal) {
                    ApiConfig.DimissLoadingModal();
                }
                return ApiConfig.ErrorHandle('goods/goodsattr', data, err);
            });
    }


    public goodsgoods(data, showLoadingModal: boolean = true) {
        var url = ApiConfig.getApiUrl() + 'goods/goodsgoods';
        var headers = ApiConfig.GetHeader(url, data);
        let options = new RequestOptions({ headers: headers });
        let body = ApiConfig.ParamUrlencoded(data);
        let loading = null;

        if (showLoadingModal) {
            loading = ApiConfig.GetLoadingModal();
        }

        return this.http.post(url, body, options).toPromise()
            .then((res) => {
                if (ApiConfig.DataLoadedHandle('goods/goodsgoods', data, res)) {
                    if (showLoadingModal) {
                        ApiConfig.DimissLoadingModal();
                    }
                    if (res == null) {
                        return null;
                    }
                    return res.json();
                } else {
                    return Promise.reject(res);
                }
            })
            .catch(err => {
                if (showLoadingModal) {
                    ApiConfig.DimissLoadingModal();
                }
                return ApiConfig.ErrorHandle('goods/goodsgoods', data, err);
            });
    }
}
