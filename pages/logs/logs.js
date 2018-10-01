/*
 * 
 * WordPres版微信小程序
 * author: David Ding
 * organization: DingStudio  www.watch-life.net
 * github:    https://github.com/Wx40ddd/winxin-app-watch-life.net
 * 技术支持微信号：Wx40ddd
 * 开源协议：MIT
 * Copyright (c) 2017 https://www.watch-life.net All rights reserved.
 * 
 */

var util = require('../../utils/util.js')
Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  }
})
