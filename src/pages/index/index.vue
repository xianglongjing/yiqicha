<template>
  <view class="page">
    <view class="redbg">
        <view class="zi">
            <view class="banner u-margin-bottom-50">
                <u-image src="http://images.yiqiwang360.com/yiqicha/fangdajing.png" width="50" height="50"></u-image>
                <view class="name u-padding-right-20">一企查</view>
                <view class="u-margin-left-20 u-font-22">
                    <view>免费查企业</view>
                    <text>就上一企查</text>
                </view>
            </view>
            <u-tabs
                    :list="menuList"
                    :current="current"
                    @change="menuChange"
                    bar-width="50" bar-height="4" font-size="30" height="50" gutter="50" :bold="false"
                    active-color="#ffffff" bg-color="none" inactive-color="#ffffff"
            ></u-tabs>
          <view v-if="current===0">
            <view class="inline-block" style="width: 100%;margin-top:20rpx">
              <u-search
                      :action-style="search_btn"
                      :animation="true" disabled
                      @custom="goSearch"
                      @click="goSearch"
                      bg-color="#f8f8f8"
                      input-align="left"
                      placeholder="请输入企业名称 老板名称 工商注册号等" shape="square"
              ></u-search>
              <view class="hot u-margin-top-30">
                <view class="hot-title">
                  热搜
                </view>
                <view class="hot-items">
                  <u-notice-bar mode="vertical"
                                :volume-icon="false"
                                bg-color="none"
                                font-size="26"
                                padding="2rpx 20rpx"
                                color="#ffffff"
                                @click="hotNewsGo"
                                :is-circular="false" :list="hotList"></u-notice-bar>
                </view>
                <view class="hot-change" @click="reNews">
                  <u-image mode="aspectFill" src="http://images.yiqiwang360.com/yiqicha/huanyipi.png"
                           width="24" height="24"></u-image>
                  <text class="u-margin-left-10">换一批</text>
                </view>
              </view>
            </view>
          </view>
          <view v-if="current===1">
            <view class="inline-block" style="width: 100%;margin-top:20rpx">
              <u-search
                      :action-style="search_btn"
                      :animation="true" disabled
                      @custom="goSearch"
                      @click="souboss"
                      bg-color="#f8f8f8"
                      input-align="left"
                      placeholder="请输入企业名称 老板名称 工商注册号等" shape="square"
              ></u-search>
              <view class="hot u-margin-top-30">
                <view class="hot-title">
                  热搜
                </view>
                <view class="hot-items">
                  <u-notice-bar mode="vertical"
                                :volume-icon="false"
                                bg-color="none"
                                font-size="26"
                                padding="2rpx 20rpx"
                                color="#ffffff"
                                @click="hotNewsGo"
                                :is-circular="false" :list="hotList"></u-notice-bar>
                </view>
                <view class="hot-change" @click="reNews">
                  <u-image mode="aspectFill" src="http://images.yiqiwang360.com/yiqicha/huanyipi.png"
                           width="24" height="24"></u-image>
                  <text class="u-margin-left-10">换一批</text>
                </view>
              </view>
            </view>
          </view>
          <view v-if="current===2">
            <view class="inline-block" style="width: 100%;margin-top:20rpx">
