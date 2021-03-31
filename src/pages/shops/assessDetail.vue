<template>
    <view class="page">
        <view class="ass-top">
            <view class="ass-grade u-border-right">
                <text>评价评分</text>
                <text class="ass-number">5.0</text>
                <view class="ass-star">
                    <u-rate :count="count" v-model="star"></u-rate>
                </view>
            </view>
            <view class="ass-type">
                <view class="type-item">
                    <u-circle-progress :percent="100" active-color="#FE680A" width="130" border-width="6">
                        <view class="u-progress-content">
                            <view class="u-progress-dot ass-star">5.00</view>
                            <text class='u-progress-info text-xs'>完成质量</text>
                        </view>
                    </u-circle-progress>
                    <text class="text-xs">与同行相比</text>
                    <text class="text-xs">-持平-</text>
                </view>
                <view class="type-item">
                    <u-circle-progress :percent="100" active-color="#FE680A" width="130" border-width="6">
                        <view class="u-progress-content">
                            <view class="u-progress-dot ass-star">5.00</view>
                            <text class='u-progress-info text-xs'>工作态度</text>
                        </view>
                    </u-circle-progress>
                    <text class="text-xs">与同行相比</text>
                    <text class="text-xs">-持平-</text>
                </view>
                <view class="type-item">
                    <u-circle-progress :percent="100" active-color="#FE680A" width="130" border-width="6">
                        <view class="u-progress-content">
                            <view class="u-progress-dot ass-star">5.00</view>
                            <text class='u-progress-info text-xs'>服务态度</text>
                        </view>
                    </u-circle-progress>
                    <text class="text-xs">与同行相比</text>
                    <text class="text-xs">-持平-</text>
                </view>
            </view>
        </view>
        <view class="ass-cus">
            <text>客户评价 <text class="text-gray">（0）</text></text>
            <view class="cus-con">
                <text>好评率100%</text>
            </view>
            <view class="down">
            <u-icon name="arrow-down"></u-icon>
<!--                <u-read-more-->
<!--                        :toggle="true"-->
<!--                        show-height="120"-->
<!--                        ref="uReadMore"-->
<!--                        :shadow-style="shadowStyle"-->
<!--                        color="#ffffff"-->
<!--                        close-text="查看全部"-->
<!--                >-->
<!--                    <rich-text style="color: #ffffff;font-size: 24rpx" :nodes="content"></rich-text>-->
<!--                </u-read-more>-->
            </view>
        </view>
        <view class="ass-body">
            <view class="tab-change u-border-bottom" >
                <u-tabs
                        :list="tabList"
                        :is-scroll="false"
                        :current="current"
                        inactive-color="#666666"
                        active-color="#fd5123"
                        @change="tabChange" style="width:60%"
                >
                </u-tabs>
<!--                <u-checkbox-group>-->
<!--                    <u-checkbox v-model="checked" shape="circle" active-color="red">系统默认好评</u-checkbox>-->
<!--                </u-checkbox-group>-->
            </view>
            <view class="ass-con" v-if="current === 0">
                <view class="con-item" v-if="false">
                    <view class="item-top">
                        <view class="person">
                            <image src="http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg"
                                   mode="aspectFill" class="header"></image>
                            <text>昵称</text>
                        </view>
                        <view class="item-r">
                            <text>好评</text>
                            <view class="ass-star">
                                <u-rate :count="count" v-model="star" size="23"></u-rate>
                            </view>
                        </view>
                    </view>
                    <view class="ass-dec">
                        专业，店铺运营的好，流量提升多，销量好。我也有很多利润。找到满意的运营团队真的很欣慰！
                        <view class="item-bo">
                            <text class="text-gray text-df">9天前</text>
                            <text class="text-gray text-df">交易金额 <text>￥12000</text></text>
                            <text class="bg-gradual-orange em-re">雇主推荐</text>
                        </view>
                    </view>
                </view v>
                <view class="con-item" v-if="false">
                    <view class="item-top">
                        <view class="person">
                            <image src="http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg"
                                   mode="aspectFill" class="header"></image>
                            <text>昵称</text>
                        </view>
                        <view class="item-r">
                            <text>好评</text>
                            <view class="ass-star">
                                <u-rate :count="count" v-model="star" size="23"></u-rate>
                            </view>
                        </view>
                    </view>
                    <view class="ass-dec">
                        专业，店铺运营的好，流量提升多，销量好。我也有很多利润。找到满意的运营团队真的很欣慰！
                        <view class="item-bo">
                            <text class="text-gray text-df">9天前</text>
                            <text class="text-gray text-df">交易金额 <text>￥12000</text></text>
                            <text class="bg-gradual-orange em-re">雇主推荐</text>
                        </view>
                    </view>
                </view>
            </view>
        </view>
        <view class="cu-bar bg-white tabbar border shop goods-footer u-border-top" v-if="false">
            <view class="action shop">
                <view class="cuIcon-shop"></view>店铺
            </view>
            <view class="action shop">
                <text class="cuIcon-favor"></text>收藏
            </view>
            <view class="action shop" @click="showPhones">
                <view class="cuIcon-dianhua"></view>电话咨询
            </view>
            <view class="btn-group u-padding-left-20">
                <u-button
                        class="cu-btn shadow-blur line-con"
                        style="color:#ffffff;"
                >在线咨询</u-button>
                <!--        立即下单-->
            </view>
            <view class="btn-group">
                <u-button
                        class="cu-btn shadow-blur buy"
                        style="color:#ffffff;background-image: linear-gradient(120deg, #ff5a00, #ff2b0f);"
                >立即下单</u-button>
                <!--        立即下单-->
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
               content:'你好',
                shadowStyle: {
                    backgroundImage: "none",
                    paddingTop: "0",
                    marginTop: "20rpx",
                    color: "#ffffff"
                },
                checked:false,
                count:5,
                star:5,
                tabList: [
                    {
                        name: '全部'
                    }, {
                        name: '雇主推荐'
                    },],
                itemList: [{
                    head: "赏识在于角度的转换",
                    body: "只要我们",
                    open: true,
                    disabled: true
                },{
                    head: "生活中不是缺少美，而是缺少发现美的眼睛",
                    body: "学会欣赏，实际是一种积极生活的态度，是生活的调味品，会在欣赏中发现生活的美",
                    open: false,
                },],
                current: 0,
            }
        },
        methods:{
            // 获取本地存储
            getStorage () {
                this.storage.token = uni.getStorageSync('token')
                this.storage.uid = uni.getStorageSync('uid')
                this.storage.info = uni.getStorageSync('info')
            },
            tabChange (index) {
                this.current = index;
            },
            // 电话
            async getPhonesList () {
                const { data: res } = await this.$request({
                    url: 'phoneslist',
                    data: {
                        token: this.storage.token,
                        uid: this.shopId
                    }
                })
                if (res.data.length !== 0) {
                    this.phonesList = res.data.map((item) => { return Object.assign({}, item, { text: item.name + '：' + item.phone }) })
                } else {
                    this.phonesList = [{ text: '未设置联系电话' }]
                }
            },
            showPhones () {
                if (this.storage.token === '') {
                    uni.redirectTo({
                        url: '/pages/mine/login'
                    })
                    return uni.showToast({
                        title: '未登录，请先登录',
                        icon: 'none',
                        duration: 2000
                    })
                }
                this.phonesShow = true
            },
        }

    }
