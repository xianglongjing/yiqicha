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
        <view class="flex u-border-bottom" @click="detail">
            <view>
                <view>
                    <text>许可文件名称：</text>
                    <text>派去好好</text>
                </view>
                <view>
                    <text>许可文件编号：</text>
                    <text>12222388</text>
                </view>
                <view>
                    <text>有效期自：</text>
                    <text>-</text>
                </view>
                <view>
                    <text>有效期至：</text>
                    <text>-</text>
                </view>
                <view>
                    <text>许可机关：</text>
                    <text>派去好好</text>
                </view>
                <view>
                    <text>数据来源：</text>
                    <text>派去好好</text>
                </view>
                <view>
                    <text>许可内容：</text>
                    <text>派去好好</text>
                </view>
            </view>
            <u-icon name="arrow-right" color="#959595" size="40"></u-icon>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                List: [{
                    name: '行政许可'
                }, {
                    name: '历史行政许可'
                }],
                current:0,
            }
        },
        methods:{
            Change(index) {
                this.current = index;
            },
            detail(){
                uni.navigateTo({
                    url:'/pages/company/xingzhengxukeDe'
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
    .tab{
        background: white;
        text-align: center;
    }
.flex{
    background:white;
    padding:25rpx;
    line-height: 50rpx;
    justify-content: space-between;
}
</style>