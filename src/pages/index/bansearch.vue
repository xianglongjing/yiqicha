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
                            input-align="left" style="width: 520rpx;height:30rpx; padding:30rpx 0;background: #f8f8f8"
                            placeholder="请输入企业名称或网址名称" shape="square"
                            v-model="query"
                    ></u-search>
                </view>
            </uni-nav-bar>
            <view v-if="query==''">
            <view class="sou u-margin-top-50">
                <text>热门搜索</text>
            </view>
            <view class="tips">
                <text>北京锤子数码科技有限公司</text>
            </view>
            </view>
        </view>
        <u-empty src="http://images.yiqiwang360.com/yiqicha/wujilu.png" class="u-margin-30" :show="emptyShow">
        </u-empty>
        <view class="con">
<!--            <view class="num">搜到 <text class="red">123456</text>个网站备案</view>-->
            <view class="desc" v-for="item in goodsList" :key="item.id" @click="shopDetail(item.id)">
                <view class="top u-border-bottom">
                    <view class="name">{{item.corporate.cpyname}}</view>
                    <view>
                        <view>
                            <text class="gray">网站首页：</text>
                            <text>{{item.address}}</text>
                        </view>
                        <view>
                            <text class="gray">备案号：</text>
                            <text>{{item.number}}</text>
                        </view>
                        <view>
                            <text class="gray">主办单位性质：</text>
                            <text>{{item.name}}</text>
                        </view>
                        <view class="right">
                            <view class="date">{{item.date}}</view>
                            <u-icon name="arrow-right" size="40" color="#A9A9A9"></u-icon>
                        </view>
                    </view>

                </view>
                <view class="brand">
                    <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/lianjie.png" width="35" height="35"></u-image>
                    <view class="u-margin-left-10">
                        关联公司
                        <text class="red u-margin-left-10">{{item.corporate.cpyname}}</text>
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
                query:'',
                emptyShow:false,
                goodsList:[],
                record:[]
            }
        },
        onLoad (options) {
            this.keyword = options.query
        },
        methods:{
            goSearch(){
                this.getSearchList()
            },
            async getSearchList () {
                const { data: res } = await this.$request({
                    url: 'applets/record',
                    method:'POST',
                    data: {
                        keyword: this.query,
                        page: 1
                    }
                })
                console.log(res)
                this.goodsList = res
                this.record = res.record
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
            shopDetail(id){
                uni.navigateTo({
                    url:'/pages/index/chashop?id='+id
                })
            }
        }
    }
</script>
<style>
    page{
        background: #f8f8f8;
    }
</style>
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
    .con{
        .num{
            padding:30rpx 30rpx 0;
        }
    }
    .desc{
        background: white;
        margin:30rpx;
        line-height: 50rpx;
        .top{
            padding:30rpx 25rpx 25rpx;
            position: relative;
            .right{
                position: absolute;
                right:10rpx;
                top:25rpx;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                .date{
                    margin-bottom: 70rpx;
                }
            }
        }
        .name{
            font-size: 30rpx;
        }
        .brand{
            display: flex;
            padding:25rpx;
            align-items: center;
        }
    }
</style>