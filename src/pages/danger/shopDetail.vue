<template>
    <view class="page">
       <view class="white flex">
           <u-image src="http://images.yiqiwang360.com/yiqicha/gongsiming.png" width="60" height="60"></u-image>
           <text class="name">北京锤子数码科技有限公司</text>
       </view>
        <view class="con u-margin-top-30">
            <view class="item u-border-bottom">
                <text class="title">开庭公告</text>
                <text class="warn">警示</text>
            </view>
            <view class="item2 u-border-bottom" @click="go">
                <text>该公司起诉他人或公司的开庭公告</text>
                <text class="gray">共2条 <u-icon name="arrow-right" size="26"></u-icon></text>
            </view>
            <view class="item2" @click="go">
                <text>该公司起诉他人或公司的开庭公告</text>
                <text class="gray">共2条 <u-icon name="arrow-right" size="26"></u-icon></text>
            </view>
        </view>
        <view class="con u-margin-top-30">
            <view class="item u-border-bottom">
                <text class="title">法律诉讼</text>
                <text class="warn">警示</text>
            </view>
            <view class="item2 u-border-bottom" @click="go">
                <text>该公司起诉他人或公司的开庭公告</text>
                <text class="gray">共2条 <u-icon name="arrow-right" size="26"></u-icon></text>
            </view>
            <view class="item2" @click="go">
                <text>该公司起诉他人或公司的开庭公告</text>
                <text class="gray">共2条 <u-icon name="arrow-right" size="26"></u-icon></text>
            </view>
        </view>
        <view class="con u-margin-top-30">
            <view class="item u-border-bottom">
                <text class="title">送达公告</text>
                <text class="warn">警示</text>
            </view>
            <view class="item2 u-border-bottom" @click="go">
                <text>该公司起诉他人或公司的开庭公告</text>
                <text class="gray">共2条 <u-icon name="arrow-right" size="26"></u-icon></text>
            </view>
            <view class="item2" @click="go">
                <text>该公司起诉他人或公司的开庭公告</text>
                <text class="gray">共2条 <u-icon name="arrow-right" size="26"></u-icon></text>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {

            }
        },
        methods:{
            go(){
                uni.navigateTo({
                    url:'/pages/danger/notice'
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
    .gray{
        color:#A9A9A9;
    }
.white{
    background: white;
    padding:30rpx;
}
    .flex{
        align-items: center;
        .name{
            font-weight: 600;
            margin-left:10rpx;
        }
    }
    .con{
        background: white;
        .item{
            padding:30rpx;
            .warn{
                border:1rpx solid #EFCF7E;
                color:#EFCF7E;
                padding:2rpx 8rpx;
                font-size: 24rpx;
                margin-left:10rpx;
                border-radius: 10rpx;
            }
        }
        .item2{
            padding:30rpx;
            display: flex;
            justify-content: space-between;
        }
    }
</style>