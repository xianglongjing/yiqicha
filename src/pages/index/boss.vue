

<template>
    <view class="page">
        <uni-nav-bar :status-bar="true" left-icon="back" :fixed="true" :border="false" :shadow="false" @clickLeft="goBack">
            <view slot="default">
                <view class="search-box">
                    <view class="inline-block" style="width: 500rpx">
                        <u-search
                                :action-style="search_btn"
                                :animation="true"
                                @custom="goSearch"
                                @search="goSearch"
                                bg-color="#f8f8f8"
                                input-align="left"
                                placeholder="搜索" shape="square"
                                v-model="query"
                        ></u-search>
                    </view>
                </view>
            </view>
        </uni-nav-bar>
        <view class="company" :key="item.id" v-for="item in goodsList">
            <view class="com-con">
                <view class="com-top u-line-1 u-border-bottom u-padding-bottom-30">
                    <u-image mode="aspectFit" src="https://yiqiwang360.com/images/yiqicha/beian.png" width="90" height="90"></u-image>
                    <view class="con-r">
                        <view class="name u-margin-bottom-10">{{item.corporate.cpyname}}</view>
                        <view class="u-margin-top-10 u-margin-bottom-10">
                            <text class="red">在业</text>
                        </view>
                        <view class="shop-bo">
                            <view class="bo-item u-border-right">
                                <text class="title">法人代表</text>
                                <text style="color:#E75D54">{{item.name}}</text>
                            </view>
                            <view class="bo-item u-border-right">
                                <text class="title">注册资金</text>
                                <text>{{item.corporate.rtdcapital? item.corporate.rtdcapital:'—'}}</text>
                            </view>
                            <view class="bo-item">
                                <text class="title">成立时间</text>
                                <text>{{item.corporate.ebhtdate? item.corporate.ebhtdate:'—'}}</text>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="brand">
                    <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/lianjie.png" width="30" height="30"></u-image>
                    <view class="u-margin-left-10">
                        法人代表：
                        <text class="red u-margin-left-10">{{item.name}}</text>
                    </view>
                    <view class="shu">|</view>
                    <view class="u-margin-left-10">
                        高管：
                        <text class="red">{{item.name}}</text>
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
                search_btn: {
                    color: '#000000'
                },
                keyword: '',
                goodsList:[]
            }
        },
        onLoad (options) {
            this.query = options.query
            this.getSearchList()
        },
        methods:{
            goSearch(){
                this.getSearchList()
            },
            async getSearchList () {
                const { data: res } = await this.$request({
                    method:'POST',
                    url: 'applets/boss',
                    data: {
                        keyword: this.query,
                        page: 1
                    }
                })
                console.log(res)
                this.goodsList = res
                // this.trademark = res.trademark
                // this.casesList = res.data.cases
                // this.qualityList = res.data.quality
                // this.personList = res.data.person
                // this.discussList = res.data.discuss
                // if (res.data.content) {
                //     this.newsList = res.data.content
                // } else {
                //     this.newsList = []
                // }
                // //判断全部为空的吸星大法
                let dataNum = res.length
                console.log(dataNum)
                if (dataNum>=1){
                    this.emptyShow = false
                }else{
                    this.emptyShow = true
                }
            },
            goBack(){
                uni.navigateBack({
                    delta: 1
                });
            },
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
    .company{
        margin:30rpx;
        .com-con{
            margin:20rpx 0;
            background: white;
            padding:20rpx;
            .brand{
                display: flex;
                flex-direction: row;
                align-items: center;
                padding:20rpx 0;
                .shu{
                    color:#E1E1E1;
                    margin:0 20rpx;
                }
            }
            .com-top{
                display: flex;
                flex-direction: row;
                .con-r{
                    flex:1;
                    margin-left:30rpx;
                    .name{
                        font-size: 30rpx;
                        font-weight: 540;
                    }
                    .red{
                        padding:8rpx;
                        font-size: 20rpx;
                        background: #FCEAE9;
                    }
                    .lv{
                        border-radius: 5rpx;
                        margin-left:10rpx;
                        color:#23AB7B;
                        background: #DFF8F2;
                        padding:8rpx;
                        font-size: 20rpx;
                    }
                    .shop-bo{
                        margin-top:20rpx;
                        /*display: flex;*/
                        /*flex-direction: row;*/
                        /*align-items: center;*/
                        /*justify-content: center;*/
                        flex-wrap: wrap;
                        .title{
                            line-height:50rpx;
                            color:#B8B8B8;
                        }
                        .bo-item{
                            font-size: 25rpx;
                            .title{
                                margin-right:40rpx;
                            }
                        }
                    }
                }


            }
        }

    }
</style>