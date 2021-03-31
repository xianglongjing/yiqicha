<template>
  <view class="u-skeleton">
      <view class="order-page">
          <view v-for="item in orderStatus" :key="item.id" class="order-status">
              <view class="title">{{item.operate}}</view>
              <view class="u-order-time">{{item.operate_time | formatDatetime}}</view>
          </view>
          <view class="order-con">
                <view class="order-need u-line-1">
                    我需要服务{{orderDetail.sp}}
                    <text class="cuIcon-right text-gray u-padding-left-5                                                                                                 "></text>
                </view>
              <view class="btns">
                  <text class="btna">买服务</text>
                  <text class="btnb">VI系统设计</text>
              </view>
              <view class="price"> ￥<text class="price-num">80</text></view>
              <view class="shop u-margin-top-10">
                  <view class="shop-l">
                      <image src="https://yiqiwang360.com/images/app/logo.png" mode="aspectFit"></image>
                      <view class="shop-con">
                          {{orderDetail.gName}}
                          <view class="service">为您服务中</view>
                      </view>
                  </view>
                  <view class="shop-r">
                      <u-icon name="chat" color="#F98336" size="39" class="chat"></u-icon>
                      <text class="cuIcon-dianhua dianhua"></text>
                  </view>
              </view>
          </view>
      </view>
      <view class="order-body">
          <u-tabs
                  :list="tabList"
                  :is-scroll="false"
                  :current="current"
                  inactive-color="#666666"
                  active-color="#FF8542"
                  @change="tabChange"
          ></u-tabs>
          <view v-if="current === 0">
                需求
          </view>
          <view v-if="current === 1" class="progress">
              <view class="pro-top">
                  <image src="https://yiqiwang360.com/images/app/logo.png" mode="aspectFit"></image>
                  <view class="pro-con">
                      {{orderDetail.gName}}
                      <view class="tags">保证金10000</view>
                  </view>
              </view>
              <view class="pro-bot">
                  <view class="pro-item">
                      <view class="num">1317</view>
                      <view class="chin">完成过的需求</view>
                  </view>
                  <view class="pro-item">
                      <view class="num">1317</view>
                      <view class="chin">服务雇主数</view>
                  </view>
                  <view class="pro-item">
                      <view class="num">98.4%</view>
                      <view class="chin">好评率</view>
                  </view>
                  <view class="pro-item">
                      <view class="num">1.00%</view>
                      <view class="chin">退款率</view>
                  </view>
              </view>
          </view>
      </view>
      <view class="footer">
          <u-button :custom-style="cancel" shape="circle">取消需求</u-button>
          <view class="footer-r">
          <u-button :custom-style="add" shape="circle">补充需求</u-button>
          <u-button :custom-style="money" shape="circle">托管赏金</u-button>
          </view>
      </view>

  </view>
</template>

