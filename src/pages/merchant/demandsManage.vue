<template>
  <view>
    <view class="title">
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
    <view class="order-item" v-for="item in demandsList" :key="item.id">
      <view class="item-header u-border-bottom">
        <view class="item-order-num u-line-1">需求编号 {{item.neNumber}}</view>
        <view class="item-order-time">提交时间 {{item.create_time}}</view>
      </view>
      <view class="item">
        <view class="item-left">
          <u-tag text="未接单" type="primary" size="mini" v-if="item.to_state === 0" />
          <u-tag text="已接单" type="warning" size="mini" v-else-if="item.to_state === 1" />
          <u-tag text="已拒绝" type="error" size="mini" v-else-if="item.to_state === 2" />
          <u-tag text="已完成" type="success" size="mini" v-else-if="item.to_state === 3" />
          <u-tag text="已取消" type="info" size="mini" v-else-if="item.to_state === 4" />
          <u-tag text="未知" type="info" size="mini" v-else />
          <view class="demand-text">需求 {{item.text}}</view>
          <view class="address">服务区域 {{item.address === '' ? '未填写' : item.address}}</view>
        </view>
        <view class="item-right">
          <view class="guide u-line-1">姓名称呼 {{item.name === '' ? '未填写' : item.name}}</view>
          <view class="guide u-line-1">联系号码 {{item.phone}}</view>
        </view>
      </view>
      <view class="item-footer">
        <view class="item-btn">
          <u-button
            size="mini"
            :custom-style="customStyle"
            :ripple="true"
            @click="showCongfirm(item.id, 1, '接单')"
            v-if="item.to_state === 0"
          >接单</u-button>
          <u-button
            size="mini"
            :custom-style="customStyle"
            :ripple="true"
            @click="showCongfirm(item.id, 2, '拒单')"
            v-if="item.to_state === 0"
          >拒单</u-button>
          <u-button
            size="mini"
            :custom-style="customStyle"
            :ripple="true"
            @click="showCongfirm(item.id, 4, '取消服务')"
            v-if="item.to_state === 1"
          >取消服务</u-button>
          <u-button
            size="mini"
            :custom-style="customStyle"
            :ripple="true"
            @click="showCongfirm(item.id, 3, '完成服务')"
            v-if="item.to_state === 1"
          >完成服务</u-button>
          <u-button
            size="mini"
            :custom-style="customStyle"
            :ripple="true"
            @click="showDemands(item.text)"
          >需求详情</u-button>
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
    <!-- 修改确认框 -->
    <u-modal
      v-model="confirmShow"
      :content="confirmContent"
      @confirm="submitState"
      show-cancel-button
      confirm-text="确定"
      confirm-color="#fd5123"
    ></u-modal>
    <!-- 需求详情框 -->
    <u-modal v-model="demandsShow" content=" " title="需求详情">
      <view class="detail">{{demandsDetail}}</view>
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
      loadStatus: 'loadmore',
      queryInfo: {
        pagenum: 1,
        pagesize: 10
      },
      stateList: [
        {
          name: '全部',
          state: -1
        },
        {
          name: '未接单',
          state: 0
        },
        {
          name: '已接单',
          state: 1
        },
        {
          name: '已拒绝',
          state: 2
        },
        {
          name: '已完成',
          state: '3,4'
        }
      ],
      currentIndex: 0,
      state: -1,
      demandsList: [],
      customStyle: {
        marginLeft: '20rpx',
      },
      demandsDetail: '',
      demandsShow: false,
      // 修改状态操作参数
      confirmShow: false,
      stateParams: {
        nid: 0,
        state: 0
      },
      confirmContent: ''
    }
  },
  onLoad () {
    this.getStorage()
    this.getDemandsList()
  },
  // 到底部
  onReachBottom () {
    if (this.demandsList.length < this.queryInfo.pagenum * 10) return this.loadStatus = 'nomore'
    this.queryInfo.pagenum++
    this.getDemandsList()
  },
  // 下拉刷新
  onPullDownRefresh () {
    this.queryInfo.pagenum = 1
    this.demandsList = []
    this.getDemandsList(() => {
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
    // 需求列表
    async getDemandsList (callBack) {
      const { data: res } = await this.$request({
        url: 'Service/needslist',
        data: Object.assign(
          {},
          {
            uid: this.storage.uid,
            token: this.storage.token,
            to_state: this.state
          },
          this.queryInfo
        )
      })
      this.demandsList = [...this.demandsList, ...res.data.data]
      if (this.demandsList.length < 10) {
        this.loadStatus = 'nomore'
      } else if (this.demandsList.length < res.data.total) {
        this.loadStatus = 'loadmore'
      } else {
        this.loadStatus = 'nomore'
      }
      callBack && callBack()
    },
    // 状态切换
    stateChange (e) {
      this.loadStatus = 'loading'
      this.state = this.stateList[e].state
      this.queryInfo.pagenum = 1
      this.demandsList = []
      this.getDemandsList()
    },
    // 修改状态
    showCongfirm (nid, state, content) {
      this.confirmShow = true
      this.stateParams.nid = nid
      this.stateParams.state = state
      this.confirmContent = '您确定' + content + '吗？'
    },
    async submitState () {
      const { data: res } = await this.$request({
        method: 'POST',
        url: 'Service/needStatus',
        data: {
          token: this.storage.token,
          uid: this.storage.uid,
          nid: this.stateParams.nid,
          state: this.stateParams.state
        }
      })
      uni.showToast({
        title: '操作成功',
        icon: 'none'
      })
      this.demandsList = []
      this.queryInfo.pagenum = 1
      this.getDemandsList()
    },
    showDemands (text) {
      this.demandsDetail = text
      this.demandsShow = true
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
.demand-text {
  padding-right: 50rpx;
  text-align: left;
  font-size: 20rpx;
  line-height: 40rpx;
  color: $u-content-color;
  width: 200rpx;
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
.address {
  padding-right: 50rpx;
  text-align: left;
  font-size: 20rpx;
  line-height: 40rpx;
  color: $u-content-color;
}
</style>