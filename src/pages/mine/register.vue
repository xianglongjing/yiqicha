<template>
	<view class="page">
		<view class="login_logo">
			<image src="https://yiqiwang360.com/images/app/logo.png" mode="aspectFit"></image>
		</view>
		<view class="content">
			<view class="cu-bar">
				<view class="action sub-title" style="margin-left:-13rpx">
					<text class="title">注册</text>
					<text class="bg-red line-bottom" style="width:2.5rem;left:0.1em;height:0.4em;bottom:0.2em"></text>
					<!-- last-child选择器-->
				</view>
			</view>

			<view class="login-box u-margin-top-30">
				<u-form :model="form" ref="aForm">
					<u-form-item prop="phone" label="帐 号" style="white-space: nowrap;"><!--@blur="validatePhone"-->
						<u-input v-model="form.phone" type="number" placeholder="输入你的帐号" placeholder-class="weight" placeholder-style="margin-left:20rpx"/>
					</u-form-item>
				</u-form>
				<u-form :model="form" ref="uForm">
					<u-form-item label="验证码" style="white-space: nowrap" prop="code">
						<u-input v-model="form.code" placeholder="输入你的验证码" placeholder-class="weight" :clearable="clearable" placeholder-style="margin-left:20rpx"/>
						<view style="position: absolute;left:70%;top:24rpx">
						<span class="text-gray">|</span>
							<text style="color:#FF3E0F;margin-left: 20rpx" @click="getCode">{{sendMsgText}}</text>
							<u-verification-code ref="uCode" @change="codeChange"></u-verification-code>
						</view>
					</u-form-item>
					<u-form-item label="密码" style="letter-spacing: 10rpx" prop="password">
						<u-input v-model="form.password" password="true" type="password" label="密码" :password-icon="passwordIcon"
						 placeholder="输入你的密码" placeholder-style="margin-left:20rpx"/>
					</u-form-item>
					<u-form-item label="确认" style="letter-spacing: 10rpx" prop="repassword">
						<u-input v-model="form.repassword" password="true" type="password" :password-icon="passwordIcon"
						 placeholder="再次确认密码" placeholder-style="margin-left:20rpx"/>
					</u-form-item>
					<u-form-item label="邀请人" style="white-space: nowrap;" prop="inviter">
						<u-input v-model="form.inviter" placeholder="请输入邀请人" placeholder-class="weight" placeholder-style="margin-left:20rpx"/>
					</u-form-item>
				</u-form>
				<u-button shape="circle" size="default" :ripple="true" :custom-style="customStyle" ripple-bg-color="#ff8c6d" @click="submit">同意协议并注册</u-button>
				<view class="login-tool">
					<text class="exit">已有账号</text>
					<text class="text-xl gologin" @click="goto('mine/login')">去登录<text class="cuIcon-right"></text></text>
				</view>
				<view class="hint u-margin-top-80">
					注册即代表您同意
					<text class="link" @click="goto('common/protocols')">医企网 《用户协议》、</text>
					<text class="link" @click="goto('common/privacy')">《隐私政策》，</text>并授权使用您的账号信息（如昵称、头像、联系地址）以便您统一管理
				</view>

			</view>
		</view>
