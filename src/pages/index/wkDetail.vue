<template>
    <view class="page">
        <view class="nav">

                <u-tabs
                        :list="tabList"
                        :is-scroll="false"
                        :current="current"
                        inactive-color="#666666"
                        active-color="#fd5123"
                        @change="tabChange" class="u-margin-left-80 u-padding-left-80 u-padding-right-80"
                ></u-tabs>

            <view>
                <u-icon name="clock" color="#9A9A9A" size="40" class="u-margin-right-60"></u-icon>
                <u-icon name="more-dot-fill" color="#9A9A9A" size="40"></u-icon>
            </view>
    </view>
        <view class="top-bg">
        </view>
        <view class="wk-con">
            <view class="person">
                <image src="http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg"></image>
                <u-button :custom-style="customStyle" shape="circle">可雇佣</u-button>
            </view>
            <view class="name u-margin-top-70">
                <view class="position">争流博老师 | 设计师</view>
                <view class="price">￥ 1000.00/月</view>
            </view>
            <view class="con-tags">
                <text>PPT</text>
                <text>宣传品设计</text>
                <text>LOGO</text>
                <text>VI设计</text>
            </view>
            <view class="time">
                <u-icon name="clock" color="#9A9A9A" size="30"></u-icon>
                <text class="u-margin-left-20">工作时间：<text>工作日、周末</text></text>
            </view>
            <view class="time">
                <u-icon name="car" color="#9A9A9A" size="30"></u-icon>
                <text class="u-margin-left-20">工作方式：<text>远程工作</text></text>
            </view>
        </view>
        <view class="yiqibaos">
            <view>
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
                <view class="smtex u-margin-top-20 u-line-1">服务商已缴纳保证金<text class="ensure">￥5000</text>，承诺交易出问题先行赔付</view>
            </view>
        </view>
        <view class="service">
            <view class="ser-title u-border-bottom">
                <text class="cuIcon-titles text-red u-font-28"></text>
                <text class="u-font-28">服务标准</text>
            </view>
        </view>
        <view class="personbg u-margin-top-20">
            <view class="ser-title u-border-bottom">
                <text class="cuIcon-titles text-red u-font-28"></text>
                <text class="u-font-28">人才背景</text>
            </view>
            <view class="cu-bar" style="margin-bottom: -30rpx;margin-left: -25rpx;">
                <view class="action sub-title">
                    <text class="title text-black">自我介绍</text>
                    <text class="bg-gradual-orange" style="width:3rem;left:0.1em;height:0.5em;bottom:0.1em"></text>
                    <!-- last-child选择器-->
                </view>
            </view>
            <view class="u-margin-left-50">
                <text class="text-gray" style="font-size: 23rpx">本公司立足于电子医疗光电信息产业发展需求，提供工业外观设计，结构设计，仪器产品打样(塑料手板，硅胶塑膜，金属CNC加工)，后期小批量供货，模具跟踪</text>
            </view>
            <view class="cu-bar" style="margin-bottom: -30rpx;margin-left: -25rpx;">
                <view class="action sub-title">
                    <text class="title text-black">工作经历</text>
                    <text class="bg-gradual-orange" style="width:3rem;left:0.1em;height:0.5em;bottom:0.1em"></text>
                    <!-- last-child选择器-->
                </view>
            </view>
            <view class="job">
                <view style="display: flex;flex-direction: row;margin-left: -53rpx;align-items: center">
                    <ul>
                        <li class="text-gray text-xl"></li>
                    </ul>
                    上海君枚工业设计有限公司
                </view>
                <view>2014年至今</view>
            </view>
            <view class="u-margin-left-50">
            <text class="text-gray" style="font-size: 23rpx">本公司立足于电子医疗光电信息产业发展需求，提供工业外观设计，结构设计，仪器产品打样(塑料手板，硅胶塑膜，金属CNC加工)，后期小批量供货，模具跟踪</text>
            </view>
            <view class="cu-bar" style="margin-bottom: -30rpx;margin-left: -25rpx;">
                <view class="action sub-title">
                    <text class="title text-black">教育经历</text>
                    <text class="bg-gradual-orange" style="width:3rem;left:0.1em;height:0.5em;bottom:0.1em"></text>
                    <!-- last-child选择器-->
                </view>

            </view>
            <view class="job">
                <view style="display: flex;flex-direction: row;margin-left: -53rpx;align-items: center">
                    <ul>
                        <li class="text-gray text-xl"></li>
                    </ul>
                    江苏工业学院
                </view>
                <view>1999-2003</view>
            </view>
            <text class="u-margin-left-30">机械本科</text>
            <view class="cu-bar" style="margin-bottom: -30rpx;margin-left: -25rpx;">
                <view class="action sub-title" style="width:200rpx;">
                    <text class="title text-black">证书&资质</text>
                    <text class="bg-gradual-orange" style="width:4rem;left:0.1em;height:0.5em;bottom:0.1em"></text>
                    <!-- last-child选择器-->
                </view>
            </view>
            <view class="yingye">
            <u-image src="http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg" width="100%" height="300"></u-image>
            <text class="u-margin-top-20">企业营业执照</text>
            </view>
        </view>
        <view class="cu-bar bg-white tabbar border shop goods-footer u-border-top">
            <button
                    class="action"
                    @click="collectHandle(goodDetail.id)"
                    :style="goodDetail.collect === 1 ? 'color:#fd5123' : ''"
            >
                <view
                        class="u-font-35"
                        :class="goodDetail.collect === 1 ? 'cuIcon-likefill' : 'cuIcon-like'"
                ></view>
                <view>{{goodDetail.collect === 1 ? '已收藏' : '收藏'}}</view>
            </button>
            <view class="action">
                <view class="cuIcon-shop"></view>商家主页
            </view>
            <view class="action" @click="showPhones">
                <view class="cuIcon-dianhua"></view>电话咨询
            </view>
            <view class="btn-group">
                <button
                        class="cu-btn round shadow-blur"
                        style="color:#ffffff;background-image: linear-gradient(120deg, #ff5a00, #ff2b0f);"
                >立即下单</button>
                <!--        立即下单-->
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                src: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
                customStyle:{
                    width:"70rpx",
                    top:"150rpx",
                    left:'50rpx',
                    height:'35rpx',
                    color:'white',
                    fontSize:'20rpx',
                    background:'#77D9A3',
                    position:'absolute',
                },
                tabList:[
                    {
                    name:'人才'
                },
                    {
                        name:'详情'
                    },
                    {
                        name:'评价'
                    },
                ],
                current:0,
                goodDetail: {},
                storage: {
                    token: '',
                    uid: 0,
                    info: {}
                },
                // 电话咨询
                phonesShow: false,
                phonesList: [],
                tips: {
                    text: '点击号码直接拨打',
                    color: '#909399',
                    fontSize: 26
                }
            }
        },
        methods:{
            tabChange (index) {
                this.current = index;
            },
            showPhones () {
                if (this.storage.token === '') {
                    uni.redirectTo({
                        url: '/pages/mine/login'
                    })
                    return uni.showToast({
                        title: '未登录，请先登录',
                        icon: 'none',
                        duration: 2000
                    })
                }
                this.phonesShow = true
            },
            // 收藏操作
            async collectHandle (gid) {
                if (this.storage.token === '') {
                    uni.redirectTo({
                        url: '/pages/mine/login'
                    })
                    return uni.showToast({
                        title: '未登录，请登录',
                        icon: 'none',
                        duration: 2000
                    })
                }
                const { data: res } = await this.$request({
                    url: 'myhome/addcollect',
                    data: {
                        uid: this.storage.uid,
                        token: this.storage.token,
                        gid: gid
                    }
                })
                this.getGoodDetail(this.gid)
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
    .nav{
        background: white;
        display: flex;
        flex-direction: row;
        align-items: center;
        view{
            flex:1;
        }
    }
.top-bg{
    background: #231c45
    url("https://yiqiwang360.com/images/app/sjbj.png") no-repeat fixed
    0% 0%/100% auto;
    height:300rpx;
}
.wk-con {
    padding: 30rpx;
    position: relative;
    background: white;
    height:300rpx;
    .person{
        position: absolute;
        top:-100rpx;
        image {
        margin-right: 20rpx;
        width: 180rpx;
        border-radius: 50%;
        height: 180rpx;
    }
    }
    .name{
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .position{
            font-size: 32rpx;
        }
        .price{
            color:#fd5123;
        }
    }

    .con-tags {
        margin: 10rpx 0 20rpx;
        color: #fd5123;
        text {
            margin: 0 10rpx 0 0;
            font-size: 20rpx;
            padding:4rpx;
            border-radius: 4rpx;
            border: 1rpx solid #fd5123;
        }
    }
    .time{
        font-size: 24rpx;
        margin:10rpx 0 0;
        color:#9A9A9A ;
    }

}
.yiqibaos{
    background: white;
    margin:20rpx 0;
    padding: 25rpx;
    .bao-items{
        display: flex;
        .title-icon{
            image{
                vertical-align: text-top;
                height: 30rpx;
                width: 100rpx;
                margin-right: 20rpx;
            }
        }
        .cuIcon-right{
            width: 40rpx;
        }
        .item{
            flex: 1;
            display:inline-block;
            text{
                font-size: 24rpx;
                line-height: 30rpx;
            }
            image{
                margin-right: 2rpx;
                vertical-align: bottom;
                width:38rpx;
                height:30rpx;
            }
        }
    }
    .ensure{
        margin-left: 8rpx;
        color:#FE9A3A;
    }
    .smtex{
        letter-spacing: 2rpx;
        font-size: 21rpx;
    }
}
    .service{
        padding:0 30rpx;
        background: white;
        .ser-title{
            font-weight: 600;
            line-height: 90rpx;
        }
    }
    .goods-footer {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .personbg{
        height:1500rpx;
        padding:0 30rpx;
        background: white;
        .ser-title{
            font-weight: 600;
            line-height: 90rpx;
        }
        .job{
            margin:10rpx 0;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
    }
   .edu{
       font-size: 22rpx;
       margin-bottom:70rpx;
   }
    .yingye{
        margin:20rpx 0;
        text-align: center;
    }
</style>