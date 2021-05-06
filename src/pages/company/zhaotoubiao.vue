<template>
    <view class="page u-border-top">
        <view class="search u-border-bottom">
            <u-search shape="square" placeholder="输入招投标内容进行搜索" v-model="keyword"></u-search>
        </view>
        <view class="down">
            <u-dropdown>
                <u-dropdown-item v-model="year" title="发布年份" :options="options1"></u-dropdown-item>
                <u-dropdown-item v-model="area" title="地区" :options="options2"></u-dropdown-item>
                <u-dropdown-item v-model="type" title="招标类型" :options="options2"></u-dropdown-item>
            </u-dropdown>
        </view>
        <view class="num">
            <text>为你找到 <text class="red">24</text>条该公司的招投标信息</text>
        </view>
        <view class="con u-border-bottom" v-for="item in con" :key="item.id" @click="detail(item.id)">
            <view>
                <view>{{item.title}}</view>
                <view>
                    <text class="gray">招标类型：</text>
                    <text>{{item.type ? item.type : '-'}}</text>
                </view>
                <view>
                    <text class="gray">采购人：</text>
                    <text>{{item.staff ? item.staff : '-'}}</text>
                </view>
                <view>
                    <text class="gray">地区：</text>
                    <text>{{item.area ? item.area : '-'}}</text>
                </view>
                <view>
                    <text class="gray">发布日期：</text>
                    <text>{{item.date ? item.date : '-'}}</text>
                </view>
            </view>
            <u-icon name="arrow-right" color="#959595" size="35"></u-icon>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                keyword:'',
                year:'',
                area:'',
                type:'',
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
                    url: 'applets/bidding',
                })
                console.log(res)
                this.con=res

            },
            detail(id){
                uni.navigateTo({
                    url:'/pages/company/zhaotoubiaoD?id='+id
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
.red{
    color:#fd5123;
}
    .search{
        background: white;
        padding:15rpx 25rpx;
    }
    .down{
        background: white;
    }
    .num{
        margin:30rpx;
    }
    .con{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: white;
        padding:25rpx;
        line-height: 50rpx;
    }
</style>