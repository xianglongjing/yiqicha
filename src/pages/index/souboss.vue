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
                                @search="goSearch" @clear="clear"
                                bg-color="#f8f8f8"
                                input-align="left" clearabled
                                placeholder="输入老板信息，如马云“杭州”" shape="square"
                                v-model="keyword"
                        ></u-search>
                    </view>
                </view>
            </view>
        </uni-nav-bar>
        <view v-if="keyword==''">
        <view class="hot">
            <view class="title u-margin-bottom-20 u-font-32">热门搜索</view>
            <view class="hot-laolai">
                <scroll-view class="scroll-view_H" scroll-x="true">
                    <view class="u-margin-top-10">
                        <view class="lai-item" @click="detail(item2.id)" v-for="item2 in hot" :key="item2.id">
<!--                            <view class="lai-img">-->
<!--&lt;!&ndash;                                <u-image src="http://images.yiqiwang360.com/yiqicha/gongsiming.png" width="60" height="60"></u-image>&ndash;&gt;-->
<!--                            </view>-->
                            <view class="lai-name">{{item2.name}}</view>
                        </view>
                    </view>
                </scroll-view>
            </view>
<!--            <view class="con">-->
<!--                <view class="person">-->
<!--&lt;!&ndash;                    <u-image src="http://images.yiqiwang360.com/yiqicha/renwu.png" width="60" height="60"></u-image>&ndash;&gt;-->
<!--                    <text>马云</text>-->
<!--                </view>-->
<!--            </view>-->
        </view>
