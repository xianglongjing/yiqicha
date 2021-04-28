<template>
    <view class="page">
        <view class="new">
            <view>
                <text class="jia">+</text>
                <text>新建分组</text>
            </view>
           <u-icon name="arrow-right" color="#E3E3E3" size="35"></u-icon>
        </view>
        <view class="num">已建分组(1)</view>
        <view class="mo">
            <view class="new u-border-bottom" v-for="item in group" @click="detail">
                <view>
                    <text>{{item.gname}}({{item.attention_count}})</text>
                </view>
                <u-icon name="arrow-right" color="#E3E3E3" size="35"></u-icon>
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
        onLoad() {
            this.getStorage()
            this.grouplist()
        },
        onShow() {
            this.grouplist()
        },
        methods:{
            //获取本地存储
            getStorage() {
                this.storage.token = uni.getStorageSync('token')
            },
            async grouplist() {
                const token=uni.getStorageSync('token')
                const {data: res} = await this.$request({
                    method: 'POST',
                    url: 'applets/groupinglist',
                    data: {
                        token: uni.getStorageSync('token')
                    }
                })
                this.group = res
                console.log(res)
                // if (!res.list) {
                //   this.followList = []
                //   return this.emptyShow = true
                // }
                // this.followList = res.list.map((item) => {
                //   return Object.assign({}, item, {show: false})
                // })
            },
            detail(){

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
        color:#E3E3E3;
    }
.new{
    margin:20rpx 0;
    padding:25rpx;
    display: flex;
    justify-content: space-between;
    background: white;
    .jia{
        border:2rpx dashed #E3E3E3;
        padding:2rpx 10rpx;
    }
}
    .num{
        padding:0 25rpx;
    }
</style>