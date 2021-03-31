<template>
  <view>
    <view class="title">
      <u-gap height="20" bg-color="#f8f8f8"></u-gap>
      <u-search
        input-align="center"
        :animation="true"
        placeholder="输入联系号码或用户名搜索"
        v-model="keyword"
        @search="goSearch"
        @custom="goSearch"
      ></u-search>
      <u-gap height="20" bg-color="#f8f8f8"></u-gap>
      <u-sticky>
        <u-subsection
          :list="stateList"
          :current="currentIndex"
          @change="stateChange"
          active-color="#fd5123"
        ></u-subsection>
      </u-sticky>
    </view>
    <u-gap height="10" bg-color="#f8f8f8"></u-gap>
    <view class="order-item" v-for="item in ordersList" :key="item.id">
      <view class="item-header u-border-bottom">
        <view class="item-order-num u-line-1">订单编号 {{item.orderNumber}}</view>
        <view class="item-order-time">下单时间 {{item.createTime}}</view>
      </view>
      <view class="item">
        <view class="item-left">
          <view class="guide">{{item.gName}}</view>
          <u-tag text="未接单" type="primary" size="mini" v-if="item.state === 1" />
          <u-tag text="已拒绝" type="error" size="mini" v-else-if="item.state === 2" />
          <u-tag text="已接单" type="warning" size="mini" v-else-if="item.state === 3" />
          <u-tag text="已完成" type="success" size="mini" v-else-if="item.state === 4" />
          <u-tag text="已取消" type="info" size="mini" v-else-if="item.state === 5" />
          <u-tag text="已评价" type="info" size="mini" v-else-if="item.state === 6" />
          <u-tag
            text="取消中"
            type="error"
            size="mini"
            v-else-if="item.state === 7 || item.state === 8"
          />
          <u-tag text="未知" type="info" size="mini" v-else />
        </view>
        <view class="item-right">
          <view class="guide u-line-1">用户名 {{item.uName}}</view>
          <view class="guide u-line-1">联系号码 {{item.uPhone}}</view>
        </view>
      </view>
      <view class="item-footer">
        <view class="item-btn">
          <u-button
            size="mini"
            :custom-style="customStyle"
            :ripple="true"
            @click="showCongfirm(item.id, 3, '接单')"
            v-if="item.state === 1"
          >接单</u-button>
          <u-button
            size="mini"
            :custom-style="customStyle"
            :ripple="true"
            @click="showCongfirm(item.id, 2, '拒单')"
            v-if="item.state === 1"
          >拒单</u-button>
          <u-button
            size="mini"
            :custom-style="customStyle"
            :ripple="true"
            @click="showCongfirm(item.id, 4, '完成服务')"
            v-if="item.state === 3"
          >完成服务</u-button>
          <u-button
            size="mini"
            :custom-style="customStyle"
            :ripple="true"
            @click="showCongfirm(item.id, 7, '取消服务')"
            v-if="item.state === 3 || item.state === 8"
          >{{item.state === 8 ? '同意取消' : '取消服务'}}</u-button>
          <u-button
            size="mini"
            :custom-style="customStyle"
            :ripple="true"
            @click="goOrderDetail(item.id)"
          >查看订单</u-button>
        </view>
      </view>
    </view>
    <u-loadmore
      color="#999999"
      font-size="24"
      margin-bottom="50"
      margin-top="50"
      bg-color="rgb(248, 248, 248)"
      :status="loadStatus"
    ></u-loadmore>
    <u-modal
      v-model="confirmShow"
      :content="confirmContent"
      @confirm="submitState"
      show-cancel-button
      confirm-text="确定"
      confirm-color="#fd5123"
    ></u-modal>
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
      loadStatus: 'loadmore',
      queryInfo: {
        query: '',
        pagenum: 1,
        pagesize: 10
      },
      keyword: '',
      stateList: [
        {
          name: '全部',
          state: -1
        },
        {
          name: '未接单',
          state: 1
        },
        {
          name: '已接单',
          state: '3,7'
        },
        {
          name: '已拒绝',
          state: 2
        },
        {
          name: '已完成',
          state: '4,5,6'
        }
      ],
      currentIndex: 0,
      state: -1,
      ordersList: [],
      customStyle: {
        marginLeft: '20rpx',
      },
      // 修改状态操作参数
      confirmShow: false,
      stateParams: {
        oid: 0,
        state: 0
      },
      confirmContent: ''
    }
  },
  onLoad () {
    this.getStorage()
  },
  onShow () {
    this.getOrdersList()
  },
  // 到底部
  onReachBottom () {
    if (this.ordersList.length < this.queryInfo.pagenum * 10) return this.loadStatus = 'nomore'
    this.queryInfo.pagenum++
    this.getOrdersList()
  },
  // 下拉刷新
  onPullDownRefresh () {
    this.queryInfo.pagenum = 1
    this.queryInfo.query = ''
    this.ordersList = []
    this.getOrdersList(() => {
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
    // 订单列表
    async getOrdersList (callBack) {
      const { data: res } = await this.$request({
        url: 'Service/myService',
        data: Object.assign(
          {},
          {
            uid: this.storage.uid,
            token: this.storage.token,
            state: this.state
          },
          this.queryInfo
        )
      })
      this.ordersList = [...this.ordersList, ...res.data.data]
      if (this.ordersList.length < 10) {
        this.loadStatus = 'nomore'
      } else if (this.ordersList.length < res.data.total) {
        this.loadStatus = 'loadmore'
      } else {
        this.loadStatus = 'nomore'
      }
      callBack && callBack()
    },
    // 搜索
    goSearch () {
      this.queryInfo.query = this.keyword
      this.queryInfo.pagenum = 1
      this.ordersList = []
      this.getOrdersList()
      this.queryInfo.query = ''
      this.keyword = ''
    },
    goOrderDetail (val) {
      uni.navigateTo({
        url: '/pages/orders/orderDetail?oid=' + val
      })
    },
    // 状态切换
    stateChange (e) {
      this.loadStatus = 'loading'
      this.state = this.stateList[e].state
      this.queryInfo.query = ''
      this.queryInfo.pagenum = 1
      this.ordersList = []
      this.getOrdersList()
    },
    // 修改状态
    showCongfirm (oid, state, content) {
      this.confirmShow = true
      this.stateParams.oid = oid
      this.stateParams.state = state
      this.confirmContent = '您确定' + content + '吗？'
    },
    async submitState () {
      const { data: res } = await this.$request({
        method: 'POST',
        url: 'Service/orderStatus',
        data: {
          token: this.storage.token,
          uid: this.storage.uid,
          oid: this.stateParams.oid,
          state: this.stateParams.state
        }
      })
      uni.showToast({
        title: '操作成功',
        icon: 'none'
      })
      this.ordersList = []
      this.queryInfo.query = ''
      this.queryInfo.pagenum = 1
      this.getOrdersList()
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
  .item-order-time {
    flex: 1;
    font-size: 20rpx;
    padding-bottom: 20rpx;
    line-height: 40rpx;
    text-align: right;
  }
}
.item {
  .guide {
    padding-right: 50rpx;
    text-align: left;
    font-size: 20rpx;
    line-height: 40rpx;
    color: $u-content-color;
  }
  display: flex;
  justify-content: space-between;
}
.item-footer {
  padding-top: 10rpx;
  display: flex;

  .item-btn {
    flex: 1;
    text-align: right;
  }
}
</style>
