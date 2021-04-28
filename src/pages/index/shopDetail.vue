<template>
    <view class="page">

        <uni-nav-bar :status-bar="false" width="90%" left-icon="back" :fixed="true" :border="false" :shadow="false" @clickLeft="goBack">
            临沂市铭远企业管理服务
        </uni-nav-bar>
        <view class="desc">
            <u-form :model="form" ref="uForm">
                <u-form-item label="法定代表：" label-width="200rpx">
                    <u-input v-model="partner.name" style="color:#9A9A9A" placeholder=" "/>
                </u-form-item>
                <u-form-item label="注册资金：" label-width="200rpx">
                    <u-input v-model="shopList.rtdcapital" disabled placeholder=" "/>
                </u-form-item>
                <u-form-item label="实缴资本：" label-width="200rpx">
                    <u-input v-model="shopList.rtdcapital" disabled placeholder=" "/>
                </u-form-item>
                <u-form-item label="成立日期：" label-width="200rpx">
                    <u-input v-model="shopList.ebhtdate" disabled placeholder=" "
                    />
                </u-form-item>
            </u-form>
        </view>
        <view class="infor">
            <view class="title u-border-bottom">登记信息</view>
            <view class="flex">
                <view class="con">
                    <view>注册号</view>
                    <text>{{shopList.brn ? shopList.brn: '—'}}
                    </text>
                </view>
                <view class="con">
                    <view>组织机构代码号</view>
                    <text>{{shopList.organization ? shopList.organization:'—'}}
                    </text>
                </view>
                <view class="con">
                    <view>统一社会信用代码</view>
                    <text>{{shopList.uscc ? shopList.uscc:'—'}}
                    </text>
                </view>
                <view class="con">
                    <view>纳税人识别号</view>
                    <text>0123456789
                    </text>
                </view>
                <view class="con">
                    <view>进出口代码</view>
                    <text>{{shopList.iaec ? shopList.iaec:'—'}}
                    </text>
                </view>
                <view class="con">
                    <view>海关注册编码</view>
                    <text>{{shopList.crcode ? shopList.crcode:'—'}}
                    </text>
                </view>
                <view class="con">
                    <view>经营状态</view>
                    <text>{{shopList.revocation=1 ? '开业' :'吊销' }}
                    </text>
                </view>
                <view class="con">
                    <view>企业类型</view>
                    <text>{{shopList.type ? shopList.type:'—'}}
                    </text>
                </view>
                <view class="con" style="width:100%">
                    <view>公司地址</view>
                    <text>{{shopList.address ? shopList.address:'—'}}
                    </text>
                </view>
                <view class="con" style="width:100%">
                    <view>经营范围</view>
                    <text>{{shopList.scope ? shopList.scope:'—'}}
                    </text>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                form: {
                    name: '',
                    money: '',
                    real:'',
                    date:''
                },
                shopList:[],
                partner:[]
            }
        },
        onLoad (options) {
            this.getshopList(options.id)
        },
        methods:{
            async getshopList (id) {
                const res  =await this.$request({
                    method: 'GET',
                    url: 'applets/business',
                    data: {id:id}
                }).then(res=>{
                    console.log(res.data)
                    // console.log(res.data.id)
                    this.shopList = res.data
                    this.partner = res.data.partner
                    // this.comment = res.data.comment
                    // this.pivot = res.data.comment.pivot
                    // this.status = res.data.data.news.user_like;
                })
                // this.menuNum = 12 / res.data.length
            },
            goBack(){
                uni.navigateBack({
                    delta: 1
                });
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
.desc{
    margin:20rpx 0;
    background: white;
    padding:20rpx 40rpx;
}
    .infor{
        background: white;
        padding:20rpx 40rpx;
        .title{
            padding:10rpx 0 20rpx 0;
            font-size: 30rpx;
            font-weight: 610;
        }
        .flex{
            flex-wrap: wrap;
        }
        .con{
            margin:30rpx 0;
            width:50%;
            text{
                color:#9C9C9C;
            }
        }
    }
</style>