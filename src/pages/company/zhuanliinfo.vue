<template>
    <view class="page u-border-top">
        <view class="search u-border-bottom">
            <u-search shape="square" placeholder="输入专利名申请号等进行搜索" v-model="keyword"></u-search>
        </view>
        <view class="down u-border-bottom">
            <u-dropdown>
                <u-dropdown-item menu-icon="arrow-down-fill" v-model="value1" title="专利类别" :options="options1"></u-dropdown-item>
                <u-dropdown-item v-model="value2" title="专利状态" :options="options2"></u-dropdown-item>
                <u-dropdown-item v-model="value3" title="专利类别" :options="options1"></u-dropdown-item>
                <u-dropdown-item v-model="value4" title="专利状态" :options="options2"></u-dropdown-item>
            </u-dropdown>
        </view>
        <view class="con u-border-bottom" v-for="item in con" :key="item.id" @click="detail(item.id)">
            <view>
                <view class="title">{{item.name}}</view>
                <text>公开</text>
                <view>
                    <text class="gray">申请日：</text>
                    <text>{{item.doa ? item.doa : '-'}}</text>
                </view>
                <view>
                    <text class="gray">申请号：</text>
                    <text>{{item.apn ? item.apn : '-'}}</text>
                </view>
                <view>
                    <text class="gray">公开(公告)日：</text>
                    <text>{{item.date ? item.date : '-'}}</text>
                </view>
                <view>
                    <text class="gray">公开(公告)号：</text>
                    <text>{{item.pubnumber ? item.pubnumber : '-'}}</text>
                </view>
                <view>
                    <text class="gray">发明人</text>
                    <text>{{item.inventor ? item.inventor : '-'}}</text>
                </view>
            </view>
            <u-icon name="arrow-right" size="40" color="#777777"></u-icon>
        </view>
    </view>
</template>
<script>
    export default {
        data() {
            return {
                value1: '',
                value2: '',
                value3: '',
                value4: '',
                options1: [{
                    label: '默认排序',
                    value: 1,
                },
                    {
                        label: '距离优先',
                        value: 2,
                    },
                    {
                        label: '价格优先',
                        value: 3,
                    }
                ],
                con:{}
            }
        },
        onLoad (options) {
            this.list(options.id)
        },
        methods: {
            async list (id) {
                const { data: res } = await this.$request({
                    method: 'GET',
                    data:{
                        id:id
                    },
                    url: 'applets/patent',
                })
                console.log(res)
                this.con=res
            },
            change(index) {
                this.current = index;
            },
            detail(id){
                uni.navigateTo({
                    url:'/pages/company/zhuanliinfoDe?id='+id
                })
            }
        }
    }
</script>
<style>
    page {
        background: #f8f8f8;
    }
</style>
<style lang="scss" scoped>
    .gray {
        color: #959595;
    }

    .search {
        background: white;
        padding: 20rpx 30rpx;
    }
    .down{
        background-color: white;
        padding:10rpx 20rpx;
    }
    .con{
        padding:30rpx 25rpx;
        line-height: 50rpx;
        background-color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title{
            font-size: 39rpx;
            margin-bottom: 20rpx;
        }
    }
</style>
