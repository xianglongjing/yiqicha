<template>
  <view>
    <view class="content">
      <view class="item" v-for="(item, index) in dataList" :key="index">
        <image
          class="goods-cover"
          mode="aspectFill"
          :src="item.thumbnail"
          @click="showBigImage(item.warterimg)"
        />
        <view class="item-body">
          <view class="left">
            <text class="title u-line-2">{{ item.type === 0 ? '营业执照' : '' }}</text>
            <text class="guide u-line-2">{{item.date}}</text>
          </view>
          <view class="right">
            <u-button
              size="mini"
              :custom-style="customStyle"
              ripple
              @click="showBigImage(item.warterimg)"
            >查看图片</u-button>
          </view>
        </view>
      </view>
    </view>
    <u-empty :show="emptyShow" mode="favor" text="暂无资料" margin-top="160"></u-empty>
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
      dataList: [],
      emptyShow: false
    }
  },
  onLoad () {
    this.getStorage()
    this.getUploadDetail()
  },
  methods: {
    // 获取本地存储
    getStorage () {
      this.storage.token = uni.getStorageSync('token')
      this.storage.uid = uni.getStorageSync('uid')
      this.storage.info = uni.getStorageSync('info')
    },
    // 获取上传资料
    async getUploadDetail () {
      const { data: res } = await this.$request({
        method: 'POST',
        url: 'Service/information',
        data: {
          uid: this.storage.uid,
          token: this.storage.token
        }
      })
      this.dataList = res.data.dataList
      if (this.dataList.length === 0) return this.emptyShow = true
    },
    // 大图预览
    showBigImage (url) {
      uni.previewImage({
        current: 0,
        urls: [url]
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
.content {
  margin-top: 30rpx;
}
.item {
  display: flex;
  margin-top: 16rpx;
  padding: 20rpx;
  background-color: #ffffff;
  .goods-cover {
    width: 100rpx;
    flex: 0 0 100rpx;
    height: 100rpx;
    margin-right: 20rpx;
    border-radius: 12rpx;
  }
  .item-body {
    width: 100%;
    display: flex;
    justify-content: space-between;
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
.filter,
.sort {
  padding: 30rpx;
}
</style>