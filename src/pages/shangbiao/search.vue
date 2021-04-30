<template>
    <view class="page">
        <view class="white">
        <uni-nav-bar :status-bar="true" left-icon="back" :fixed="true" :border="false" :shadow="false" @clickLeft="goBack">
        <view class="inline-block u-border-bottom" style="width:100%;padding:20rpx">
            <u-search
                    :action-style="search_btn"
                    :animation="true"
                    @custom="goSearch"
                    @search="goSearch" @clear="clear"
                    bg-color="#f8f8f8" clearabled
                    input-align="left" style="width: 560rpx;height:30rpx; padding:30rpx 0;background: #f8f8f8"
                    placeholder="请输入商标名称" shape="square"
                    v-model="keyword"
            ></u-search>
        </view>
        </uni-nav-bar>
<!--            <view v-if="keyword==''">-->
<!--            <view class="sou u-margin-top-50">-->
<!--                <text>最近搜索</text>-->
<!--                <view>-->
<!--                    <u-icon name="trash" size="30"></u-icon> 清空-->
<!--                </view>-->
<!--            </view>-->
<!--            <view class="tips">-->
<!--                <text>医企管家</text>-->
<!--                <text>医企网</text>-->
<!--                <text>一企查</text>-->
<!--            </view>-->
<!--            </view>-->
        </view>
        <view class="white u-margin-top-30 u-padding-bottom-50" v-if="keyword==''">
        <view class="sou u-margin-top-50">
            <text>热门搜索</text>
        </view>
        <view class="tips">
            <text>医企管家</text>
            <text>医企网</text>
            <text>一企查</text>
        </view>
    </view>
        <u-empty src="http://images.yiqiwang360.com/yiqicha/wujilu.png" class="u-margin-30" :show="emptyShow">
        </u-empty>
        <view class="infor" v-if="keyword&&!emptyShow" v-for="item in goodsList" :key="item.id" @click="detail(item.id)">
            <!--            <view class="num">为你找到 <text class="red">72</text>个商标</view>-->
            <view class="con">
               <u-image width="50" height="50" src="https://api.yiqiwang360.com/images/app/app_logo2.png"></u-image>
                 <view class="center">
                    <view class="name">铭远集团</view>
                    <view>
                        <text class="gray">申请/注册号：</text>
                        <text>{{item.apply}}</text>
                    </view>
                    <view>
                        <text class="gray">申请时间：</text>
                        <text>{{item.licationdate}}</text>
                    </view>
                    <view>
                        <text class="gray">国际分类：</text>
                        <text>45类-社会服务</text>
                    </view>
                    <view>
                        <text class="gray">申请人名称：</text>
                        <text>{{item.name}}</text>
                    </view>
                    <view>
                        <text class="gray">代理/办理机构：</text>
                        <text>{{item.proxy ? item.proxy : '-'}}</text>
                    </view>
                </view>
                <view class="last">
                    <text class="red">{{item.status}}</text>
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
                search_btn:{
                    color:'#E75D54'
                },
                keyword:'',
                goodsList:{},
                emptyShow:false,
            }
        },
        onLoad (options) {
            this.keyword = options.keyword
        },
        methods:{
            detail(id){
                uni.navigateTo({
                    url:'/pages/shangbiao/sbDetail?id='+id
                })
            },
            goBack(){
                uni.navigateBack({
                    delta: 1
                });
            },
            clear(){
                this.emptyShow = false
                uni.removeStorage({
                    key: 'keyword',
                    success() {
                        console.log('删除成功')
                    }
                })
                this.pageNum = 0
                // this.getSearchList()
            },
            async getSearchList () {
                const { data: res } = await this.$request({
                    url: 'applets/trademark',
                    method: 'POST',
                    data: {
                        keyword: this.keyword,
                        page: 1
                    }
                })
                this.goodsList = res
                console.log(res.id)
                // }
                // //判断全部为空的吸星大法
                let dataNum = res.length
                console.log(dataNum)
                // if (dataNum>=1){
                //     this.emptyShow = true
                // }else{
                //     this.emptyShow = true
                // }
                // if(dataNum==0){
                //     this.emptyShow = true
                // }
            },
            goSearch(){
                this.getSearchList()
            },
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