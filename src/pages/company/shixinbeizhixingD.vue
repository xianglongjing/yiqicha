<template>
    <view class="page u-border-top">
        <view class="con">
            <view class="item">
                <text class="gray">失信被执行人</text>
                <view>{{info.corporate.cpyname}}</view>
            </view>
            <view class="item">
                <text class="gray">身份证号码/组织机构代码</text>
                <view>{{info.code ? info.code : '-'}}</view>
            </view>
            <view class="item u-border-bottom u-padding-bottom-20">
                <text class="gray">法定代表人</text>
                <view class="info">
                    <view class="flex">
                        <u-image mode="aspectFit" width="40" height="40"
                                 src="https://api.yiqiwang360.com/images/app/app_logo2.png"></u-image>
                        <text class="u-margin-left-20">{{info.corporate.partner.name}}</text>
                    </view>
                    <view class="flex">
                        <u-image mode="aspectFit" width="40" height="40"
                                 src="https://api.yiqiwang360.com/images/app/app_logo2.png"></u-image>
                        <text class="red">任职{{info.corporate.partner.corporates_count ? info.corporate.partner.corporates_count : '-'}}家公司</text>
                    </view>
                </view>
            </view>
            <view class="flexs">
                <view>
                    <text class="gray">执行法院</text>
                    <view>{{info.court ? info.court : '-'}}</view>
                </view>
                <view class="flexs-r u-border-left u-padding-left-20">
                    <text class="gray">省份</text>
                    <view>{{info.province ? info.province : '-'}}</view>
                </view>
            </view>
            <view class="item">
                <text class="gray">立案日期</text>
                <view>{{info.filingdate ? info.filingdate : '-'}}</view>
            </view>
            <view class="item u-padding-bottom-20 u-border-bottom">
                <text class="gray">案号</text>
                <view>{{info.ecn ? info.ecn : '-'}}</view>
            </view>
            <view class="item">
                <text class="gray">执行依据文号</text>
                <view>{{info.ebn ? info.ebn : '-'}}</view>
            </view>
            <view class="item">
                <text class="gray">做出执行依据单位</text>
                <view>{{info.mtibu ? info.mtibu : '-'}}</view>
            </view>
            <view class="item u-padding-bottom-20 u-border-bottom">
                <text class="gray">生效法律文书确定的业务</text>
                <view>{{info.teidto ? info.teidto : '-'}}</view>
            </view>
            <view class="item">
                <text class="gray">被执行人的履行情况</text>
                <view>{{info.sotpste ? info.sotpste : '-'}}</view>
            </view>
            <view class="item">
                <text class="gray">已履行</text>
                <view>{{info.fc ? info.fc : '-'}}</view>
            </view>
            <view class="item">
                <text class="gray">未履行</text>
                <view>{{info.uc ? info.uc : '-'}}</view>
            </view>
            <view class="item">
                <text class="gray">失信被执行人行为具体情形</text>
                <view>{{info.fss ? info.fss : '-'}}</view>
            </view>
            <view class="item">
                <text class="gray">发布日期</text>
                <view>{{info.releasedate ? info.releasedate : '-'}}</view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                info:[]
            }
        },
        onLoad(options){
            this.list(options.id)
        },
        methods:{
            async list(id) {
                const {data: res} = await this.$request({
                    method: 'GET',
                    url: 'applets/dishonestsave',
                    data:{
                        id:id
                    }
                })
                this.info = res
                console.log(res)
            },
        }
    }
</script>

<style lang="scss" scoped>
    .red{
        color:#fd5123;
    }
    .gray{
        color:#959595;
    }
.con{
    padding:25rpx 20rpx;
    .item{
        line-height: 45rpx;
        margin:20rpx 0;
    }
    .info{
        margin-top:15rpx;
        align-items: center;
        display: flex;
        justify-content: space-between;
    }
    .flexs{
        line-height: 50rpx;
        align-items: center;
        display: flex;
        justify-content: space-between;
        .flexs-r{
            width:50%;
        }
    }
}
</style>