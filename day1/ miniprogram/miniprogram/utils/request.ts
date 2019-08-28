export default (url:string,data:object,method:string)=>{
  let header:object = ((method)=>{
    if(method==='post'){
      return {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      }
    }else{
      return {
        'content-type': 'application/json' // 默认值
      }
    }
  })(method);
  return new Promise((resolve,reject)=>{
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url, //仅为示例，并非真实的接口地址
      data,
      method:method||'get',
      header,
      success (res:any) {
        wx.hideLoading()
        resolve(res.data)
        console.log(res.data)
      },
      fail(err:any){
        reject(err)
      }
    })
  })
}