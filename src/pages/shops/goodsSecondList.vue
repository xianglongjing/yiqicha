<template>
  <view>
    <view class="header">
      <u-icon
        name="arrow-down"
        color="#fd5123"
        size="20"
        label="筛选"
        label-color="#fd5123"
        label-size="25"
        @click="filterChange()"
      ></u-icon>
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
        <image class="goods-cover" mode="aspectFill" :src="item.headimg" />
        <view class="item-body">
          <text class="title u-line-2">{{ item.name }}</text>
          <text class="guide u-line-2">{{ item.brief }}</text>
          <text class="guide u-line-2">{{ item.sp }}</text>
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
    <!-- 筛选弹窗 -->
    <u-popup v-model="filterShow" mode="bottom" length="30%" closeable border-radius="20">
      <view class="filter">
        <u-checkbox-group @change="checkboxGroupChange" width="50%" active-color="#fd5123">
          <u-checkbox
            v-model="item.checked"
            v-for="(item, index) in optionsList"
            :key="index"
            :name="item.id"
          >{{item.name}}</u-checkbox>
        </u-checkbox-group>
      </view>
    </u-popup>
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
      columnId: 23,
      goodsList: [],
      pageNum: 1,
      // 筛选
      filterShow: false,
      filterArray: [],
      optionsList: [],
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
    this.getOptionsList(options.id)
  },
  // 到底部
  onReachBottom () {
    if (this.goodsList.length < this.pageNum * 20) return this.loadStatus = 'nomore'
    this.pageNum++
    if (this.filterArray.length === 0) return this.getGoodsList()
    this.getGoodsList(this.filterArray)
  },
  methods: {
    // 获取服务列表
    async getGoodsList (id) {
      let params = {}
      if (typeof id === 'object') {
        params = {
          // fid: id,
          page: this.pageNum,
          order: this.sortValue,
          cid: id.join(',')
        }
      } else {
        params = {
          fid: this.columnId,
          page: this.pageNum,
          order: this.sortValue
        }
      }
      const { data: res } = await this.$request({
        method: 'GET',
        url: 'goods/goodlist',
        data: params
      })
      // console.log(res)
      this.goodsList = [...this.goodsList, ...res.data.list]
      if (this.goodsList.length < 20) return this.loadStatus = 'nomore'
      // console.log(this.goodsList)
    },
    // 筛选
    filterChange () {
      this.filterShow = true
    },
    // 监听筛选复选框
    checkboxGroupChange (e) {
      this.pageNum = 1
      this.filterArray = e
      this.goodsList = []
      this.getGoodsList(e)
    },
    // 获取筛选选项
    async getOptionsList (id) {
      const { data: res } = await this.$request({
        method: 'GET',
        url: 'goods/navlist',
        data: {
          fid: id
        }
      })
      this.optionsList = res.data.map((item) => { return Object.assign({}, item, { checked: true }) })
    },
    // 监听排序单选
    radioGroupChange (val) {
      this.sortValue = val
      this.pageNum = 1
      this.goodsList = []
      if (this.filterArray.length === 0) return this.getGoodsList(this.columnId)
      this.getGoodsList(this.filterArray)
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
.filter,
.sort {
  padding: 30rpx;
}
</style>
