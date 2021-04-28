<template>
    <view class="page">
        <view class="shop u-border-bottom">
            <text class="gray">关联公司：</text>
            <text class="red">北京锤子数码科技有限公司</text>
        </view>
        <view class="agree u-border-bottom">
            <view class="title">买卖合同纠纷</view>
            <view>
                <text class="gray">案号：（2020）</text>
                <text>粤0114民初12345号</text>
            </view>
            <view>
                <text class="gray">原告/上诉人：</text>
                <text>北京锤子数码科技有限公司</text>
            </view>
            <view>
                <text class="gray">被告/被上诉人：</text>
                <text>张三</text>
            </view>
            <view>
                <text class="gray">开庭时间：</text>
                <text>2020-11-05：10：56</text>
            </view>
        </view>
        <view class="agree u-border-bottom">
            <view class="title">劳动争议</view>
            <view>
                <text class="gray">案号：（2020）</text>
                <text>粤0114民初12345号</text>
            </view>
            <view>
                <text class="gray">原告/上诉人：</text>
                <text>北京锤子数码科技有限公司</text>
            </view>
            <view>
                <text class="gray">被告/被上诉人：</text>
                <text>张三</text>
            </view>
            <view>
                <text class="gray">开庭时间：</text>
                <text>2020-11-05：10：56</text>
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

    }
</script>

<style lang="scss" scoped>
    .red{
        color:#E75D54;
    }
    .gray{
        color:#A9A9A9;
    }
.shop{
    padding:25rpx;
}
    .agree{
        padding:10rpx 25rpx 25rpx;
        font-size: 26rpx;
        line-height:40rpx;
        .title{
            font-weight: 600;
            padding:20rpx 0;
            font-size: 28rpx;
        }
    }
</style>