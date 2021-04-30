
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
                                bg-color="#f8f8f8" @clear="clear"
                                input-align="left" clearabled
                                placeholder="搜索" shape="square"
                                v-model="keyword"
                        ></u-search>
                    </view>
                </view>
            </view>
        </uni-nav-bar>
        <view class="company">
<!--            <view>为您找到 <text class="red">123456</text>家公司</view>-->
            <u-empty text="暂无相关内容" mode="list" src="http://images.yiqiwang360.com/yiqicha/wujilu.png" class="u-margin-30" :show="emptyShow">
            </u-empty>
            <view class="com-con" v-if="keyword&&!emptyShow" :key="item.id" v-for="item in goodsList" @click="shopDetail(item.id)">
            <view class="com-top u-line-1 u-border-bottom u-padding-bottom-30">
                <u-image mode="aspectFit" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2F12365.ce.cn%2Fzlpd%2Fzly2014%2Fcy013%2Fcy2013%2Fgd%2F201409%2F19%2FW020140919558211329941.jpg&refer=http%3A%2F%2F12365.ce.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621216071&t=f8232ea8f655c0363c1a1cec0ffc7365" width="70" height="70"></u-image>
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
<!--                <view class="brand" v-for="(item2,index) in trademark" :key="item2.id">-->
<!--                    <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/lianjie.png" width="30" height="30"></u-image>-->
<!--                    <view class="u-margin-left-10">-->
<!--                        商标信息:-->
<!--                        <text class="red u-margin-left-10">铭远</text>-->
<!--                    </view>-->
<!--                </view>-->
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
    </view>
</template>
<script>
    export default {
        data(){
            return {
                search_btn: {
                    color: '#000000'
                },
                page:1,
                pageNum: 1,
                loadStatus: 'more',
                goodsList: [],
                goodlist:[],
                trademark:[],
                partner:[],
                emptyShow:false,
                keyword: '',
            }
        },
        onLoad (options) {
            this.keyword = options.keyword
        },
        // 到底部
        onReachBottom () {
            if (this.goodsList.length < this.pageNum * 10) return this.loadStatus = 'more'
            this.pageNum++
            this.getSearchList()
        },
        // 下拉刷新
        onPullDownRefresh () {
            this.pageNum = 1
            // this.pageNum++
            this.getSearchList()
            // this.goodsList = []
            // this.getSearchList(() => {
            //     uni.stopPullDownRefresh()
            // })
        },

        methods:{
            goSearch(){
                if (this.keyword === '') return uni.showToast({
                    title: '请输入关键词再搜索',
                    icon: 'none',
                    duration: 2000
                })
                if (this.keyword!=''){
                    this.getSearchList();
                }
            },
                async getSearchList () {
                    const { data: res } = await this.$request({
                        url: 'applets/checkcompany',
                        data: {
                            keyword: this.keyword,
                            page: this.pageNum
                        }
                    })
                    console.log(res)
                    this.goodsList = res
                    // this.goodsList = [...this.goodsList, ...res]
                    console.log([...this.goodsList, ...res])
                    // this.goodsList = this.goodsList.concat(res)
                    this.partner = res.partner
                    if (this.goodsList.length < res.total) {
                        this.loadStatus = 'loading'
                    } else {
                        this.loadStatus = 'nomore'
                    }
                    // callBack && callBack()
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
                this.pageNum = 0
                this.getSearchList()
            },
            shopDetail(id){
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