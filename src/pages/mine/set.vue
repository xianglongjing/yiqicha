<template>
    <view class="page">
        <view class="flex margin" @click="zhanghao">
            <text>账号管理</text>
            <u-icon name="arrow-right" size="30" color="#D2D2D2"></u-icon>
        </view>
        <view class="white">
            <view class="item border" @click="kaifa">
                <text>推送消息设置</text>
                <u-icon name="arrow-right" size="30" color="#D2D2D2"></u-icon>
            </view>
            <view class="item border" @click="clearCache">
                <text>清除缓存</text>
                <text class="gray"></text>
            </view>
            <view class="item" @click="news">
                <text>版本更新</text>
                <view>
                    <text class="gray">当前版本:1.1.0</text>
                    <u-icon name="arrow-right" size="30" color="#D2D2D2"></u-icon>
                </view>
            </view>
        </view>
        <view class="flex margin" @click="kaifa">
            <text>分享App给好友</text>
            <u-icon name="arrow-right" size="30" color="#D2D2D2"></u-icon>
        </view>
        <view class="white">
            <view class="item border" @click="kaifa">
                <text>关于我们</text>
                <u-icon name="arrow-right" size="30" color="#D2D2D2"></u-icon>
            </view>
            <view class="item border" @click="kaifa">
                <text>用户协议</text>
                <u-icon name="arrow-right" size="30" color="#D2D2D2"></u-icon>
            </view>
            <view class="item" @click="kaifa">
                <text>隐私权政策</text>
                    <u-icon name="arrow-right" size="30" color="#D2D2D2"></u-icon>
            </view>
        </view>
        <view class="margin">
            <u-modal v-model="show" :content="content" show-cancel-button="true" @confirm="logout" :show-title="false"></u-modal>
            <u-button @click="logoutDialogShow" :hair-line="false" :plain="true">
                退出当前账号
            </u-button>
        </view>
<!--        <u-modal-->
<!--                v-model="logoutShow"-->
<!--                content="是否退出登录?"-->
<!--                show-cancel-button-->
<!--                confirm-color="#fd5123"-->
<!--                @confirm="logout"-->
<!--        ></u-modal>-->
    </view>
</template>

<script>
    export default {
        data(){
            return {
                show: false,
                content: '是否确认退出？',
                logoutShow:false
            }
        },
        onLoad () {
            this.getStorage()
        },
        methods:{
            // 获取本地存储
            getStorage () {
                this.storage.token = uni.getStorageSync('token')
                this.storage.phone = uni.getStorageSync('phone')
            },
            async news () {
                uni.showToast({
                    title: '已是最新版本',
                    icon:'none',
                    duration: 2000
                });
            },
            async kaifa () {
                uni.showToast({
                    title: '开发中',
                    icon:'none',
                    duration: 2000
                });
            },
            // 退出登录
            logoutDialogShow () {
                if (uni.getStorageSync('token') === '') {
                    return uni.showToast({
                        title: '未登录，请登录',
                        icon: 'none',
                        duration: 2000
                    })
                }
                this.show = true
            },
            logout () {
                // uni.removeStorageSync('token');
                uni.removeStorageSync('phone');
                uni.clearStorageSync()
                uni.redirectTo(
                    { url: '/pages/mine/login' }
                )
                uni.showToast({
                    title: val || '退出成功',
                    icon: 'none',
                    duration: 2000
                })
            },
            clearCache() {
                this.$u.toast('清除成功');
            },
            zhanghao(){
                uni.navigateTo({
                    url:'/pages/common/account'
                })
            }
        }
    }
</script>
<style>
    page{
        background: #f8f8f8;
    }
</style>
<style lang="scss" scoped>
    .margin{
        margin:25rpx 0;
    }
    .gray{
        color:#D2D2D2;
    }
    .border{
        border-bottom:1rpx solid #D2D2D2;
    }
.flex{
    background: white;
    justify-content: space-between;
    padding:25rpx;
    letter-spacing: 5rpx;
}
    .white{
        background: white;
        padding:0 25rpx;
        .item{
            display: flex;
            justify-content: space-between;
            padding:25rpx 0;
        }
    }
</style>