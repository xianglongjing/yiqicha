<template>
    <view class="page">
        <view class="u-border-bottom" style="background: white">
            <u-tabs
                    :list="List"
                    :current="current"
                    @change="Change" gutter="95"
                    bar-width="90" font-size="30"
                    active-color="#E2291D" bg-color="none" inactive-color="#666666"
            ></u-tabs>
        </view>
        <view v-if="current==0">
            <view class="item">
                <view class="item-t u-border-bottom">
                    <view class="item-l">
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/vip.png" width="40" height="40"></u-image>
                        <text class="vip">VIP会员</text>
                    </view>
                    <text class="red">订单已完成</text>
                </view>
                <view class="item-b">
                    <view>
                        <text class="title">3年VIP会员服务</text>
                        <text class="gray u-margin-left-10">已完成支付</text>
                    </view>
                    <view class="gray">2021-05-07到期（使用中）</view>
                </view>
            </view>

        </view>
        <view v-if="current==1">
            <view class="item">
                <view class="item-t u-border-bottom">
                    <view class="item-l">
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/vip.png" width="40" height="40"></u-image>
                        <text class="vip">VIP会员</text>
                    </view>
                    <text class="red">订单未完成</text>
                </view>
                <view class="item-b u-border-bottom u-padding-bottom-30">
                    <view>
                        <text class="title">3年VIP会员服务</text>
                    </view>
                    <view class="gray">剩余支付时间：00:20</view>
                </view>
                <view class="flex">
                   <view class="flex-l">
                       <text class="gray">支付金额：</text>
                       <text class="red u-font-32">780.00</text>
                   </view>
                    <u-button :customStyle="pay" @click="show">去支付</u-button>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                List: [{
                    name: '已完成订单'
                }, {
                    name: '待支付订单'
                }],
                current:0,
                pay:{
                    width:'120rpx',
                    height:'45rpx',
                    background:'#E2261A',
                    color:'white'
                }
            }
        },
        methods: {
            Change(index) {
                this.current = index;
            },
            async show() {
                uni.showToast({
                    title: '开发中',
                    icon: 'none',
                    duration: 2000
                });
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
.red{
    color:#EC7A74;
}
.gray{
     font-size: 25rpx;
     color:#969696;
 }
.item{
    background: white;
    margin:30rpx;
    .red{
    font-weight: 670;
}
    .item-t{
    display: flex;
    justify-content: space-between;
    padding:20rpx;


    .item-l{
        display: flex;
        align-items: center;
        .vip{
            font-size: 30rpx;
            margin-left:10rpx;
        }
    }
}
    .item-b{
        padding:20rpx;
        .title{
            font-weight: 650;
        }

    }
    .flex{
        line-height: 100rpx;
        padding:0 20rpx;
        justify-content: space-between;
        align-items: center;
        .flex-l{
            flex:1;
        }
    }
}

</style>