<script>
export default {
  data () {
    return {
        tabList: [
            {
                name: '需求概览'
            }, {
                name: '项目进度'
            }],
        cancel:{
            width:'150rpx',
            height:'60rpx',
            fontSize: '25rpx'
        },
        add:{
            width:'150rpx',
            height:'60rpx',
            color:'#FD9053'
        },
        money:{
            width:'150rpx',
            height:'60rpx',
            background:'#FD9053',
            color:'white',
            marginLeft:'20rpx'
        },
        current: 1,
      storage: {
        token: '',
        uid: 0,
        info: {}
      },
      // 订单ID
      oid: '',
      orderDetail: {},
      orderStatus: [],
      loading: true, // 是否显示骨架屏组件
      // 电话咨询
      shopId: 0,
      phonesShow: false,
      phonesList: [],
      tips: {
        text: '点击号码直接拨打',
        color: '#909399',
        fontSize: 26
      }
    }
  },
  onLoad (options) {
    this.oid = options.oid
    this.getStorage()
    this.getOrderDetail()
    this.loading = false
  },
  methods: {
      tabChange (index) {
          this.current = index;
      },
    // 获取本地存储
    getStorage () {
      this.storage.token = uni.getStorageSync('token')
      this.storage.uid = uni.getStorageSync('uid')
      this.storage.info = uni.getStorageSync('info')
    },
    async getOrderDetail () {
      const { data: res } = await this.$request({
        url: 'myhome/orderinfo',
        data: {
          oid: this.oid,
          uid: this.storage.uid,
          token: this.storage.token
        }
      })
      this.orderDetail = res.data.info
      this.shopId = res.data.info.spid
      this.orderStatus = res.data.msg
      this.getPhonesList()
    },
    // 电话
    async getPhonesList () {
      const { data: res } = await this.$request({
        url: 'phoneslist',
        data: {
          token: this.storage.token,
          uid: this.shopId
        }
      })
      if (res.data.length !== 0) {
        this.phonesList = res.data.map((item) => { return Object.assign({}, item, { text: item.name + '：' + item.phone }) })
      } else {
        this.phonesList = [{ text: '未设置联系电话' }]
      }
    },
    showPhones () {
      if (this.storage.token === '') {
        uni.redirectTo({
          url: '/pages/mine/login'
        })
        return uni.showToast({
          title: '未登录，请登录',
          icon: 'none',
          duration: 2000
        })
      }
      this.phonesShow = true
    },
    // 拨打电话
    callPhone (index) {
      if (this.phonesList[0].text !== '未设置联系电话') {
        uni.makePhoneCall({
          phoneNumber: this.phonesList[index].phone
        })
      }
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
  background: #F98336;
  padding: 30rpx;
  height: 460rpx;
    .order-status {
        color: white;
        display: flex;
        align-items: center;
        margin-bottom: 30rpx;
        flex-direction: row;
        justify-content: space-between;

        .title {
            font-size: 36rpx;
        }
    }
    .order-con{
        background: white;
        border-radius: 10rpx;
        width:99%;
        height:320rpx;
        padding:20rpx 30rpx;
        .order-need{
            font-size: 31rpx;
        }
        .btns{
            margin:20rpx 0;
            .btna{
                color:white;
                font-size: 18rpx;
                border-radius: 6rpx;
                padding:8rpx 2rpx;
                background:#F98336;
            }
            .btnb{
                border:1rpx solid #D4A173;
                margin-left:15rpx;
                color:#D4A173;
                font-size: 18rpx;
                border-radius: 6rpx;
                padding:4rpx 2rpx;
            }
        }
        .price{
            font-size: 22rpx;
            color:#F98336;
            .price-num{
                font-size: 30rpx;
                font-weight: 600;
            }
        }
        .shop{
            padding:20rpx;
            background: #FEF0E7;
            height:120rpx;
            width:99%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            border-radius: 10rpx;
            .shop-l{
                display: flex;
                flex-direction: row;
                image{
                    width:70rpx;
                    height:70rpx;
                    border-radius: 50%;
                }
                .shop-con{
                    margin-left: 10rpx;
                    .service{
                        color:gray;
                        font-size: 24rpx;
                    }
                }
            }
            .shop-r{
                display: flex;
                flex-direction: row;
                .chat{
                    width:60rpx;
                    height:60rpx;
                    border-radius: 50%;
                    border: 1rpx solid #FF8542;
                    text-align: center;
                    display: flex;
                    justify-content: center;
                }
                .dianhua{
                    color:#FF8542;
                    width:60rpx;
                    height:60rpx;
                    margin-left: 40rpx;
                    line-height:60rpx;
                    text-align: center;
                    border-radius: 50%;
                    border: 1rpx solid #FF8542;
                }
            }
        }
    }
}
    .order-body{
        .progress{
            margin:30rpx 0;
            padding:20rpx 30rpx;
            background: white;
            height:230rpx;
            width:100%;
            .pro-top{
                display: flex;
                flex-direction: row;
                image{
                    width:70rpx;
                    height:70rpx;
                    border-radius: 50%;
                }
                .pro-con{
                    margin-left:20rpx;
                    .tags{
                        margin:15rpx 0;
                        font-size: 22rpx;
                        border:1rpx solid #A5C1B3;
                        color:#A5C1B3;
                        padding:0;
                        text-align: center;
                    }
                }
            }
            .pro-bot{
                /*margin: 20rpx 0;*/
                display: flex;
                flex-direction: row;
                background: #F3F3F3;
                justify-content: center;
                align-items: center;
                height: 100rpx;
                .pro-item{
                    flex:1;
                    text-align: center;
                    .num{
                        font-weight: 600;
                        height: 40rpx;
                        line-height: 40rpx;
                    }
                    .chin{
                        font-size: 21rpx;
                        color:#A9A9A9;
                    }
                }
            }
        }
    }
    .footer{
        height:80rpx;
        width:100%;
        background: white;
        padding:10rpx 40rpx;
        display: flex;
        align-items: center;
        flex-direction: row;
        position: fixed;
        bottom:0;
        left:0;
        .footer-r{
            display: flex;
            padding:0 20rpx;
            flex-direction: row;
            margin-left:150rpx;
        }
    }
</style>
