<template>
    <view class="page">
        <view class="con">
            <u-form :model="form" ref="uForm" border-bottom="false">
                <u-form-item label="兑换码:" label-width="100" :border-bottom="false" style="background: #F8F9FB;height:80rpx;border-radius:10rpx;padding:10rpx 20rpx">
                    <u-input type="number" v-model="form.code" placeholder="请输入兑换码"/>
                </u-form-item>
                <u-button :customStyle="submit">立即兑换</u-button>
            </u-form>
            <view class="desc">
                <view>说明：</view>
                <view>1.兑换码用于兑换一企查尊享卡以及一企查VIP试用</view>
                <view>2.每个兑换码，仅可兑换一次，重复使用无效</view>
                <view>3.兑换成功，VIP立即生效至兑换账户中
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                form:{
                    code:''
                },
                submit:{
                    background:'#EE150E',
                    margin:'30rpx 0',
                    color:'white',
                    fontSize:'35rpx'
                }
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
.con{
    background: white;
    margin:30rpx 0;
    padding:30rpx;
}
    .desc{
        color:#B6B6B6;
        line-height: 40rpx;
    }
</style>