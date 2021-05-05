<template>
    <view class="page u-border-top">
        <view class="tab u-border-bottom">
            <u-tabs
                    :list="List"
                    :current="current"
                    @change="Change" gutter="90"
                    bar-width="50" font-size="30"
                    active-color="#E12216" bg-color="none" inactive-color="#000000"
            ></u-tabs>
        </view>
        <view class="flex u-border-bottom" v-for="item in con" :key="item.id" @click="detail(item.id)">
            <view>
                <view v-if="item.name">
                    <text>许可文件名称：</text>
                    <text>{{item.name ? item.name : ''}}</text>
                </view>
                <view>
                    <text>许可文件编号：</text>
                    <text>{{item.number ? item.number : '-'}}</text>
                </view>
                <view>
                    <text>有效期自：</text>
                    <text>{{item.from ? item.from : '-'}}</text>
                </view>
                <view>
                    <text>有效期至：</text>
                    <text>{{item.until ? item.until : '-'}}</text>
                </view>
                <view>
                    <text>许可机关：</text>
                    <text>{{item.authority ? item.authority : '-'}}</text>
                </view>
                <view>
                    <text>数据来源：</text>
                    <text>{{item.sources ? item.sources : '-'}}</text>
                </view>
                <view>
                    <text>许可内容：</text>
                    <text>{{item.content ? item.content : '-'}}</text>
                </view>
            </view>
            <u-icon name="arrow-right" color="#959595" size="40"></u-icon>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                List: [{
                    name: '行政许可'
                }, {
                    name: '历史行政许可'
                }],
                current:0,
                con:{}
            }
        },
        onLoad (options) {
            this.list(options.id)
        },
        methods:{
            async list (id) {
                const { data: res } = await this.$request({
                    method: 'GET',
                    data:{
                        id:id
                    },
                    url: 'applets/license',
                })
                console.log(res)
                this.con=res

            },
            Change(index) {
                this.current = index;
            },
            detail(id){
                uni.navigateTo({
                    url:'/pages/company/xingzhengxukeDe?id='+id
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
    .tab{
        background: white;
        text-align: center;
    }
.flex{
    background:white;
    padding:25rpx;
    line-height: 50rpx;
    justify-content: space-between;
}
</style>