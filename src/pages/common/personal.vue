<template>
  <view>
    <u-gap height="20" bg-color="#f8f8f8"></u-gap>
    <u-cell-group>
      <u-row class="personal">
        <u-col span="2">
          <u-avatar :src="storage.info.img"></u-avatar>
        </u-col>
        <u-col span="10">
          <u-cell-item value="修改头像" @click="uploadAvatar"></u-cell-item>
        </u-col>
      </u-row>
      <u-cell-item
        :title="!storage.info.nackname ? '未设置昵称' : storage.info.nackname"
        value="修改昵称"
        @click="setNickName"
      ></u-cell-item>
    </u-cell-group>
    <!-- 修改昵称对话框 -->
    <u-modal
      v-model="editNickNameShow"
      :content="true"
      title="设置昵称"
      :title-style="{padding: '30rpx 0'}"
      show-cancel-button
      confirm-color="#fd5123"
      @confirm="submitNickName"
      @cancel="cancelNickName"
    >
      <view class="nick-content">
        <u-cell-group>
          <u-field v-model="newNickName" label="昵称" placeholder="2-12个字符"></u-field>
        </u-cell-group>
      </view>
    </u-modal>
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
      // 修改昵称对话框隐藏或显示
      editNickNameShow: false,
      newNickName: ''
    }
  },
  onLoad () { },
  onShow () {
    this.getStorage()
    this.getBasicInfo()
  },
  methods: {
    // 获取本地存储
    getStorage () {
      this.storage.token = uni.getStorageSync('token')
      this.storage.uid = uni.getStorageSync('uid')
      this.storage.info = uni.getStorageSync('info')
    },
    // 获取基本信息
    async getBasicInfo (callBack) {
      if (this.storage.token === '') return
      const { data: res } = await this.$request({
        method: 'POST',
        url: 'myhome',
        data: {
          token: this.storage.token,
          uid: this.storage.uid
        }
      })
      uni.setStorageSync('info', res.infor)
      this.getStorage()
      callBack && callBack()
    },
    // 昵称
    setNickName () {
      this.editNickNameShow = true
    },
    async submitNickName () {
      const { data: res } = await this.$request({
        method: 'POST',
        url: 'myhome/editnickname',
        data: {
          token: this.storage.token,
          uid: this.storage.uid,
          nackname: this.newNickName
        }
      })
      this.newNickName = ''
      this.getBasicInfo()
    },
    cancelNickName () {
      this.newNickName = ''
    },
    // 头像修改
    uploadAvatar () {
      uni.chooseImage({
        success: (chooseImageRes) => {
          const tempFilePaths = chooseImageRes.tempFilePaths
          uni.uploadFile({
            url: 'https://v5.yiqiwang360.com/upLoadUserIco',
            filePath: tempFilePaths[0],
            name: 'file',
            formData: {
              uid: this.storage.uid,
              token: this.storage.token
            },
            success: (uploadFileRes) => {
              uni.showToast({
                title: '修改成功',
                icon: 'none'
              })
              this.getBasicInfo()
            },
            fail: (uploadFileRes) => {
              uni.showToast({
                title: '修改失败',
                icon: 'none'
              })
            }
          })
        }
      })
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
.personal {
  padding: 1rpx;
  u-avatar {
    margin-left: 23rpx;
  }
}
</style>