</script>
<style  lang="scss">
    page{
        background:#F8F8F8;
    }
</style>
<style lang="scss" scoped>
    .ass-star{
        color:$main-color;
    }
.ass-top{
    display: flex;
    flex-direction: row;
    background: white;
    padding:10rpx;
    .ass-number{
        color:$main-color;
    }
    .ass-grade{
        text-align: center;
        display: flex;
        line-height: 40rpx;
        flex-direction: column;
        width:30%;
        justify-content: center;

        .ass-star{
            color:$main-color;
        }
    }
    .ass-type{
        text-align: center;

        display: flex;
        margin: 30rpx;
        flex-direction: row;
        .type-item{
            color:grey;
            display: flex;
            flex-direction: column;
            margin:0 8rpx;
            .item-con{
                width:120rpx;
                height: 120rpx;
                border-radius: 50%;
                border: 4rpx solid #C06C2D;
                margin-bottom:20rpx;
                justify-content: center;
                align-items: center;
                display: flex;
                flex-direction: column;
            }
            .smtex{
                letter-spacing:3rpx;
                font-size: 18rpx;
            }
        }
    }
}

.ass-cus {
    padding:10rpx;
    margin: 20rpx 0;
    background: white;
    .down{
        color:darkgrey;
        text-align: center;
    }
    .cus-con{
        padding:20rpx 10rpx;
        font-size: 10rpx;
        line-height: 70rpx;
        text{
            font-size: 20rpx;
            padding:10rpx 10rpx;
            margin:20rpx 5rpx;
            border-radius: 20rpx;
            color:#DB9655;
            background: #FCE8DE;
        }
    }
}
    .ass-body{
        background: white;
        .tab-change{
            display: flex;
            flex-direction: row;
        }
        .ass-con{
            .con-item{
                .item-top{
                    justify-content: space-between;
                    align-items: center;
                    display: flex;
                    flex-direction: row;
                    padding:30rpx 20rpx;
                    .item-r{
                        padding:0 10rpx;
                        color:$main-color;
                        display: flex;
                        align-items: center;
                        flex-direction: row;
                        .ass-star{
                            margin:0 10rpx;
                        }
                    }
                    .person{
                        padding:0 10rpx;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        .header{
                            width:60rpx;
                            height: 60rpx;
                            border-radius: 50%;
                            margin-right:20rpx;
                        }
                    }
                }
                .item-bo{
                    padding:10rpx 0;
                    text{
                        padding:0 10rpx;
                    }
                    .em-re{
                        border-radius: 10rpx;
                        padding:7rpx;
                        font-size: 22rpx;
                    }

                }
                .ass-dec{
                    margin:0 auto;
                    width:80%;
                }
            }
        }
    }
    .shop{
        width:40% !important;
    }
    .line-con{
        background: #F8BC46;
    }
</style>