j<template>
    <view class="page">
        <view class="form">
            <u-form :model="form" ref="uForm">
                <u-form :model="form" ref="uForm">
                    <view>
                        <view class="u-margin-bottom-30">
                            <text class="cuIcon-favorfill u-margin-right-10" style="color:#E12116;font-size: 10rpx"></text>
                            <text class="u-font-30">企业名称</text>
                        </view>
                        <u-input required v-model="form.name" height="60" placeholder=" 请输入你要认证的企业" style="background: #F8F5F7"/>
                    </view>
                    <view class="u-margin-top-60">
                        <view class="u-margin-bottom-30">
                            <text class="cuIcon-favorfill u-margin-right-10" style="color:#E12116;font-size: 10rpx"></text>
                            <text class="u-font-30">认证材料</text>
                        </view>
                        <view class="stuff">
                            <view class="yingye u-margin-right-20">
<!--                                <view class="card">-->
<!--&lt;!&ndash;                                  <image :src="image.business || 'http://images.yiqiwang360.com/yiqicha/yingyezhizhao.png'" class="fu"></image>&ndash;&gt;-->
<!--                                    <u-upload ref="uUpload" :max-count="1" :action="action" :form-data="formData" name="image"></u-upload>-->
<!--                                </view>-->
                                <view class="card">
<!--                                <u-upload ref="uUpload" :action="action" :auto-upload="true" ></u-upload>-->
                                <image :src="image.business || 'http://images.yiqiwang360.com/yiqicha/yingyezhizhao.png'" class="fu"></image>
                                <u-icon name="camera" color="white" size="40" inactive-color="#ffffff" class="camera" @click="upload"></u-icon>
                            </view>
                            <view class="title">营业执照</view>
                            </view>
                            <view class="yingye">
                                <view class="card">
                                    <image :src="image.card || 'http://images.yiqiwang360.com/yiqicha/shenfenzheng.png'"
                                           class="fu"></image>
                                    <u-icon name="camera" color="white" size="40" class="camera" @click="card"></u-icon>
                                </view>
                                <view class="title">法人代表身份证照片</view>
                            </view>
                        </view>
                        <view>
                            <view class="u-font-30 u-margin-bottom-20 u-margin-top-20">通讯地址</view>
                            <u-input required v-model="form.add" height="60" placeholder=" 请输入正确的通讯地址可提高审核通过率（非必填）" style="background: #F8F5F7"/>
                        </view>
                    </view>
                </u-form>
            </u-form>
        </view>
        <view class="last">
<!--            <u-radio-group v-model="value">-->
<!--                <u-radio shape="square">我已阅读并同意-->
<!--                    <text class="red">《企业实名认证服务协议》</text></u-radio>-->
<!--            </u-radio-group>-->
            <u-checkbox-group>
                <u-checkbox v-model="value" :disabled="false">我已阅读并同意<text class="red" @click="xieyi">《企业实名认证服务协议》</text></u-checkbox>
            </u-checkbox-group>
        </view>
        <u-button :customStyle="submit" @click="uploadCards">提交</u-button>
    </view>
</template>

<script>
    export default {
       data(){
           return {
               uploadList:[],
               bankCardBase64:null,
               image:{
                   business:'',
                   card:''
               },
               form: {
                   name: '',
                   add: ''
               },
               value:'',
               submit:{
                   background:'#EE1A0E',
                   width:'80%',
                   margin:'100rpx auto',
                   color:'white',
                   fontSize:'35rpx'
               },
               // action:'http://192.168.8.39:8081/applets/legalize',
               // actions:'http://192.168.8.39:8081/applets/legalize',
               // formData: {
               //      token:'',
               //      name:''
               // }
           }
       },
        // onLoad(){
        //    this.formData.token = uni.getStorageSync('token')
        //     this.formData.name = this.form.name
        // },
        methods:{
           xieyi(){
               uni.navigateTo({
                   url:'/pages/common/shopconfirmxieyi'
               })
           },
            /*submit() {
                this.$refs.uUpload.upload();
            },*/
            upload : function() {
                uni.chooseImage({
                    count:1,
                    success:(res)=>{
                        this.image.business = res.tempFilePaths[0];
                        this.uploadList.push(res.tempFilePaths);
                    }
                })
            },
            card : function() {
                uni.chooseImage({
                    count:1,
                    success:(res)=>{
                        this.image.card = res.tempFilePaths[0];
                        this.uploadList.push(res.tempFilePaths);
                    }

                })
            },
            uploadCards : function(){
                // if(this.image.business == 'https://yiqiwang360.com/images/yiqiguanjia/cardbusi.png'){
                //     uni.showToast({title:"请选择营业执照", icon:"none"});
                //     return;
                //
                // }
                for (var i = 0;i < this.uploadList.length;i++) {
                    // console.log(i)
                    uni.uploadFile({
                        url: 'http://192.168.8.39:8081/applets/legalize',
                        fileType: "image",
                        filePath: this.uploadList[i][0],
                        name: 'image',
                        formData: {
                            token:uni.getStorageSync('token'),
                            index:i,
                            name:this.form.name,
                            add:this.form.add,
                            image:this.uploadList[i]
                        },
                        success: (res) => {
                            console.log(res)
                            // uni.navigateTo({
                            //     url:'/pages/confirm/shopconfirm'
                            // })
                        },
                    });
                }
                console.log(this.uploadList)

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
    .red{
       color:#EE1A0E;
    }
.form{
    background: white;
    padding:30rpx;

    .stuff{
        display: flex;
        flex-direction: row;
        .yingye{
            flex:1;
            text-align: center;
             margin:20rpx auto;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .card{
                text-align: center;
                align-items: center;
                display: flex;
                justify-content: center;
                height:200rpx;
                background: #F8F6F7;
            }
            .title{
                color:#858585;
                margin-top:5rpx;
            }
        .fu{
            width:40%;
            height:180rpx;
            position: relative;
        }
            .person {
                width: 90%;
                height: 180rpx;
                border-radius: 10rpx;
            }
            .camera{
                position:absolute;
                top:35%;
                left: 45%;
            }
    }
    }
}
    .last{
        margin:30rpx;
    }
</style>