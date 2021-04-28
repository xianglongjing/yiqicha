<template>
    <view class="con">
        <view class="top">
            <view class="flex">
                <u-image mode="aspectFit" border-radius="50%" width="70" height="70"
                         src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=807498736,2545362365&fm=26&gp=0.jpg"
                ></u-image>
                <view class="u-margin-left-20">
                    <text>腾讯证券</text>
                    <view class="gray num u-margin-top-10">
                        <view>5小时前</view>
                        <view class="shu">|</view>
                        <view>阅读1.2万+</view>
                    </view>
                </view>
            </view>
            <u-button :customStyle="focus">已关注</u-button>
        </view>
        <view class="title">
            经历被摘牌再上市的青岛美泰科技，系圣元集团中国控股子公司
        </view>
        <view class="desc">
            <u-image mode="aspectFit" width="70" height="70"
                     src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=807498736,2545362365&fm=26&gp=0.jpg"
            ></u-image>
            <view class="u-margin-left-20">
                经历被摘牌再上市的青岛美泰科技，系圣元集团中国控股子公司
            </view>
        </view>
        <view class="shop u-margin-top-30">
            <view class="ti">提到</view>
            <view class="name">
                <text>美泰科技</text>
                <u-icon name="arrow-right" color="#0281FE" size="30"></u-icon>
            </view>
        </view>
        <view class="last">
            <view class="flex" @click="kaifa">
                <image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/wode/wode (4).png"></image>
                <text>分享</text>
            </view>
            <view @click="kaifa">
                <u-icon name="thumb-up" size="30" color="#919191"></u-icon>
                <text>点赞</text>
            </view>
            <view @click="kaifa">
                <u-icon name="chat" size="30" color="#919191"></u-icon>
                <text>评论</text>
            </view>
        </view>
    </view>
</template>
<script>
    export default{
        data(){
            return {
                focus:{
                    width:'130rpx',
                    height:'60rpx',
                    color:'#919191',
                    border:'2rpx solid #919191'
                }
            }
        },
        methods:{
            async kaifa () {
                uni.showToast({
                    title: '开发中',
                    icon:'none',
                    duration: 2000
                });
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
        color:#919191;
    }
    .con{
        background:white;
        padding:25rpx;
        .top{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .flex{
                width:80%;
                .num{
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items:center;
                    font-size: 27rpx;
                    .shu{
                        margin:0 20rpx;
                    }
                }
            }
        }
        .title{
            margin:15rpx 0;
            font-size: 32rpx;
        }
        .desc{
            display: flex;
            flex-direction: row;
            align-items: center;
            padding:20rpx;
            background:#F3F3F3;
        }
        .shop{
            display: flex;
            align-items: center;
            flex-direction: row;
            border-radius: 150rpx;
            text-align: center;
            .ti{
                background:#0281FE;
                color:white;
                width:100rpx;
                height:70rpx;
                line-height:70rpx;
                border-top-left-radius: 10rpx;
                border-bottom-left-radius: 10rpx;
                .name{
                    background:#E6F6FF;
                    color:#E7F5FE;
                    width:150rpx;
                    height:70rpx;
                    border-top-right-radius: 10rpx;
                    border-bottom-right-radius: 10rpx;
                }
            }
        }

    }
    .last{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin:20rpx 0;
        view{
            flex:1;
        }
        .flex{
            display: flex;
            justify-content: center;
            image{
                width:35rpx;
                height:35rpx;
            }
        }
    }
</style>