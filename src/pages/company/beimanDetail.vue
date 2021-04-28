<template>
    <view class="page u-border-top">
        <view class="first">
            <view class="item">
                <text class="gray">被执行人</text>
                <view>{{law.pcdpn}}</view>
            </view>
            <view class="item">
                <text class="gray">身份证号码/组织机构代码</text>
                <view>{{law.idnumber}}</view>
            </view>
            <view class="flex">
                <view class="item">
                    <view class="gray">执行标的</view>
                    <text>{{law.etnsjt}}</text>
                </view>
                <view class="item2">
                    <text class="shu u-margin-right-20">|</text>
                    <view>
                        <view class="gray">执行法院</view>
                        <text>{{law.ectet}}</text>
                    </view>
                </view>
            </view>
            <view class="item">
                <text class="gray">立案日期</text>
                <view>{{law.filingdate}}</view>
            </view>
            <view class="item">
                <text class="gray">案号</text>
                <view>{{law.number}}</view>
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
                    url: 'applets/debtorsave',
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
<style>
    page{
        background: #f8f8f8;
    }
</style>
<style lang="scss" scoped>
    .gray{
        color:#777777;
    }
.first{
    background: white;
    padding:0 25rpx;
    .item{
        padding:20rpx 0;
        line-height: 45rpx;
    }
    .flex{
        align-items: center;
        justify-content: space-between;
        .item,.item2{
            flex:1;
        }
        .item2{
            line-height: 45rpx;
            align-items: center;
            display: flex;
            .shu{
                color:#f8f8f8;
                font-size:40rpx;
            }
        }
    }
}
</style>