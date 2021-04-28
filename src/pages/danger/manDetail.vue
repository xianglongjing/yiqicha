<template>
    <view class="page">
        <view class="tou u-border-bottom">
            <u-image src="http://images.yiqiwang360.com/yiqicha/renwu.png" width="60" height="60"></u-image>
            <text class="u-margin-left-20">贾跃亭</text>
        </view>
        <view class="con u-margin-top-30">
            <view class="item u-border-bottom">
                <text class="title">法律诉讼</text>
                <text class="warn">高风险</text>
            </view>
            <view class="item2 u-border-bottom">
                <view @click="go">
                    <text>该老板在成都锤子科技集团有限公司(有限合作)</text>
                    <view class="red">有股权冻结信息</view>
                </view>
                <text class="gray">共2条 <u-icon name="arrow-right" size="26"></u-icon></text>
            </view>
            <view class="item2 u-border-bottom">
                <view @click="go">
                    <text>该老板在成都锤子科技集团有限公司(有限合作)</text>
                    <view class="red">有股权冻结信息</view>
                </view>
                <view class="gray">共2条 <u-icon name="arrow-right" size="26"></u-icon></view>
            </view>
            <view class="item2 u-border-bottom">
                <view>
                    <text>该老板在成都锤子科技集团有限公司(有限合作)</text>
                    <view class="red">有股权冻结信息</view>
                </view>
                <view class="gray">共2条 <u-icon name="arrow-right" size="26"></u-icon></view>
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
            go(){
                uni.navigateTo({
                    url:'/pages/danger/freeze'
                })
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
    .gray{
        color:#A9A9A9;
    }
    .red{
        color:#E75D54;
    }
.tou{
    display: flex;
    align-items: center;
    background: white;
    height:90rpx;
    padding:25rpx 25rpx 40rpx;
}
    .con{
        background: white;
        .item{
            padding:25rpx 30rpx;
            .warn{
                border:1rpx solid #E75D54;
                color:#E75D54;
                padding:2rpx 9rpx;
                font-size: 24rpx;
                margin-left:10rpx;
                border-radius: 10rpx;
            }
        }
        .item2{
            font-size: 26rpx;
            line-height: 45rpx;
            padding:25rpx 30rpx;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
</style>