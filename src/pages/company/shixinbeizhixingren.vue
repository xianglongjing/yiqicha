<template>
    <view class="page">
        <view class="tab u-border-bottom">
            <u-tabs
                    :list="List"
                    :current="current"
                    @change="Change" gutter="90"
                    bar-width="50" font-size="30"
                    active-color="#E12216" bg-color="none" inactive-color="#000000"
            ></u-tabs>
        </view>
        <view class="down">
            <u-dropdown>
                <u-dropdown-item v-model="value" title="全部履行情况" :options="options1"></u-dropdown-item>
                <u-dropdown-item v-model="year" title="全部年份" :options="options1"></u-dropdown-item>
            </u-dropdown>
        </view>
        <view class="flex" v-for="item in info" :key="item.id" @click="detail(item.id)">
            <view>
                <view>
                    <text class="gray">案号：</text>
                    <text class="gray">{{item.ecn}}</text>
                </view>
                <view>
                    <text class="gray">执行法院：</text>
                    <text class="red">{{item.court ? item.court : '-'}}</text>
                </view>
                <view>
                    <text class="gray">执行依据文号：</text>
                    <text class="red">{{item.ebn ? item.ebn : '-'}}</text>
                </view>
                <view>
                    <text class="gray">履行情况：</text>
                    <text class="red">{{item.sotpste ? item.sotpste : '-'}}</text>
                </view>
                <view>
                    <text class="gray">失信行为：</text>
                    <text class="red">{{item.fss ? item.fss : '-'}}</text>
                </view>
                <view>
                    <text class="gray">立案日期：</text>
                    <text class="red">{{item.filingdate ? item.filingdate : '-'}}</text>
                </view>
                <view>
                    <text class="gray">发布日期：</text>
                    <text class="red">{{item.releasedate ? item.releasedate : '-'}}</text>
                </view>
            </view>
            <u-icon name="arrow-right" size="35" color="#959595"></u-icon>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                List: [{
                    name: '失信被执行人'
                }, {
                    name: '历史失信被执行人'
                }],
                current:0,
                year:'',
                value:'',
                info:{}
            }
        },
        onLoad(options){
            this.list(options.id)
        },
        methods:{
            async list(id) {
                const token=uni.getStorageSync('token')
                const {data: res} = await this.$request({
                    method: 'GET',
                    url: 'applets/dishonest',
                    data: {
                        id:id
                    }
                })
                this.info = res
                console.log(res)
            },
            detail(id){
                uni.navigateTo({
                    url:'/pages/company/shixinbeizhixingD?id='+id
                })
            },
            Change(index) {
                this.current = index;
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
        color:#fd5123;
    }
    .tab{
        background: white;
        text-align: center;
    }
    .down{
        background: white;
    }
    .flex{
        background: white;
        padding:25rpx;
        margin:30rpx 0;
        line-height: 50rpx;
        justify-content: space-between;
        align-items: center;
    }
</style>