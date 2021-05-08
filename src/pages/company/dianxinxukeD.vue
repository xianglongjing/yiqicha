<template>
    <view class="page u-border-top">
        <view>
            <view class="title u-border-bottom">基本信息</view>
            <view class="info">
              <view>
                  <text class="gray">公司名称</text>
                  <view>{{corporatse.cpyname}}</view>
              </view>
                <view class="flex">
                    <view class="item">
                        <text class="gray">许可证书</text>
                        <view>{{con.permit ? con.permit : '-'}}</view>
                    </view>
                    <view class="item u-border-left u-padding-left-20">
                        <text class="gray">许可证书</text>
                        <view>{{con.permit ? con.permit : '-'}}</view>
                    </view>
                </view>
                <view>
                    <text class="gray">业务及其覆盖范围</text>
                    <view>{{con.corporate.cpyname}}</view>
                </view>
            </view>
        </view>
        <u-gap height="20" bg-color="#f8f8f8"></u-gap>
        <view>
            <view class="title u-border-bottom">年报公示</view>
            <view class="info">
            <view>
                <text class="gray">公司名称</text>
                <view>{{corporatse.cpyname}}</view>
            </view>
            <view>
                <text class="gray">统一社会信用代码</text>
                <view>{{con.corporatse.uscc ? con.corporatse.uscc : '-'}}</view>
            </view>
            <view>
                <text class="gray">统一社会信用代码</text>
                <view class="flex">
                    <view class="item">{{corporatse.partner.name ? corporatse.partner.name : '-'}}</view>
                    <view class="red">
                        <u-image mode="aspectFit" width="30" height="30"
                                 src="http://images.yiqiwang360.com/yiqicha/renzhi.png"></u-image>
                        <text class="u-margin-left-10">任职{{corporatse.partner.corporates_count ? corporatse.partner.corporates_count : '0'}}家企业</text>
                    </view>
                </view>
            </view>
            <view>
                <text class="gray">许可证编号</text>
                <view>{{con.permit ? con.permit : '-'}}</view>
            </view>
            <view>
                <text class="gray">注册地址</text>
                <view>{{con.address ? con.address : '-'}}</view>
            </view>
            <view class="flex">
                <view class="item">
                    <text class="gray">注册属地</text>
                    <view>{{con.situation ? con.situation : '-'}}</view>
                </view>
                <view class="item u-border-left u-padding-left-20">
                    <text class="gray">注册资本</text>
                    <view>{{con.stock ? con.stock : '-'}}</view>
                </view>
            </view>
            <view>
                <text class="gray">许可证业务种类</text>
                <view>{{con.type ? con.type : '-'}}</view>
            </view>
            <view>
                <text class="gray">企业性质</text>
                <view>{{con.corporate ? con.corporate : '-'}}</view>
            </view>
            <view class="flex">
                <view class="item">
                    <text class="gray">上市情况</text>
                    <view>{{con.situation ? con.situation : '-'}}</view>
                </view>
                <view class="item u-border-left u-padding-left-20">
                    <text class="gray">股票代码</text>
                    <view>{{con.stock ? con.stock : '-'}}</view>
                </view>
            </view>
            <view>
                <text class="gray">客户服务投诉电话</text>
                <view>{{con.csch ? con.csch : '-'}}</view>
            </view>
            <view class="flex">
                <view class="item">
                    <text class="gray">用户投诉量</text>
                    <view>{{con.complaints ? con.complaints : '-'}}</view>
                </view>
                <view class="item u-border-left u-padding-left-20">
                    <text class="gray">用户投诉回复率</text>
                    <view>{{con.ucrr ? con.ucrr : '-'}}</view>
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
</style><template>
    <view class="page u-border-top">
        <view>
            <view class="title u-border-bottom">基本信息</view>
            <view class="info">
              <view>
                  <text class="gray">公司名称</text>
                  <view>{{corporatse.cpyname}}</view>
              </view>
                <view class="flex">
                    <view class="item">
                        <text class="gray">许可证书</text>
                        <view>{{con.permit ? con.permit : '-'}}</view>
                    </view>
                    <view class="item u-border-left u-padding-left-20">
                        <text class="gray">许可证书</text>
                        <view>{{con.permit ? con.permit : '-'}}</view>
                    </view>
                </view>
                <view>
                    <text class="gray">业务及其覆盖范围</text>
                    <view>{{con.corporate.cpyname}}</view>
                </view>
            </view>
        </view>
        <u-gap height="20" bg-color="#f8f8f8"></u-gap>
        <view>
            <view class="title u-border-bottom">年报公示</view>
            <view class="info">
            <view>
                <text class="gray">公司名称</text>
                <view>{{corporatse.cpyname}}</view>
            </view>
            <view>
                <text class="gray">统一社会信用代码</text>
                <view>{{con.corporatse.uscc ? con.corporatse.uscc : '-'}}</view>
            </view>
            <view>
                <text class="gray">统一社会信用代码</text>
                <view class="flex">
                    <view class="item">{{corporatse.partner.name ? corporatse.partner.name : '-'}}</view>
                    <view class="red">
                        <u-image mode="aspectFit" width="30" height="30"
                                 src="http://images.yiqiwang360.com/yiqicha/renzhi.png"></u-image>
                        <text class="u-margin-left-10">任职{{corporatse.partner.corporates_count ? corporatse.partner.corporates_count : '0'}}家企业</text>
                    </view>
                </view>
            </view>
            <view>
                <text class="gray">许可证编号</text>
                <view>{{con.permit ? con.permit : '-'}}</view>
            </view>
            <view>
                <text class="gray">注册地址</text>
                <view>{{con.address ? con.address : '-'}}</view>
            </view>
            <view class="flex">
                <view class="item">
                    <text class="gray">注册属地</text>
                    <view>{{con.situation ? con.situation : '-'}}</view>
                </view>
                <view class="item u-border-left u-padding-left-20">
                    <text class="gray">注册资本</text>
                    <view>{{con.stock ? con.stock : '-'}}</view>
                </view>
            </view>
            <view>
                <text class="gray">许可证业务种类</text>
                <view>{{con.type ? con.type : '-'}}</view>
            </view>
            <view>
                <text class="gray">企业性质</text>
                <view>{{con.corporate ? con.corporate : '-'}}</view>
            </view>
            <view class="flex">
                <view class="item">
                    <text class="gray">上市情况</text>
                    <view>{{con.situation ? con.situation : '-'}}</view>
                </view>
                <view class="item u-border-left u-padding-left-20">
                    <text class="gray">股票代码</text>
                    <view>{{con.stock ? con.stock : '-'}}</view>
                </view>
            </view>
            <view>
                <text class="gray">客户服务投诉电话</text>
                <view>{{con.csch ? con.csch : '-'}}</view>
            </view>
            <view class="flex">
                <view class="item">
                    <text class="gray">用户投诉量</text>
                    <view>{{con.complaints ? con.complaints : '-'}}</view>
                </view>
                <view class="item u-border-left u-padding-left-20">
                    <text class="gray">用户投诉回复率</text>
                    <view>{{con.ucrr ? con.ucrr : '-'}}</view>
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