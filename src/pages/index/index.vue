<template>
  <view class="page">
    <uni-nav-bar :status-bar="true" :fixed="true" :border="false" :shadow="false">
      <view slot="left" class="flex" @click="goto('index/cities')">
        <image class="navbar-icon" src="@/static/icons/location.png"></image>
        <text class="navbar-text">{{addressName}}</text>

      </view>
      <view slot="default">
        <view class="search-box">
          <view class="inline-block" style="padding-top: 6rpx" @click="scanCode()">
            <u-icon name="scan" color="#fd5123" size="38"></u-icon>
          </view>
          <view class="inline-block" style="width: 260rpx">
            <u-search
                    :action-style="search_btn"
                    :animation="true"
                    @custom="goSearch"
                    @search="goSearch"
                    bg-color="#f8f8f8"
                    input-align="left"
                    placeholder="搜索"
                    v-model="keyword"
            ></u-search>
          </view>
        </view>
      </view>
    </uni-nav-bar>
    <view class="uni-padding-wrap">
      <view class="page-section swiper">
        <view class="page-section-spacing">
          <swiper class="swiper" :indicator-dots="true" :autoplay="false" duration="500"  style="height: 470rpx" indicator-active-color="#fd5123">
            <swiper-item>
              <view class="nav-box">
                <view :key="item.id" @click="go('index/search?query='+item.colName)" class="nav-item" v-for="item in navList.nav1">
                  <view class="btn-icon">
                    <image :src="item.icon" mode="aspectFit" />
                  </view>
                  <view class="btn-name">{{item.colName}}</view>
                </view>
              </view>
            </swiper-item>
            <swiper-item>
              <view class="nav-box">
                <view :key="item.id" @click="go('index/search?query='+item.colName)" class="nav-item" v-for="item in navList.nav2">
                  <view class="btn-icon">
                    <image :src="item.icon" mode="aspectFit" />
                  </view>
                  <view class="btn-name">{{item.colName}}</view>
                </view>
              </view>
            </swiper-item>
          </swiper>
        </view>
      </view>
    </view>


