<template>
  <view>
    <view class="search">
      <u-search shape="square" :show-action="false" placeholder="请输入城市名或者首字母查询" bg-color="#ffffff"></u-search>
    </view>
    <view class="now">
      <view class="nowsee u-border-bottom u-margin-bottom-20">
        <view>你正在看：<text>临沂</text></view>
        <view class="change-area">
          切换
          <text></text>
        </view>
      </view>
      <view class="nowposi">
        <text class="city-title">当前定位城市</text>
        <u-button :custom-style="customStyle">临沂</u-button>
      </view>
      <view class="hotcity">
        <text class="city-title">热门城市</text>
        <view class="city-con">
          <u-button :custom-style="customStyle">全国</u-button>
          <u-button :custom-style="customStyle">北京</u-button>
          <u-button :custom-style="customStyle">深圳</u-button>
          <u-button :custom-style="customStyle">上海</u-button>
        </view>
        <view class="city-con">
          <u-button :custom-style="customStyle">广州</u-button>
          <u-button :custom-style="customStyle">重庆</u-button>
          <u-button :custom-style="customStyle">成都</u-button>
        </view>
      </view>
    </view>
    <view class="hotcity">

    </view>
    <u-index-list :scrollTop="scrollTop">
      <view v-for="(item, index) in indexList" :key="index">
        <u-index-anchor :index="item" />
        <view class="list-cell">
          12
        </view>
        <view class="list-cell">
          列表2
        </view>
        <view class="list-cell">
          列表3
        </view>
      </view>
    </u-index-list>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        customStyle:{
          width:'120rpx',
          height:'60rpx',
          margin:'20rpx'
        },
        scrollTop: 0,
        indexList: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U",
          "V", "W", "X", "Y", "Z"
        ]
      }
    },
    onPageScroll(e) {
      this.scrollTop = e.scrollTop;
    }
  }
</script>
<style scoped>
  page{
    background: #F4F4F4;
  }
</style>
<style lang="scss" scoped>
  .search {
    margin-bottom: 20rpx;
    padding:20rpx 0 0 60rpx;
    text-align: center;
    .u-search{
      color:darkgrey;
      width:90%;
    }
  }
  .now{
    padding:20rpx 40rpx;
    background: white;
    .city-title{
      font-size: 25rpx;
    }
    .nowsee{
      padding-bottom: 20rpx;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .change-area{
        color:#D96510;
      }
    }
    .city-con{
      display: flex;
      flex-direction: row;

    }
  }

  .list-cell {
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding: 10px 24rpx;
    overflow: hidden;
    color: #323233;
    font-size: 14px;
    line-height: 24px;
    background-color: #fff;
  }
</style>