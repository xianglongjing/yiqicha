<template>
    <view class="page u-border-top">
        <u-gap height="20" bg-color="#f7f7f7"></u-gap>
        <view class="white">
            <u-form :model="form" ref="aForm">
                <view class="flex u-border-bottom">
                    <input v-model="storage.phone" disabled/>
                    <view>
                        <u-button shape="circle" :customStyle="code" @click="getCode">{{sendMsgText}}</u-button>
                        <u-verification-code ref="uCode" @change="codeChange"></u-verification-code>
                    </view>
                </view>
                <view>
                    <u-input v-model="form.code" placeholder="请输入验证码" placeholder-style="color:#B4B5B5"/>
                </view>
            </u-form>
        </view>
            <view class="pass u-margin-top-30">
                <u-form :model="form" ref="uForm">
                    <u-form-item style="color:#B4B5B5;font-size:40rpx" prop="password">
                        <u-input v-model="form.password"  placeholder-style="padding-left:20rpx;color:#B4B5B5" password="true" type="password" label="密码" :password-icon="passwordIcon"
                                 placeholder="请输入新密码"/>
                    </u-form-item>
                </u-form>
            </view>
        <u-button shape="square" size="default" :ripple="true" :custom-style="customStyle" ripple-bg-color="#ff8c6d"
                  @click="submit">确定</u-button>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                storage: {
                },
                form:{
                    code:'',
                    password:''
                },
                sendMsgText: '获取验证码',
                passwordIcon: true,
                code:{
                    width:'140rpx',
                    height:'40rpx',
                    marginLeft:'30rpx',
                    color:'#FF2E0F',
                    fontSize:'20rpx'
                },
                customStyle: {
                    color: '#ffffff',
                    marginTop:'60px',
                    backgroundColor: '#FF2E0F',
                    width: '90%'
                },
                rules:{
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
            }
        },
        onLoad () {
            this.getStorage()
        },
        onReady() {
            this.$refs.aForm.setRules(this.rules);
            this.$refs.uForm.setRules(this.rules);
        },
        methods:{
            // 获取本地存储
            getStorage () {
                this.storage.token = uni.getStorageSync('token')
                this.storage.phone = uni.getStorageSync('phone')
            },
            getCode() {
                        this.validateCode();
                // this.$u.toast('请输入正确的手机号码')
                // this.validatePhone()
                /*if(!this.cate) return this.$u.toast('请输入正确的手机号码')
                if (this.form.phone === '') return this.$u.toast('请输入手机号码')
                */
            },
            async validateCode(){
                const phone=uni.getStorageSync('phone')
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
                            phone: uni.getStorageSync('phone')
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
                        fphone: uni.getStorageSync('phone'),
                        password: this.form.password,
                        code: this.form.code
                    }
                })
                uni.navigateTo({
                    url: '/pages/mine/login'
                })
                uni.showToast({
                    title: '重置成功,请登录！',
                    icon: 'none'
                })
            },
            submit() {
                // if (this.form.code || this.form.password== '') {
                //     return this.$u.toast('请完整填写内容')
                // }
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
        }
    }
</script>
<style>
    page{
        background: #f8f8f8;
    }
</style>
<style lang="scss" scoped>
.white{
    background:white;
    padding:25rpx;
    .flex{
    justify-content: space-between;
     }
}
    .pass{
        background:white;
    }
</style>