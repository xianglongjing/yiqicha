<template>
    <view class="page">
        <view class="redbg">
            <image
                    src="http://images.yiqiwang360.com/yiqicha/chashangbiao.png"
                    style="width: 100%;height: 100%;"></image>
            <view class="zi">
<!--                <view class="title">商标免费查询</view>-->
                <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/tg/tg.png"
                         height="100"
                         width="450"></u-image>
                <view>先查询再注册 有效提高成功率</view>
            </view>
            <view class="sou">
                <u-search
                        :action-style="search_btn"
                        :animation="true"
                        @click="go" disabled
                        bg-color="#f8f8f8"
                        input-align="left" height="80"
                        placeholder="请输入商标名称，申请号，申请人信息" shape="square"
                        v-model="query"
                ></u-search>
                <view class="shops">
                    <view style="font-style: oblique;font-weight: 620"> 热搜</view>
                    <view class="shop">
                        <text>一企查</text>
                    </view>
                    <view class="shop">
                        <text>医企管家</text>
                    </view>
                    <view class="shop">
                        <text>医企网</text>
                    </view>
                </view>
            </view>
        </view>
        <view class="infor">
            <view>
                <view class="title red">什么是商标查询?</view>
                <view class="u-margin-top-10">
                    商标查询是指商标注册申请人亲自或委托商标代理人查询有关商标登记注册情况，
                    以了解自己准备申请注册的商标是否与他人已经注册或正在注册的商标相同或近似的程序。
                </view>
            </view>
            <view class="u-margin-top-50">
                <view class="title red">商标查询意义</view>
                <view class="u-margin-top-10">
                    1、探明注册障碍
                    <view>2、弄清商标是否安全使用</view>
                    3、发现抢注商标
                    <view>4、了解申请进展</view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                search_btn:{
                    color:'white'
                }
            }

        },
        methods:{
            go(){
                uni.navigateTo({
                    url:'/pages/shangbiao/search'
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    page{
        background: #f8f8f8;
    }
    .red{
        color:#E75D54;
    }
    .redbg{
        /*background-size: 250rpx 200rpx;*/
        /*background: url("http://images.yiqiwang360.com/yiqicha/fengxian.png") no-repeat;*/
        position: relative;
        /*color:white;*/
        /*padding:50rpx 20rpx;*/
        height:530rpx;
        width:100%;
        .zi{
            color:white;
            position: absolute;
            top:15rpx;
            left:30rpx;
            margin-left:20rpx;
            .title{
                font-size: 50rpx;
            }
        }
        .sou{
            color:white;
            position: absolute;
            top:230rpx;
            left:35rpx;
            right:35rpx;
        }
        .shops{
            margin:40rpx 0;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            .shop{
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                text{
                    border-radius: 25rpx;
                    padding:10rpx 15rpx;
                    margin:0 10rpx;
                    font-size: 25rpx;
                    background-color: rgba(255,255,255,0.2);
                }
            }
        }
    }
    .infor{
        position: absolute;
        top:480rpx;
        left:30rpx;
        padding:40rpx 30rpx;
        width:92%;
        border-radius: 10rpx;
        background: white;
        .title{
            font-size: 30rpx;
            font-weight: 650;
        }
    }
</style>