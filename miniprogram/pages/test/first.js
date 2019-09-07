Page({
  bindtest: function () {
    wx.request({
      url:'https://pphao.club/ssm_hpp/login.action',  //本地服务器地址
      data: {
        "userId":"JT001",
        "password":"1"
      },
      method: 'post',
      header: {
        'content-type': 'application/x-www-form-urlencoded', //默认值
      },
      success: function (res) {
        console.log(res);
      },
      fail: function (res) {
        console.log("失败");
      }
    })
  }
})