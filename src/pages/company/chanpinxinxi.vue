<template>
    <view class="page u-border-top">
        <view class="con u-border-bottom" v-for="item in con" :key="item.id">
            <u-image mode="aspectFit"
                    width="40" height="40"
                    src="https://api.yiqiwang360.com/images/app/app_logo2.png"></u-image>
            <view class="con-r">
                <view class="title">{{item.name}}</view>
                <view>
                    <text class="gray">领域：</text>
                    <text>{{item.field ? item.field : '-'}}</text>
                </view>
                <view>
                    <text class="gray">简介：</text>
                    <view>
                        <u-read-more ref="uReadMore" close-text="展开" :toggle="true" show-height="200">
                        <u-parse :html="item.Introduction" @load="parseLoaded"></u-parse>
                    </u-read-more>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                con:{},
                content: `山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。
				苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。
				无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？`,
            }
        },
        onLoad (options) {
            this.list(options.id)
        },
        methods: {
            parseLoaded() {
                this.$refs.uReadMore.init();
            },
            async list (id) {
                const { data: res } = await this.$request({
                    method: 'GET',
                    data:{
                        id:id
                    },
                    url: 'applets/product',
                })
                console.log(res)
                this.con=res

            },
            detail(id){
                uni.navigateTo({
                    url:'/pages/company/shuangsuijiD?id='+id
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .gray{
        color:#959595;
    }
.con{
    padding:25rpx;
    display: flex;
    .con-r{
        flex:1;
        margin-left:30rpx;
        line-height: 55rpx;
        /deep/ .u-content__showmore-wrap{
            position: static;
        }
    }
}
</style>