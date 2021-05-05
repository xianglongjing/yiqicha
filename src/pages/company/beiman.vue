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
        <view class="money u-border-bottom">
            <view class="red">12222元</view>
            <view class="gray">被执行人总金额</view>
        </view>
        <view class="con u-border-bottom" v-for="item in man" :key="item.id" @click="detail(item.id)">
            <view>
                <view>
                    <text class="gray">案号：</text>
                    <text>{{item.number}}</text>
                </view>
                <view>
                    <text class="gray">执行法院：</text>
                    <text>{{item.ectet}}</text>
                </view>
                <view>
                    <text class="gray">执行标的：</text>
                    <text>{{item.etnsjt}}</text>
                </view>
                <view>
                    <text class="gray">立案日期：</text>
                    <text>{{item.filingdate}}</text>
                </view>
            </view>
           <u-icon name="arrow-right" size="30" color="#777777"></u-icon>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                List: [{
                    name: '被执行人'
                }, {
                    name: '历史被执行人'
                }],
                current:0,
                man:{}
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
                const token=uni.getStorageSync('token')
                const {data: res} = await this.$request({
                    method: 'GET',
                    url: 'applets/debtor',
                    data: {
                        id:id
                    }
                })
                this.man = res
                console.log(res)
            },
            detail(id){
                uni.navigateTo({
                    url:'/pages/company/beimanDetail?id='+id
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .red{
        color:#E12216;
    }
    .gray{
        color:#777777;
    }
    .tab{
        background:white;
    }
    .money{
        text-align: center;
        padding:20rpx 0;
    }
    .con{
        display: flex;
        justify-content: space-between;
        line-height: 45rpx;
        padding:30rpx 25rpx;
    }
</style>