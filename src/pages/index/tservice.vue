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
                    <view class="item-img">
                        <image mode="aspectFit" src="https://yiqiwang360.com/images/yiqicha/shangbiao.png"></image>
                    </view>
                    <view class="item-title">查商标</view>
                </view>
                <view class="services-item" @click="go('index/danger')">
                    <view class="item-img">
                        <image mode="aspectFit" src="https://yiqiwang360.com/images/yiqicha/fengxian.png"></image>
                    </view>
                    <view class="item-title">查风险</view>
                </view>
                <view class="services-item" @click="go('index/beian')">
                    <view class="item-img">
                        <image mode="aspectFit" src="https://yiqiwang360.com/images/yiqicha/beian.png"></image>
                    </view>
                    <view class="item-title">查备案</view>
                </view>
            </view>
            <view class="services-title">企业信息</view>
            <view class="services-items">
                <view class="services-item" @click="go('ll/llai')">
                    <view class="item-img">
                        <image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/quanbu/quanbu(7).png"></image>
                    </view>
                    <view class="item-title">招聘</view>
                </view>
                <view class="services-item" @click="go('ll/llai')">
                    <view class="item-img">
                        <image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/quanbu/quanbu(8).png"></image>
                    </view>
                    <view class="item-title">查网址</view>
                </view>
                <view class="services-item" @click="go('ll/llai')">
                    <view class="item-img">
                        <image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/quanbu/quanbu(9).png"></image>
                    </view>
                    <view class="item-title">查税号</view>
                </view>
                <view class="services-item" @click="go('ll/llai')">
                    <view class="item-img">
                        <image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/quanbu/quanbu(10).png"></image>
                    </view>
                    <view class="item-title">资质证书</view>
                </view>
                <view class="services-item" @click="go('ll/llai')">
                    <view class="item-img">
                        <image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/quanbu/quanbu(11).png"></image>
                    </view>
                    <view class="item-title">中国香港企业</view>
                </view>
                <view class="services-item" @click="go('ll/llai')">
                    <view class="item-img">
                        <image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/quanbu/quanbu(12).png"></image>
                    </view>
                    <view class="item-title">中国台湾企业</view>
                </view>
                <view class="services-item" @click="go('ll/llai')">
                    <view class="item-img">
                        <image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/quanbu/quanbu(13).png"></image>
                    </view>
                    <view class="item-title">社会组织</view>
                </view>
            </view>
            <view class="services-title">风险信息</view>
            <view class="services-items">
                <view class="services-item" @click="go('ll/llai')">
                    <view class="item-img">
                        <image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/quanbu/quanbu(7).png"></image>
                    </view>
                    <view class="item-title">诉讼</view>
                </view>
                <view class="services-item" @click="go('ll/llai')">
                    <view class="item-img">
                        <image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/quanbu/quanbu(14).png"></image>
                    </view>
                    <view class="item-title">法院公告</view>
                </view>
                <view class="services-item" @click="go('ll/llai')">
                    <view class="item-img">
                        <image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/quanbu/quanbu(3).png"></image>
                    </view>
                    <view class="item-title">税务评级</view>
                </view>
                <view class="services-item" @click="go('ll/llai')">
                    <view class="item-img">
                        <image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/quanbu/quanbu(4).png"></image>
                    </view>
                    <view class="item-title">进出口信用</view>
                </view>
                <view class="services-item" @click="go('ll/llai')">
                    <view class="item-img">
                        <image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/quanbu/quanbu(5).png"></image>
                    </view>
                    <view class="item-title">司法拍卖</view>
                </view>
                <view class="services-item" @click="go('ll/llai')">
                    <view class="item-img">
                        <image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/quanbu/quanbu(6).png"></image>
                    </view>
                    <view class="item-title">开庭公告</view>
                </view>
            </view>
            <view class="services-title">知识产权</view>
            <view class="services-items">
                <view class="services-item" @click="go('ll/llai')">
                    <view class="item-img">
                        <image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/quanbu/quanbu(15).png"></image>
                    </view>
                    <view class="item-title">图标</view>
                </view>
                <view class="services-item" @click="go('ll/llai')">
                    <view class="item-img">
                        <image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/quanbu/quanbu(16).png"></image>
                    </view>
                    <view class="item-title">专利</view>
                </view>
                <view class="services-item" @click="go('ll/llai')">
                    <view class="item-img">
                        <image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/quanbu/quanbu(17).png"></image>
                    </view>
                    <view class="item-title">著作权</view>
                </view>
                <view class="services-item" @click="go('ll/llai')">
                    <view class="item-img">
                        <image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/quanbu/quanbu(8).png"></image>
                    </view>
                    <view class="item-title">网址</view>
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
        padding-bottom:80rpx;
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