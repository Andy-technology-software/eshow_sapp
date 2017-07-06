// PublishDynamic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      imageArr: [
            '../../../images/Camera.png'
          ],
    content: '',
  },

  /**
     * 提交产品
     */
  sendPro: function (options) {
      wx.navigateBack({
      })
  },

  /**
   * 选产品图片
   */
  selectImageAction: function (event) {
      var selectIndex = event.currentTarget.id;
      console.log(selectIndex);
      var that = this;
      if (selectIndex == that.data.imageArr.length - 1){
          if (that.data.imageArr.length < 7) {
              //选图
              wx.showActionSheet({
                  itemList: ['相机', '相册'],
                  success: function (res) {
                      console.log(res.tapIndex)
                      if (0 == res.tapIndex) {
                          wx.chooseImage({
                              count: 1, // 默认9
                              sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                              sourceType: ['camera'], // 可以指定来源是相册还是相机，默认二者都有
                              success: function (res) {
                                  // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                                  var tempFilePaths = res.tempFilePaths;
                                  var temArr = [];
                                  temArr.push(tempFilePaths);
                                  that.setData({
                                      imageArr: temArr.concat(that.data.imageArr)
                                  })
                              }
                          })
                      } else if (1 == res.tapIndex) {
                          wx.chooseImage({
                              count: 1, // 默认9
                              sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                              sourceType: ['album'], // 可以指定来源是相册还是相机，默认二者都有
                              success: function (res) {
                                  // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                                  var tempFilePaths = res.tempFilePaths;
                                  var temArr = [];
                                  temArr.push(tempFilePaths);
                                  that.setData({
                                      imageArr: temArr.concat(that.data.imageArr)
                                  })
                              }
                          })
                      }
                  },
                  fail: function (res) {
                      console.log(res.errMsg)
                  }
              })
          }else{
              wx.showModal({
                  title: '提示',
                  content: '最多可选取6张图片',
                  showCancel: false,
                  success: function (res) {
                      if (res.confirm) {
                          console.log('用户点击确定')
                      } else if (res.cancel) {
                          console.log('用户点击取消')
                      }
                  }
              })
          }
          
      }else{
          //这个地方只能显示http图片  内部地址为绝对路径
          var temA = that.data.imageArr.slice(0, that.data.imageArr.length - 1);
          //看图
          wx.previewImage({
              current: temA[selectIndex], // 当前显示图片的http链接
              urls: temA // 需要预览的图片http链接列表
          })
      }
      
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