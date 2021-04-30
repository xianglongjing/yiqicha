<template>
  <view class="page">
    <view class="userinfo">
      <view class="user-top">
        <view class="headimg">
          <image
            :src="storage.info.img || 'https://api.yiqiwang360.com/images/app/app_logo2.png'"
            mode="aspectFill"
            @click="go('mine/personal')"
          />
        </view>
        <view style="color:white;margin:0 20rpx;font-size: 28rpx">
          <u-icon name="edit-pen" size="30"></u-icon>
          <text class="u-margin-left-10" @click="go('mine/personal')">编辑</text>
        </view>
        <view class="info-cont" v-if="storage.token !== ''" @click="go('common/personal')">
          <view class="username">{{storage.phone || '点击设置昵称'}}</view>
<!--          <view class="phone">临沂市铭远企业管理服务有限公司</view>-->
        </view>
        <view class="info-cont" v-else @click="goLogin">
          <view class="username">登录/注册</view>
          <view class="phone">享受更优服务</view>
        </view>
      </view>
    </view>
    <view class="member">
      <view class="flex">
        <u-image mode="aspectFill" src="http://images.yiqiwang360.com/yiqicha/wode/wode (14).png" width="45" height="45"></u-image>
        <view class="u-margin-left-20">
          <view class="title">开通一企查VIP</view>

          <text class="u-font-25">众多VIP专享特权</text>
        </view>
      </view>
      <u-button :customStyle="kai" :ripple="true" ripple-bg-color="#909399" shape="circle" @click="kaifa">立即开通</u-button>
    </view>
    <view class="head-btn">
    <view class="head-btn-item" @click="go('confirm/confirm')">
      <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/wode/wode (9).png" width="45" height="45"></u-image>
      <view class="title">认证管理</view>
    </view>
    <view class="head-btn-item" @click="kaifa">
      <u-image mode="aspectFill" src="http://images.yiqiwang360.com/yiqicha/wode/wode (1).png" width="45" height="45"></u-image>
      <view class="title">我的动态</view>
    </view>
    <view class="head-btn-item" @click="go('mine/myorder')">
      <u-image mode="aspectFill" src="http://images.yiqiwang360.com/yiqicha/wode/wode (17).png" width="45" height="45"></u-image>
      <view class="title">我的订单</view>
    </view>
    <view class="head-btn-item" @click="go('mine/collect')">
      <u-image mode="aspectFill" src="http://images.yiqiwang360.com/yiqicha/wode/wode (12).png" width="45" height="45"></u-image>
      <view class="title">我的收藏</view>
    </view>
  </view>
    <!-- 我的服务 -->
