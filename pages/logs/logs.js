/*
 * 
 * WordPres版微信小程序
 * author: David Ding
 * organization: DingStudio  www.dingstudio.cn
 * github:    https://github.com/ddawx123/wxapp-wordpress
 * 技术支持微信号：Wx40ddd
 * 开源协议：MIT
 * Copyright (c) 2017 http://www.dingstudio.cn All rights reserved.
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
