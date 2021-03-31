<template>
  <view class="order-page">
    <view class="order-info">
      <u-radio-group v-model="addressId" @change="radioGroupChange" width="100%" :wrap="true">
        <u-radio
          shape="circle"
          v-for="item in addressList"
          :key="item.id"
          :name="item.id"
          active-color="#fd5123"
        >
          <view class="addr-item">
            <view>{{item.province + ' '+item.city + ' ' + item.area}}</view>
            <view>{{item.site}}</view>
            <view class="addr-footer">
              <view class="name">{{item.name}}</view>
              <view class="phone">{{item.phone}}</view>
              <view class="del" @click="showDelete(item.id)">
                <u-icon name="trash" label="删除" label-size="24"></u-icon>
              </view>
              <view class="del" @click="edit(item.id)">
                <u-icon name="edit-pen" label="编辑" label-size="24"></u-icon>
              </view>
            </view>
          </view>
          <u-line color="#f3f3f3" />
        </u-radio>
      </u-radio-group>
    </view>
    <view class="add u-border-bottom" @click="goAddAddress">
      +
    </view>
    <u-button
      shape="circle"
      size="default"
      :ripple="true"
      :custom-style="customStyle"
      ripple-bg-color="#ff8c6d"
      @click="chooseAddress"
      v-if="addressList.length !== 0"
    >确定默认地址</u-button>
<!--    <u-button-->
<!--      shape="circle"-->
<!--      size="default"-->
<!--      :ripple="true"-->
<!--      :custom-style="customStyle"-->
<!--      ripple-bg-color="#ff8c6d"-->
<!--      @click="goAddAddress"-->
<!--    >添加地址</u-button>-->
    <!-- 删除确认框 -->
    <u-modal v-model="deleteShow" content="您确定删除吗？" show-cancel-button @confirm="removeAddress"></u-modal>
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
      // 服务ID
      gid: '',
      customStyle: {
        color: '#ffffff',
        backgroundColor: '#ff6c48',
        margin: '300rpx 200rpx 0',
        border: 'none'
      },
      addressList: [],
      // 默认地址ID
      addressId: '',
      // 选择地址ID
      addressChoose: '',
      // 删除地址ID
      deleteId: '',
      deleteShow: false
    }
  },
  onLoad (options) {
    this.gid = options.id
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
    // 选中地址
    radioGroupChange (val) {
      this.addressChoose = val
    },
    // 获取地址列表
    async getAddressList () {
      const { data: res } = await this.$request({
        url: 'order/getsite',
        data: {
          uid: this.storage.uid,
          token: this.storage.token
        }
      })
      this.addressList = res.data
      this.addressList.forEach((item) => {
        if (item.status === 1) {
          this.addressId = item.id
          this.addressChoose = item.id
        }
      })
    },
    // 跳转到添加地址
    goAddAddress () {
      uni.redirectTo({
        url: '/pages/orders/addressAdd?id=' + this.gid
      })
    },
    // 确定默认地址
    async chooseAddress () {
      const { data: res } = await this.$request({
        url: 'order/defaultSite',
        data: {
          uid: this.storage.uid,
          token: this.storage.token,
          id: this.addressChoose
        }
      })
      uni.showToast({
        title: '修改默认地址成功',
        icon: 'none',
        success: () => {
          if ((typeof this.gid) === 'undefined') {
            this.getAddressList()
          } else {
            uni.redirectTo({
              url: '/pages/orders/placeOrder?id=' + this.gid
            })
          }
        }
      })
    },
    // 删除地址
    showDelete (id) {
      this.deleteId = id
      this.deleteShow = true
    },
    edit () {
     uni.navigateTo({
       url:'/pages/orders/addressEdit?id=' + this.gid
     })
    },
    async removeAddress () {
      const { data: res } = await this.$request({
        url: 'order/deSite',
        data: {
          id: this.deleteId,
          uid: this.storage.uid,
          token: this.storage.token
        }
      })
      uni.showToast({
        title: '删除成功',
        icon: 'none'
      })
      this.getAddressList()
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
.order-info {
  background: #ffffff;
  width: 100%;
  padding: 0 30rpx;
}
.order-page {
  .addr-item {
    width: 100%;
    margin: 15rpx 10rpx;
  }
}
.addr-footer {
  display: flex;
  .phone {
    flex: 1;
  }
  del {
    width: 50rpx;
  }
  .name {
    width: 160rpx;
  }
}
  .add{
    color:#fd5123;
    text-align: center;
    font-size: 60rpx;
  }
</style>
