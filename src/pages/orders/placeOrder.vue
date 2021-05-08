<template>
  <view class="order-page">
      <view v-if="!addressInfo">
          <u-notice-bar mode="vertical" :autoplay="false" play-state="paused" :list="tipsList"></u-notice-bar>
      </view>
    <view class="order-info">
      <view>
        <u-form :model="orderForm" ref="orderRef">
          <u-form-item label="你想要做" label-width="140">
            <u-input v-model="goodDetail.name" placeholder=" " />
          </u-form-item>
          <u-form-item label="联系手机" label-width="140">
            <u-input v-model="orderForm.phone" placeholder=" " />
          </u-form-item>
          <u-form-item label="需求备注" label-width="140">
            <u-input v-model="orderForm.sketch"  placeholder="(选填)简要描述你的需求 " />
          </u-form-item>
        </u-form>
      </view>
    </view>
    <view class="totalprice">
      总价:<text class="price">￥{{goodDetail.price}}</text>
    </view>
<!--    <view class="guess">-->
<!--     <text class="guess-l">猜你还要</text>-->
<!--      <u-radio-group v-model="guessvalue">-->
<!--      <u-radio label-size="25rpx" shape="square" active-color="#FD6905" :disabled="false">申请宣传册设计版权保护，防止被模仿</u-radio>-->
<!--      </u-radio-group>-->
<!--    </view>-->
    <u-button
      shape="circle"
      size="default"
      :ripple="true"
      :custom-style="customStyle"
      ripple-bg-color="#ff8c6d"
      @click="submitOrder"
    >提交</u-button>
    <view class="page-footer">
    <u-divider bg-color="#f8f8f8" color="#FE6902">
      <u-image mode="aspectFit" src="https://yiqiwang360.com/images/app/yiqibao.png" width="120rpx" style="width:80rpx"></u-image>
      <text class="u-padding-left-10">全程保障交易安全</text>
    </u-divider>
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      tipsList: [
              '温馨提示：请先添加联系地址再下单'
      ],
      storage: {
        token: '',
        uid: 0,
        info: {}
      },
      // 服务ID
      gid: '',
        //猜你
        guessvalue:false,
      orderForm: {
        name: '',
        phone: '',
        weChat: '',
        sketch: ''
      },
      customStyle: {
        color: '#ffffff',
        backgroundColor: '#FD5123',
        margin: '50rpx 80rpx',
        border: 'none'
      },
      numberValue: 1,
      goodDetail: {},
      addressInfo: {},
      address: '',
      invoiceStatus: false,
      invoice: 0,
      goodNum: 0
    }
  },
  onLoad (options) {
    // this.gid = options.id
  },
  onShow () {
    this.getStorage()
    this.submitOrder()
  },
  methods: {
    // 获取本地存储
    getStorage () {
      this.storage.token = uni.getStorageSync('token')
      this.storage.uid = uni.getStorageSync('uid')
      this.storage.info = uni.getStorageSync('info')
    },
    numberChange (e) {
      this.goodNum = e.value
    },
  //   async getPlaceOrders(){
  //
  //   uni.login({
  //     provider: 'weixin',
  //     success: function (res) {
  //       console.log(res)
  //       let appid = ''
  //       let secret = ''
  //       let url = ' https://docs.apipost.cn/view/c4b0b53e6e4d07f1?appid=' + appid + '&secret=' + secret + '&js_code=' +
  //               res.code + '&grant_type=authorization_code';
  //       uni.request({
  //         url: 'https://docs.apipost.cn/view/c4b0b53e6e4d07f1',
  //         methods: 'POST',// 请求路径
  //         data: {
  //           pay_type:'微信',
  //           order_number:'111',
  //           out_trade_no:'111',
  //           buyer_phone:'110',
  //           product_name:'萝卜',
  //           recipient:'王二狗',
  //           pay_total:'12',
  //           pay_real:'12',
  //           trade_type:'JSAPI',
  //           pay_status:'0',
  //           buyer_id:'oRvQ859xuQo-VXB9fcR_hfyoPgd8'
  //         },
  //         success: result => {
  //           console.info("result.data==>", result.data);
  //           let openId = result.data.openid;
  //           console.info("openId==>", openId);
  //           uni.switchTab({
  //             url: '/pages/mine/mine'
  //           })
  //         },
  //       });
  //     }
  //   })
  // },
    async submitOrder () {
      const { data: res } = await this.$request({
        method: 'POST',
        url: 'api/pay/createOrder',
        data: {
            pay_type:'wx',
            order_number:'111',
            out_trade_no:'111',
            buyer_phone:'110',
            product_name:'萝卜',
            recipient:'王二狗',
            pay_total:'12',
            pay_real:'12',
            trade_type:'APP',
            pay_status:'0',
            buyer_id:'oRvQ859xuQo-VXB9fcR_hfyoPgd8'
        }
      })
      console.log(res)
      uni.requestPayment({
        "provider": "wxpay",
        "orderInfo": {
          "appid": res.appid,  // 微信开放平台 - 应用 - AppId，注意和微信小程序、公众号 AppId 可能不一致
          "noncestr": res.noncestr, // 随机字符串
          "package": 'prepay_id=res.package',       // 固定值
          "partnerid": res.partnerid,      // 微信支付商户号
          "prepayid": res.prepayid, // 统一下单订单号
          "timestamp": res.timestamp,        // 时间戳（单位：秒）
          "sign": res.sign // 签名，这里用的 MD5 签名
        },
        success(res) {
          console.log(111)
        },
        fail(e) {
          console.log(e)
          console.log('fail:' + JSON.stringify(err));
        }
      })
      // this.goodDetail = res.data.sp
      // this.addressInfo = res.data.site
    },
    goAddAddress (val) {
      uni.redirectTo({
        url: '/pages/orders/addressAdd?id=' + val
      })
    },
    goManageAddress (val) {
      uni.redirectTo({
        url: '/pages/orders/addressList?id=' + val
      })
    },
    invoiceChange () {
      if (this.invoiceStatus) {
        this.invoice = 1
      } else {
        this.invoice = 0
      }
    },
    // async submitOrder () {
    //   const { data: res } = await this.$request({
    //     url: 'order/createOrder',
    //     data: {
    //       siteid: this.addressInfo.id,
    //       gid: this.gid,
    //       uid: this.storage.uid,
    //       token: this.storage.token,
    //       sketch: this.orderForm.sketch,
    //       invoice: this.invoice,
    //       num: this.goodNum
    //     }
    //   })
    //   uni.redirectTo({
    //     url: '/pages/orders/orderSubmit?oid=' + res.data.orderNumber
    //     // url: '/pages/orders/orderSubmit?oid=' + res.data.orderNumber
    //   })
    // }
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
  .page-title{
    font-size: 25rpx;
    line-height: 80rpx;
    margin:0 40rpx;
    .title-name{
      margin-right: 10rpx;
      color:#FE6902;
    }
  }
  .no-adds {
    height: 120rpx;
    line-height: 120rpx;
    font-size: 30rpx;
    text-align: center;
    color: #fd5123;
    background: #ffffff;
  }
  .order-adds {
    height: 120rpx;
    font-size: 34rpx;
    padding: 26rpx 30rpx 0;
    background: #ffffff;
  }
  .adds-line {
    height: 6rpx;
    width: 100%;
    font-size: 0;
    background: #ffffff;
    image {
      height: 6rpx;
      width: 100%;
    }
  }
  .goods-info {
    margin: 20rpx 0;
    display: flex;
    background: #ffffff;
    padding: 30rpx 30rpx 20rpx;
    .goods-cover {
      width: 170rpx;
      image {
        width: 150rpx;
        height: 150rpx;
      }
    }
    .goods-cont {
      flex: 1;
      .goods-name {
        font-size: 26rpx;
        line-height: 35rpx;
        height: 70rpx;
      }
      .goods-fee {
        display: flex;
        margin-top: 20rpx;
        .fee-num {
          flex: 1;
          line-height: 44rpx;
          color: #fd5123;
        }
        .number {
          flex: 1;
          text-align: right;
        }
      }
    }
  }
  .order-info {
    padding: 0 40rpx;
    background: #ffffff;
    margin-bottom: 30rpx;
  }
  .totalprice{
    line-height: 100rpx;
    height: 100rpx;
    padding: 0 40rpx;
    background: #ffffff;
    .price{
      color:#FE6902;
    }
  }
  .guess{
    background: #ffffff;
    line-height: 80rpx;
    margin:20rpx 0;
    padding: 0 40rpx;
    .guess-l{
      padding-right: 20rpx;
    }
  }
  .page-footer{
    margin-top:100rpx;
      text-align: center;
    .yiqibao{
      margin:30rpx;
    }
  }
}
</style>
