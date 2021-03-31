<template>
  <view class="page">
    <view class="news-cont">
      <view class="news-title">{{newsDetail.title}}</view>
      <view class="news-title-bar">
        <view class="author">{{newsDetail.author}}</view>
        <view class="datetime">{{newsDetail.createTime | formatDate}}</view>
        <view class="news-views"></view>
      </view>
      <view class="news-guide" style="display:none;"></view>
      <view class="news-content">
        <view v-html="newsCont"></view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      newsDetail: {},
      newsCont: ''
    }
  },
  onLoad (options) {
    this.getNewsDetail(options.id)
  },
  methods: {
    // 获取新闻详情
    async getNewsDetail (id) {
      const { data: res } = await this.$request({
        method: 'GET',
        url: 'information/articleDetails',
        data: {
          id: id
        }
      })
      this.newsDetail = res.data
      this.newsCont = res.data.content.replace(/<img/g, '<img style="max-width:100%;height:auto"')
      // console.log(res)
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  background: #ffffff;

  .news-cont {
    padding: 20rpx 24rpx;

    .news-title {
      font-size: 40rpx;
      line-height: 60rpx;
      margin: 0 0 22rpx;
    }

    .news-title-bar {
      height: 24rpx;
      line-height: 24rpx;
      color: #666666;
      clear: both;

      view {
        vertical-align: top;
        height: 24rpx;
      }

      .author {
        display: inline-block;
        padding-right: 24rpx;
      }

      .datetime {
        display: inline-block;
        color: #999999;
      }

      .news-views {
        float: right;
        news-icon {
          display: inline-block;
        }
      }
    }

    .news-content {
      padding-top: 30rpx;
      padding-bottom: 160rpx;
      line-height: 44rpx;

      image {
        display: block;
        max-width: 100%;
        margin: 20rpx auto;
      }
    }
  }
}
</style>
