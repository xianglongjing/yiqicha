<template>
  <view>
    <u-empty :show="empty" mode="coupon" margin-top="160" text="暂无优惠券"></u-empty>
  </view>
</template>

<script>
export default {
  data () {
    return {
      empty: true,
    }
  },
  onLoad () {},
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
