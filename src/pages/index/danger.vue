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
                <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/tg/tg.png"
                         height="100"
                         width="450"></u-image>
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
                <view class="hot-laolai">
                    <scroll-view class="scroll-view_H" scroll-x="true">
                        <view class="u-margin-top-10">
                            <view class="lai-item" @click="detail">
                                <view class="lai-img">
                                    <u-image src="http://images.yiqiwang360.com/yiqicha/gongsiming.png" width="60" height="60"></u-image>
                                </view>
                                <view class="lai-name">北京锤子数码科技有限公司</view>
                            </view>
                        </view>
                    </scroll-view>
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
            async hotsearch () {
                const { data: res } = await this.$request({
                    method: 'GET',
                    url: 'applets/hotsearch',
                    data: {
                        type:'brand'
                    }
                })
                this.hot =res
            },
            detail(id){
                uni.navigateTo({
                    url:'/pages/shangbiao/sbDetail?id='+id
                })
            },
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
            left:135rpx;
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

        .hot-laolai{
            white-space: nowrap;
            width: 100%;
            .lai-item{
                display: inline-block;
                border-radius: 5rpx;
                padding: 10rpx 20rpx;
                margin-right: 20rpx;
                background-color: rgba(255,255,255,0.2);
                line-height: 30rpx;
                .lai-img{
                    display: inline-block;
                    width: 60rpx;
                    height: 60rpx;
                    font-size: 0;
                    vertical-align: middle;
                }
                .lai-name{
                    display: inline-block;
                    margin-left:20rpx;
                    vertical-align: middle;
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