<template>
   <view class="page u-border-top">
       <view class="title u-border-bottom">注册信息</view>
       <view class="padding">
           <view class="flex2">
               <view class="item">
                   <view class="gray">海关注册编码</view>
                   <text>11</text>
               </view>
               <view class="item2">
                   <text class="shu u-margin-right-20">|</text>
                   <view>
                       <view class="gray">注册海关</view>
                       <text>11</text>
                   </view>
               </view>
           </view>
           <view class="flex2">
               <view class="item">
                   <view class="gray">行政区划</view>
                   <text>11</text>
               </view>
               <view class="item2">
                   <text class="shu u-margin-right-20">|</text>
                   <view>
                       <view class="gray">经济区划</view>
                       <text>11</text>
                   </view>
               </view>
           </view>
           <view class="flex2">
               <view class="item">
                   <view class="gray">经营类别</view>
                   <text>11</text>
               </view>
               <view class="item2">
                   <text class="shu u-margin-right-20">|</text>
                   <view>
                       <view class="gray">行业种类</view>
                       <text>11</text>
                   </view>
               </view>
           </view>
           <view class="flex2">
               <view class="item">
                   <view class="gray">海关注销标志</view>
                   <text>11</text>
               </view>
               <view class="item2">
                   <text class="shu u-margin-right-20">|</text>
                   <view>
                       <view class="gray">年报情况</view>
                       <text>11</text>
                   </view>
               </view>
           </view>
       </view>

   </view>
</template>

<script>
    export default {
        name: "jckouxinyong"
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
</style>