// miniprogram/pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // 预览图片
  preview(e){
    console.log(e)
    wx.previewImage({
      current: '', // 当前显示图片的http链接
      urls: [e.target.dataset.src, e.target.dataset.src, e.target.dataset.src] // 需要预览的图片http链接列表
    })
  },
  // 录音功能
  record(){
    wx.startRecord({
      success(res) {
        const tempFilePath = res.tempFilePath
        // 播放录音
        wx.playVoice({
          filePath: tempFilePath,
          complete() { }
        })
      }
    })
    setTimeout(function () {
      wx.stopRecord() // 结束录音
    }, 10000)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})