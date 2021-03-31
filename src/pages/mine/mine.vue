<template>
  <view class="page">
    <view class="userinfo">
      <view class="user-top">
        <view class="headimg">
          <image
            :src="storage.info.img || 'https://api.yiqiwang360.com/images/app/app_logo2.png'"
            mode="aspectFill"
            @click="go('common/personal')"
          />
        </view>
        <view class="info-cont" v-if="storage.token !== ''" @click="go('common/personal')">
          <view class="username">{{storage.info.nackname || '点击设置昵称'}}</view>
          <view class="phone">{{storage.info.phone}}</view>
        </view>
        <view class="info-cont" v-else @click="goLogin">
          <view class="username">登录/注册</view>
          <view class="phone">享受更优服务</view>
        </view>
      </view>
      <view class="head-btn">
        <view class="head-btn-item" @click="go('mine/collect')">
          <view class="num">{{storage.info.collectNum || 0}}</view>
          <view class="title">我的收藏</view>
        </view>
        <view class="head-btn-item" @click="go('mine/follow')">
          <view class="num">{{storage.info.concernNum || 0}}</view>
          <view class="title">我的关注</view>
        </view>
        <view class="head-btn-item" @click="go('mine/history')">
          <view class="num">{{storage.info.browseNum || 0}}</view>
          <view class="title">我的足迹</view>
        </view>
        <view class="head-btn-item" @click="go('mine/coupon')">
          <view class="num">0</view>
          <view class="title">优惠券</view>
        </view>
      </view>
    </view>
    <!-- 我的服务 -->
    <view class="tool-btn">
      <view class="title">
        我的服务
        <view class="view-all" @click="goMyOrders(9)">
          查看全部
          <u-icon name="arrow-right" color="#999999" size="28"></u-icon>
        </view>
      </view>
      <u-line color="#f3f3f3" />
      <view class="tool-btn-items">
        <view class="btn-item" @click="goMyOrders('0,1')">
          <view class="btn-icon">
            <image src="~@/static/icons/mine/wode_daishenhe.png" mode="heightFix" />
          </view>
          <view class="btn-name">待接单</view>
        </view>
        <view class="btn-item" @click="goMyOrders('3,7,8')">
          <view class="btn-icon">
            <image src="~@/static/icons/mine/wode_fuwuzhong.png" mode="heightFix" />
          </view>
          <view class="btn-name">服务中</view>
        </view>
        <view class="btn-item" @click="goMyOrders(4)">
          <u-badge type="error" :count="commentsNum" size="mini" :offset="[-5, 35]"></u-badge>
          <view class="btn-icon">
            <image src="~@/static/icons/mine/wode_daipingjia.png" mode="heightFix" />
          </view>
          <view class="btn-name">待评价</view>
        </view>
        <view class="btn-item" @click="goMyOrders('5,6')">
          <view class="btn-icon">
            <image src="~@/static/icons/mine/wode_yiwancheng.png" mode="heightFix" />
          </view>
          <view class="btn-name">已完成</view>
        </view>
      </view>
    </view>
    <!-- 商家服务 -->
    <view class="tool-btn" v-if="storage.info.type === 3">
      <view class="title">
        商家服务
        <!-- <view class="view-all" @click="goMyOrders(9)">
          查看全部
          <u-icon name="arrow-right" color="#999999" size="28"></u-icon>
        </view>-->
      </view>
      <u-line color="#f3f3f3" />
      <view class="tool-btn-items">
        <view class="btn-item" @click="go('merchant/shopManage')">
          <view class="btn-icon">
            <image src="~@/static/icons/mine/dianpu.png" mode="heightFix" />
          </view>
          <view class="btn-name">商家管理</view>
        </view>
        <view class="btn-item" @click="go('merchant/goodsManage')">
          <view class="btn-icon">
            <image src="~@/static/icons/mine/shanpin.png" mode="heightFix" />
          </view>
          <view class="btn-name">服务管理</view>
        </view>
        <view class="btn-item" @click="go('merchant/ordersManage')">
          <u-badge type="error" :count="ordersNum" size="mini" :offset="[-5, 35]"></u-badge>
          <view class="btn-icon">
            <image src="~@/static/icons/mine/dingdan.png" mode="heightFix" />
          </view>
          <view class="btn-name">订单管理</view>
        </view>
        <view class="btn-item" @click="go('merchant/demandsManage')">
          <u-badge type="error" :count="demandsNum" size="mini" :offset="[-5, 35]"></u-badge>
          <view class="btn-icon">
            <image src="~@/static/icons/mine/xuqiu.png" mode="heightFix" />
          </view>
          <view class="btn-name">需求管理</view>
        </view>
      </view>
    </view>
    <view class="tool-btn">
      <view class="title">常用功能</view>
      <u-line color="#f3f3f3" />
      <u-grid :col="4" :border="false">
        <u-grid-item>
          <view class="btn-item" @click="go('common/notices')">
            <view class="btn-icon">
              <image src="~@/static/icons/mine/wode_xiaoxi.png" mode="aspectFit" />
            </view>
            <view class="btn-name">我的消息</view>
          </view>
        </u-grid-item>
        <u-grid-item>
          <view class="btn-item" @click="go('common/upload')">
            <view class="btn-icon">
              <image src="~@/static/icons/mine/wode_ziliao.png" mode="aspectFit" />
            </view>
            <view class="btn-name">我的资料</view>
          </view>
        </u-grid-item>
        <u-grid-item>
          <view class="btn-item" @click="callPhone">
            <view class="btn-icon">
              <image src="~@/static/icons/mine/wode_kefu.png" mode="aspectFit" />
            </view>
            <view class="btn-name">联系客服</view>
          </view>
        </u-grid-item>

        <u-grid-item>
          <view class="btn-item" @click="goto('common/about')">
            <view class="btn-icon">
              <image src="~@/static/icons/mine/wode_guanyu.png" mode="aspectFit" />
            </view>
            <view class="btn-name">关于我们</view>
          </view>
        </u-grid-item>
        <u-grid-item>
          <view class="btn-item" @click="goto('common/feedback')">
            <view class="btn-icon">
              <image src="~@/static/icons/mine/wode_yijian.png" mode="aspectFit" />
            </view>
            <view class="btn-name">意见反馈</view>
          </view>
        </u-grid-item>
        <u-grid-item>
          <view class="btn-item" @click="go('common/setting')">
            <view class="btn-icon">
              <image src="~@/static/icons/mine/wode_shezhi.png" mode="aspectFit" />
            </view>
            <view class="btn-name">设置</view>
          </view>
        </u-grid-item>
      </u-grid>
    </view>
    <view class="banner">
      <image
        class="full"
        src="https://api.yiqiwang360.com/images/app/banner/img_banner.png"
        mode="widthFix"
      />
    </view>
    <!-- 修改昵称对话框
    <u-modal
      v-model="editNickNameShow"
      content
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
    </u-modal>-->
    <!-- 退出确认对话框 -->
    <u-modal
      v-model="logoutShow"
      content="是否退出登录?"
      show-cancel-button
      confirm-color="#fd5123"
      @confirm="logout"
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
      // // 修改昵称对话框隐藏或显示
      // editNickNameShow: false,
      // newNickName: '',
      logoutShow: false,
      // 待评价
      commentsNum: 0,
      // 商家待接单
      ordersNum: 0,
      // 商家待接需求
      demandsNum: 0
    }
  },
  onLoad () {
    this.getStorage()
  },
  onShow () {
    this.getStorage()
    this.getBasicInfo()
  },
  onPullDownRefresh () {
    this.getBasicInfo(() => { uni.stopPullDownRefresh() })
  },
  methods: {
    // 获取本地存储
    getStorage () {
      this.storage.token = uni.getStorageSync('token')
      this.storage.uid = uni.getStorageSync('uid')
      this.storage.info = uni.getStorageSync('info')
    },
    // 跳转登录
    goLogin () {
      uni.navigateTo(
        { url: '/pages/mine/login' }
      )
    },
    // 昵称
    // setNickName () {
    //   this.editNickNameShow = true
    // },
    // async submitNickName () {
    //   const { data: res } = await this.$request({
    //     method: 'POST',
    //     url: 'myhome/editnickname',
    //     data: {
    //       token: this.storage.token,
    //       uid: this.storage.uid,
    //       nackname: this.newNickName
    //     }
    //   })
    //   this.newNickName = ''
    //   this.getBasicInfo()
    // },
    // cancelNickName () {
    //   this.newNickName = ''
    // },
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
      this.commentsNum = res.infor.khEvaNum
      this.ordersNum = res.infor.spOrderNum
      this.demandsNum = res.infor.spNeedsNum
      callBack && callBack()
    },
    // 点击跳转
    go (path) {
      if (this.storage.token === '') {
        return uni.showToast({
          title: '未登录，请登录',
          icon: 'none',
          duration: 1500
        })
      }
      uni.navigateTo(
        { url: '/pages/' + path }
      )
    },
    goto (path) {
      uni.navigateTo(
        { url: '/pages/' + path }
      )
    },
    // 拨打客服电话
    callPhone () {
      uni.makePhoneCall({
        phoneNumber: '4000361717'
      })
    },
    // 退出登录
    logoutDialogShow () {
      if (this.storage.token === '') {
        return uni.showToast({
          title: '未登录，请登录',
          icon: 'none',
          duration: 1500
        })
      }
      this.logoutShow = true
    },
    logout () {
      const { data: res } = this.$request({
        url: 'login/deToken',
        data: {
          token: this.storage.token,
          uid: this.storage.uid
        }
      })
      uni.showToast({
        title: '退出成功',
        icon: 'none',
        duration: 1500
      })
      uni.clearStorageSync()
      uni.navigateTo(
        { url: '/pages/mine/login' }
      )
    },
    goMyOrders (val) {
      if (this.storage.token === '') {
        return uni.showToast({
          title: '未登录，请登录',
          icon: 'none',
          duration: 1500
        })
      }
      uni.navigateTo({
        url: '/pages/orders/myOrders?state=' + val
      })
    }
  }
}
</script>

