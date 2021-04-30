<template>
    <view class="page">
        <view class="infor u-border-bottom">
            <view class="item">
                <view class="gray">被执行人姓名/名称</view>
                <view>{{detail.dishonest}}</view>
            </view>
            <view class="item">
                <view class="gray">法人代表</view>
                <view>{{detail.legal ? detail.legal : '-'}}</view>
            </view>
            <view class="item">
                <view class="gray">身份证号码/组织机构代码</view>
                <view>{{detail.code ? detail.code : '-'}}</view>
            </view>
        </view>
        <view class="infor u-border-bottom">
            <view class="item">
                <view class="gray">执行法院</view>
                <view>{{detail.court ? detail.court : '-'}}</view>
            </view>
            <view class="item">
                <view class="gray">立案日期</view>
                <view>{{detail.filingdate ? detail.filingdate : '-'}}</view>
            </view>
            <view class="item">
                <view class="gray">案号</view>
                <view>{{detail.ecn ? detail.ecn : '-'}}</view>
            </view>
        </view>
        <view class="infor u-border-bottom">
            <view class="item">
                <view class="gray">执行依据文号</view>
                <view>{{detail.ebn ? detail.ebn : '-'}}</view>
            </view>
            <view class="item">
                <view class="gray">做出执行依据单位</view>
                <view>{{detail.mtibu ? detail.mtibu : '-'}}</view>
            </view>
            <view class="item">
                <view class="gray">生效法律文书确定的义务</view>
                <view>{{detail.teidto ? detail.teidto : '-'}}</view>
            </view>
        </view>
        <view class="infor u-border-bottom">
            <view class="item">
                <view class="gray">被执行人的履行情况</view>
                <view>{{detail.sotpste ? detail.sotpste : '-'}}</view>
            </view>
            <view class="item">
                <view class="gray">失信被执行人行为具体情形</view>
                <view>{{detail.fss ? detail.fss : '-'}}</view>
            </view>
            <view class="item">
                <view class="gray">发布日期</view>
                <view>{{detail.releasedate ? detail.releasedate : '-'}}</view>
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
            this.getDetailList(options.id)
        },
        methods:{
            async getDetailList (id) {
                const {data:res} = await this.$request({
                    url: 'applets/execution',
                    method: 'GET',
                    data: {
                        id:id
                    }
                })
                this.detail=res
                console.log(res)
            }
        }
    }
</script>
<style>

</style>
<style lang="scss" scoped>
    .gray{
        color:#989898;
    }
    .infor{
        font-size: 30rpx;
        padding:0 30rpx 10rpx;
        .item{
            margin:20rpx;
            line-height: 50rpx;
        }
    }
</style>