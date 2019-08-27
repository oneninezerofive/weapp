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
        wx.request({
            url: url,
            data: data,
            method: method || 'get',
            header: header,
            success: function (res) {
                resolve(res.data);
                console.log(res.data);
            },
            fail: function (err) {
                reject(err);
            }
        });
    });
});
