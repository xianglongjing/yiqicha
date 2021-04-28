<template>
    <view class="page">
        <view class="menu">
            <u-tabs
                    :list="List"
                    :current="current"
                    @change="menuChange"
                    bar-width="50" font-size="30"
                    active-color="#E75D54" bg-color="none" inactive-color="#000000"
            ></u-tabs>
        </view>
        <view v-if="current===0" class="shop" @click="shopDetail(item.id)">
            <view class="shop-con">
            <view class="shop-top u-border-bottom">
            <u-image src="http://images.yiqiwang360.com/yiqicha/gongsiming.png" width="80" height="80"></u-image>
            <view class="shop-desc">
                <view class="name">小米科技有限责任公司</view>
                <text class="shangbiao">商标信息</text>
                <view class="small">名称：---</view>
                <view class="small">类型：材料加工</view>
                <view class="small">法律状态：---</view>
                <view class="small">商标申请日期：2021-03-20</view>
            </view>
                <text class="jiank">+监控</text>
            </view>
            <view class="shop-bo">
                <view>今天13:55</view>
                <view>
<!--                    <u-icon name="phone" color="#2979ff" size="28"></u-icon>-->
                   <text class="cuIcon-favor u-margin-right-10"></text>
                    收藏
                    <text class="cuIcon-edit u-margin-left-20 u-margin-right-10"></text>
                    备注
                </view>
            </view>
            </view>
            <view class="shop-con">
                <view class="shop-top u-border-bottom">
                    <u-image src="http://images.yiqiwang360.com/yiqicha/gongsiming.png" width="80" height="80"></u-image>
                    <view class="shop-desc">
                        <view class="name">小米科技有限责任公司</view>
                        <text class="shangbiao">商标信息</text>
                        <view class="small">名称：---</view>
                        <view class="small">类型：材料加工</view>
                        <view class="small">法律状态：---</view>
                        <view class="small">商标申请日期：2021-03-20</view>
                    </view>
                    <text class="jiank">+监控</text>
                </view>
                <view class="shop-bo">
                    <view>今天13:55</view>
                    <view>
                        <!--                    <u-icon name="phone" color="#2979ff" size="28"></u-icon>-->
                        <text class="cuIcon-favor u-margin-right-10"></text>
                        收藏
                        <text class="cuIcon-edit u-margin-left-20 u-margin-right-10"></text>
                        备注
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
                List: [{
                    name: '全部企业'
                }, {
                    name: '监控企业'
                }, {
                    name: '收藏企业'
                },
                    {
                        name: '好友企业'
                    },
                    {
                        name: '所在企业'
                    }],
                current:0,
            }
        },
        methods:{
            menuChange(index) {
                this.current = index;
            },
        }
    }
</script>

<style lang="scss" scoped>
page{
    background: #F8F6F7;
}
    .menu{
        background:white;
        padding:10rpx 0;
    }
    .shop{
        .shop-con{
            border-radius: 6rpx;
            padding:20rpx 15rpx;
            background:white;
            margin:20rpx 20rpx;
        }
        .shop-top{
            display: flex;
            flex-direction: row;
            .shop-desc{
                flex:1;
                line-height: 40rpx;
                margin-left:15rpx;
                .name{
                    font-weight: 650;
                    margin-top: 10rpx;
                }
                .shangbiao{
                    color:white;
                    background: #E2261A;
                    border-radius: 5rpx;
                    padding:5rpx 14rpx;
                    font-size: 20rpx;
                }
                .small{
                    font-size: 23rpx;
                }
            }
            .jiank{
                border:1rpx solid #E2261A;
                color:#E2261A;
                height:35rpx;
                line-height:35rpx;
                padding:0 7rpx 7rpx;
                border-radius: 10rpx;
                font-size: 25rpx;
            }
        }
        .shop-bo{
            display: flex;
            flex-direction: row;
            justify-content:space-between ;
            align-items: center;
            padding:10rpx 0 0;
            color:#ADADAD;
            font-size: 25rpx;
        }
    }
</style>