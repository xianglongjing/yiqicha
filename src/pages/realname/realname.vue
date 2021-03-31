<template>
    <view class="page">
        <view class="title">
            选择你的实名方式
        </view>
        <view class="bg" :style ="bg">
            <view>
                <view class="bg-title">个人实名 <text class="cuIcon-right"></text></view>
                <view class="english">individual</view>
                <view class="heng">-</view>
            </view>
        </view>
        <view class="bg" :style ="shop">
            <view>
                <view class="bg-title">企业实名 <text class="cuIcon-right"></text></view>
                <view class="english">enterprise</view>
                <view class="heng">-</view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                bg: {
                    backgroundImage: "url(https://yiqiwang360.com/images/wx/realname.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "750rpx auto",
                    margin:'0rpx auto',
                    borderRadius:"10rpx"
                },
                shop: {
                    backgroundImage: "url(https://yiqiwang360.com/images/wx/realshop.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "750rpx auto",
                    margin:'30rpx auto',
                    borderRadius:"10rpx"
                },
            }
        }
    }
</script>

<style lang="scss" scoped>
.title{
    margin:80rpx;
    text-align: center;
    font-weight: 602;
    font-size: 39rpx;
}
    .bg{
        padding:60rpx 40rpx;
        width:90%;
        height:300rpx ;
        .bg-title{
            font-size: 36rpx;
            font-weight: 700;
            text{
                font-weight: normal;
            }
        }
        .english{
            letter-spacing: 4rpx;
            line-height: 50rpx;
            font-weight: normal;
            font-size: 30rpx;
            color:#949494;
        }
        .heng{
            font-weight: 700;
            font-size: 80rpx;
        }
    }
</style>