<!-- 		<view class="login-tool">
			<u-divider>已有账号？</u-divider>
			<u-button shape="circle" size="default" :ripple="true" :custom-style="regBtnStyle" ripple-bg-color="#ff6c48" @click="goLogin">登录</u-button>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			// var validatePass = (rule, value, callback) => {
			// 	if (value === '') {
			// 		callback(new Error('请输入密码'));
			// 	} else {
			// 		if (this.form.repassword !== '') {
			// 			this.$refs.uForm.validateField('repassword');
			// 		}
			// 		callback();
			// 	}
			// };
			// var validatePass2 = (rule, value, callback) => {
			// 	if (value === '') {
			// 		callback(new Error('请再次输入密码'));
			// 	} else if (value !== this.form.password) {
			// 		callback(new Error('两次输入密码不一致!'));
			// 	} else {
			// 		return true;
			//
			// 	}
			// };
			return {
				form: {
					phone: '',
					password: '',
					repassword: '',
					inviter:'',
					longitude:'',
					latitude:'',
					code:''
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
						{
							asyncValidator: (rule, value, callback) =>{
								this.$request({
									method: 'POST',
									url: 'login/unphone',
									data: {
										phone: value
									}
								}).then(res =>{
									// console.log(res.data.meta.status)
									if (res.data.meta.status == 200) {
										callback()
									}else{
										callback(new Error(res.data.meta.msg))
									}
								});
								/*this.$u.post('/login/unphone', {name: value}).then(res => {
									// 如果验证不通过，需要在callback()抛出new Error('错误提示信息')
									if(res.error) {
										callback(new Error('姓名重复'));
									} else {
										// 如果校验通过，也要执行callback()回调
										callback();
									}
								})*/
							}
						}
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
								return this.$u.test.code(value, 6);
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
					repassword:[
						{
							required: true,
							message: '请输入确认密码',
							// 可以单个或者同时写两个触发验证方式
							// trigger: 'blur',
						},
						{
							min: 8,
							message: '密码不能低于8位！',
							// trigger: 'blur',
						},
						{
							validator:(rule, value, callback)=>{
								if (this.form.password ==''){
									callback(new Error('密码不能为空'))
								}else if (value !== this.form.password){
									callback(new Error('密码不一致'))
								}else{
									callback()
								}
							},
							// message: '密码不一致',
							// trigger: 'blur'
						}
					]
				},
				clearable:false,
				passwordIcon: true,
				type: 1,
				sendMsgText: '获取验证码',
				customStyle: {
					color: '#ffffff',
					backgroundColor: '#FF2E0F',
					width: '80%',
					top:'55rpx'
				},
				regBtnStyle: {
					marginTop: '20px', // 注意驼峰命名，并且值必须用引号包括，因为这是对象
					color: '#ff6c48',
					backgroundColor: '#ffffff'
				}
			}
		},
		onReady() {
			this.$refs.aForm.setRules(this.rules);
			this.$refs.uForm.setRules(this.rules);
		},
		onLoad() {},
		onShow(){
			this.getLocation();
		},
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
			//获取经纬度
			getLocation(){
				uni.getLocation({
					type: 'wgs84',
					success: function (res) {
						console.log('当前位置的经度：' + res.longitude);
						console.log('当前位置的纬度：' + res.latitude);
					}
				});
			},
			// 验证手机号码格式和是否存在
			async validatePhone() {
				const {
					data: res
				} = await this.$request({
					method: 'POST',
					url: 'login/unphone',
					data: {
						phone: this.form.phone
					}
				})
				this.cate=true
			},
			codeChange(text) {
				this.sendMsgText = text;
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
						url: 'myhome/sendsms',
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
			getCode() {
				this.$refs.aForm.validate(valid => {
					if (valid) {
						this.validateCode();
					} else {
						console.log('验证失败');
					}
				});
				// this.validatePhone()
				/*if(!this.cate) return this.$u.toast('请输入正确的手机号码')
				if (this.form.phone === '') return this.$u.toast('请输入手机号码')
				*/
			},
			async getsubmit(){
				await this.$request({
					method: 'POST',
					url: 'reg',
					data: {
						phone: this.form.phone,
						password: this.form.password,
						repassword: this.form.repassword,
						code: this.form.code,
						latitude: this.form.latitude,
						longitude: this.form.longitude,
						type: this.type
					}
				})
			},
			submit() {
				this.$refs.aForm.validate(valid => {
					if (valid) {
						this.$refs.uForm.validate(valid => {
							if (valid) {
								this.getsubmit();
								uni.navigateTo({
									url: '/pages/mine/login?phone=' + this.phone
								})
								uni.showToast({
									title: '注册成功,请登录！',
									icon: 'none'
								})
							} else {
								console.log('验证失败');
							}
						});
					} else {
						console.log('验证失败');
					}
				});

				// this.validatePhone()
				/*if (
					this.form.phone === '' ||
					this.form.password === '' ||
					this.form.repassword === '' ||
					this.form.code === ''
				) {
					return this.$u.toast('请填写完整')
				} else if (this.form.password !== this.form.repassword) {
					return this.$u.toast('密码和确认密码不一致')
				}
				const {
					data: res
				} = await this.$request({
					method: 'POST',
					url: 'reg',
					data: {
						phone: this.form.phone,
						password: this.form.password,
						repassword: this.form.repassword,
						code: this.form.code,
						latitude: this.form.latitude,
						longitude: this.form.longitude,
						type: this.type
					}
				})
				uni.navigateTo({
					url: '/pages/mine/login?phone=' + this.phone
				})
				uni.showToast({
					title: '注册成功,请登录！',
					icon: 'none'
				})*/
			},
			goLogin() {
				uni.redirectTo({
					url: '/pages/mine/login'
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
	.page {
		background: #ffffff;
		font-size: 28rpx;

		.login-tool {
			width: 600rpx;
			margin: 90rpx auto 0;
			text-align: center;
		}

		.content {
			width: 600rpx;
			margin: 40rpx auto 0;

			.title {
				text-align: left;
				font-size: 50rpx;
				font-weight: 500;
				letter-spacing: 8rpx;
			}

			.login-box {
				text-align: center;
			}

			input {
				text-align: left;
				text-indent:1em;
				margin-bottom: 10rpx;
				padding-bottom: 6rpx;
			}
			.uni-input-input{
				text-indent: 2em;
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
				color: #E7D78C;
			}
		}
		.exit{
			letter-spacing: 8rpx;
			margin-right: 20rpx;
		}
		.login_logo {
			text-align: center;

			image {
				width: 170rpx;
				height: 170rpx;
			}

		}
		.weight{
			padding-left:30rpx;
		}
		.gologin{
			color:#FF2E0F;
		}
	}
</style>
