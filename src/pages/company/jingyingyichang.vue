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
      <view class="con">
         <view>
            <text>列入</text>
            <text class="gray">2016-08-18被列入经营异常名录</text>
         </view>
         <view>
            <text class="gray">原因：</text>
            <text>2016-08-18被列入经营异常名录</text>
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
           }
        },
       methods:{
          change(index) {
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
   }
</style>