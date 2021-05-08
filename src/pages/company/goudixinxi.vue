<template>
    <view class="page u-border-top">
        <view class="con u-border-bottom" v-for="item in con" :key="item.id" @click="detail(item.id)">
            <view>
                <view class="title">{{item.plocation ? item.plocation : '-'}}</view>
                <view>
                    <text class="gray">土地用途：</text>
                    <text>{{item.use ? item.use : '-'}}</text>
                </view>
                <view>
                    <text class="gray">总面积：</text>
                    <text>{{item.area ? item.area : '-'}}</text>
                </view>
                <view>
                    <text class="gray">合同签订日期：</text>
                    <text>{{item.csdate ? item.csdate : '-'}}</text>
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
                    url: 'applets/purchase',
                })
                console.log(res)
                this.con=res
            },
            detail(id){
                uni.navigateTo({
                    url:'/pages/company/goudixinxiD?id='+id
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