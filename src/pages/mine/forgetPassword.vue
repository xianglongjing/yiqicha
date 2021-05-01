<template>
  <view class="page">
    <view class="content">
      <view>
        <view style="margin-left: -13rpx">
          <text class="title text-black ">欢迎来到一企查</text>
          <view class="u-margin-top-30" style="color:#B4B5B5;font-size:33rpx;font-weight:650">忘记密码</view>
          <!-- last-child选择器-->
        </view>
      </view>
      <view class="login-box u-margin-top-50 u-margin-left-30">
        <u-form :model="form" ref="aForm">
          <u-form-item left-icon="phone" style="color:#B4B5B5;font-size:40rpx" prop="phone">
            <u-input v-model="form.phone" placeholder="请输入您的手机号" placeholder-style="padding-left:20rpx;color:#B4B5B5"/>
          </u-form-item>
        </u-form>
        <u-form :model="form" ref="uForm">
          <u-form-item left-icon="email" style="color:#B4B5B5;font-size:40rpx">
            <u-input v-model="form.code" placeholder="请输入验证码" placeholder-style="padding-left:20rpx;color:#B4B5B5"/>
            <view style="position: absolute;left:70%;top:24rpx">
              <u-button shape="circle" :customStyle="code" @click="getCode">{{sendMsgText}}</u-button>
              <u-verification-code ref="uCode" @change="codeChange"></u-verification-code>
            </view>
          </u-form-item>
          <u-form-item left-icon="lock" style="color:#B4B5B5;font-size:40rpx" prop="password">
            <u-input v-model="form.password"  placeholder-style="padding-left:20rpx;color:#B4B5B5" password="true"
                     type="password" label="密码" :password-icon="passwordIcon"
                     placeholder="请重置密码"/>
          </u-form-item>
        </u-form>
        <view class="u-margin-top-20">
          <u-row gutter="16" justify="space-between">
            <u-col class="login-btn">
              <u-button shape="square" size="default" :ripple="true" :custom-style="customStyle" ripple-bg-color="#ff8c6d"
                        @click="submit">确定</u-button>
            </u-col>
          </u-row>
        </view>
      </view>
    </view>
    <view class="buttom">
      <view class="loginType"></view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          phone: '',
          password: '',
          code:''
        },
        sendMsgText: '获取验证码',
        code:{
          width:'140rpx',
          height:'40rpx',
          marginLeft:'30rpx',
          color:'#FF2E0F',
          fontSize:'20rpx'
        },
        rules:{
          phone:[
            {
              required: true,
              message: '请输入手机号',
              // 可以单个或者同时写两个触发验证方式
              // trigger: 'blur',
            },
            {
              // 自定义验证函数，见上说明
              validator: (rule, value, callback) => {
                // 上面有说，返回true表示校验通过，返回false表示不通过
                // this.$u.test.mobile()就是返回true或者false的
                return this.$u.test.mobile(value);
              },
              message: '手机号码不正确',
              // 触发器可以同时用blur和change
              // trigger: 'blur',
            },
          ],
          code:[
            {
              required: true,
              message: '请输入验证码',
              // 可以单个或者同时写两个触发验证方式
              // trigger: 'blur',
            },
            {
              validator: (rule, value, callback) => {
                // 上面有说，返回true表示校验通过，返回false表示不通过
                // this.$u.test.mobile()就是返回true或者false的
                return this.$u.test.code(value, 4);
              },
              message: '验证码格式错误'
            }
          ],
          password:[
            {
              required: true,
              message: '请输入密码',
              // 可以单个或者同时写两个触发验证方式
              // trigger: ['blur'],
            },
            {
              min: 8,
              message: '密码不能低于8位！'
            },
            // {
            // 	validator:validatePass,
            // }
          ],
        },
        passwordIcon: true,
        customStyle: {
          color: '#ffffff',
          backgroundColor: '#FF2E0F',
          width: '98%'
        },
        regBtnStyle: {
          marginTop: '20px', // 注意驼峰命名，并且值必须用引号包括，因为这是对象
          color: '#ff6c48',
          backgroundColor: '#ffffff'
        }
      }
    },
    onLoad() {},
    onReady() {
      this.$refs.aForm.setRules(this.rules);
      this.$refs.uForm.setRules(this.rules);
    },
    onShow(){},
    computed: {
      inputStyle() {
        let style = {};
        if (this.tel) {
          style.color = "#fff";
          style.backgroundColor = this.$u.color['warning'];
        }
        return style;
      }
    },
    methods: {
      getCode() {
        this.$refs.aForm.validate(valid => {
          if (valid) {
            this.validateCode();
          } else {
            console.log('验证失败');
          }
        });
        // this.$u.toast('请输入正确的手机号码')
        // this.validatePhone()
        /*if(!this.cate) return this.$u.toast('请输入正确的手机号码')
        if (this.form.phone === '') return this.$u.toast('请输入手机号码')
        */
      },
      async validateCode(){
        if (this.$refs.uCode.canGetCode) {
          // 向后端请求验证码
          uni.showLoading({
            title: '正在获取验证码'
          })
          const {
            data: res
          } = await this.$request({
            method: 'POST',
            url: 'applets/fsms',
            data: {
              phone: this.form.phone
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
      codeChange(text) {
        this.sendMsgText = text;
      },

      async login () {
        const { data: res } = await this.$request({
          method: 'POST',
          url: 'applets/forget',
          data: {
            fphone: this.form.phone,
            password: this.form.password,
            code: this.form.code
          }
        })
        uni.navigateTo({
          url: '/pages/mine/login?phone'
        })
        uni.showToast({
          title: '重置成功,请登录！',
          icon: 'none'
        })
      },
      submit() {
        this.$refs.aForm.validate(valid => {
          if (valid) {
            this.$refs.uForm.validate(valid => {
              if (valid) {
                this.login();
                uni.showToast({
                  title: '修改成功,请登录！',
                  icon: 'none'
                })
              } else {
                console.log('验证失败');
              }
            });
          } else {
            console.log('验证失败');
          }
        })
      },
      goRegister() {
        uni.navigateTo({
          url: '/pages/mine/register'
        })
      },
      goForget() {
        uni.navigateTo({
          url: '/pages/mine/forgetPassword'
        })
      },
      goto(path) {
        uni.navigateTo({
          url: '/pages/' + path
        })
      }
    }
  }
</script>


<style lang="scss" scoped>
  page{
    background: url("http://images.yiqiwang360.com/yiqicha/zhuce.jpg");
    background-size: cover;
  }
  .page {

    font-size: 28rpx;
    padding:100rpx 0;
    .login-tool {
      width: 600rpx;
      margin: 100rpx auto 0;
      text-align: center;
    }

    .content {
      width: 600rpx;
      margin: 100rpx auto 0;
      .title {
        text-align: center;
        font-size: 47rpx;
        font-weight: 650;
        letter-spacing: 8rpx;
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
      text-align: center;
      width: 650rpx;
      margin: 90rpx auto 30rpx;
      font-size: 22rpx;
      color: $u-tips-color;

      .link {
        color: #E7D78C;
      }
    }

    .login {
      margin: 70rpx auto;

      button {
        width: 80%;
      }

    }
    .login_logo {
      text-align: center;
      image {
        width: 170rpx;
        height: 170rpx;
      }

    }
    .login-btn button{
      margin-top:40rpx;
      font-size: 35rpx;
    }
    .login-wx {
      text-align: center;
      image {
        width: 70rpx;
        height: 70rpx;
      }
    }
    .register {
      display: flex;
      flex-direction: row;
      padding:50rpx 30rpx;
      justify-content: space-between;
      .forget{
        color:#B4B5B5;
      }
    }
  }
</style>
