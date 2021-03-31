<template>
  <view>
    <view class="title" v-if="orderList.length === 0"></view>
    <view class="order-item" v-for="item in orderList" :key="item.id">
      <view class="item-header">
        <view class="sp-name">
          <u-icon margin-left="10" label=" " name="grid"></u-icon>
          {{item.goods.sp}}
        </view>
        <view class="order-state u-line-1">{{item.stats[0].operate || ''}}</view>
      </view>
      <view class="item" @click="goOrderDetail(item.id)">
        <image class="goods-cover" mode="aspectFill" :src="item.headimg" />
        <view class="item-body">
          <text class="item-title u-line-2">{{ item.gName }}</text>
          <text class="datetime u-line-1">{{item.createTime | formatDatetime}}</text>
        </view>
      </view>
      <view class="item-btn">
        <u-button
          size="mini"
          :custom-style="customStyle"
          :ripple="true"
          @click="showCancel(item.id, 'before')"
          v-if="item.state === 1"
          type="error"
          plain
        >取消服务</u-button>
        <u-button
          size="mini"
          :custom-style="customStyle"
          :ripple="true"
          @click="goOrderEval(item.id)"
          v-if="item.state === 4"
        >服务评价</u-button>
        <u-button
          size="mini"
          :custom-style="customStyle"
          :ripple="true"
          @click="showCancel(item.id, 'after')"
          v-if="item.state === 3 || item.state === 7"
          type="error"
          plain
        >{{item.state === 7 ? '同意取消' : '申请取消'}}</u-button>
        <u-button
          size="mini"
          :custom-style="customStyle"
          :ripple="true"
          @click="goOrderDetail(item.id)"
        >查看详情</u-button>
      </view>
    </view>
    <u-empty text="暂无订单" mode="order" v-if="orderList.length === 0"></u-empty>
    <u-modal
      title="您确定取消？"
      v-model="cancelShow"
      @confirm="submitCancel"
      show-cancel-button
      confirm-text="确定"
      confirm-color="#fd5123"
    >
      <u-gap height="20" bg-color="#ffffff"></u-gap>
      <u-alert-tips
        type="warning"
        title="操作提示"
        v-if="warningShow"
        description="取消服务操作前，请与商家协商一致。双方均同意取消，服务才能取消成功。"
      ></u-alert-tips>
      <u-gap height="20" bg-color="#ffffff"></u-gap>
    </u-modal>
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
      orderList: [],
      customStyle: {
        marginLeft: '20rpx',
      },
      cancelShow: false,
      oid: 0,
      warningShow: false
    }
  },
  onLoad (options) {
    this.state = options.state
    this.getStorage()
  },
  onShow () {
    this.getOrderList()
  },
  // 下拉刷新
  onPullDownRefresh () {
    this.orderList = []
    this.getOrderList(() => {
      uni.stopPullDownRefresh()
    })
  },
  methods: {
    // 获取本地存储
    getStorage () {
      this.storage.token = uni.getStorageSync('token')
      this.storage.uid = uni.getStorageSync('uid')
      this.storage.info = uni.getStorageSync('info')
    },
    async getOrderList (callBack) {
      const { data: res } = await this.$request({
        url: 'myhome/myorder',
        data: {
          uid: this.storage.uid,
          token: this.storage.token,
          state: this.state
        }
      })
      this.orderList = res.data.info
      callBack && callBack()
    },
    goOrderDetail (val) {
      uni.navigateTo({
        url: '/pages/orders/orderDetail?oid=' + val
      })
    },
    goOrderEval (val) {
      uni.navigateTo({
        url: '/pages/orders/evaluation?oid=' + val
      })
    },
    showCancel (id, type) {
      this.oid = id
      if (type === 'before') {
        this.warningShow = false
      } else if (type === 'after') {
        this.warningShow = true
      }
      this.cancelShow = true
    },
    async submitCancel () {
      let state = 0
      if (this.warningShow) { state = 8 } else { state = 5 }
      const { data: res } = await this.$request({
        method: 'POST',
        url: 'Service/orderStatus',
        data: {
          token: this.storage.token,
          uid: this.storage.uid,
          oid: this.oid,
          state: state
        }
      })
      uni.showToast({
        title: '操作成功',
        icon: 'none'
      })
      this.getOrderList()
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
.title {
  height: 300rpx;
}
.order-item {
  background: #ffffff;
  padding: 20rpx;
  margin-top: 16rpx;
}
.item-header {
  display: flex;
  padding-bottom: 20rpx;
  .sp-name {
    flex: 2;
    color: #666666;
  }
  .order-state {
    flex: 1;
    text-align: right;
    color: #fd5123;
  }
}
.item {
  display: flex;

  .goods-cover {
    width: 140rpx;
    flex: 0 0 140rpx;
    height: 140rpx;
    margin-right: 20rpx;
    border-radius: 12rpx;
  }
  .item-body {
    flex: 1;
    .item-title {
      padding-right: 50rpx;
      text-align: left;
      font-size: 28rpx;
      line-height: 40rpx;
      height: 80rpx;
      color: $u-content-color;
      margin-top: 10rpx;
    }
    .datetime {
      font-size: 24rpx;
      margin-top: 20rpx;
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
.item-btn {
  padding-top: 10rpx;
  text-align: right;
}
</style>
