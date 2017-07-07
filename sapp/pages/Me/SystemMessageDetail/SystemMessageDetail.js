// SystemMessageDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isCheckMessage: 0
  },
    
  /**
   * 查看消息
   */
  checkMessage: function() {
    console.log("查看消息");
    var that = this;
    that.setData({
        isCheckMessage: 1
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  allBind: function() {
      console.log("取消弹框");
      var that = this;
      if (1 == that.data.isCheckMessage){
          that.setData({
              isCheckMessage: 0
          })
      }
  },

 /**
   * 立即响应
   */
  xiangyingBtn: function() {
      var that = this;
      that.setData({
          isCheckMessage: 0
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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