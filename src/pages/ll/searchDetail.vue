<template>
    <view class="page">
        <view class="white">
            <uni-nav-bar :status-bar="true" left-icon="back" :fixed="true" :border="false" :shadow="false" @clickLeft="goBack">
                <view class="inline-block u-border-bottom" style="width:100%;padding:20rpx">
                    <u-search
                            :action-style="search_btn"
                            :animation="true"
                            @custom="goSearch"
                            @search="goSearch"
                            bg-color="#f8f8f8"
                            input-align="left" style="width: 560rpx;height:30rpx; padding:30rpx 0;background: #f8f8f8"
                            placeholder="请输入公司名称/人名" shape="square"
                            v-model="keyword"
                    ></u-search>
                </view>
            </uni-nav-bar>
        </view>
        <view class="list">
            <view style="width:70%;margin:0 auto">
            <u-tabs
                    :list="newList"
                    :current="current"
                    @change="newChange" gutter="55"
                    bar-width="50" font-size="30"
                    active-color="#E2291D" bg-color="none" inactive-color="#666666"
            ></u-tabs>
            </view>
        </view>
        <view class="con">
            <view>为你找到 <text class="red">1234</text>个老赖</view>
            <view class="desc">
                <view class="top">
                    <view class="flex">
                        <u-image width="80" height="80"
                                 src="https://img2.baidu.com/it/u=4094106402,3378912480&fm=26&fmt=auto&gp=0.jpg"></u-image>
                        <text class="name">张三</text>
                    </view>
                    <view>
                        <text class="red">老赖</text>
                    </view>
                </view>
                <view>
                    <text class="gray">身份证号码：</text>
                    <text>123456</text>
                </view>
                <view>
                    <text class="gray">简介：</text>
                    <text>张三，男，1990年出生</text>
                </view>
                <text class="lv">你可能感兴趣</text>
                <view>共 <text class="red">69</text>条失信信息</view>
            </view>
            <view class="desc">
                <view class="top">
                    <view class="flex">
                        <u-image width="80" height="80"
                                 src="https://img2.baidu.com/it/u=4094106402,3378912480&fm=26&fmt=auto&gp=0.jpg"></u-image>
                        <text class="name">张三</text>
                    </view>
                    <view>
                        <text class="red">老赖</text>
                    </view>
                </view>
                <view>
                    <text class="gray">身份证号码：</text>
                    <text>123456</text>
                </view>
                <view>
                    <text class="gray">简介：</text>
                    <text>张三，男，1990年出生</text>
                </view>
                <text class="lv">你可能感兴趣</text>
                <view>共 <text class="red">69</text>条失信信息</view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                search_btn:{
                    color:'#000000'
                },
                current:0,
                newList: [{
                    name: '失信自然人99+'
                }, {
                    name: '失信企业99+'
                }],
            }
        },
        methods:{
            newChange(index) {
                this.current = index;
            },
        }
    }
</script>
<style>
    page{
        background:#f8f8f8;
    }

</style>
<style lang="scss" scoped>
    .red{
        color:#E2291D;
    }
    .gray{
        color:#959595;
    }
    .white{
        background: white;
        padding:10rpx 30rpx;
        .sou{
            color:#ABABAB;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
   .list{
       width:100%;
       background: white;
   }
    .con{
        padding:25rpx;
    }
    .desc{
        background: white;
        margin:20rpx;
        padding:20rpx;
        line-height: 60rpx;
        .top{
            display: flex;
            align-items: center;
            justify-content: space-between;
            .red{
                border:1rpx solid #E2291D;
                border-radius: 6rpx;
                padding:5rpx;
            }
        }
        .flex{
            align-items: center;
            .name{
                font-weight: 600;
                margin-left:10rpx;
            }
        }
        .lv{
            background: #E1F8F2;
            color:#219F6B;
            padding:4rpx 15rpx;
            border-radius: 5rpx;
        }
    }
</style>