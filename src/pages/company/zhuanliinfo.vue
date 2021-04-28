<template>
    <view class="page u-border-top">
        <view class="search u-border-bottom">
            <u-search shape="square" placeholder="输入专利名申请号等进行搜索" v-model="keyword"></u-search>
        </view>
        <view class="down u-border-bottom">
            <u-dropdown>
                <u-dropdown-item menu-icon="arrow-down-fill" v-model="value1" title="专利类别" :options="options1"></u-dropdown-item>
                <u-dropdown-item v-model="value2" title="专利状态" :options="options2"></u-dropdown-item>
                <u-dropdown-item v-model="value3" title="专利类别" :options="options1"></u-dropdown-item>
                <u-dropdown-item v-model="value4" title="专利状态" :options="options2"></u-dropdown-item>
            </u-dropdown>
        </view>
        <view class="con u-border-bottom" @click="detail">
            <view>
                <view class="title">还会对哦</view>
                <text>公开</text>
                <view>
                    <text class="gray">申请日：</text>
                    <text>209033</text>
                </view>
                <view>
                    <text class="gray">申请号：</text>
                    <text>209033</text>
                </view>
                <view>
                    <text class="gray">公开(公告)日：</text>
                    <text>209033</text>
                </view>
                <view>
                    <text class="gray">公开(公告)号：</text>
                    <text>209033</text>
                </view>
                <view>
                    <text class="gray">发明人</text>
                    <text>基调</text>
                </view>
            </view>
            <u-icon name="arrow-right" size="40" color="#777777"></u-icon>
        </view>
    </view>
</template>
<script>
    export default {
        data() {
            return {
                value1: '',
                value2: '',
                value3: '',
                value4: '',
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
            },
            detail(){
                uni.navigateTo({
                    url:'/pages/company/zhuanliinfoDe'
                })
            }
        }
    }
</script>
<style>
    page {
        background: #f8f8f8;
    }
</style>
<style lang="scss" scoped>
    .gray {
        color: #959595;
    }

    .search {
        background: white;
        padding: 20rpx 30rpx;
    }
    .down{
        background-color: white;
        padding:10rpx 20rpx;
    }
    .con{
        padding:30rpx 25rpx;
        line-height: 50rpx;
        background-color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title{
            font-size: 39rpx;
            margin-bottom: 20rpx;
        }
    }
</style>
