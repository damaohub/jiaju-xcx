 /**
   * 弧形渲染函数
   */
function drawCircle (id, c, p) {
  if (p == 0) return;
  var cxt_arc = wx.createCanvasContext(id);
  var end = p/100 *2* Math.PI - 0.5 * Math.PI;
  cxt_arc.setLineWidth(4);
  cxt_arc.setStrokeStyle(c);
  cxt_arc.setLineCap('round');
  cxt_arc.beginPath();
  cxt_arc.arc(25, 25, 21, -0.5 * Math.PI, end, false);
  cxt_arc.stroke();
  cxt_arc.draw();
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
      percent1: 50,
      percent2: 40,
      percent3: 0,
      percent4: 0
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
    drawCircle('canvasCircle-1', '#eaeaea', 100);
    drawCircle('canvasArcCir-1', '#04BE02', this.data.percent1);
    drawCircle('canvasCircle-2', '#eaeaea', 100);
    drawCircle('canvasArcCir-2', '#04BE02', this.data.percent2)
    drawCircle('canvasCircle-3', '#eaeaea', 100);
    drawCircle('canvasArcCir-3', '#04BE02', this.data.percent3)
    drawCircle('canvasCircle-4', '#eaeaea', 100);
    drawCircle('canvasArcCir-4', '#04BE02', this.data.percent4)
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