<!--        <view class="boss">-->
<!--            <view class="u-margin-bottom-20 u-font-32">临沂热门老板</view>-->
<!--            <view class="desc">-->
<!--                <u-image src="http://images.yiqiwang360.com/yiqicha/renwu.png" width="60" height="60"></u-image>-->
<!--                <view class="desc-r">-->
<!--                   <view class="name">-->
<!--                       <view class="u-font-30">张三</view>-->
<!--                       <view class="num">他有15家公司</view>-->
<!--                   </view>-->
<!--                    <view>自身风险20条 周边风险812条 预警提醒122条</view>-->
<!--                </view>-->
<!--            </view>-->
<!--            <view class="desc">-->
<!--                <u-image src="http://images.yiqiwang360.com/yiqicha/renwu.png" width="60" height="60"></u-image>-->
<!--                <view class="desc-r">-->
<!--                    <view class="name">-->
<!--                        <view class="u-font-30">李四</view>-->
<!--                        <view class="num">他有15家公司</view>-->
<!--                    </view>-->
<!--                    <view>自身风险20条 周边风险812条 预警提醒122条</view>-->
<!--                </view>-->
<!--            </view>-->
<!--            <view class="desc">-->
<!--                <u-image src="http://images.yiqiwang360.com/yiqicha/renwu.png" width="50" height="50"></u-image>-->
<!--                <view class="desc-r">-->
<!--                    <view class="name">-->
<!--                        <view class="u-font-30">王小五</view>-->
<!--                        <view class="num">他有15家公司</view>-->
<!--                    </view>-->
<!--                    <view>自身风险20条 周边风险812条 预警提醒122条</view>-->
<!--                </view>-->
<!--            </view>-->
<!--        </view>-->
        </view>
        <u-empty src="http://images.yiqiwang360.com/yiqicha/wujilu.png" class="u-margin-30" :show="emptyShow">
        </u-empty>
        <view class="company" v-if="keyword!==''" :key="item.id" v-for="item in goodsList" @click="detail(item.id)">
            <view class="com-con">
                <view class="com-top u-line-1 u-border-bottom u-padding-bottom-30">
                    <u-image mode="aspectFit" src="https://api.yiqiwang360.com/images/app/app_logo2.png" width="90" height="90"></u-image>
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
<!--                    <view class="shu">|</view>-->
<!--                    <view class="u-margin-left-10">-->
<!--                        高管：-->
<!--                        <text class="red">{{item.name}}</text>-->
<!--                    </view>-->
                </view>
            </view>
        </view>
        <u-loadmore
                color="#999999"
                font-size="24"
                margin-bottom="50"
                margin-top="50"
                :status="loadStatus"
                @loadmore="getSearchList"
                v-if="!emptyShow"
        ></u-loadmore>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                search_btn:{
                    color:'#000'
                },
                hot:{},
                keyword:'',
                emptyShow:false,
                page:1,
                pageNum: 1,
                loadStatus: 'nomore',
                goodsList:[]
            }
        },
        //到底部
        onReachBottom () {
            // if (this.goodsList.length < this.pageNum * 10) return this.loadStatus = 'nomore'
            this.pageNum++
            // this.getSearchList()
        },
        // 下拉刷新
        onPullDownRefresh () {
            this.pageNum = 1
            // this.goodsList = []
            // this.getSearchList(() => {
            //     uni.stopPullDownRefresh()
            // })
        },
        onLoad(){
            this.hotsearch()
            // this.getSearchList()
        },
        methods:{
            goSearch(){
                this.getSearchList()
            },
            async hotsearch () {
                const { data: res } = await this.$request({
                    method: 'GET',
                    url: 'applets/hotsearch',
                    data: {
                        type:'boss'
                    }
                })
                this.hot =res
                console.log(res)
            },
            // onPullDownRefresh() {
            //     this.page = 1
            //     this.goSearch()
            // },
            async getSearchList () {
                const { data: res } = await this.$request({
                    method:'POST',
                    url: 'applets/boss',
                    data: {
                        keyword: this.keyword,
                        page:this.pageNum
                    }
                })
                console.log(res)
                this.goodsList = res
                if (this.goodsList.length < res.total) {
                    this.loadStatus = 'loadmore'
                }
                // //判断全部为空的吸星大法
                let dataNum = res.length
                console.log(dataNum)
                if(this.keyword==''){
                    this.emptyShow = false
                }
                if (dataNum>=1){
                    this.emptyShow = false
                }else{
                    this.emptyShow = true
                }
            },
            clear(){
                this.emptyShow = false
                uni.removeStorage({
                    key: 'keyword',
                    success() {
                        console.log('删除成功')
                    }
                })
            },
            detail(id){
                uni.navigateTo({
                    url:'/pages/index/chashop?id='+id
                })
            },
            goBack(){
                uni.navigateBack({
                    delta: 1
                });
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
.hot{
    background: white;
    padding:30rpx;
    margin:20rpx auto;
    width:95%;
    .con{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        .person{
            width:30%;
            padding:18rpx;
            display: flex;
            align-items: center;
            flex-direction: row;
            background: #F8F6F7;
            margin:20rpx 15rpx 0 0;
            text{
                width:auto;
                margin-left: 20rpx;
            }
        }
    }
    .hot-laolai{
        white-space: nowrap;
        width: 100%;
        .lai-item{
            display: inline-block;
            border-radius: 5rpx;
            padding: 10rpx 20rpx;
            margin-right: 20rpx;
            background-color: rgba(0,0,0,0.1);
            line-height: 30rpx;
            .lai-img{
                display: inline-block;
                width: 60rpx;
                height: 60rpx;
                font-size: 0;
                vertical-align: middle;
            }
            .lai-name{
                display: inline-block;
                /*margin-left:20rpx;*/
                vertical-align: middle;
            }
        }
    }
}
    .boss{
        background: white;
        padding:30rpx;
        margin:20rpx auto;
        width:95%;
        .desc{
            margin:20rpx 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            .desc-r{
                margin-left:30rpx;
                flex:1;
                .name{
                    display: flex;
                    flex-direction: row;
                    margin-bottom:10rpx;
                    justify-content: space-between;
                    .num{
                        color:#A1A1A1;
                        font-size: 25rpx;
                    }
                }
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