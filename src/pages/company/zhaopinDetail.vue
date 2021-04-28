<template>
    <view class="page u-border-top">
        <view class="position">
            <view class="flex">
                <text class="name">开发公厕和故事</text>
                <text class="date">2021-04-23</text>
            </view>
            <view class="flex u-margin-top-20">
                <text class="red type">面议</text>
                <text class="see">10</text>
            </view>
        </view>
        <view class="shop">
            <view>
                <view class="name">河南省科技公司</view>
                <view class="u-margin-top-20">
                    <text>性质：民营</text>
                    <text>规模：20人以下</text>
                </view>
            </view>
            <u-icon name="arrow-right" size="60" color="#777777"></u-icon>
        </view>
        <view class="xinxi">
            <view class="title">
                <u-gap height="50" bg-color="#fd5123" class="jian"></u-gap>
                <text class="u-margin-left-20">基本信息</text>
                <view class="xian"></view>
            </view>
            <view class="con">
                <view class="item">
                    <text><text class="gray">工作性质：</text>全职</text>
                </view>
                <view class="item">
                    <text><text class="gray">工作地区：</text>河南/郑州</text>
                </view>
                <view class="item">
                    <text><text class="gray">工作经验：</text>222</text>
                </view>
                <view class="item">
                    <text><text class="gray">学历要求：</text>河南/郑州</text>
                </view>
                <view class="item">
                    <text><text class="gray">招聘人数：</text>3</text>
                </view>
                <view class="item">
                    <text><text class="gray">到岗时间：</text>2周</text>
                </view>
                <view class="item">
                    <text><text class="gray">年龄要求：</text>河南/郑州</text>
                </view>
                <view class="item">
                    <text><text class="gray">性别要求：</text>不限</text>
                </view>
                <view class="item">
                    <text><text class="gray">教育程度：</text>河南</text>
                </view>
                <view class="item">
                    <text><text class="gray">婚姻状况：</text>河南/郑州</text>
                </view>
                <view class="item2">
                    <text><text class="gray">有效日期至：</text>2021-06-08</text>
                </view>
                <view class="item2">
                    <text><text class="gray">职位类型：</text>高级</text>
                </view>
                <view class="item2">
                    <text><text class="gray">从事行业：</text>自动化</text>
                </view>
            </view>
        </view>
        <view class="xinxi">
            <view class="title">
                <u-gap height="50" bg-color="#fd5123" class="jian"></u-gap>
                <text class="u-margin-left-20">职位描述</text>
                <view class="xian"></view>
            </view>
            <view class="content">
                <view class="u-margin-top-30">
                    一、职位职责：
                    1.少时诵诗书所所所所所所
                    2.哒哒哒哒哒哒多多多多多多多
                    3.哒哒哒哒哒哒多多多多
                </view>
                <view>
                    二、任职资格：
                    1.少时诵诗书所所所所所所
                    2.哒哒哒哒哒哒多多多多多多多
                    3.哒哒哒哒哒哒多多多多
                </view>
            </view>

        </view>
        <view class="special">
            <view>
                <view class="title">特别申明：</view>
                <view class="con u-margin-top-10">
                    如遇无效、虚假、诈骗信息，请立即举报，求职过程中请勿缴纳费用，谨防诈骗，
                    如遇信息不实请举报
                </view>
            </view>
            <u-image></u-image>
        </view>
        <view class="tel">
            <view class="title">
                <u-gap height="50" bg-color="#fd5123" class="jian"></u-gap>
                <text class="u-margin-left-20">联系方式</text>
                <view class="xian"></view>
            </view>
            <view class="u-margin-left-20 u-margin-top-30">企业没有开放联系</view>
        </view>
        <view class="alike">
            <view class="title">
                <u-gap height="50" bg-color="#fd5123" class="jian"></u-gap>
                <text class="u-margin-left-20">相似职位</text>
                <view class="xian"></view>
            </view>
            <view class="man u-border-bottom">
                <view class="flex">
                    <text class="red name">测量员</text>
                    <text class="gray">2周内</text>
                </view>
                <view class="flex">
                    <view class="u-line-1">
                        <text>河北-秦皇岛</text>
                        <text class="shu">|</text>
                        <text>房地产</text>
                    </view>
                    <u-icon name="arrow-right" size="40" color="#777777"></u-icon>
                </view>
                <view class="red">4000-5444</view>
            </view>
            <view class="man u-border-bottom">
                <view class="flex">
                    <text class="red name">测量员</text>
                    <text class="gray">2周内</text>
                </view>
                <view class="flex">
                    <view class="u-line-1">
                        <text>河北-秦皇岛</text>
                        <text class="shu">|</text>
                        <text>房地产</text>
                    </view>
                    <u-icon name="arrow-right" size="40" color="#777777"></u-icon>
                </view>
                <view class="red">4000-5444</view>
            </view>
        </view>
    </view>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            change(index) {
                this.current = index;
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

    .red {
        color: #fd5123;
    }

    .position {
        margin: 20rpx;
        background: white;
        padding: 25rpx 20rpx;

        .flex {
            justify-content: space-between;
            align-items: center;

            .name {
                font-size: 45rpx;
                font-weight: 630;
            }
        }
    }

    .shop {
        margin: 20rpx;
        background: white;
        padding: 25rpx 20rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .name {
            font-size: 45rpx;
        }
    }

    .xinxi {
        margin: 20rpx;
        background: white;
        padding: 25rpx 20rpx;

        .title {
            display: flex;
            align-items: center;
            font-size: 32rpx;

            .jian {
                width: 20rpx;
            }

            .xian {
                color: white;
                width: 400rpx;
                border-bottom: 3rpx solid #777777;
            }
        }

        .con {
            margin-top: 30rpx;
            display: flex;
            flex-wrap: wrap;
            line-height: 50rpx;

            .item {
                width: 50%;
            }

            .item2 {
                width: 100%;
            }
        }

        .content {
            line-height: 50rpx;
        }
    }

    .special {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 20rpx;
        background: #FFF3D6;
        padding: 25rpx 20rpx;

        .title {
            color: #D07822;
        }

        .con {
            line-height: 50rpx;
        }
    }

    .tel {
        margin: 20rpx;
        background: white;
        padding: 25rpx 20rpx;
        .title {
            display: flex;
            align-items: center;
            font-size: 32rpx;

            .jian {
                width: 20rpx;
            }

            .xian {
                color: white;
                width: 400rpx;
                border-bottom: 3rpx solid #777777;
            }
        }
    }
    .alike {
        margin: 20rpx;
        background: white;
        padding: 25rpx 20rpx;
        .title {
            display: flex;
            align-items: center;
            font-size: 32rpx;

            .jian {
                width: 20rpx;
            }

            .xian {
                color: white;
                width: 400rpx;
                border-bottom: 3rpx solid #777777;
            }
        }
        .man{
            padding:10rpx 0;
            .flex{
                justify-content: space-between;
                margin:20rpx 0;
                .shu{
                    margin:0 10rpx;
                }
            }
        }
    }
</style>
