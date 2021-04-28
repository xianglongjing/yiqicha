<template>
    <view class="page u-border-top">
        <view class="first">
            <view class="title u-border-bottom">基本信息</view>
            <view class="info u-border-bottom">
                <view class="u-margin-bottom-30">一种激光</view>
                <view class="item">
                    <text class="gray">申请号</text>
                    <view>12212333</view>
                </view>
                <view class="flex">
                    <view class="item">
                        <text class="gray">申请号</text>
                        <view>12212333</view>
                    </view>
                    <view class="item flex-r u-border-left u-padding-left-20">
                        <!--                    <view class="shu u-margin-right-20">|</view>-->
                        <view>
                            <text class="gray">申请日</text>
                            <view>33</view>
                        </view>
                    </view>
                </view>
                <view class="flex">
                    <view class="item">
                        <text class="gray">公开（公告）号</text>
                        <view>12212333</view>
                    </view>
                    <view class="item flex-r u-border-left u-padding-left-20">
                        <view>
                            <text class="gray">公开（公告日）</text>
                            <view>12212333</view>
                        </view>
                    </view>
                </view>
                <view class="flex">
                    <view class="item">
                        <text class="gray">分类号</text>
                        <view>12212333</view>
                    </view>
                    <view class="item flex-r u-border-left u-padding-left-20">
                        <view>
                            <text class="gray">分类</text>
                            <view>12212333</view>
                        </view>
                    </view>
                </view>
            </view>
            <view class="info u-border-bottom">
                <view class="item">
                    <text class="gray">申请（专利权）人</text>
                    <view>12212333</view>
                </view>
                <view class="item">
                    <view>发明人</view>
                    <view class="man">
                        <text class="u-border-right">郎云飞</text>
                        <text class="u-border-right">郎云飞</text>
                        <text class="gray">郎云飞</text>
                    </view>
                </view>
                <view class="item">
                    <text class="gray">代理人</text>
                    <view>多大的</view>
                </view>
                <view class="item">
                    <text class="gray">代理机构</text>
                    <view>的点点滴滴多多多多</view>
                </view>
                <view class="item">
                    <text class="gray">地址</text>
                    <view>的点点滴滴多多多多</view>
                </view>
            </view>
        </view>
        <view class="second">
            <view class="title u-margin-top-25 u-border-bottom">摘要</view>
            <view class="con">
                eeeeeeeeeeeeffffffffffffff
            </view>
        </view>
        <view class="law">
            <view class="title u-border-bottom">法律状态</view>
            <view style="width:400rpx;padding:0 25rpx">
            <u-steps direction="column" style="width:200rpx" :list="numList" :current="1"></u-steps>
            </view>
        </view>
        <view class="quanli">
            <view>
                <text>权利要求</text>
                <u-icon name="question-circle" size="32" color="#777777"></u-icon>
            </view>
            <view class="gray">暂无</view>
        </view>
        <view class="quanli">
            <view>
                <text>说明书</text>
            </view>
            <view class="gray">暂无</view>
        </view>
    </view>
</template>
<script>
    export default {
        data() {
            return {
                show:false,
                content:'权利要求',
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
                numList: [{
                    name: '法律状态日:111' +
                        'fffff' +
                        '33333'
                }, {
                    name: '出库'
                },  ],
            }
        },
        methods: {
            change(index) {
                this.current = index;
            },
            open() {
                this.show = true;
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
    .title{
        background-color: white;
        font-size: 34rpx;
        font-weight: 600;
        padding:30rpx 25rpx;
    }
    .info{
        background: white;
        padding:25rpx;
        .flex{
            align-items: center;
            justify-content: space-between;
            .flex-r{
                display: flex;
                align-items: center;
            }
        }
        .item{
            flex:1;
            margin:10rpx 0;
            line-height: 45rpx;
        }
        .man{
            display: flex;
            text{
               width:20%;
            }
        }
    }
    .second{
        .con{
            background: white;
            padding:25rpx;
        }
    }
    .law{
        margin:20rpx 0;
        background: white;
    }
    .quanli{
        margin:20rpx 0;
        background: white;
        padding:25rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;

    }
</style>
