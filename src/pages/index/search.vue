

<template>
  <view class="search-page">
    <uni-nav-bar :status-bar="true" left-icon="back" :fixed="true" :border="false" :shadow="false" @clickLeft="goBack">
      <view slot="default">
        <view class="search-box">
          <view class="inline-block" style="width: 360rpx">
            <u-search
                    :action-style="search_btn"
                    :animation="true"
                    @custom="goSearch"
                    @search="goSearch"
                    bg-color="#f8f8f8"
                    input-align="left"
                    placeholder="搜索"
                    v-model="query"
            ></u-search>
          </view>
        </view>
      </view>
    </uni-nav-bar>
    <view>
      <view>
        <u-tabs :list="list" font-size="26"
                :is-scroll="false" :current="current" bar-height="4" bar-width="50" :bold="false"
                @change="tabsChange" active-color="#FF4E21" inactive-color="#474747"></u-tabs>

      </view>
      <view class="tool-items">
          <u-dropdown active-color="#FF4E21" title-size="24">
            <u-dropdown-item title="临沂" v-model="total"></u-dropdown-item>
            <u-dropdown-item :options="options1" title="综合" v-model="total"></u-dropdown-item>
            <u-dropdown-item :options="options2" title="智能排序" v-model="sort"></u-dropdown-item>
          </u-dropdown>
      </view>
      <view class="yiqibao" @click="go('index/ensure')">
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

      <u-empty class="u-margin-30" text="暂无相关内容" mode="search" :show="emptyShow"></u-empty>
      <view :key="item.id" @click="go('shops/goodDetail?id='+item.id)" class="goods-item"
            v-for="item in goodsList">
        <view class="item-body">
          <view class="item-cover">
            <image :src="item.dbimg" mode="aspectFill"></image>
          </view>
          <view class="item-info">
            <text class="item-title u-line-2">{{item.name}}</text>
            <view class="item-tips">
              <text>按时按质</text>
              <text>保证完成</text>
            </view>
            <view class="item-fee">
              <text class="item-price">
                ￥
                <text class="item-num">{{item.price}}</text>
              </text>
              <text class="item-sales">销量 {{item.numXL}}</text>
              <text class="item-rate">评分<text class="u-p-l-10" style="color:#fd5123">{{item.gradeZL}}</text></text>
            </view>
            <view class="item-evaluate u-line-2">
              {{item.brief}}
            </view>
          </view>
        </view>

        <view class="item-footer">
          <text class="item-spName u-line-1">{{item.nackname}}</text>
          <text class="item-btn">免费咨询</text>
        </view>
      </view>
      <view :key="item.id" @click="go('shops/shopHome?id='+item.id)" class="shop-items"
            v-for="item in shopsList">
        <view class="item-body">
          <view class="item-cover">
            <image :src="item.img" mode="aspectFill"/>
            <view class="item-location">临沂</view>
          </view>
          <view class="item-info">
            <view class="shop-btn bg-gradual-orange">免费咨询</view>
            <view class="item-title u-line-2">{{item.nackname}}</view>
            <view class="item-tips">
              <text>严选</text>
              <text>保</text>
              <text>企业</text>
            </view>
            <view class="item-num">
              <text>服务雇主
                <text class="shop-num">708家</text>
              </text>
              <text>成交额
                <text class="shop-num">908.62万</text>
              </text>
              <text>好评率
                <text class="shop-num">100%</text>
              </text>
            </view>
            <view class="item-skilled u-line-2">
              <text>擅长：LOGO
                <text>|</text>
              </text>
              <text>包装设计
                <text>|</text>
              </text>
              <text>VI设计
                <text>|</text>
              </text>
              <text>宣传品设计
                <text>|</text>
              </text>
              <text>公装设计</text>
            </view>
            <view class="item-goods">
              <view class="item-goods-cover">
                <image src="https://yiqiwang360.com/images/app/logo.png" mode="aspectFill" class="item-goods-cover"></image>
              </view>
              <view class="item-goods-info">
                <view class="item-goods-title u-line-1">【九界】家庭新房装修公装购物空间家庭新房装修公装购物空间</view>
                <view class="text-orange">￥50</view>
                <view class="cuIcon-roundrightfill item-goods-icon"></view>
              </view>
            </view>

            <view class="item-evaluate u-line-1">”非常满意 帮我们解决了一个设计部 有需求我还会再来帮我们解决了一个设计部“</view>
          </view>
        </view>
      </view>
      <view class="person">
