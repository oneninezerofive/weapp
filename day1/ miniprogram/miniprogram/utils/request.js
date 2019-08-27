"use strict";
exports.__esModule = true;
exports["default"] = (function (url, data) {
    return new Promise(function (resolve, reject) {
        wx.request({
            url: url,
            data: data,
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function (res) {
                resolve(res.data);
            },
            fail: function (err) {
                reject(err);
            }
        });
    });
});
