//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: [],
    name: [{
      message: 'name', unique: 'unique_1',
    }, {
        message: 'zhangjing', unique: 'unique_5'
    }]
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  }
})
