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
                    @change="newChange" gutter="50"
                    bar-width="50" font-size="30"
                    active-color="#E2291D" bg-color="none" inactive-color="#666666"
            ></u-tabs>
            </view>
        </view>
        <view class="con" v-if="current==0">
<!--            <view>为你找到 <text class="red">1234</text>个老赖</view>-->
            <view class="desc" v-for="item in person" :key="item.id" @click="man(item.code)">
                <view class="top">
                    <view class="flex">
                        <u-image width="80" height="80"
                                 src="https://api.yiqiwang360.com/images/app/app_logo2.png"></u-image>
                        <text class="name">{{item.dishonest}}</text>
                    </view>
                    <view>
                        <text class="red">老赖</text>
                    </view>
                </view>
                <view>
                    <text class="gray">身份证号码：</text>
                    <text>{{item.code}}</text>
                </view>
                <view>
                    <text class="gray">简介：</text>
                    <text>{{item.synopsis ? item.synopsis : '-'}}</text>
                </view>
                <text class="lv">你可能感兴趣</text>
                <view>共 <text class="red">{{item.quantity}}</text>条失信信息</view>
            </view>
        </view>
        <view class="con" v-if="current==1">
            <view class="desc" v-for="item in goodsList" :key="item.id" @click="shop(item.uscc)">
                <view class="top">
                    <view class="flex">
                        <u-image width="80" height="80"
                                 src="https://api.yiqiwang360.com/images/app/app_logo2.png"></u-image>
                        <text class="name">{{item.cpyname}}</text>
                    </view>
                    <view>
                        <text class="red">老赖</text>
                    </view>
                </view>
                <view>
                    <text class="gray">法定代表人：</text>
                    <text>{{item.partner.name}}</text>
                </view>
                <view>
                    <text class="gray">注册资金：</text>
                    <text>{{item.rtdcapital ? item.rtdcapital :'-'}}</text>
                </view>
                <view>
                    <text class="gray">成立日期：</text>
                    <text>{{item.ebhtdate ? item.ebhtdate : '-'}}</text>
                </view>
                <view>
                    <text class="gray">组织机构代码：</text>
                    <text>{{item.uscc ? item.uscc: '-'}}</text>
                </view>
                <view>共 <text class="red">{{item.legalres}}</text>条失信信息</view>
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
                pageNum: 0,
                current:0,
                keyword:'',
                newList: [{
                    name: '失信自然人'
                }, {
                    name: '失信企业'
                }],
                goodsList:{},
                person:{}
            }
        },
        onLoad (options) {
            this.keyword = options.keyword
        },
        methods:{
            async goSearch () {
                this.personList()
                this.getSearchList()
            },
            goBack(){
                uni.navigateBack({
                    delta: 1
                });
            },
            newChange(index) {
                this.current = index;
                // if (index===0){
                //     this.type=true
                // }
                // if (index===1){
                //     this.type=false
                // }
            },
            async personList () {
                const res  = await this.$request({
                    url: 'applets/laolai',
                    method:'POST',
                    data: {
                        keyword: this.keyword,
                        page: 1,
                        type:true
                    }
                }).then(res=>{
                    console.log(res)
                    this.person = res.data
                    let dataNum = res.length
                    console.log(dataNum)
                    if (dataNum>=1){
                        this.emptyShow = false
                    }else{
                        this.emptyShow = true
                    }
                    if(this.type==true){
                        this.current=0
                    }else{
                        this.current=1
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
                    console.log(res)
                    this.goodsList = res.data
                    let dataNum = res.length
                    console.log(dataNum)
                    if (dataNum>=1){
                        this.emptyShow = false
                    }else{
                        this.emptyShow = true
                    }
                }) .catch(function (error) {
                    console.log(error);
                });
                if (res.data.content) {
                    this.newsList = res.data.content
                } else {
                    this.newsList = []
                }
                //判断全部为空的吸星大法

            },
            man(code){
                uni.navigateTo({
                    url:'/pages/ll/llDetail?code='+code
                })
            },
            shop(uscc){
                uni.navigateTo({
                    url:'/pages/ll/llshop?uscc='+uscc
                })
            }
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