<template>
  <view>
    <u-gap height="20" bg-color="#f8f8f8"></u-gap>
    <u-cell-group>
      <u-row class="personal">
        <u-col span="2">
          <u-avatar :src="storage.info.img"></u-avatar>
        </u-col>
        <u-col span="10">
          <u-cell-item :title="storage.info.nackname" value="修改信息" @click="go('common/personal')"></u-cell-item>
        </u-col>
      </u-row>
      <u-cell-item title="企业信息" @click="go('common/company')"></u-cell-item>
      <u-cell-item title="修改密码" @click="showEditPassword"></u-cell-item>
      <u-cell-item title="下单地址" @click="go('orders/addressList')"></u-cell-item>
      <u-cell-item title="联系我们" @click="go('common/contact')"></u-cell-item>
      <u-cell-item title="申请服务商" @click="showApply"></u-cell-item>
      <u-cell-item title="隐私政策" @click="go('common/privacy')"></u-cell-item>
      <u-cell-item title="服务协议" @click="go('common/protocols')"></u-cell-item>
      <u-cell-item title="退出登录" :title-style="{'color': '#fd5123'}" @click="logoutDialogShow"></u-cell-item>
    </u-cell-group>
    <!-- 退出确认对话框 -->
    <u-modal
      v-model="logoutShow"
      content="是否退出登录?"
      show-cancel-button
      confirm-color="#fd5123"
      @confirm="logout"
    ></u-modal>
    <!-- 修改密码对话框 -->
    <u-modal
      v-model="editPasswordShow"
      content
      title="修改密码"
      :title-style="{padding: '30rpx 0'}"
      show-cancel-button
      confirm-color="#fd5123"
      @confirm="submitPassword"
      @cancel="cancelPassword"
    >
      <view class="password">
        <u-form :model="pwdForm" ref="pwdFormRef">
          <u-form-item label="旧密码" prop="oldpassword" label-width="180">
            <u-input
              v-model="pwdForm.oldpassword"
              placeholder="请输入旧密码"
              type="password"
              password-icon
            />
          </u-form-item>
          <u-form-item label="新密码" prop="newpassword" label-width="180">
            <u-input
              v-model="pwdForm.newpassword"
              placeholder="8-12位"
              type="password"
              password-icon
            />
          </u-form-item>
          <u-form-item label="重复新密码" prop="repassword" label-width="180">
            <u-input
              v-model="pwdForm.repassword"
              placeholder="8-12位"
              type="password"
              password-icon
            />
          </u-form-item>
        </u-form>
      </view>
    </u-modal>
    <!-- 申请服务商 -->
    <u-popup v-model="applyShow" mode="bottom" border-radius="20" length="60%" closeable>
      <view class="merchant">
        <u-alert-tips
          type="warning"
          title="温馨提示："
          description="申请成为服务商，您将会获得商家管理、服务管理、订单管理和需求管理等服务商功能。您申请后，我们后台将尽快审核，请留意您的账号情况。"
        ></u-alert-tips>
        <u-gap height="20" bg-color="#ffffff"></u-gap>
        <u-alert-tips
          type="error"
          title="上传须知："
          description="申请成为服务商，必须先上传营业执照。您尚未上传，请点击下方上传营业执照。"
          v-if="licenseStatus === 0"
        ></u-alert-tips>
        <u-gap height="20" bg-color="#ffffff"></u-gap>
        <u-alert-tips
          type="error"
          title="恭喜："
          description="您已成功上传营业执照，请点击下方申请服务商。"
          v-if="licenseStatus === 1"
        ></u-alert-tips>
        <u-gap height="20" bg-color="#ffffff"></u-gap>
        <u-button
          type="warning"
          @click="uploadLicense"
          size="medium"
          v-if="licenseStatus === 0"
        >上传营业执照</u-button>
        <u-button type="warning" @click="showCongfirm" size="medium">申请服务商</u-button>
      </view>
    </u-popup>
    <u-modal
      v-model="confirmShow"
      content="您确定申请？"
      @confirm="submitApply"
      show-cancel-button
      confirm-text="申请"
      confirm-color="#fd5123"
    ></u-modal>
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
      logoutShow: false,
      editPasswordShow: false,
      pwdForm: {
        oldpassword: '',
        newpassword: '',
        repassword: ''
      },
      pwdRules: {
        oldpassword: [
          {
            required: true,
            message: '请输入旧密码',
            trigger: ['blur'],
          }
        ],
        newpassword: [
          {
            min: 8,
            max: 12,
            required: true,
            message: '请输入新密码8-12位',
            trigger: ['blur'],
          }
        ],
        repassword: [
          {
            min: 8,
            max: 12,
            required: true,
            message: '请重复新密码8-12位',
            trigger: ['blur'],
          }
        ]
      },
      applyShow: false,
      confirmShow: false,
      licenseStatus: 0
    }
  },
  onLoad () { },
  onShow () {
    this.getStorage()
  },
  onReady () {
    this.$refs.pwdFormRef.setRules(this.pwdRules);
  },
  methods: {
    // 获取本地存储
    getStorage () {
      this.storage.token = uni.getStorageSync('token')
      this.storage.uid = uni.getStorageSync('uid')
      this.storage.info = uni.getStorageSync('info')
    },
    //  点击跳转
    go (path) {
      if (this.storage.token === '') {
        return uni.showToast({
          title: '未登录，请登录',
          icon: 'none',
          duration: 2000
        })
      }
      uni.navigateTo(
        { url: '/pages/' + path }
      )
    },
    // 退出登录
    logoutDialogShow () {
      if (this.storage.token === '') {
        return uni.showToast({
          title: '未登录，请登录',
          icon: 'none',
          duration: 2000
        })
      }
      this.logoutShow = true
    },
    logout (val) {
      const { data: res } = this.$request({
        url: 'login/deToken',
        data: {
          token: this.storage.token,
          uid: this.storage.uid
        }
      })
      uni.clearStorageSync()
      uni.redirectTo(
        { url: '/pages/mine/login' }
      )
      uni.showToast({
        title: val || '退出成功',
        icon: 'none',
        duration: 2000
      })
    },
    // 修改密码
    showEditPassword () {
      this.editPasswordShow = true
    },
    submitPassword () {
      this.$refs.pwdFormRef.validate(async valid => {
        if (valid) {
          if (this.pwdForm.newpassword !== this.pwdForm.repassword) {
            return uni.showToast({
              title: '两次新密码不一致',
              icon: 'none'
            })
          }
          const { data: res } = await this.$request({
            method: 'POST',
            url: 'myhome/editpassword',
            data: Object.assign(
              {},
              {
                token: this.storage.token,
                uid: this.storage.uid
              },
              this.pwdForm
            )
          })
          this.$refs.pwdFormRef.resetFields()
          this.logout('修改成功，请重新登录')
        } else {
          uni.showToast({
            title: '请正确填写',
            icon: 'none'
          })
          this.$refs.pwdFormRef.resetFields()
        }
      })
    },
    cancelPassword () {
      this.$refs.pwdFormRef.resetFields()
    },
    // 申请服务商
    showApply () {
      if (this.storage.info.type === 3) return uni.showToast({
        title: '您已是服务商',
        icon: 'none'
      })
      this.getUploadDetail()
      this.applyShow = true
    },
    showCongfirm () {
      this.confirmShow = true
    },
    async submitApply () {
      const { data: res } = await this.$request({
        method: 'POST',
        url: 'Service/identification',
        data: {
          token: this.storage.token,
          uid: this.storage.uid
        }
      })
      uni.showToast({
        title: '申请成功，等待审核',
        icon: 'none',
        duration: 2000
      })
      this.applyShow = false
    },
    // 上传营业执照
    uploadLicense () {
      uni.chooseImage({
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
              this.getUploadDetail()
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
    // 获取上传资料
    async getUploadDetail () {
      const { data: res } = await this.$request({
        method: 'POST',
        url: 'Service/information',
        data: {
          uid: this.storage.uid,
          token: this.storage.token
        }
      })
      this.licenseStatus = res.data.licenseStatus
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
.password {
  padding: 10rpx 35rpx;
}
.merchant {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  u-button {
    margin-top: 30rpx;
  }
}
</style>
