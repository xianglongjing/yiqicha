<template>
    <view class="page">
        <view class="white">
            <uni-nav-bar :status-bar="true" left-icon="back" :fixed="true" :border="false" :shadow="false" @clickLeft="goBack">
                <view class="inline-block u-border-bottom" style="width:100%;padding:20rpx">
                    <u-search
                            :action-style="search_btn"
                            :animation="true"
                            @custom="goSearch"
                            @search="goSearch"
                            bg-color="#f8f8f8"
                            input-align="left" style="width: 560rpx;height:30rpx; padding:30rpx 0;background: #f8f8f8"
                            placeholder="请输入公司名称/人名" shape="square"
                            v-model="keyword"
                    ></u-search>
                </view>
            </uni-nav-bar>
            <view class="sou u-margin-top-50">
                <text>最近搜索</text>
            </view>
            <view class="shops">
                <view class="shop" @click="shop">
                    <u-image src="http://images.yiqiwang360.com/yiqicha/gongsiming.png" width="60" height="60"></u-image>
                    <text>北京锤子数码科技有限公司</text>
                </view>
                <view class="shop u-margin-left-25" @click="man">
                    <u-image src="http://images.yiqiwang360.com/yiqicha/renwu.png" width="60" height="60"></u-image>
                    <text>贾跃亭</text>
                </view>
                <view class="shop" @click="shop">
                    <u-image src="http://images.yiqiwang360.com/yiqicha/gongsiming.png" width="60" height="60"></u-image>
                    <text>北京锤子数码科技有限公司</text>
                </view>
                <view class="shop u-margin-left-25" @click="man">
                    <u-image src="http://images.yiqiwang360.com/yiqicha/renwu.png" width="60" height="60"></u-image>
                    <text>贾跃亭</text>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                search_btn:{
                   color:'black'
                },
                keyword:''
            }
        },
        methods:{
            goBack(){
                uni.navigateBack({
                    delta: 1
                });
            },
            shop(){
                uni.navigateTo({
                    url:'/pages/danger/shopDetail'
                })
            },
            man(){
                uni.navigateTo({
                    url:'/pages/danger/manDetail'
                })
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
    .white{
        background: white;
        padding:10rpx 30rpx;
        .sou{
            color:#ABABAB;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
    .shops{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        .shop{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            border-radius: 5rpx;
            padding:10rpx 20rpx;
            margin:10rpx 0 10rpx 0;
            background-color: #F8F5F7;
            text{
                margin-left:10rpx;
            }
        }
    }
</style>