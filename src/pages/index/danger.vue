<template>
    <view class="page">
        <view class="redbg">
<!--            <uni-nav-bar :status-bar="true" left-icon="back" :fixed="true" :border="false" :shadow="false" @clickLeft="goBack">-->
<!--            <view slot="default">-->
<!--                查风险-->
<!--            </view>-->
<!--        </uni-nav-bar>-->
            <image
                    src="http://images.yiqiwang360.com/yiqicha/fengxian.png"
                    style="width: 100%;height: 100%;"></image>
            <view class="zi">
                <view class="title">风险信息 一网打尽</view>
            </view>
            <view class="sou">
                <u-search
                        :action-style="search_btn"
                        :animation="true"
                        @custom="goSearch"
                        @click="go" disabled
                        bg-color="#f8f8f8"
                        input-align="left" height="80"
                        placeholder="请输入人名/公司名" shape="square"
                        v-model="query"
                ></u-search>
                <view style="text-align: left;margin:40rpx 0 10rpx;">热门搜索</view>
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
        <view class="infor">
            <view>
                <view class="title red">什么是风险信息?</view>
                <view class="u-margin-top-10">专指公司或人员自身及其周边的风险，包括但不限于开庭公告，法律诉讼，清算信息与信息变更的预警提醒等。</view>
            </view>
            <view class="u-margin-top-50">
                <view class="title red">了解风险信息有什么用途?</view>
                <view class="u-margin-top-10">专指公司或人员自身及其周边的风险，包括但不限于开庭公告，法律诉讼，清算信息与信息变更的预警提醒等。</view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                query:'',
                search_btn:{
                    color:'white'
                }
            }
        },
        methods:{
            go(){
                uni.navigateTo({
                    url:'/pages/danger/search'
                })
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
        },



    }
</script>

<style lang="scss" scoped>
    page{
        background: #f8f8f8;
    }
    .red{
        color:#E75D54;
    }
    .redbg{
        /*background-size: 250rpx 200rpx;*/
        /*background: url("http://images.yiqiwang360.com/yiqicha/fengxian.png") no-repeat;*/
        position: relative;
        /*color:white;*/
        /*padding:50rpx 20rpx;*/
        height:580rpx;
        width:100%;
        .zi{
            color:white;
            position: absolute;
            top:50rpx;
            left:30rpx;
            .title{
               margin-left:170rpx;
                font-size: 45rpx;
            }
        }
        .sou{
            color:white;
            position: absolute;
            top:160rpx;
            left:35rpx;
            right:35rpx;
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
                background-color: rgba(255,255,255,0.2);
                text{
                    margin-left:10rpx;
                }
            }
        }
    }
    .infor{
        position: absolute;
        top:540rpx;
        left:30rpx;
        padding:40rpx 30rpx;
        width:92%;
        border-radius: 10rpx;
        background: white;
        .title{
            font-size: 30rpx;
            font-weight: 650;
        }
    }
</style>