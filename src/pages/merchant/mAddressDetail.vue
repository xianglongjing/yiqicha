<template>
  <view>
    <map :longitude="longitude" :latitude="latitude" :markers="markers" :callout="callout"></map>
    <u-gap height="80" bg-color="#ffffff"></u-gap>
    <u-alert-tips type="warning" title="联系地址" :description="address" class="tips"></u-alert-tips>
  </view>
</template>

<script>
export default {
  data () {
    return {
      longitude: 0,
      latitude: 0,
      address: '',
      markers: [
        {
          label: '我们在这里',
          longitude: 0,
          latitude: 0,
          iconPath: '../../static/icons/location.png',
          width: 30,
          height: 30
        }
      ]
    }
  },
  onLoad (options) {
    this.address = options.address
    this.longitude = options.longitude
    this.latitude = options.latitude
    this.markers[0].longitude = options.longitude
    this.markers[0].latitude = options.latitude
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
view {
  width: 100%;
  height: 100%;
}
map {
  width: 100%;
  height: 900rpx;
}
</style>