<!--        <view class="person-items" @click="wkdetail">-->
<!--          <view class="items-con">-->
<!--            <view class="items-top">-->
<!--              <image src="http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg"></image>-->
<!--              <u-button :custom-style="customStyle" shape="circle">可雇佣</u-button>-->
<!--              <view>-->
<!--                <text class="con-name u-margin-right-10">小桂圆文创品牌</text>-->
<!--                <text>|</text>-->
<!--                <text class="con-name">平面设计师</text>-->
<!--                <view class="job-ex u-margin-top-10">工作经验-->
<!--                  <text class="year">13年</text>-->
<!--                </view>-->
<!--              </view>-->
<!--              <view class="con-price">￥-->
<!--                <text class="price">200</text>-->
<!--                /月-->
<!--              </view>-->
<!--            </view>-->
<!--            <view class="u-border-bottom">-->
<!--            <view class="item-skilled u-line-1">-->
<!--              <text class="title">擅长：</text>-->
<!--              <text>LOGO-->
<!--                <text>|</text>-->
<!--              </text>-->
<!--              <text class="text-gray">包装设计-->
<!--                <text>|</text>-->
<!--              </text>-->
<!--              <text>VI设计-->
<!--                <text>|</text>-->
<!--              </text>-->
<!--              <text>宣传品设计-->
<!--                <text>|</text>-->
<!--              </text>-->
<!--              <text>公装设计</text>-->
<!--            </view>-->
<!--            <view class="introduce">-->
<!--              <text class="title">人才介绍：</text>-->
<!--              <text class="in-con">做有生命的设计，创造有价值的你。我们对待工作热情、认真负责，对人对事诚信认真！从事文创品牌设计，品牌</text>-->
<!--            </view>-->
<!--              <view class="case u-padding-bottom-20">-->
<!--                <view class="case-l">-->
<!--                  <text class="bg-gradual-orange anli">案例</text>-->
<!--&lt;!&ndash;                  <u-button :custom-style="anli" class="bg-gradual-orange" shape="square">案例</u-button>&ndash;&gt;-->
<!--                  <text class="u-margin-left-10">中药医疗科技公司品牌卡通</text>-->
<!--                </view>-->
<!--                <text class="cuIcon-right" style="color:#999999"></text>-->

<!--              </view>-->
<!--            </view>-->

<!--            <view class="con-bo">-->
<!--              <view class="cuIcon-shop">铭远 <text class="u-margin-left-10">临沂</text></view>-->
<!--             <view>-->
<!--              <u-button :custom-style="consult" class="bg-gradual-orange" shape="square">免费咨询</u-button>-->
<!--            </view>-->
<!--            </view>-->
<!--          </view>-->

