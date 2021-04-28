<template>
    <view class="page u-border-top">
        <view class="tab u-border-bottom">
            <u-tabs
                    :list="List"
                    :current="current"
                    @change="change" gutter="90"
                    bar-width="50" font-size="30"
                    active-color="#E12216" bg-color="none" inactive-color="#000000"
            ></u-tabs>
        </view>
        <view class="down">
            <u-dropdown>
                <u-dropdown-item v-model="value1" title="全部身份" :options="options1"></u-dropdown-item>
                <u-dropdown-item v-model="value2" title="全部案由" :options="options2"></u-dropdown-item>
            </u-dropdown>
        </view>
        <view class="con u-border-bottom" v-for="item in law" :key="item.id" @click="detail(item.id)">
            <view class="shop">{{item.title}}</view>
            <view>
                <text class="gray">案号：</text>
                <text>{{item.case ? item.case :'—'}}</text>
            </view>
            <view>
                <text class="gray">案由：</text>
                <text>{{item.cause ? item.cause :'—'}}</text>
            </view>
            <view class="flex">
                <text class="gray">案件身份：</text>
                <view class="flex-r">
                    <view><text class="lose">败诉</text>原告- <text class="yuan">{{item.plaintiff}}</text> </view>
                    <view class="bei">
                        <view>
                            <text class="success">胜诉</text>
                            被告- <text>{{item.defendant}}</text>
                        </view>
                        <u-icon name="arrow-right" size="35" color="#777777"></u-icon>
                    </view>
                </view>
            </view>
            <view class="flex">
                <text class="gray">裁判结果：</text>
                <view class="flex-r">
                    <view>
                        {{item.result}}
                    </view>
                </view>
            </view>
            <view class="flex">
                <text class="gray">发布日期：</text>
                <view class="flex-r">
                    <view>
                        {{item.date}}
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>
<script>
    export default{
        data(){
            return {
                law:{},
                List: [{
                    name: '法律诉讼7'
                }, {
                    name: '历史法律诉讼'
                }],
                value1:'',
                value2:'',
                options1: [{
                    label: '全部身份',
                    value: 1,
                },
                    {
                        label: '被告（1）',
                        value: 2,
                    }
                ],
                options2: [{
                    label: '全部案由',
                    value: 1,
                },
                    {
                        label: '买卖合同纠纷（2）',
                        value: 2,
                    },
                ],
                current: 0
            }
        },
        onLoad(options){
            this.list(options.id)
        },
        methods:{
            change(index) {
                this.current = index;
            },
            async list(id) {
                const token=uni.getStorageSync('token')
                const {data: res} = await this.$request({
                    method: 'GET',
                    url: 'applets/proceedings',
                    data: {
                        id:id
                    }
                })
                this.law = res
                console.log(res)
            },
            detail(id){
                uni.navigateTo({
                    url:'/pages/company/lawsusDetail?id='+id
                })
            }
        }
    }
</script>
<style>
    page{
        background-color: #f8f8f8;
    }
</style>
<style lang="scss" scped>
    .gray{
        color:#777777;
    }
    .tab{
        background: white;
        padding:10rpx 30rpx;
    }
    .down{
        background:white;
    }
    .con{
        line-height: 50rpx;
        background: white;
        padding:30rpx 25rpx;
        .shop{
            font-size: 35rpx;
        }
        .flex{
            justify-content: space-between;
            .flex-r{
                flex:1;
            }
            .lose{
                color:#BD4758;
                background: #FFECEE;
                padding:9rpx;
                margin-right:10rpx;
            }
            .success{
                color:#3E8A63;
                background: #EDF7EF;
                padding:9rpx;
                margin-right:10rpx;
            }
            .yuan{
                color:#2E74C7;
            }
            .bei{
                display: flex;
                width:100%;
                justify-content: space-between;
            }
        }
    }
</style>