<template>
  <view class="order-page">
    <view class="order-ok">
      <view class="order-icon">
        <image src="https://yiqiwang360.com/images/wx/img_xiugaichenggong.png" mode="aspectFit"></image>
      </view>
      <view class="order-title">评价成功</view>
      <view class="order-text">您的评价将帮助我们做得更好</view>
      <u-button
              shape="circle"
              size="medium"
              :hair-line="false"
              :ripple="true"
              :custom-style="customStyle"
              ripple-bg-color="#ff8c6d"
              @click="goBack"
      >返回</u-button>
    </view>


  </view>
</template>

<script>
  export default {
    data () {
      return {
        customStyle: {
          color: '#ffffff',
          backgroundColor: '#ff6c48',
          border: 'none'
        },
      }
    },
    onLoad (options) {
    },
    methods: {
      goBack (){
        uni.navigateBack({
          delta: 2
        });
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
    .order-ok{
      text-align: center;
      padding-bottom: 60rpx;
      .order-icon{
        text-align: center;
        font-size: 0;
        image{
          height: 400rpx;
        }
      }
      .order-title{
        font-size: 36rpx;
        color: #333333;
        font-weight: 600;
        text-align: center;
        padding-bottom: 30rpx;
      }
      .order-text{
        font-size: 30rpx;
        color: #fd5123;
        text-align: center;
        padding-bottom: 40rpx;
      }
    }
  }
</style>
