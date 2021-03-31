<template>
  <view class="order-page">
    <view class="order-ok">
      <view class="order-icon">
        <image src="/static/image/wode_fasong.png" mode="aspectFit" />
      </view>
      <view class="order-title">订单已完成</view>
      <view class="order-text">请您对本次服务进行评价</view>
      <u-line />
      <view class="star">
        <view class="title">服务速度</view>
        <u-rate
          count="count"
          current="5"
          size="46"
          active-color="#fd5123"
          @change="scoreHandle('sd', $event)"
        ></u-rate>
      </view>
      <view class="star">
        <view class="title">服务态度</view>
        <u-rate
          count="count"
          current="5"
          size="46"
          active-color="#fd5123"
          @change="scoreHandle('zl', $event)"
        ></u-rate>
      </view>
      <view class="star">
        <view class="title">服务质量</view>
        <u-rate
          count="count"
          current="5"
          size="46"
          active-color="#fd5123"
          @change="scoreHandle('td', $event)"
        ></u-rate>
      </view>
      <view class="text-box">
        <u-form :model="form" ref="uForm">
          <u-form-item label="评语" label-position="top">
            <u-input type="textarea" v-model="form.comment" placeholder="点击此处输入评语" />
          </u-form-item>
        </u-form>
      </view>
      <u-button
        shape="circle"
        size="medium"
        :hair-line="false"
        :ripple="true"
        :custom-style="customStyle"
        ripple-bg-color="#ff8c6d"
        @click="submit"
      >提交</u-button>
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      storage: {
        token: '',
        uid: 0,
        info: {}
      },
      customStyle: {
        color: '#ffffff',
        backgroundColor: '#ff6c48',
        border: 'none'
      },
      oid: 0,
      count: 5,
      score: {
        sd: 5,
        zl: 5,
        td: 5
      },
      form: {
        comment: ''
      }
    }
  },
  onLoad (options) {
    this.oid = options.oid
    this.getStorage()
  },
  methods: {
    // 获取本地存储
    getStorage () {
      this.storage.token = uni.getStorageSync('token')
      this.storage.uid = uni.getStorageSync('uid')
      this.storage.info = uni.getStorageSync('info')
    },
    async submit () {
      if (this.storage.token === '') {
        return uni.showToast({
          title: '未登录，请登录',
          icon: 'none',
          duration: 1500
        })
      }
      const { data: res } = await this.$request({
        url: 'order/addKhAppraise',
        data: Object.assign(
          {},
          {
            uid: this.storage.uid,
            token: this.storage.token,
            oid: this.oid,
            py: this.form.comment
          },
          this.score
        )
      })
      uni.showToast({
        title: '评价成功',
        icon: 'none'
      })
      uni.navigateTo({
        url: '/pages/orders/evaluationed'
      })
    },
    scoreHandle (name, score) {
      this.score[name] = score
    }
  }
}
</script>
<style lang="scss">
page {
  background: #f8f8f8;
}
</style>

<style lang="scss" scoped>
.order-page {
  background: #ffffff;
  .order-ok {
    text-align: center;
    padding-bottom: 60rpx;
    .order-icon {
      text-align: center;
      font-size: 0;
      padding-bottom: 30rpx;
      image {
        height: 160rpx;
      }
    }
    .order-title {
      font-size: 36rpx;
      color: #333333;
      font-weight: 600;
      text-align: center;
      padding-bottom: 30rpx;
    }
    .order-text {
      font-size: 30rpx;
      color: #fd5123;
      text-align: center;
      padding-bottom: 40rpx;
    }
  }
}
.star {
  margin: 40rpx 0 40rpx;
  .title {
    display: inline-block;
    width: 180rpx;
  }
}
.text-box {
  margin: 30rpx;
  padding: 0 40rpx;
  background: #ffffff;
  margin-bottom: 30rpx;
}
</style>
