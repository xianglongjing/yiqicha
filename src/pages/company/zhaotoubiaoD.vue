<template>
    <view class="page u-border-top">
        <view class="title">{{con.title}}</view>
        <view>
            <text>来源</text>
            <text class="gray u-margin-left-30">{{con.date}}</text>
        </view>
        <view>
            <text class="gray">信息类型：</text>
            <text>{{con.type}}</text>
        </view>
        <view class="shop">
            <text class="gray">关联企业：</text>
            <view>
                <text>大唐有限公司</text>
                <text>大唐有限公司</text>
            </view>
        </view>
        <view>1111111111</view>
        <view class="info">
            <view>
                <text class="hei">一、采购单编号：</text>
                <text>11111</text>
            </view>
            <view>
                <text class="hei">二、采购单名称：</text>
                <text>一、采购单编号：</text>
            </view>
            <view>
                <text class="hei">三、组织形式：</text>
                <text>一、采购单编号：</text>
            </view>
            <view>
                <text class="hei">四、采购执行单位：</text>
                <text>一、采购单编号：</text>
            </view>
            <view>
                <text class="hei">五、成交供应商：</text>
                <text>一、采购单编号：</text>
            </view>
            <view>
                <text class="hei">六、询价类型：</text>
                <text>一、采购单编号：</text>
            </view>
            <view>
                <text class="hei">七、报价截止日期：</text>
                <text>一、采购单编号：</text>
            </view>
            <view>
                <text class="hei">八、公告日期：</text>
                <text>一、采购单编号：</text>
            </view>
            <view>
                <text class="hei">九、采购执行人联系方式：</text>
                <text>一、采购单编号：</text>
            </view>
            <view>具体规格、技术指标及售后服务要求等详见下表。</view>
        </view>
        <u-table border-color="white" bg-color="#ffffff">
            <u-tr bg-color="white">
                <u-th>学校</u-th>
                <u-th>班级</u-th>
                <u-th>年龄</u-th>
                <u-th>年龄</u-th>
                <u-th>年龄</u-th>
                <u-th>年龄</u-th>
            </u-tr>
            <u-tr>
                <u-td>浙江大学</u-td>
                <u-td>二年级</u-td>
                <u-td>22</u-td>
                <u-td>22</u-td>
                <u-td>22</u-td>
                <u-td>22</u-td>
            </u-tr>
            <u-tr>
                <u-td>清华大学</u-td>
                <u-td>05班</u-td>
                <u-td>20</u-td>
                <u-td>22</u-td>
                <u-td>22</u-td>
                <u-td>22</u-td>
            </u-tr>
        </u-table>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                con:[]
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
                    url: 'applets/biddingsave',
                })
                console.log(res)
                this.con=res

            },
            detail(id){
                uni.navigateTo({
                    url:'/pages/company/zhaotoubiaoD?id='+id
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
.page{
    padding:30rpx;
}
.gray{
    color:#959595;
}
    .title{
        font-size: 35rpx;
    }
    .shop{
        background: #f8f8f8;
        padding:25rpx 20rpx;
        margin:20rpx 0;
    }
    .info{
        line-height: 55rpx;
        .hei{
            font-weight: 600;
            font-size: 32rpx;
        }
    }
</style>