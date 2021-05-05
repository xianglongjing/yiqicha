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
                <u-dropdown-item v-model="year" title="全部年份" :options="options1"></u-dropdown-item>
            </u-dropdown>
        </view>
        <view class="flex" v-for="item in info" :key="item.id" @click="detail(item.id)">
            <view>
                <view>
                    <text class="gray">案号：</text>
                    <text>{{item.number}}</text>
                </view>
                <view>
                    <text class="gray">姓名：</text>
                    <text class="red">{{item.norname ? item.norname : '-'}}</text>
                </view>
                <view>
                    <text class="gray">企业信息：</text>
                    <text class="red">{{item.ass ? item.ass : '-'}}</text>
                </view>
                <view>
                    <text class="gray">申请人：</text>
                    <text>{{item.ass ? item.ass : '-'}}</text>
                </view>
                <view>
                    <text class="gray">立案日期：</text>
                    <text>{{item.fname ? item.fname : '-'}}</text>
                </view>
                <view>
                    <text class="gray">发布日期：</text>
                    <text>{{item.rname ? item.rname : '-'}}</text>
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
                    name: '限制消费令'
                }, {
                    name: '历史限制消费令'
                }],
                current:0,
                year:'',
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
                    url: 'applets/consumption',
                    data: {
                        id:id
                    }
                })
                this.info = res
                console.log(res)
            },
            detail(id){
                uni.navigateTo({
                    url:'/pages/company/xianzhixiaofeiDetail?id='+id
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