<template>
    <view class="page">
        <view class="screen">
            <u-dropdown>
                <u-dropdown-item v-model="value1" title="全部行业" :options="options1"></u-dropdown-item>
                <u-dropdown-item v-model="value2" title="默认距离" :options="options2"></u-dropdown-item>
            </u-dropdown>
            <text class="u-margin-right-50">更多筛选</text>
        </view>
        <view class="find">
            为你找到
            <text class="red">123456</text>
            家公司
            <view class="shop">
                <view class="shop-top u-border-bottom">
                <u-image mode="aspectFill" src="http://images.yiqiwang360.com/yiqicha/gongsiming.png" width="50" height="50"></u-image>
                    <view class="shop-r">
                        <view class="name">临沂市铭远企业管理有限公司</view>
                        <view class="u-margin-bottom-30">商务信息咨询；财务信息咨询</view>
                        <text class="red status">在营(开业)企业</text>
                    </view>
                    <view>35米</view>
                </view>
                <view class="position">
                    <view class="daohang">
                    <u-image src="http://images.yiqiwang360.com/yiqicha/daohang.png" width="25" height="25"></u-image>
                    <text class="u-margin-left-20">距您35米 | 山东省临沂市兰山区金玉山大厦</text>
                    </view>
                    <view class="red">导航</view>
                </view>
            </view>
            <view class="shop">
                <view class="shop-top u-border-bottom">
                    <u-image mode="aspectFill" src="http://images.yiqiwang360.com/yiqicha/gongsiming.png" width="50" height="50"></u-image>
                    <view class="shop-r">
                        <view class="name">临沂市铭远企业管理有限公司</view>
                        <view class="u-margin-bottom-30">商务信息咨询；财务信息咨询</view>
                        <text class="red status">在营(开业)企业</text>
                    </view>
                    <view>35米</view>
                </view>
                <view class="position">
                    <view class="daohang">
                        <u-image src="http://images.yiqiwang360.com/yiqicha/daohang.png" width="25" height="25"></u-image>
                        <text class="u-margin-left-20">距您35米 | 山东省临沂市兰山区金玉山大厦</text>
                    </view>
                    <view class="red">导航</view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                value1: 1,
                value2: 2,
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
                options2: [{
                    label: '去冰',
                    value: 1,
                },
                    {
                        label: '加冰',
                        value: 2,
                    },
                ],
            }
        }
    }
</script>

<style lang="scss" scoped>
    .red{
        color:#E75D54;
    }
    page{
        background: #f8f8f8;
    }
.screen{
    display: flex;
    flex-direction: row;
    align-items: center;
    background: white;
}
    .find{
        padding:20rpx 30rpx;
        .shop{
            margin:20rpx 0;
            padding:20rpx;
            background: white;
            .shop-top{
                justify-content: center;
                display: flex;
                flex-direction: row;
                padding:10rpx 0 30rpx;
                .shop-r{
                    flex:1;
                    margin-left:30rpx;
                    .name{
                      font-size: 30rpx;
                        font-weight: 650;
                        padding:0rpx 0 10rpx;
                    }
                    .status{
                        border:1rpx solid #B4B5B5;
                        padding:5rpx;
                        font-size: 22rpx;
                        border-radius: 5rpx;
                    }
                }
            }
            .position{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                padding:20rpx 0 0 25rpx;
                .daohang{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                }
            }
        }
    }
</style>