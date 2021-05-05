<template>
    <view class="page u-border-top">
        <view class="first">
            <view>
                <text class="gray">许可文件编号</text>
                <view>{{law.number ? law.number : '-'}}</view>
            </view>
            <view v-if="law.name">
                <text class="gray">许可文件名称</text>
                <view>{{law.name ? law.name : ''}}</view>
            </view>
            <view class="flex u-margin-top-20 u-padding-bottom-30">
                <view class="item">
                    <text class="gray">有效期自</text>
                    <view>{{law.from ? law.from : ''}}</view>
                </view>
                <view class="item u-border-left u-padding-left-20">
                    <text class="gray">有效期至</text>
                    <view>{{law.until ? law.until : ''}}</view>
                </view>
            </view>
            <view class="items">
                <text class="gray">许可机关</text>
                <view class="red">{{law.authority ? law.authority : ''}}</view>
            </view>
            <view class="items">
                <text class="gray">许可内容</text>
                <view>{{law.content ? law.content : ''}}</view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                law:[]
            }
        },
        onLoad (options) {
            this.list(options.id)
        },
        methods:{
            async list(id) {
                const {data: res} = await this.$request({
                    method: 'GET',
                    url: 'applets/licensesave',
                    data: {
                        id:id
                    }
                })
                this.law = res
                console.log(res)
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
    .gray{
        color:#959595;
    }
    .first{
        line-height: 50rpx;
        background: white;
        padding:25rpx;
        .flex{
            justify-content: space-between;
            align-items: center;
            .item{
                width:50%;
            }

        }
        .items{
            padding:20rpx 0;
        }
    }
</style>