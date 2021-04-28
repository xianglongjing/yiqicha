<template>
    <view class="page u-border-top">
        <view class="white">
            <view class="name u-border-bottom">换换一款2</view>
            <view class="flex">
                <view class="item">
                    <view>软件简称</view>
                    <text>-</text>
                </view>
                <view class="item u-padding-left-20 u-border-left">
                    <view>版本号</view>
                    <text>-</text>
                </view>
            </view>
            <view class="flex">
                <view class="item">
                    <view>登记号</view>
                    <text>-</text>
                </view>
                <view class="item u-padding-left-20 u-border-left">
                    <view>分类号</view>
                    <text>-</text>
                </view>
            </view>
            <view class="flex">
                <view class="item">
                    <view>首次发表日期</view>
                    <text>-</text>
                </view>
                <view class="item u-padding-left-20 u-border-left">
                    <view>登记批准日期</view>
                    <text>-</text>
                </view>
            </view>
            <view class="flex">
                <view>
                    <view>著作权人（国籍）</view>
                    <text>-</text>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        name: "zhuzuoquanDe"
    }
</script>
<style>
    page{
        background: #f8f8f8;
    }
</style>
<style lang="scss" scoped>
.white{
    background: white;
    padding:0 25rpx;
    .name{
        padding:25rpx 0;
    }
    .flex{
        margin:25rpx 0;
        justify-content: space-between;
        align-items: center;
        .item{
            width:50%;
        }
    }
}
</style>