<template>
    <view class="page u-border-top">
        <view class="tab u-border-bottom">
            <u-tabs
                    :list="List"
                    :current="current"
                    @change="Change" gutter="90"
                    bar-width="50" font-size="30"
                    active-color="#E12216" bg-color="none" inactive-color="#000000"
            ></u-tabs>
        </view>
        <view class="con">
            <view class="name">www.baidu.com</view>
            <view>
                <text class="gray">网站名称：</text>
                <text>111111</text>
            </view>
            <view>
                <text class="gray">域名：</text>
                <text>111111</text>
            </view>
            <view>
                <text class="gray">审核日期：</text>
                <text>111111</text>
            </view>
            <view>
                <text class="gray">网站备案/许可证号：</text>
                <text>111111</text>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                List: [{
                    name: '网站备案'
                }, {
                    name: '历史网站备案'
                }],
                current:0,
            }
        },
        methods:{
            Change(index) {
                this.current = index;
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
    .gray{
        color:#959595;
    }
    .tab{
        background: white;
        text-align: center;
    }
    .con{
        background: white;
        line-height: 50rpx;
        padding:25rpx 20rpx;
        .name{
            color:#fd5123;
            margin-bottom: 20rpx;
        }
    }
</style>