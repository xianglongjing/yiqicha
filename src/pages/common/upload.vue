<template>
  <view>
    <u-gap height="20" bg-color="#f8f8f8"></u-gap>
    <u-cell-group>
      <u-cell-item title="已上传资料" value="资料列表" @click="goUploadDetail"></u-cell-item>
      <u-cell-item title="营业执照" value="点击上传" @click="uploadLicense"></u-cell-item>
      <!-- <u-cell-item title="身份证" value="点击上传" @click="uploadInfo"></u-cell-item>
      <u-cell-item title="其它资料" value="点击上传" @click="uploadInfo"></u-cell-item>-->
    </u-cell-group>
    <u-gap height="20" bg-color="#f8f8f8"></u-gap>
    <u-alert-tips
      type="warning"
      title="温馨提示："
      description="申请成为服务商，必须先上传营业执照。成功上传营业执照后，请点击设置-申请服务商，继续申请操作。"
    ></u-alert-tips>
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
    },
    // 上传营业执照
    uploadLicense () {
      uni.chooseImage({
        count: 1,
        success: (chooseImageRes) => {
          const tempFilePaths = chooseImageRes.tempFilePaths
          uni.uploadFile({
            url: 'https://v5.yiqiwang360.com/api/Service/water',
            filePath: tempFilePaths[0],
            name: 'file',
            formData: {
              uid: this.storage.uid,
              token: this.storage.token,
              type: 0
            },
            success: (uploadFileRes) => {
              uni.showToast({
                title: '上传成功',
                icon: 'none'
              })
              this.getUploadInfo()
              this.applyShow = true
            },
            fail: (uploadFileRes) => {
              uni.showToast({
                title: '上传失败',
                icon: 'none'
              })
            }
          })
        }
      })
    },
    // 跳转资料列表
    goUploadDetail () {
      uni.navigateTo({
        url: '/pages/common/uploadDetail'
      })
    }
  }
}
</script>
<style>
page {
  background-color: #f8f8f8;
}
</style>
<style lang="scss" scoped>
</style>