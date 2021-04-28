<template>
    <view class="page">
        <view class="banner">
            <u-image mode="aspectFill" border-radius="20" width="180" height="180"
                     src="https://seopic.699pic.com/photo/50134/3865.jpg_wh1200.jpg"></u-image>
            <text class="u-margin-top-30">一企查V12.28.0</text>
        </view>
        <view class="flex u-border-bottom" @click="callPhone">
            <view>
                <u-icon name="phone-fill" color="#D3D3D3" size="30"></u-icon>
                <text class="gray u-margin-left-10">客服电话：</text>
                <text class="tel red">{{newsList.cphone}}</text>
            </view>
            <view>
                <text class="gray">拨打</text>
                <u-icon name="arrow-right" color="#D3D3D3" size="30"></u-icon>
            </view>
        </view>
        <view class="flex u-border-bottom">
            <view>
                <u-icon name="email-fill" color="#D3D3D3" size="30"></u-icon>
                <text class="gray u-margin-left-10">企业邮箱：</text>
                <text>{{newsList.cemail}}</text>
            </view>
            <view>
                <u-icon name="arrow-right" color="#D3D3D3" size="30"></u-icon>
            </view>
        </view>
        <view class="flex u-border-bottom">
            <view>
                <u-icon name="weixin-fill" color="#D3D3D3" size="30"></u-icon>
                <text class="gray u-margin-left-10">官方微信：</text>
                <text>{{newsList.name}}</text>
            </view>
        </view>
        <view class="flex u-border-bottom">
            <view class="u-line-1">
                <u-icon name="map-fill" color="#D3D3D3" size="30"></u-icon>
                <text class="gray u-margin-left-10">联系地址：</text>
                <text>{{newsList.add}}</text>
            </view>
        </view>
        <view class="flex u-border-bottom">
            <view>
                <u-icon name="phone-fill" color="#D3D3D3" size="30"></u-icon>
                <text class="gray u-margin-left-10">违法和不良信息举报电话：</text>
                <text class="red" @click="callPhone">{{newsList.rphone}}</text>
            </view>
        </view>
        <view class="flex u-border-bottom">
            <view>
                <u-icon name="email-fill" color="#D3D3D3" size="30"></u-icon>
                <text class="gray u-margin-left-10">举报邮箱：</text>
                <text>{{newsList.remail}}</text>
            </view>
        </view>
        <u-button :customStyle="man" :hair-line="false">在线客服</u-button>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                man:{
                    background:'white',
                    color:'#E75D54',
                    marginTop:'30rpx'
                },
                newsList:[]
            }
        },
        onLoad(){
            this.getNewList();
        },
        methods:{
            async getNewList () {
                await this.$request({
                    method: 'GET',
                    url: 'applets/contact'
                }).then(res=>{
                    console.log(res.data)
                    this.newsList = res.data
                })
            },
            // 拨打客服电话
            callPhone () {
                uni.makePhoneCall({
                    phoneNumber: '4000361717'
                })
            },

        },


    }
</script>
<style>
    page{
        background: #f8f8f8;
    }
</style>
<style lang="scss" scoped>
    .red{
        color:#E75D54;
    }
    .gray{
        color:#D3D3D3;
    }
.banner{
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin:50rpx 0;
    color:#E75D54;
}
    .flex{
        padding:26rpx;
        background: white;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        .tel{
            font-size: 40rpx;
        }
    }
</style>