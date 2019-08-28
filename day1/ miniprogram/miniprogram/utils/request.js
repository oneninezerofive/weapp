"use strict";
exports.__esModule = true;
exports["default"] = (function (url, data, method) {
    var header = (function (method) {
        if (method === 'post') {
            return {
                'content-type': 'application/x-www-form-urlencoded' // 默认值
            };
        }
        else {
            return {
                'content-type': 'application/json' // 默认值
            };
        }
    })(method);
    return new Promise(function (resolve, reject) {
        wx.showLoading({
            title: '加载中'
        });
        wx.request({
            url: url,
            data: data,
            method: method || 'get',
            header: header,
            success: function (res) {
              setTimeout(()=>{
                wx.hideLoading();
              },2000)
                
                resolve(res.data);
                console.log(res.data);
            },
            fail: function (err) {
                reject(err);
            }
        });
    });
});
