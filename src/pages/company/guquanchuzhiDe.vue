<template>
    <view class="page u-border-top">
        <view class="first">
            <view>
                <text class="gray">登记编号</text>
                <view>{{law.number ? law.number : '-'}}</view>
            </view>
            <view>
                <text class="gray">股权出质设立登记日期</text>
                <view>{{law.date ? law.date : '-'}}</view>
            </view>
            <view class="flex u-padding-bottom-30 u-border-bottom">
                <view class="item">
                    <text class="gray">出质股权数额</text>
                    <view>{{law.amount ? law.amount : '-'}}</view>
                </view>
                <view class="item u-border-left u-padding-left-20">
                    <text class="gray">状态</text>
                    <view>{{law.status ? law.status : '-'}}</view>
                </view>
            </view>
            <view class="items">
                <text class="gray">出质人</text>
                <view class="red">{{law.quality ? law.quality : '-'}}</view>
            </view>
            <view class="items u-border-bottom">
                <text class="gray">出质人证件号码</text>
                <view>{{law.qualitynumber ? law.qualitynumber : '-'}}</view>
            </view>
            <view class="items u-border-bottom">
                <text class="gray">出质股权标的企业</text>
                <view>{{law.number ? law.number : '-'}}</view>
            </view>
            <view>
                <text class="gray">质权人</text>
                <view class="red">{{law.pledge ? law.pledge : '-'}}</view>
            </view>
            <view class="items u-border-bottom">
                <text class="gray">质权人证件号码</text>
                <view>{{law.pledgenumber ? law.pledgenumber : '-'}}</view>
            </view>
            <view class="items">
                <text class="gray">备注</text>
                <view class="red">{{law.remark ? law.remark : '-'}}</view>
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
        methods:{
            async list(id) {
                const token=uni.getStorageSync('token')
                const {data: res} = await this.$request({
                    method: 'GET',
                    url: 'applets/pledgesave',
                    data: {
                        id:id
                    }
                })
                this.law = res
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
        color:#959595;
    }
.first{
    background: white;
    padding:25rpx;
    .flex{
        justify-content: space-between;
        align-items: center;
        .item{
            width:50%;
        }

    }
    .items{
         padding:20rpx 0;
     }
}
</style>