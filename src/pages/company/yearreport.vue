<template>
    <view class="page u-border-top">
        <view class="con" v-for="item in goodsList" :key="item.id">
            <view>{{item.date}}年度报告</view>
            <u-icon name="arrow-right" color="#999999" size="30"></u-icon>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                goodsList:{}
            }
        },
        onLoad(options){
            this.getSearchList(options.id)
        },
        methods:{
            async getSearchList (id) {
                const {data:res}  = await this.$request({
                    method:'GET',
                    url: 'applets/annual',
                    data: {
                        id:id
                    }
                })
                console.log(111)
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
.con{
    display: flex;
    justify-content: space-between;
    background: white;
    align-items: center;
    height:100rpx;
    padding:0 40rpx;
}
</style>