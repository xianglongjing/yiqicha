<template>
    <view class="page">
        <view class="redbg">
            <image
                    src="http://images.yiqiwang360.com/yiqicha/fengxian.png"
                    style="width: 100%;height: 100%;"></image>
            <view class="zi">
<!--                <uni-nav-bar :status-bar="true" left-icon="back" :fixed="true" :border="false" :shadow="false" @clickLeft="goBack">-->
<!--                </uni-nav-bar> -->
<!--                <view class="title">快速识别身边的老赖</view>-->
                <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/tg/tg1.png"
                         height="100"
                         width="450"></u-image>
            </view>
            <view class="sou">
                <u-search
                        :action-style="search_btn"
                        :animation="true"
                        @custom="goSearch"
                        @click="goSearch" disabled
                        bg-color="#f8f8f8"
                        input-align="left" height="80"
                        placeholder="请输入人名/公司名/身份证号码/组织机构代码" shape="square"
                        v-model="query"
                ></u-search>
                <view style="text-align: left;margin:40rpx 0 10rpx;">热门搜索</view>
                <view class="hot-laolai">
                    <scroll-view class="scroll-view_H" scroll-x="true">
                        <view class="u-margin-top-10">
                            <view class="lai-item" @click="llshop" v-for="item in enterprise" :key="item.id">
<!--                                <view classlai-img">-->
<!--                                    <u-image src="http://images.yiqiwang360.com/yiqicha/gongsiming.png" width="60" height="60"></u-image>-->
<!--                                </view>-->
                                <view class="lai-name">{{item.cpyname}}</view>
                            </view>
                        </view>
                        <view class="u-margin-top-20">
                            <view class="lai-item" @click="llDetail" v-for="item in personal" :key="item.id">
<!--                                <view class="lai-img">-->
<!--&lt;!&ndash;                                    <u-image src="http://images.yiqiwang360.com/yiqicha/renwu.png" width="60" height="60"></u-image>&ndash;&gt;-->
<!--                                </view>-->
                                <text class="lai-name">{{item.dishonest}}</text>
                            </view>
                        </view>

                    </scroll-view>
                </view>


            </view>
        </view>
        <view class="infor">
            <view>
                <view class="title red">什么是老赖?</view>
                <view class="u-margin-top-10">失信被执行人，是指被执行人具有履行能力而不履行生效法律文书确定的义务。俗称“老赖”。</view>
            </view>
            <view class="u-margin-top-50">
                <view class="title red">被列入“老赖”有什么影响?</view>
                <view class="u-margin-top-10">将被列入金融和社会信用黑名单，影响以后贷款，就业，买机票，买车，旅游，高消费等。</view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                enterprise:{},
                personal:{},
                search_btn:{
                    color:'white'
                },
                query:''
            }
        },
        onLoad(){
            this.hotsearch()
        },
        methods:{
            async hotsearch () {
                const { data: res } = await this.$request({
                    method: 'GET',
                    url: 'applets/laolaisearch'
                })
                this.enterprise =res.enterprise
                this.personal =res.personal
                console.log(res)
            },
            goSearch(){
              uni.navigateTo({
                  url:'/pages/ll/searchDetail'
              })
            },
            llDetail(){
                uni.navigateTo({
                    url:'/pages/ll/llDetail'
                })
            },
            llshop(uscc){
                uni.navigateTo({
                    url: '/pages/ll/llshop?uscc=' + this.uscc
                })
            }
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
    .redbg{
        /*background-size: 250rpx 200rpx;*/
        /*background: url("http://images.yiqiwang360.com/yiqicha/fengxian.png") no-repeat;*/
        position: relative;
        /*color:white;*/
        /*padding:50rpx 20rpx;*/
        height:580rpx;
        width:100%;
        .zi{
            color:white;
            position: absolute;
            top:50rpx;
            left:130rpx;
            .title{
                margin-left:160rpx;
                font-size: 45rpx;
            }
        }
        .sou{
            color:white;
            position: absolute;
            top:160rpx;
            left:35rpx;
            right:35rpx;
        }

        .hot-laolai{
            white-space: nowrap;
            width: 100%;
            .lai-item{
                display: inline-block;
                border-radius: 5rpx;
                padding: 10rpx 20rpx;
                margin-right: 20rpx;
                text-align: center;
                background-color: rgba(255,255,255,0.2);
                line-height: 30rpx;
                .lai-img{
                    display: inline-block;
                    width: 60rpx;
                    height: 60rpx;
                    font-size: 0;
                    vertical-align: middle;
                }
                .lai-name{
                    text-align: center;
                    display: inline-block;
                    /*margin-left:20rpx;*/
                    vertical-align: middle;
                }
            }
        }
    }
    .infor{
        position: absolute;
        top:540rpx;
        left:30rpx;
        padding:40rpx 30rpx;
        width:92%;
        border-radius: 10rpx;
        background: white;
        .title{
            font-size: 30rpx;
            font-weight: 650;
        }
    }
</style>