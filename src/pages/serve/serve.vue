<template>
  <view class="page">
    <view class="u-wrap">
      <view class="u-search-box">
        <u-search
                input-align="center"
                :animation="true"
                :action-style="search_btn"
                placeholder="请输入关键词"
                v-model="keyword"
                @search="goSearch"
                @custom="goSearch"
        ></u-search>
      </view>


    <view class="u-menu-wrap">
      <scroll-view scroll-y scroll-with-animation class="u-tab-view menu-scroll-view u-border-right" :scroll-top="scrollTop">
        <view v-for="(item,index) in serveList" :key="index" class="u-tab-item" :class="[current==index ? 'u-tab-item-active' : '']"
              :data-current="index" @tap.stop="swichMenu(index)">
          <text class="u-line-1">{{item.name}}</text>
        </view>
      </scroll-view>
      <block v-for="(item,index) in serveList" :key="index">
        <scroll-view scroll-y class="right-box" v-if="current==index">
          <view class="page-view">
            <view class="ad-banner">
              <image
                      class="full"
                      mode="widthFix"
                      :src="item.icon_img"
              />
            </view>
            <view class="class-item" v-for="(item1, index1) in item.child" :key="index1">
              <view class="item-title">
                <text>{{item1.name}}</text>
              </view>
              <view class="item-container">
                <view v-for="(item2, index2) in item1.child" :key="index2"  @click="go('index/search?query='+item2.name)">
                  <view v-if="item2.icon_img" class="thumb-box-img">
                    <view class="btn-icon">
                      <image
                              class="full"
                              mode="aspectFit"
                              :src="item2.icon_img"
                      />
                    </view>
                    <view class="item-menu-name">{{item2.name}}</view>
                  </view>
                  <view  v-if="item2.icon_img===null" class="thumb-box">
                    <view class="item-menu-name">{{item2.name}}</view>
                  </view>
                </view>
              </view>
            </view>
            <view class="sp-item">
              <view class="item-title">
                <text>热门服务商</text>
              </view>
              <view class="sp-list u-border-bottom" v-for="(item,ink) in hotSpList" :key="ink" @click="go('shops/shopHome?id='+item.uid)">
                <view class="sp-info">
                  <view class="sp-icon">
                    <image :src="'https://yiqiwang360.com/'+item.avatar" mode="aspectFill"></image>
                  </view>
                  <view class="sp-name">{{item.abbreviation}}</view>
                  <view class="sp-city u-line-1">{{item.add}}</view>
                </view>
                <view class="sp-serve">
                  <view class="serve-info">服务客户<text>{{item.service}}家</text></view>
                  <view class="serve-info">成交额<text>{{item.turnover}}万元</text></view>
                </view>
                <view class="sp-goods">
                  <view class="g-cover">
                    <image :src="'https://yiqiwang360.com/uploads/'+item.goods.dbimg" mode="aspectFill"></image>
                  </view>
                  <view class="g-info">
                    <view class="g-name u-line-2" v-for="item1 in goodsList"
                          :key="item1.id">{{item1.name}}</view>
                    <view class="g-body">
                      <view class="g-price">￥{{item.goods.price}}</view>
                      <view class="g-text">
                        <text>成交 {{item.goods.numXL}}</text>
                        <text>评分 {{item.goods.gradeZL}}</text>
                      </view>
                    </view>
                  </view>
                </view>
              </view>
            </view>
          </view>
        </scroll-view>
      </block>
    </view>


    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      //搜索
      keyword: '',
      search_btn: {
        color: '#333333'
      },
      goodsList: [],
      serveList: [],
      hotSpList: [],
      scrollTop: 0, //tab标题的滚动条位置
      current: 0, // 预设当前项的值
      menuHeight: 0, // 左边菜单的高度
      menuItemHeight: 0, // 左边菜单item的高度
    }
  },
  onLoad (options) {
    this.getServeMenu()
    this.hotSP(1)
    this.getGoodsList()

  },
  methods: {
    // 服务商详情
    async getGoodsList () {
      const { data: res } = await this.$request({
        url: 'merchant/serviceProduct',
        data: {
          // 普通用户和服务商区分，uid需要为0
          uid: 0,
          pageNum: this.goodsNum
        }
      })
      this.goodsList = [...this.goodsList, ...res.data.data]
      if (this.goodsList.length < res.data.total) {
        this.goodsLoadStatus = 'loadmore'
      }
    },
    async getServeMenu () {
      const { data: res } = await this.$request({
        method: 'GET',
        url: 'goods/navlist'
      })
      // console.log(res)
      this.serveList = res.data.list
    },
    async hotSP (id) {
      console.log(id)
      const { data: res } = await this.$request({
        method: 'GET',
        url: 'column?id='+id
      })
      console.log(res.data.length)
     let SPdata = []
      for (let i=0;i<res.data.length;i++){
        if (res.data[i]['goods']){
          console.log(res.data[i])
          SPdata=SPdata.concat(res.data[i])
        }
      }
      this.hotSpList=SPdata

    },
    // 点击跳转
    go (path) {
      uni.navigateTo(
        { url: '/pages/' + path }
      )
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
    },
    // 点击左边的栏目切换
    async swichMenu(index) {
      if(index == this.current) return ;
      this.current = index;
      // 如果为0，意味着尚未初始化
      if(this.menuHeight == 0 || this.menuItemHeight == 0) {
        await this.getElRect('menu-scroll-view', 'menuHeight');
        await this.getElRect('u-tab-item', 'menuItemHeight');
      }
      // 将菜单菜单活动item垂直居中
      this.scrollTop = index * this.menuItemHeight + this.menuItemHeight / 2 - this.menuHeight / 2;
      //获取热门服务商
      this.hotSP(this.serveList[index]['id'])
    },
    // 获取一个目标元素的高度
    getElRect(elClass, dataVal) {
      new Promise((resolve, reject) => {
        const query = uni.createSelectorQuery().in(this);
        query.select('.' + elClass).fields({size: true},res => {
          // 如果节点尚未生成，res值为null，循环调用执行
          if(!res) {
            setTimeout(() => {
              this.getElRect(elClass);
            }, 10);
            return ;
          }
          this[dataVal] = res.height;
        }).exec();
      })
    }

  }
}
</script>

