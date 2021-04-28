<template>
    <view class="page u-border-top">
        <u-dropdown class="u-border-bottom">
            <u-dropdown-item v-model="value1" title="全部证书类型" :options="options1"></u-dropdown-item>
        </u-dropdown>
        <view class="con u-border-bottom">
            <view>
                <view class="name">软件证书</view>
                <view>
                    <text class="gray">证书编号：</text>
                    <text>2222</text>
                </view>
                <view>
                    <text class="gray">发证日期：</text>
                    <text>222-332</text>
                </view>
                <view>
                    <text class="gray">截止日期：</text>
                    <text>2025-390</text>
                </view>
            </view>
            <u-icon name="arrow-right" color="#777777" size="40"></u-icon>
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
        display: flex;
        justify-content: space-between;
        padding:30rpx 25rpx;
        background:white;
        line-height: 50rpx;
        .name{
            font-size: 39rpx;
            margin-bottom:20rpx;
        }
    }
</style>
