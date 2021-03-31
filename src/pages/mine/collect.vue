<template>
  <view>
    <view class="items">
      <u-swipe-action
        :show="item.show"
        :index="index"
        v-for="(item, index) in collectList"
        :key="item.id"
        @click="click"
        @open="open"
        :options="options"
        bg-color="#f8f8f8"
        btn-width="220"
      >
        <view class="item" @click="goGoodDetail(item.id)">
          <image class="goods-cover" mode="aspectFill" :src="item.dbimg" />
          <!-- 此层wrap在此为必写的，否则可能会出现标题定位错误 -->
          <view class="item-body">
            <text class="title u-line-2">{{ item.name }}</text>
            <text class="guide u-line-2">{{ item.brief }}</text>
            <u-line color="#ccc" margin="20rpx 0rpx" />
            <text class="guide u-line-2">{{ item.sp }}</text>
          </view>
        </view>
      </u-swipe-action>
    </view>
    <u-empty :show="emptyShow" mode="favor" text="暂无收藏" margin-top="160"></u-empty>
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
      collectList: [],
      disabled: false,
      btnWidth: 180,
      emptyShow: false,
      options: [
        {
          text: '取消收藏',
          style: {
            marginTop: '16rpx',
            backgroundColor: '#fd5123',
            fontSize: '28rpx'
          }
        }
      ]
    }
  },
  onLoad () {
    this.getStorage()
  },
  onShow () {
    this.getCollectList()
  },
  methods: {
    // 获取本地存储
    getStorage () {
      this.storage.token = uni.getStorageSync('token')
      this.storage.uid = uni.getStorageSync('uid')
      this.storage.info = uni.getStorageSync('info')
    },
    async click (index) {
      this.collectList[index].show = false
      this.$u.toast(`取消成功`)
      const { data: res } = await this.$request({
        url: 'myhome/addcollect',
        data: {
          uid: this.storage.uid,
          token: this.storage.token,
          gid: this.collectList[index].id
        }
      })
      this.getCollectList()
    },
    // 如果打开一个的时候，不需要关闭其他，则无需实现本方法
    open (index) {
      // 先将正在被操作的swipeAction标记为打开状态，否则由于props的特性限制，
      // 原本为'false'，再次设置为'false'会无效
      this.collectList[index].show = true;
      this.collectList.map((val, idx) => {
        if (index != idx) this.collectList[idx].show = false;
      })
    },
    async getCollectList () {
      const { data: res } = await this.$request({
        method: 'POST',
        url: 'myhome/mycollect',
        data: {
          token: this.storage.token,
          uid: this.storage.uid
        }
      })
      if (!res.list) {
        this.collectList = []
        return this.emptyShow = true
      }
      this.collectList = res.list.map((item) => { return Object.assign({}, item, { show: false }) })
    },
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
.item {
  display: flex;
  margin-top: 16rpx;
  padding: 20rpx;
  background-color: #ffffff;
  .goods-cover {
    width: 140rpx;
    flex: 0 0 140rpx;
    height: 140rpx;
    margin-right: 20rpx;
    border-radius: 12rpx;
  }
  .item-body {
    .title {
      text-align: left;
      font-size: 28rpx;
      line-height: 30rpx;
      color: $u-content-color;
      margin-top: 0rpx;
    }
    .guide {
      margin-top: 20rpx;
      text-align: left;
      font-size: 24rpx;
      line-height: 30rpx;
      color: $u-content-color;
    }
  }
}
</style>
