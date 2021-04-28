<template>
    <view class="page">
        <view class="redbg">
            <image
                    src="http://images.yiqiwang360.com/yiqicha/beian.png"
                    style="width: 100%;height: 100%;"></image>
            <view class="zi">
                <view class="title">一键查询工信部网站备案</view>
            </view>
            <view class="sou">
                <u-search
                        :action-style="search_btn"
                        :animation="true"
                        @custom="goSearch"
                        @click="go" disabled
                        bg-color="#f8f8f8"
                        input-align="left" height="80"
                        placeholder="请输入公司名/网址" shape="square"
                        v-model="query"
                ></u-search>
                <view style="text-align: left;margin:40rpx 0 10rpx;">热门搜索</view>
                <view class="shops">
                    <view class="shop">
                        <text>临沂市铭远企业管理服务有限公司</text>
                    </view>
                    <view class="shop u-margin-left-25">
                        <text>医企管家</text>
                    </view>
                    <view class="shop">
                        <text>http://yiqiwang360.com/</text>
                    </view>
                </view>
            </view>
        </view>
        <view class="infor">
            <view>
                <view class="title red">什么是网站备案?</view>
                <view class="u-margin-top-10">
                    网站备案是指向主管机关报告事由存案以备查考。
                    行政法角度看备案，实践中主要是《立法法》和《法规规章备案条例》的规定。
                    网站备案的目的主要就是为了防止在网上从事非法的网站经管活动，打击不良互联网信息的传播。如果网站不备案的话，很有可能被查处以后关停。
                </view>
            </view>
            <view class="u-margin-top-50">
                <view class="title red">企业网站备案需要准备?</view>
                <view class="u-margin-top-10">
                    1份(营业执照)副本彩色扫描件或复印件；
                    <view>1份网站负责人的身份证彩色扫描件或复印件；</view>
                    1张负责人的半身彩色照片(.jpg格式)；(需有对应服务商提供的专门背景做幕布。)
                    <view>1公章；</view>
                    <view>主办单位所在地的详细联系方式；</view>
                    <view>填写《信息安全管理协议》；</view>
                    填写《真实性核验单》。
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                search_btn:{
                    color:'white'
                }
            }
        },
        methods:{
            go(){
                uni.navigateTo({
                    url:'/pages/index/bansearch'
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    page{
        background: #f8f8f8;
    }
    .red{
        color:#E75D54;
    }
    .redbg{
        /*background-size: 250rpx 200rpx;*/
        /*background: url("http://images.yiqiwang360.com/yiqicha/fengxian.png") no-repeat;*/
        position: relative;
        /*color:white;*/
        /*padding:50rpx 20rpx;*/
        height:560rpx;
        width:100%;
        .zi{
            color:white;
            position: absolute;
            top:50rpx;
            left:30rpx;
            .title{
                margin-left:120rpx;
                font-size: 45rpx;
            }
        }
        .sou{
            color:white;
            position: absolute;
            top:160rpx;
            left:35rpx;
            right:35rpx;
        }
        .shops{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            .shop{
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                border-radius: 5rpx;
                padding:10rpx 20rpx;
                margin:10rpx 0 10rpx 0;
                background-color: rgba(255,255,255,0.2);
                text{
                    margin-left:10rpx;
                }
            }
        }
    }
    .infor{
        position: absolute;
        top:510rpx;
        left:30rpx;
        padding:40rpx 30rpx;
        width:92%;
        border-radius: 10rpx;
        background: white;
        .title{
            font-size: 30rpx;
            font-weight: 650;
        }
    }
</style>