<!--              <u-search-->
<!--                      :action-style="search_btn"-->
<!--                      :animation="true" disabled-->
<!--                      @custom="goSearch"-->
<!--                      @click="danger"-->
<!--                      bg-color="#f8f8f8"-->
<!--                      input-align="left"-->
<!--                      placeholder="请输入企业名称 老板名称 工商注册号等" shape="square"-->
<!--              ></u-search>-->
              <u-search
                      :action-style="search_btn"
                      :animation="true" disabled
                      @custom="goSearch"
                      bg-color="#f8f8f8" @click="kaifa"
                      input-align="left"
                      placeholder="请输入企业名称 老板名称 工商注册号等" shape="square"
              ></u-search>
              <view class="hot u-margin-top-30">
                <view class="hot-title">
                  热搜
                </view>
                <view class="hot-items">
                  <u-notice-bar mode="vertical"
                                :volume-icon="false"
                                bg-color="none"
                                font-size="26"
                                padding="2rpx 20rpx"
                                color="#ffffff"
                                @click="hotNewsGo"
                                :is-circular="false" :list="hotList"></u-notice-bar>
                </view>
                <view class="hot-change" @click="reNews">
                  <u-image mode="aspectFill" src="http://images.yiqiwang360.com/yiqicha/huanyipi.png"
                           width="24" height="24"></u-image>
                  <text class="u-margin-left-10">换一批</text>
                </view>
              </view>
            </view>
          </view>

        </view>
    </view>
    <view class="types">
      <view class="ty-zong">
      <view class="types-con" @click="go('ll/llai')">
        <u-image src="https://yiqiwang360.com/images/yiqicha/laolai.png" mode="aspectFill" height="80" width="80"></u-image>
        <text>查失信</text>
      </view>
      <view class="types-con" @click="go('index/phone')">
        <u-image src="https://yiqiwang360.com/images/yiqicha/dianhua.png" mode="aspectFill" height="80" width="80"></u-image>
        <text>找电话</text>
      </view>
      <view class="types-con" @click="kaifa">
        <u-image src="https://yiqiwang360.com/images/yiqicha/laoban.png" mode="aspectFill" height="80" width="80"></u-image>
        <text>身边老板</text>
      </view>
      <view class="types-con" @click="kaifa">
        <u-image src="https://yiqiwang360.com/images/yiqicha/gongsi.png" mode="aspectFill" height="80" width="80"></u-image>
        <text>附近公司</text>
      </view>
      <view class="types-con" @click="kaifa">
        <u-image src="https://yiqiwang360.com/images/yiqicha/gaojisousuo.png" mode="aspectFill" height="80" width="80"></u-image>
        <text>高级搜索</text>
      </view>
      </view>
      <view class="ty-zong">
        <view class="types-con" @click="go('index/global')">
          <u-image src="https://yiqiwang360.com/images/yiqicha/quanqiu.png" mode="aspectFill" height="80" width="80"></u-image>
          <text>全球企业</text>
        </view>
        <view class="types-con" @click="go('index/shangbiao')">
          <u-image src="https://yiqiwang360.com/images/yiqicha/shangbiao.png" mode="aspectFill" height="80" width="80"></u-image>
          <text>查商标</text>
        </view>
        <view class="types-con" @click="kaifa">
          <u-image src="https://yiqiwang360.com/images/yiqicha/fengxian.png" mode="aspectFill" height="80" width="80"></u-image>
          <text>查风险</text>
        </view>
        <view class="types-con" @click="go('index/beian')">
          <u-image src="https://yiqiwang360.com/images/yiqicha/beian.png" mode="aspectFill" height="80" width="80"></u-image>
          <text>查备案</text>
        </view>
        <view class="types-con" @click="go('index/tservice')">
          <u-image src="https://yiqiwang360.com/images/yiqicha/quanbu.png" mode="aspectFill" height="80" width="80"></u-image>
          <text>全部</text>
        </view>
      </view>
    </view>
    <view class="gg">
      <image mode="aspectFill" src="https://yiqiwang360.com/images/yiqicha/zhaoshang.png"
             style="width:100%;height:150rpx;"></image>
    </view>
    <view class="new">
      <view class="u-margin-bottom-20" style="display: flex;flex-direction: row;justify-content: center">
      <u-tabs
              :list="newList"
              :current="newcurrent"
              @change="newChange"
              bar-width="50" bar-height="4" font-size="30" height="50" gutter="50" :bold="false"
              active-color="#E2291D" bg-color="none" inactive-color="#666666"
      ></u-tabs>
      </view>
      <view v-show="newcurrent===0" class="new-con u-border-bottom" @click="newdetail(item.id)" v-for="item in newsList" :key="item.id">
        <view class="new-l">
          <view class="new-title u-line-2">
            {{item.title}}
          </view>
          <view class="desc u-line-1">
            <text>{{item.source}}</text>
            <text class="text-center">1.5万阅读</text>
            <text class="text-right">{{item.release_time}}一天前</text>
          </view>
        </view>
        <u-image :src="'http://yiqiwang360.com/'+item.image" width="200" height="120"></u-image>
      </view>
      <view v-show="newcurrent===1" class="new-con u-border-bottom" @click="newdetail(item.id)" v-for="item in newsList2" :key="item.id">
        <view class="new-l">
          <view class="new-title">
            {{item.title}}
          </view>
          <view class="desc u-line-1">
            <text>{{item.source}}</text>
            <text>1.5万阅读</text>
            <text>{{item.release_time}}</text>
          </view>
        </view>
        <u-image :src="'http://yiqiwang360.com/'+item.image" width="200" height="120"></u-image>
      </view>
      <view v-show="newcurrent===2" class="new-con u-border-bottom" @click="newdetail(item.id)" v-for="item in newsList3" :key="item.id">
        <view class="new-l">
          <view class="new-title">
            {{item.title}}
          </view>
          <view class="desc u-line-1">
            <text>{{item.source}}</text>
            <text>1.5万阅读</text>
            <text>{{item.release_time}}</text>
          </view>
        </view>
        <u-image :src="'http://yiqiwang360.com/'+item.image" width="200" height="120"></u-image>
      </view>
    </view>
  </view>
