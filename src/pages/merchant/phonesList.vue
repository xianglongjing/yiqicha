<template>
  <view class="phone-page">
    <view class="phone-info">
      <view class="phone-item" v-for="(item, index) in phonesList" :key="index">
        <view>
          <view>名称：{{item.name}}</view>
          <view>号码：{{item.phone}}</view>
        </view>
        <view class="icon" @click="showDelete(item.id)">
          <u-icon name="trash" label="删除" label-size="24"></u-icon>
        </view>
      </view>
    </view>
    <u-button
      shape="circle"
      size="default"
      :ripple="true"
      :custom-style="customStyle"
      ripple-bg-color="#ff8c6d"
      @click="showAddPhone"
    >添加号码</u-button>
    <!-- 删除确认框 -->
    <u-modal v-model="deleteShow" content="您确定删除吗？" show-cancel-button @confirm="deletePhone"></u-modal>
    <!-- 添加对话框 -->
    <u-modal v-model="addShow" title="添加号码" show-cancel-button @confirm="addPhone">
      <view class="add-phone">
        <u-field v-model="phoneName" label="名称" placeholder="请输入名称，例：客服电话" required></u-field>
        <u-field v-model="phone" label="号码" placeholder="请输入手机号或固定电话" required :border-bottom="false" ></u-field>
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
      customStyle: {
        color: '#ffffff',
        backgroundColor: '#ff6c48',
        margin: '10rpx 200rpx',
        border: 'none'
      },
      phonesList: [],
      deleteShow: false,
      phoneId: 0,
      addShow: false,
      phoneName: '',
      phone: ''
    }
  },
  onLoad () {
    this.getStorage()
    this.getPhonesList()
  },
  methods: {
    // 获取本地存储
    getStorage () {
      this.storage.token = uni.getStorageSync('token')
      this.storage.uid = uni.getStorageSync('uid')
      this.storage.info = uni.getStorageSync('info')
    },
    // 获取电话列表
    async getPhonesList () {
      const { data: res } = await this.$request({
        url: 'phoneslist',
        data: {
          uid: this.storage.uid,
          token: this.storage.token
        }
      })
      this.phonesList = res.data
      // this.addressList.forEach((item) => {
      //   if (item.status === 1) {
      //     this.addressId = item.id
      //     this.addressChoose = item.id
      //   }
      // })
    },
    // 添加电话
    showAddPhone () {
      this.addShow = true
    },
    async addPhone () {
      if (this.phoneName === '' ||
        this.name === ''
      ) return uni.showToast({
        title: '名称和号码',
        icon: 'none'
      })
      const { data: res } = await this.$request({
        method: 'POST',
        url: 'servicephones',
        data: {
          uid: this.storage.uid,
          token: this.storage.token,
          name: this.phoneName,
          phone: this.phone
        }
      })
      uni.showToast({
        title: '添加成功',
        icon: 'none'
      })
      this.phoneName = ''
      this.phone = ''
      this.getPhonesList()
    },
    // 删除电话
    showDelete (id) {
      this.deleteShow = true
      this.phoneId = id
    },
    async deletePhone () {
      const { data: res } = await this.$request({
        url: 'delphones',
        data: {
          id: this.phoneId,
          uid: this.storage.uid,
          token: this.storage.token
        }
      })
      uni.showToast({
        title: '删除成功',
        icon: 'none'
      })
      this.getPhonesList()
    }
  }
}
</script>
<style lang="scss">
page {
  background: #ffffff;
}
</style>

<style lang="scss" scoped>
.phone-page {
  background: #ffffff;
  width: 100%;
  padding: 0 30rpx;
  box-sizing: border-box;
}
.phone-info {
  width: 100%;
  .phone-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 15rpx 0;
    padding: 20rpx 0;
    border-bottom: 0.5px solid #f3f3f3;
  }
}
.add-phone {
  padding: 20rpx;
  margin-top: 30rpx;
}
</style>