<template>
  <view></view>
</template>

<script>
export default {
  data () {
    return {}
  },
  onLoad () {
    // 从本地缓存中同步获取指定 key 对应的内容，用于判断是否是第一次打开应用
    const value = uni.getStorageSync('pass');
    if (value) {
      uni.switchTab({
        url: '/pages/index/index'
      });
    } else {
      uni.switchTab({
        url: '/pages/index/index'
      });
      // uni.redirectTo({
      //   url: '/pages/index/guide'
      // });
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
