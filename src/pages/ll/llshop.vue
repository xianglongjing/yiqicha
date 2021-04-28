<template>
    <view class="page">
        <view class="info">
            <view class="info-top">
                <view class="flex">
                    <u-image src="http://images.yiqiwang360.com/yiqicha/gongsiming.png" width="85" height="85"></u-image>
                    <text class="u-margin-left-30">北京锤子数码科技有限公司</text>
                </view>
                <text class="red">老赖</text>
            </view>
            <view class="identity">
                <u-read-more :shadow-style="shadowStyle" :toggle="true" show-height="170" ref="uReadMore">
                    <u-parse :html="content" @load="parseLoaded"></u-parse>
                </u-read-more>
            </view>
        </view>
        <view class="num">共 <text class="red">3</text>条失信记录</view>
        <view class="record u-border-bottom" @click="go">
            <view class="re-l">
                <view> <text class="gray">案号：</text>2021浙02执22号</view>
                <view> <text class="gray">执行法院：</text>宁波市中级人民法院</view>
                <view> <text class="gray">履行情况：</text>全部未履行</view>
                <view> <text class="gray">发布日期：</text>2021-03-08</view>
            </view>
            <u-icon name="arrow-right" size="40" color="#989898"></u-icon>
        </view>
        <view class="record u-border-bottom">
            <view class="re-l">
                <view> <text class="gray">案号：</text>2021浙02执22号</view>
                <view> <text class="gray">执行法院：</text>宁波市中级人民法院</view>
                <view> <text class="gray">履行情况：</text>全部未履行</view>
                <view> <text class="gray">发布日期：</text>2021-03-08</view>
            </view>
            <u-icon name="arrow-right" size="40" color="#989898"></u-icon>
        </view>
        <view class="record u-border-bottom">
            <view class="re-l">
                <view> <text class="gray">案号：</text>2021浙02执22号</view>
                <view> <text class="gray">执行法院：</text>宁波市中级人民法院</view>
                <view> <text class="gray">履行情况：</text>全部未履行</view>
                <view> <text class="gray">发布日期：</text>2021-03-08</view>
            </view>
            <u-icon name="arrow-right" size="40" color="#989898"></u-icon>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                shadowStyle: {
                    backgroundImage: "none",
                    paddingTop: "0",
                    color:'#E12A23'
                },
                content: `北京锥子数码科技有限公司所在地：北京市 注册资本：20000万人民币 企业类型：有限责任公司登记状态：在营登记机关：开发区分局 注册地址：北京市经济`,
            }
        },
        methods:{
            go(){
                uni.navigateTo({
                    url:'/pages/ll/shixinshop'
                })
            },
            parseLoaded() {
                this.$refs.uReadMore.init();
            }
        }
    }
</script>
<style>
    page{
        background: #f8f8f8;
    }
</style>
<style lang="scss" scoped>
    .red{
        color:#E12A23;
    }
    .info{
        background: white;
        padding:30rpx;
        .info-top{
            display: flex;
            flex-direction: row;
            justify-content:space-between;
            align-items: center;
            .flex{
                align-items: center;
                font-size: 32rpx;
                font-weight: 600;
            }
            .red{
                border:1rpx solid #E12A23;
                padding:10rpx 13rpx;
                border-radius: 10rpx;
            }
        }
        .identity{
            margin-top: 30rpx;
            line-height: 50rpx;
        }
    }
    .num{
        padding:30rpx;
    }
    .record{
        background:white;
        padding:30rpx;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .re-l{
            line-height: 50rpx;
            .gray{
                color:#989898;
            }
        }
    }
</style>