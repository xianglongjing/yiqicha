<template>
    <view class="page u-border-top">
        <view class="tabs u-border-bottom">
            <u-tabs
                    :list="list"
                    :current="current"
                    @change="change" gutter="90"
                    bar-width="50" font-size="30"
                    active-color="#E12216" bg-color="none" inactive-color="#000000"
            ></u-tabs>
        </view>
        <view class="con u-border-bottom" @click="detail">
            <view>
                <view class="item">
                    <text class="gray">决定书问号：</text>
                    <text>22200</text>
                </view>
                <view class="item">
                    <text class="gray">处罚事由：</text>
                    <text>22200</text>
                </view>
                <view class="item">
                    <text class="gray">处罚内容：</text>
                    <text>22200</text>
                </view>
                <view class="item">
                    <text class="gray">决定机关：</text>
                    <text>22200</text>
                </view>
                <view class="item">
                    <text class="gray">处罚日期：</text>
                    <text>2020-08-12</text>
                </view>
            </view>
            <u-icon name="arrow-right" size="35" color="#000000"></u-icon>
        </view>
    </view>
    </view>
</template>
<script>
    export default{
        data(){
            return {
                list: [{
                    name: '法律诉讼7'
                }, {
                    name: '历史法律诉讼'
                }],
                current: 0
            }
        },
        methods:{
            change(index) {
                this.current = index;
            },
            detail(){
                uni.navigateTo({
                    url:'/pages/company/xingzhengchufDetail'
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
    .gray{
        color:#959595;
    }
    .con{
        padding:25rpx 20rpx;
        line-height: 50rpx;
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
</style>