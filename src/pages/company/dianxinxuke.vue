<template>
    <view class="page u-border-top">
        <view class="con" v-for="item in con" :key="item.id" @click="detail(item.id)">
            <view>
                <view>
                    <text class="gray">许可证号：</text>
                    <text>{{item.permit ? item.permit : '-'}}</text>
                </view>
                <view>
                    <text class="gray">业务范围：</text>
                    <text>{{item.coverage ? item.coverage : '-'}}</text>
                </view>
                <view>
                    <text class="gray">是否有效：</text>
                    <text>{{item.effective ? item.effective : '-'}}</text>
                </view>
            </view>
          <u-icon name="arrow-right" size="32" color="#959595"></u-icon>
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
        methods:{
            async list (id) {
                const { data: res } = await this.$request({
                    method: 'GET',
                    data:{
                        id:id
                    },
                    url: 'applets/telecom',
                })
                console.log(res)
                this.con=res
            },
            detail(id){
                uni.navigateTo({
                    url:'/pages/company/dianxinxukeD?id='+id
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
    padding:30rpx 25rpx;
    line-height: 50rpx;
    display: flex;
    justify-content: space-between;
}
</style>