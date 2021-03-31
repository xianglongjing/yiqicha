<template>
  <view class="page">
    <uni-nav-bar :status-bar="true" left-icon="back" :fixed="true" :border="false" :shadow="false" @clickLeft="goBack">
      <view slot="default" style="width: 80%">
        <u-tabs
                :list="tabList"
                :is-scroll="false"
                :current="current"
                inactive-color="#666666"
                active-color="#fd5123"
                @change="tabChange"
        ></u-tabs>
      </view>
    </uni-nav-bar>
    <view class="goods-body">

      <view class="goods-content ql-snow">
        <view v-if="current === 0">
        <view class="goods-head">
          <view class="goods-cover">
            <u-swiper :list="imagesList" height="340" :autoplay="false" border-radius="8" mode="number"></u-swiper>
          </view>
          <view class="goods-con">
            <view class="u-line-2 text-df text-bold u-margin-bottom-10">{{goodDetail.name}}</view>
            <view class="goods-tips u-line-1">
              <text>按时按质</text>
              <text>保证完成</text>
              <text>提供发票</text>
            </view>
            <view class="goods-price u-border-bottom">
              <text class="text-red">￥<text class="text-xl">{{goodDetail.price}}</text> <text>{{goodDetail.price === '免费咨询' ? '' : '元'}}</text></text>
            </view>
            <view class="shop-share">
              <u-button size="mini" :hair-line="false" :border="false" :custom-style="customStyle" shape="circle" hover-class="none" open-type="share">分享</u-button>
            </view>
            <view class="shop-detail">
              <view class="shop-detail-items">
                <text><text class="detail-num">{{goodDetail.gradeSD}}</text></text>
                <text>响应速度</text>
              </view>
              <view class="u-border-right text-gray line-right"></view>
              <view class="shop-detail-items">
                <text><text class="detail-num">{{goodDetail.gradeTD}}</text></text>
                <text>服务态度</text>
              </view>
              <view class="u-border-right text-gray line-right"></view>
              <view class="shop-detail-items">
                <text><text class="detail-num">{{goodDetail.Num}}</text></text>
                <text>总销量</text>
              </view>
              <view class="u-border-right text-gray line-right"></view>
              <view class="shop-detail-items">
                <text><text class="detail-num">{{goodDetail.collect}}</text></text>
                <text>收藏</text>
              </view>
            </view>
          </view>
        </view>
        <view class="goods-third">
          <view class="attribute u-line-1 u-border-bottom">
            <view class="title">属性</view>
            <view style="flex:1">
              <text>单次服务</text>
              <text class="cuIcon-right arr-r"></text>
            </view>
          </view>
          <view class="safeguard" @click="go('index/ensure')">
            <view class="title">保障</view>
            <view class="yiqibaos">
              <view>
                <view class="bao-items">
                  <view class="title-icon">
                    <image mode="aspectFit" src="/static/image/yiqibao.png"></image>
                  </view>
                  <view class="item">
                    <image mode="aspectFit" src="/static/image/bao.png"></image>
                    <text>资金安全</text>
                  </view>
                  <view class="item">
                    <image mode="aspectFit" src="/static/image/zheng.png"></image>
                    <text>商家实名</text>
                  </view>
                  <view class="item">
                    <image mode="aspectFit" src="/static/image/guan.png"></image>
                    <text>全程监管</text>
                  </view>
                  <text class="cuIcon-right"></text>
                </view>
                <view class="smtex u-margin-top-20 u-line-1">服务商已缴纳保证金<text class="ensure"></text>，承诺交易出问题先行赔付</view>
              </view>
            </view>
          </view>
        </view>
        <view class="assess">
          <view class="assess-title">
            <view>
              <text class="cuIcon-titles text-red u-font-28"></text>
              <text class="u-font-28">客户评价 <text>(0)</text></text>
            </view>
            <view class="assess-more u-margin-right-20" @click="goAssess">查看全部 <text class="cuIcon-right"></text></view>
          </view>
          <view class="assess-detail">
            <text>好评率100%</text>
          </view>
          <view class="assess-con" v-if="false">
            <view class="assess-person">
              <image :src="src" mode="aspectFill"></image>
              <text>昵称</text>
            </view>
            <view class="person-con">服务非常好非常棒简直顶呱呱</view>
          </view>
        </view>
        <view class="shop" v-if="false">
          <image mode="aspectFit" src="https://yiqiwang360.com/images/app/logo.png"></image>
          <view class="shop-con">
            <view class="text-l">店铺名称</view>
            <text class="service-num">共 <text class="service-amount">28</text>个服务</text>
            <view class="u-line-1">
              <text class="employer text-xs">服务雇主 <text class="service-amount">66</text>家</text>
              <text class="text-gray text-xs">|</text>
              <text class="turnover text-xs">成交额 <text class="service-amount">12.36</text>万</text>
              <text class="text-gray">|</text>
              <text class="item-rate text-xs">好评率 <text class="service-amount">100%</text></text>
            </view>
            <view class="seeshop">进店看看
              <text class="cuIcon-right"></text>
            </view>
          </view>
        </view>
