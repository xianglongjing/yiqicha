<template>
    <view class="page">
        <view class="top">
            拍摄时请确保身份证边角完整，字迹清晰，亮度均匀拍摄遇到问题，请 <text class="here">点击这里</text>
        </view>
        <view class="front">
            <u-image src="/static/image/card1.png" mode="aspectFit" width="300" height="200"></u-image>
            <view class="front-r">
                <view class="btns">
                    <u-button :custom-style="sao">点击扫描</u-button>
                    <text class="or">or</text>
                    <u-button :custom-style="push">上传照片</u-button>
                </view>
                <view class="desc">身份证正面 <text class="person">人像面</text></view>
            </view>
        </view>
        <view class="front">
            <u-image src="/static/image/card2.png" mode="aspectFit" width="300" height="200"></u-image>
            <view class="front-r">
                <view class="btns">
                    <u-button :custom-style="sao">点击扫描</u-button>
                    <text class="or">or</text>
                    <u-button :custom-style="push">上传照片</u-button>
                </view>
                <view class="desc">身份证背面 <text class="person">国徽面</text></view>
            </view>
        </view>
        <u-button :custom-style="next">下一步</u-button>
        <view class="support">
            由旷视科技提供技术支持
        </view>
        <view class="bg-white tiao">
            <u-steps :list="numList" :current="0" mode="number" active-color="#fd5123"></u-steps>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                sao:{
                    background:'#fd5123',
                    width:'130rpx',
                    height:'60rpx',
                    color:'white',
                    fontSize:'25rpx',
                    marginRight:'10rpx'
                },
                push:{
                    background:'#F4A444',
                    width:'130rpx',
                    height:'60rpx',
                    color:'white',
                    fontSize:'25rpx',
                    marginLeft:'10rpx'
                },
                next:{
                    background:'#CDCDCD',
                    width:'92%',
                    height:'80rpx',
                    color:'white',
                    fontSize:'30rpx',
                    margin:'20rpx auto'
                },
                numList: [{
                    name: ''
                }, {
                    name: ''
                }, {
                    name: ''
                }, {
                    name: ''
                }, ],
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
.top{
    padding:30rpx;
    .here{
        border-bottom: 1rpx solid #6284A9;
        color:#6284A9;
        font-weight: 620;
    }
}
    .front{
        padding:30rpx 20rpx;
        background: white;
        width:92%;
        border-radius: 10rpx;
        margin:0 auto 25rpx;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        .front-r{
            text-align: center;
            .btns{
                margin-bottom: 20rpx;
                display: flex;
                flex-direction: row;
                align-items: center;
                .or{
                    color:#969696;
                }
            }
            .desc{
                font-size: 25rpx;
                .person{
                    padding-left:10rpx;
                    color:#F4A444;
                }
            }

        }
    }
    .support{
        font-size: 24rpx;
        text-align: center;
    }
    .tiao{
        padding-top: 20rpx;
        position: absolute;
        bottom: 0;
        left:0;
        width:100%;
        height:100rpx;
    }
</style>