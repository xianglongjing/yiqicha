<template>
  <view class="page u-border-top">
    <u-parse :html="con.about"
             :lazy-load="true"
             :show-with-animation="true"
             :tag-style="contentStyle"
             domain="https://api.rosepo.com/"></u-parse>
<!--    <u-image :src="'http://yiqiwang360.com/'+shopList.image" width="100%" height="400"></u-image>-->
  </view>
</template>

<script>
  export default {
    data () {
      return {
        con:{},
        contentStyle: {
          // 字符串的形式
          h2: 'font-size:25rpx;line-height:48rpx;margin:20rpx 0;color:#000000;text-align:center;',
          p: 'font-size:24rpx;line-height:50rpx;margin:20rpx 0;color:#333333',
          img: 'border-radius:8rpx;',
          ".get-item": "display:block;text-align: center;margin-bottom: 10rpx;"
        },
      }
    },
    onLoad () {
      this.about()
    },
    methods: {
      async about () {
        const { data: res } = await this.$request({
          method: 'GET',
          url: 'applets/about',
        })
       console.log(res)
        this.con=res

      },
    }
  }
</script>
<style lang="scss" scoped>
  .page{
    padding:20rpx;
  }
</style>
