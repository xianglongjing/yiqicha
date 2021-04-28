<template>
    <view class="page u-border-top">
        <view class="white u-border-bottom">
            <view>
                <text class="gray">案由</text>
                <view>{{detail.cause}}</view>
            </view>
            <view class="u-margin-top-20">
                <text class="gray">案号</text>
                <view>{{detail.case ? detail.case : '—'}}</view>
            </view>
        </view>
        <view class="flex u-border-bottom">
            <view class="u-padding-left-25">
                <text class="gray">开庭时间</text>
                <view>{{detail.courtdate ? detail.courtdate : '—'}}</view>
            </view>
            <view class="right u-border-left u-padding-left-10">
                <text class="gray">排期日期</text>
                <view>{{detail.courtdate ? detail.courtdate : '—'}}</view>
            </view>
        </view>
        <view class="white">
            <text class="gray">当事人</text>
            <view>
                <text>原告-</text>
                <text class="red">{{detail.plaintiff ? detail.plaintiff : '—'}}</text>
            </view>
            <view>
                <text>被告-</text>
                <text class="red">{{detail.defendant ? detail.defendant : '—'}}</text>
            </view>
            <view class="flex">
                <view>
                    <text class="gray">承办部门</text>
                    <view>{{detail.ud ? detail.ud : '—'}}</view>
                </view>
                <view class="right u-border-left u-padding-left-10">
                    <text class="gray">审判长/主审人</text>
                    <view>{{detail.presiding ? detail.presiding : '—'}}</view>
                </view>
            </view>
            <view class="flex">
                <view>
                    <text class="gray">法院</text>
                    <view>{{detail.court ? detail.court : '—'}}</view>
                </view>
                <view class="right u-border-left u-padding-left-10">
                    <text class="gray">法庭</text>
                    <view>{{detail.curia ? detail.curia : '—'}}</view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                detail:[]
            }
        },
        onLoad(options){
            this.list(options.id)
        },
        methods:{
            async list(id) {
                const {data: res} = await this.$request({
                    method: 'GET',
                    url: 'applets/opencourtsave',
                    data: {
                        id:id
                    }
                })
                this.detail = res
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
    .gray{
        color:#999999;
    }
    .red{
        color:#E12216;
    }
.white{
    background:white;
    padding:30rpx 25rpx;
}
    .flex{
        padding:20rpx 0;
        background: white;
        justify-content: space-between;
        .right{
            width:40%;
        }
    }
</style>