<style lang="scss" scoped>
.page {
  background: #ffffff;
  height: calc(100vh);
  /* #ifdef H5 */
  height: calc(100vh - var(--window-top));
  /* #endif */
  display: flex;
  flex-direction: column;
}
.search-box {
  background-color: #ffffff;
  color: #333333;
  padding: 20rpx 40rpx;
  padding-top: 10rpx;
}
.ad-banner {
  background: #ffffff;
  padding: 10rpx 20rpx;
  image{
    width: 100%;
  }
}
.ser-items {
  .ser-item {
    .ser-banner {
      padding: 10rpx 30rpx;
      font-size: 0;
      image {
        width: 100%;
      }
    }
    .class-items {
      padding: 10rpx 30rpx 60rpx;
      text-align: center;
      display: block;

      .class-item {
        display: inline-block;
        padding: 10rpx 20rpx;
        color: #333333;
      }
      &:after {
        comment: "\20";
        clear: both;
        height: 0;
        display: block;
      }
    }
  }
}

.u-wrap {
  height: calc(100vh);
  /* #ifdef H5 */
  height: calc(100vh - var(--window-top));
  /* #endif */
  display: flex;
  flex-direction: column;
}
.u-search-box {
  padding: 18rpx 30rpx;
}
.u-menu-wrap {
  flex: 1;
  display: flex;
  overflow: hidden;
}
.u-search-inner {
  background-color: rgb(234, 234, 234);
  border-radius: 100rpx;
  display: flex;
  align-items: center;
  padding: 10rpx 16rpx;
}
.u-search-text {
  font-size: 26rpx;
  color: $u-tips-color;
  margin-left: 10rpx;
}
.u-tab-view {
  width: 240rpx;
  /*height: 100%;*/
  /*background: #f6f6f6;*/

}
.u-tab-item {
  height: 80rpx;
  /*background: #f6f6f6;*/
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26rpx;
  color: #444;
  font-weight: 400;
  line-height: 1;
}

