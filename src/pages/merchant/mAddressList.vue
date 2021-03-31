<template>
  <view class="address-page">
    <view>
      <u-notice-bar mode="horizontal" :list="tipsList"></u-notice-bar>
    </view>
    <view class="address-info">
      <view class="address-item" v-for="(item, index) in addressList" :key="index">
        <view>
          <view>地址：{{item.address}}</view>
        </view>
        <view class="icon">
          <u-icon
            name="edit-pen"
            label="编辑"
            label-size="24"
            @click="showEditAddress(item.id, item.address)"
          ></u-icon>
          <u-icon name="trash" label="删除" label-size="24" @click="showDelete(item.id)"></u-icon>
        </view>
      </view>
    </view>
    <u-button
      shape="circle"
      size="default"
      :ripple="true"
      :custom-style="customStyle"
      ripple-bg-color="#ff8c6d"
      @click="goAddAddres"
    >添加地址</u-button>
    <!-- 删除确认框 -->
    <u-modal
      v-model="deleteShow"
      content="您确定删除吗？"
      show-cancel-button
      confirm-color="#fd5123"
      @confirm="deleteaddress"
    ></u-modal>
    <!-- 修改服务商地址 -->
    <u-modal
      v-model="editAddressShow"
      content
      title="编辑地址"
      :title-style="{padding: '30rpx 0'}"
      show-cancel-button
      confirm-color="#fd5123"
      @confirm="submitAddress"
      @cancel="cancelAddress"
    >
      <view>
        <u-input
          v-model="newAddress"
          type="textarea"
          placeholder="请输入地址"
          height="300"
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
        '温馨提示：添加地址后，点击编辑完善具体地址，例：增加具体楼号和房间号。'
      ],
      storage: {
        token: '',
        uid: 0,
        info: {}
      },
      customStyle: {
        color: '#ffffff',
        backgroundColor: '#ff6c48',
        margin: '50rpx 200rpx',
        border: 'none'
      },
      addressList: [],
      deleteShow: false,
      addressId: 0,
      editAddressShow: false,
      newAddress: ''
    }
  },
  onLoad () {
    this.getStorage()
    this.getAddressList()
  },
  methods: {
    // 获取本地存储
    getStorage () {
      this.storage.token = uni.getStorageSync('token')
      this.storage.uid = uni.getStorageSync('uid')
      this.storage.info = uni.getStorageSync('info')
    },
    // 获取地址列表
    async getAddressList () {
      const { data: res } = await this.$request({
        url: 'sitelist',
        data: {
          uid: this.storage.uid,
          token: this.storage.token
        }
      })
      this.addressList = res.data
    },
    // 删除地址
    showDelete (id) {
      this.deleteShow = true
      this.addressId = id
    },
    async deleteaddress () {
      const { data: res } = await this.$request({
        url: 'delsite',
        data: {
          id: this.addressId,
          uid: this.storage.uid,
          token: this.storage.token
        }
      })
      uni.showToast({
        title: '删除成功',
        icon: 'none'
      })
      this.getAddressList()
    },
    // 添加地址
    goAddAddres () {
      uni.chooseLocation({
        success: async (res) => {
          const { data: result } = await this.$request({
            method: 'POST',
            url: 'servicesite',
            data: {
              uid: this.storage.uid,
              token: this.storage.token,
              longitude: res.longitude,
              latitude: res.latitude,
              address: res.address + '-' + res.name
            }
          })
          uni.showToast({
            title: '添加成功',
            icon: 'none'
          })
          this.getAddressList()
        }
      })
    },
    // 编辑地址
    showEditAddress (id, content) {
      this.addressId = id
      this.newAddress = content
      this.editAddressShow = true
    },
    async submitAddress () {
      const { data: res } = await this.$request({
        method: 'GET',
        url: 'position',
        data: {
          uid: this.storage.uid,
          token: this.storage.token,
          id: this.addressId,
          address: this.newAddress
        }
      })
      uni.showToast({
        title: '编辑成功',
        icon: 'none'
      })
      this.getAddressList()
    },
    cancelAddress () {
      this.newAddress = ''
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
.address-page {
  background: #ffffff;
  width: 100%;
  box-sizing: border-box;
}
.address-info {
  padding: 0 30rpx;

  width: 100%;
  .address-item {
    width: 100%;
    margin: 15rpx 0;
    padding: 20rpx 0;
    border-bottom: 0.5px solid #f3f3f3;
    .icon {
      display: flex;
      height: 80rpx;
      line-height: 80rpx;
      justify-content: space-between;
    }
  }
}
.add-address {
  padding: 20rpx;
  margin-top: 30rpx;
}
</style>
