// Mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 修改资料
   */
  modifyInfo: function (options) {
      wx.navigateTo({
          url: '../ModifyInfo/ModifyInfo',
      })
  },

  /**
   * 系统消息
   */
  systemMessage: function () {
      wx.navigateTo({
          url: '../SystemMessage/SystemMessage',
          success: function (res) {
              // success
          },
          fail: function () {
              // fail
          },
          complete: function () {
              // complete
          }
      })
  },

  /**
   * 我的产品
   */
  myProdiction: function(){
      wx.navigateTo({
          url: '../MyProdiction/MyProdiction',
          success: function (res) {
              // success
          },
          fail: function () {
              // fail
          },
          complete: function () {
              // complete
          }
      })
  },

  /**
   * 我的动态
   */
  myDynamics: function () {
      wx.navigateTo({
          url: '../MyDynamics/MyDynamics',
          success: function (res) {
              // success
          },
          fail: function () {
              // fail
          },
          complete: function () {
              // complete
          }
      })
  },

  /**
    * 意见反馈
    */
  fadeBack: function () {
      wx.navigateTo({
          url: '../FadeBack/FadeBack',
          success: function (res) {
              // success
          },
          fail: function () {
              // fail
          },
          complete: function () {
              // complete
          }
      })
  },

  /**
   * 跳转到聊天列表
   */
  goChat: function(){
      wx.navigateTo({
          url: '../../chat/chat',
          success: function (res) {
              // success
          },
          fail: function () {
              // fail
          },
          complete: function () {
              // complete
          }
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