<template>
    <view class="page">
        <view class="new-body">
            <view class="title">{{shopList.title}}</view>
            <view class="flex">
                <text>{{shopList.source}}</text>
                <text>{{shopList.release_time}}</text>
            </view>
<!--            <view class="new-con">-->
<!--                {{shopList.content}}-->
<!--            </view>-->
            <u-parse :html="shopList.content"
                     :lazy-load="true"
                     :show-with-animation="true"
                     :tag-style="contentStyle"
                     domain="https://api.rosepo.com/"></u-parse>
            <u-image :src="'http://yiqiwang360.com/'+shopList.image" width="100%" height="400"></u-image>
<!--            <view class="new-con">-->
<!--                {{shopList.body}}-->
<!--            </view>-->
        </view>
        <view class="comment">
<!--            <view class="title">热门评论(444)</view>-->
            <view class="comm-con u-border-bottom" :key="item.id" v-for="item in comment" v-if="storage.token !== ''">
                <u-image :src="item.login.avatarUrl ||'https://api.yiqiwang360.com/images/app/app_logo2.png'" width="80" height="80"
                         shape="circle"></u-image>
                <view class="con-desc">
                    <view class="name">
                        {{item.login.nickName}}
                    </view>
                    <view>{{item.content}}</view>
                    <text class="date">{{item.comment_time}}</text>
                    <view class="num" @click="heart" :data-id="item.id" :data-like="item.like">{{item.people}}
                        <!--                        <u-icon name="heart" class="u-margin-left-20" @click="heart"></u-icon>-->

                        <text :class="item.like !='' ?'cuIcon-likefill text-red':'cuIcon-like'"></text>
                    </view>
                </view>
            </view>
        </view>
        <view class="write">
            <view class="input">
                <u-input v-model="value" placeholder="写评论"/>
            </view>
            <u-image mode="aspectFill" src="https://yiqiwang360.com/images/yiqiguanjia/icons/hua.png" width="60" height="60" class="u-margin-left-40" @click="write(shopList.id)"></u-image>
            <u-image mode="aspectFill" src="https://yiqiwang360.com/images/yiqiguanjia/icons/zhuan.png" width="60" height="60" class="u-margin-left-50"></u-image>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                storage:[],
                value:'',
                shopList:[],
                sta:'',
                comment:[],
                status:[],
                input:{
                    width:'100rpx'
                },
                contentStyle: {
                    // 字符串的形式
                    h2: 'font-size:25rpx;line-height:48rpx;margin:20rpx 0;color:#000000;text-align:center;',
                    p: 'font-size:24rpx;line-height:40rpx;margin:20rpx 0;color:#333333',
                    img: 'border-radius:8rpx;',
                    ".get-item": "display:block;text-align: center;margin-bottom: 10rpx;"
                },
            }
        },
        onLoad (options) {
            this.getNavList(options.id)
        },
        onShow(){
            this.getStorage()
        },
        // 获取本地存储
        methods:{
            getStorage () {
                this.storage.token = uni.getStorageSync('token')
                this.storage.id = uni.getStorageSync('id')
                this.storage.nickName = uni.getStorageSync('phoonoe')
            },
            async getNavList (id) {
                const lid=uni.getStorageSync('id')
                const res  =await this.$request({
                    method: 'POST',
                    url: 'applets/cnews/'+id,
                    data:{
                        id:id,
                        lid:uni.getStorageSync('id'),
                    }
                }).then(res=>{
                    console.log(res.data)
                    this.shopList = res.data
                    this.comment = res.data.comment
                    // this.status = res.data.data.news.user_like;
                })
                // this.menuNum = 12 / res.data.length
            },
            async heart (cid) {
                const lid=uni.getStorageSync('id')
                const token=uni.getStorageSync('token')
                if(this.comment.like==''){
                    cid.currentTarget.dataset.like=true
                }else{
                    cid.currentTarget.dataset.like=false
                }
                const { res } =await this.$request({
                    method: 'POST',
                    url: 'applets/like',
                    data:{
                        type:cid.currentTarget.dataset.like,
                        cid:cid.currentTarget.dataset.id,
                        lid:uni.getStorageSync('id'),
                        vid:this.shopList.id,
                        token:uni.getStorageSync('token')
                    }
                }).then(res=>{
                    if( cid.currentTarget.dataset.like==''){
                        this.comment.like!=false
                    }else{
                        this.comment.like=false
                    }
                    this.getNavList(id);
                })
                // if(reply_id.currentTarget.dataset.status==0){
                //     reply_id.currentTarget.dataset.status==1
                // }else{
                //     reply_id.currentTarget.dataset.status==0
                // }
                // console.log( lid)
                this.getNavList(id);
            },
            async write (id) {
                const token=uni.getStorageSync('token')
                const lid=uni.getStorageSync('id')
                const { res } =await this.$request({
                    method: 'POST',
                    url: 'applets/discuss',
                    data:{
                        lid:uni.getStorageSync('id'),
                        token:uni.getStorageSync('token'),
                        vid:this.shopList.id,
                        content:this.value
                    }
                })
                console.log(res)
                this.getNavList(id);
            },
        }
    }
</script>
<style lang="scss">
    page {
        background: #f8f8f8;
    }
</style>
<style lang="scss" scoped>
    .page{
        background: #f8f8f8;
    }
    .new-body{
        background: white;
        margin:30rpx;
        padding:20rpx;
        .title{
            font-size: 34rpx;
            font-weight: 1000;
        }
        .flex{
            line-height: 60rpx;
            color:#B8B8B8;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        .new-con{
            line-height: 50rpx;
            margin:20rpx 0;
            color:#585858;
            text-indent: 1em;
        }
    }
    .comment{
        background: white;
        padding:20rpx;
        margin:0 30rpx;
        .title{
            font-size: 30rpx;
            font-weight: 1000;
        }
        .comm-con{
            position: relative;
            padding:50rpx 0;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            .con-desc{
                margin-left:20rpx;
                .name{
                    color:grey;
                }
                .num{
                    color:grey;
                    position: absolute;
                    top:60rpx;
                    right:10rpx;
                }
                .date{
                    color:grey;
                    font-size: 25rpx;
                    line-height: 50rpx;
                }
            }
        }
    }
    .write{
        display: flex;
        align-items: center;
        flex-direction: row;
        padding:0 30rpx;
        line-height: 100rpx;
        background: white;
        height: 100rpx;
        .input{
            text-indent: 2em;
            width:400rpx;
            line-height:50rpx;
            background:#F7F7F7;
            border-radius: 50rpx;
        }
    }
</style>