<!--    交易快报-->
    <view class="bus-paper" v-show="!shelf.weixin">
      <view class="box-icon">
        <image mode="aspectFit" src="/static/image/jiaoyikuaibao.png"></image>
      </view>
      <u-notice-bar :list="express" padding="8rpx 24rpx" :volume-icon="false" bg-color="none" color="#333333" duration="4000" mode="vertical"></u-notice-bar>
    </view>


    <view class="Fneed">
      <view class="need-title">
       <text> —</text><text>免费发需求</text>  官方推荐优质服务商<text>—</text>
      </view>
      <view class="need-hot">
        <text class="cuIcon-hotfill"></text><text class="text-bold u-p-l-5 u-p-r-15 u-font-24">HOT</text>
        <scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll">
          <view class="scroll-view-item_H" v-for="item in hotNeeds" :key="index" @click="this.need=item">{{item}}</view>
        </scroll-view>
      </view>
      <view class="need-form">
        <view class="need-form-input">
        <u-field
                :border-bottom="false" label="我需要"
                v-model="need" :field-style="needInput" placeholder="小程序开发"
        >
        </u-field>
        </view>
        <view class="need-form-input">
        <u-field
                label="手机号"
                type="number"
                placeholder="仅医企商城官方可见"
                v-model="phone" :border-bottom="false"
        ></u-field>
        </view>
      </view>
      <u-button shape="circle" size="default" :ripple="true" :custom-style="customStyle" ripple-bg-color="#f54c33"
                @click="iNeed()">马上为我推荐</u-button>
      <view class="yiqibao" @click="goto('index/ensure')">
        <view class="bao-items">
          <view class="title-icon">
            <image mode="aspectFit" src="/static/image/yiqibao.png"></image>
          </view>
          <view class="item">
            <image mode="aspectFit" src="/static/image/bao.png"></image>
            <text>资金安全</text>
          </view>
          <view class="item">
            <image mode="aspectFit" src="/static/image/zheng.png"></image>
            <text>商家实名</text>
          </view>
          <view class="item">
            <image mode="aspectFit" src="/static/image/guan.png"></image>
            <text>全程监管</text>
          </view>
          <text class="cuIcon-right"></text>
        </view>
      </view>
    </view>
    <view @click="goTab('news/news')" class="news-list" v-show="!shelf.weixin">
      <view class="box-icon">
        <image mode="aspectFit" src="../../static/image/news_title.png"></image>
      </view>
      <u-notice-bar :list="newsList" :volume-icon="false" bg-color="none" color="#333333" duration="4000" mode="vertical"></u-notice-bar>
    </view>

    <view class="hot-nav" v-show="!shelf.weixin">
      <view class="hot-first">
        <view class="first-left">
          <view @click="go('index/search?query=商标注册')" class="left-box" style="background-image: url('https://api.yiqiwang360.com/images/shangbiao.png')">
            <view class="title">商标注册</view>
            <view class="cont">专业服务 高效办理</view>
          </view>
        </view>
        <view class="first-right">
          <view @click="go('index/search?query=法律服务')" class="right-box" style="background-image: url('https://api.yiqiwang360.com/images/lvshi.png')">
            <view class="title">法律服务</view>
            <view class="cont">解决争议，处理纠纷</view>
          </view>
          <view class="right-flex">
            <view @click="go('index/search?query=银行服务')" class="right-box" style="background-image: url('https://api.yiqiwang360.com/images/daili.png')">
              <view class="title">银行服务</view>
              <view class="cont">经验丰富</view>
            </view>
            <view @click="go('index/search?query=知识产权')" class="right-box" style="background-image: url('https://api.yiqiwang360.com/images/zhishi.png')">
              <view class="title">知识产权</view>
              <view class="cont">产权保护</view>
            </view>
          </view>


        </view>
      </view>
      <view class="hot-second">
        <view @click="go('index/search?query=软件开发')" class="second-box" style="background-image: url('https://api.yiqiwang360.com/images/hot_second.png')">
          <view class="title">软件开发</view>
          <view class="cont">按需定制</view>
        </view>
        <view @click="go('index/search?query=广告传媒')" class="second-box" style="background-image: url('https://api.yiqiwang360.com/images/hot_second.png')">
          <view class="title">广告传媒</view>
          <view class="cont">聚焦推广</view>
        </view>
        <view @click="go('index/search?query=营销策划')" class="second-box" style="background-image: url('https://api.yiqiwang360.com/images/hot_second.png')">
          <view class="title">营销策划</view>
          <view class="cont">方案精准</view>
        </view>
        <view @click="go('index/search?query=拓展训练')" class="second-box" style="background-image: url('https://api.yiqiwang360.com/images/hot_second.png')">
          <view class="title">拓展训练</view>
          <view class="cont">团队凝聚</view>
        </view>
      </view>
    </view>

    <view class="ad-banner">
      <image
              class="full"
              mode="widthFix"
              src="https://api.yiqiwang360.com/images/app/banner/img_banner.png"
      />
    </view>

    <view class="floor-box" v-for="(item,index) in classIfy" :key="index" v-show="!shelf.weixin">
      <view class="floor-title">{{item.name}}</view>
      <view class="floor-subtitle">{{item.subhead}}</view>
      <view class="floor-nav u-border-bottom">
        <view @click="go('index/search?query='+item.sonName1)" class="nav-item u-border-right">
          <view class="nav-title">{{item.sonName1}}</view>
          <view class="nav-subtitle">{{item.sonSubhead1}}</view>
          <view class="nav-img">
            <image :src="'http://yiqiwang360.com/'+item.sonImg1"
                   mode="aspectFit"
            />
          </view>
        </view>
        <view @click="go('index/search?query='+item.sonName2)" class="nav-item u-border-right">
          <view class="nav-title">{{item.sonName2}}</view>
          <view class="nav-subtitle">{{item.sonSubhead2}}</view>
          <view class="nav-img">
            <image :src="'http://yiqiwang360.com/'+item.sonImg2"
                   mode="aspectFit"
            />
          </view>
        </view>
        <view @click="go('index/search?query='+item.sonName3)" class="nav-item">
          <view class="nav-title">{{item.sonName3}}</view>
          <view class="nav-subtitle">{{item.sonSubhead3}}</view>
          <view class="nav-img">
            <image :src="'http://yiqiwang360.com/'+item.sonImg3"
                   mode="aspectFit"
            />
          </view>
        </view>
      </view>
      <view class="recommend">
        <view class="title">
          <text class="cuIcon-titles text-red u-font-28"></text>
          <text class="u-font-28">推荐服务</text>
        </view>
        <view class="re-items">
          <view :key="index1" @click="go('shops/goodDetail?id='+item1.id)" class="re-item" v-for="(item1,index1) in recommend[index]">
            <view class="re-logo">
              <image :src="'http://yiqiwang360.com/uploads/'+item1.dbimg" mode="aspectFill"></image>
            </view>
            <view class="re-body">
              <view class="re-name u-line-1">{{item1.name}}</view>
              <view class="re-info">
                <text class="price">￥{{item1.price}}</text>
                <text class="num">销量 {{item1.numXL}}</text>
              </view>
            </view>
            <view class="re-btn">
              <view class="btn-more">了解详情</view>
            </view>
          </view>
        </view>
      </view>
    </view>

    <view class="hot-sp" v-show="!shelf.weixin">
      <view class="hot-title">
        <image mode="widthFix" src="../../static/image/hot_sp.png"></image>
      </view>
      <view class="sp-list">
        <view class="sp-items">
          <view :key="item.id" class="sp-item u-border-top" v-for="item in hotMerchant" @click="go('shops/shopHome?id='+item.id)">
            <view class="sp-logo">
              <image :src="'http://yiqiwang360.com/'+item.img" mode="widthFix"></image>
            </view>
            <view class="sp-body">
              <view class="sp-name u-line-1">{{item.corporateName}}</view>
              <u-rate :count="starFix" :disabled="true" active-color="#f9bc01" current="5" size="24"></u-rate>
              <view class="sp-info u-line-1">
                {{item.industry}}
              </view>
            </view>
            <view class="sp-btn">
              <view class="btn-more">进入店铺</view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <u-modal
            v-model="alertShow"
            title="提交成功"
            :content="content"
            @confirm="goBack"
            confirm-color="#fd5123"
    ></u-modal>

    <u-back-top
      :custom-style="scrollTopBg"
      :icon-style="scrollTopStyle"
      :scroll-top="scrollTop"
      bottom="60"
      icon="arrow-upward"
      top="1600"
    ></u-back-top>
  </view>
