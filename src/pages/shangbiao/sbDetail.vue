<template>
    <view class="page">
        <view class="white">
            <view class="name u-border-bottom u-line-2">{{newsList.corporate.cpyname}}</view>
            <view class="shangbiao u-border-bottom">商标基础信息</view>
            <view class="info">
                <view>
                    <view class="gray">商标名称</view>
                    <view>{{newsList.name}}</view>
                </view>
                <view class="flex">
                    <view class="item">
                        <text class="gray">国际分类</text>
                        <view>{{newsList.chopid}}</view>
                    </view>
                    <view class="item2 u-border-left">
                        <text class="gray">申请/注册号</text>
                        <view>{{newsList.apply}}</view>
                    </view>
                </view>
                <view class="flex u-padding-bottom-40 u-border-bottom">
                    <view class="item">
                        <text class="gray">商标状态</text>
                        <view>{{newsList.status}}</view>
                    </view>
                    <view class="item2 u-border-left">
                        <text class="gray">申请日期</text>
                        <view>{{newsList.licationdate}}</view>
                    </view>
                </view>
                <view class="flex">
                    <view class="item">
                        <text class="gray">初审公告期号</text>
                        <view>{{newsList.reviewnumber}}</view>
                    </view>
                    <view class="item2 u-border-left">
                        <text class="gray">初审公告日期</text>
                        <view>{{newsList.reviewdate}}</view>
                    </view>
                </view>
                <view class="flex">
                    <view class="item">
                        <text class="gray">注册公告期号</text>
                        <view>{{newsList.registernumber}}</view>
                    </view>
                    <view class="item2 u-border-left">
                        <text class="gray">注册公告日期</text>
                        <view>{{newsList.registerdate}}</view>
                    </view>
                </view>
                <view class="u-padding-bottom-20">
                    <view class="gray">专用权期</view>
                    <view>{{newsList.deadline}}</view>
                </view>
            </view>
        </view>
        <view class="white u-margin-top-20">
            <view class="shangbiao u-border-bottom">申请人信息</view>
            <view class="info">
            <view>
                <view class="gray">申请人名称（中文）</view>
                <view>{{newsList.applynamezh}}</view>
            </view>
                <view class="u-margin-top-25">
                    <view class="gray">申请地址（中文）</view>
                    <view>{{newsList.applyresszh}}</view>
                </view>
                <view class="u-margin-top-25">
                    <view class="gray">申请人名称（英文）</view>
                    <view>{{newsList.applynameen}}</view>
                </view>
                <view class="u-margin-top-25">
                    <view class="gray">申请地址（英文）</view>
                    <view>{{newsList.applyressen}}</view>
                </view>
            </view>
        </view>
        <view class="white u-margin-top-20">
            <view class="shangbiao u-border-bottom">申请人信息</view>
            <view class="info">
                <view>
                    <view class="gray">代理/办理机构</view>
                    <view>{{newsList.proxy}}</view>
                </view>
            </view>
        </view>
        <view class="white u-margin-top-20">
            <view class="shangbiao u-border-bottom">商标流程信息</view>
            <view class="info">
                <view>
                    <view class="gray">{{newsList.licationdate}}</view>
                    <view>{{newsList.name}}</view>
                </view>
            </view>
        </view>
        <view class="white u-margin-top-20">
            <view class="shangbiao u-border-bottom">公告信息</view>
            <view class="info">
                <view>
                    <view>2020-03-13商标注册公告</view>
                    <view class="red">2020-03-13商标注册公告</view>
                </view>
            </view>
        </view>
        <view class="white u-margin-top-20">
            <view class="shangbiao u-border-bottom">商品/服务项目</view>
            <view class="info">
                <view class="padd">
                    <view>NONE(123456)</view>
                    <view>安全及防盗警报系统的监控(123456789)</view>
                    <view>版权管理</view>
                    <view>代写私人信件(123456789)</view>
                    <view>法律检测服务(123456789)</view>
                    <view>法律文件准备服务(123456789)</view>
                </view>
            </view>
        </view>
        <view class="white u-margin-top-20">
            <view class="shangbiao u-border-bottom">其他</view>
            <view class="info">
                <view class="flex">
                    <view class="item">
                        <view class="gray">商标注册类型</view>
                        <view>{{newsList.choptype}}</view>
                    </view>
                    <view class="item2 u-border-left">
                        <text class="gray">商标形式</text>
                        <view>{{newsList.chopform}}</view>
                    </view>
                </view>
                <view class="flex u-padding-bottom-40">
                    <view class="item">
                        <text class="gray">优先权日期</text>
                        <view>{{newsList.priority}}</view>
                    </view>
                    <view class="item2 u-border-left">
                        <text class="gray">后期指定日期</text>
                        <view>{{newsList.latedate}}</view>
                    </view>
                </view>
                <view class="flex">
                    <view class="item">
                        <text class="gray">国际注册日期</text>
                        <view>{{newsList.inregisterdate}}</view>
                    </view>
                    <view class="item2">
                        <text class="gray">是否共有商标</text>
                        <view>{{newsList.ischop=0 ? '否' : '是'}}</view>
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
                newsList:[]
            }
        },
        onLoad(options){
            this.getNewList(options.id)
        },
        methods:{
            async getNewList (id) {
                await this.$request({
                    url: 'applets/trademarkdetail',
                    method: 'GET',
                    data: {
                        id:id
                    },
                }).then(res=>{
                    console.log(res.data)
                    this.newsList = res.data
                    // this.partner = res.data.partner
                    // if( this.newsList.revocation==0){
                    //     this.newsList.revocation=false
                    // }else{
                    //     this.newsList.revocation=true
                    // }
                })
                /*console.log(11)
                console.log(res)
                this.shopList = res*/
                // this.menuNum = 12 / res.data.length
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
    .gray{
        color:#A9A9A9;
    }
    .red{
        color:#E75D54;
    }
    .white{
        background: white;
        .name{
        height:300rpx;
        line-height:300rpx;
        font-size: 53rpx;
        letter-spacing: .2em;
        text-align: center;
    }
        .shangbiao{
            padding: 25rpx;
            font-weight: 620;
            font-size: 32rpx;
        }
       .info{
           padding:25rpx 25rpx 10rpx;
           .padd{
               line-height: 50rpx;
           }
           .flex{
               margin:25rpx 0;
               .item{
                   width:50%;
               }
               .item2{
                   flex:1;
                   padding-left: 20rpx;
               }
           }
       }
    }


</style>