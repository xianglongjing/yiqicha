<template>
  <view>
    <image class="full" src="https://yiqiwang360.com/images/wx/wode_yijianfankui_banner.png" mode="widthFix" />
    <view class="feed-box">
      <u-form :model="form" ref="uForm">
        <u-form-item label="问题描述" label-position="top">
          <u-input type="textarea" v-model="form.opinion" placeholder="点击此处添加问题描述" />
        </u-form-item>
        <u-form-item label="联系电话" label-width="140">
          <u-input type="number" v-model="form.phone" placeholder="（选填，方便我们联系您）" />
        </u-form-item>
      </u-form>
    </view>
    <u-button
      shape="circle"
      size="default"
      :ripple="true"
      :custom-style="customStyle"
      ripple-bg-color="#ff8c6d"
      @click="submitFeed"
    >提交</u-button>
    <u-modal
      v-model="alertShow"
      title="提交成功"
      :content="content"
      @confirm="goBack"
      confirm-color="#fd5123"
    ></u-modal>
  </view>
</template>

<script>
export default {
  data () {
    return {
      alertShow: false,
      content: '感谢您的宝贵意见',
      form: {
        opinion: '',
        phone: ''
      },
      customStyle: {
        color: '#ffffff',
        backgroundColor: '#ff6c48',
        margin: '10rpx 100rpx',
        border: 'none'
      },
    }
  },
  onLoad () { },
  methods: {
    async submitFeed () {
      const { data: res } = await this.$request({
        method: 'POST',
        url: 'myhome/opinion',
        data: this.form
      })
      this.alertShow = true
    },
    goBack () {
      uni.navigateBack({
        delta: 2
      });
    }
  }
}
</script>

<style lang="scss">
page {
  background-color: #f8f8f8;
}
</style>
<style lang="scss" scoped>
.full {
  width: 100%;
}
.feed-box {
  margin: 30rpx;
  padding: 0 40rpx;
  background: #ffffff;
  margin-bottom: 30rpx;
}
</style>
