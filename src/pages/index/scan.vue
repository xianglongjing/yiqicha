<template>
  <view>
    <web-view :webview-styles="webviewStyles" :src="url"></web-view>
  </view>
</template>

<script>
  export default {
    data () {
      return {
        url:'',
        webviewStyles: {
          progress: {
            color: '#FF3333'
          }
        }
      }
    },
    onLoad (e) {
      console.log(e)
      this.url=e.url
    },
    methods: {}
  }
</script>
<style lang="scss">
  page{
    background-color:#f8f8f8;
  }
</style>
<style lang="scss" scoped>
  .full{
    width: 100%;
  }
</style>
