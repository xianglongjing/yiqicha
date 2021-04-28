<template>
    <view class="page u-border-top">
        <view class="first">
            <view class="item">
                <text class="gray">公告名称</text>
                <view>{{law.title}}</view>
            </view>
            <view class="item">
                <text class="gray">法院名称</text>
                <view>{{law.court}}</view>
            </view>
            <view class="item">
                <text class="gray">发布日期</text>
                <view>{{law.date}}</view>
            </view>
            <view class="item">
                <text class="gray">公告内容</text>
                <view>{{law.content}}</view>
            </view>
        </view>

    </view>
</template>

<script>
    export default {
        data(){
            return {
                law:[]
            }
        },
        onLoad(options){
            this.list(options.id)
        },
        methods:{
            async list(id) {
                const token=uni.getStorageSync('token')
                const {data: res} = await this.$request({
                    method: 'GET',
                    url: 'applets/rulingsave',
                    data: {
                        id:id
                    }
                })
                this.law = res
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
    .first{
        background: white;
        .item{
        padding:30rpx 25rpx;
    }
    }

</style>