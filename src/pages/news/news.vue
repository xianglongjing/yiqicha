<template>
  <view class="page">
    <view class="search-box">
      <u-search
        input-align="center"
        :animation="true"
        placeholder="请输入关键词"
        v-model="keyword"
        @search="goSearch"
        @custom="goSearch"
      ></u-search>
    </view>
    <u-sticky>
      <view class="tab-box">
        <u-tabs
          :list="menuList"
          :is-scroll="true"
          :current="currentMenuIndex"
          @change="menuChange"
          bar-width="50"
          active-color="#fd5123"
        ></u-tabs>
      </view>
    </u-sticky>

    <view class="page-news">
      <view class="news-items">
        <view class="news-list">
          <!--                    新闻卡片-->
          <view
            class="news-item"
            v-for="item in newsList"
            :key="item.id"
            @click="goNewsDetail(item.id)"
          >
            <view class="content">
              <view class="title">{{item.title}}</view>
              <view class="cont">{{item.guide}}</view>
            </view>
            <view class="cover">
              <view class="img">
                <image :src="item.img" mode="aspectFill" />
              </view>
            </view>
            <view class="item-footer">
              <view class="f-left">
                <view class="author">{{item.author}}</view>
                <view class="datetime">{{item.createTime | formatDate}}</view>
              </view>
              <view class="f-right">
                <!-- 点赞 -->
                <!-- <view>
                  <u-icon name="thumb-up" color="#b9b9b9" size="28"></u-icon>
                  <view>{{item.starNum}}</view>
                </view>-->
                <!-- <view>
                  <u-icon name="chat" color="#b9b9b9" size="28"></u-icon>
                  <view>{{item.shareNum}}</view>
                </view>-->
                <view>
                  <u-icon name="eye" color="#b9b9b9" size="28"></u-icon>
                  <view>{{item.ctr}}</view>
                </view>
              </view>
            </view>
          </view>
          <u-loadmore
            color="#999999"
            font-size="24"
            margin-bottom="50"
            margin-top="50"
            bg-color="rgb(255, 255, 255)"
            :status="loadStatus"
            @loadmore="getNewsList"
            v-if="!emptyShow"
          ></u-loadmore>
          <!--                    新闻卡片-->
        </view>
      </view>
    </view>
    <u-empty :show="emptyShow" mode="list" margin-top="160" text="暂无资讯"></u-empty>
  </view>
</template>

<script>
export default {
  data () {
    return {
      keyword: '',
      // 导航菜单
      currentMenuIndex: 0,
      currentMenuId: 39,
      menuList: [],
      // 资讯列表
      newsList: [],
      pageNum: 1,
      loadStatus: 'nomore',
      emptyShow: false
    }
  },
  onLoad () {
    this.getMenuList()
  },
  // 到底部
  onReachBottom () {
    if (this.newsList.length < this.pageNum * 10) return this.loadStatus = 'nomore'
    this.pageNum++
    this.getNewsList()
  },
  // 下拉刷新
  onPullDownRefresh () {
    this.pageNum = 1
    this.newsList = []
    this.getNewsList(() => {
      uni.stopPullDownRefresh()
    })
  },
  methods: {
    // 切换菜单TAB
    menuChange (index) {
      this.loadStatus = 'loading'
      this.currentMenuIndex = index
      this.currentMenuId = this.menuList[index].id
      this.newsList = []
      this.pageNum = 1
      this.getNewsList()
    },
    // 获取菜单
    async getMenuList () {
      const { data: res } = await this.$request({
        method: 'GET',
        url: 'information/nav'
      })
      if (res.data === 0) return this.emptyShow = true
      this.menuList = res.data
      this.currentMenuId = res.data[0].id
      this.getNewsList()
    },
    // 获取新闻列表
    async getNewsList (callBack) {
      const { data: res } = await this.$request({
        method: 'GET',
        url: 'information/infotype',
        data: {
          id: this.currentMenuId,
          pageNum: this.pageNum
        }
      })
      this.newsList = [...this.newsList, ...res.data.list]
      if (this.newsList.length < res.data.total) {
        this.loadStatus = 'loadmore'
      }
      callBack && callBack()
    },
    // 点击跳转新闻详情页
    goNewsDetail (id) {
      uni.navigateTo({
        url: '/pages/news/newsDetail?id=' + id
      })
    },
    // 搜索
    goSearch () {
      if (this.keyword === '') return uni.showToast({
        title: '请输入关键词再搜索',
        icon: 'none',
        duration: 2000
      })
      uni.navigateTo({
        url: '/pages/index/search?query=' + this.keyword
      })
      this.keyword = ''
    }
  }
}
</script>
<style lang="scss" scoped>
.page {
  background: #ffffff;
}

.search-box {
  background-color: #ffffff;
  color: #333333;
  padding: 10rpx 40rpx;
}
.f-left {
  float: left;
}

.f-right {
  float: right;
}
.tab-box {
  padding-bottom: 10rpx;
}
.news-items {
  position: relative;
  height: 100%;
  background: #f8f8f8;
  /*下拉刷新回调的提示*/
  .download-tip {
    display: none;
    z-index: 99;
    position: absolute;
    top: -34px;
    left: 0;
    width: 100%;
    height: 34px;
    line-height: 34px;
    font-size: 14px;
    text-align: center;
    background-color: rgba(254, 43, 14, 0.7);
    color: white;
    -webkit-transition: top 300ms;
    transition: top 300ms;
  }

  .news-item {
    position: relative;
    padding: 28rpx;
    background: #ffffff;
    margin-bottom: 14rpx;
    box-shadow: 0 4rpx 6rpx 0 #ededed;

    .content {
      padding-right: 280rpx;

      .title {
        font-size: 34rpx;
        line-height: 45rpx;
        height: 92rpx;
        overflow: hidden;
        margin-bottom: 8rpx;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .cont {
        color: #6a6a6a;
        line-height: 38rpx;
        height: 70rpx;
        margin-bottom: 14rpx;
        padding-right: 28rpx;
        overflow: hidden;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }

    .cover {
      position: absolute;
      right: 28rpx;
      top: 28rpx;
      width: 260rpx;
      height: 168rpx;

      .img {
        width: 260rpx;
        height: 168rpx;
        image {
          height: 100%;
          width: 100%;
        }
      }
    }

    .item-footer {
      margin-top: 20rpx;
      clear: both;
      height: 28rpx;
      line-height: 28rpx;

      .f-left {
        view {
          display: inline-block;
          vertical-align: middle;
          color: #b9b9b9;
          font-size: 24rpx;
          margin-right: 20rpx;
        }
      }
      .f-right {
        view,
        u-icon {
          display: inline-block;
          vertical-align: middle;
          color: #b9b9b9;
          font-size: 24rpx;
          margin-left: 8rpx;
        }
        .u-icon {
          margin-left: 16rpx;
        }
      }
    }
  }
}
</style>
