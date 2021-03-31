<template>
  <view>
    <view>
      <u-notice-bar mode="horizontal" :list="tipsList"></u-notice-bar>
    </view>
    <u-cell-group>
      <u-cell-item title="我的主页" value="查看信息" @click="goShop"></u-cell-item>
      <u-cell-item title="名称设置" value="修改" @click="setName"></u-cell-item>
      <u-cell-item title="服务介绍" value="修改" @click="setIntroduction"></u-cell-item>
      <u-cell-item title="联系电话" value="修改" @click="go('merchant/phonesList')"></u-cell-item>
      <u-cell-item title="联系地址" value="修改" @click="go('merchant/mAddressList')"></u-cell-item>
      <u-cell-item title="发布动态" @click="go('merchant/addDynamics')"></u-cell-item>
    </u-cell-group>
    <u-gap height="20" bg-color="#f8f8f8"></u-gap>
    <!-- 修改服务商名称 -->
    <u-modal
      v-model="nameShow"
      content
      title="修改名称"
      :title-style="{padding: '30rpx 0'}"
      show-cancel-button
      confirm-color="#fd5123"
      @confirm="submitName"
    >
      <view>
        <u-input
          v-model="name"
          type="textarea"
          placeholder="请输入名称"
          height="200"
          border
          maxlength="500"
        ></u-input>
      </view>
    </u-modal>
    <!-- 修改服务商介绍信息对话框 -->
    <u-modal
      v-model="introductionShow"
      content
      title="修改介绍"
      :title-style="{padding: '30rpx 0'}"
      show-cancel-button
      confirm-color="#fd5123"
      @confirm="submitIntroduction"
      @cancel="cancelIntroduction"
    >
      <view>
        <u-input
          v-model="introduction"
          type="textarea"
          placeholder="请输入服务介绍"
          height="500"
          border
          maxlength="500"
        ></u-input>
      </view>
    </u-modal>
  </view>
</template>

<script>
export default {
  data () {
    return {
      tipsList: [
        '温馨提示：账号头像、昵称等其它信息，请前往设置中进行修改操作。'
      ],
      storage: {
        token: '',
        uid: 0,
        info: {}
      },
      introduction: '',
      introductionShow: false,
      name: '',
      nameShow: false
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
    // 获取服务商信息
    async getMerchantInfo () {
      const { data: res } = await this.$request({
        url: 'merchant/merchantinfo',
        data: {
          uid: this.storage.uid,
          token: this.storage.token,
          id: this.storage.uid
        }
      })
      this.introduction = res.list.c_profile
      if (res.list.corporateName) {
        this.name = res.list.corporateName
      } else {
        this.name = ''
      }
    },
    // 修改服务商名称
    setName () {
      this.getMerchantInfo()
      this.nameShow = true
    },
    async submitName () {
      const { data: res } = await this.$request({
        method: 'POST',
        url: 'Myhome/editCorporateName',
        data: {
          token: this.storage.token,
          uid: this.storage.uid,
          corporateName: this.name
        }
      })
      uni.showToast({
        title: '修改成功',
        icon: 'none'
      })
    },
    // 修改服务商介绍
    setIntroduction () {
      this.getMerchantInfo()
      this.introductionShow = true
    },
    async submitIntroduction () {
      const { data: res } = await this.$request({
        method: 'POST',
        url: 'editMerchant',
        data: {
          token: this.storage.token,
          uid: this.storage.uid,
          c_profile: this.introduction
        }
      })
      this.introduction = ''
    },
    cancelIntroduction () {
      this.introduction = ''
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
    goShop () {
      uni.redirectTo({
        url: '/pages/shops/shopHome?id=' + this.storage.uid
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
.industry {
  padding: 30rpx;
}
.hint {
  width: 660rpx;
  margin: 80rpx auto;
  font-size: 22rpx;
  color: $u-tips-color;
  text-indent: 44rpx;
  line-height: 40rpx;
  .title{
    text-indent: 0;
  }

  .link {
    color: $u-type-warning;
  }
}
</style>
