<template>
    <view class="page u-border-top">
        <view class="down u-border-bottom">
            <u-dropdown>
                <u-dropdown-item v-model="year" title="发布年份" :options="options1"></u-dropdown-item>
            </u-dropdown>
        </view>
        <view class="con u-border-bottom" v-for="item in con" :key="item.id">
            <u-image mode="aspectFit" width="40" height="40"
                     src="https://api.yiqiwang360.com/images/app/app_logo2.png"></u-image>
            <view class="con-r">
                <view class="red">{{item.corporate.cpyname ? item.corporate.cpyname : '-'}}</view>
                <view class="flex">
                    <view class="item">
                        <text class="gray">销售占比</text>
                        <view>{{item.sales ? item.sales : '-'}}</view>
                    </view>
                    <view class="item u-padding-left-20 u-border-left">
                        <text class="gray">销售金额</text>
                        <view>{{item.amount ? item.amount : '-'}}</view>
                    </view>
                </view>
                <view class="flex">
                    <view class="item">
                        <text class="gray">报告期</text>
                        <view>{{item.report ? item.report : '-'}}</view>
                    </view>
                    <view class="item u-padding-left-20 u-border-left">
                        <text class="gray">数据来源</text>
                        <view>{{item.sources ? item.sources : '-'}}</view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                year:'',
                options1: [{
                    label: '全部年份',
                    value: 1,
                },
                    {
                        label: '2020年',
                        value: 2,
                    },
                    {
                        label: '2019年',
                        value: 3,
                    }
                ],
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
                    url: 'applets/client',
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
        background: white;
    }
</style>
<style lang="scss" scoped>
.gray{
    color:#959595;
}
.red{
    color:#fd5123;
}
    .con{
        display: flex;
        padding:25rpx;
        .con-r{
            flex:1;
            margin-left:30rpx;
            line-height: 50rpx;
            .flex{
                margin:30rpx 0;
                line-height: 40rpx;
                height:60rpx;
                justify-content: space-between;
                .item{
                    width:50%;
                }
            }
        }
    }
</style>