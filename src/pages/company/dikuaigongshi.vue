<template>
    <view class="page u-border-top">
        <view class="con" v-for="item in con" :key="item.id" @click="detail(item.id)">
            <view>
                <view>{{item.plot}}</view>
                <view>
                    <text class="gray">行政区：</text>
                    <text>{{item.district}}</text>
                </view>
                <view>
                    <text class="gray">发布机关：</text>
                    <text>{{item.district}}</text>
                </view>
                <view>
                    <text class="gray">发布日期：</text>
                    <text>{{item.district}}</text>
                </view>
            </view>
            <u-icon name="arrow-right" color="#959595" size="32"></u-icon>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                con:{}
            }
        },
        onLoad (options) {
            this.list(options.id)
        },
        methods: {
            async list (id) {
                const { data: res } = await this.$request({
                    method: 'GET',
                    data:{
                        id:id
                    },
                    url: 'applets/plot',
                })
                console.log(res)
                this.con=res
            },
            change(index) {
                this.current = index;
            },
            detail(id){
                uni.navigateTo({
                    url:'/pages/company/dikuaigongshiD?id='+id
                })
            }
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
.con{
    background: white;
    padding:30rpx;
    display: flex;
    line-height: 50rpx;
    justify-content: space-between;
    align-items: center;
}
</style>