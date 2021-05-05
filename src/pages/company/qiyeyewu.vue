<template>
    <view class="page u-border-top">
        <view class="con" @click="detail">
            <u-image mode="aspectFit"
                     width="50" height="50"
                     src="https://api.yiqiwang360.com/images/app/app_logo2.png"></u-image>
            <view class="con-r u-margin-left-30">
                <view>眼红红或</view>
                <view class="tips">
                    <text>开采</text>
                    <text>天然气</text>
                </view>
                <view>
                    <text class="gray">当前融资轮次：</text>
                    <text>微信号：</text>
                </view>
                <view>
                    <text class="gray">所属地：</text>
                    <text>微信号：</text>
                </view>
                <view>
                    <text class="gray">成立日期：</text>
                    <text>微信号：</text>
                </view>
                <view>
                    <text class="gray">关联公司：</text>
                    <text>微信号：</text>
                </view>
                <view>
                    <text class="gray">简介：</text>
                    <text>微信号：</text>
                </view>
            </view>
            <u-icon name="arrow-right" color="#959595" size="35"></u-icon>
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
            detail(id){
                uni.navigateTo({
                    url:'/pages/company/qiyeyewuD'
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
    page{
        background: #f8f8f8;
    }
</style>
<style lang="scss" scoped>
    .gray{
        color: #959595;
    }
    .con{
        display: flex;
        background: white;
        padding:25rpx;
        .con-r{
            flex:1;
            line-height: 50rpx;
            .tips{
                text{
                    padding:8rpx 14rpx;
                    background: #EFF2F1;
                    margin-right: 20rpx;
                    border-radius: 8rpx;
                }
            }
            .flex{
                justify-content: space-between;

            }
        }
    }
</style>