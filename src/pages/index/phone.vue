<template>
    <view>
        <view class="white">
        <view class="inline-block u-border-bottom" style="width:100%">
            <u-search
                    :action-style="search_btn"
                    :animation="true"
                    @custom="goSearch"
                    @search="goSearch"
                    bg-color="#f8f8f8"
                    input-align="left" style="width: 560rpx; padding:20rpx 0;"
                    placeholder="请输入企业名称" shape="square"
                    v-model="keyword"
            ></u-search>
        </view>
            <view v-if="keyword==''">
        <view class="sou u-margin-top-20">热门搜索</view>
        <view class="tips u-margin-top-20">
            <text>医企管家</text>
            <text>医企网</text>
            <text>一企查</text>
        </view>
            </view>
<!--            <view style="height:50rpx"></view>-->
            <u-empty class="u-margin-30" text="暂无相关内容" mode="search" :show="emptyShow"></u-empty>

    </view>
        <view class="company u-margin-top-20">
            <view class="com-con" :key="item.id" v-for="item in goodsList" @click="shopDetail(item.id)">
                <view class="com-top u-line-1 u-border-bottom u-padding-bottom-30">
                    <view class="con-r">
                        <view class="name u-margin-bottom-10">{{item.cpyname}}</view>
                        <view class="u-margin-top-10 u-margin-bottom-10">
                            <text class="red">在业</text>
                            <text class="lv">商务服务业</text>
                        </view>
                        <view class="shop-bo">
                            <view class="bo-item u-border-right" style="margin-left:-40rpx">
                                <text class="title">法人代表</text>
                                <text>{{item.partner.name}}</text>
                            </view>
                            <view class="bo-item u-border-right">
                                <text class="title">注册资金</text>
                                <text>{{item.rtdcapital? item.rtdcapital:'—'}}</text>
                            </view>
                            <view class="bo-item">
                                <text class="title">成立时间</text>
                                <text>{{item.ebhtdate? item.ebhtdate:'—'}}</text>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="brand" v-if="item.trademark==''" v-for="(item,index) in trademark" :key="item.id">
                    <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/lianjie.png" width="30" height="30"></u-image>
                    <view class="u-margin-left-10">
                        商标信息:
                        <text class="red u-margin-left-10">{{item.name}}</text>
                    </view>
                </view>
                <view class="brand">
                    <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/lianjie.png" width="30" height="30"></u-image>
                    <view class="u-margin-left-10">
                        电话:
                        <text class="red u-margin-left-10">{{item.phone? item.phone:'—'}}</text>
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
                search_btn:{
                    color:'#E75D54'
                },
                emptyShow:false,
                goodsList:{},
                trademark:[],
                keyword:''
            }
        },
        methods:{
            goSearch(){
                this.getSearchList()
            },
            async getSearchList () {
                const { data: res } = await this.$request({
                    url: 'applets/checkcompany',
                    data: {
                        keyword: this.keyword,
                        page: 1
                    }
                })
                console.log(res)
                this.goodsList = res
                this.trademark = res.trademark
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
                if(dataNum==0){
                    this.emptyShow = true
                }
                if (dataNum>=1){
                    this.emptyShow = false
                }else{
                    this.emptyShow = true
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
page{
    background: #ffffff;
}
    .white{
        background: white;
        padding:30rpx 30rpx 0;
        .sou{
            color:#ABABAB;
        }
        .tips{
            font-size: 25rpx;
            text{
                background: #F7F7F7;
                margin-right:30rpx;
                padding:10rpx 15rpx;
            }
        }
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
        }
        .com-top{
            display: flex;
            flex-direction: row;
            .con-r{
                flex:1;
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
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    flex-wrap: wrap;
                    .title{
                        line-height:50rpx;
                        color:#B8B8B8;
                    }
                    .bo-item{
                        font-size: 25rpx;
                        flex:1;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-direction: column;
                        text-align: center;
                    }
                }
            }


        }
    }

}
</style>