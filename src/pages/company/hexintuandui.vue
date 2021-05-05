<template>
    <view class="page u-border-top">
        <view class="con">
            <u-image mode="aspectFit"
                    src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.t-nan.com%2FtutnL3R1dG5pbWcyLnRiY2RuLmNuL3Rmc2NvbS9pMi9UQjF1S3kzSnBYWFhYWGdYWFhYWFhYWFhYWFhfISEwLWl0ZW1fcGljLmpwZ18zMTB4MzEwLmpwZw%3D%3D.jpg&refer=http%3A%2F%2Fwww.t-nan.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622708877&t=d3fa3dcfbb3d5c040bf0fa9e89952602"
           width="70" height="70" border-radius="10"></u-image>
       <view class="right">
           <view class="flex">
               <text>王先斌</text>
               <view class="num">
                   <u-image mode="aspectFit"
                            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.t-nan.com%2FtutnL3R1dG5pbWcyLnRiY2RuLmNuL3Rmc2NvbS9pMi9UQjF1S3kzSnBYWFhYWGdYWFhYWFhYWFhYWFhfISEwLWl0ZW1fcGljLmpwZ18zMTB4MzEwLmpwZw%3D%3D.jpg&refer=http%3A%2F%2Fwww.t-nan.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622708877&t=d3fa3dcfbb3d5c040bf0fa9e89952602"
                            width="40" height="40"></u-image>
                   任职1家企业
               </view>
           </view>
           <view class="gray">
               <text class="u-border-right u-padding-right-20">执行董事</text>
               <text class="u-padding-left-20">总经理</text>
           </view>
           <view>
               <text class="gray">简介：</text>
               <text>111111</text>
           </view>
       </view>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {

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
    .con{
        line-height: 50rpx;
        display: flex;
        background: white;
        padding: 25rpx;
        .right{
            flex:1;
            margin-left:20rpx;
            .flex{
                justify-content: space-between;
                .num{
                    display: flex;
                    align-items: center;
                    color:#fd5123;
                }
            }
        }
    }
</style>