.u-tab-item-active {
  position: relative;
  color: #fd5123;
  font-size: 26rpx;
  font-weight: 600;
  background: #fff;
}

.u-tab-item-active::before {
  content: "";
  position: absolute;
  border-left: 4px solid #fd5123;
  left: 0;
  top: 12rpx;
  bottom: 12rpx;
}
.u-tab-view {
  /*height: 100%;*/
}

.right-box {
  /*background-color: rgb(250, 250, 250);*/
}

.page-view {
}
.sp-item{
  margin-bottom: 30rpx;
  background-color: #fff;
  padding: 16rpx;
  border-radius: 8rpx;
  .sp-list{
    padding: 20rpx;
    .sp-info{
      position: relative;
      display: flex;
      font-size: 22rpx;
      color: #333333;
      margin-bottom: 15rpx;
      .sp-icon{
        position: absolute;
        top: 2rpx;
        image{
          height: 30rpx;
          width: 30rpx;
          border-radius: 50%;
          background: #999999;
        }
      }
      .sp-name{
        flex: 1;
        padding-left: 40rpx;
        font-weight: bold;
      }
      .sp-city{
        color: #999999;
        width: 100rpx;
        text-align: right;
      }
    }
    .sp-serve{
      font-size: 22rpx;
      margin-bottom: 15rpx;
      .serve-info{
        display: inline-block;
        padding-right: 30rpx;
        color: #999999;
        text{
          color: #fd5123;
        }
      }
    }
    .sp-goods{
      display: flex;
      .g-cover{
        width: 110rpx;
        image{
          background: #ccc;
          height: 92rpx;
          width: 90rpx;
          border-radius: 4rpx;
        }
      }
      .g-info{
        flex: 1;
        font-size: 22rpx;
        .g-name{
          font-weight: bold;
        }
        .g-body{
          display: flex;
          align-items: center;
          .g-price{
            width: 150rpx;
            color: #fd5123;
            font-size: 26rpx;
          }
          .g-text{
            flex: 1;
            text-align: right;
            text{
              font-size: 22rpx;
              color: #999999;
              margin-left: 15rpx;
              margin-top: 4rpx;
            }
          }
        }
      }
    }

  }
}
.class-item {
  margin-bottom: 0;
  background-color: #fff;
  padding: 16rpx;
  border-radius: 8rpx;
}

.item-title {
  position: relative;
  font-size: 26rpx;
  color: $u-main-color;
  font-weight: bold;
  padding-left: 20rpx;
}
.item-title::before{
  content: "";
  position: absolute;
  border-left: 3px solid #fd5123;
  left: 0;
  top: 8rpx;
  bottom: 8rpx;
}



.item-container {
  padding: 20rpx;
  overflow: hidden;

}
.thumb-box {
  display: inline-block;
  margin: 6rpx 1%;
  width: 31%;
  float: left;
  text-align: center;
  font-size: 24rpx;
  white-space: nowrap;
  background: #f1f1f1;
  padding: 10rpx 0rpx;
  overflow: hidden;
  .item-menu-name {
    font-weight: normal;
    color: $u-main-color;
    display: inline-block;
    height: 32rpx;
    line-height: 32rpx;
  }
  .item-menu-guide{
    margin-top: 10rpx;
    color: #878787;
    font-size: 24rpx;
  }
}
.thumb-box-img {
  display: inline-block;
  margin: 6rpx 1%;
  width: 31%;
  float: left;
  text-align: center;
  font-size: 24rpx;
  white-space: nowrap;
  padding: 10rpx 0rpx;
  overflow: hidden;
  .btn-icon{
    margin-bottom: 10rpx;
    image{
      height: 60rpx;
      width: 60rpx;
    }
  }
  .item-menu-name {
    font-weight: normal;
    color: $u-main-color;
    display: inline-block;
    height: 32rpx;
    line-height: 32rpx;
  }
  .item-menu-guide{
    margin-top: 10rpx;
    color: #878787;
    font-size: 24rpx;
  }
}

.item-menu-image {
  width: 120rpx;
  height: 120rpx;
}
</style>
