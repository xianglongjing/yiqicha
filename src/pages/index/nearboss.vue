<template>
    <view class="page">
        <view class="first">
        <view style="width: 650rpx;">
            <u-search
                    :action-style="search_btn"
                    :animation="true"
                    @custom="goSearch"
                    @search="goSearch"
                    bg-color="#F6F6F6"
                    input-align="left" height="60"
                    placeholder="请输入企业名称（所在国语言）" shape="square"
                    v-model="query"
            ></u-search>
        </view>
<!--            <view class="u-margin-top-20">共 <text class="red">80</text>位老板</view>-->
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                search_btn:{
                    color:'#000'
                }
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
        color:#E75D54;
    }
.first{
    width:100%;
    background:white;
    padding:30rpx;
}
</style>