<!--        </view>-->
<!--        <view class="person-items">-->
<!--          <view class="items-con">-->
<!--            <view class="items-top">-->
<!--              <image src="http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg"></image>-->
<!--              <u-button :custom-style="customStyle" shape="circle">可雇佣</u-button>-->
<!--              <view>-->
<!--                <text class="con-name u-margin-right-10">小桂圆文创品牌</text>-->
<!--                <text>|</text>-->
<!--                <text class="con-name">平面设计师</text>-->
<!--                <view class="job-ex u-margin-top-10">工作经验-->
<!--                  <text class="year">13年</text>-->
<!--                </view>-->
<!--              </view>-->
<!--              <view class="con-price">￥-->
<!--                <text class="price">200</text>-->
<!--                /月-->
<!--              </view>-->
<!--            </view>-->
<!--            <view class="u-border-bottom">-->
<!--              <view class="item-skilled u-line-1">-->
<!--                <text class="title">擅长：</text>-->
<!--                <text>LOGO-->
<!--                  <text>|</text>-->
<!--                </text>-->
<!--                <text class="text-gray">包装设计-->
<!--                  <text>|</text>-->
<!--                </text>-->
<!--                <text>VI设计-->
<!--                  <text>|</text>-->
<!--                </text>-->
<!--                <text>宣传品设计-->
<!--                  <text>|</text>-->
<!--                </text>-->
<!--                <text>公装设计</text>-->
<!--              </view>-->
<!--              <view class="introduce">-->
<!--                <text class="title">人才介绍：</text>-->
<!--                <text class="in-con">做有生命的设计，创造有价值的你。我们对待工作热情、认真负责，对人对事诚信认真！从事文创品牌设计，品牌</text>-->
<!--              </view>-->
<!--              <view class="case u-padding-bottom-20">-->
<!--                <view class="case-l">-->
<!--                  <text class="bg-gradual-orange anli">案例</text>-->
<!--                  &lt;!&ndash;                  <u-button :custom-style="anli" class="bg-gradual-orange" shape="square">案例</u-button>&ndash;&gt;-->
<!--                  <text class="u-margin-left-10">中药医疗科技公司品牌卡通</text>-->
<!--                </view>-->
<!--                <text class="cuIcon-right" style="color:#999999"></text>-->

<!--              </view>-->
<!--            </view>-->

<!--            <view class="con-bo">-->
<!--              <view class="cuIcon-shop">铭远 <text class="u-margin-left-10">临沂</text></view>-->
<!--              <view>-->
<!--                <u-button :custom-style="consult" class="bg-gradual-orange" shape="square">免费咨询</u-button>-->
<!--              </view>-->
<!--            </view>-->
<!--          </view>-->

<!--        </view>-->
      </view>
    </view>

  </view>

</template>

<script>
  import uniNavBar from "@/static/components/uni-nav-bar/uni-nav-bar.vue"

  export default {
    components: {uniNavBar},

    data () {
    return {
      search_btn: {
        color: '#FF9251'
      },
      customStyle:{
        width:"70rpx",
        top:"90rpx",
        left:'35rpx',
        height:'35rpx',
        color:'white',
        fontSize:'20rpx',
        background:'#77D9A3',
        position:'absolute',
      },
      consult:{
        width:'130rpx',
        height:'45rpx',
        color:'white',
        fontSize:'23rpx',
      },
      anli:{
        width:'60rpx',
        height:'35rpx',
        color:'white',
        fontSize:'23rpx',
      },
      current: 0, // tabs组件的current值，表示当前活动的tab选项
      swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
      total:'',
      sort:'',
      options1: [{
        label: '默认排序',
        value: 1,
      },
        {
          label: '距离优先',
          value: 2,
        },
        {
          label: '价格优先',
          value: 3,
        }
      ],
      options2: [{
        label: '默认排序',
        value: 1,
      },
        {
          label: '向上',
          value: 2,
        },
        {
          label: '向下',
          value: 3,
        }
      ],
      list: [{
        name: '服务'
      }, {
        name: '店铺'
      },{
        name: '案例'
      }, {
        name: '优选',
      },
        {
          name: '威客',
        },
        {
          name: '动态',
        }],
      query: '',
      type: 'goods',
      keyword:'111',
      emptyShow: false,
      goodsList: [],
      shopsList: [],
      casesList: [],
      qualityList: [],
      personList: [],
      discussList: [],
      newsList: []
    }
  },
  onLoad (options) {
    this.query = options.query
    this.getSearchList()
  },
  methods: {
      goSearch(){
        this.getSearchList()
      },
    wkdetail(){
        uni.navigateTo({
          url:'/pages/index/wkDetail'
        })

    },
    async getSearchList () {
      const { data: res } = await this.$request({
        url: 'Search',
        data: {
          query: this.query,
          type: this.type,
          page: 1
        }
      })
      this.goodsList = res.data.goods
      this.shopsList = res.data.sp
      this.casesList = res.data.cases
      this.qualityList = res.data.quality
      this.personList = res.data.person
      this.discussList = res.data.discuss
      if (res.data.content) {
        this.newsList = res.data.content
      } else {
        this.newsList = []
      }
      //判断全部为空的吸星大法
      let dataNum = res.data.goods.length+res.data.sp.length+res.data.cases.length+res.data.quality.length+res.data.person.length+res.data.discuss.length
      console.log(dataNum)
      if (dataNum>1){
        this.emptyShow = false
      }else{
        this.emptyShow = true
      }


    },
    go (path) {
      uni.navigateTo({
        url: '/pages/' + path
      })
    },
    goBack(){
      uni.navigateBack({
        delta: 1
      });
    },
    tabsChange(index) {
      this.current = index;
      if (index===0){
        this.type='goods'
      }
      if (index===1){
        this.type='sp'
      }
      if (index===2){
        this.type='cases'
      }
      if (index===3){
        this.type='quality'
      }
      if (index===4){
        this.type='person'
      }
      if (index===5){
        this.type='discuss'
      }
      console.log(this.type)
      this.getSearchList()
      },
    transition(e) {
      let dx = e.detail.dx;
      this.$refs.uTabs.setDx(dx);
    },
  }
}
</script>
<style lang="scss">
page {
  background: #f8f8f8;
}
</style>
<style lang="scss" scoped>

  .tool-items{
    .u-dropdown__menu{
      display: block!important;
      .u-dropdown__menu__item{
        display: inline-block!important;
        width: 100rpx!important;
      }
    }
    .tool-left{
      flex: 1;
    }
    .tool-right{
      width: 200rpx;
    }
  }
