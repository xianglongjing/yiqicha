<template>
    <view class="page u-border-top">
        <view class="con u-border-bottom" v-for="item in con" :key="item.id" @click="detail(item.id)">
            <view>
                <view class="title">{{item.pisl ? item.pisl : '-'}}</view>
                <view>
                    <text class="gray">行政区：</text>
                    <text>{{item.district ? item.district : '-'}}</text>
                </view>
                <view>
                    <text class="gray">原土地使用权人：</text>
                    <text>{{item.olurh ? item.olurh : '-'}}</text>
                </view>
                <view>
                    <text class="gray">现土地使用权人：</text>
                    <text>{{item.clurh ? item.clurh : '-'}}</text>
                </view>
            </view>
            <u-icon name="arrow-right" size="32" color="#959595"></u-icon>
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
                    url: 'applets/transfer',
                })
                console.log(res)
                this.con=res
            },
            detail(id){
                uni.navigateTo({
                    url:'/pages/company/tudizhuanrangD?id='+id
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
    .gray{
        color:#959595;
    }
.con{
    padding:30rpx;
    background: white;
    display: flex;
    justify-content: space-between;
    line-height: 55rpx;
    .title{
        font-size: 32rpx;
        font-weight: 600;
    }
}
</style>