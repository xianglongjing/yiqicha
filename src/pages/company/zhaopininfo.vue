<template>
    <view class="page u-border-top">
        <view class="con u-border-bottom" @click="detail(item.id)" v-for="item in info" :key="item.id">
            <view class="flex">
                <text>{{item.name ? item.name : '-'}}</text>
                <text class="red">{{item.area ? item.area : '-'}}</text>
            </view>
            <view class="flex">
                <view class="info">
                    <text class="gray">{{item.name ? item.name : '-'}}</text>
                    <text class="shu">|</text>
                    <text class="gray">{{item.years ? item.years : '-'}}</text>
                    <text class="shu">|</text>
                    <text class="gray">{{item.education ? item.name : '-'}}</text>
                </view>
                <u-icon name="arrow-right" size="35" color="#777777"></u-icon>
            </view>
            <view class="gray flex">{{item.date ? item.date : '-'}}</view>
        </view>
    </view>
</template>
<script>
    export default {
        data() {
            return {
                list: [{
                    name: '法律诉讼7'
                }, {
                    name: '历史法律诉讼'
                }],
                current: 0,
                info:{}
            }
        },
        onLoad(options){
            this.lists(options.id)
        },
        methods: {
            async lists(id) {
                const {data: res} = await this.$request({
                    method: 'GET',
                    url: 'applets/offers',
                    data: {
                        id:id
                    }
                })
                this.info = res
                console.log(res)
            },
            change(index) {
                this.current = index;
            },
            detail(id){
                uni.navigateTo({
                    url:'/pages/company/zhaopinDetail?id='+id
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
    .gray {
        color: #959595;
    }
    .red{
        color:#fd5123;
    }
    .con{
        padding:25rpx 20rpx;
        .flex{
            line-height: 55rpx;
            justify-content: space-between;
            align-items: center;
            .info{
                .shu{
                    color:#f00;
                    margin:0 20rpx;
                }
            }
        }
    }
</style>
