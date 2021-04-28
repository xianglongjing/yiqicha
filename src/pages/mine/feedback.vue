<template>
    <view class="page">
        <view style="height:10rpx"></view>
            <view class="feed-box u-margin-top-30">
                <u-form :model="form" ref="uForm" border-bottom="false">
                    <u-form-item label="问题描述" label-position="top" :border-bottom="false">
                        <u-input type="textarea" border-bottom="false" v-model="form.opinion" placeholder="您的建议，是我们不断改善的动力"  style="background: #F8F9FB"/>
                    </u-form-item>
                    <view class="img">
                        <view class="title">上传图片</view>
                        <text class="gray">上传信息有误的截图，更直观地展示问题</text>
                        <view class="push">
                            <u-image mode="aspectFill" src="http://images.yiqiwang360.com/yiqicha/yijianfankui.png" width="170" height="170" class="camera"></u-image>
                            <text class="gray image">上传图片</text>
                        </view>
                    </view>
                    <u-form-item label="手机号码" label-position="top" :border-bottom="false">
                        <u-input type="number" v-model="form.phone" placeholder="（选填，方便我们联系您）" style="background: #F8F9FB"/>
                    </u-form-item>
                </u-form>
                <view class="u-margin-top-20 u-padding-bottom-50">
                    <view>我们将尽快处理您的反馈</view>
                    <view>您还可以拨打客服电话400-036-1717
                    </view>
                </view>
            </view>
        <u-button :customStyle="submit">提交</u-button>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                form:{
                    opinion:'',
                    phone:''
                },
                submit:{
                    background:'#EE150E',
                    width:'70%',
                    margin:'0 auto',
                    color:'white'
                }
            }
        }
    }
</script>
<style>
    page{
        background:#f8f8f8;
    }
</style>
<style lang="scss" scoped>
    .gray{
        color:#A0A0A0;
    }
.feed-box {
    background: white;
    margin: 30rpx;
    padding: 0 40rpx;
}
    .img{
        .title{
            font-size: 30rpx;
            font-weight: 600;
            line-height: 50rpx;
        }
        .push{
            width:150rpx;
            border-radius: 10rpx;
            margin:30rpx;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .image{
                position:absolute;
                margin-top: 80rpx;
            }
            .camera{
                position: relative;
            }
        }
    }
    .number{
        margin-top:20rpx;
        .title{
            font-size: 30rpx;
            font-weight: 600;
            line-height: 50rpx;
        }
    }
</style>