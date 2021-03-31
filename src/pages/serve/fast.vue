<template>
  <view>
    <view class="feed-box">
      <u-form :model="form" ref="uForm">
        <u-form-item label="需求描述" label-position="top" required prop="text">
          <u-input type="textarea" v-model="form.text" placeholder="请输入需求描述" />
        </u-form-item>
        <u-form-item label="服务区域" label-width="140" required prop="address">
          <u-input
            type="select"
            :select-open="addressShow"
            v-model="form.address"
            placeholder="请选择服务区域"
            @click="showAddress"
          ></u-input>
        </u-form-item>
        <u-form-item label="姓名称呼" label-width="140" required prop="name">
          <u-input type="text" v-model="form.name" placeholder="请输入姓名或称呼" />
        </u-form-item>
        <u-form-item label="联系电话" label-width="140" required prop="phone">
          <u-input type="number" v-model="form.phone" placeholder="请输入联系电话" />
        </u-form-item>
      </u-form>
    </view>
    <u-button
      shape="circle"
      size="default"
      :ripple="true"
      :custom-style="customStyle"
      ripple-bg-color="#ff8c6d"
      @click="submitFast"
    >提交</u-button>
    <u-modal
      v-model="alertShow"
      title="提交成功"
      :content="content"
      @confirm="goBack"
      confirm-color="#fd5123"
    ></u-modal>
    <!-- 服务区域 -->
    <u-picker v-model="addressShow" mode="region" @confirm="addressChange"></u-picker>
  </view>
</template>

<script>
export default {
  data () {
    return {
      alertShow: false,
      content: '医企网客户经理将尽快与您联系',
      form: {
        name: '',
        phone: '',
        address: '',
        text: '',
        longitude: '12.34',
        latitude: '43.21'
      },
      customStyle: {
        color: '#ffffff',
        backgroundColor: '#ff6c48',
        margin: '10rpx 100rpx',
        border: 'none'
      },
      addressShow: false,
      rules: {
        name: [
          {
            required: true,
            message: '请输入',
            trigger: 'blur'
          }
        ],
        phone: [
          {
            required: true,
            message: '请输入',
            trigger: 'blur'
          }
        ],
        address: [
          {
            required: true,
            message: '请选择',
            trigger: 'blur'
          }
        ],
        text: [
          {
            required: true,
            message: '请输入',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  onLoad () { },
  onReady () {
    this.$refs.uForm.setRules(this.rules);
  },
  methods: {
    submitFast () {
      this.$refs.uForm.validate(async valid => {
        if (valid) {
          const { data: res } = await this.$request({
            method: 'POST',
            url: 'service/needs',
            data: this.form
          })
          this.alertShow = true
        } else {
          return uni.showToast(
            {
              title: '请填写完整',
              icon: 'none'
            }
          )
        }
      })
    },
    goBack () {
      uni.navigateBack({
        delta: 2
      });
    },
    showAddress () {
      this.addressShow = true
    },
    addressChange (e) {
      this.form.address = e.province.label + '-' + e.city.label + '-' + e.area.label
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
