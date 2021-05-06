<template>
	<view class="page">
		<view class="content">
			<view>
				<view style="margin-left: -13rpx">
					<text class="title text-black ">欢迎来到一企查</text>
					<view class="u-margin-top-30" style="color:#B4B5B5;font-size:33rpx;font-weight:650">登录</view>
					<!-- last-child选择器-->
				</view>
			</view>
			<view class="login-box u-margin-top-50 u-margin-left-30">
				<u-form :model="form" ref="uForm">
					<u-form-item left-icon="phone" style="color:#B4B5B5;font-size:40rpx">
						<u-input v-model="form.phone" placeholder="请输入您的手机号" placeholder-style="padding-left:20rpx;color:#B4B5B5"/>
					</u-form-item>
					<u-form-item left-icon="lock" style="color:#B4B5B5;font-size:40rpx">
						<u-input v-model="form.password"  placeholder-style="padding-left:20rpx;color:#B4B5B5" password="true" type="password" label="密码" :password-icon="passwordIcon"
						 placeholder="请输入您的密码"/>
					</u-form-item>
				</u-form>
				<view class="u-margin-top-20">
					<u-row gutter="16" justify="space-between">
						<u-col class="login-btn">
							<u-button shape="square" size="default" :ripple="true" :custom-style="customStyle" ripple-bg-color="#ff8c6d"
							 @click="login">登录</u-button>
						</u-col>
					</u-row>
					<view class="register">
						<view @click="goto('mine/register')">点击注册</view>
						<view @click="goForget" class="forget">忘记密码？</view>
<!--						<view class="register u-margin-top-50">-->
<!--							<span @click="goto('mine/register')"> 注册账号</span>-->
<!--							<span class="cuIcon-right"></span>-->
<!--							<span class="margin-left margin-right">|</span>-->
<!--							<span @click="goForget">忘记密码？</span>-->
<!--						</view>-->
					</view>
					<view @click="wx">微信登录</view>
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
			// async wxLogin() {
			// 	uni.login({
			// 		provider: 'weixin',
			// 		success: function (loginRes) {
			// 			console.log(loginRes)
			// 	}
			// 	})
			// 	const {
			// 		data: res
			// 	} = await this.$request({
			// 		method: 'POST',
			// 		url: 'login',
			// 		data: {
			// 			code:this.code
			// 		}
			// 	})
			// 	// console.log(res)
			// 	this.$u.toast('登录成功！')
			// 	// 将登录成功之后的token,uid保存到客户端的storage中
			// 	uni.setStorageSync('phone', res.data.phone)
			// 	uni.setStorageSync('password', res.data.password)
			// 	// uni.setStorageSync('code', res.data.code)
			// },
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
				if (this.form.phone === '' || this.form.password === '') return this.$u.toast('请输入手机号码或密码')
				// if (this.form.password === '') return this.$u.toast('请输入密码')
				const res = await this.$request({
					method: 'POST',
					url: 'applets/login',
					data: {
						phone: this.form.phone,
						password: this.form.password
					}
				})
				// 将登录成功之后的token,uid保存到客户端的storage中
				uni.setStorageSync('phone', res.data.phone)
				uni.setStorageSync('token', res.data.token)
				uni.setStorageSync('id', res.data.id)
				uni.setStorageSync('info', res.data)
				uni.switchTab({
					url: '/pages/mine/mine',
					success: function(e) {
						/*var page = getCurrentPages().pop();
						if (page == undefined || page == null) return
						page.onLoad()*/
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
