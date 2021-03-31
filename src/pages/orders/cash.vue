<template>
    <view>
        <view class="order">
        <view>
            订单金额： <text class="price">￥80.00</text>
        </view>
            <view>
                订单编号：
                <text>20210204162848049306</text>
            </view>
            <view class="u-line-1">
                订单名称：
                <text>
                    我需要服务铭远企业VI设计全套定制设计公司
                </text>
            </view>
        </view>
<!--        <view class="pay u-margin-top-20">-->
<!--            <u-radio-group v-model="yue" active-color="#FD6905">-->
<!--                <u-radio :label-disabled="false" class="u-border-bottom">账户余额:￥0.00</u-radio>-->
<!--            </u-radio-group>-->
<!--            <u-radio-group v-model="zhi" active-color="#FD6905">-->
<!--                <u-radio class="u-border-bottom">支付宝:￥0.00</u-radio>-->
<!--            </u-radio-group>-->
<!--        </view>-->
        <view class="pay-type">
            <radio-group @change="chosePayType" style="display: block;">
                <label class="type-box u-border-bottom">
                    <view class="pay-item">
                        <view class="pay-icon" style="background: #fa729a">
                            <u-icon name="rmb-circle-fill" color="#ffffff" size="42"></u-icon>
                        </view>
                        <view class="pay-name">
                            余额支付
                            <text v-show="balancePay">可用:{{wallet.balance}} 元</text>
                            <text v-show="!balancePay">余额不足或暂不可用</text>
                        </view>
                    </view>
                    <view class="pay-radio">
                        <radio value="balance" :disabled="!balancePay" :checked="false" color="#fa729a" />
                    </view>
                </label>
                <label class="type-box u-border-bottom">
                    <view class="pay-item">
                        <view class="pay-icon" style="background: #1677ff">
                            <u-icon name="zhifubao" color="#ffffff" size="42"></u-icon>
                        </view>
                        <view class="pay-name">支付宝支付 <text>9.5折</text></view>
                    </view>
                    <view class="pay-radio">
                        <radio value="aliPay" :checked="false" color="#fD5123" />
                    </view>
                </label>
                <label class="type-box">
                    <view class="pay-item">
                        <view class="pay-icon">
                            <u-icon name="weixin-fill" color="#ffffff" size="42"></u-icon>
                        </view>
                        <view class="pay-name">微信支付</view>
                    </view>
                    <view class="pay-radio">
                        <radio value="wePay" :checked="false" color="#fD5123" />
                    </view>
                </label>
            </radio-group>
        </view>
        <u-button
                shape="square"
                size="default"
                :ripple="true"
                :custom-style="customStyle"
                ripple-bg-color="#ff8c6d" @click="payment"
        >确认支付</u-button>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                wallet: {
                    balance: 0.00
                },
                balancePay: false,
                balance:'',
                order: {
                    out_trade_no: '-',
                    total_fee: 0.00,
                    createTime: '-',
                    pass: '-',
                },
                customStyle: {
                    color: '#ffffff',
                    backgroundColor: '#FD5123',
                    margin: '50rpx 80rpx',
                    border: 'none'
                },
            }
        },
        methods: {
            // 获取本地存储
            getStorage() {
                this.storage.token = uni.getStorageSync('token')
                this.storage.uid = uni.getStorageSync('uid')
                this.storage.info = uni.getStorageSync('info')
            },
            async orderState(id) {
                if (id === '') return this.$u.toast('未找到相关信息')
                const {data: res} = await this.$request({
                    method: 'POST',
                    url: 'api/orderView',
                    data: {'out_trade_no': id},
                    header: {
                        'uid': this.storage.uid,
                        'token': this.storage.token,
                    }
                })

                console.log(res.data.order)
                if (res.data.order.state==='ok'){
                    uni.setNavigationBarTitle({
                        title:'支付成功'
                    })
                    this.showRoad = true
                }else if(res.data.trans.state===9){
                    //提现中
                    this.showPay = false
                }else{
                    this.showPay = true
                }
                this.order = res.data.order
                this.trans = res.data.trans
                this.wallet = res.data.wallet
                //判断余额支付可用
                if (res.data.wallet.balance){
                    if (res.data.wallet.balance >= res.data.order.total_fee){
                        this.balancePay = true
                    }
                }else{
                    this.wallet.balance = 0.00
                }

            },
            //前往支付
            payment(){
                if (this.payType===''){
                    return this.$refs.uTips.show({
                        title: '请选择支付方式',
                        type: 'success',
                        duration: '2500'
                    })
                }
                this.payState = true
                window.open('https://api.rosepo.com/api/payJump?type='+this.payType+'&out_trade_no='+this.order.out_trade_no)
            },
            payJump(type){
                this.payState = true
                window.open('https://api.rosepo.com/api/payJump?type='+type+'&out_trade_no='+this.order.out_trade_no)
            },
            payEnd(){
                if (this.order.enjoyId<1||this.order.enjoyId===undefined){
                    uni.navigateBack({
                        delta: 1
                    });
                    return;
                }
                this.goto('roadshow/discuss?id='+this.order.enjoyId)
            },
            goto (path,login = false) {
                if (login === true){
                    if (this.storage.token === '') {
                        return uni.showToast({
                            title: '请先登录',
                            icon: 'none',
                            duration: 1500
                        })
                    }
                }
                uni.navigateTo(
                    { url: '/pages/' + path }
                )
            },
            //支付成功按钮
            successful(){
                uni.redirectTo(
                    { url: '/pages/order/order?id=' +this.order.out_trade_no }
                )
            },
            chosePayType: function(evt) {
                this.payType = evt.detail.value
                console.log(this.payType)

                // for (let i = 0; i < this.items.length; i++) {
                //   if (this.items[i].value === evt.target.value) {
                //     this.current = i;
                //     break;
                //   }
                // }
            }
        }
    }
</script>

<style scoped>
page{
    background: #EEEFF1;
}
</style>
<style lang="scss" scoped>
    .order{
        background: white;
        padding:30rpx;
        view{
            margin:20rpx 0;
        }
        .price{
            color:#FD6905;
        }
    }
    .pay{
        background: white;
    }
    .pay-type{
        margin-top:20rpx;
        background: white;
        width: 100%;
        padding: 10rpx 34rpx;
        .type-box{
            display: flex;
            width: 100%;
            padding: 30rpx 0;
        }
        .pay-item{
            flex: 1;

            .pay-icon{
                display: inline-block;
                background-color: #39b54a;
                border-radius: 8rpx;
                margin-right: 16rpx;
                padding: 6rpx;
            }
            .pay-name{
                display: inline-block;
                height: 54rpx;
                vertical-align: middle;
                text{
                    margin-left: 30rpx;
                    color: #777777;
                    font-size: 24rpx;
                }
            }
        }
        .pay-radio{
            width: 100rpx;
            text-align: right;
        }
    }
</style>