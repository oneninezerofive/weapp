# 定位

获取经纬度，发给后端，获取中文地址信息，还要附近商品信息，根据商家的经纬度和客户端的经纬度算出结果，返回信息
```js
wx.getLocation({
    type: 'wgs84',
    success(res) {
        console.log(res)
        const latitude = res.latitude
        const longitude = res.longitude
        const speed = res.speed
        const accuracy = res.accuracy
    }
})
```

# mpvue

美团点评基于vue框架开发了一套小程序的框架

你想用vue的语法，不想用小程序语法，去写小程序

- [mpvue的官网](http://mpvue.com/)

```bash
# 全局安装 vue-cli 旧版的语法 2.xxx
$ npm install --global vue-cli

# 创建一个基于 mpvue-quickstart 模板的新项目
$ vue init mpvue/mpvue-quickstart my-project

# 安装依赖
$ cd my-project
$ npm install
# 启动构建
$ npm run dev
```

让你用viue开发小程序，大部分vue的语法都可以使用，还兼容wxml(view,map,text)和wxss(rpx)的写法，删除了BOM和DOM，有wx的全局变量提供方法

HTML,CSS,JS去开发手机APP

