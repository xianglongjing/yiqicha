<template>
    <view class="page u-border-top">
        <view class="down u-border-bottom">
            <u-dropdown>
                <u-dropdown-item v-model="value1" title="变更项目" :options="options1"></u-dropdown-item>
            </u-dropdown>
        </view>
        <view class="one" v-for="item in man" :key="item.id">
            <view class="top">
                <view>
<!--                    <text class="num">01</text>-->
                    <text>{{item.gid}}</text>
                </view>
                <view class="gray">{{item.date}}</view>
            </view>
            <view class="con">
                <view class="item u-border-right u-margin-right-20">
                    <view class="title gray">变更后</view>
                    <view>{{item.rear}}</view>
                </view>
                <view class="item">
                    <view class="title gray">变更前</view>
                    <view>{{item.before}}</view>
                </view>
            </view>
        </view>
    </view>
</template>
<script>
    export default {
        data(){
            return {
                man:{},
                value1:'',
                options1: [{
                    label: '全部项目',
                    value: 1,
                },
                    {
                        label: '注册资本变更',
                        value: 2,
                    },
                    {
                        label: '章程备案',
                        value: 3,
                    }
                ],
                content: `山不在高,有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。
				苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。
				无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？`,
                // itemList: [{
                //     body: "只要我们正确择取一个合适的参照物乃至稍降一格去看待他人，值得赏识的东西便会扑面而来",
                //     open: true,
                //     disabled: true
                // },{
                //     head: "生活中不是缺少美，而是缺少发现美的眼睛",
                //     body: "学会欣赏，实际是一种积极生活的态度，是生活的调味品，会在欣赏中发现生活的美",
                //     open: false,
                // },],
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
                    url: 'applets/change',
                    data: {
                        id:id
                    }
                })
                this.man = res
                console.log(res)
            },
        }
    }
</script>

<style lang="scss" scoped>
    .gray{
        color:#999999;
    }
    .red{
        color:#CA898A;
    }
.top{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
    .one{
        border-bottom: 1rpx solid #E6E6E6;
        margin:25rpx;
        .num{
            background:#F8F8F8 ;
            padding:10rpx;
            margin-right: 10rpx;
        }
        .con{
            display: flex;
            padding:25rpx;
            margin:30rpx 0;
            background: #f8f8f8;
            .item{
                flex:1;
                .title{
                    font-size: 29rpx;
                }
                .name{
                    color:#2E8BB6;
                    letter-spacing: 6rpx;
                }
            }
        }
    }
</style>