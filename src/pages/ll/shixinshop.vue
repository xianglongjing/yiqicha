<template>
    <view class="page">
        <view class="infor u-border-bottom">
            <view class="item">
                <view class="gray">被执行人姓名/名称</view>
                <view>北京锤子数码科技有限公司</view>
            </view>
            <view class="item">
                <view class="gray">法人代表</view>
                <view>贾跃亭</view>
            </view>
            <view class="item">
                <view class="gray">身份证号码/组织机构代码</view>
                <view>123456789***123456</view>
            </view>
        </view>
        <view class="infor u-border-bottom">
            <view class="item">
                <view class="gray">执行法院</view>
                <view>宁波市中级人民法院</view>
            </view>
            <view class="item">
                <view class="gray">立案日期</view>
                <view>2021-03-26</view>
            </view>
            <view class="item">
                <view class="gray">案号</view>
                <view>2021浙02执22号</view>
            </view>
        </view>
        <view class="infor u-border-bottom">
            <view class="item">
                <view class="gray">执行依据文号</view>
                <view>2021浙02执22号</view>
            </view>
            <view class="item">
                <view class="gray">做出执行依据单位</view>
                <view>宁波市中级人民法院</view>
            </view>
            <view class="item">
                <view class="gray">生效法律文书确定的义务</view>
                <view>支付赔偿款及利息8888888888.88元</view>
            </view>
        </view>
        <view class="infor u-border-bottom">
            <view class="item">
                <view class="gray">被执行人的履行情况</view>
                <view>全部未履行</view>
            </view>
            <view class="item">
                <view class="gray">失信被执行人行为具体情形</view>
                <view>违反财产报告制度</view>
            </view>
            <view class="item">
                <view class="gray">发布日期</view>
                <view>2021-03-26</view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {

            }
        }
    }
</script>
<style>

</style>
<style lang="scss" scoped>
    .gray{
        color:#989898;
    }
    .infor{
        font-size: 30rpx;
        padding:0 30rpx 10rpx;
        .item{
            margin:20rpx;
            line-height: 50rpx;
        }
    }
</style>