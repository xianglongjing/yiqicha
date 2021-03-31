<template>
  <view class="page">
    <view class="top"></view>
    <view class="content">
      <view class="title">重置密码</view>
      <view class="login-box">
        <u-cell-group>
          <u-field
            type="number"
            v-model="phone"
            label="手机号"
            placeholder="请填写手机号"
            @blur="validatePhone"
          ></u-field>
          <u-field type="number" v-model="code" label="验证码" placeholder="请填写验证码">
            <u-button
              size="mini"
              slot="right"
              type="default"
              ripple-bg-color="#ff6c48"
              @click="getCode"
            >{{sendMsgText}}</u-button>
          </u-field>
          <u-verification-code ref="uCode" @change="codeChange"></u-verification-code>
          <u-field v-model="password" password label="密码"></u-field>
          <u-field v-model="repassword" password label="确认密码"></u-field>
        </u-cell-group>
        <view class="hint">
          <!-- 注册即代表您同意
          <text class="link">医企网 《用户协议》、《隐私政策》，</text>并授权使用您的账号信息（如昵称、头像、联系地址）以便您统一管理-->
        </view>
        <u-button
          shape="circle"
          size="default"
          :ripple="true"
          :custom-style="customStyle"
          ripple-bg-color="#ff8c6d"
          @click="submit"
        >确定重置密码</u-button>
      </view>
    </view>
    <view class="login-tool">
      <u-divider>已有账号？</u-divider>
      <u-button
        shape="circle"
        size="default"
        :ripple="true"
        :custom-style="regBtnStyle"
        ripple-bg-color="#ff6c48"
        @click="goLogin"
      >登录</u-button>
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      phone: '',
      password: '',
      repassword: '',
      code: '',
      sendMsgText: '获取验证码',
      customStyle: {
        color: '#ffffff',
        backgroundColor: '#ff6c48'
      },
      regBtnStyle: {
        marginTop: '20px', // 注意驼峰命名，并且值必须用引号包括，因为这是对象
        color: '#ff6c48',
        backgroundColor: '#ffffff'
      }
    }
  },
  onLoad () { },
  computed: {
    inputStyle () {
      let style = {};
      if (this.tel) {
        style.color = "#fff";
        style.backgroundColor = this.$u.color['warning'];
      }
      return style;
    }
  },
  methods: {
    // 验证手机号码格式和是否存在
    async validatePhone () {
      const { data: res } = await this.$request({
        method: 'POST',
        url: 'login/exphone',
        data: {
          phone: this.phone
        }
      })
    },
    codeChange (text) {
      this.sendMsgText = text;
    },
    async getCode () {
      if (this.phone === '') return this.$u.toast('请输入手机号码')
      if (this.$refs.uCode.canGetCode) {
        // 向后端请求验证码
        uni.showLoading({
          title: '正在获取验证码'
        })
        const { data: res } = await this.$request({
          method: 'POST',
          url: 'myhome/sendsms',
          data: {
            phone: this.phone
          }
        })
        // console.log(res)
        uni.hideLoading()
        // 通知验证码组件内部开始倒计时
        this.$refs.uCode.start();
      } else {
        this.$u.toast('倒计时结束后再发送')
      }
    },
    async submit () {
      this.validatePhone()
      if (
        this.phone === '' ||
        this.password === '' ||
        this.repassword === '' ||
        this.code === ''
      ) {
        return this.$u.toast('请填写完整')
      } else if (this.password !== this.repassword) {
        return this.$u.toast('密码和确认密码不一致')
      }
      const { data: res } = await this.$request({
        method: 'POST',
        url: 'myhome/retrieve',
        data: {
          phone: this.phone,
          password: this.password,
          repassword: this.repassword,
          sms: this.code
        }
      })
      uni.navigateTo({
        url: '/pages/mine/login?phone=' + this.phone
      })
      uni.showToast({
        title: '重置成功,请登录！',
        icon: 'none'
      })
    },
    goLogin () {
      uni.redirectTo({
        url: '/pages/mine/login'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  background: #ffffff;
  font-size: 28rpx;
  .login-tool {
    width: 600rpx;
    margin: 160rpx auto 0;
    text-align: center;
  }
  .content {
    width: 600rpx;
    margin: 80rpx auto 0;

    .title {
      text-align: left;
      font-size: 60rpx;
      font-weight: 500;
      margin-bottom: 100rpx;
    }
    .login-box {
      text-align: center;
    }
    input {
      text-align: left;
      margin-bottom: 10rpx;
      padding-bottom: 6rpx;
    }
    .tips {
      color: $u-type-info;
      margin-bottom: 60rpx;
      margin-top: 8rpx;
    }
    .getCaptcha {
      background-color: rgb(253, 243, 208);
      color: $u-tips-color;
      border: none;
      font-size: 30rpx;
      padding: 12rpx 0;

      &::after {
        border: none;
      }
    }
    .alternative {
      color: $u-tips-color;
      display: flex;
      justify-content: space-between;
      margin-top: 20rpx;
    }
  }
  .hint {
    width: 600rpx;
    margin: 40rpx auto;
    font-size: 22rpx;
    color: $u-tips-color;

    .link {
      color: $u-type-warning;
    }
  }
}
</style>
