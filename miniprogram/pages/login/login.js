// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  formSubmit: function(e) {

    let username = e.detail.value.no;
    let password = e.detail.value.pwd;
    if (username == "hpp1234567" && password == "123456") {
      wx.navigateTo({
        url: '../addFunction/addFunction'
      });
      return;
    }else{
      wx.navigateTo({
        url: '../test/first'
      });
    }
    // console.log(e.detail.value);
    wx.request({
      // url: 'https://www.lishuming.top/pj/index.php/student/api/login', //仅为示例，并非真实的接口地址
      url: "",
      data: {
        username: e.detail.value.no,
        password: e.detail.value.pwd
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        console.log(res.data);
        if (res.statusCode == 200) {
          //访问正常
          if (res.data.error == true) {
            wx.showToast({
              title: res.data.msg,
              icon: 'none',
              duration: 2000,
            })
          } else {
            //缓存
            wx.setStorage({
              key: "student",
              data: res.data.student
            });
            wx.showToast({
              title: "登陆成功",
              icon: 'success',
              duration: 20000,
              success: function() {
                setTimeout(function() {
                  wx.switchTab({
                    url: '../teachers/teachers',
                  })
                }, 2000)
              }
            })
          }
        }

      }
    })
  }
})