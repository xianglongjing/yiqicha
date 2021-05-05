<template>
    <view class="page u-border-top">
        <view class="tab u-border-bottom">
            <u-tabs
                    :list="List"
                    :current="current"
                    @change="Change"
                    bar-width="50" font-size="30"
                    active-color="#E12216" bg-color="none" inactive-color="#000000"
            ></u-tabs>
        </view>
        <view class="con">
            <view>
                <text class="gray">检查实施机关：</text>
                <text>111111</text>
            </view>
            <view>
                <text class="gray">类型：</text>
                <text>111111</text>
            </view>
            <view>
                <text class="gray">结果：</text>
                <text>111111</text>
            </view>
            <view>
                <text class="gray">日期：</text>
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
                    name: '市场监管'
                }, {
                    name: '产品质量监督'
                },
                    {
                        name: '认证监督司'
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
    }
</style>