<template>
    <view class="page u-border-top">
    <view class="white u-border-bottom" @click="detail(item.id)" v-for="item in group" :key="item.id">
       <view class="title">{{item.title}}</view>
        <view>
            <text class="gray">案号：</text>
            <text>{{item.case ? item.case :'—'}}</text>
        </view>
        <view>
            <text class="gray">案由：</text>
            <text>{{item.cause}}</text>
        </view>
        <view class="flex">
            <view class="left">
                <text class="gray">案件身份：</text>
                <view>
                    <view>
                        <view>原告- <text class="red">{{item.plaintiff}}</text></view>
                        <text>被告- <text class="red">{{item.defendant}}</text></text>
                    </view>
                </view>
            </view>
            <u-icon name="arrow-right" color="#D3D3D3"></u-icon>
        </view>
        <view>
            <text class="gray">审理法院：</text>
            <text>{{item.court}}</text>
        </view>
        <view>
            <text class="gray">发布日期：</text>
            <text>{{item.date}}</text>
        </view>
    </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                group:{}
            }
        },
        onLoad(options){
            this.list(options.id)
        },
        methods:{
            detail(id){
                uni.navigateTo({
                    url:'/pages/company/songdaDetail?id='+id
                })
            },
            async list(id) {
                const {data: res} = await this.$request({
                    method: 'GET',
                    url: 'applets/ruling',
                    data: {
                        id:id
                    }
                })
                this.group = res
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
    .gray{
        color:#959595;
    }
    .white{
        background:white;
        padding:25rpx 20rpx;
        line-height: 50rpx;
        .title{
            font-size: 32rpx;
            padding:0 25rpx;
        }
        .flex{
            justify-content: space-between;
            .left{
                flex:1;
                display: flex;
            }
        }
    }
</style>