<!--        <view>-->
<!--          <text class="cuIcon-titles text-red u-font-28"></text>-->
<!--          <text class="u-font-28">产品详情</text>-->
<!--        </view>-->
          <view v-html="detailContent" class="ql-editor"></view>
        </view>

        <!-- 服务评价 -->
        <view v-if="current === 1">
          <u-empty text="暂无评价" mode="data" img-width="100" v-if="score.length === 0"></u-empty>
          <view v-for="(item,index) in score" :key="index" class="comment-item">
            <view class="u-border-bottom comment-title">
              <view class="u-line-1">用户 {{item.nackname === '' ? '匿名' : item.nackname}}</view>
              <view>评论时间 {{item.date | formatDatetime}}</view>
            </view>
            <view>
              <view class="comment-body">
                评分：
                <u-rate :current="item.grade" disabled size="23rpx"></u-rate>
              </view>
              <view class="comment-body">评论：{{item.py === '' ? '未填写' : item.py}}</view>
            </view>
          </view>
        </view>
        <view v-if="current === 2" v-html="detailContent" class="ql-editor"></view>
<!--        <u-gap height="130" bg-color="#ffffff"></u-gap>-->
      </view>
    </view>


    <view class="cu-bar bg-white tabbar border shop goods-footer u-border-top">
      <button
              class="action"
              @click="collectHandle(goodDetail.id)"
              :style="goodDetail.collect === 1 ? 'color:#fd5123' : ''"
      >
        <view
                class="u-font-35"
                :class="goodDetail.collect === 1 ? 'cuIcon-likefill' : 'cuIcon-like'"
        ></view>
        <view>{{goodDetail.collect === 1 ? '已收藏' : '收藏'}}</view>
      </button>
      <view class="action" @click="goShop(shopId)">
        <view class="cuIcon-shop"></view>商家主页
      </view>
      <view class="action" @click="showPhones">
        <view class="cuIcon-dianhua"></view>电话咨询
      </view>
      <view class="btn-group" @click="goOrder(goodDetail.id)">
        <button
                class="cu-btn round shadow-blur"
                style="color:#ffffff;background-image: linear-gradient(120deg, #ff5a00, #ff2b0f);"
                @click="goOrder(goodDetail.id)"
        >立即下单</button>
<!--        立即下单-->
      </view>
    </view>
    <!-- 电话咨询列表 -->
    <u-action-sheet
            :list="phonesList"
            v-model="phonesShow"
            safe-area-inset-bottom
            :tips="tips"
            @click="callPhone"
    ></u-action-sheet>
  </view>
</template>
<script>
  import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
