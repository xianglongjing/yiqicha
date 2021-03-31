<template>
  <view>
    <view class="items">
      <view
        class="item"
        v-for="(item, index) in historyList"
        :key="index"
        @click="goGoodDetail(item.id)"
      >
        <u-image class="goods-cover" mode="aspectFill" :src="item.headimg" width="140" height="140"></u-image>
        <!-- 此层wrap在此为必写的，否则可能会出现标题定位错误 -->
        <view class="item-body">
          <text class="title u-line-2">{{ item.name }}</text>
          <text class="guide u-line-2">{{ item.brief }}</text>
          <u-line color="#ccc" margin="20rpx 0rpx" />
          <text class="guide u-line-2">{{ item.sp }}</text>
        </view>
      </view>
    </view>
    <u-empty :show="emptyShow" mode="favor" text="暂无足迹" margin-top="160"></u-empty>
    <view class="goods-foot">
      <view class="btn-item add" @click="clearHistroy">
        <u-icon name="trash" color="#fd5123" size="28"></u-icon>
        <text>删除足迹</text>
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
      emptyShow: true,//内容为空
      historyList: []
    }
  },
  onLoad () {
    this.getStorage()
    this.getHistoryList()
  },
  methods: {
    // 获取本地存储
    getStorage () {
      this.storage.token = uni.getStorageSync('token')
      this.storage.uid = uni.getStorageSync('uid')
      this.storage.info = uni.getStorageSync('info')
    },
    click (index, index1) {
      if (index1 == 1) {
        this.list.splice(index, 1);
        this.$u.toast(`删除了第${index}个cell`);
      } else {
        this.list[index].show = false;
        this.$u.toast(`收藏成功`);
      }
    },
    async getHistoryList () {
      const { data: res } = await this.$request({
        method: 'POST',
        url: 'myhome/mybrowse',
        data: {
          token: this.storage.token,
          uid: this.storage.uid
        }
      })
      if (res.list.length === 0) return this.emptyShow = true
      // console.log(res)
      this.emptyShow = false
      this.historyList = res.list
    },
    // 跳转到服务详情
    goGoodDetail (id) {
      uni.navigateTo({
        url: '/pages/shops/goodDetail?id=' + id
      })
    },
    async clearHistroy () {
      const { data: res } = await this.$request({
        url: 'myhome/unbrowse',
        data: {
          token: this.storage.token,
          uid: this.storage.uid
        }
      })
      this.historyList = []
      this.emptyShow = true
      this.getHistoryList()
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
.items {
  margin-bottom: 130rpx;
}
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
.goods-foot {
  z-index: 9;
  position: fixed;
  display: flex;
  background-color: #ffffff;
  padding: 10px;
  bottom: 30rpx;
  left: 250rpx;
  right: 250rpx;
  text-align: center;
  border-radius: 60rpx;
  box-shadow: 5rpx 15rpx 30rpx rgba(0, 0, 0, 0.3);
  align-items: center;
  box-sizing: border-box;
  font-size: 28rpx;
  color: #fd5123;
  .btn-item {
    flex: 1;
    text-align: center;
    align-items: center;
    u-icon {
      padding: 10rpx 10rpx 10rpx 0;
      justify-content: center;
    }
  }
}
</style>
