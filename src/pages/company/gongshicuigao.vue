<template>
    <view class="page u-border-top">
        <view class="flex" v-for="item in man" :key="item.id" @click="detail(item.id)">
            <view>
            <view>
                <text class="gray">申请人</text>
                <text>{{item.applicant ? item.applicant : '-'}}</text>
            </view>
            <view>
                <text class="gray">持票人</text>
                <text>{{item.bearer ? item.bearer : '-'}}</text>
            </view>
            <view>
                <text class="gray">票面金额</text>
                <text>{{item.amount ? item.amount : '-'}}</text>
            </view>
            <view>
                <text class="gray">票据类型</text>
                <text>{{item.type ? item.type : '-'}}</text>
            </view>
            <view>
                <text class="gray">票据号</text>
                <text>{{item.bill ? item.bill : '-'}}</text>
            </view>
            <view>
                <text class="gray">发布机构</text>
                <text>{{item.applicant ? item.applicant : '-'}}</text>
            </view>
            <view>
                <text class="gray">公告日期</text>
                <text>{{item.date ? item.date : '-'}}</text>
            </view>
            </view>
            <u-icon name="arrow-right" size="35" color="#777777"></u-icon>
        </view>
    </view>
</template>

<script>
    export default {
       data(){
           return {
               man:{}
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
                    url: 'applets/notice',
                    data: {
                        id:id
                    }
                })
                this.man = res
                console.log(res)
            },
            detail(id){
                uni.navigateTo({
                    url:'/pages/company/gongshicuigaoDe?id='+id
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
.flex{
    background: white;
    padding:25px;
    line-height: 50rpx;
    justify-content: space-between;
    align-items: center;
}
</style>