export default {
  components: {uniNavBar},
  data () {
    return {
      storage: {
        token: '',
        uid: 0,
        info: {}
      },
      customStyle:{
        background:'#efefef',
        width:'130rpx',
        border: '0px',
        paddingRight: '40rpx'
      },
      src: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
      tabList: [
        {
          name: '服务'
        }, {
        name: '评价'
      }, {
        name: '详情'
      }],
      current: 0,
      imagesList: [],
      detailContent: '',
      goodDetail: {},
      // 服务商ID
      shopId: 0,
      // 服务ID
      gid: 0,
      phone: '',
      // 服务评价
      score: [],
      // 定时器id
      timeId: null,
      // 电话咨询
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
    this.gid = options.id
    this.getStorage()
    this.getGoodDetail(options.id)
    // 添加足迹
    if (this.storage.token !== '') {
      this.timeId = setTimeout(() => {
        this.addHistroy()
      }, 5000)
    }
  },
  methods: {
    goBack(){
      uni.navigateBack({
        delta: 1
      });
    },
    // 获取本地存储
    getStorage () {
      this.storage.token = uni.getStorageSync('token')
      this.storage.uid = uni.getStorageSync('uid')
      this.storage.info = uni.getStorageSync('info')
    },
    tabChange (index) {
      if (index===1){
        this.go('shops/assessDetail')
        return false
      }
      this.current = index;
    },
    async getGoodDetail (id) {
      const { data: res } = await this.$request({
        url: 'merchant/serviceproductinfo',
        data: {
          uid: this.storage.uid,
          id: id
        }
      })
      // console.log(res)
      this.imagesList = res.data.dbimg.map((item) => { return { 'image': item } })
      this.goodDetail = res.data
      this.detailContent = res.data.contents.replace(/<img/g, '<img style="max-width:100%;height:auto"')
      this.shopId = res.data.spid
      this.phone = res.data.phone
      this.score = res.data.score
      this.getPhonesList()
    },
    // 跳转服务商
    goShop (val) {
      uni.navigateTo({
        url: '/pages/shops/shopHome?id=' + val
      })
    },
    goAssess() {
      uni.navigateTo({
        url: '/pages/shops/assessDetail'
      })
    },
    // 立即下单
    goOrder (val) {
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
      uni.navigateTo({
        url: '/pages/orders/placeOrder?id=' + val
      })
    },
    // 收藏操作
    async collectHandle (gid) {
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
      const { data: res } = await this.$request({
        url: 'myhome/addcollect',
        data: {
          uid: this.storage.uid,
          token: this.storage.token,
          gid: gid
        }
      })
      this.getGoodDetail(this.gid)
    },
    async addHistroy () {
      const { data: res } = await this.$request({
        method: 'POST',
        url: 'myhome/addbrowse',
        data: {
          token: this.storage.token,
          uid: this.storage.uid,
          gid: this.gid
        }
      })
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
        this.phonesList = res.data.map((item) => { return Object.assign({}, item, { text: item.name + '：' + 4000361717 }) })
      } else {
        this.phonesList = [{ text: '暂无联系电话' }]
      }
    },
    // 点击跳转
    go (path) {
      let name = path
      let nameArr = name.split('=')
      if (nameArr[1]==='全部分类'){
        uni.switchTab({
          url: '/pages/serve/serve'
        })
        return false
      }
      uni.navigateTo(
              { url: '/pages/' + path }
      )
    },
    showPhones () {
      if (this.storage.token === '') {
        uni.redirectTo({
          url: '/pages/mine/login'
        })
        return uni.showToast({
          title: '未登录，请先登录',
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
  padding-bottom:100rpx;
  background:#F8F8F8;
}
</style>
<style lang="scss" scoped>
.page {
  .goods-head {
    width:100%;
    padding: 20rpx;
    background: white;
    border-bottom: 20rpx solid #f8f8f8;
    .goods-con{
      padding:10rpx 0 0;
      position: relative;
      .goods-tips{
        font-size:10rpx;
        display: flex;
        flex-direction: row;
        text{
          border-radius: 5rpx;
          padding:0 15rpx;
          font-size: 20rpx;
          margin-right: 10rpx;
          color:#FE9A3A;
          border:1rpx solid #FE9A3A;
        }
      }
      .goods-price{
        margin:20rpx 0;
        height:80rpx;
        text{
          padding:0 10rpx;
        }
      }
      .shop-share{
        position: absolute;
        top:80rpx;
        right: -50rpx;
        border: none;
      }
      .shop-detail{
        display: flex;
        flex-direction: row;
        .shop-detail-items{
          color:#676767;
          font-size: 23rpx;
          display: flex;
          flex:1;
          text-align: center;
          justify-content: center;
          flex-direction: column;
          .detail-num{
            font-size: 30rpx;
            font-weight: 500;
          }
        }
        .line-right{
          height:50rpx;
          margin:30rpx 10rpx;
          line-height: 40rpx;
        }
      }
    }
  }
  .goods-third{
    padding:0 20rpx;
    margin:20rpx 0;
    background:white;
    .attribute{
      display: flex;
      flex-direction: row;
      align-items: center;
      height:100rpx;
      line-height: 100rpx;
      .title{
        width:100rpx;
      }
      text{
        margin-right:20rpx;
      }
      .arr-r{
      float: right;
      }
    }
    .safeguard{
      display: flex;
      flex-direction: row;
      .smtex{
        font-size: 20rpx;
      }
      .yiqibaos{
        flex:1;
        margin:10rpx 0;
        padding: 10rpx 0;
        .bao-items{
          display: flex;
          .title-icon{
            image{
              vertical-align: text-top;
              height: 30rpx;
              width: 100rpx;
              margin-right: 20rpx;
            }
          }
          .cuIcon-right{
            width: 40rpx;
          }
          .item{
            flex: 1;
            display:inline-block;
            text{
              font-size: 24rpx;
              line-height: 30rpx;
            }
            image{
              margin-right: 2rpx;
              vertical-align: bottom;
              width:38rpx;
              height:30rpx;
            }
          }
        }
        .ensure{
          color:#FE9A3A;
        }
      }
      .title{
        text-align: center;
        align-items: center;
        display: flex;
        width:100rpx;
      }

    }
  }
  .assess{
    background:white;
    margin:30rpx 0;
    padding: 0 20rpx;
    min-height: 160rpx;
    .assess-title{
      padding:15rpx 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .assess-more{
        font-size: 27rpx;
        color:#FF321E;
      }
    }
    .assess-detail{
      font-size: 22rpx;
      color:#FF321E;
      margin:30rpx 0;
      text{
        background: #FEE9E6;
        border-radius:20rpx;
        padding:10rpx;
        margin:10rpx;
      }
    }
    .assess-con{
      font-size: 25rpx;
      padding:20rpx;
      margin:20prx;
      .person-con{
        margin:20rpx 0;
      }
      .assess-person{
        image{
          width: 40rpx;
          height: 40rpx;
          margin-right: 10rpx;
          border-radius: 50%;
        }
      }
    }

  }
  .shop{
    background: white;
    display: flex;
    padding:20rpx 10rpx;
    flex-direction: row;
    image{
      width:120rpx;
      height:120rpx;
      margin-right: 40rpx;
      border-radius: 15rpx;
    }
    .seeshop{
      font-size: 27rpx;
      color:#FF321E;
      position:absolute;
      top:0rpx;
      right:10rpx;
    }
    .shop-con {
      position: relative;
      line-height: 38rpx;
      flex:1;
      .service-num {
        border-radius: 8rpx;
        font-size: 20rpx;
        background: #FEEDDD;
        padding:5rpx 20rpx;
      }
      .employer{
        margin-right: 10rpx;
      }
      .turnover{
        margin:10rpx;
      }
      .item-rate{
        margin:10rpx;
      }
      .service-amount {
        color: #FE9A3A;
      }
    }
  }
  .goods-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .comment-item {
    padding: 20rpx 0;
    .comment-title {
      display: flex;
      justify-content: space-between;
      text-align: left;
      font-size: 20rpx;
      line-height: 40rpx;
      color: $u-content-color;
    }
    .comment-body {
      font-size: 25rpx;
    }
  }
}
</style>
