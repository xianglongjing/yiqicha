<template>
    <view class="page u-border-top">
        <view class="con">
            <u-image mode="aspectFit" width="80" height="80"
                     src="https://img2.baidu.com/it/u=1004953359,2131419137&fm=11&fmt=auto&gp=0.jpg"></u-image>
        <view class="right">
            <view class="name">临沂市铭远管理服务有限公司</view>
            <view class="shop-bo">
                <view class="bo-item">
                    <text class="title">法人代表</text>
                    <text>代表名称</text>
                </view>
                <view style="font-size:40rpx;color:#ffffff;margin:0 30rpx 0 20rpx;text-align: center" class="u-border-right"> 1</view>
                <view class="bo-item">
                    <text class="title">注册资金</text>
                    <text>500万人民币</text>
                </view>
                <view style="font-size:40rpx;color:#ffffff;margin:0 30rpx 0 20rpx" class="u-border-right u-margin-right-30"> 1</view>
                <view class="bo-item">
                    <text class="title">成立时间</text>
                    <text>2019-05-09</text>
                </view>
            </view>
        </view>
        </view>
    </view>
</template>

<script>
    export default {
        name: "money"
    }
</script>
<style>
    page{
        background: #f8f8f8;
    }
</style>
<style lang="scss" scoped>
.con{
    padding:30rpx 25rpx;
    background: white;
    display: flex;
    .right{
        flex:1;
        margin-left:20rpx;
        .name{
            color:#66A4DE;
            font-size: 30rpx;
            font-weight: 600;
            line-height: 50rpx;
        }
        .shop-bo{
            /*margin-left:50rpx;*/
            /*width:100%;*/
            display: flex;
            flex-direction: row;
            align-items: center;
            /*flex-wrap: wrap;*/
            .title{
                color:#979797;
                line-height:50rpx;
            }
            .bo-item{
                font-size: 25rpx;
                /*flex:1;*/
                display: flex;
                align-items: center;
                /*justify-content: center;*/
                flex-direction: column;
                /*text-align: center;*/
            }
        }
    }
}
</style>