</template>

<script>
  import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
  export default {
    components: {uniNavBar},
  data () {
    return {
      // 导航菜单
      currentMenuIndex: '',
        hotList: [
          // '寒雨连江夜入吴',
          // '平明送客楚山孤',
          // '洛阳亲友如相问',
          // '一片冰心在玉壶'
      ],
        newsListAll:{},
      menuList: [{
        name: '查企业'
      }, {
        name: '查老板'
      }, {
        name: '查风险'
      }],
      current:0,
      emptyShow:false,
      newsList:[],
      newsList2:[],
      newsList3:[],
      newList: [{
        name: '企业头条'
      }, {
        name: '商业快讯'
      }, {
        name: '监控日报'
      }],
      page:1,
      pageNum: 1,
      loadStatus: 'nomore',
      newcurrent:0,
      keyword:'',
      keyword1:'',
      keyword2:'',
      search_btn: {
        color: '#ffffff'
      },
    }
  },
  onLoad () {
    this.getNewList();
    this.getNewList1();
    this.getNewList2();
    this.hot()
  },
  onShow () {
  },
    onReachBottom () {
      if (this.goodsList.length < this.pageNum * 10) return this.loadStatus = 'nomore'
      this.pageNum++
      this.getSearchList()
    },
    // 下拉刷新

    onPullDownRefresh() {
      // this.getBasicInfo()
      let that = this
      setTimeout(function() {
        uni.stopPullDownRefresh();
      }, 1500);


    },
    // onPullDownRefresh () {
    //   this.pageNum = 1
    //   this.newsList = []
    //   this.newsList2 = []
    //   this.newsList3 = []
    //   this.getNewList(() => {
    //     uni.stopPullDownRefresh()
    //   })
    //   this.getNewList1(() => {
    //     uni.stopPullDownRefresh()
    //   })
    //   this.getNewList2(() => {
    //     uni.stopPullDownRefresh()
    //   })
    // },
  // // 下拉刷新
  // onPullDownRefresh () {
  //   // this.getIndex()
  //   setTimeout(function () {
  //     uni.stopPullDownRefresh();
  //   }, 1000);
  // },
  methods: {
    async kaifa () {
      uni.showToast({
        title: '开发中',
        icon:'none',
        duration: 2000
      });
      },
      hotNewsGo(e){
        console.log(e)
          this.goto('index/newsDetail?id='+this.newsListAll[e]['id'])
      },
    menuChange(index) {
      this.current = index;
      // this.pageNum = 1
      // this.newsList = []
      // this.newsList2 = []
      // this.newsList3 = []
    },
      async reNews () {
          const { data: res } = await this.$request({
              method: 'GET',
              url: 'applets/hotsearch',
              data: {
                  type:'home'
              }
          })
          let title={}
          this.hotList = ''
          this.newsListAll = res
          for(let i=0;i<res.length;i++){
              let thisTitle = [res[i]['title']]
              this.hotList=[...this.hotList,...thisTitle]
          }
      },
      async hot () {
          const { data: res } = await this.$request({
              method: 'GET',
              url: 'applets/home'
          })
          // console.log(res.hotsearch.title)
          // this.title = res.hotsearch.title
          let title={}
          this.newsListAll = res.hotsearch
          for(let i=0;i<res.hotsearch.length;i++){
              let thisTitle = [res.hotsearch[i]['title']]
              this.hotList=[...this.hotList,...thisTitle]
          }
      },
    newChange(index) {
      // this.loadStatus = 'loading'
      this.newcurrent = index;
    },
    go (path) {
      let name = path
      let nameArr = name.split('=')
      // if (nameArr[1]==='全部分类'){
      //   uni.switchTab({
      //     url: '/pages/serve/serve'
      //   })
      //   return false
      // }
      uni.navigateTo(
              { url: '/pages/' + path }
      )
    },
    // 搜索
    goSearch () {
      uni.navigateTo({
        url: '/pages/index/search'
      })
    },
    // 搜索
    // Searchboss () {
    //   if (this.keyword === '') return uni.showToast({
    //     title: '请输入关键词再搜索',
    //     icon: 'none',
    //     duration: 2000
    //   })
    //   uni.navigateTo({
    //     url: '/pages/index/souboss?keyword=' + this.keyword
    //   })
    //   this.keyword = ''
    // },
    danger(){
      uni.navigateTo({
        url:'/pages/danger/search'
      })
    },
    souboss(){
      uni.switchTab({
        url:'/pages/index/souboss'
      })
    },
    newdetail(id){
      uni.navigateTo({
        url:'/pages/index/newsDetail?id=' + id
      })
    },
    async getNewList () {
      await this.$request({
        method: 'GET',
        data: {
          page: this.pageNum
        },
        url: 'applets/onews?type=1'
      }).then(res=>{
        console.log(res)
        this.newsList = res.data
        // if (this.newsList.length < res.total) {
        //   this.loadStatus = 'loadmore'
        // }
        // callBack && callBack()
      })
      /*console.log(11)
      console.log(res)
      this.shopList = res*/
      // this.menuNum = 12 / res.data.length
    },
    async getNewList1 () {
      await this.$request({
        method: 'GET',
        data: {
          page: this.pageNum
        },
        url: 'applets/onews?type=2'
      }).then(res=>{
        console.log(res)
        this.newsList2 = res.data
        // if (this.newsList2.length < res.total) {
        //   this.loadStatus = 'loadmore'
        // }
        // callBack && callBack()
      })
      /*console.log(11)
      console.log(res)
      this.shopList = res*/
      // this.menuNum = 12 / res.data.length
    },
    async getNewList2 () {
      await this.$request({
        method: 'GET',
        data: {
          page: this.pageNum
        },
        url: 'applets/onews?type=3'
      }).then(res=>{
        console.log(res)
        this.newsList3 = res.data
        // if (this.newsList3.length < res.total) {
        //   this.loadStatus = 'loadmore'
        // }
        // callBack && callBack()
      })
      /*console.log(11)
      console.log(res)
      this.shopList = res*/
      // this.menuNum = 12 / res.data.length
    },
  },
}
</script>
<style lang="scss">
page {
  background: #f8f8f8;
}

