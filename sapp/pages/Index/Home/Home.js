// Home.js

var strophe = require('../../../utils/strophe.js')
var WebIM = require('../../../utils/WebIM.js')
var WebIM = WebIM.default

var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
  },

  /**
   * 点击查看展会详情
   */
  showDetail: function (event) {
      wx.navigateTo({
          url: '../ExhibitorsList/ExhibitorsList',
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
      var that = this
      wx.getSystemInfo({
          success: function (res) {
              that.setData({
                  MaxHeigth: res.windowHeight,
                  MaxWidth: res.windowWidth
              })
          }
      })
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