<template>
  <view>
    <view class="title" v-if="goodsList.length === 0"></view>
    <view class="main">
      <view class="order-item" v-for="item in goodsList" :key="item.id">
        <view class="item-header u-border-bottom">
          <view class="item-title u-line-1">{{ item.name }}</view>
          <view class="info">
            <text class="num">
              浏览：
              <text>{{ item.numFW }}</text>
            </text>
            <text class="num">
              销量：
              <text>{{ item.numXL }}</text>
            </text>
          </view>
        </view>
        <view class="item" @click="goGoodDetail(item.id)">
          <image class="goods-cover" mode="aspectFill" :src="item.dbimg[0]" />
          <view class="item-body">
            <view class="guide u-line-2">{{ item.brief}}</view>
            <view class="fee u-line-2">
              ￥
              <text class="num">{{ item.price}}</text>
              <u-tag text="已上架" type="success" mode="plain" size="mini" v-if="item.static === 1" />
              <u-tag text="未通过" type="info" mode="plain" size="mini" v-else-if="item.static === 2" />
              <u-tag
                text="已下架"
                type="error"
                mode="plain"
                size="mini"
                v-else-if="item.static === 3"
              />
              <u-tag
                text="待审核"
                type="warning"
                mode="plain"
                size="mini"
                v-else-if="item.static === 0"
              />
              <u-tag text="未知" type="info" mode="plain" size="mini" v-else />
            </view>
          </view>
        </view>
        <view class="item-footer">
          <view class="item-btn">
            <u-button
              size="mini"
              :custom-style="customStyle"
              ripple
              @click="showDelete(item.id)"
            >删除服务</u-button>
            <u-button
              size="mini"
              :custom-style="customStyle"
              ripple
              @click="goEditGoods(item.id)"
            >编辑服务</u-button>
            <u-button
              size="mini"
              :custom-style="customStyle"
              ripple
              @click="showAgain(item.id)"
              v-if="item.static === 2"
            >重新申请上架</u-button>
            <u-button
              size="mini"
              :custom-style="customStyle"
              ripple
              @click="showConfirm(item.id, item.static)"
              v-if="item.static === 1 || item.static ===3"
            >{{item.static === 1 ?'下架服务': '上架服务'}}</u-button>
            <u-button
              size="mini"
              :custom-style="customStyle"
              ripple
              @click="goGoodDetail(item.id)"
            >查看详情</u-button>
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
        v-if="goodsList.length !== 0"
      ></u-loadmore>
    </view>
    <u-empty text="暂无服务" mode="order" v-if="goodsList.length === 0"></u-empty>
    <view class="goods-foot">
      <view class="btn-item add" @click="goAddGoods">
        <u-icon name="plus" color="#fd5123" size="28"></u-icon>
        <text>添加服务</text>
      </view>
    </view>
    <!-- 删除确认框 -->
    <u-modal
      v-model="deleteShow"
      content="您确定删除此服务？"
      @confirm="deleteGood"
      show-cancel-button
      confirm-text="删除"
      confirm-color="#fd5123"
    ></u-modal>
    <!-- 上下架确认框 -->
    <u-modal
      v-model="confirmShow"
      :content="confirmContent"
      @confirm="goodHandle"
      show-cancel-button
      confirm-text="确定"
      confirm-color="#fd5123"
    ></u-modal>
    <!-- 重新申请上架确认框 -->
    <u-modal
      v-model="againShow"
      content="您确定重新申请上架？"
      @confirm="againApply"
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
      gid: 0,
      goodsList: [],
      customStyle: {
        marginLeft: '20rpx',
      },
      deleteShow: false,
      confirmShow: false,
      againShow: false,
      confirmContent: '',
      pageNum: 1,
      loadStatus: 'nomore'
    }
  },
  onLoad () {
    this.getStorage()
    this.getGoodsList()
  },
  methods: {
    // 获取本地存储
    getStorage () {
      this.storage.token = uni.getStorageSync('token')
      this.storage.uid = uni.getStorageSync('uid')
      this.storage.info = uni.getStorageSync('info')
    },
    // 到底部
    onReachBottom () {
      if (this.goodsList.length < this.pageNum * 10) return this.loadStatus = 'nomore'
      this.pageNum++
      this.getGoodsList()
    },
    // 下拉刷新
    onPullDownRefresh () {
      this.pageNum = 1
      this.goodsList = []
      this.getGoodsList(() => {
        uni.stopPullDownRefresh()
      })
    },
    // 获取服务列表
    async getGoodsList (callBack) {
      const { data: res } = await this.$request({
        url: 'merchant/serviceProduct',
        data: {
          uid: this.storage.uid,
          id: this.storage.uid,
          token: this.storage.token,
          pageNum: this.pageNum
        }
      })
      this.goodsList = [...this.goodsList, ...res.data.data]
      if (this.goodsList.length < res.data.total) {
        this.loadStatus = 'loadmore'
      }
      callBack && callBack()
    },
    // 跳转服务详情
    goGoodDetail (val) {
      uni.navigateTo({
        url: '/pages/shops/goodDetail?id=' + val
      })
    },
    // 上下架
    showConfirm (id, state) {
      this.gid = id
      if (state === 1) { this.confirmContent = '您确定下架服务？' } else {
        this.confirmContent = '您确定上架服务？'
      }
      this.confirmShow = true
    },
    async goodHandle () {
      const { data: res } = await this.$request({
        method: 'POST',
        url: 'downProduct',
        data: {
          uid: this.storage.uid,
          token: this.storage.token,
          gid: this.gid
        }
      })
      this.goodsList = []
      this.getGoodsList()
    },
    // 重新申请上架
    showAgain (id) {
      this.gid = id
      this.againShow = true
    },
    async againApply () {
      const { data: res } = await this.$request({
        method: 'POST',
        url: 'reProduct',
        data: {
          uid: this.storage.uid,
          token: this.storage.token,
          gid: this.gid
        }
      })
      this.goodsList = []
      this.getGoodsList()
    },
    // 添加服务
    async goAddGoods () {
      const { data: res } = await this.$request({
        url: 'unCorporateName',
        data: {
          uid: this.storage.uid
        }
      })
      if (res.data) {
        uni.redirectTo({
          url: '/pages/merchant/addGoods'
        })
      } else {
        uni.showToast({
          title: '请先设置服务商名称',
          icon: 'none',
          success: uni.redirectTo({
            url: '/pages/merchant/shopManage'
          })
        })
      }
    },
    // 编辑服务
    goEditGoods (id) {
      uni.redirectTo({
        url: '/pages/merchant/editGoods?gid=' + id
      })
    },
    // 删除服务
    showDelete (id) {
      this.gid = id
      this.deleteShow = true
    },
    async deleteGood () {
      const { data: res } = await this.$request({
        url: 'merchant/delgoods',
        data: {
          uid: this.storage.uid,
          token: this.storage.token,
          gid: this.gid
        }
      })
      uni.showToast({
        title: '删除成功',
        icon: 'none'
      })
      this.pageNum = 1
      this.goodsList = []
      this.getGoodsList()
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
  margin-top: 30rpx;
}
.main {
  margin-bottom: 130rpx;
}
.item-header {
  display: flex;
  margin-bottom: 20rpx;
  .item-title {
    flex: 1;
    padding-right: 50rpx;
    padding-bottom: 20rpx;
    text-align: left;
    font-size: 28rpx;
    line-height: 40rpx;
    color: $u-content-color;
  }
  .info {
    padding-bottom: 20rpx;
    width: 300rpx;
    line-height: 40rpx;
    text-align: right;
    .num {
      font-size: 24rpx;
      color: #666666;
      padding-right: 16rpx;
      text {
        color: #fd5123;
      }
    }
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
    .guide {
      padding-right: 50rpx;
      text-align: left;
      font-size: 24rpx;
      line-height: 40rpx;
      color: $u-content-color;
    }
    .fee {
      text-align: right;
      padding-top: 16rpx;
      font-size: 24rpx;
      padding-bottom: 20rpx;
      text {
        padding-left: 30rpx;
        font-weight: 600;
      }
      .num {
        padding-left: 10rpx;
        font-weight: 600;
        font-size: 30rpx;
        color: #fd5123;
        margin-right: 30rpx;
      }
    }
  }
}
.item-footer {
  padding-top: 10rpx;
  display: flex;

  .item-btn {
    flex: 1;
    text-align: right;
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
