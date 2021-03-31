<template>
  <view class="order-page">
    <view class="order-ok">
      <view class="order-icon">
        <image src="https://yiqiwang360.com/images/wx/img_xiugaichenggong.png" mode="aspectFit" />
      </view>
      <view class="order-title">订单提交成功</view>
<!--      <u-button-->
<!--        shape="circle"-->
<!--        size="medium"-->
<!--        :ripple="true"-->
<!--        :custom-style="customStyle"-->
<!--        ripple-bg-color="#ff8c6d"-->
<!--        @click="goOrderDetail"-->
<!--      >查看订单</u-button>-->
      <u-button
        shape="circle"
        size="medium"
        :ripple="true"
        :custom-style="customStyle"
        ripple-bg-color="#ff8c6d"
        @click="goHome"
      >返回</u-button>
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      order: {
        orderNumber: '-',
        price: 0.00,
        createTime: '-',
      },
      payType: '请选择...',
      storage: [],
      value: 'orange',
      form: {
        'badeNum': 1,
        'type': 'wepay',
        'enjoy': 0

      },
      welogin: {
        openid: ''
      },
      wxPay: {},
      price: 1,
      providerList: [],
      orderInfo: {
        body: '176666666',
        out_trade_no: '666666',
        total_fee: '1',
        trade_type: 'app'
      },
      customStyle: {
        border: 'none',
        marginTop: '50rpx',
        backgroundColor: '#ff6c48',
        boxShadow: '6rpx 8rpx 26rpx rgba(250, 115, 155, 0.3)',
        color: '#ffffff',
        margin: '0 20rpx'
      }
    }
  },
  onLoad (options) {
    this.oid = options.oid
    this.doLogin()


  },
  methods: {
    doLogin(){
      let that = this
      wx.login({
        success (res) {
          that.getOpenid(res.code)
        }
      })
    },
    async getOpenid (code) {
      let that = this
      const { data: res } = await this.$request({
        method: 'GET',
        url: 'login/wxlogin',
        data: {
          code: code
        },
      })
      this.welogin = res.data
      that.setOrder()
    },
    goPay(){
      let timeNow = String(Date.now())
      let that = this
      console.log(that.wxPay)
      uni.requestPayment({
        provider: 'wxpay',
        timeStamp: that.wxPay.timeStamp,
        nonceStr: that.wxPay.noncestr,
        package: that.wxPay.package,
        signType: 'MD5',
        paySign: that.wxPay.paySign,
        success: function (res) {
          console.log('success:' + JSON.stringify(res));
        },
        fail: function (err) {
          console.log('fail:' + JSON.stringify(err));
        }
      });
    },
    async setOrder () {
      let that = this
      const { data: res } = await this.$request({
        method: 'GET',
        url: 'smallwechatpay',
        data: {
          oid: this.oid,
          openid: this.welogin.openid
        }
      })
      console.log(res)
      this.wxPay.timeStamp = res.data.timeStamp
      this.wxPay.noncestr = res.data.nonceStr
      this.wxPay.package = res.data.package
      this.wxPay.paySign = res.data.paySign
      this.goPay()
    },
    goOrderDetail () {
      uni.redirectTo({
        url: '/pages/orders/orderDetail?oid=' + this.oid
      })
    },
    goHome () {
      uni.switchTab({
        url: '/pages/index/index'
      })
    }
  }
}
</script>
<style lang="scss">
page {
  background: #ffffff;
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
      image {
        height: 400rpx;
      }
    }
    .order-title {
      font-size: 36rpx;
      color: #fd5123;
      text-align: center;
      padding-bottom: 40rpx;
    }
  }
}
</style>
