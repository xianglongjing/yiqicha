<template>
  <view class="wrap">
    <u-form :model="model" ref="uForm">
      <u-form-item label="文字" prop="content">
        <u-input
          maxlength="-1"
          type="textarea"
          placeholder="文字和图片至少填一项"
          v-model="model.content"
          height="300"
        />
      </u-form-item>
      <u-form-item label="图片" prop="infoImg" label-width="150" :auto-upload="false">
        <u-upload
          multiple
          width="160"
          @on-uploaded="onUploaded()"
          :action="uploadUrl"
          name="img"
          show-progress
          :form-data="imagesParams"
          @on-remove="removeinfoImg"
        ></u-upload>
      </u-form-item>
    </u-form>
    <u-button @click="submit">发布动态</u-button>
  </view>
</template>

<script>
export default {
  data () {
    return {
      storage: {
        token: '',
        uid: 0,
        info: {}
      },
      // 图片额外参数
      imagesParams: {
        token: '',
        uid: 0
      },
      // 图片上传地址
      uploadUrl: 'https://v5.yiqiwang360.com/api/api/uploadImg',
      // 提交表单
      model: {
        content: '',
        img: [],
        thunb: []
      }
    }
  },
  onLoad () {
    this.getStorage()
  },
  methods: {
    // 获取本地存储
    getStorage () {
      this.storage.token = uni.getStorageSync('token')
      this.storage.uid = uni.getStorageSync('uid')
      this.storage.info = uni.getStorageSync('info')
      this.imagesParams.token = this.storage.token
      this.imagesParams.uid = this.storage.uid
    },
    // 提交表单
    async submit () {
      if (this.model.content === '' && this.model.infoImg.length === 0) {
        return uni.showToast(
          {
            title: '文字和图片至少填一项',
            icon: 'none'
          })
      } else {
        const { data: res } = await this.$request({
          method: 'POST',
          url: 'merchant/addDynamic',
          data: Object.assign(
            {},
            {
              uid: this.storage.uid,
              spid: this.storage.uid,
              token: this.storage.token
            },
            this.model
          )
        })
        uni.showToast({
          title: '发布成功',
          icon: 'none',
          success: uni.redirectTo({
            url: '/pages/shops/shopHome?current=1&id=' + this.storage.uid
          })
        })
      }
    },
    // 上传图片保存地址
    onUploaded (lists) {
      let bigArr = []
      let smallArr = []
      lists.map((item) => {
        bigArr.push(item.response.data.data)
        smallArr.push(item.response.data.thunb)
      })
      this.model.img = bigArr
      this.model.thunb = smallArr
    },
    // 移除图片
    removeinfoImg (index) {
      this.model.img.splice(index, 1)
      this.model.thunb.splice(index, 1)
    }
  }
}
</script>

<style>
</style>
<style scoped lang="scss">
.wrap {
  padding: 30rpx;
}
</style>
