<template>
    <view class="page u-border-top">
        <view class="con" v-for="item in con" :key="item.id" @click="detail(item.id)">
            <view>
            <view>
                <text class="gray">抽查任务编号：</text>
                <text>{{item.tasknumber ? item.tasknumber : '-'}}</text>
            </view>
            <view>
                <text class="gray">抽查任务名称：</text>
                <text>{{item.taskname ? item.taskname : '-'}}</text>
            </view>
            <view>
                <text class="gray">抽查机关：</text>
                <text>{{item.organ ? item.organ : '-'}}</text>
            </view>
            <view>
                <text class="gray">抽查完成日期：</text>
                <text>{{item.date ? item.date : '-'}}</text>
            </view>
            </view>
            <u-icon name="arrow-right" size="34" color="#959595"></u-icon>
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
                    url: 'applets/stochastic',
                })
                console.log(res)
                this.con=res

            },
            detail(id){
                uni.navigateTo({
                    url:'/pages/company/shuangsuijiD?id='+id
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
    background: white;
    padding:30rpx;
    line-height: 50rpx;
    display: flex;
    justify-content: space-between;
}
</style>