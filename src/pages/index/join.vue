<template>
  <view class="page">
    <view class="create-box">
      <u-form :model="form" ref="uForm">
        <u-form-item label="企业名称" label-width="160" :required="true">
          <u-input type="text" :custom-style="inputStyle" v-model="form.corporateName" placeholder="" />
        </u-form-item>
        <u-form-item label="服务分类" label-width="160" :required="true">
          <u-input type="select" :custom-style="inputStyle" v-model="form.cidName" placeholder="" @click="showService=true" />
        </u-form-item>
        <u-form-item label="注册手机" label-width="160" :required="true">
          <u-input type="number" :custom-style="inputStyle" v-model="form.phone" placeholder="" />
        </u-form-item>
        <u-form-item label="负责人" label-width="160" :required="true">
          <u-input type="text" :custom-style="inputStyle" v-model="form.name" placeholder="" />
        </u-form-item>
        <u-form-item label="公司地址" label-width="160" :required="true">
          <u-input type="text" :custom-style="inputStyle" v-model="form.address" placeholder="" />
        </u-form-item>
        <u-form-item label="企业简介" label-width="160">
          <u-input type="textarea" height="200" v-model="form.c_profile" placeholder="" />
        </u-form-item>
        <u-form-item label="主营业务" label-width="160">
          <u-input type="textarea" height="200" v-model="form.business" placeholder="" />
        </u-form-item>
        <u-form-item label="邀请人" label-width="160" :required="true">
          <u-input type="text" :custom-style="inputStyle" v-model="form.salesman" placeholder="" />
        </u-form-item>
        <u-form-item label="LOGO" label-width="160">
          <u-upload :action="action"
                    max-count="1"
                    max-size="10485760"
                    @on-choose-complete="startUpload"
                    @on-uploaded="onUploaded"
                    :file-list="fileList"></u-upload>
        </u-form-item>
        <u-form-item label="营业执照" label-width="160">
          <u-upload :action="action"
                    max-count="1"
                    max-size="10485760"
                    @on-choose-complete="startUpload"
                    @on-uploaded="onUploaded2"
                    :file-list="warterimg"></u-upload>
        </u-form-item>
        <u-form-item label="其他资料" label-width="160">
          <u-upload :action="action"
                    max-count="9"
                    max-size="10485760"
                    @on-choose-complete="startUpload"
                    @on-uploaded="onUploaded3"
                    :file-list="alldata"></u-upload>
        </u-form-item>
        <u-form-item label="备注信息" label-width="160">
          <u-input type="textarea" height="200" v-model="form.content" placeholder="" />
        </u-form-item>
      </u-form>
    </view>



    <view class="cu-bar bg-white tabbar border shop">
      <u-button @click="discussRelease"
                :custom-style="customStyle"
                shape="circle"
                :hair-line="false"
                :ripple="true"
                hover-class="none"
                :disabled="submitDis"
                :loading="submitDis"
                :throttle-time="1500"
                size="medium">申请入驻</u-button>
    </view>
    <u-select v-model="showService"
              mode="mutil-column-auto"
              value-name="id"
              label-name="name"
              child-name="all"
              :list="serviceList"
              @confirm="confirm"></u-select>
    <u-modal v-model="show" :content="content" confirm-text="继续录入" :show-cancel-button="true" cancel-text="关闭" @confirm="startNew()"></u-modal>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
        showService: false,
        serviceList:[{
          id: 1,
          name: '中国',
          all: [
            {
              id: 2,
              name: '广东',
            },
            {
              value: 5,
              label: '广西',
            }
          ]
        }],
        content: '入驻成功，请等待审核',
        submitDis: false,
        rid: 0,
        storage: [],
        form: {
          phone: '',
          corporateName: '',
          c_profile: '',
          salesman: '',
          images: '',
          alldata: '',
          img: '',
          business: '',
          cid: '',
          cidName: '',
          address: '',
          name: '',
          warterimg: '',
          content: '',

        },
        alldata: [],
        warterimg: [],
        action: 'http://yiqiwang360.com/api/phone',
        header: {},
        filesArr: [],
        fileList: [],
        inputStyle: {
          "padding-bottom": "4rpx"
        },
        customStyle: {
          border: 'none',
          background: 'linear-gradient(90deg, rgb(253, 81, 35), rgb(255, 93, 49))',
          boxShadow: '6rpx 8rpx 26rpx rgba(250, 115, 155, 0.3)',
          color: '#ffffff',
          width: '300rpx',
          overflow: 'hidden'
        }

      }
    },
    onLoad() {
      this.getStorage()
      this.getSerList()
    },
    onPullDownRefresh() {
      setTimeout(function () {
        uni.stopPullDownRefresh();
      }, 1000);
    },
    methods: {
      getStorage() {
        this.header.token = uni.getStorageSync('token')
        this.header.uid = uni.getStorageSync('uid')
        this.storage.token = uni.getStorageSync('token')
        this.storage.uid = uni.getStorageSync('uid')
        this.storage.info = uni.getStorageSync('info')
      },
      confirm(e) {
        console.log(e);
        this.form.cidName = e[1]["label"]
        this.form.cid = e[1]["value"]
      },
      startUpload(){
        this.submitDis = true
      },
      onUploaded(lists) {
        this.filesArr = lists;
        this.submitDis = false

      },
      onUploaded2(lists) {
        this.warterimg = lists;
        this.submitDis = false

      },
      onUploaded3(lists) {
        this.alldata = lists;
        this.submitDis = false

      },
      async getSerList () {
        const { data: res } = await this.$request({
          method: 'GET',
          url: 'index/getNavs'
        })
        this.serviceList = res.data
      },
      //发布
      async discussRelease() {
        if(this.filesArr.length>0){
          this.form.img = this.filesArr[0]['response']['data']
        }
        if (this.warterimg.length>0){
          this.form.warterimg = this.warterimg[0]['response']['data']
        }
        let alldata = []
        for (let i=0;i<this.alldata.length;i++){
          if (i>0){
            alldata = alldata+','
          }
          alldata = alldata+this.alldata[i]['response']['data']
        }
        this.form.alldata = alldata

        const {data: res} = await this.$request({
          method: 'POST',
          url: 'settlement',
          data: this.form,
        })
        this.show = true;

      },
      startNew(){
        uni.redirectTo(
                { url: '/pages/index/join' }
        )
      }

    }
  }
</script>
<style lang="scss" scoped>
  .page{
    background-color: #ffffff;
    padding-bottom: 100rpx;
  }

  .create-box {
    padding: 0 30rpx;
    background: #ffffff;
  }

  .cu-bar{
    position: fixed;
    -webkit-transform: translate3d(0, 0, 0);
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
  }

</style>
