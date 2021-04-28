<template>
    <view class="page">
        <view class="title">
            {{law.title}}
        </view>
        <view class="source">
            <view>
                <text>来源：</text>
                <text class="red">中国裁判文书网</text>
                <text class="u-margin-left-20">{{law.referee}}</text>
            </view>
            <view class="flex">
                <u-image mode="aspectFit" width="28" height="28" src="http://images.yiqiwang360.com/yiqicha/wenzidaxiao.png"></u-image>
                <text>文字大小</text>
            </view>
        </view>
        <view class="guanshop">
            <view class="gray">关联企业</view>
            <view class="red">
                {{shop.cpyname}}
            </view>
            <view class="gray">关联企业</view>
            <view class="red">
                {{law.lawfirm ? law.lawfirm:'—'}}
            </view>
            <view class="orange">关联司法解析 <text class="vip">VIP</text></view>
            <view>
               rrrrrrrrrrrrrrr
            </view>
        </view>
        <view class="u-margin-top-30">
            <u-divider color="#C6C6C6">文书正文</u-divider>
        </view>
        <view class="item">
            <view class="heading">审理法院</view>
            <view>{{law.court}}</view>
        </view>
        <view class="item">
            <view class="heading">文书类型</view>
            <view>{{law.type ? law.type: '—'}}</view>
        </view>
        <view class="item">
            <view class="heading">案号</view>
            <view>{{law.case}}</view>
        </view>
        <view class="item">
            <view class="heading">当事人信息</view>
            <view>{{law.party}}</view>
        </view>
        <view class="item">
            <view class="heading">审理经过</view>
            <view>{{law.trial}}</view>
        </view>
        <view class="item">
            <view class="heading">本院认为</view>
            <view>{{law.believes}}</view>
        </view>
        <view class="item">
            <view class="heading">本院裁判结果</view>
            <view>{{law.result}}</view>
        </view>
        <view class="item">
            <view class="heading">审判人员</view>
            <view>{{law.judge}}</view>
        </view>
        <view class="item">
            <view class="heading">裁判日期</view>
            <view>{{law.referee}}</view>
        </view>
        <view class="item">
            <view class="heading">审判辅助人员</view>
            <view>{{law.support}}</view>
        </view>
        <view class="item">
            <view class="heading">提交的相关法律法规内容</view>
            <view>{{law.related}}</view>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                law:[],
                shop:[]
            }
        },
        onLoad(options){
            this.list(options.id)
        },
        methods:{
            async list(id) {
                const token=uni.getStorageSync('token')
                const {data: res} = await this.$request({
                    method: 'GET',
                    url: 'applets/proceedingssave',
                    data: {
                        id:id
                    }
                })
                this.law = res
                this.shop = res.corporate
                console.log(res)
            },
        }
    }
</script>
<style lang="scss" scoped>
    .gray{
        color:#9B9B9B;
    }
.page{
    padding:30rpx 25rpx;
}
.red{
    color:#E12216;
}
    .title{
        font-weight: 640;
    }
    .source{
        font-size: 25rpx;
        display: flex;
        justify-content: space-between;
        margin:20rpx 0;
        .flex{
            font-size: 25rpx;
            align-items: center;
        }
    }
    .guanshop{
        line-height: 45rpx;
        padding:30rpx 25rpx;
        background: #F9F9F8;
        .orange{
            color:#FF7E14;
            font-weight: 600;
        }
        .vip{
            font-style: oblique;
        }
    }
    .item{
        margin:30rpx 0;
        line-height: 50rpx;
        .heading{
            font-weight: 600;
        }
    }
</style>