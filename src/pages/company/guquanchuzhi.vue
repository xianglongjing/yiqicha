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
        <view class="down">
            <u-dropdown>
                <u-dropdown-item v-model="value" title="全部身份" :options="options1"></u-dropdown-item>
                <u-dropdown-item v-model="value1" title="全部状态" :options="options2"></u-dropdown-item>
            </u-dropdown>
        </view>
        <view class="flex" v-for="item in man" :key="item.id" @click="detail(item.id)">
            <view>
                <view>
                    <text class="gray">出质人:</text>
                    <text class="red">{{item.quality ? item.quality : '-'}}</text>
                </view>
                <view>
                    <text class="gray">出质股权标的企业:</text>
                    <text class="red">{{item.pledged ? item.pledged : '-'}}</text>
                </view>
                <view>
                    <text class="gray">质权人：</text>
                    <text class="red">{{item.pledge ? item.pledge : '-'}}</text>
                </view>
                <view>
                    <text class="gray">出质股权数额：</text>
                    <text>{{item.amount ? item.amount : '-'}}</text>
                </view>
                <view>
                    <text class="gray">登记编号：</text>
                    <text>{{item.number ? item.number : '-'}}</text>
                </view>
                <view>
                    <text class="gray">登记日期：</text>
                    <text>{{item.date ? item.date : '-'}}</text>
                </view>
                <view>
                    <text class="gray">状态：</text>
                    <text>{{item.status ? item.status : '-'}}</text>
                </view>
            </view>
           <u-icon name="arrow-right" size="35" color="#777777"></u-icon>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                List: [{
                    name: '股权出质'
                }, {
                    name: '历史股权出质'
                }],
                current:0,
                value:'',
                value1:'',
                man:{}
            }
        },
        onLoad(options){
            this.list(options.id)
        },
        methods:{
            Change(index) {
                this.current = index;
            },
            async list(id) {
                const token=uni.getStorageSync('token')
                const {data: res} = await this.$request({
                    method: 'GET',
                    url: 'applets/pledge',
                    data: {
                        id:id
                    }
                })
                this.man = res
                console.log(res)
            },
            detail(id){
                uni.navigateTo({
                    url:'/pages/company/guquanchuzhiDe?id='+id
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
    .gray{
        color:#959595;
    }
    .red{
        color:#fd5123;
    }
.tab{
    background: white;
}
    .down{
        background: white;
    }
    .flex{
        line-height: 50rpx;
        background: white;
        padding:30rpx 25rpx;
        justify-content: space-between;
    }
</style>