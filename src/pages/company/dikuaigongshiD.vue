<template>
    <view class="page u-border-top">
        <view>
            <view class="title u-border-bottom">地块基本信息</view>
            <view class="info">
                <view>
                    <text class="gray">公示期</text>
                    <view>{{con.period ? con.period : '-'}}</view>
                </view>
                <view>
                    <text class="gray">意见反馈方式</text>
                    <view>{{con.method ? con.method : '-'}}</view>
                </view>
                <view>
                    <text class="gray">发布机关</text>
                    <view>{{con.authority ? con.authority : '-'}}</view>
                </view>
                <view>
                    <text class="gray">发布日期</text>
                    <view>{{con.release ? con.release : '-'}}</view>
                </view>
            </view>
        </view>
        <u-gap height="20" bg-color="#f8f8f8"></u-gap>
        <view>
            <view class="title u-border-bottom">联系方式</view>
            <view class="info">
                <view>
                    <text class="gray">联系单位</text>
                    <view>{{con.unit ? con.unit : '-'}}</view>
                </view>
                <view>
                    <text class="gray">单位地址</text>
                    <view>{{con.address ? con.address : '-'}}</view>
                </view>
                <view>
                    <text class="gray">邮政编码</text>
                    <view>{{con.postal ? con.postal : '-'}}</view>
                </view>
                <view>
                    <text class="gray">联系人</text>
                    <view>{{con.contact ? con.contact : '-'}}</view>
                </view>
                <view>
                    <text class="gray">电子邮件</text>
                    <view>{{con.email ? con.email : '-'}}</view>
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