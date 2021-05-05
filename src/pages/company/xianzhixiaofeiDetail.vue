<template>
    <view class="page u-border-top">
        <view class="name u-margin-top-20">的点点滴滴多多多多</view>
        <view class="name">限制消费令</view>
        <view class="padding">
            <view class="flex gray">
                <text>案号：<text>{{info.number}}</text></text>
                <text class="red">查看原文</text>
            </view>
            <view class="gray u-margin-top-20">立案日期：{{info.fname ? info.fname : '-'}}</view>
            <u-divider class="u-margin-top-40" color="#959595">限令正文</u-divider>
                <view class="red">{{info.ass ? info.ass : '-'}}</view>
            <view class="con">
                {{info.restext ? info.restext : '-'}}
            </view>
        </view>

    </view>
</template>

<script>
    export default {
        data(){
            return {
                info:[]
            }
        },
        onLoad(options){
            this.list(options.id)
        },
        methods:{
            async list(id) {
                const {data: res} = await this.$request({
                    method: 'GET',
                    url: 'applets/consumptionsave',
                    data:{
                        id:id
                    }
                })
                this.info = res
                console.log(res)
            },
        }
    }
</script>

<style lang="scss" scoped>
    .red{
        color:#fd5123;
    }
    .gray{
        color:#959595;
    }
.name{
    text-align: center;
    font-size: 35rpx;
    line-height: 60rpx;
    font-weight: 600;
}
    .padding{
        padding:0 25rpx;
    }
    .flex{
        justify-content: space-between;
    }
    .con{
        text-indent: 2em;
    }
</style>