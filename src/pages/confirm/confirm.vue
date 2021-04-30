

<template>
    <view class="page">
        <uni-nav-bar :status-bar="true" left-icon="back" :fixed="true" :border="false" :shadow="false" @clickLeft="goBack">
            <view class="flex">
                <text class="title">认证管理</text>
                <text class="u-font-28" @click="go">去认证</text>
            </view>
        </uni-nav-bar>
        <view class="tabs u-border-top">
            <u-tabs
                    :list="List"
                    :current="current"
                    @change="Change" gutter="70"
                    bar-width="50" font-size="30"
                    active-color="#E2291D" bg-color="none" inactive-color="#666666"
            ></u-tabs>
        </view>
        <view v-if="current==0" class="con" :key="item.id" v-for="item in shopList">
            <u-image mode="aspectFill" src="https://api.yiqiwang360.com/images/app/app_logo2.png" width="80" height="80"></u-image>
            <view class="con-r">
                <view class="name">{{item.name}}</view>
                <view class="u-margin-bottom-50">商务信息咨询；财务信息咨询</view>
                <text class="status">{{item.revocation=1 ? '开业' :'吊销' }}</text>
            </view>
        </view>
        <view v-if="current==1" class="con" :key="item.id" v-for="item in shopList">
            <u-image mode="aspectFill" src="https://api.yiqiwang360.com/images/app/app_logo2.png" width="80" height="80"></u-image>
            <view class="con-r">
                <view class="name">{{item.name}}</view>
            </view>
        </view>
        <view v-if="current==2" class="con" :key="item.id" v-for="item in shopList">
            <u-image mode="aspectFill" src="https://api.yiqiwang360.com/images/app/app_logo2.png" width="80" height="80"></u-image>
            <view class="con-r">
                <view class="name">{{item.name}}</view>
<!--                <text class="status">{{item.revocation=1 ? '开业' :'吊销' }}</text>-->
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                List: [{
                    name: '已认证'
                }, {
                    name: '认证中'
                }, {
                    name: '认证失败'
                }],
                current:0,
                type:1,
                shopList:{}
            }
        },
        onLoad (options) {
            this.getNewList()
        },
        onShow(){
            // this.getStorage();
        },
        methods:{
            // getStorage () {
            //     // this.storage.token = uni.getStorageSync('token')
            //     this.storage.id = uni.getStorageSync('id')
            //     this.storage.nickName = uni.getStorageSync('nickName')
            //     this.storage.avatarUrl = uni.getStorageSync('avatarUrl')
            // },
            Change(index) {
                this.current = index;
                if(index==0){
                    this.type=1
                }
                if(index==1){
                    this.type=2
                }
                if(index==2){
                    this.type=3
                }
                console.log(this.type)
                this.getNewList()
            },
            async getNewList () {
                const token=uni.getStorageSync('token')
                const res =await this.$request({
                    method: 'POST',
                    data: {
                        type:this.type,
                        token:token
                    },
                    url: 'applets/manage'
                }).then(res=>{
                    console.log(res.data)
                    this.shopList = res.data
                })


            },
            goBack(){
                uni.navigateBack({
                    delta: 1
                });
            },
            go(){
                uni.navigateTo({
                    url:'/pages/confirm/form'
                })
            }
        }
    }
</script>
<style>
    page{
        background:#f8f8f8;
    }
</style>
<style lang="scss" scoped>
.flex{
    width:100%;
    margin-left:120rpx;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .title{
        font-weight:600;
        font-size:35rpx;
    }
}
    .tabs{
        background: white;
    }
    .con{
        background: white;
        margin:30rpx;
        padding:30rpx;
        display: flex;
        flex-direction: row;
        .con-r{
            margin-left:20rpx;
            .name{
                font-weight: 600;
                margin-bottom:20rpx;
            }
            .status{
                border:1rpx solid #C3C3C3;
                color:#E1221C;
                padding:8rpx 10rpx;
                border-radius: 10rpx;
            }
        }
    }
</style>