.search-page {
  background: #f8f8f8;
.search{
  padding:50rpx;
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
}
  .type{
    margin-right: 20rpx;
    text-align: center;
    margin-top: 20rpx;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    text{
      padding-right: 50rpx;
    }
    image{
      width:40rpx;
      height:35rpx;
    }
  }

  .goods{
    background: #ffffff;
  }
  .goods-item{
    padding:20rpx;
    background:#ffffff;
    border-radius: 10rpx;
    margin: 0 20rpx 20rpx;
    .item-body{
      display: flex;
      .item-cover{
        width:190rpx;
        image{
          border-radius: 10rpx;
          width:170rpx;
          height:170rpx
        }
      }
    }
    .item-info{
      flex: 1;
      padding-top: 2rpx;
      .item-title{
        margin-bottom:2rpx;
      }
      .item-fee{
        font-size: 24rpx;
        .item-price{
          color: #fd5123;
          font-size: 22rpx;
          margin-right: 20rpx;
          .item-num{
            font-size: 30rpx;
          }
        }
        .item-sales{
          color: #666666;
          margin-right: 20rpx;
        }
        .item-rate{
          color: #666666;
          margin-right: 20rpx;
        }
      }
      .item-evaluate{
        margin-top: 10rpx;
        margin-bottom: 10rpx;
        background: #f8f8f8;
        color: #888888;
        font-size: 22rpx;
        padding: 4rpx 10rpx;
      }
      .item-tips{
        margin-bottom: 14rpx;

        text{
          font-size: 18rpx;
          margin-right: 10rpx;
          color:#fd5123;
          border: 1rpx solid #fd5123;
          padding:2rpx 6rpx;
          border-radius: 4rpx;
        }
      }
    }
    .item-footer{
      margin-top: 6rpx;
      display: flex;
      .item-spName{
        flex: 1;
        margin:0 20rpx 0 0;
        color:#666666;
        font-size: 24rpx;
        padding-right: 100rpx;
      }
      .item-btn{
        text-align: center;
        border-radius: 10rpx;
        width: 140rpx;
        background: #fd5123;
        color:white;
        padding:0 20rpx;
        font-size: 24rpx;
        line-height: 40rpx;
      }
    }

  }
  .shop-items{
    padding:20rpx;
    background:#ffffff;
    border-radius: 10rpx;
    margin: 0 20rpx 20rpx;


    .item-body{
      position: relative;
      display:flex;
      .item-cover{
        width: 120rpx;
        .item-location{
          text-align: center;
          padding-right: 20rpx;
          font-size: 22rpx;
          color: #888888;
        }
        image{
          border-radius: 10rpx;
          width:90rpx;
          height: 90rpx;
        }
      }
      .item-info{
        flex: 1;
        padding-top: 10rpx;
        overflow: hidden;
        .item-title{
          margin-bottom:2rpx;
          padding-right: 160rpx;
        }
        .item-tips{
          margin-bottom: 14rpx;
          text{
            font-size: 18rpx;
            margin-right: 10rpx;
            color:#fd5123;
            border: 1rpx solid #fd5123;
            padding:2rpx 6rpx;
            border-radius: 4rpx;
          }
        }
        .item-num{
          font-size: 22rpx;
          margin-bottom: 14rpx;
          .shop-num{
            color:#fd5123;
            padding: 0 15rpx 0 10rpx;
          }
        }


        .item-skilled{
          font-size: 22rpx;
          color: #777777;
          margin-bottom: 14rpx;
        }
        .item-evaluate{
          margin-top: 10rpx;
          margin-bottom: 10rpx;
          color: #888888;
          font-size: 22rpx;
          padding: 4rpx 10rpx;
        }
        .shop-btn{
          position: absolute;
          color:#ffffff;
          padding:5rpx 10rpx;
          border-radius: 5rpx;
          font-size: 22rpx;
          top:20rpx;
          right:30rpx;
        }
        .item-goods{
          position: relative;
          display: flex;
          background: #F3F3F3;
          .item-goods-info{
            flex: 1;
            font-size: 24rpx;
            padding-right: 50rpx;
            .item-goods-title{
              margin: 10rpx 0;
            }
          }

          .item-goods-icon{
            font-size:28rpx;
            color:#C8C8CA;
            position: absolute;
            top:33rpx;
            right:20rpx;
          }
        }
        .item-goods-cover{
          width:130rpx;
          image{
            border-radius: 10rpx;
            width:110rpx;
            height: 80rpx;
          }
        }
      }
    }
  }
  .person-items{
    border-radius: 5rpx;
    margin:30rpx;
    padding:30rpx;
    position:relative;
    background:white;
    image{
      margin-right: 20rpx;
      width:90rpx;
      border-radius: 50%;
      height: 90rpx;
    }
    .items-con{
      .items-top{
        display: flex;
        flex-direction: row;
        .con-name{
          margin-left:5rpx;
          font-weight: 700;
        }

        .con-price{
          font-weight: 500;
          position: absolute;
          right:20rpx;
          font-size: 22rpx;
          color:#E2762A;
          justify-content: right;
          .price{
            font-size: 32rpx;
          }
        }
        .job-ex{
          color:#6A6A6A;
        }
        .year{
          font-size: 25rpx;
          color:#C5E8F3;
        }
      }
      .item-skilled{
        line-height: 60rpx;
        .title{
          color:black;
          font-weight: 700;
        }
        text{
          font-size: 24rpx;
          padding:0 2rpx;
          color:#999999;
        }
      }
      .introduce{
        padding:0 0rpx 20rpx;
        .title{
          font-size: 23rpx;
          color:black;
          font-weight: 700;
        }
        .in-con{
          font-size: 24rpx;
          color:#999999;
        }
      }
      .case{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .case-l{
          align-items: center;
          display: flex;
          flex-direction: row;
          .anli{
            color:white;
            height:30rpx;
            width:60rpx;
            text-align: center;
            font-size: 20rpx;
          }
          text{
            font-size: 25rpx;
          }
        }
      }
      .con-bo{
        color:#999999;
        line-height: 80rpx;
        display: flex;
        font-size: 23rpx;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }
    }

  }
}
</style>
