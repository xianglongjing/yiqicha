<template>
    <view class="order-page">
        <view class="order-info">
            <u-form :model="addressForm" ref="addressRef">
                <u-form-item label="联系人" label-width="140" required prop="name">
                    <u-input v-model="addressForm.name" placeholder="请输入姓名" />
                </u-form-item>
                <u-form-item label="联系电话" label-width="140" required prop="phone">
                    <u-input type="number" v-model="addressForm.phone" placeholder="请输入手机号码" />
                </u-form-item>
                <u-form-item label="所在区域" label-width="140" required>
                    <u-input v-model="region" type="select" @click="showAddress" placeholder="请选择省市区" />
                </u-form-item>
                <u-form-item label="详细地址" label-width="140" required prop="site">
                    <u-input v-model="addressForm.site" placeholder="街道、小区、楼牌号等" />
                </u-form-item>
                <u-form-item label="设为默认地址" label-width="180">
                    <u-switch
                            slot="right"
                            v-model="addressStatus"
                            active-color="#fd5123"
                            @change="defaultAddress"
                    ></u-switch>
                </u-form-item>
                <u-form-item label="微信" label-width="140">
                    <u-input v-model="addressForm.weChat" placeholder="选填" />
                </u-form-item>
            </u-form>
        </view>
        <u-button
                shape="circle"
                size="default"
                :ripple="true"
                :custom-style="customStyle"
                ripple-bg-color="#ff8c6d"
                @click="submitAddress"
        >添加新地址</u-button>
        <u-picker v-model="addressShow" mode="region" @confirm="addAddress"></u-picker>
    </view>
</template>

<script>
    export default {
        data () {
            return {
                // 选择地址ID
                addressChoose: '',
                addressList: [],
                // 默认地址ID
                addressId: '',
                storage: {
                    token: '',
                    uid: 0,
                    info: {}
                },
                // 服务id
                gid: '',
                addressShow: false,
                addressForm: {
                    name: '',
                    phone: '',
                    weChat: '',
                    province: '',
                    city: '',
                    area: '',
                    site: ''
                },
                region: '',
                customStyle: {
                    color: '#ffffff',
                    backgroundColor: '#fd5123',
                    margin: '10rpx 100rpx',
                    border: 'none'
                },
                status: 0,
                addressStatus: false,
                rules: {
                    name: [{
                        required: true,
                        message: '请输入姓名',
                        trigger: 'blur'
                    }],
                    site: [{
                        required: true,
                        message: '请输入详细地址',
                        trigger: 'blur'
                    }],
                    phone: [
                        {
                            required: true,
                            message: '请输入手机号码',
                            trigger: 'blur'
                        },
                        {
                            validator: (rule, value, callback) => {
                                return this.$u.test.mobile(value)
                            },
                            message: '手机号码不正确',
                            trigger: 'blur',
                        }
                    ]
                }
            }
        },
        onLoad (options) {
            this.gid = options.id
            this.getStorage()
            this.getAddressList()
        },
        onReady () {
            this.$refs.addressRef.setRules(this.rules)
        },
        methods: {
            // 获取本地存储
            getStorage () {
                this.storage.token = uni.getStorageSync('token')
                this.storage.uid = uni.getStorageSync('uid')
                this.storage.info = uni.getStorageSync('info')
            },
            showAddress () {
                this.addressShow = true
            },
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
            addAddress (e) {
                this.region = e.province.label + '-' + e.city.label + '-' + e.area.label
                this.addressForm.province = e.province.label
                this.addressForm.city = e.city.label
                this.addressForm.area = e.area.label
            },
            submitAddress () {
                this.$refs.addressRef.validate(async valid => {
                    if (valid) {
                        if (this.addressForm.province === '' ||
                            this.addressForm.city === '' ||
                            this.addressForm.area === ''
                        ) return uni.showToast({
                            title: '请选择完整的省市区区域',
                            icon: 'none'
                        })
                        const { data: res } = await this.$request({
                            url: 'order/addsite',
                            data: Object.assign(
                                {},
                                {
                                    uid: this.storage.uid,
                                    token: this.storage.token,
                                    status: this.status
                                },
                                this.addressForm
                            )
                        })
                        this.$refs.addressRef.resetFields()
                        uni.showToast({
                            title: '添加地址成功',
                            icon: 'none',
                            success: () => {
                                if (this.gid === 'undefined') {
                                    uni.redirectTo({
                                        url: '/pages/orders/addressList'
                                    })
                                } else {
                                    uni.redirectTo({
                                        url: '/pages/orders/placeOrder?id=' + this.gid
                                    })
                                }
                            }
                        })
                    } else {
                        return uni.showToast({
                            title: '请正确填写或填写完整',
                            icon: 'none'
                        })
                    }
                })
            },
            defaultAddress () {
                if (this.addressStatus === true) {
                    this.status = 1
                } else {
                    this.status = 0
                }
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
    .order-page {
        .no-adds {
            height: 120rpx;
            line-height: 120rpx;
            font-size: 30rpx;
            text-align: center;
            color: #fd5123;
            background: #ffffff;
        }
        .order-adds {
            height: 120rpx;
            font-size: 34rpx;
            padding: 26rpx 30rpx 0;
            background: #ffffff;
        }
        .adds-line {
            height: 6rpx;
            width: 100%;
            font-size: 0;
            background: #ffffff;
            image {
                height: 6rpx;
                width: 100%;
            }
        }
        .goods-info {
            margin: 20rpx 0;
            display: flex;
            background: #ffffff;
            padding: 30rpx 30rpx 20rpx;
            .goods-cover {
                width: 170rpx;
                image {
                    width: 150rpx;
                    height: 150rpx;
                }
            }
            .goods-cont {
                flex: 1;
                .goods-name {
                    font-size: 26rpx;
                    line-height: 35rpx;
                    height: 70rpx;
                }
                .goods-fee {
                    display: flex;
                    margin-top: 20rpx;
                    .fee-num {
                        flex: 1;
                        line-height: 44rpx;
                        color: #fd5123;
                    }
                    .number {
                        flex: 1;
                        text-align: right;
                    }
                }
            }
        }
        .order-info {
            padding: 0 40rpx;
            background: #ffffff;
            margin-bottom: 30rpx;
        }
    }
</style>