</style>
<style lang="scss" scoped>
  page {
    background: #f8f8f8;
  }
  .redbg{
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: bottom;
    background-image: url("https://yiqiwang360.com/images/yiqicha/beijing.png");
    position: relative;
    color:white;
    padding:50rpx+var(--status-bar-height) 0 0;
    text-align: center;
    height:550rpx;
    width:100%;
    .zi{
      position: absolute;
      top:100rpx;
      left:30rpx;
      right:30rpx;
    }
    .banner{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      .name{
        font-size:47rpx;
        font-weight:700;
        height: 50rpx;
        line-height: 50rpx;
        border-right: 2rpx solid white;
      }
    }
    .hot{

      display: flex;
        line-height: 36rpx;
      font-size: 24rpx;
      .hot-title{
          width: 80rpx;
        font-weight: bold;
          color: rgba(255,255,255,0.8);
        font-style: oblique;
          font-size: 28rpx;
        padding-right: 20rpx;
        border-right: 1rpx solid white;
      }
        .hot-items{
            flex: 1;
        }
      .hot-change{
        width: 140rpx;
          display: flex;
      }
    }
  }
  .types{
    border-radius: 10rpx;
    padding:0 10rpx 10rpx;
    background: #ffffff;
      margin: -100rpx 30rpx 30rpx;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
      position: relative;
    .ty-zong{
      margin:20rpx 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      flex:1;
      .types-con{
        flex:1;
        flex-direction: column;
        display: flex;
        justify-content: center;
        align-items: center;
        text{
          text-align: center;
          font-size: 23rpx;
          margin-top: 5rpx;
        }
      }
    }
  }
  .aa{
    height: 220rpx;
  }
  .gg{
    margin: 30rpx 0;
    width:100%;
    padding: 0 30rpx ;
    text-align: center;
    image{
      border-radius: 10rpx;
    }
  }
  .new{
    margin:0 auto;

    .new-con{
      padding:20rpx 30rpx;
      display: flex;
      flex-direction: row;
      .new-l{
        flex:1;
        margin-right:20rpx;
        .new-title{
          font-weight: 600;
          line-height: 36rpx;
            min-height: 72rpx;
        }
        .desc{
          font-size:22rpx;
          margin-top: 14rpx;
          display: flex;
          flex-direction: row;
          align-items: center;
          color:#A9A9A9;
          text{
            flex:1;
          }
        }
      }

    }
  }
</style>
