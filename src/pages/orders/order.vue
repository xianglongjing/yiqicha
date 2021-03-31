<template>
  <view class="page">
    <u-top-tips ref="uTips"></u-top-tips>

    <view class="order">
      <u-cell-group :border="false">
        <u-cell-item title="订单编号：" :value="order.out_trade_no" :arrow="false" hover-class="none"></u-cell-item>
        <u-cell-item title="下单时间：" :value="order.createTime" :arrow="false" hover-class="none"></u-cell-item>
      </u-cell-group>
      <u-gap height="12" bg-color="#f7f7f7" v-show="order.pass"></u-gap>
      <u-cell-group :border="false" v-show="order.pass">
        <u-cell-item title="支付方式：" :value="order.pass" :arrow="false" hover-class="none"></u-cell-item>
        <u-cell-item title="支付时间：" :value="trans.last_time" :arrow="false" hover-class="none"></u-cell-item>
      </u-cell-group>
      <u-gap height="12" bg-color="#f7f7f7"></u-gap>
      <u-cell-group :border="false">
        <u-cell-item title="订单金额：" :value="order.total_fee+' 元'" :arrow="false" hover-class="none"></u-cell-item>
        <u-cell-item title="订单状态：" :value="trans.state_name" :arrow="false" hover-class="none"></u-cell-item>
      </u-cell-group>
      <u-gap height="12" bg-color="#f7f7f7"></u-gap>
      <view class="pay-type">
        <radio-group @change="chosePayType" style="display: block;">
          <label class="type-box u-border-bottom">
            <view class="pay-item">
              <view class="pay-icon" style="background: #fa729a">
                <u-icon name="rmb-circle-fill" color="#ffffff" size="42"></u-icon>
              </view>
              <view class="pay-name">
                余额支付
                <text v-show="balancePay">可用:{{wallet.balance}} 元</text>
                <text v-show="!balancePay">余额不足或暂不可用</text>
              </view>
            </view>
            <view class="pay-radio">
              <radio value="balance" :disabled="!balancePay" :checked="false" color="#fa729a" />
            </view>
          </label>
          <label class="type-box u-border-bottom">
          <view class="pay-item">
            <view class="pay-icon" style="background: #1677ff">
              <u-icon name="zhifubao" color="#ffffff" size="42"></u-icon>
            </view>
            <view class="pay-name">支付宝支付 <text>9.5折</text></view>
          </view>
          <view class="pay-radio">
            <radio value="aliPay" :checked="false" color="#fa729a" />
          </view>
        </label>
          <label class="type-box">
            <view class="pay-item">
              <view class="pay-icon">
                <u-icon name="weixin-fill" color="#ffffff" size="42"></u-icon>
              </view>
              <view class="pay-name">微信支付</view>
            </view>
            <view class="pay-radio">
              <radio value="wePay" :checked="false" color="#fa729a" />
            </view>
          </label>
        </radio-group>
        <u-button shape="circle"
                  :plain="true"
                  :ripple="true"
                  :hair-line="false"
                  :custom-style="customStyle"
                  @click="payment">确认支付</u-button>
      </view>
    </view>
    <!--支付成功跳转-->
    <view class="pay-type" v-show="!showPay">
      <u-button shape="circle"
                :plain="true"
                :ripple="true"
                :hair-line="false"
                :custom-style="customStyle"
                @click="payEnd">返回</u-button>
    </view>


    <u-modal v-model="payState"
             title="完成订单"
             confirm-text="我已支付"
             confirm-color="#333333"
             cancel-text="我未支付"
             :show-cancel-button="true"
             @cancel="reState=true"
             @confirm="successful"
             content="请选择你的实际支付情况"></u-modal>
    <u-modal v-model="reState"
             title="支付中"
             confirm-text="确定"
             confirm-color="#333333"
             content="你可以重新支付，或者稍后再支付"></u-modal>
  </view>
</template>

