<template>
    <view class="page u-border-top">
        <view class="con" v-for="item in info" :key="item.id">
            <u-image mode="aspectFit"
                    width="50" height="50"
                    src="https://api.yiqiwang360.com/images/app/app_logo2.png"></u-image>
        <view class="con-r u-margin-left-30">
            <view class="flex">
                <text>{{item.name}}</text>
<!--                <image width="40" height="40"-->
<!--                        :src="item.code || 'https://api.yiqiwang360.com/images/app/app_logo2.png'"-->
<!--                        mode="aspectFill"-->
<!--                />-->
            </view>
            <view>
                <text class="gray">微信号：</text>
                <text>{{item.publicaccount}}</text>
            </view>
            <view>
                <text class="gray">简介：</text>
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
                    url: 'applets/publicaccount',
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
    page{
        background: #f8f8f8;
    }
</style>
<style lang="scss" scoped>
    .gray{
        color: #959595;
    }
.con{
    display: flex;
    background: white;
    padding:25rpx;
    .con-r{
        flex:1;
        line-height: 50rpx;
        .flex{
            justify-content: space-between;

        }
    }
}
</style>