<template>
    <view class="page">
        <view class="white">
        </view>
        <view class="matter">
            请完成以下事项，激活服务商店铺
        </view>
        <view class="com-shop">
            <view class="shop-l">
                <view class="title">完善店铺信息</view>
                <text class="shop-desc">完善店铺信息，让雇主更加了解您</text>
            </view>
            <u-image src="/static/image/finish.png" mode="aspectFit" width="150" height="150"></u-image>
        </view>
        <view class="realname">
            <view class="shop-l">
                <view class="title">实名认证</view>
                <text class="shop-desc">完成实名认证，让雇主更加信任你</text>
            </view>
            <u-button :custom-style="finish" shape="circle">去完成</u-button>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return{
                finish:{
                    background:'#fd5123',
                    width:'145rpx',
                    height:'59rpx',
                    fontSize:'23rpx',
                    color:'white',
                    marginLeft:'70rpx'

                }
            }
        }
    }
</script>

<style lang="scss">
    page {
        background:#F8F8F8;
    }
</style>
<style lang="scss" scoped>
.white{
    background:white;
    height:200rpx;
}
    .matter{
        color:#626262;
        padding:30rpx 0;
        text-align: center;
        font-size: 34rpx;
    }
    .com-shop{
        height: 150rpx;
        padding:20rpx 30rpx;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        background: white;
        width:93%;
        margin:0 auto;
        .shop-l{
            .title{
                font-size: 34rpx;
            }
            .shop-desc{
                color:#929292;
                font-size: 28rpx;
            }
        }
    }
.realname{
    height: 150rpx;
    padding:20rpx;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    background: white;
    width:93%;
    margin:30rpx auto;
    .shop-l{
        .title{
            font-size: 34rpx;
        }
        .shop-desc{
            color:#929292;
            font-size: 28rpx;
        }
    }
}
</style>