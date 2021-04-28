<template>
    <view class="page">
        <u-gap height="1" bg-color="#f7f7f7"></u-gap>
        <u-cell-group :border="false">
<!--            <u-cell-item title="资料设置" :arrow="true" @click="goto('my/settingUser',true)"></u-cell-item>-->
            <u-cell-item title="账号设置" :arrow="true" @click="goto('common/wordset',true)"></u-cell-item>
        </u-cell-group>

        <u-gap height="20" bg-color="#f7f7f7"></u-gap>
        <u-cell-group :border="false">
<!--            <u-cell-item  title="高清模式" :arrow="false" hover-class="none">-->
<!--                <u-switch slot="right-icon" v-model="checked" active-color="#fa729a" size="40"></u-switch>-->
<!--            </u-cell-item>-->
            <u-cell-item title="清除缓存" :arrow="true" @click="clearCache"></u-cell-item>
            <u-cell-item title="检查更新" :border-bottom="false" @click="news"></u-cell-item>
        </u-cell-group>
        <u-gap height="20" bg-color="#f7f7f7"></u-gap>
        <u-cell-group :border="false">
            <u-cell-item title="关于我们" @click="goto('common/about')"></u-cell-item>
            <u-cell-item title="用户协议" @click="goto('common/agree')" :arrow="true"></u-cell-item>
            <u-cell-item title="隐私权政策" @click="goto('common/yinsi')" :arrow="true" :border-bottom="false"></u-cell-item>
        </u-cell-group>

        <u-gap height="20" bg-color="#f7f7f7"></u-gap>
        <u-cell-item title="退出登录" :arrow="false" :border-bottom="false" @click="logout"></u-cell-item>

    </view>
</template>

<script>
    export default {
        data() {
            return {
                checked: true,
                customStyle: {
                    border: 'none',
                    marginTop: '50rpx',
                    background: 'linear-gradient(30deg, rgb(255, 158, 198), rgb(250, 114, 154))',
                    boxShadow: '6rpx 8rpx 26rpx rgba(250, 115, 155, 0.3)',
                    color: '#ffffff',
                },
                CustomStyleO: {
                    border: 'none',
                    marginTop: '50rpx',
                    boxShadow: '6rpx 8rpx 26rpx rgba(250, 115, 155, 0.15)',
                    color: '#fa729a',
                },
                storage: []
            }
        },
        onLoad () {
            this.getStorage()
        },
        onShow () {

        },
        methods: {
            // 获取本地存储
            getStorage () {
                this.storage.token = uni.getStorageSync('token')
                this.storage.uid = uni.getStorageSync('uid')
                this.storage.info = uni.getStorageSync('info')
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
            logout () {
                // const { data: res } = this.$request({
                //   url: 'login/deToken',
                //   data: {
                //     token: this.storage.token,
                //     uid: this.storage.uid
                //   }
                // })
                uni.removeStorageSync('token');
                uni.removeStorageSync('uid');

                uni.showToast({
                    title: '退出成功',
                    icon: 'none',
                    duration: 1500
                })
                uni.switchTab(
                    { url: '/pages/index/index' }
                )
            },
            clearCache() {
                this.$u.toast('清除成功');
            },
            news(){
                this.$u.toast('已是最新版本');
            }
        }
    }
</script>
<style lang="scss">
    page{
        background: #ffffff;
    }
</style>
<style lang="scss" scoped>

</style>
