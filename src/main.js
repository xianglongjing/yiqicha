import Vue from 'vue'
import App from './App'
import { myRequest } from './util/api'
import cuCustom from 'colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)
//uView
import uView from "uview-ui";
import './common/quill.snow.css'
let mpShare = require('uview-ui/libs/mixin/mpShare')
Vue.use(uView)
Vue.mixin(mpShare)
Vue.config.productionTip = false
Vue.prototype.$request = myRequest
//页面跳转
Vue.prototype.goto = function(path, login = false){
  if (login === true) {
    if (this.storage.token === '') {
      return uni.showToast({
        title: '请先登录',
        icon: 'none',
        duration: 1500
      })
    }
  }
  uni.navigateTo({
    url: '/pages/' + path
  })
};
Vue.filter('formatDate', (date) => {
  const newDate = new Date(date * 1000)
  const year = newDate.getFullYear()
  const month = (newDate.getMonth() + 1).toString().padStart(2, 0)
  const day = newDate.getDate().toString().padStart(2, 0)
  return year + '-' + month + '-' + day
})
Vue.filter('formatMD', (date) => {
  const newDate = new Date(date * 1000)
  const year = newDate.getFullYear()
  const month = (newDate.getMonth() + 1).toString().padStart(2, 0)
  const day = newDate.getDate().toString().padStart(2, 0)
  return month + '月' + day + '日'
})
Vue.filter('formatDatetime', (date) => {
  const newDate = new Date(date * 1000)
  const year = newDate.getFullYear()
  const month = (newDate.getMonth() + 1).toString().padStart(2, 0)
  const day = newDate.getDate().toString().padStart(2, 0)
  const h = newDate.getHours().toString().padStart(2, 0)
  const m = newDate.getMinutes().toString().padStart(2, 0)
  const s = newDate.getSeconds().toString().padStart(2, 0)
  return year + '-' + month + '-' + day + ' ' + h + ':' + m + ':' + s
})
App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
