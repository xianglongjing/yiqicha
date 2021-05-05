<template>
    <view class="page u-border-top">
        <view class="tab u-border-bottom">
            <u-tabs
                    :list="List"
                    :current="current"
                    @change="Change" gutter="90"
                    bar-width="50" font-size="30"
                    active-color="#E12216" bg-color="none" inactive-color="#000000"
            ></u-tabs>
        </view>
        <view class="down">
            <u-dropdown>
                <u-dropdown-item v-model="value1" title="全部身份" :options="options1"></u-dropdown-item>
                <u-dropdown-item v-model="value2" title="全部公告类型" :options="options2"></u-dropdown-item>
                <u-dropdown-item v-model="value3" title="全部年份" :options="options2"></u-dropdown-item>
            </u-dropdown>
        </view>
<!--        <view class="num">为你找到<text class="red">224</text>条法院公告</view>-->
        <view class="white u-border-bottom" v-for="item in group" :key="item.id">
            <view>
                <view>
                    <text class="gray">案号：</text>
                    <text>{{item.case ? item.case : '—'}}</text>
                </view>
                <view>
                    <text class="gray">案由：</text>
                    <text>-</text>
                </view>
                <view>
                    <text class="gray">案件身份：</text>
                    <text>-</text>
                </view>
                <view>
                    <text class="gray">公告人：</text>
                    <text>-</text>
                </view>
                <view>
                    <text class="gray">公告类型：</text>
                    <text>-</text>
                </view>
                <view>
                    <text class="gray">刊登日期：</text>
                    <text>-</text>
                </view>
            </view>
            <u-icon name="arrow-right" size="30" color="#C9C9C9"></u-icon>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                group:{},
                List: [{
                    name: '法院公告1'
                }, {
                    name: '历史开庭公告0'
                }],
                current:0,
                value1:'',
                value2:'',
                value3:''
            }
        },
        onLoad(options){
            this.list(options.id)
        },
        methods:{
            Change(index) {
                this.current = index;
            },
            async list(id) {
                const token=uni.getStorageSync('token')
                const {data: res} = await this.$request({
                    method: 'GET',
                    url: 'applets/court',
                    data: {
                        id:id
                    }
                })
                this.group = res
                console.log(res)
            },
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
        color:#E12216;
    }
    .gray{
        color:#929292;
    }
    .tab{
        background: white;
        padding:10rpx 30rpx;
    }
    .down{
        background:white;
    }
    .num{
        padding:25rpx;
    }
    .white{
        line-height: 50rpx;
        background: white;
        padding:30rpx 25rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>