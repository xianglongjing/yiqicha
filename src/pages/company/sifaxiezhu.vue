<template>
    <view class="page u-border-top">
        <view class="tab u-border-bottom">
            <u-tabs
                    :list="List"
                    :current="current"
                    @change="Change" gutter="95"
                    bar-width="50" font-size="30"
                    active-color="#E12216" bg-color="none" inactive-color="#000000"
            ></u-tabs>
        </view>
        <view class="con" v-for="item in man" :key="item.id" @click="detail(item.id)">
            <view>
                <view class="item">
                    <text class="gray">执行通知书文号：</text>
                    <text>{{item.enn ? item.enn : '-'}}</text>
                </view>
                <view class="item">
                    <text class="gray">被执行人：</text>
                    <text>{{item.person ? item.person : '-'}}</text>
                </view>
                <view class="item">
                    <text class="gray">股权被执行的企业：</text>
                    <text>{{item.tcweie ? item.tcweie : '-'}}</text>
                </view>
                <view class="item">
                    <text class="gray">股权数额：</text>
                    <text>{{item.ehbte ? item.ehbte : '-'}}</text>
                </view>
                <view class="item">
                    <text class="gray">类型：</text>
                    <text>{{item.type ? item.type : '-'}}</text>
                </view>
                <view class="item">
                    <text class="gray">状态：</text>
                    <text>{{item.status ? item.status : '-'}}</text>
                </view>
                <view class="item">
                    <text class="gray">执行法院：</text>
                    <text>{{item.court ? item.court : '-'}}</text>
                </view>
                <view class="item">
                    <text class="gray">公示日期：</text>
                    <text>{{item.publicity ? item.publicity : '-'}}</text>
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
                    name: '司法协助'
                }, {
                    name: '历史司法协助'
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
                    url: 'applets/assistance',
                    data: {
                        id:id
                    }
                })
                this.man = res
                console.log(res)
            },
            detail(id){
                uni.navigateTo({
                    url:'/pages/company/sifaxiezhuDe?id='+id
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
    .tab{
        background: white;
    }
    .con{
        background: white;
        padding:30rpx 25rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .item{
            line-height: 50rpx;
        }
    }
</style>