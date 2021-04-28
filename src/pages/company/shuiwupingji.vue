<template>
    <view class="page u-border-top">
        <view class="flex u-border-bottom">
            <view>
                <view>
                    <text class="gray">评价年度：</text>
                    <text>2019</text>
                </view>
                <view>
                    <text class="gray">纳税信用级别：</text>
                    <text>A</text>
                </view>
            </view>
            <u-icon name="arrow-right" size="40" color="#777777"></u-icon>
        </view>
    </view>
</template>
<script>
    export default {
        data() {
            return {

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
    .flex{
        justify-content: space-between;
        padding:30rpx 25rpx;
        background:white;
        line-height: 50rpx;
    }
</style>
