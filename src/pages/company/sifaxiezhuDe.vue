<template>
    <view class="page u-border-top">
        <view class="title u-border-bottom">股权冻结信息</view>
        <view class="con">
        <view class="flex">
            <view class="item">
                <text>执行法院</text>
                <view>{{law.court ? law.court : '-'}}</view>
            </view>
            <view class="item u-border-left u-padding-left-20">
                <text>执行事项</text>
                <view>{{law.matters ? law.matters : '-'}}</view>
            </view>
        </view>
        <view class="item">
            <text>执行裁定书文号</text>
            <view>{{law.erdn ? law.erdn : '-'}}</view>
        </view>
        <view>
            <text>执行通知书文号</text>
            <view>{{law.enn ? law.enn : '-'}}</view>
        </view>
        <view>
            <text>被执行人</text>
            <view>{{law.person ? law.person : '-'}}</view>
        </view>
        <view>
            <text>股权被执行的企业</text>
            <view>{{law.tcweie ? law.tcweie : '-'}}</view>
        </view>
        <view>
            <text>被执行人持有股权、其他投资权益的数额</text>
            <view>{{law.erdn ? law.erdn : '-'}}</view>
        </view>
        <view class="flex">
            <view class="item">
                <text>被执行人证件种类</text>
                <view>{{law.todotpbe ? law.todotpbe : '-'}}</view>
            </view>
            <view class="item u-border-left u-padding-left-20">
                <text>被执行人证件号码</text>
                <view>{{law.onotpbe ? law.onotpbe : '-'}}</view>
            </view>
        </view>
        <view class="flex">
            <view class="item">
                <text>冻结期限自</text>
                <view>{{law.fpf ? law.fpf : '-'}}</view>
            </view>
            <view class="item u-border-left u-padding-left-20">
                <text>冻结期限至</text>
                <view>{{law.fpt ? law.fpt : '-'}}</view>
            </view>
        </view>
        <view class="flex">
            <view class="item">
                <text>冻结期限</text>
                <view>{{law.period ? law.period : '-'}}</view>
            </view>
            <view class="item u-border-left u-padding-left-20">
                <text>公示日期</text>
                <view>{{law.publicity ? law.publicity : '-'}}</view>
            </view>
        </view>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                law:[]
            }
        },
        onLoad(options){
            this.list(options.id)
        },
        methods:{
            async list(id) {
                const token=uni.getStorageSync('token')
                const {data: res} = await this.$request({
                    method: 'GET',
                    url: 'applets/assistancesave',
                    data: {
                        id:id
                    }
                })
                this.law = res
                this.shop = res.corporate
                console.log(res)
            },
        }
    }
</script>

<style lang="scss" scoped>
.title{
    padding:20rpx 25rpx;
    font-weight: 620;
    font-size: 30rpx;
}
.con{
    padding:25rpx;
}
    .flex{
        padding:25rpx 0;
        justify-content: space-between;
        .item{
            width:50%;
        }
    }
</style>