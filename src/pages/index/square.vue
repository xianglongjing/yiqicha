<template>
    <view class="page">
        <view class="new">
            <view class="u-border-bottom" style="display: flex;flex-direction: row;justify-content: center">
                <u-tabs
                        :list="newList"
                        :current="newcurrent"
                        @change="newChange" gutter="55"
                        bar-width="50" font-size="30"
                        active-color="#E2291D" bg-color="none" inactive-color="#666666"
                ></u-tabs>
            </view>
            <view v-show="newcurrent===0" class="new-con u-border-bottom" @click="newdetail(item.id)" v-for="item in newsList" :key="item.id">
                <view class="new-l">
                    <view class="new-title">
                        {{item.title}}
                    </view>
                    <view class="desc u-line-1">
                        <text>{{item.source}}</text>
                        <text>1.5万阅读</text>
                        <text>{{item.release_time}}</text>
                    </view>
                </view>
                <u-image :src="'http://yiqiwang360.com/'+item.image" width="200" height="120"></u-image>
            </view>
            <view v-show="newcurrent===1" class="new-con u-border-bottom" @click="newdetail(item.id)" v-for="item in newsList2" :key="item.id">
                <view class="new-l">
                    <view class="new-title">
                        {{item.title}}
                    </view>
                    <view class="desc u-line-1">
                        <text>{{item.source}}</text>
                        <text>1.5万阅读</text>
                        <text>{{item.release_time}}</text>
                    </view>
                </view>
                <u-image :src="'http://yiqiwang360.com/'+item.image" width="200" height="120"></u-image>
            </view>
            <view v-show="newcurrent===2" class="new-con u-border-bottom" @click="newdetail(item.id)" v-for="item in newsList3" :key="item.id">
                <view class="new-l">
                    <view class="new-title">
                        {{item.title}}
                    </view>
                    <view class="desc u-line-1">
                        <text>{{item.source}}</text>
                        <text>1.5万阅读</text>
                        <text>{{item.release_time}}</text>
                    </view>
                </view>
                <u-image :src="'http://yiqiwang360.com/'+item.image" width="200" height="120"></u-image>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                newsList:[],
                newsList2:[],
                newsList3:[],
                newList: [{
                    name: '企业头条'
                }, {
                    name: '商业快讯'
                }, {
                    name: '监控日报'
                }],
                newcurrent:0,

            }
        },
        onLoad () {
            this.getNewList();
            this.getNewList1();
            this.getNewList2();
        },
        methods:{
            newChange(index) {
                this.newcurrent = index;
                if(index===0){
                    this.type=1
                }
                if(index===1){
                    this.type=2
                }
                if(index===2){
                    this.type=1
                }
            },
            go (path) {
                let name = path
                let nameArr = name.split('=')
                // if (nameArr[1]==='全部分类'){
                //   uni.switchTab({
                //     url: '/pages/serve/serve'
                //   })
                //   return false
                // }
                uni.navigateTo(
                    { url: '/pages/' + path }
                )
            },
            async getNewList () {
                await this.$request({
                    method: 'GET',
                    url: 'applets/onews?type=1'
                }).then(res=>{
                    // console.log(res)
                    this.newsList = res.data
                })
                /*console.log(11)
                console.log(res)
                this.shopList = res*/
                // this.menuNum = 12 / res.data.length
            },
            async getNewList1 () {
                await this.$request({
                    method: 'GET',
                    url: 'applets/onews?type=2'
                }).then(res=>{
                    console.log(res)
                    this.newsList2 = res.data
                })
                /*console.log(11)
                console.log(res)
                this.shopList = res*/
                // this.menuNum = 12 / res.data.length
            },
            async getNewList2 () {
                await this.$request({
                    method: 'GET',
                    url: 'applets/onews?type=3'
                }).then(res=>{
                    console.log(res)
                    this.newsList3 = res.data
                })
                /*console.log(11)
                console.log(res)
                this.shopList = res*/
                // this.menuNum = 12 / res.data.length
            },
            newdetail(id){
                uni.navigateTo({
                    url:'/pages/index/newsDetail?id=' + id
                })
            },

        }
    }
</script>

<style lang="scss" scoped>
    .new{
        margin:0 auto;
        .new-con{
            padding:20rpx 30rpx;
            display: flex;
            flex-direction: row;
            .new-l{
                flex:1;
                margin-right:20rpx;
                .new-title{
                    font-weight: 600;
                    line-height: 40rpx;
                }
                .desc{
                    font-size:23rpx;
                    margin-top: 30rpx;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    color:#A9A9A9;
                    text{
                        flex:1;
                    }
                }
            }

        }
    }
</style>