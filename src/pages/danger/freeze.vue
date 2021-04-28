<template>
    <view class="page">
        <view class="man u-border-bottom u-border-top">
            <text class="gray">关联人员：</text>
            <text class="blue">张三</text>
        </view>
        <view class="info u-border-bottom">
            <view>
                <text class="gray">被执行人：</text>
                <text>张三</text>
            </view>
            <view>
                <text class="gray">股权数额：</text>
                <text>8.9万人民币</text>
            </view>
            <view>
                <text class="gray">被执行通知文书文号：</text>
                <text>（2019）京01财保194号</text>
            </view>
            <view>
                <text class="gray">类型 | 状态：</text>
                <text>股权冻结 | 冻结</text>
            </view>
        </view>
        <view class="info">
            <view>
                <text class="gray">被执行人：</text>
                <text>张三</text>
            </view>
            <view>
                <text class="gray">股权数额：</text>
                <text>8.9万人民币</text>
            </view>
            <view>
                <text class="gray">被执行通知文书文号：</text>
                <text>（2019）京01财保194号</text>
            </view>
            <view>
                <text class="gray">类型 | 状态：</text>
                <text>股权冻结 | 冻结</text>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {

            }
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
        color:#A9A9A9;
    }
.man{
    padding:25rpx;
    background: white;
    .blue{
        color:#1978BA;
    }
}
    .info{
        background: white;
        padding:25rpx;
        line-height: 50rpx;
    }
</style>