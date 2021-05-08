<template>
    <view class="page u-border-top">
        <view>
            <view class="info">
                <view class="flex">
                    <view class="item">
                        <text class="gray">宗地标识</text>
                        <view>{{con.parcelid ? con.parcelid : '-'}}</view>
                    </view>
                    <view class="item u-border-left u-padding-left-20">
                        <text class="gray">宗地编号</text>
                        <view>{{con.pnumber ? con.pnumber : '-'}}</view>
                    </view>
                </view>
                <view>
                    <text class="gray">宗地座落</text>
                    <view>{{con.pisl ? con.pisl : '-'}}</view>
                </view>
                <view class="flex">
                    <view class="item">
                        <text class="gray">所在行政区</text>
                        <view>{{con.district ? con.district : '-'}}</view>
                    </view>
                    <view class="item u-border-left u-padding-left-20">
                        <text class="gray">土地用途</text>
                        <view>{{con.use ? con.use : '-'}}</view>
                    </view>
                </view>
                <view>
                    <text class="gray">原土地使用权人</text>
                    <view>{{con.olurh ? con.olurh : '-'}}</view>
                </view>
                <view>
                    <text class="gray">现土地使用权人</text>
                    <view>{{con.clurh ? con.clurh : '-'}}</view>
                </view>
                <view class="flex">
                    <view class="item">
                        <text class="gray">土地面积（公顷）</text>
                        <view>{{con.area ? con.area : '-'}}</view>
                    </view>
                    <view class="item u-border-left u-padding-left-20">
                        <text class="gray">成立日期</text>
                        <view>{{con.date ? con.date : '-'}}</view>
                    </view>
                </view>
                <view class="flex">
                    <view class="item">
                        <text class="gray">土地使用权类型</text>
                        <view>{{con.tolur ? con.tolur : '-'}}</view>
                    </view>
                    <view class="item u-border-left u-padding-left-20">
                        <text class="gray">土地使用年限</text>
                        <view>{{con.lusep ? con.lusep : '-'}}</view>
                    </view>
                </view>
                <view class="flex">
                    <view class="item">
                        <text class="gray">土地利用状况</text>
                        <view>{{con.luses ? con.luses : '-'}}</view>
                    </view>
                    <view class="item u-border-left u-padding-left-20">
                        <text class="gray">土地级别</text>
                        <view>{{con.level ? con.level : '-'}}</view>
                    </view>
                </view>
                <view class="flex">
                    <view class="item">
                        <text class="gray">转让方式</text>
                        <view>{{con.method ? con.method : '-'}}</view>
                    </view>
                    <view class="item u-border-left u-padding-left-20">
                        <text class="gray">转让价格（万元）</text>
                        <view>{{con.price ? con.price : '-'}}</view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                con:[]
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
                    url: 'applets/transfersave',
                })
                console.log(res)
                this.con=res
                this.corporatse=res.corporatse
            },
            detail(id){
                uni.navigateTo({
                    url:'/pages/company/dianxinxukeD?id='+id
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .gray{
        color:#959595;
    }
    .title{
        padding:30rpx;
        font-weight: 600;
    }
    .info{
        padding:30rpx;
        line-height: 50rpx;
        .flex{
            align-items: center;
            margin:20rpx 0;

            .red{
                display: flex;
                justify-content: center;
                text-align: center;
            }
            .item{
                width:50%;
                align-items: center;
                justify-content: space-between;
            }
        }
    }
</style>