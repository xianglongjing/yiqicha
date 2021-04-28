<template>
    <view class="page u-border-top">
        <view class="white">
            <view class="item u-border-bottom">
                <view class="gray">票据号</view>
                <text>{{law.bill ? law.bill : '-'}}</text>
            </view>
            <view class="item">
                <view class="gray">申请人</view>
                <text class="red">{{law.applicant ? law.applicant : '-'}}</text>
            </view>
            <view class="item">
                <view class="gray">出票人</view>
                <text class="red">{{law.drawer ? law.drawer : '-'}}</text>
            </view>
            <view class="item u-border-bottom">
                <view class="gray">持票人</view>
                <text class="red">{{law.bearer ? law.bearer : '-'}}</text>
            </view>
            <view class="flex">
               <view class="items">
                   <text class="gray">票据类型</text>
                   <view>{{law.type ? law.type : '-'}}</view>
               </view>
                <view class="items u-border-left u-padding-left-20">
                    <text class="gray">票面金额</text>
                    <view>{{law.amount ? law.amount : '-'}}</view>
                </view>
            </view>
            <view class="flex">
                <view class="items">
                    <text class="gray">出票日</text>
                    <view>{{law.issuance ? law.issuance : '-'}}</view>
                </view>
                <view class="items u-border-left u-padding-left-20">
                    <text class="gray">到期日</text>
                    <view>{{law.expiry ? law.expiry : '-'}}</view>
                </view>
            </view>
            <view class="flex u-border-bottom">
                <view class="items">
                    <text class="gray">付款银行</text>
                    <view>{{law.bank ? law.bank : '-'}}</view>
                </view>
                <view class="items u-border-left u-padding-left-20">
                    <text class="gray">类别</text>
                    <view>{{law.category ? law.category : '-'}}</view>
                </view>
            </view>
            <view class="flex">
                <view class="items">
                    <text class="gray">公告日期</text>
                    <view>{{law.date ? law.date : '-'}}</view>
                </view>
                <view class="items u-border-left u-padding-left-20">
                    <text class="gray">发布机构</text>
                    <view>{{law.category ? law.category : '-'}}</view>
                </view>
            </view>
            <view class="item">
                <view>公告内容</view>
                <view>
                    {{law.content ? law.content : '-'}}
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return{
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
                    url: 'applets/noticesave',
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

<style lang="scss" scoped>
    .gray{
        color:#959595;
    }
    .red{
        color:#fd5123;
    }
.white{
    padding:30rpx;
    .item{
        padding:20rpx 0;
    }
    .flex{
        justify-content: space-between;
        .items{
            width:50%;
            margin:30rpx 0;
        }
    }
}
</style>