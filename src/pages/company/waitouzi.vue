<template>
    <view class="page u-border-top">
        <view class="tab u-border-bottom">
            <u-tabs
                    :list="List"
                    :current="current"
                    @change="Change" gutter="90"
                    bar-width="50" font-size="30"
                    active-color="#E12216" bg-color="none" inactive-color="#000000"
            ></u-tabs>
        </view>
        <view class="down u-border-bottom">
            <u-dropdown>
                <u-dropdown-item v-model="value" title="全部投资比例" :options="options1"></u-dropdown-item>
            </u-dropdown>
        </view>
        <view class="infor u-border-bottom" v-for="item in group" :key="item.id">
            <u-image mode="aspectFit"
                     width="80" height="80"
                     src="https://img2.baidu.com/it/u=1004953359,2131419137&fm=11&fmt=auto&gp=0.jpg"></u-image>
       <view class="right">
           <view class="flex">
             <text class="name">{{item.corporate.cpyname}}</text>
             <text :class="item.corporate.revocation==0 ? 'diao':(item.corporate.revocation==1 ? '开业':'cun')">{{item.corporate.revocation==0 ? '吊销':(item.corporate.revocation==1 ? '开业':'存续')}}</text>
           </view>
           <view class="flex2">
               <view class="item">
                   <view class="gray">法定代表人</view>
                   <text>{{item.corporate.partner.name ? item.corporate.partner.name : '—' }}</text>
               </view>
               <view class="item2">
                   <text class="shu u-margin-right-20">|</text>
                   <view>
                       <view class="gray">成立日期</view>
                       <text>{{item.corporate.ebhtdate ? item.corporate.ebhtdate : '—' }}</text>
                   </view>
               </view>
           </view>
           <view class="flex2">
               <view class="item">
                   <view class="gray">投资数额</view>
                   <text>{{item.subscribed}}</text>
               </view>
               <view class="item2">
                   <text class="shu u-margin-right-20">|</text>
                   <view>
                       <view class="gray">投资比例</view>
                       <text>{{item.ratio}}</text>
                   </view>
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
                group:{},
                shop:[],
                List: [{
                    name: '对外投资1'
                }, {
                    name: '历史对外投资0'
                }],
                current:0,
                options1: [{
                    label: '全部比例',
                    value: 1,
                },
                    {
                        label: '不到5%',
                        value: 2,
                    },
                    {
                        label: '5%以上',
                        value: 3,
                    }
                ],
                value:''
            }
        },
        onLoad(options){
            this.list(options.id)
        },
        methods:{
            Change(index) {
                this.current = index;
            },
            detail(id){
                uni.navigateTo({
                    url:'/pages/company/kaitingDetail?id='+id
                })
            },
            async list(id) {
                const token=uni.getStorageSync('token')
                const {data: res} = await this.$request({
                    method: 'GET',
                    url: 'applets/foreign',
                    data: {
                        id:id
                    }
                })
                this.group = res
                res.shop=res.corporate
                console.log(res)
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
        color:#959595;
    }
    .red{
        color:#DE170B;
    }
    .tab{
        background: white;
    }
    .down{
        background: white;
    }
.infor{
    background: white;
    display: flex;
    padding:30rpx;
    .right{
        flex:1;
        padding:0 20rpx;
        .flex{
            justify-content: space-between;
            .name{
                font-size: 30rpx;
                font-weight: 620;
            }
            .xiao{
                color:#DE170B;
                border:1rpx solid #DE170B;
                border-radius: 7rpx;
            }
           .cun{
               border-radius: 7rpx;
               border:1rpx solid #478766;
               color:#478766;
           }
        }
        .flex2{
            display: flex;
            padding:20rpx 0;
            justify-content: space-between;
            align-items: center;
            .item,.item2{
                flex:1;
            }
            .item2{
                line-height: 45rpx;
                align-items: center;
                display: flex;
                .shu{
                    color:#f8f8f8;
                    font-size:40rpx;
                }
            }
        }

    }
}
</style>