</template>

<script>
  import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
  import amap from '../../common/amap-wx.js';
  export default {
  components: {uniNavBar},
  data () {
    return {
      amapPlugin: null,
      key: '35d32d635e17746f7054c71c8539a377',
      addressName: '临沂市',
      need: '',
      phone: '',
      alertShow: false,
      content: '医企网客户经理将尽快与您联系',
      customStyle: {
        width: '80%',
        top: '10rpx',
        color: '#ffffff',
        backgroundColor: '#FF2E0F',
        marginBottom: '50rpx',
        border: "none"
      },
      needInput: {},
      hotNeeds: [],
      //搜索
      keyword: '',
      search_btn: {
        color: '#FF9251'
      },
      //轮播图
      swiper: [],
      // 导航列表
      navList: [],
      loadStatus: 'loadmore',
      //新闻
      express: [],
      newsList: [],
      starFix: 5,
      //服务商数量
      merNum: 1000,
      //热门楼层
      classIfy: [],
      //服务推荐
      recommend: [],
      hotProduct: [],
      //热门服务商
      hotMerchant: [],
      // 产品列表
      goodsList: [],
      pageNum: 1,
      //返回顶部
      scrollTop: 0,
      scrollTopStyle: {
        color: '#ffffff',
      },
      scrollTopBg: {
        background: 'rgba(253, 81, 35, 0.2)',
      },
      menuNum: 3,
      shelf: {
        weixin: true
      }
    }
  },
  onLoad () {
    // uni.authorize({
    //   scope: 'scope.userLocation',
    //   success() {
    //     uni.getLocation()
    //   }
    // })
    this.getIndex()
    this.getLocation()
    this.amapPlugin = new amap.AMapWX({
      key: this.key
    });
    this.amapPlugin.getRegeo({
      success: (data) => {
        // console.log(data)
        this.addressName = data[0].regeocodeData.addressComponent.city;
      },
      fail: function(info){
        console.log(info)
      }
    });
  },
  onShow () {
  },
  // 下拉刷新
  onPullDownRefresh () {
    this.getIndex()

  },
  methods: {
    goUpdate(){
      wx.navigateToMiniProgram({
        appId: 'wxd62b393f26bfae65',
        success(res) {
          // 打开成功
        }
      })
    },
    async recommendbtn(){
      if(this.need === '' || this.phone ==='') return this.$u.toast('请完整填写内容')
    },
    // 总接口
    async getIndex () {
      const { data: res } = await this.$request({
        method: 'GET',
        url: 'index/index'
      })
      //上架
      this.shelf = res.data.shelf
      //导航
      this.navList = res.data.shortcutKey
      //服务商数量
      this.merNum = res.data.merNum
      //盖楼
      this.classIfy = res.data.classIfy
      this.recommend = res.data.tj
      this.hotProduct = res.data.hotProduct
      //热门服务商
      this.hotMerchant = res.data.hotMerchant
      this.express = res.data.express
      this.hotNeeds = res.data.hotNeeds
      //处理新闻
      let newsList = []
      for (let i=0;i<res.data.newsPoll.length;i++){
        newsList[i] = res.data.newsPoll[i]['title']
      }
      this.newsList = newsList
      setTimeout(function () {
        uni.stopPullDownRefresh();
      }, 1000);

    },
    //识别二维码
    scanCode(){
      let that=this
      uni.scanCode({
        onlyFromCamera: true,
        success: function (res) {
          that.goto('index/scan?url='+res.result)
        }
      });
    },
    // 获取导航
    async iNeed() {
      const { data: res } = await this.$request({
        method: 'GET',
        url: 'service/needs',
        data:{
          phone: this.phone,
          need: this.need,
        }
      })
      this.alertShow=true
      this.phone=''
      this.need=''
      // console.log(res)
    },
    //定位信息
    getLocation(){
      uni.getLocation({
        type: 'wgs84',
        success: function (res) {
          console.log(res)
          if (res.address){
            this.district = res.address.district
          }
        }
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
    },
    // 跳转到服务详情
    goGoodDetail (id) {
      uni.navigateTo({
        url: '/pages/shops/goodDetail?id=' + id
      })
    },
    // 点击跳转
    go (path) {
      let name = path
      let nameArr = name.split('=')
      if (nameArr[1]==='全部分类'){
        uni.switchTab({
          url: '/pages/serve/serve'
        })
        return false
      }
      uni.navigateTo(
              { url: '/pages/' + path }
      )
    },

    goto(path) {
      uni.navigateTo({
        url: '/pages/' + path
      })
    },
    goTab (path) {
      uni.switchTab(
              { url: '/pages/' + path }
      )
    },
  },
  //返回顶部
  onPageScroll (e) {
    this.scrollTop = e.scrollTop;
  }
}
</script>
<style lang="scss">
page {
  background: #f8f8f8;
}

</style>
<style lang="scss">
.page {
  background: #f8f8f8;
}


.search-box {
  background: #f8f8f8;
  padding: 0 30rpx;
  height: 70rpx;
  line-height: 70rpx;
  border-radius: 110rpx;
  display: flex;
  .inline-block{
    align-self:center
  }
}
.nav-box {
  padding: 10rpx 20rpx;
  background-color: #f8f8f8;;
  .nav-item {
    width: 20%;
    display: inline-block;
    text-align: center;
    margin: 20rpx 0;
    image {
      height: 60rpx;
      width: 60rpx;
    }
    .btn-icon {
      text-align: center;
    }
    .btn-name {
      font-size: 24rpx;
      color: #676767;
    }
  }
}
//交易快报
.bus-paper{
  position: relative;
  padding: 10rpx 30rpx 10rpx 190rpx;
  margin:30rpx auto 14rpx;
  background-color: #ffffff;
  height:70rpx;
  .box-icon{
    position: absolute;
    left: 30rpx;
    width: 160rpx;
    padding: 12rpx 0;
    image{
      height: 26rpx;
    }
  }

}
.scroll-view_H {
  flex: 1;
  white-space: nowrap;
  padding-right: 100rpx;
}
.scroll-view-item {
  text-align: center;
  font-size: 36rpx;
}
.scroll-view-item_H {
  display: inline-block;
  line-height: 41rpx;
  height: 40rpx;
  background-color: #fcefe6;
  border-radius: 20rpx;
  font-size: 24rpx;
  color: #fd5123;
  text-align: center;
  margin-left: 14rpx;
  padding: 0 20rpx;
  vertical-align: middle;
}
//发送需求
.Fneed{
  background: #ffffff;
  padding-bottom: 10rpx;
  button{
    margin:20rpx auto;
  }
  .need-title{
    text-align: center;
    margin: 15rpx 0;
    font-weight: bold;
    font-size: 30rpx;
    padding:30rpx 0 10rpx;
    text{
      padding:0 5rpx;
    }
  }
  .need-hot{
    color:#E08956;
    margin:20rpx 30rpx;
    display: flex;
    overflow: hidden;
    text{
      font-style: oblique;
      padding-top: 6rpx;
      color: #fd5123;
    }
    button{
      color:#E08956;
      margin:0 10rpx;
    }
  }
  .need-form{
    margin:20rpx auto;
    padding: 0 30rpx;
    .need-form-input{
      background: #F2F2F2;
      margin-bottom:14rpx;
      .u-field{
      padding: 14rpx 30rpx;
    }
    }
  }

}
//精选排行
.accurate-box{
  width:100%;
  .gradual{
    padding:5rpx;
    margin-left:10rpx;
  }
  .accurate-bottom{
    margin:0 auto;
    text-align: left;
    image{
      height:200rpx;
      width:150rpx !important;
      margin:11rpx !important;
    }
  }
  .accurate{
    text{
      width:190rpx;
      display:flex;
      margin:10px 0;
      height:80rpx;
    }
    image{
      margin-top: 20rpx;
      width:150rpx;
      height: 150rpx;
      float:right;
    }
  }
}

.quickly{
  position: relative;
  margin: 20rpx;
  padding: 24rpx 20rpx;
  background-color: #ffffff;
  border-radius: 10rpx;
  height: 150rpx;
  .box-icon{
    position: absolute;
    right: 40rpx;
    top: 20rpx;
    bottom: 20rpx;
    image{
      height: 100rpx;
      width: 100rpx;
    }
  }
  .title{
    font-size: 32rpx;
    margin-bottom: 14rpx;
    text{
      font-size: 28rpx;
      margin-left: 10rpx;
      color: #555555;
    }
  }
  .cont{
    font-size: 28rpx;
    color: #555555;
    line-height: 42rpx;
    vertical-align: bottom;
    text{
      border: 1px solid #fd5123;
      color: #fd5123;
      font-size: 24rpx;
      padding: 0rpx 10rpx;
      margin-right: 20rpx;
    }
  }
}
.news-list{
  position: relative;
  margin: 0 30rpx;
  padding: 10rpx 20rpx 10rpx 160rpx;
  .box-icon{
    position: absolute;
    left: 0;
    width: 160rpx;
    padding: 16rpx 0;
    image{
      height: 40rpx;
    }
  }
}
.hot-nav{
  margin: 20rpx;
  /*padding: 10rpx 10rpx;*/
  /*background-color: #ffffff;*/
  .hot-second{
    display: flex;
    margin-top: 10rpx;
    .second-box{
      flex: 2;
      margin: 4rpx 8rpx 10rpx;
      padding: 10rpx 10rpx;
      background-size: cover;
      background-position: bottom right;
      border-radius: 16rpx;
      height: 100rpx;
      letter-spacing: 4rpx;
      .title{
        font-size: 28rpx;
        overflow: hidden;
        color: #333333;
        font-weight: bold;
        text-align: center;
      }
      .cont{
        font-size: 24rpx;
        color: #555555;
        overflow: hidden;
        text-align: center;
      }
    }
  }
  .hot-first{
    display: flex;
    .first-left{
      flex: 2;
      .left-box{
        margin-right: 10rpx;
        padding: 10rpx 20rpx;
        background-size: cover;
        background-position: bottom right;
        border-radius: 16rpx;
        height: 250rpx;
        letter-spacing: 4rpx;
        .title{
          font-size: 28rpx;
          overflow: hidden;
          color: #fd5123;
          font-weight: bold;
        }
        .cont{
          font-size: 22rpx;
          color: #555555;
          overflow: hidden;
        }
      }
    }
    .first-right{
      flex: 3;
      height: 250rpx;
      overflow: hidden;

      .right-box{
        margin-left: 6rpx;
        padding: 10rpx 20rpx;
        background-size: cover;
        background-position: bottom right;
        border-radius: 16rpx;
        height: 120rpx;
        letter-spacing: 4rpx;
        .title{
          font-size: 28rpx;
          overflow: hidden;
          color: #fd5123;
          font-weight: bold;
        }
        .cont{
          font-size: 20rpx;
          color: #555555;
          overflow: hidden;
        }
      }
      .right-flex{
        display: flex;
        margin-top: 14rpx;
        .right-box{
          flex: 1;
          height: 120rpx;
          margin-left: 6rpx;
          padding: 10rpx 20rpx;
        }
      }
    }
  }
}
.ad-banner {
  background: #f8f8f8;
  padding: 10rpx 20rpx;
  image{
    width: 100%;
  }
}
.floor-box{
  margin-top: 30rpx;
  .floor-title{
    font-size: 32rpx;
    text-align: center;
  }
  .floor-subtitle{
    margin-top: 4rpx;
    text-align: center;
    color: #555555;
    font-size: 24rpx;
  }
  .floor-nav{
    display: flex;
    margin-top: 30rpx;
    background: #ffffff;

    .nav-item{
      flex: 1;
      min-width: 0;
      padding: 30rpx 0;
      .nav-title{
        font-size: 32rpx;
        text-align: center;
      }
      .nav-subtitle{
        text-align: center;
        color: #555555;
        font-size: 24rpx;
      }
      .nav-img{
        margin-top: 20rpx;
        text-align: center;
        image{
          height: 80rpx;
        }
      }
    }
  }
  .recommend{
    background: #ffffff;
    width:100%;
    padding: 20rpx;
    .re-items{
      padding-top: 30rpx;
      .re-item{
        display: flex;

        padding: 30rpx 10rpx;
        .re-logo{
          width: 100rpx;
          margin-right: 20rpx;
          image{
            width: 90rpx;
            height: 90rpx;
          }
        }
        .re-body{
          flex: 1;
          min-width:0;
          .re-name{
            font-size: 32rpx;
          }
          .re-info{
            margin-top: 4rpx;
            .price{
              display: inline-block;
              font-size: 28rpx;
              color: #fd5123;
              width: 160rpx;
            }
            .num{
              display: inline-block;
              font-size: 28rpx;
              color: #666666;
              width: 100rpx;
            }
          }
        }
        .re-btn{
          width: 150rpx;
          text-align: right;
          padding-top: 20rpx;
          padding-right: 10rpx;
          .btn-more{
            padding: 0rpx 10rpx;
            display: inline-block;
            font-size: 22rpx;
            line-height: 38rpx;
            border-radius: 10rpx;
            color: #fd5123;
            border: 1px solid #fd5123;
          }
        }
      }
    }


  }

}
.hot-sp{
  margin-top: 20rpx;
  background: #ffffff;
  .hot-title{
    text-align: center;
    padding: 50rpx 0 30rpx;
    margin: 0 30rpx;
    image{
      width: 240rpx;
    }
  }
  .sp-list{
    background: #ffffff;
    padding: 20rpx;
    .sp-items{
      .sp-item{
        display: flex;

        padding: 30rpx 10rpx;
        .sp-logo{
          width: 100rpx;
          margin-right: 20rpx;
          padding-top: 10rpx;
          image{
            width: 90rpx;
            height: 90rpx;
          }
        }
        .sp-body{
          flex: 1;
          min-width:0;
          .sp-name{
            font-size: 32rpx;
          }
          .sp-info{
            margin-top: 10rpx;
            color: #555555;
            .price{
              display: inline-block;
              font-size: 28rpx;
              color: #fd5123;
              width: 160rpx;
            }
            .num{
              display: inline-block;
              font-size: 28rpx;
              color: #666666;
              width: 100rpx;
            }
          }
        }
        .sp-btn{
          width: 150rpx;
          text-align: right;
          padding-top: 44rpx;
          padding-right: 10rpx;
          .btn-more{
            padding: 0rpx 10rpx;
            display: inline-block;
            font-size: 22rpx;
            line-height: 38rpx;
            border-radius: 10rpx;
            color: #fd5123;
            border: 1px solid #fd5123;
          }
        }
      }
    }


  }
}
//产品列表-瀑布流
.img-title {
  text-align: center;
  padding: 20rpx 0;
  image {
    width: 200rpx;
  }
}
.goods-warter {
  border-radius: 8px;
  margin: 8px 5px;
  background-color: #ffffff;
  padding: 0px;
  overflow: hidden;
}
.goods-image {
  width: 100%;
  border-radius: 4px;
}
.goods-title {
  font-size: 30rpx;
  margin: 5px 8px 5px 8px;
  color: $u-main-color;
}
.goods-shop {
  font-size: 24rpx;
  line-height: 32rpx;
  color: $u-tips-color;
  padding: 8px;
  display: flex;
  .price{
    flex: 1;
    color: #fd5123;
    font-size: 24rpx;
    text{
      font-size: 30rpx;
      font-weight: 500;
    }
  }
  .numFW{
    flex: 1;
    text-align: right;
  }

}
</style>
