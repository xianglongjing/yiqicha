<template>
    <view class="page">
        <view class="first">
        <u-tabs
                :list="List"
                :current="current"
                @change="Change" gutter="65"
                bar-width="50" font-size="30" style="width:60%;margin:0 auto"
                active-color="#E2291D" bg-color="#ffffff" inactive-color="#666666"
        ></u-tabs>
        </view>
        <view v-if="current==0">
            <view class="title">
                监控动态汇聚呈现，日报信息一站式预览
            </view>
            <view class="titles u-line-1">
                全方位实时监控企业司法风险、经营风险、工商变更等
            </view>
            <view class="con" :key="item.id" v-for="item in goodsList">
                <view>
                    <text class="name">监控日报</text>
                    <text class="shu">|</text>
                    <text class="gray">{{item.ebhtdate ? item.ebhtdate:'—'}}</text>
                </view>
                <view class="blue">
                    <view class="item">
                        <view class="gray">企业变更</view>
                        <text class="red">0</text>
                    </view>
                    <view class="item">
                        <view class="gray">司法诉讼</view>
                        <text class="red">21</text>
                    </view>
                    <view class="item">
                        <view class="gray">经营信息</view>
                        <text class="red">0</text>
                    </view>
                    <view class="item">
                        <view class="gray">知识产权</view>
                        <text class="red">0</text>
                    </view>
                </view>
                <view class="desc">
                    <u-image mode="aspectFill" src="http://images.yiqiwang360.com/yiqicha/gongsiming.png" width="80" height="80"></u-image>
                    <view class="desc-r">
                        <view class="name">{{item.cpyname}}</view>
                        <view class="u-font-25">
                            <text class="gray">发生</text>
                            裁判文书、开庭公告
                            <text class="gray">动态</text>
                        </view>
                    </view>
                </view>
            </view>
        </view>
        <view v-if="current==1" class="list">
            <view class="flex">
                <view class="gray" style="flex:1">共监控：<text class="red">3</text></view>
                <u-dropdown class="u-margin-left-80">
                    <u-dropdown-item v-model="value1" title="全部" :options="options1"></u-dropdown-item>
                </u-dropdown>
            </view>
            <view class="flex u-margin-top-10" :key="item.id" v-for="item in goodsList">
                <u-image mode="aspectFill" src="http://images.yiqiwang360.com/yiqicha/gongsiming.png" width="80" height="80"></u-image>
            <view class="flex-r">
                <view class="name">{{item.cpyname}}</view>
                <view style="display: flex;justify-content: space-between;font-size: 26rpx">
                    <text class="gray">监控时间：{{item.ebhtdate ? item.ebhtdate:'—'}}</text>
                    <text class="red">取消监控</text>
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
                List: [{
                    name: '监控动态'
                }, {
                    name: '监控列表'
                }],
                current:0,
                goodsList:[],
                value1:'',
                options1: [{
                    label: '默认排序',
                    value: 1,
                },
                    {
                        label: '距离优先',
                        value: 2,
                    },
                    {
                        label: '价格优先',
                        value: 3,
                    }
                ],
            }
        },
        onLoad(){
            this.getList();
        },
        onShow(){
            this.getStorage()
        },
        methods:{
            getStorage () {
                this.storage.token = uni.getStorageSync('token')
                this.storage.id = uni.getStorageSync('id')
                this.storage.nickName = uni.getStorageSync('nickName')
                this.storage.avatarUrl = uni.getStorageSync('avatarUrl')
            },
            Change(index) {
                this.current = index;
            },
            async getList () {
                const token=uni.getStorageSync('token')
                const { data: res } = await this.$request({
                    url: 'applets/checkcompany',
                    method:'POST',
                    data: {
                        token:uni.getStorageSync('token')
                    }
                })
                console.log(res)
                this.goodsList = res
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
    .gray{
        color:#BBBBBB;
    }
    .red{
        color:#E2291D;
    }
.first{
    background: white;
}
    .title{
        line-height: 80rpx;
        padding:0 20rpx;
        color:#BBBBBB;
    }
    .titles{
        padding:40rpx 60rpx;
        background:white;
        font-size: 26rpx;
    }
    .con{
        background: white;
        margin:20rpx 20rpx;
        padding:20rpx 30rpx;
        .name{
            font-weight: 600;
        }
        .shu{
            margin:0 16rpx;
        }
        .gray{
            font-size: 25rpx;
        }
        .blue{
            margin:20rpx 0;
            background: #F4F9FF;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding:20rpx 0;
            .item{
                flex:1;
                line-height: 40rpx;
            }
        }
        .desc{
            background: white;
            display: flex;
            flex-direction: row;
            align-items: center;
            .desc-r{
                margin-left:20rpx;
            }
        }
    }
    .list{
        margin:20rpx 0;
        .flex{
            padding:15rpx 20rpx;
            background: white;
            align-items: center;
            justify-content: space-between;
            .flex-r{
                flex:1;
                margin-left:20rpx;
                .name{
                    font-weight: 600;
                }
            }
        }
    }
</style>