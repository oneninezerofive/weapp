// miniprogram/pages/home/home.js
import request from '../../utils/request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 宫格
    grids: [],
    // 卡片
    cards: []
  },

  // 把宫格过滤到十个
  gridsComputed(arr) {
    // 切割成八个宫格
    return arr.slice(0, 10);
  },

  getCards(type){
    // 商品信息
    request("https://www.easy-mock.com/mock/5d3fe0fc738f621651cd1f4a/list/poilist", null, 'post').then(({ data }) => {
      // 停止下拉
      wx.stopPullDownRefresh()
      console.log(data)
      this.setData({
        // 处理宫格的数据
        cards: type === 'onReachBottom' ? [...this.data.cards, ...data.shopList] : [...data.shopList, ...this.data.cards]
      })
    })
  },

  // 跳转详情页
  navToDetailPage(e){
    wx.navigateTo({
      url: `../detail/detail?id=${e.target.id}`
    })
    console.log(e.target.id)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 宫格信息
    request('https://www.easy-mock.com/mock/5d3fe0fc738f621651cd1f4a/list/kingkong').then(({data})=>{
      console.log(data)
      this.setData({
        // 处理宫格的数据
        grids: this.gridsComputed(data.kingkongList)
      })
    })
    this.getCards();
    
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
    this.getCards('onPullDownRefresh');
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.getCards('onReachBottom');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})