<template>
    <view class="page">
        <view class="sou">
            <view style="width: 100%">
                <u-search
                        :action-style="search_btn"
                        :animation="true"
                        @custom="goSearch"
                        @search="goSearch" clearabled @clear="clear"
                        bg-color="#F6F6F6" border-color="#C6C6C6"
                        input-align="left" height="80"
                        placeholder="请输入企业名称（所在国语言）" shape="square"
                        v-model="keyword"
                ></u-search>
            </view>
        </view>
        <view v-if="keyword==''">
            <view class="enter">
                <view class="title">及时查询入口</view>
                <view class="nation">
                    <view class="con">
                        <u-image src="http://images.yiqiwang360.com/yiqicha/chaquanqiu/chaquanqiu (8).png" border-radius="50%" width="60" height="60"></u-image>
                        <text>中国香港</text>
                    </view>
                    <view class="con">
                        <u-image src="http://images.yiqiwang360.com/yiqicha/chaquanqiu/chaquanqiu (7).png" border-radius="50%" width="60" height="60"></u-image>
                        <text>德国</text>
                    </view>
                    <view class="con">
                        <u-image src="http://images.yiqiwang360.com/yiqicha/chaquanqiu/chaquanqiu (6).png" border-radius="50%" width="60" height="60"></u-image>
                        <text>法国</text>
                    </view>
                    <view class="con">
                        <u-image src="http://images.yiqiwang360.com/yiqicha/chaquanqiu/chaquanqiu (5).png" border-radius="50%" width="60" height="60"></u-image>
                        <text>意大利</text>
                    </view>
                    <view class="con">
                        <u-image src="http://images.yiqiwang360.com/yiqicha/chaquanqiu/chaquanqiu (4).png" border-radius="50%" width="60" height="60"></u-image>
                        <text>卢森堡</text>
                    </view>
                    <view class="con">
                        <u-image src="http://images.yiqiwang360.com/yiqicha/chaquanqiu/chaquanqiu (3).png" border-radius="50%" width="60" height="60"></u-image>
                        <text>荷兰</text>
                    </view>
                    <view class="con">
                        <u-image src="http://images.yiqiwang360.com/yiqicha/chaquanqiu/chaquanqiu (2).png" border-radius="50%" width="60" height="60"></u-image>
                        <text>爱尔兰</text>
                    </view>
                    <view class="con">
                        <u-image src="http://images.yiqiwang360.com/yiqicha/chaquanqiu/chaquanqiu (1).png" border-radius="50%" width="60" height="60"></u-image>
                        <text>瑞典</text>
                    </view>
                    <view class="con">
                        <u-image src="http://images.yiqiwang360.com/yiqicha/chaquanqiu/chaquanqiu (11).png" border-radius="50%" width="60" height="60"></u-image>
                        <text>比利时</text>
                    </view>
                    <view class="con">
                        <u-image src="http://images.yiqiwang360.com/yiqicha/chaquanqiu/chaquanqiu (10).png" border-radius="50%" width="60" height="60"></u-image>
                        <text>丹麦</text>
                    </view>
                    <view class="con">
                        <u-image src="http://images.yiqiwang360.com/yiqicha/chaquanqiu/chaquanqiu (9).png" border-radius="50%" width="60" height="60"></u-image>
                        <text>挪威</text>
                    </view>
                </view>
            </view>
        </view>
        <u-empty src="http://images.yiqiwang360.com/yiqicha/wujilu.png" class="u-margin-30" :show="emptyShow">
        </u-empty>
        <view class="white" v-if="keyword!==''" v-for="item in goodsList" :key="item.id" @click="Detail(item.id)">
            <u-image mode="aspectFill" width="50" height="40"
                    src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic2.zhimg.com%2F50%2Fv2-99dbc76ccf938ba12e551f08860f438b_hd.jpg&refer=http%3A%2F%2Fpic2.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621737672&t=98697c77a3244d2eaade7d20ea88babe"
            ></u-image>
            <view class="right">
                <view class="name u-margin-bottom-10">{{item.cpyname}}</view>
                <text class="country">德国</text>
                <view class="u-margin-top-10">
                    <text>注册号：
                    <text class="gray">{{item.brn ? item.brn :'—'}}</text>
                    </text>
                    <view>城市：
                        <text class="gray">{{item.town ? item.town :'—'}}</text>
                    </view>
                    <text>地址：
                        <text class="gray">{{item.address ? item.address :'—'}}</text>
                    </text>
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
                    color:'#000000'
                },
                keyword:'',
                emptyShow:false,
                goodsList:[]
            }
        },
        methods:{
            goSearch(){
                this.getSearchList()
            },
            async getSearchList () {
                const { data: res } = await this.$request({
                    url: 'applets/foreign',
                    method:'POST',
                    data: {
                        keyword: this.keyword,
                        page: 1
                    }
                })
                console.log(res)
                this.goodsList = res
                this.corporate = res.corporate
                // //判断全部为空的吸星大法
                let dataNum = res.length
                console.log(dataNum)
                if (dataNum>=1){
                    this.emptyShow = false
                }else{
                    this.emptyShow = true
                }
                if(res.keyword==''){
                    this.emptyShow = false
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
            Detail(id){
                uni.navigateTo({
                    url:'/pages/index/globalDetail?id='+id
                })
            },
        }
    }
</script>
<style lang="scss">
    page {
        background: #f8f8f8;
    }
</style>
<style lang="scss" scoped>
    .gray{
        color:#858786;
    }
.sou{
    padding:30rpx;
    background:white;
    width:100%;
    height:150rpx;
}
    .enter{
        background: white;
        padding:30rpx;
        width:92%;
        margin:30rpx auto;
        .title{
            font-size: 32rpx;
            font-weight: 640;
        }
        .nation{
            margin-top:25rpx;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            .con{
                width:20%;
                margin:20rpx 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                text{
                    margin-top: 6rpx;
                }
            }
        }
    }
    .white{
        background:white;
        margin:30rpx;
        padding:25rpx;
        display: flex;
        .right{
            margin-left:20rpx;
            .name{
                font-size: 30rpx;
                color:#E75D54;
            }
            .country{
                color:#5D81BA;
                padding:5rpx 9rpx;
                border-radius: 6rpx;
                border:1rpx solid #5D81BA;
            }
        }
    }
</style>