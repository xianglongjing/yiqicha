<template>
  <view>
    <u-gap height="10" bg-color="#f8f8f8"></u-gap>
    <view class="order-item" v-for="item in noticesList" :key="item.id">
      <view class="item-header u-border-bottom">
        <view class="item-order-num u-line-1">消息时间 {{item.createTime | formatDatetime}}</view>
      </view>
      <view class="item">
        <view class="guide u-line-1">标题 {{item.title}}</view>
        <view class="guide u-line-1 demand-text">消息 {{item.content}}</view>
      </view>
      <view class="item-footer">
        <u-button
          size="mini"
          :custom-style="customStyle"
          :ripple="true"
          @click="showDetail(item.content)"
        >消息详情</u-button>
      </view>
    </view>
    <!-- 消息详情框 -->
    <u-modal v-model="detailShow" content=" " title="消息详情">
      <view class="detail">{{noticesDetail}}</view>
    </u-modal>
    <u-empty text="暂无消息" mode="message" :show="emptyShow"></u-empty>
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
      emptyShow: false,
      detailShow: false,
      noticesDetail: '',
      noticesList: []
    }
  },
  onLoad () {
    this.getStorage()
    this.getNotices()
  },
  methods: {
    // 获取本地存储
    getStorage () {
      this.storage.token = uni.getStorageSync('token')
      this.storage.uid = uni.getStorageSync('uid')
      this.storage.info = uni.getStorageSync('info')
    },
    async getNotices () {
      const { data: res } = await this.$request({
        method: 'POST',
        url: 'myhome/getmsg',
        data: {
          uid: this.storage.uid,
          token: this.storage.token
        }
      })
      this.noticesList = res.data
      if (this.noticesList.length === 0) { this.emptyShow = true }
    },
    showDetail (content) {
      this.noticesDetail = content
      this.detailShow = true
    }
  }}
</script>

<style lang="scss">
page {
  background-color: #f8f8f8;
}
</style>
<style lang="scss" scoped>
.order-item {
  background: #ffffff;
  padding: 20rpx;
  margin-top: 16rpx;
}
.item-header {
  display: flex;
  margin-bottom: 20rpx;
  color: $u-main-color;
  .item-order-num {
    flex: 1;
    padding-right: 50rpx;
    padding-bottom: 20rpx;
    text-align: left;
    font-size: 20rpx;
    line-height: 40rpx;
  }
}
.item {
  .guide {
    padding-right: 50rpx;
    text-align: left;
    font-size: 25rpx;
    line-height: 40rpx;
    color: $u-content-color;
  }
  justify-content: space-between;
}
.item-footer {
  padding-top: 10rpx;
  text-align: right;
}
.demand-text {
  padding-right: 50rpx;
  text-align: left;
  font-size: 25rpx;
  line-height: 40rpx;
  color: $u-content-color;
  width: 600rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.detail {
  padding: 50rpx;
  height: 100%;
  word-wrap: break-word;
  word-break: normal;
}
</style>