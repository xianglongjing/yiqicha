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
                            placeholder="请输入商标名称" shape="square"
                            v-model="keyword"
                    ></u-search>
                </view>
            </uni-nav-bar>
        </view>
        <u-empty class="u-margin-30" text="暂无相关内容" mode="search" :show="emptyShow"></u-empty>
        <view class="infor" v-for="item in goodsList" :key="item.id" @click="detail(item.id)">
<!--            <view class="num">为你找到 <text class="red">72</text>个商标</view>-->
            <view class="con">
                <view>铭远集团</view>
                <view class="center">
                    <view class="name">铭远集团</view>
                    <view>
                        <text class="gray">申请/注册号：</text>
                        <text>123456789</text>
                    </view>
                    <view>
                        <text class="gray">申请时间：</text>
                        <text>2020-02-12</text>
                    </view>
                    <view>
                        <text class="gray">国际分类：</text>
                        <text>45类-社会服务</text>
                    </view>
                    <view>
                        <text class="gray">申请人名称：</text>
                        <text>123456789</text>
                    </view>
                    <view>
                        <text class="gray">代理/办理机构：</text>
                        <text>123456789</text>
                    </view>
                </view>
                <view class="last">
                    <text class="red">商标已注册</text>
                    <view class="u-margin-top-60">
                        <u-icon name="arrow-right" size="40" color="#A9A9A9"></u-icon>
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
                emptyShow:false,
                keyword:'',
                goodsList:{},
                search_btn:{

                }
            }
        },
        methods:{
            detail(id){
                uni.navigateTo({
                    url:'/pages/shangbiao/sbDetail?id'+id
                })
            },
            goBack(){
                uni.navigateBack({
                    delta: 1
                });
            },
            goSearch(){
                this.getSearchList()
            },
            async getSearchList () {
                const { data: res } = await this.$request({
                    url: 'applets/trademark',
                    data: {
                        keyword: this.keyword,
                        page: 1
                    }
                })
                this.goodsList = res
                // }
                // //判断全部为空的吸星大法
                let dataNum = res.length
                console.log(dataNum)
                if (dataNum>1){
                    this.emptyShow = false
                }else{
                    this.emptyShow = true
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
    .red{
        color:#E75D54;
    }
    .gray{
        color:#A9A9A9;
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
        .tips{
            margin:20rpx 0;
            font-size: 25rpx;
            padding:20rpx 0;
            text{
                background: #F7F7F7;
                margin-right:30rpx;
                padding:10rpx 15rpx;
            }
        }
    }
    .infor{
        .num{
            padding:30rpx;
        }
        .con{
            width:100%;
            background: white;
            display: flex;
            padding:30rpx;
            align-items: center;
            position: relative;
            .center{
                margin-left:50rpx;
                line-height: 50rpx;
                .name{
                    font-size: 30rpx;
                    font-weight: 600;
                    margin-bottom: 10rpx;
                }
            }
            .last{
                position: absolute;
                display: flex;
                flex-direction: column;
                align-items: center;
                right:30rpx;
                top:60rpx;
                .red{
                    margin-bottom: 30rpx;
                    border:1rpx solid #E75D54;
                    border-radius: 5rpx;
                    font-size: 26rpx;
                    padding:2rpx 5rpx;
                }
            }
        }
    }
</style>