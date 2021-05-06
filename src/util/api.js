const baseUrl = 'http://192.168.8.39:8081/'
// const baseUrl = 'http://pay.yiqiwang360.com/'
export const myRequest = (options) => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: baseUrl + options.url,
      method: options.method || 'GET',
      data: options.data || {},
      header: options.method === 'POST' ? { 'content-type': 'application/x-www-form-urlencoded' } : {},
      success: (res) => {
        if (res.data.code === 401) {
          uni.redirectTo({
            url: '/pages/mine/login'
          })
        } else if (res.data.code === 1001) {
          uni.reLaunch({
            url: '/pages/mine/login'
          })
          uni.clearStorageSync()
          return uni.showToast({
            title: '已在别处登录，请重新登录',
            icon: 'none',
            duration: 2500
          })
        } else if (res.data.code !== 200) {
          return uni.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 2000
          })
        }
        resolve(res.data)
      },
      fail: (err) => {
        uni.showToast({
          title: '获取数据失败',
          icon: 'none'
        })
        reject(err)
      }
    })
  })
}
