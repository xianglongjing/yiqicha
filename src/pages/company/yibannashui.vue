<template>
    <view class="page u-border-top">
        <view class="con" v-for="item in con" :key="item.id">
            <view>
                <text class="gray">纳税人名称：</text>
                <text>{{item.name ? item.name : '-'}}</text>
            </view>
            <view>
                <text class="gray">纳税人识别号：</text>
                <text>{{item.name ? item.name : '-'}}</text>
            </view>
            <view>
                <text class="gray">纳税人资格类型：</text>
                <text>{{item.name ? item.name : '-'}}</text>
            </view>
            <view>
                <text class="gray">主管税务机关：</text>
                <text>{{item.name ? item.name : '-'}}</text>
            </view>
            <view>
                <text class="gray">有效期起：</text>
                <text>{{item.name ? item.name : '-'}}</text>
            </view>
            <view>
                <text class="gray">有效期止：</text>
                <text>{{item.expiration ? item.expiration : '-'}}</text>
            </view>
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
                    url: 'applets/taxpayer',
                })
                console.log(res)
                this.con=res
            },
            change(index) {
                this.current = index;
            },
            detail(id){
                uni.navigateTo({
                    url:'/pages/company/zhuanliinfoDe?id='+id
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
    line-height: 50rpx;
    padding:30rpx;
}
</style>