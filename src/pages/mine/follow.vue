<template>
  <view class="page u-border-top">
    <view class="group" @click="group">
      <view class="flex">
        <u-image mode="aspectFit" width="40" height="40" src="http://images.yiqiwang360.com/yiqicha/fenzu.png"></u-image>
        <text class="u-margin-left-20">我的分组(4)</text>
      </view>
      <u-icon name="arrow-right" size="30" color="#D2D2D2"></u-icon>
    </view>
    <view class="shop">
      <view class="top">
        <view class="flex">
          <u-image mode="aspectFill" width="100" height="100"
                   src="https://seopic.699pic.com/photo/50139/5280.jpg_wh1200.jpg"></u-image>
          <view>
            <text class="name">{{shoplist.cpyname}}</text>
            <text class="store u-margin-left-10">存续</text>
          </view>
        </view>
        <view class="jiankong">
          <u-image mode="aspectFit" width="30" height="30" src="http://images.yiqiwang360.com/yiqicha/jiankong.png"></u-image>
       <text>{{shoplist.monitor=null? '未监控' : '监控'}}</text>
        </view>
      </view>
      <view class="shop-bo">
        <view class="bo-item u-border-right">
          <text class="title">法人代表</text>
          <text>{{partner.name? partner.name : '—'}}</text>
        </view>
        <view class="bo-item u-border-right">
          <text class="title">注册资金</text>
          <text>{{shoplist.rtdcapital? shoplist.rtdcapital : '—'}}</text>
        </view>
        <view class="bo-item">
          <text class="title">成立时间</text>
          <text>{{shoplist.ebhtdate? shoplist.ebhtdate : '—'}}</text>
        </view>
      </view>
    </view>
    <u-empty :show="emptyShow" mode="favor" text="暂无关注" margin-top="160"></u-empty>
  </view>
</template>

<script>
export default {
  data() {
    return {
      storage: {
        token: '',
        uid: 0,
        info: {}
      },
      emptyShow: false,//内容为空
      shoplist: [],
      partner:[],
      disabled: false,
      btnWidth: 180,
      options: [
        {
          text: '取消关注',
          style: {
            marginTop: '16rpx',
            backgroundColor: '#fd5123',
            fontSize: '28rpx'
          }
        }
      ]

    }
  },
  onLoad() {
    this.getStorage()
  },
  onShow() {
    this.getFollowList()
  },
  methods: {
    //获取本地存储
    getStorage() {
      this.storage.token = uni.getStorageSync('token')
      this.storage.uid = uni.getStorageSync('uid')
      this.storage.info = uni.getStorageSync('info')
    },
    group(){
      uni.navigateTo({
        url:'/pages/mine/mygroup'
      })
    },
    // async click(index) {
    //   this.followList[index].show = false
    //   this.$u.toast(`取消成功`)
    //   const {data: res} = await this.$request({
    //     url: 'myhome/addconcern',
    //     data: {
    //       uid: this.storage.uid,
    //       token: this.storage.token,
    //       spid: this.followList[index].id
    //     }
    //   })
    //   this.getFollowList()
    // },
    // 如果打开一个的时候，不需要关闭其他，则无需实现本方法
    // open(index) {
    //   // 先将正在被操作的swipeAction标记为打开状态，否则由于props的特性限制，
    //   // 原本为'false'，再次设置为'false'会无效
    //   this.followList[index].show = true;
    //   this.followList.map((val, idx) => {
    //     if (index != idx) this.followList[idx].show = false;
    //   })
    // },
    async getFollowList() {
      const {data: res} = await this.$request({
        method: 'POST',
        url: 'applets/myfocus',
        data: {
          token: this.storage.token,
          page: 1
        }
      })
      this.shoplist = res
      this.partner=res.partner
      console.log(res)
      // if (!res.list) {
      //   this.followList = []
      //   return this.emptyShow = true
      // }
      // this.followList = res.list.map((item) => {
      //   return Object.assign({}, item, {show: false})
      // })
    },
    //   goShopHome (id) {
    //     uni.navigateTo({
    //       url: '/pages/shops/shopHome?id=' + id
    //     })
    //   }
    // }
  }
}
</script>
<style lang="scss">
page {
  background-color: #f8f8f8;
}
</style>
<style lang="scss" scoped>
.group{
  background: white;
  display: flex;
  justify-content: space-between;
  padding:22rpx;
}
  .shop{
    background: white;
    padding:25rpx;
    .top{
      display: flex;
      justify-content: space-between;
      .flex{
        width:80%;
        .name{
        /*letter-spacing: 10rpx;*/
      }
        .store{
          border:1rpx solid #328A5F;
          color:#328A5F;
          border-radius: 2rpx ;

        }
      }
      .jiankong{
        display: flex;
        align-items: center;
        padding:5rpx;
        height:50rpx;
        border:1rpx solid #E75D54;
        color:#E75D54;
        border-radius: 8rpx;
      }
    }
    .shop-bo{
      margin-top:20rpx;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      .title{
        line-height:50rpx;
        color:#B8B8B8;
      }
      .bo-item{
        font-size: 25rpx;
        flex:1;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
      }
    }
  }
</style>
