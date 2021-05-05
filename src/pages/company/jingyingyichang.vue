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
      <view class="con" v-if="current==0" v-for="item in info" :key="item.id">
         <view>
            <text class="in">列入</text>
            <text class="gray">{{item.ilddate}}被列入经营异常名录</text>
         </view>
         <view>
            <text class="gray">原因：</text>
            <text>{{item.ildtr}}</text>
         </view>
         <view class="u-margin-top-10">
            <text class="out">移出</text>
            <text class="gray">{{item.modate}}被列入经营异常名录</text>
         </view>
         <view>
            <text class="gray">原因：</text>
            <text>{{item.motr ? item.motr : '-'}}</text>
         </view>
         <view class="u-margin-top-10">
            <text class="gray">作出决定机关</text>
            <view>{{item.modate ? item.modate : '-'}}</view>
         </view>
      </view>
   </view>
</template>

<script>
    export default {
        data(){
           return {
              List: [{
                 name: '经营异常'
              }, {
                 name: '历史经营异常'
              }],
              current:0,
              info:{}
           }
        },
       onLoad(options){
          this.list(options.id)
       },
       methods:{
          async list(id) {
             const {data: res} = await this.$request({
                method: 'GET',
                url: 'applets/abnormality',
                data:{
                   id:id
                }
             })
             this.info = res
             console.log(res)
          },
          Change(index) {
             this.current = index;
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
   .tab{
      background: white;
      text-align: center;
   }
   .con{
      background: white;
      padding:25rpx;
      line-height: 50rpx;
      .in{
         color:#fd5123;
         background: #FBECF0;
         padding:7rpx 12rpx;
         margin-right:10rpx;
      }
      .out{
         color:#589E79;
         background: #E9F7EF;
         padding:7rpx 12rpx;
         margin-right:10rpx;
      }
   }
</style>