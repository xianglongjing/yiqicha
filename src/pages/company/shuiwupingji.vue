<template>
    <view class="page u-border-top">
        <view class="flex u-border-bottom" v-for="item in man" :key="item.id" @click="detail(item.id)">
            <view>
                <view>
                    <text class="gray">评价年度：</text>
                    <text>{{item.year ? item.year : '-'}}</text>
                </view>
                <view>
                    <text class="gray">纳税信用级别：</text>
                    <text>{{item.rating ? item.rating : '-'}}</text>
                </view>
            </view>
            <u-icon name="arrow-right" size="40" color="#777777"></u-icon>
        </view>
    </view>
</template>
<script>
    export default {
        data() {
            return {
                man:{}
            }
        },
        onLoad(options){
            this.list(options.id)
        },
        methods: {
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
                    url:'/pages/company/shuiwupingD?id='+id
                })
            },
            change(index) {
                this.current = index;
            }
        }
    }
</script>
<style>
    page {
        background: #f8f8f8;
    }
</style>
<style lang="scss" scoped>
    .gray {
        color: #959595;
    }
    .flex{
        justify-content: space-between;
        padding:30rpx 25rpx;
        background:white;
        line-height: 50rpx;
    }
</style>
