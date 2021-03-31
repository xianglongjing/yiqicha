<template>
  <view>
    <view class="header">
      <u-icon
        name="arrow-down"
        color="#fd5123"
        size="20"
        label="排序"
        label-color="#fd5123"
        label-size="25"
        @click="sortChange()"
      ></u-icon>
    </view>
    <view class="content">
      <view class="item" v-for="item in goodsList" :key="item.id" @click="goGoodDetail(item.id)">
        <view class="u-padding-bottom-20 u-border-bottom u-flex">
          <view class="goods-cover">
            <image mode="aspectFill" :src="item.headimg" />
          </view>
          <view class="item-body">
            <view class="title u-line-1">{{ item.name }}</view>
            <view class="guide u-line-2">{{ item.brief }}</view>
            <view class="goods-pas">
              <view class="pas-price"><text>￥</text> {{ item.price }}</view>
              <view class="pas-sp u-line-1">{{ item.sp }}</view>
            </view>

          </view>
        </view>
      </view>
    </view>
    <u-loadmore color="#999999"
                font-size="24"
                margin-bottom="50"
                margin-top="50"
                bg-color="rgb(248, 248, 248)" :status="loadStatus"></u-loadmore>
    <!-- 排序弹窗 -->
    <u-popup v-model="sortShow" mode="bottom" length="30%" closeable border-radius="20">
      <view class="sort">
        <u-radio-group v-model="sortValue" @change="radioGroupChange" width="50%">
          <u-radio
            v-for="(item, index) in sortList"
            :key="index"
            :name="item.id"
            :disabled="item.disabled"
            shape="circle"
            active-color="#fd5123"
          >{{item.name}}</u-radio>
        </u-radio-group>
      </view>
    </u-popup>
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
      // 栏目ID
      columnId: 24,
      goodsList: [],
      pageNum: 1,
      // 排序
      sortShow: false,
      sortValue: 1,
      sortList: [
        {
          name: '正序',
          id: 1
        },
        {
          name: '访问量',
          id: 2
        },
        {
          name: '资讯量',
          id: 3
        },
        {
          name: '销售量',
          id: 4
        },
        {
          name: '速度',
          id: 5
        },
        {
          name: '态度',
          id: 6
        },
        {
          name: '质量',
          id: 7
        },
      ],
      loadStatus: 'loadmore'
    }
  },
  onLoad (options) {
    this.columnId = options.id
    this.getGoodsList(options.id)
  },
  // 到底部
  onReachBottom () {
    if (this.goodsList.length < this.pageNum * 20) return this.loadStatus = 'nomore'
    this.pageNum++
    this.getGoodsList(this.columnId)
  },
  methods: {
    // 获取服务列表
    async getGoodsList (id) {
      const { data: res } = await this.$request({
        method: 'GET',
        url: 'goods/goodlist',
        data: {
          page: this.pageNum,
          order: this.sortValue,
          cid: id
        }
      })
      // console.log(res)
      this.goodsList = [...this.goodsList, ...res.data.list]
      if (this.goodsList.length < 20) return this.loadStatus = 'nomore'
      // console.log(this.goodsList)
    },
    // 监听排序单选
    radioGroupChange (val) {
      this.sortValue = val
      this.pageNum = 1
      this.goodsList = []
      this.getGoodsList(this.columnId)
    },
    sortChange () {
      this.sortShow = true
    },
    // 跳转到服务详情
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
.header {
  position: fixed;
  z-index: 2;
  top: 0;
  height: 70rpx;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: $main-color;
  background-color: #f8f8f8;
}
.content {
  margin-top: 80rpx;
  background-color: #ffffff;
}
.item {
  background-color: #ffffff;
  padding: 20rpx 20rpx 0;
  .u-padding-bottom-20{
    padding-bottom: 20rpx;
  }
  .goods-cover {
    width: 240rpx;
    padding-right: 20rpx;
    image{
      width: 220rpx;
      height: 170rpx;
      border-radius: 12rpx;
    }
  }
  .item-body {
    flex: 1;
    overflow: hidden;
    .title {
      text-align: left;
      font-size: 32rpx;
      line-height: 34rpx;
      color: $u-content-color;
      font-weight: 600;
      margin-top: 0rpx;
    }
    .guide {
      margin-top: 18rpx;
      text-align: left;
      font-size: 26rpx;
      line-height: 34rpx;
      height: 68rpx;
      color: #777777;
    }
    .goods-pas{
      display: flex;
      margin-top: 15rpx;
      line-height: 36rpx;
      height: 36rpx;
      .pas-price {
        width: 200rpx;
        font-size: 34rpx;
        line-height: 36rpx;
        color: #fd5123;
        font-weight: 500;
        text{
          font-size: 24rpx;
          font-weight: 400;
        }
      }
      .pas-sp{
        flex: 1;
        font-size: 26rpx;
        padding-left: 30rpx;
        text-align: right;
        height: 36rpx;
        color: #999999;
      }
    }
  }
}
.sort {
  padding: 30rpx;
}
</style>
