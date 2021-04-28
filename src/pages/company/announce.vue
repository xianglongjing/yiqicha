<template>
    <view class="page u-border-top">
        <view class="tab u-border-bottom">
            <u-tabs
                    :list="List"
                    :current="current"
                    @change="Change" gutter="70"
                    bar-width="50" font-size="30"
                    active-color="#E2291D" bg-color="none" inactive-color="#666666"
            ></u-tabs>
        </view>
        <view class="white">
            <view class="info">
                <view class="info-l">
                    <u-image mode="aspectFill" width="80" height="80"
                             src="https://seopic.699pic.com/photo/50139/5280.jpg_wh1200.jpg"></u-image>
                    <text class="red u-margin-left-30">卢雪山</text>
                </view>
                <view>
                    <text>任职9家企业</text>
                </view>
            </view>
            <view>
                <text class="gray">持股比例</text>
                <view>-</view>
            </view>
            <view class="flex">
                <view>
                    <text class="gray">认缴出资额</text>
                    <view>-</view>
                </view>
                <view class="u-border-left u-padding-left-20">
                    <text class="gray">实缴出资额</text>
                    <view>-</view>
                </view>
            </view>
            <view class="flex">
                <view>
                    <text class="gray">认缴出资日期</text>
                    <view>-</view>
                </view>
                <view class="u-border-left u-padding-left-20">
                    <text class="gray">实缴出资日期</text>
                    <view>-</view>
                </view>
            </view>
            <view class="flex">
                <view>
                    <text class="gray">认缴公示日期</text>
                    <view>-</view>
                </view>
                <view class="u-border-left u-padding-left-20">
                    <text class="gray">实缴公示日期</text>
                    <view>-</view>
                </view>
            </view>
            <view class="flex">
                <view>
                    <text class="gray">认缴出资方式</text>
                    <view>-</view>
                </view>
                <view class="u-border-left u-padding-left-20">
                    <text class="gray">实缴出资方式</text>
                    <view>-</view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                List: [{
                    name: '股东及出资信息1'
                }, {
                    name: '股东变更信息0'
                }],
                current:0,
            }
        },
        methods:{
            Change(index) {
                this.current = index;
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
    .red{
        color:#E12216;
    }
    .tab{
        background:white;
    }
.white{
    background:white;
    padding:25rpx;
    .info{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .info-l{
            align-items: center;
            display: flex;
        }
    }
    .flex{
        margin:20rpx 0;
        justify-content: space-between;
        view{
            flex:1;
        }
    }
}
</style>