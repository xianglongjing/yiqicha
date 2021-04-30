<template>
    <view class="page">
        <view v-for="item in man" :ket="item.id">
        <view class="info">
            <view class="info-top">
                <view class="flex">
                    <u-image src="https://img0.baidu.com/it/u=2973856035,3798735256&fm=26&fmt=auto&gp=0.jpg" width="85" height="85"></u-image>
                <text class="u-margin-left-30">{{item.dishonest}}</text>
                </view>
                <text class="red">老赖</text>
            </view>
            <view class="identity">
                <view>
                    <text>身份证号码：</text>
                    <text>{{item.code}}</text>
                </view>
                <view>
                    <text>简介：
                        <text>{{item.synopsis ? item.synopsis : '-'}}</text>
                    </text>
                </view>
            </view>
        </view>
        <view class="num">共 <text class="red">{{item.quantity}}</text>条失信记录</view>
        <view class="record u-border-bottom" @click="go(item2.id)" v-for="item2 in item.dishonests" :ket="item2.id">
            <view class="re-l">
                <view> <text class="gray">案号：</text>
                    {{item2.ecn ? item2.ecn : '-'}}</view>
                <view> <text class="gray">执行法院：</text>
                    {{item2.court ? item2.court : '-'}}</view>
                <view> <text class="gray">履行情况：</text>{{item2.potpste ? item2.potpste : '-'}}</view>
                <view> <text class="gray">发布日期：</text>{{item2.releasedate ? item2.releasedate : '-'}}</view>
            </view>
           <u-icon name="arrow-right" size="40" color="#989898"></u-icon>
        </view>
    </view>
    </view>
</template>

<script>
    export default {
       data(){
           return {
               man:{},
               note:{}
           }
       },
        onLoad(options){
           this.list(options.code)
        },
        methods:{
           go(id){
               uni.navigateTo({
                   url:'/pages/ll/shixin?id='+id
               })
           },
            async list(code) {
                // const token=uni.getStorageSync('token')
                const {data: res} = await this.$request({
                    method: 'POST',
                    url: 'applets/laolaidetail',
                    data: {
                        code:code,
                        type:true
                    }
                })
                this.man = res
                this.note=res.dishonest
                // this.shop = res.corporate
                console.log(res)
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
.red{
    color:#E12A23;
}
    .info{
        background: white;
        padding:30rpx;
        .info-top{
            display: flex;
            flex-direction: row;
            justify-content:space-between;
            align-items: center;
            .flex{
                align-items: center;
                font-size: 32rpx;
                font-weight: 600;
            }
            .red{
                border:1rpx solid #E12A23;
                padding:5rpx 13rpx;
                border-radius: 10rpx;
            }
        }
        .identity{
            margin-top: 30rpx;
            line-height: 50rpx;
        }
    }
    .num{
        padding:30rpx;
    }
    .record{
        background:white;
        padding:30rpx;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .re-l{
            line-height: 50rpx;
            .gray{
                color:#989898;
            }
        }
    }
</style>