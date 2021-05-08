<template>
    <view class="page u-border-top">
        <view>
            <view class="title u-border-bottom">基本信息</view>
            <view class="info">
                <view class="flex">
                    <view class="item">
                        <text class="gray">行政区</text>
                        <view>{{con.district ? con.district : '-'}}</view>
                    </view>
                    <view class="item u-border-left u-padding-left-20">
                        <text class="gray">电子监管号</text>
                        <view>{{con.esn ? con.esn : '-'}}</view>
                    </view>
                </view>
                <view>
                    <text class="gray">项目名称</text>
                    <view>{{con.pname}}</view>
                </view>
                <view>
                    <text class="gray">项目位置</text>
                    <view>{{con.plocation ? con.plocation : '-'}}</view>
                </view>
                <view class="flex">
                    <view class="item">
                        <text class="gray">面积</text>
                        <view>{{con.area ? con.area : '-'}}</view>
                    </view>
                    <view class="item u-border-left u-padding-left-20">
                        <text class="gray">土地来源</text>
                        <view>{{con.source ? con.source : '-'}}</view>
                    </view>
                </view>
                <view class="flex">
                    <view class="item">
                        <text class="gray">土地用途</text>
                        <view>{{con.use ? con.use : '-'}}</view>
                    </view>
                    <view class="item u-border-left u-padding-left-20">
                        <text class="gray">供地方式</text>
                        <view>{{con.method ? con.method : '-'}}</view>
                    </view>
                </view>
                <view class="flex">
                    <view class="item">
                        <text class="gray">土地使用年限</text>
                        <view>{{con.period ? con.period : '-'}}</view>
                    </view>
                    <view class="item u-border-left u-padding-left-20">
                        <text class="gray">行业分类</text>
                        <view>{{con.category ? con.category : '-'}}</view>
                    </view>
                </view>
                <view class="flex">
                    <view class="item">
                        <text class="gray">土地级别</text>
                        <view>{{con.land ? con.land : '-'}}</view>
                    </view>
                    <view class="item u-border-left u-padding-left-20">
                        <text class="gray">成交价格
                        </text>
                        <view>{{con.price ? con.price : '-'}}</view>
                    </view>
                </view>
                <view>
                    <text class="gray">土地使用权人</text>
                    <view>{{con.lurh ? con.lurh : '-'}}</view>
                </view>
                <view>
                    <text class="gray">约定交地时间</text>
                    <view>{{con.atdt ? con.atdt : '-'}}</view>
                </view>
                <view class="flex">
                    <view class="item">
                        <text class="gray">约定开工时间</text>
                        <view>{{con.astime ? con.astime : '-'}}</view>
                    </view>
                    <view class="item u-border-left u-padding-left-20">
                        <text class="gray">约定竣工时间</text>
                        <view>{{con.actime ? con.actime : '-'}}</view>
                    </view>
                </view>
                <view>
                    <text class="gray">批准单位</text>
                    <view>{{con.authority ? con.authority : '-'}}</view>
                </view>
                <view>
                    <text class="gray">合同签订日期</text>
                    <view>{{con.csdate ? con.csdate : '-'}}</view>
                </view>
            </view>
        </view>
        <u-gap height="20" bg-color="#f8f8f8"></u-gap>
        <view>
            <view class="title u-border-bottom">分期支付约定</view>
            <view class="info">
                <view>
                    <text class="gray">支付期号</text>
                    <view>{{con.ppn ? con.ppn : '-'}}</view>
                </view>
                <view class="flex">
                    <view class="item">
                        <text class="gray">约定支付日期</text>
                        <view>{{con.apd ? con.apd : '-'}}</view>
                    </view>
                    <view class="item u-border-left u-padding-left-20">
                        <text class="gray">约定支付金额</text>
                        <view>{{con.atbp ? con.atbp : '-'}}</view>
                    </view>
                </view>
                <view>
                    <text class="gray">备注</text>
                    <view>{{con.remarks ? con.remarks : '-'}}</view>
                </view>
            </view>
        </view>
        <u-gap height="20" bg-color="#f8f8f8"></u-gap>
        <view>
            <view class="title u-border-bottom">约定容积率</view>
            <view class="info">
                <view class="flex">
                    <view class="item">
                        <text class="gray">下限</text>
                        <view>{{con.lower ? con.lower : '-'}}</view>
                    </view>
                    <view class="item u-border-left u-padding-left-20">
                        <text class="gray">上限</text>
                        <view>{{con.upper ? con.upper : '-'}}</view>
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
                con:[],
                corporatse:[]
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
                    url: 'applets/telecomsave',
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