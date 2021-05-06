<template>
   <view class="page u-border-top">
       <view class="title u-border-bottom">注册信息</view>
       <view class="padding" v-for="item in con" :key="item.id">
           <view class="flex2">
               <view class="item">
                   <view class="gray">海关注册编码</view>
                   <text>{{item.crc ? item.crc : '-'}}</text>
               </view>
               <view class="item2">
                   <text class="shu u-margin-right-20">|</text>
                   <view>
                       <view class="gray">注册海关</view>
                       <text>{{item.cr ? item.cr : '-'}}</text>
                   </view>
               </view>
           </view>
           <view class="flex2">
               <view class="item">
                   <view class="gray">行政区划</view>
                   <text>{{item.ad ? item.ad : '-'}}</text>
               </view>
               <view class="item2">
                   <text class="shu u-margin-right-20">|</text>
                   <view>
                       <view class="gray">经济区划</view>
                       <text>{{item.ez ? item.ez : '-'}}</text>
                   </view>
               </view>
           </view>
           <view class="flex2">
               <view class="item">
                   <view class="gray">经营类别</view>
                   <text>{{item.business ? item.business : '-'}}</text>
               </view>
               <view class="item2">
                   <text class="shu u-margin-right-20">|</text>
                   <view>
                       <view class="gray">行业种类</view>
                       <text>{{item.industry ? item.industry : '-'}}</text>
                   </view>
               </view>
           </view>
           <view class="flex2">
               <view class="item">
                   <view class="gray">海关注销标志</view>
                   <text>{{item.mark ? item.mark : '-'}}</text>
               </view>
               <view class="item2">
                   <text class="shu u-margin-right-20">|</text>
                   <view>
                       <view class="gray">年报情况</view>
                       <text>{{item.report ? item.report : '-'}}</text>
                   </view>
               </view>
           </view>
           <view class="flex2">
               <view class="item">
                   <view class="gray">注册日期</view>
                   <text>{{item.rdate ? item.rdate : '-'}}</text>
               </view>
               <view class="item2">
                   <text class="shu u-margin-right-20">|</text>
                   <view>
                       <view class="gray">报关有效期</view>
                       <text>{{item.vpocd ? item.vpocd : '-'}}</text>
                   </view>
               </view>
           </view>
           <view class="flex2">
               <view class="item">
                   <view class="gray">特殊贸易区域</view>
                   <text>{{item.sta ? item.sta : '-'}}</text>
               </view>
               <view class="item2">
                   <text class="shu u-margin-right-20">|</text>
                   <view>
                       <view class="gray">信用等级</view>
                       <text>{{item.credit ? item.credit : '-'}}</text>
                   </view>
               </view>
           </view>
           <view class="flex2">
               <view class="item">
                   <view class="gray">跨境贸易电子商务类型</view>
                   <text>{{item.tocbrec ? item.tocbrec : '-'}}</text>
               </view>
           </view>
       </view>
       <view class="info">
           <view class="title">行政处罚信息</view>
           <view class="gray u-padding-right-20">暂无</view>
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
        methods: {
            parseLoaded() {
                this.$refs.uReadMore.init();
            },
            async list (id) {
                const { data: res } = await this.$request({
                    method: 'GET',
                    data:{
                        id:id
                    },
                    url: 'applets/import',
                })
                console.log(res)
                this.con=res

            },
            detail(id){
                uni.navigateTo({
                    url:'/pages/company/shuangsuijiD?id='+id
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
.title{
    font-weight: 600;
    padding:30rpx;
    background: white;
}
.padding{
    background: white;
}
.flex2{
    display: flex;
    background: white;
    justify-content: space-between;
    align-items: center;
    margin:20rpx 0;
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
    .info{
        background: white;
        margin:25rpx 0;
        padding:0 0rpx;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .title{
            font-weight: 600;
        }
    }
</style>