<script>
  export default {
    data() {
      return {

        customStyle: {
          border: 'none',
          margin: '80rpx 90rpx 0',
          background: 'linear-gradient(30deg, rgb(255, 158, 198), rgb(250, 114, 154))',
          boxShadow: '6rpx 8rpx 26rpx rgba(250, 115, 155, 0.3)',
          color: '#ffffff',
        },
        payType: '',
        showPay: false,
        showRoad: false,
        payState: false,
        reState: false,
        balancePay: false,
        storage: [],
        trans: [],
        order: {
          out_trade_no: '-',
          total_fee: 0.00,
          createTime: '-',
          pass: '-',
        },
        wallet: {
          balance: 0.00
        },
        trade: ''
      }
    },
    onLoad(opt) {
      this.getStorage()
      this.trade = opt.id
    },
    onShow(){
      this.orderState(this.trade)
    },
    onHide() {

    },
    methods: {
      // 获取本地存储
      getStorage() {
        this.storage.token = uni.getStorageSync('token')
        this.storage.uid = uni.getStorageSync('uid')
        this.storage.info = uni.getStorageSync('info')
      },
      async orderState(id) {
        if (id === '') return this.$u.toast('未找到相关信息')
        const {data: res} = await this.$request({
          method: 'POST',
          url: 'api/orderView',
          data: {'out_trade_no': id},
          header: {
            'uid': this.storage.uid,
            'token': this.storage.token,
          }
        })

        console.log(res.data.order)
        if (res.data.order.state==='ok'){
          uni.setNavigationBarTitle({
            title:'支付成功'
          })
          this.showRoad = true
        }else if(res.data.trans.state===9){
          //提现中
          this.showPay = false
        }else{
          this.showPay = true
        }
        this.order = res.data.order
        this.trans = res.data.trans
        this.wallet = res.data.wallet
        //判断余额支付可用
        if (res.data.wallet.balance){
          if (res.data.wallet.balance >= res.data.order.total_fee){
            this.balancePay = true
          }
        }else{
          this.wallet.balance = 0.00
        }

      },
      //前往支付
      payment(){
        if (this.payType===''){
          return this.$refs.uTips.show({
            title: '请选择支付方式',
            type: 'success',
            duration: '2500'
          })
        }
        this.payState = true
        window.open('https://api.rosepo.com/api/payJump?type='+this.payType+'&out_trade_no='+this.order.out_trade_no)
      },
      payJump(type){
        this.payState = true
        window.open('https://api.rosepo.com/api/payJump?type='+type+'&out_trade_no='+this.order.out_trade_no)
      },
      payEnd(){
        if (this.order.enjoyId<1||this.order.enjoyId===undefined){
          uni.navigateBack({
            delta: 1
          });
          return;
        }
        this.goto('roadshow/discuss?id='+this.order.enjoyId)
      },
      goto (path,login = false) {
        if (login === true){
          if (this.storage.token === '') {
            return uni.showToast({
              title: '请先登录',
              icon: 'none',
              duration: 1500
            })
          }
        }
        uni.navigateTo(
                { url: '/pages/' + path }
        )
      },
      //支付成功按钮
      successful(){
        uni.redirectTo(
                { url: '/pages/order/order?id=' +this.order.out_trade_no }
        )
      },
      chosePayType: function(evt) {
        this.payType = evt.detail.value
        console.log(this.payType)

        // for (let i = 0; i < this.items.length; i++) {
        //   if (this.items[i].value === evt.target.value) {
        //     this.current = i;
        //     break;
        //   }
        // }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .page {
    background-color: #ffffff;
  }
  /*uni-radio-group{*/
  /*  display: block;*/
  /*}*/
  .pay-type{
    width: 100%;
    padding: 10rpx 34rpx;
    .type-box{
      display: flex;
      width: 100%;
      padding: 30rpx 0;
    }
    .pay-item{
      flex: 1;

      .pay-icon{
        display: inline-block;
        background-color: #39b54a;
        border-radius: 8rpx;
        margin-right: 16rpx;
        padding: 6rpx;
      }
      .pay-name{
        display: inline-block;
        height: 54rpx;
        vertical-align: middle;
        text{
          margin-left: 30rpx;
          color: #777777;
          font-size: 24rpx;
        }
      }
    }
    .pay-radio{
      width: 100rpx;
      text-align: right;
    }
  }
  .cu-bar{
    position: fixed;
    -webkit-transform: translate3d(0, 0, 0);
    bottom: 0;
    left: 0;
    right: 0;
    height: 110rpx;
    box-shadow: 0 -4rpx 6rpx rgba(0, 0, 0, 0.1);
    .submit{
      font-size: 32rpx;
      line-height: 110rpx;
      .u-icon{
        margin-right: 10rpx;
      }
    }
  }
</style>
