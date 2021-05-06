<template>
    <view class="page u-border-top">
        <view class="con" v-for="item in con" :key="item.id">
            <u-image mode="aspectFit" width="60" height="60"
                     src="https://api.yiqiwang360.com/images/app/app_logo2.png"></u-image>
            <view class="con-r">
                <view>{{item.name}}</view>
                <view>
                    <text class="gray">简介</text>
                    <text>{{item.present}}</text>
                </view>
            </view>
        </view>

    </view>
</template>

<script>
    export default {
        data(){
            return {
                con:{}
            }
        },
        onLoad (options) {
            this.list(options.id)
        },
        methods:{
            async list (id) {
                const { data: res } = await this.$request({
                    method: 'GET',
                    data:{
                        id:id
                    },
                    url: 'applets/weibo',
                })
                console.log(res)
                this.con=res

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
    .gray{
        color:#959595;
    }
.con{
    padding:30rpx;
    background: white;
    display: flex;
    .con-r{
        margin-left: 30rpx;
        line-height: 50rpx;
    }
}
</style>