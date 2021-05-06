<template>
    <view class="page u-border-top">
        <view class="title">{{con.title}}</view>
        <view>
            <text>来源</text>
            <text class="gray u-margin-left-30">{{con.date}}</text>
        </view>
        <view>
            <text class="gray">信息类型：</text>
            <text>{{con.type}}</text>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                con:[]
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
                    url: 'applets/biddingsave',
                })
                console.log(res)
                this.con=res

            },
            detail(id){
                uni.navigateTo({
                    url:'/pages/company/zhaotoubiaoD?id='+id
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
.page{
    padding:30rpx;
}
.gray{
    color:#959595;
}
    .title{
        font-size: 35rpx;
    }
</style>