<template>
    <view class="page u-border-top">
        <view class="down u-border-bottom">
            <u-dropdown>
                <u-dropdown-item v-model="value" title="全部身份" :options="options1"></u-dropdown-item>
            </u-dropdown>
        </view>
        <view class="con u-border-bottom" v-for="item in man" :key="item.id" @click="detail(item.id)">
            <view>
            <view class="item">
                <text class="gray">案号：</text>
                <text>{{item.case}}</text>
            </view>
            <view class="item">
                <text class="gray">案件身份：</text>
                <view>
                    <text>原告- <text>{{item.plaintiff ? item.plaintiff : '—'}}</text></text>
                    <view>被告- <text>{{item.defendant ? item.defendant : '—'}}</text></view>
                </view>
            </view>
            <view class="item">
                <text class="gray">法院：</text>
                <text>
                    {{item.announcer}}
                </text>
            </view>
            <view class="item">
                <text class="gray">立案日期：</text>
                <text>
                    {{item.filingdate}}
                </text>
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
                man:{},
                value:''
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
                    url: 'applets/register',
                    data: {
                        id:id
                    }
                })
                this.man = res
                console.log(res)
            },
            detail(id){
                uni.navigateTo({
                    url:'/pages/company/lianDetail?id='+id
                })
            }

        }
    }
</script>

<style lang="scss" scoped>
    .gray{
        color:#959595;
    }
    .down{
        background: white;
    }
    .con{
        background: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding:30rpx 25rpx;
        line-height: 50rpx;
        .item{
            display: flex;
        }
    }
</style>