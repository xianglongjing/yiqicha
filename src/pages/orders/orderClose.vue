<template>
  <view>
    <view class="close-top">
      <view class="text-xl">已取消支付</view>
      <view class="tips">
        <u-button :custom-style="customStyle">查看订单详情</u-button>
        <u-button :custom-style="customStyle">继续支付</u-button>
      </view>
    </view>
    <view class="recommend">
      <view class="text-xl">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          为你推荐
      </view>
      <view class="re-con">
        <image mode="aspectFit" src="https://yiqiwang360.com/images/app/logo.png"></image>
        <view class="con-r">
          <view class="con-title">微信公众号代运营、原创图文排版</view>
          <view>
            <text class="text-red text-xs">￥
              <text class="text-xl">500</text>
              /月
            </text>
            <text class="num">453销量</text>
            <text class="score">4.83评分</text>
          </view>
          <view class="con-name">
            麦豹网络·150人服务
            <text class="city">沈阳</text>
          </view>
        </view>
      </view>
      <view class="re-con">
        <image mode="aspectFit" src="https://yiqiwang360.com/images/app/logo.png"></image>
        <view class="con-r">
          <view class="con-title">微信公众号代运营、原创图文排版</view>
          <view>
            <text class="text-red text-xs">￥
              <text class="text-xl">500</text>
              /月
            </text>
            <text class="num">453销量</text>
            <text class="score">4.83评分</text>
          </view>
          <view class="con-name">
            麦豹网络·150人服务
            <text class="city">沈阳</text>
          </view>
        </view>
      </view>
  </view>

  </view>
</template>

<script>
export default {
  data () {
    return {
      detailContent: '',
      goodDetail: {},
      customStyle:{
        width:'300rpx',
        background:'#FF7C00',
        color:'white',
        margin:'20rpx'
      },
      imagesList: [],
    }
  },
  onLoad (options) {
    this.gid = options.id
    this.getStorage()
    this.getGoodDetail(options.id)
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
  page {
    background: #f8f8f8;
    .close-top{
      width: 100%;
      top:80rpx;
      left:0rpx;
      position: fixed;
      padding:20rpx 0;
      text-align: center;
      color:white;
      background:#FF7C00;
      .tips{
        display: flex;
        flex-direction: row;
        justify-content: center;
      }
    }
    .recommend{
      margin: 230rpx 0;
      text-align: center;
      .re-con{
        z-index:-1;
        margin:25rpx 0;
        padding:25rpx;
        display: flex;
        flex-direction: row;
        background: white;
        image{
          width:150rpx;
          height:150rpx;
        }
        .con-r{
          margin:0 20rpx;
          line-height: 50rpx;
          flex: 1;
          text-align: left;
          .con-title{
            font-size: 28rpx;
            font-weight: 700;
          }
          .num,.score,.con-name,.city{
            font-size: 24rpx;
            margin:0 10rpx;
            color: grey;
          }
        }
      }
    }
  }

</style>
