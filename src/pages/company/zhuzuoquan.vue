<template>
    <view class="page">
        <view class="tab u-border-bottom">
            <u-tabs
                    :list="List"
                    :current="current"
                    @change="Change" gutter="90"
                    bar-width="50" font-size="30"
                    active-color="#E12216" bg-color="none" inactive-color="#000000"
            ></u-tabs>
        </view>
        <view class="con u-border-bottom" @click="detail">
            <view>
                <view class="name">哈哈哈哈或</view>
                <view class="item">
                    <text class="gray">软件简称：</text>
                    <text class="gray">-</text>
                </view>
                <view class="item">
                    <text class="gray">登记号：</text>
                    <text class="gray">-</text>
                </view>
                <view class="item">
                <text class="gray">登记批准日期：</text>
                <text class="gray">2021-12-21</text>
            </view>
            </view>
            <u-icon name="arrow-right" size="35" color="#777777"></u-icon>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                List: [{
                    name: '软件著作权'
                }, {
                    name: '作品著作权'
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
                    url:'/pages/company/zhuzuoquanDe'
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .gray{
        color:#959595;
    }
    .con{
        padding:30rpx 25rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .name{
            font-size: 35rpx;
            margin-bottom: 20rpx;
        }
        .item{
            line-height: 50rpx;
        }
    }
</style>