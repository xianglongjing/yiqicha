<template>
    <view class="page u-border-top">
        <view class="white">
            <view class="title u-border-bottom">税务评级</view>
            <view>
                <view class="flex2">
                    <view class="item">
                        <view class="gray">纳税人识别号</view>
                        <text>{{man.number ? man.number : '-'}}</text>
                    </view>
                    <view class="item2">
                        <text class="shu u-margin-right-20">|</text>
                        <view>
                            <view class="gray">纳税人名称</view>
                            <text>{{man.name ? man.name : '-'}}</text>
                        </view>
                    </view>
                </view>
                <view class="flex2">
                    <view class="item">
                        <view class="gray">评价年度</view>
                        <text>{{man.year ? man.year : '-'}}</text>
                    </view>
                    <view class="item2">
                        <text class="shu u-margin-right-20">|</text>
                        <view>
                            <view class="gray">纳税信用级别</view>
                            <text>{{man.rating ? man.rating : '-'}}</text>
                        </view>
                    </view>
                </view>
            </view>
        </view>

    </view>
</template>

<script>
    export default {
        data(){
            return {
                man:[]
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
                    url: 'applets/taxratingsave',
                    data: {
                        id:id
                    }
                })
                this.man = res
                console.log(res)
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
.white{
    background: white;
    .title{
        padding:25rpx 30rpx;
    }
    .flex2{
        display: flex;
        padding:0 30rpx;
        background: white;
        justify-content: space-between;
        align-items: center;
        margin:20rpx 0;
        .item,.item2{
            flex:1;
        }
        .item2{
            line-height: 45rpx;
            align-items: center;
            display: flex;
            .shu{
                color:#f8f8f8;
                font-size:40rpx;
            }
        }
    }
}
</style>