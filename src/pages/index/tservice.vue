<template>
    <view class="page">
        <view class="services-all">
            <view class="services-title">热门服务</view>
            <view class="services-items">
                <view class="services-item" @click="go('ll/llai')">
                    <view class="item-img">
                        <image mode="aspectFit" src="https://yiqiwang360.com/images/yiqicha/laolai.png"></image>
                    </view>
                <view class="item-title">查老赖</view>
                </view>
                <view class="services-item" @click="go('index/phone')">
                    <view class="item-img">
                        <image mode="aspectFit" src="https://yiqiwang360.com/images/yiqicha/dianhua.png"></image>
                    </view>
                    <view class="item-title">找电话</view>
                </view>
                <view class="services-item" @click="kaifa">
                    <view class="item-img">
                        <image mode="aspectFit" src="https://yiqiwang360.com/images/yiqicha/laoban.png"></image>
                    </view>
                    <view class="item-title">身边老板</view>
                </view>
                <view class="services-item" @click="go('index/nearshop')">
                    <view class="item-img">
                        <image mode="aspectFit" src="https://yiqiwang360.com/images/yiqicha/gongsi.png"></image>
                    </view>
                    <view class="item-title">附近公司</view>
                </view>
                <view class="services-item" @click="go('index/global')">
                    <view class="item-img">
                        <image mode="aspectFit" src="https://yiqiwang360.com/images/yiqicha/quanqiu.png"></image>
                    </view>
                    <view class="item-title">全球企业</view>
                </view>
                <view class="services-item" @click="go('index/shangbiao')">
                    <u-image mode="aspectFit" width="90" height="90" src="https://yiqiwang360.com/images/yiqicha/shangbiao.png"></u-image>
                    <text>查商标</text>
                </view>
                <view class="services-item" @click="go('index/danger')">
                    <u-image mode="aspectFit" width="90" height="90" src="https://yiqiwang360.com/images/yiqicha/fengxian.png"></u-image>
                    <text>查风险</text>
                </view>
                <view class="services-item" @click="go('index/beian')">
                    <u-image mode="aspectFit" width="90" height="90" src="https://yiqiwang360.com/images/yiqicha/beian.png"></u-image>
                    <text>查备案</text>
                </view>
            </view>
        </view>
        <view class="main">
            <view class="title u-margin-bottom-20">企业信息</view>
            <view class="flex">
                <view class="item" @click="kaifa">
                    <u-image mode="aspectFit" width="90" height="90" src="http://images.yiqiwang360.com/yiqicha/quanbu/quanbu(7).png"></u-image>
                    <text>招聘</text>
                </view>
                <view class="item" @click="kaifa">
                    <u-image mode="aspectFit" width="90" height="90" src="http://images.yiqiwang360.com/yiqicha/quanbu/quanbu(8).png"></u-image>
                    <text>查网址</text>
                </view>
                <view class="item" @click="kaifa">
                    <u-image mode="aspectFit" width="90" height="90" src="http://images.yiqiwang360.com/yiqicha/quanbu/quanbu(9).png"></u-image>
                    <text>查税号</text>
                </view>
                <view class="item" @click="kaifa">
                    <u-image mode="aspectFit" width="90" height="90" src="http://images.yiqiwang360.com/yiqicha/quanbu/quanbu(10).png"></u-image>
                    <text>资质证书</text>
                </view>
            </view>
                <view class="flex1">
                <view class="item" @click="kaifa">
                    <u-image mode="aspectFit" width="90" height="90" src="http://images.yiqiwang360.com/yiqicha/quanbu/quanbu(11).png"></u-image>
                    <text>中国香港企业</text>
                </view>
                <view class="item" @click="kaifa">
                    <u-image mode="aspectFit" width="90" height="90" src="http://images.yiqiwang360.com/yiqicha/quanbu/quanbu(12).png"></u-image>
                    <text>中国台湾企业</text>
                </view>
                <view class="item" @click="kaifa">
                    <u-image mode="aspectFit" width="90" height="90" src="http://images.yiqiwang360.com/yiqicha/quanbu/quanbu(13).png"></u-image>
                    <text>社会组织</text>
                </view>
                </view>

        </view>
        <view class="main">
            <view class="title u-margin-bottom-20">风险信息</view>
            <view class="flex">
                <view class="item" @click="kaifa">
                    <u-image mode="aspectFit" width="90" height="90" src="http://images.yiqiwang360.com/yiqicha/quanbu/quanbu(7).png"></u-image>
                    <text>诉讼</text>
                </view>
                <view class="item" @click="kaifa">
                    <u-image mode="aspectFit" width="90" height="90" src="http://images.yiqiwang360.com/yiqicha/quanbu/quanbu(14).png"></u-image>
                    <text>法院公告</text>
                </view>
                <view class="item" @click="kaifa">
                    <u-image mode="aspectFit" width="90" height="90" src="http://images.yiqiwang360.com/yiqicha/quanbu/quanbu(3).png"></u-image>
                    <text>税务评级</text>
                </view>
                <view class="item" @click="kaifa">
                    <u-image mode="aspectFit" width="90" height="90" src="http://images.yiqiwang360.com/yiqicha/quanbu/quanbu(4).png"></u-image>
                    <text>进出口信用</text>
                </view>
            </view>
            <view class="flex1">
                <view class="item u-margin-left-30" @click="kaifa">
                    <u-image mode="aspectFit" width="90" height="90" src="http://images.yiqiwang360.com/yiqicha/quanbu/quanbu(5).png"></u-image>
                    <text>司法拍卖</text>
                </view>
                <view class="item u-margin-left-50" @click="kaifa">
                    <u-image mode="aspectFit" width="90" height="90" src="http://images.yiqiwang360.com/yiqicha/quanbu/quanbu(6).png"></u-image>
                    <text>开庭公告</text>
                </view>
            </view>

        </view>
        <view class="main">
            <view class="title u-margin-bottom-20">知识产权</view>
            <view class="flex">
                <view class="item" @click="kaifa">
                    <u-image mode="aspectFit" width="90" height="90" src="http://images.yiqiwang360.com/yiqicha/quanbu/quanbu(15).png"></u-image>
                    <text>图标</text>
                </view>
                <view class="item" @click="kaifa">
                    <u-image mode="aspectFit" width="90" height="90" src="http://images.yiqiwang360.com/yiqicha/quanbu/quanbu(16).png"></u-image>
                    <text>专利</text>
                </view>
                <view class="item" @click="kaifa">
                    <u-image mode="aspectFit" width="90" height="90" src="http://images.yiqiwang360.com/yiqicha/quanbu/quanbu(17).png"></u-image>
                    <text>著作权</text>
                </view>
                <view class="item" @click="kaifa">
                    <u-image mode="aspectFit" width="90" height="90" src="http://images.yiqiwang360.com/yiqicha/quanbu/quanbu(8).png"></u-image>
                    <text>网址</text>
                </view>
            </view>

        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {

            }
        },
        methods:{
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
            async kaifa () {
                uni.showToast({
                    title: '开发中',
                    icon:'none',
                    duration: 2000
                });
            },
        }
    }
</script>
<style>
    page{
        background: #f8f8f8;
    }
</style>
<style lang="scss" scoped>
    .services-all{
        margin-bottom:20rpx;
        background: #ffffff;

        .services-title{
            padding:20rpx 20rpx;
            font-weight: bold;
            font-size: 30rpx;
        }
        .services-items{

            .services-item{
                display: inline-block;
                text-align: center;
                width: 25%;
                margin:10rpx 0rpx;
                height:140rpx;
                .item-img{
                    margin: 0 auto;
                    width: 90rpx;
                    height: 90rpx;
                    img,image{
                        display: inline-block;
                        width: 90rpx;
                        height: 90rpx;
                    }
                }
                .item-title{
                    padding:10rpx 0rpx;
                    font-size: 24rpx;
                }
            }
        }
        .flex1{
            display: flex;
            flex-direction: row;
            align-items: center;
            .item{
                flex-direction: column;
                display: flex;
                align-items: center;
                text{
                    padding:10rpx 15rpx;
                    text-align: center;
                }
            }
        }
    }

</style>