<template>
    <view class="page u-border-top">
        <view class="con u-border-bottom">
            <view class="gray">证书类型</view>
            <view>软件</view>
        </view>
        <view class="con u-border-bottom">
            <view class="gray">证书编号</view>
            <view>1111</view>
        </view>
        <view class="con u-border-bottom">
            <view class="gray">软件名称</view>
            <view>怒剑狂花</view>
        </view>
        <view class="con u-border-bottom">
            <view class="gray">软件版本</view>
            <view>22</view>
        </view>
        <view class="con u-border-bottom">
            <view class="gray">企业名称</view>
            <view>客户会尽快</view>
        </view>
        <view class="con u-border-bottom">
            <view class="gray">企业网址</view>
            <view>-</view>
        </view>
        <view class="con u-border-bottom">
            <view class="gray">注册地址</view>
            <view>软件</view>
        </view>
        <view class="con u-border-bottom">
            <view class="gray">统一社会代码</view>
            <view>软件</view>
        </view>
        <view class="con u-border-bottom">
            <view class="gray">发证日期</view>
            <view>3333</view>
        </view>
        <view class="con u-border-bottom">
            <view class="gray">有效期至</view>
            <view>1111</view>
        </view>
    </view>
</template>
<script>
    export default {
        data() {
            return {
                value1:'',
                options1: [{
                    label: '默认排序',
                    value: 1,
                },
                    {
                        label: '距离优先',
                        value: 2,
                    },
                    {
                        label: '价格优先',
                        value: 3,
                    }
                ],
            }
        },
        methods: {
            change(index) {
                this.current = index;
            }
        }
    }
</script>
<style lang="scss" scoped>
    .gray {
        color: #959595;
    }
    .con{
        background:white;
        padding:25rpx;
        line-height: 50rpx;
    }
</style>
