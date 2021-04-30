<template>
    <view class="page">
        <view class="white">
            <view class="search-history">
                <view class="se-title">
                    <view class="title-text">历史搜索</view>
                    <view class="clear-btn" @click="clearHistory">
                        <u-icon name="trash" color="#888888" label-color="#888888"
                                label-size="26" label="清空" size="26"></u-icon>
                    </view>
                </view>
                <view class="se-items">
                    <view class="se-item u-border-bottom" v-for="(item,k) in his" :key="k">
                        <u-icon name="clock" color="#333333" label-color="#333333"
                                label-size="28" :label="item" margin-left="10" size="36"></u-icon>
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
                   color:'black'
                },
                his:{},
                keyword:'',
                goodsList:'',
                pageNum: 0,
                cellStyle:{
                    padding: '0'
                }
            }
        },
        onNavigationBarSearchInputChanged(e){
            this.keyword = e.text
            //发起请求
            this.pageNum = 0
            this.goSearch()

        },
        onNavigationBarSearchInputConfirmed(e){
            this.keyword = e.text
            //写历史搜索
            this.setHistory()
            //发起请求
            this.pageNum = 0
            this.goSearch()
        },
        onNavigationBarButtonTap(e){
            //写历史搜索
            this.setHistory()
            //发起请求
            this.pageNum = 0
            this.goSearch()

        },
        onLoad (options) {
            //读取历史搜索
            this.his = uni.getStorageSync('searchHistory')
        },
        methods:{
            //写历史搜索
            setHistory(){
                let keyw = [this.keyword]
                let sh = [...uni.getStorageSync('searchHistory'),...keyw]
                uni.setStorageSync('searchHistory',sh)
                this.his = sh
            },
            //清空历史记录
            clearHistory(){
                uni.clearStorageSync('searchHistory')
                this.his = {}
            },
            async goSearch () {
                this.pageNum++
                const { data: res } = await this.$request({
                    method: 'POST',
                    url: 'applets/laolai',
                    data: {
                        keyword: this.keyword,
                        page: this.pageNum,
                        type:false
                    }
                })
                this.alertShow = true
                // uni.navigateTo({
                //     url: '/pages/ll/searchDetail?keyword=' + this.keyword
                // })
            },
            async getSearchList () {
                const res  = await this.$request({
                    url: 'applets/laolai',
                    method:'POST',
                    data: {
                        keyword: this.keyword,
                        page: 1,
                        type:false
                    }
                }).then(res=>{
                    console.log(11)
                    this.goodsList = res
                    let dataNum = res.length
                    console.log(dataNum)
                    if (dataNum>=1){
                        this.emptyShow = false
                    }else{
                        this.emptyShow = true
                    }
                    if(this.type==true){
                        uni.navigateTo({
                            url:'/pages/ll/searchDetail?type=' + type
                        })
                    }else{
                        uni.navigateTo({
                            url:'/pages/ll/searchDetail?type=' + type
                        })
                    }
                    // if(this.keyword){
                    //     uni.navigateTo({
                    //         url: '/pages/ll/searchDetail?keyword=' + this.keyword
                    //     })
                    // }


                }) .catch(function (error) {
                    console.log(error);
                });

                this.qualityList = res.data.quality
                this.personList = res.data.person
                this.discussList = res.data.discuss
                if (res.data.content) {
                    this.newsList = res.data.content
                } else {
                    this.newsList = []
                }
                //判断全部为空的吸星大法

            },
            llDetail(){
                uni.navigateTo({
                    url:'/pages/ll/llDetail'
                })
            },
            llshop(){
                uni.navigateTo({
                    url:'/pages/ll/llshop'
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
    .search-history{
        background: #ffffff;
        margin: 20rpx 0;
        .se-title{
            display: flex;
            line-height: 40rpx;
            .title-text{
                flex: 1;
                font-size: 30rpx;
                font-weight: bold;
            }
            .clear-btn{
                width: 180rpx;
                text-align: right;
                font-size: 22rpx;
            }
        }
    }
    .se-items{
        padding-top: 10rpx;
        .se-item{
            padding: 30rpx 0;
        }
    }
    .white{
        background: #ffffff;
        padding:10rpx 30rpx;
        .sou{
            color:#ABABAB;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
    .shops{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        .shop{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            border-radius: 5rpx;
            padding:10rpx 20rpx;
            margin:10rpx 0 10rpx 0;
            background-color: #F8F5F7;
            text{
                margin-left:10rpx;
            }
        }
    }
</style>