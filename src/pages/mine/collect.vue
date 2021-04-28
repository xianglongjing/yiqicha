<template>
  <view>
    <view class="tabs u-border-top">
      <view class="tabcon">
      <u-tabs
              :list="List"
              :current="current"
              @change="Change" gutter="70"
              bar-width="50" font-size="30"
              active-color="#E2291D" bg-color="none" inactive-color="#666666"
      ></u-tabs>
      </view>
    </view>
    <view v-if="current==0" class="trends">
      <view class="gray">2021.03.29-2021.04.04</view>
      <view class="item">上周你收藏的企业共发生414条动态，设计1家企业.</view>
    </view>
    <view v-if="current==1" class="list">
      <view class="flex">
        <view class="gray" style="flex:1">共收藏：<text class="red">1</text></view>
        <u-dropdown class="u-margin-left-80">
          <u-dropdown-item v-model="value1" title="全部" :options="options1"></u-dropdown-item>
        </u-dropdown>
      </view>
      <view class="flex u-margin-top-10">
        <u-image mode="aspectFill" src="http://images.yiqiwang360.com/yiqicha/gongsiming.png" width="80" height="80"></u-image>
        <view class="flex-r">
          <view class="name">珠海格力电器股份有限公司</view>
          <view style="display: flex;justify-content: space-between;font-size: 26rpx">
            <text class="gray">监控时间：2021-04-04</text>
            <text class="red">取消收藏</text>
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
      storage: {
        token: '',
        uid: 0,
        info: {}
      },
      List: [{
        name: '收藏动态'
      }, {
        name: '收藏企业'
      }],
      current:0,
    }
  },
  onLoad () {
    this.getStorage()
  },
  onShow () {
    this.focus()
  },
  methods: {
    Change(index) {
      this.current = index;
    },
    // 获取本地存储
    getStorage () {
      this.storage.token = uni.getStorageSync('token')
      this.storage.uid = uni.getStorageSync('uid')
      this.storage.info = uni.getStorageSync('info')
    },
    // async click (index) {
    //   this.collectList[index].show = false
    //   this.$u.toast(`取消成功`)
    //   const { data: res } = await this.$request({
    //     url: 'myhome/addcollect',
    //     data: {
    //       uid: this.storage.uid,
    //       token: this.storage.token,
    //       gid: this.collectList[index].id
    //     }
    //   })
    //   this.getCollectList()
    // },
    // 如果打开一个的时候，不需要关闭其他，则无需实现本方法
    // open (index) {
    //   // 先将正在被操作的swipeAction标记为打开状态，否则由于props的特性限制，
    //   // 原本为'false'，再次设置为'false'会无效
    //   this.collectList[index].show = true;
    //   this.collectList.map((val, idx) => {
    //     if (index != idx) this.collectList[idx].show = false;
    //   })
    // },
    // async focus () {
    //   const { data: res } = await this.$request({
    //     method: 'POST',
    //     url: 'myhome/mycollect',
    //     data: {
    //       token: this.storage.token,
    //       uid: this.storage.uid
    //     }
    //   })
    //   // if (!res.list) {
    //   //   this.collectList = []
    //   //   return this.emptyShow = true
    //   // }
    //   // this.collectList = res.list.map((item) => { return Object.assign({}, item, { show: false }) })
    // },
    goGoodDetail (id) {
      uni.navigateTo({
        url: '/pages/shops/goodDetail?id=' + id
      })
    }
  }
}
</script>
<style lang="scss">
page {
  background-color: #f8f8f8;
}
</style>
<style lang="scss" scoped>
  .gray{
    color:#BBBBBB;
  }
  .red{
    color:#E2291D;
  }
  .tabs{
    background: white;

    .tabcon{
      width:63%;
      margin:0 auto;
    }
  }
  .trends{
    background: white;
    margin:20rpx 0;
    padding:20rpx;
    .item{
      font-weight: 600;
      padding:10rpx 0;
    }
  }
  .flex{
    padding:15rpx 20rpx;
    background: white;
    align-items: center;
    justify-content: space-between;
    .flex-r{
      flex:1;
      margin-left:20rpx;
      .name{
        font-weight: 600;
      }
    }
  }
</style>
