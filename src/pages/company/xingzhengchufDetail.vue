<template>
    <view class="page u-border-top">
        <view class="first u-border-bottom">
            <view class="item">
                <text class="gray">处罚名称</text>
                <view>公路安全哈哈哈</view>
            </view>
            <view class="item">
                <text class="gray">决定书文号</text>
                <view>300999</view>
            </view>
            <view class="item">
                <text class="gray">处罚事由</text>
                <view>公路上hin安全哈哈哈</view>
            </view>
        </view>
        <view class="second u-border-bottom">
            <view class="flex">
                <view>
                    <text>处罚状态</text>
                    <view>-</view>
                </view>
                <view class="flex-r">
                    <text class="shu">|</text>
                    <view class="u-padding-left-20">
                        <text>处罚决定日期</text>
                        <view>2023-10-23</view>
                    </view>
                </view>
            </view>
            <view class="flex">
                <view>
                    <text>处罚类别</text>
                    <view>-</view>
                </view>
                <view class="flex-r">
                    <text class="shu">|</text>
                    <view class="u-padding-left-20">
                        <text>处罚类别2</text>
                        <view>2023-10-23</view>
                    </view>
                </view>
            </view>
        </view>
        <view class="first">
            <view class="item">
                <text class="gray">处罚依据</text>
                <view>公路安全哈哈哈</view>
            </view>
            <view class="item">
                <text class="gray">处罚结果</text>
                <view>300999</view>
            </view>
            <view class="item">
                <text class="gray">处罚机关</text>
                <view>公路上hin安全哈哈哈</view>
            </view>
        </view>
    </view>
</template>
<script>
    export default {
        data() {
            return {
                list: [{
                    name: '法律诉讼7'
                }, {
                    name: '历史法律诉讼'
                }],
                current: 0
            }
        },
        methods: {
            change(index) {
                this.current = index;
            }
        }
    }
</script>
<style>
    page {
        background: #f8f8f8;
    }
</style>
<style lang="scss" scoped>
    .gray {
        color: #959595;
    }

    .first {

        background: white;
        padding: 25rpx 20rpx;
        line-height: 50rpx;
    }
    .second {
        background: white;
        padding: 25rpx 20rpx;
        line-height: 50rpx;
        .flex{
            padding:10rpx 0;
            justify-content:space-between;
            align-items: center;
            view{
                flex:1;
            }
            .flex-r{
                display: flex;
                align-items: center;
                .shu{
                    color:#f7f7f7;
                    font-size: 50rpx;
                }
            }
        }
    }
</style>
