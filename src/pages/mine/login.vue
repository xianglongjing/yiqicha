<template>
	<view class="page">
		<view class="login_logo">
			<image src="https://yiqiwang360.com/images/app/logo.png" mode="aspectFit"></image>
		</view>
		<view class="content">
			<view class="cu-bar">
				<view class="action sub-title" style="margin-left: -13rpx">
					<text class="title text-black">登录</text>
					<text class="bg-red" style="width:2.5rem;left:0.1em;height:0.4em;bottom:0.2em"></text>
					<!-- last-child选择器-->
				</view>
			</view>
			<view class="login-box u-margin-top-30">
				<u-form :model="form" ref="uForm">
					<u-form-item label="帐 号" style="white-space: nowrap">
						<u-input v-model="form.phone" placeholder="输入你的帐号" />
					</u-form-item>
					<u-form-item label="密 码" style="white-space: nowrap">
						<u-input v-model="form.password" password="true" type="password" label="密码" :password-icon="passwordIcon"
						 placeholder="输入你的密码"/>
					</u-form-item>
				</u-form>
				<view class="u-margin-top-60">
					<u-row gutter="16" justify="space-between">
						<u-col class="login-btn">
							<u-button shape="circle" size="default" :ripple="true" :custom-style="customStyle" ripple-bg-color="#ff8c6d"
							 @click="login">登录</u-button>
						</u-col>
					</u-row>
					<view>
						<view class="register u-margin-top-50">
							<span @click="goto('mine/register')"> 注册账号</span>
							<span class="cuIcon-right"></span>
							<span class="margin-left margin-right">|</span>
							<span @click="goForget">忘记密码？</span>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="login-tool">
			<u-divider>使用微信登录</u-divider>
			<view class="login-wx">
				<image src="https://yiqiwang360.com/images/app/weixin.png" mode="aspectFit" class="u-margin-top-50" @click="wxLogin"></image>
			</view>
		</view>
		<view class="hint">
			注册即代表您同意
			<text class="link" @click="goto('common/protocols')">医企网 《用户协议》、</text>
			<text class="link" @click="goto('common/privacy')">《隐私政策》，</text>并授权使用您的账号信息（如昵称、头像、联系地址）以便您统一管理
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
				},
				passwordIcon: true,
				customStyle: {
					color: '#ffffff',
					backgroundColor: '#FF2E0F',
					width: '85%'
				},
				regBtnStyle: {
					marginTop: '20px', // 注意驼峰命名，并且值必须用引号包括，因为这是对象
					color: '#ff6c48',
					backgroundColor: '#ffffff'
				}
			}
		},
		onLoad(options) {
			if (options) {
				this.form.phone = options.phone
			}
		},
		onShow(){

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
			async wxLogin() {
				uni.login({
					provider: 'weixin',
					success: function (loginRes) {
						console.log(loginRes)
				}
				})
				const {
					data: res
				} = await this.$request({
					method: 'POST',
					url: 'login',
					data: {
						code:this.code
					}
				})
				// console.log(res)
				this.$u.toast('登录成功！')
				// 将登录成功之后的token,uid保存到客户端的storage中
				uni.setStorageSync('token', res.data.token)
				uni.setStorageSync('uid', res.data.uid)
				uni.setStorageSync('code', res.data.code)
			},
			// wxLogin(){
			// 	let that=this
			// 	uni.login({
			// 		provider: 'weixin',
			// 		success: function (loginRes) {
			// 			console.log(loginRes)
			// 			uni.request({
			// 				url:'login',
			// 				data:{
			// 					code:loginRes.code
			// 				},
			// 				success(loginRes){
			// 					uni.setStorageSync('token', loginRes.data.token)
			// 					uni.setStorageSync('code', loginRes.data.code)
			// 					console.log(111)
			// 				}
			// 			})
			// 		}
			// 	});
			// },

			async login() {
				if (this.form.phone === '' || this.form.password === '') return this.$u.toast('请输入手机号码和密码')
				const {
					data: res
				} = await this.$request({
					method: 'POST',
					url: 'login',
					data: {
						loginame: this.form.phone,
						password: this.form.password
					}
				})
				// console.log(res)
				this.$u.toast('登录成功！')
				// 将登录成功之后的token,uid保存到客户端的storage中
				uni.setStorageSync('token', res.data.token)
				uni.setStorageSync('uid', res.data.uid)
				uni.setStorageSync('info', res.data.infor)
				uni.switchTab({
					url: '/pages/mine/mine',
					success: function(e) {
						var page = getCurrentPages().pop();
						if (page == undefined || page == null) return
						page.onLoad()
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
	.page {
		background: #ffffff;
		font-size: 28rpx;

		.login-tool {
			width: 600rpx;
			margin: 100rpx auto 0;
			text-align: center;
		}

		.content {
			width: 600rpx;
			margin: 40rpx auto 0;

			.title {
				text-align: center;
				font-size: 50rpx;
				font-weight: 500;
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
			color: #C7573F;
		}

	}
</style>
