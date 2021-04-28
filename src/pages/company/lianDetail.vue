<template>
    <view class="page u-border-top">
        <view class="con">
            <view class="flex">
                <view class="item">
                    <view class="gray">案号</view>
                    <text>{{law.case}}</text>
                </view>
                <view class="item2">
                    <text class="shu u-margin-right-20">|</text>
                    <view>
                        <view class="gray">立案日期</view>
                        <text>{{law.filingdate}}</text>
                    </view>
                </view>
            </view>
            <view class="flex">
                <view class="item">
                    <view class="gray">开庭日期</view>
                    <text>{{law.courtdate}}</text>
                </view>
                <view class="item2">
                    <text class="shu u-margin-right-20">|</text>
                    <view>
                        <view class="gray">结束日期</view>
                        <text>{{law.enddate}}</text>
                    </view>
                </view>
            </view>
            <view class="flex">
                <view class="item">
                    <view class="gray">承办部门</view>
                    <text>{{law.department}}</text>
                </view>
                <view class="item2">
                    <text class="shu u-margin-right-20">|</text>
                    <view>
                        <view class="gray">法院</view>
                        <text>{{law.announcer}}</text>
                    </view>
                </view>
            </view>
            <view class="flex">
                <view class="item">
                    <view class="gray">承办法官</view>
                    <text>{{law.officer}}</text>
                </view>
                <view class="item2">
                    <text class="shu u-margin-right-20">|</text>
                    <view>
                        <view class="gray">法官助理</view>
                        <text>{{law.judge}}</text>
                    </view>
                </view>
            </view>
            <view class="flex">
                <view class="item">
                    <view class="gray">案件类型</view>
                    <text>{{law.type}}</text>
                </view>
                <view class="item2">
                    <text class="shu u-margin-right-20">|</text>
                    <view>
                        <view class="gray">案件状态</view>
                        <text>{{law.casetype}}</text>
                    </view>
                </view>
            </view>
            <view class="flex">
                <view class="item">
                    <view class="gray">公诉人/原告/上诉人/申请人</view>
                    <text>{{law.plaintiff}}</text>
                </view>
            </view>
            <view class="flex">
                <view class="item">
                    <view class="gray">被告人/被告/被上诉人/被申请人</view>
                    <text>{{law.defendant}}</text>
                </view>
            </view>
            <view class="flex">
                <view class="item">
                    <view class="gray">第三人</view>
                    <text>{{law.person}}</text>
                </view>
            </view>
        </view>
        <view class=""></view>
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
                    url: 'applets/registersave',
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
.con{
    padding:0 25rpx;
    background: white;
    .flex{
        padding:20rpx 0;
        justify-content: space-between;
        align-items: center;
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