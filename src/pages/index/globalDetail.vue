<template>
    <view class="page u-border-top">
        <view class="first">
            <view class="left">
                <u-image mode="aspectFill" width="120" height="120"
                         src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic2.zhimg.com%2F50%2Fv2-99dbc76ccf938ba12e551f08860f438b_hd.jpg&refer=http%3A%2F%2Fpic2.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621737672&t=98697c77a3244d2eaade7d20ea88babe"
                ></u-image>
                <view class="name">
                    {{shoplist.cpyname}}
                </view>
            </view>
            <text class="score">
                Credit Score
                企业评分
            </text>
        </view>
        <view class="info">
            <view class="top u-border-bottom">
                <text class="title">Company info（公司信息）</text>
                <u-icon name="arrow-up" size="30" color="#A3AABA"></u-icon>
            </view>
            <view class="item">
                <view>
                    <text class="title">Name:</text>
                    <text class="gray">{{shoplist.cpyname}}</text>
                </view>
                <text>公司名</text>
            </view>
            <view class="item">
                <view>
                    <text class="title">Trading Name:</text>
                    <text class="gray">{{shoplist.fbusiness.tname? shoplist.fbusiness.tname : '—'}}</text>
                </view>
                <text>贸易名</text>
            </view>
            <view class="item">
                <view>
                    <text class="title">Org Number:</text>
                    <text class="gray">{{shoplist.organization? shoplist.organization : '—'}}</text>
                </view>
                <text>组织机构号</text>
            </view>
            <view class="item">
                <view>
                    <text class="title">Reg Number:</text>
                    <text class="gray">{{shoplist.brn? shoplist.brn : '—'}}</text>
                </view>
                <text>注册号</text>
            </view>
            <view class="item">
                <view>
                    <text class="title">Previous Name:</text>
                    <text class="gray">{{shoplist.tname? shoplist.tname : '—'}}</text>
                </view>
                <text>曾用名</text>
            </view>
            <view class="item">
                <view>
                    <text class="title">Address:</text>
                    <text class="gray">{{shoplist.address? shoplist.address : '—'}}</text>
                </view>
                <text>地址</text>
            </view>
            <view class="item">
                <view>
                    <text class="title">Town:</text>
                    <text class="gray">{{shoplist.town? shoplist.town : '—'}}</text>
                </view>
                <text>城市</text>
            </view>
            <view class="item">
                <view>
                    <text class="title">Country:</text>
                    <text class="gray">{{shoplist.country? shoplist.country : '—'}}</text>
                </view>
                <text>国家</text>
            </view>
        </view>
        <view class="info">
            <view class="top u-border-bottom">
                <text class="title">Registration Information（注册信息）</text>
                <u-icon name="arrow-up" size="30" color="#A3AABA"></u-icon>
            </view>
            <view class="flex">
                <view class="item2">
                    <view>
                        <view class="title">注册公司名:</view>
                        <text class="red">Volkswagen</text>
                    </view>
                </view>
                <view class="item2">
                    <view>
                        <view class="title">注册地址:</view>
                        <text class="red">{{shoplist.radd? shoplist.radd : '—'}}</text>
                    </view>
                </view>
                <view class="item2">
                    <view>
                        <view class="title">登记地:</view>
                        <text class="red">{{shoplist.place? shoplist.place : '—'}}</text>
                    </view>
                </view>
                <view class="item2">
                    <view>
                        <view class="title">注册号:</view>
                        <text class="red">{{shoplist.brn? shoplist.brn : '—'}}</text>
                    </view>
                </view>
                <view class="item2">
                    <view>
                        <view class="title">经营状态:</view>
                        <text class="red">{{shoplist.revocation? '开业' : '吊销'}}</text>
                    </view>
                </view>
                <view class="item2">
                    <view>
                        <view class="title">上市信息:</view>
                        <text class="red">{{shoplist.listing? shoplist.listing : '—'}}</text>
                    </view>
                </view>
                <view class="item2">
                    <view>
                        <view class="title">开业日期:</view>
                        <text class="red">{{shoplist.ebhtdate? shoplist.ebhtdate : '—'}}</text>
                    </view>
                </view>
                <view class="item2">
                    <view>
                        <view class="title">注册日期:</view>
                        <text class="red">{{shoplist.ebhtdate? shoplist.ebhtdate : '—'}}</text>
                    </view>
                </view>
                <view class="item2">
                    <view>
                        <view class="title">注册资本:</view>
                        <text class="red">{{shoplist.rtdcapital? shoplist.rtdcapital : '—'}}</text>
                    </view>
                </view>
                <view class="item2">
                    <view>
                        <view class="title">股本:</view>
                        <text class="red">{{shoplist.rtdcapital? shoplist.rtdcapital : '—'}}</text>
                    </view>
                </view>
                <view class="item2">
                    <view>
                        <view class="title">企业性质:</view>
                        <text class="red">{{shoplist.type? shoplist.type : '—'}}</text>
                    </view>
                </view>
                <view class="item2">
                    <view>
                        <view class="title">行业代码:</view>
                        <text class="red">{{shoplist.industrycode? shoplist.industrycode : '—'}}</text>
                    </view>
                </view>
            </view>

        </view>
        <view class="info">
            <view class="top u-border-bottom">
                <text class="title">Registration Information（经营信息）</text>
                <u-icon name="arrow-up" size="30" color="#A3AABA"></u-icon>
            </view>
            <view class="flex">
                <view class="item2">
                    <view>
                        <view class="title">贸易名:</view>
                        <text class="red">{{fbusiness.tname? fbusiness.tname : '—'}}</text>
                    </view>
                </view>
                <view class="item2">
                    <view>
                        <view class="title">主营业务描述:</view>
                        <text class="red">{{shoplist.fbusiness.mbd? shoplist.fbusiness.mbd : '—'}}</text>
                    </view>
                </view>
                <view class="item2">
                    <view>
                        <view class="title">主营产品/服务:</view>
                        <text class="red">{{shoplist.fbusiness.mps? shoplist.fbusiness.mps : '—'}}</text>
                    </view>
                </view>
                <view class="item2">
                    <view>
                        <view class="title">品牌:</view>
                        <text class="red">{{shoplist.fbusiness.brand? shoplist.fbusiness.brand : '—'}}</text>
                    </view>
                </view>
                <view class="item2">
                    <view>
                        <view class="title">区域情况:</view>
                        <text class="red">{{shoplist.fbusiness.rs? shoplist.fbusiness.rs : '—'}}</text>
                    </view>
                </view>
                <view class="item2">
                    <view>
                        <view class="title">支付历史:</view>
                        <text class="red">{{shoplist.fbusiness.ph? shoplist.fbusiness.ph : '—'}}</text>
                    </view>
                </view>
                <view class="item2">
                    <view>
                        <view class="title">进口:</view>
                        <text class="red">{{shoplist.fbusiness.import? shoplist.fbusiness.import : '—'}}</text>
                    </view>
                </view>
                <view class="item2">
                    <view>
                        <view class="title">出口:</view>
                        <text class="red">{{shoplist.fbusiness.exit? shoplist.fbusiness.exit : '—'}}</text>
                    </view>
                </view>
                <view class="item2">
                    <view>
                        <view class="title">员工人数:</view>
                        <text class="red">{{shoplist.fbusiness.now? shoplist.fbusiness.now : '—'}}</text>
                    </view>
                </view>
                <view class="item2">
                    <view>
                        <view class="title">员工描述:</view>
                        <text class="red">{{shoplist.fbusiness.sd? shoplist.fbusiness.sd : '—'}}</text>
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
                shoplist:[],
                fbusiness:[]
            }
        },
        onLoad(options){
          this.shop(options.id)
        },
        methods:{
            async shop (id) {
                const { data: res } = await this.$request({
                    url: 'applets/checkworld',
                    method:'GET',
                    data:{id:id}
                })
                console.log(res)
                this.shoplist = res
                this.fbusiness=res.fbusiness
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
        color:#A3AABA;
    }
    .red{
        color:#E75D54;
        margin-top:20rpx;
    }
.first{
    background: white;
    padding:30rpx 25rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left{
        display: flex;
        align-items: center;
        .name{
            margin-left:20rpx;
            font-size: 35rpx;
        }
    }
    .score{
        background: #467FD8;
        color:white;
        text-align: center;
        padding:9rpx;
        border-radius: 10rpx;
    }
}
    .info{
        margin-top:20rpx;
        background: white;
        .top{
            padding:25rpx;
            justify-content: space-between;
            display: flex;
            .title {
                font-size: 30rpx;
                font-weight: 600;
            }
        }
        .item{
            padding:25rpx;
            .title{
                font-weight: 600;
                margin-right:10rpx;
            }
        }
        .flex{
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            .item2{
                width:50%;
                padding:25rpx;
            }
        }
    }
</style>