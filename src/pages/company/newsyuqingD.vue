<template>
    <view class="page u-border-top">
        <view v-for="item in info" :key="item.id">
            <view class="title">
                {{item.title}}
            </view>
            <view class="source">
                <text>来源：{{item.from}}</text>
                <text>{{item.date}}</text>
            </view>
            <view class="con">
                {{item.content}}
            </view>
            <view class="news">
                <u-image
                        width="60" height="60"
                        src="https://api.yiqiwang360.com/images/app/app_logo2.png"></u-image>
                <view class="u-margin-left-30">{{item.title}}</view>
            </view>
        </view>

    </view>
</template>

<script>
    export default {
        data(){
            return {
                info:{}
            }
        },
        onLoad(options){
            this.list(options.id)
        },
        methods:{
            async list(id) {
                const {data: res} = await this.$request({
                    method: 'GET',
                    url: 'applets/newssave',
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
.page{
    padding:30rpx;
    .title{
        font-size: 36rpx;
        font-weight: 600;
    }
    .source{
        margin:20rpx 0;
    }
    .con{
        text-indent: 3em;
    }
    .news{
        background: #F8F8F8;
        padding:30rpx;
        width:92%;
        margin:30rpx auto;
        display: flex;
    }
}
</style>