<template>
    <view class="page u-border-top">
        <view class="tab u-border-bottom">
            <u-tabs
                    :list="List"
                    :current="current"
                    @change="Change" gutter="90"
                    bar-width="50" font-size="30"
                    active-color="#E12216" bg-color="none" inactive-color="#000000"
            ></u-tabs>
        </view>
        <view class="down u-border-bottom">
            <u-dropdown>
                <u-dropdown-item v-model="value1" title="全部股东类型" :options="options1"></u-dropdown-item>
                <u-dropdown-item v-model="value2" title="全部持股比例" :options="options2"></u-dropdown-item>
            </u-dropdown>
        </view>
        <view class="white" v-for="item in detail" :key="item.id">
            <u-image mode="aspectFit" src="https://img2.baidu.com/it/u=1004953359,2131419137&fm=11&fmt=auto&gp=0.jpg" width="80" height="80"></u-image>
            <view class="right">
                <view class="flex">
                    <text>{{item.name}}</text>
                    <text class="gray">任职{{item.corporates_count}}家企业</text>
                </view>
                <view class="position">
                    <text class="red">大股东</text>
                    <text class="huang">实际控制人</text>
                    <text class="lan">最终受益人</text>
                </view>
                <view>
                    <view class="gray">职位</view>
                    <text>{{item.position}}</text>
                </view>
                <view class="bottom">
                    <view>
                        <view>持股比例</view>
                        <text class="red">60%</text>
                    </view>
                    <view class="u-border-left u-padding-left-20">
                        <view> 最终受益股份</view>
                        <view class="flexs">60% <view class="u-margin-left-20" style="color:#4FA2CF">股权链 <u-icon name="arrow-right" color="#4FA2CF" size="30"></u-icon></view></view>
                    </view>
                </view>
                <view class="bottom">
                    <view>
                        <view>认缴出资额</view>
                        <text class="red">1800</text>
                    </view>
                    <view class="u-border-left u-padding-left-20">
                        <view> 认缴出资日期</view>
                        <view class="flexs">63</view>
                    </view>
                </view>
                <view class="bottom">
                    <view>
                        <view> 最终受益股份</view>
                        <view class="flexs">60% <view class="u-margin-left-20" style="color:#4FA2CF">股权链 <u-icon name="arrow-right" color="#4FA2CF" size="30"></u-icon></view></view>
                    </view>
                    <view class="u-border-left u-padding-left-20">
                        <view> 任职职务</view>
                        <view>33</view>
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
                detail:{},
                List: [{
                    name: '股东信息'
                }, {
                    name: '历史股东信息0'
                }],
                options1: [{
                    label: '全部股东类型',
                    value: 1,
                },
                    {
                        label: '自然人股东',
                        value: 2,
                    },
                    {
                        label: '企业股东',
                        value: 3,
                    }
                ],
                options2: [{
                    label: '全部比例',
                    value: 1,
                },
                    {
                        label: '不到5%',
                        value: 2,
                    },
                    {
                        label: '5%以上',
                        value: 3,
                    }
                ],
                current:0,
                value1:'',
                value2:''
            }
        },
        onLoad(options){
            this.list(options.id)
        },
        methods:{
            Change(index) {
                this.current = index;
            },
            async list(id) {
                const {data: res} = await this.$request({
                    method: 'GET',
                    url: 'applets/personnel',
                    data: {
                        id:id
                    }
                })
                this.detail = res
                console.log(res)
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
        color:#959595;
    }
    .red{
        color:#E75D54;
    }
    .tab{
        background: white;
    }
    .down{
        background: white;
    }
    .white{
        background: white;
        padding:25rpx;
        display: flex;
        /*align-items: center;*/
        .right{
            flex:1;
            margin-left:10rpx;
            .flex{
                align-items: center;
                justify-content: space-between;
            }
            .position{
                margin:20rpx 0;
                font-size: 25rpx;
                .red{
                    text-align: center;
                    background: #FFEBED;
                    padding:6rpx 13rpx;
                    border-radius: 8rpx;
                }
                .huang{
                    background: #F8EEE4;
                    color:#C2997F;
                    padding:6rpx 13rpx;
                    margin:0 25rpx;
                    border-radius: 8rpx;
                }
                .lan{
                    background: #E8F2FB;
                    color:#6E9EB0;
                    padding:6rpx 13rpx;
                    border-radius: 8rpx;
                }
            }
            .bottom{
                line-height: 40rpx;
                margin:30rpx 0;
                display: flex;
                justify-content: space-between;
                width:80%;
                view{
                    flex:1;
                }
                .shu{
                    font-size: 50rpx;
                }
                .flexs{
                    display: flex;
                    align-items: center;
                    font-size: 26rpx;
                }
            }
        }
    }
</style>