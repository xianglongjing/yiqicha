<template>
    <view class="page">
        <view class="more">
            <view class="title u-border-bottom">上传营业执照 <text class="red">(非三证各一执照请到医企网电脑端认证)</text></view>
            <view class="more-con":style ="bg">
                <u-button :custom-style="bus" shape="circle"><text class="cuIcon-camera camera"></text>上传三证合一营业执照</u-button>
            </view>
        </view>
        <view class="more u-margin-top-30">
            <view class="title u-border-bottom">上传法人身份证</view>
            <view class="more-con" :style ="zheng">
                <u-button :custom-style="card" shape="circle"><text class="cuIcon-camera camera"></text>上传身份证正面</u-button>
            </view>
            <view class="more-con" :style ="fan">
                <u-button :custom-style="card" shape="circle"><text class="cuIcon-camera camera"></text>上传身份证背面</u-button>
            </view>
        </view>
        <u-button :custom-style="next">下一步</u-button>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                bg: {
                    backgroundImage: "url(" + require("../../static/image/cardbusi.png") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "520rpx 280rpx",
                    margin:'40rpx 100rpx 0',
                    textAlign:'center',
                    borderRadius:"10rpx"
                },
                zheng: {
                    backgroundImage: "url(" + require("../../static/image/cardhui1.png") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "520rpx 280rpx",
                    margin:'20rpx 100rpx 0',
                    textAlign:'center',
                    borderRadius:"10rpx"
                },
                fan: {
                    backgroundImage: "url(" + require("../../static/image/cardhui2.png") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "520rpx 280rpx",
                    margin:'0rpx 100rpx',
                    textAlign:'center',
                    borderRadius:"10rpx"
                },
                bus:{
                    marginBottom:'80rpx',
                    background:'#ADADAD',
                    padding:'0 45rpx',
                    height:'80rpx',
                    color:'white',
                    marginLeft:'60rpx',
                    marginTop:'60rpx',
                    fontSize:'24rpx',
                    textAlign:'center'
                },
                card:{
                    marginBottom:'80rpx',
                    background:'#ADADAD',
                    padding:'0 45rpx',
                    height:'80rpx',
                    color:'white',
                    marginLeft:'100rpx',
                    marginTop:'40rpx',
                    fontSize:'24rpx',
                    textAlign:'center'
                },
                next:{
                    background:'#fd5123',
                    width:'91%',
                    height:'85rpx',
                    color:'white',
                    fontSize:'30rpx',
                    margin:'20rpx auto'
                },
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
.more{
    background: white;
    .title{
        /*line-height: ;*/
        font-size: 30rpx;
        font-weight: 700;
        padding:20rpx;
        .red{
            padding-left: 20rpx;
            font-size: 23rpx;
            font-weight: 600;
            color:#A02736;
        }
    }
    .more-con{
        display: flex;
        align-items: center;
        text-align: center;
        flex-direction: row;
        height:320rpx;
        .camera{
            font-size: 40rpx;
            margin-right: 20rpx;
        }
    }
}
</style>