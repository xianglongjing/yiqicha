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
        <view class="search u-border-bottom">
            <u-search
                    :action-style="search_btn"
                    :animation="true"
                    @custom="goSearch"
                    @click="souboss"
                    bg-color="#f8f8f8"
                    input-align="left" v-model="query"
                    placeholder="输入案号、当事人名称进行搜索" shape="square"
            ></u-search>
        </view>
        <view class="down">
            <u-dropdown>
                <u-dropdown-item v-model="value1" title="全部身份" :options="options1"></u-dropdown-item>
                <u-dropdown-item v-model="value2" title="全部案由" :options="options2"></u-dropdown-item>
            </u-dropdown>
        </view>
<!--        <view class="u-padding-left-30">为你找到1条开庭公告</view>-->
        <view class="white" @click="detail(item.id)" v-for="item in group" :key="item.id">
            <view>
                <text class="gray">案号：</text>
                <text>{{item.case ? item.case :'—'}}</text>
            </view>
            <view>
                <text class="gray">案由：</text>
                <text>{{item.cause}}</text>
            </view>
            <view class="flex">
                <view class="left">
                    <text class="gray">案件身份：</text>
                    <view>
                        <view>
                            <view>原告- <text class="red">{{item.plaintiff}}</text></view>
                            <text>被告- <text class="red">{{item.defendant}}</text></text>
                        </view>
                    </view>
                </view>
                <u-icon name="arrow-right" color="#D3D3D3"></u-icon>
            </view>
            <view>
                <text class="gray">审理法院：</text>
                <text>{{item.court}}</text>
            </view>
            <view>
                <text class="gray">开庭时间：</text>
                <text>{{item.courtdate}}</text>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                List: [{
                    name: '开庭公告1'
                }, {
                    name: '历史开庭公告0'
                }],
                options1: [{
                    label: '全部身份',
                    value: 1,
                },
                    {
                        label: '被告（1）',
                        value: 2,
                    }
                ],
                options2: [{
                    label: '全部案由',
                    value: 1,
                },
                    {
                        label: '加冰',
                        value: 2,
                    },
                ],
                current:0,
                query:'',
                value1:'',
                value2:'',
                search_btn:{
                    color:'#E12216'
                },
                group:[]
            }
        },
        onLoad(options){
            this.list(options.id)
        },
        methods:{
            Change(index) {
                this.current = index;
            },
            detail(id){
                uni.navigateTo({
                    url:'/pages/company/kaitingDetail?id='+id
                })
            },
            async list(id) {
                const token=uni.getStorageSync('token')
                const {data: res} = await this.$request({
                    method: 'GET',
                    url: 'applets/opencourt',
                    data: {
                        id:id
                    }
                })
                this.group = res
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
        color:#BDBDBD;
    }
    .red{
        color:#E12216;
    }
.tab{
background: white;
    padding:10rpx 30rpx;
}
    .search{
        background: white;
        height:100rpx;
        width:100%;
        padding:20rpx 30rpx;
    }
    .down{
        background: white;
    }
    .white{
        margin:20rpx 0;
        background:white;
        padding:25rpx 20rpx;
        line-height: 50rpx;
        .flex{
            justify-content: space-between;
            .left{
                flex:1;
                display: flex;
            }
        }
    }
</style>