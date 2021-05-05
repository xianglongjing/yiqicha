<template>
    <view class="page u-border-top">
        <view class="con u-border-bottom" @click="detail(item.id)"
              v-for="item in con" :key="item.id">
            <view class="title">
                {{item.title}}
            </view>
            <view class="margin">
                <text class="type">大学</text>
            </view>
            <view class="gray">
                <text>{{item.date ? item.date : '-'}}</text>
                <text class="u-margin-left-20">来源：{{item.from ? item.from : '-'}}</text>
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
                    url: 'applets/news',
                })
                console.log(res)
                this.con=res
            },
            Change(index) {
                this.current = index;
            },
            detail(id){
                uni.navigateTo({
                    url:'/pages/company/newsyuqingD?id='+id
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .gray{
        color:#959595;
    }
.con{
    padding:30rpx;
    line-height: 50rpx;
    .title{
        font-size: 34rpx;
    }
    .margin{
        margin:20rpx 0;
    }
    .type{
        padding:8rpx 13rpx;
        background: #F8F8F8;
    }
}
</style>