<view class="first">
  <view class="item u-border-bottom" @click="go('mine/control')">
    <view class="item-l">
    <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/wode/wode (8).png" width="40" height="40"></u-image>
    <text>我的监控</text>
    </view>
    <text class="right cuIcon-right"></text>
  </view>
  <view class="item u-border-bottom" @click="go('mine/follow')">
    <view class="item-l">
      <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/wode/wode (7).png" width="40" height="40"></u-image>
      <text>我的关注</text>
    </view>
    <text class="right cuIcon-right"></text>
  </view>
  <view class="item u-border-bottom" @click="kaifa">
    <view class="item-l">
      <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/wode/wode (5).png" width="40" height="40"></u-image>
      <text>附近公司</text>
    </view>
    <text class="right cuIcon-right"></text>
  </view>
  <view class="item u-border-bottom">
    <view class="item-l">
      <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/wode/wode (10).png" width="40" height="40"></u-image>
      <text>扫一扫</text>
    </view>
    <text class="right cuIcon-right"></text>
  </view>
  <view class="item" @click="go('mine/toufollow')">
    <view class="item-l">
      <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/wode/wode (13).png" width="40" height="40"></u-image>
      <text>头条关注</text>
    </view>
    <text class="right cuIcon-right"></text>
  </view>
  <view class="item u-margin-top-20" @click="go('mine/code')">
    <view class="item-l">
      <u-image mode="aspectFill" src="http://images.yiqiwang360.com/yiqicha/wode/wode (2).png" width="40"
               height="40"></u-image>
      <text>我的兑换码</text>
    </view>
    <view style="color:#878787">尊享卡、VIP兑换入口
      <text class="right cuIcon-right"></text>
    </view>
  </view>
  <view class="item u-margin-top-20 u-border-bottom">
    <view class="item-l" @click="kaifa">
      <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/wode/wode (4).png" width="40" height="40"></u-image>
      <text>分享APP</text>
    </view>
    <text class="right cuIcon-right"></text>
  </view>
  <view class="item u-border-bottom" @click="go('mine/feedback')">
    <view class="item-l">
      <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/wode/wode (3).png" width="40" height="40"></u-image>
      <text>意见反馈</text>
    </view>
    <text class="right cuIcon-right"></text>
  </view>
  <view class="item u-border-bottom" @click="go('mine/call')">
    <view class="item-l">
      <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/wode/wode (16).png" width="40" height="40"></u-image>
      <text>联系我们</text>
    </view>
    <text class="right cuIcon-right"></text>
  </view>
  <view class="item u-border-bottom">
    <view class="item-l" @click="news">
      <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/wode/wode (6).png" width="40"
               height="40"></u-image>
      <text>版本更新</text>
    </view>
    <view style="color:#878787">当前版本信息：12.12.0
      <text class="right cuIcon-right"></text>
    </view>
  </view>
  <view class="item u-border-bottom" @click="go('mine/set')">
    <view class="item-l">
      <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/wode/wode (11).png" width="40" height="40"></u-image>
      <text>设置</text>
    </view>
    <text class="right cuIcon-right"></text>
  </view>
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
        phone: '',
        info: {}
      },
      kai:{
        background:'#C9251C',
        color:'white',
        width:'170rpx',
        height:'50rpx'
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
    console.log(uni.getStorageSync('id'))
    // this.getStorage()
  },
  onShow () {
    this.getStorage()
    // this.getBasicInfo()
  },
  onPullDownRefresh () {
    // this.getBasicInfo(() => { uni.stopPullDownRefresh() })
  },

  methods: {
    // 获取本地存储
    getStorage () {
      this.storage.phone = uni.getStorageSync('phone')
      this.storage.token = uni.getStorageSync('token')
      this.storage.info = uni.getStorageSync('info')
    },
    async kaifa () {
      uni.showToast({
        title: '开发中',
        icon:'none',
        duration: 2000
      });
    },
    async news () {
      uni.showToast({
        title: '已是最新版本',
        icon:'none',
        duration: 2000
      });
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
/*    async getBasicInfo (callBack) {
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
    },*/
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
    background: url("https://yiqiwang360.com/images/yiqicha/beijing.png"),
      linear-gradient(90deg, #ff2b0f, #fd5b29);
    background-size: cover;
    background-repeat: no-repeat;
    height:380rpx;
    padding: 60rpx 40rpx 20rpx;
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
        font-size: 27rpx;
      }
    }


  }
  .head-btn {
    display: flex;
    text-align: center;
    padding: 70rpx 0 20rpx;
    background: white;

    .head-btn-item {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
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
  .member{
    width:92%;
    padding:0 20rpx;
    height:120rpx;
    border-radius: 20rpx;
    background:linear-gradient(90deg, #ffffff, #D1D1D1);
    position:absolute;
    top:320rpx;
    left:4%;
    display: flex;
    flex-direction: row;
    align-items:center ;
    justify-content: space-between;
    .flex{
      flex:1;
      .title{
        font-size: 30rpx;
        font-weight: 700;
      }
    }
  }
  .first{
    margin:30rpx 0;

    .item{
      background: white;
      padding:30rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .right{
        color:#878787;
      }
    }

    .item-l{
      display: flex;
      text{
        margin-left:20rpx;
      }
    }
  }
</style>
