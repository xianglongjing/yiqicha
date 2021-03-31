<template>
  <view class="wrap">
    <u-swiper :list="list" height="900"></u-swiper>
    <view class="btn">
      <u-button @click="goHome">进入首页</u-button>
      <u-checkbox-group>
        <u-checkbox @change="checkboxChange" v-model="checked">不再显示</u-checkbox>
      </u-checkbox-group>
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      checked: true,
      list: [{
        image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
        title: '昨夜星辰昨夜风，画楼西畔桂堂东'
      },
      {
        image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
        title: '身无彩凤双飞翼，心有灵犀一点通'
      },
      {
        image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
        title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
      },
      {
        image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
        title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
      }
      ],
    }
  },
  onLoad () {
    this.checked = uni.getStorageSync('pass')
  },
  methods: {
    checkboxChange (e) {
      if (e.value) {
        uni.setStorageSync('pass', e.value)
      } else {
        uni.setStorageSync('pass', e.value)
      }
    },
    goHome () {
      uni.switchTab({
        url: '/pages/index/index'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
page {
  width: 100%;
}
.wrap {
  padding: 40rpx;
  width: 100%;
  height: 100%;
}
.btn {
  margin-top: 30rpx;
}
</style>
