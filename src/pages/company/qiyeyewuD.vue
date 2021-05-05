<template>
    <view class="page u-border-top">
        <view class="first">
            <view class="fir-t">
                <u-image mode="aspectFill" width="90" height="90"
                         src="https://api.yiqiwang360.com/images/app/app_logo2.png"></u-image>
                <view class="fir-r u-margin-left-30">
                    <view class="name">hjud</view>
                    <view class="tips">
                        <text>开采</text>
                        <text>天然气</text>
                    </view>
                </view>
            </view>
            <view>
                <text class="gray">简介：</text>
                <u-read-more ref="uReadMore" show-height="200" :toggle="true" close-text="更多">
                    <u-parse :html="content" @load="parseLoaded"></u-parse>
                </u-read-more>
            </view>
            <view class="fir-b">
                <view class="item u-border-right">
                    <text class="gray">当前融资轮次</text>
                    <view>当前融资轮次</view>
                </view>
                <view class="item u-border-right">
                    <text class="gray">成立日期</text>
                    <view>当前融资轮次</view>
                </view>
                <view class="item">
                    <text class="gray">所属地</text>
                    <view>当前融资轮次</view>
                </view>
            </view>
        </view>
        <u-gap height="20" bg-color="#f3f3f3"></u-gap>
        <view class="info">
           <view class="title u-border-bottom">基本信息</view>
            <view class="info-con">
                <view>
                    <text class="gray">所属公司：</text>
                    <text class="red">所属公司：</text>
                </view>
                <view>
                    <text class="gray">法定代表人：</text>
                    <text class="red">所属公司：</text>
                </view>
                <view>
                    <text class="gray">注册资金：</text>
                    <text class="red">所属公司：</text>
                </view>
            </view>
        </view>
        <u-gap height="20" bg-color="#f3f3f3"></u-gap>
        <view class="member">
            <view class="title u-border-bottom">核心成员</view>
            <view class="mem-con">
                <u-image mode="aspectFill" width="90" height="90"
                         src="https://api.yiqiwang360.com/images/app/app_logo2.png"></u-image>
                <view class="con-r">
                    <view class="flex">
                       <text>mmm</text>
                        <view class="red">
                            <u-image mode="aspectFit" width="30" height="30"
                                     src="http://images.yiqiwang360.com/yiqicha/renzhi.png"></u-image>
                        <text class="u-margin-left-10">任职家企业</text>
                        </view>
                    </view>
                    <view>
                        <text class="gray">CEO</text>
                        <text class="gray shu">|</text>
                        <text class="gray">CEO</text>
                    </view>
                    <view>
                        <text class="gray">简介：</text>
                        <text>纪蓉蓉</text>
                    </view>
                </view>

            </view>
        </view>
        <u-gap height="20" bg-color="#f3f3f3"></u-gap>
        <view class="member">
            <view class="title u-border-bottom">企业股东</view>
            <view class="mem-con">
                <u-image mode="aspectFill" width="90" height="90"
                         src="https://api.yiqiwang360.com/images/app/app_logo2.png"></u-image>
                <view class="con-r">
                    <view class="flex">
                        <text>mmm</text>
                        <view class="red">
                            <u-image mode="aspectFit" width="30" height="30"
                                     src="http://images.yiqiwang360.com/yiqicha/renzhi.png"></u-image>
                            <text class="u-margin-left-10">任职家企业</text>
                        </view>
                    </view>
                    <view>
                        <text class="gray">CEO</text>
                        <text class="gray shu">|</text>
                        <text class="gray">CEO</text>
                    </view>
                    <view>
                        <text class="gray">持股比例：</text>
                        <text>纪蓉蓉</text>
                    </view>
                </view>

            </view>
        </view>
        <u-gap height="20" bg-color="#f3f3f3"></u-gap>
        <view class="jing">
            <view class="title u-border-bottom">竞品信息</view>
            <view class="mem-con">
                <u-image mode="aspectFill" width="90" height="90"
                         src="https://api.yiqiwang360.com/images/app/app_logo2.png"></u-image>
                <view class="con-r">
                    <view>
                        <text class="u-margin-left-15">mmm</text>
                    </view>
                    <view class="fir-b">
                        <view class="item u-border-right u-padding-right-10">
                            <text class="gray">当前融资轮次</text>
                            <view>当前融资轮次</view>
                        </view>
                        <view class="item u-border-right">
                            <text class="gray">所属地</text>
                            <view>上海</view>
                        </view>
                        <view class="item">
                            <text class="gray">所属地</text>
                            <view>当前融资轮次</view>
                        </view>
                    </view>
                    <view class="total">
                        <text class="tips">物流服务</text>
                        <text class="tips">物流服务</text>
                    </view>
                    <view>
                        <text class="gray">简介：</text>
                        <text class="gray">简介：</text>
                    </view>
                </view>

            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                content: `山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。
				苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。
				无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？`,
            }
        },
        methods:{
            parseLoaded() {
                this.$refs.uReadMore.init();
            }
        }
    }
</script>

<style lang="scss" scoped>
    .gray{
        color:#959595;
    }
    .first{
        padding:30rpx;
        .fir-t{
            display: flex;
            align-items: first;
            .fir-r{
                .name{
                    font-size: 35rpx;
                    font-weight: 600;
                }
                .tips{
                    margin:20rpx 0;
                    text{
                        padding:8rpx;
                        background: #EDF4FC;
                        margin-right:20rpx;
                        color:#1C78BB;
                    }
                }
            }
        }
        .fir-b{
            display: flex;
            align-items: center;
            text-align: center;
            .item{
                line-height: 50rpx;
                flex-grow:1;
                padding:0 30rpx;
            }
        }
    }

    .info{
        .title{
            padding:30rpx;
            font-weight: 600;
            font-size: 32rpx;
        }
        .info-con{
            padding:30rpx;
            line-height: 50rpx;
        }
    }
    .member{
        .title{
            padding:30rpx;
            font-weight: 600;
            font-size: 32rpx;
        }
        .mem-con{
            padding:30rpx;
            display: flex;
            .con-r{
                line-height: 50rpx;
                flex: 1;
                margin-left:20rpx;
                .flex{
                    justify-content: space-between;
                    align-items: center;
                    .red{
                        display: flex;
                    }
                }
                .shu{
                    padding:0 20rpx;
                }
                .fir-b{
                    display: flex;
                    align-items: center;
                    text-align: center;
                    .item{
                        line-height: 50rpx;
                        flex-grow: 1;
                    }
                }
            }
        }
    }
    .jing{
        .title{
            padding:30rpx;
            font-weight: 600;
            font-size: 32rpx;
        }
        .mem-con{
            padding:30rpx;
            display: flex;
            .con-r{
                line-height: 50rpx;
                flex: 1;
                margin-left:10rpx;
                .flex{
                    justify-content: space-between;
                    align-items: center;
                    .red{
                        display: flex;
                    }
                }
                .shu{
                    padding:0 20rpx;
                }
                .fir-b{
                    display: flex;
                    align-items: center;
                    text-align: center;
                    .item{
                        line-height: 50rpx;
                        width:40%;
                    }
                }
                .total{
                    margin:15rpx 0;
                    .tips{
                        background: #F7F7F7;
                        padding:10rpx 15rpx;
                        margin-right:15rpx;
                        border-radius: 10rpx;
                    }
                }

            }
        }
    }
</style>