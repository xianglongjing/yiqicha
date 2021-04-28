<template>
    <view class="page">
        <view class="white">
           <view class="u-border-bottom" @click="forget">密码设置</view>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {
            forget(){
                uni.navigateTo({
                    url:'/pages/common/wordset'
                })
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
    padding:30rpx 25rpx;
}
</style>