<style lang="scss">
page {
  background: #f8f8f8;
}
</style>
<style lang="scss" scoped>
.full {
  width: 100%;
}
.banner {
  background: #f8f8f8;
  padding: 10rpx;
}
.page {
  .userinfo {
    position: relative;
    background: url("http://api.yiqiwang360.com/image/mine/my_bg.png"),
      linear-gradient(90deg, #ff2b0f, #fd5b29);
    background-size: cover;
    background-repeat: no-repeat;

    max-height: 520rpx;
    padding: 100rpx 40rpx 0;
    box-shadow: 0 3px 5px 0 #ededed;

    .user-top {
      position: relative;
      margin-top: var(--status-bar-height);
    }

    .headimg {
      image {
        height: 150rpx;
        width: 150rpx;
        border-radius: 50%;
        border: 6rpx solid #ffffff80;
      }
    }

    .info-cont {
      position: absolute;
      top: 0;
      left: 190rpx;
      color: #ffffff;
      padding-top: 24rpx;
      z-index: 9;

      .username {
        font-size: 34rpx;
        font-weight: 700;
      }

      .phone {
        padding-top: 12rpx;
        font-size: 30rpx;
      }
    }

    .head-btn {
      display: flex;
      color: #ffffff;
      text-align: center;
      padding-top: 20rpx;

      .head-btn-item {
        padding: 20rpx 0;
        flex: 1;

        .num {
          font-size: 36rpx;
          font-weight: 600;
        }

        .title {
          padding-top: 6rpx;
          font-size: 28rpx;
        }
      }
    }
  }

  .tool-btn {
    margin: 20rpx 0;
    background: #ffffff;
    box-shadow: 0 0 3px 0 #ededed;

    .title {
      position: relative;
      margin: 0 30rpx;
      padding: 30rpx 10rpx;
      color: #333333;
      font-size: 32rpx;
      line-height: 32rpx;

      .view-all {
        position: absolute;
        right: 0;
        top: 26rpx;
        height: 40rpx;
        line-height: 40rpx;
        vertical-align: bottom;
        font-size: 26rpx;
        color: #999999;

        u-icon {
          display: inline-block;
        }
      }
    }
  }

  .tool-btn-items {
    width: 100%;
    padding: 28rpx;
    display: flex;
    box-sizing: border-box;

    .btn-item {
      width: 100%;
      text-align: center;
      padding: 10rpx 0;
      position: relative;
    }
  }
  .btn-icon {
    height: 44rpx;
    width: 100%;
    text-align: center;
    image {
      height: 44rpx;
      max-width: 44rpx;
    }
  }
  .btn-name {
    padding-top: 5px;
    color: #676767;
  }

  .ad-banner {
    margin: 10px 0;
    padding: 0 15px;

    image {
      width: 100%;
    }
  }
}
</style>
