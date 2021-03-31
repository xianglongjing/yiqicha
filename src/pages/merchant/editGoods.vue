<template>
  <view class="wrap">
    <u-form :model="model" :rules="rules" ref="uForm">
      <u-form-item label="名称" prop="name" required>
        <u-input placeholder="请输入服务名称" v-model="model.name" type="text"></u-input>
      </u-form-item>
      <u-form-item label="简介" prop="brief" required>
        <u-input type="textarea" placeholder="请填写服务简介" v-model="model.brief" />
      </u-form-item>
      <u-form-item label="方式">
        <u-radio-group v-model="model.remtype">
          <u-radio
            shape="circle"
            v-model="item.checked"
            v-for="(item, index) in serveList"
            :key="index"
            :name="item.remtype"
            active-color="#fd5123"
          >{{ item.name }}</u-radio>
        </u-radio-group>
      </u-form-item>
      <u-form-item label="数量" required prop="remaining">
        <u-input
          :placeholder="model.remtype === 1 ? '请填写服务天数' : '请填写服务次数'"
          v-model="model.remaining"
          type="number"
        />
      </u-form-item>
      <u-form-item label="价格" prop="price">
        <u-input placeholder="不填为免费咨询" v-model="model.price" type="text"></u-input>
      </u-form-item>
      <u-form-item label="详情" prop="content">
        <u-input maxlength="-1" type="textarea" placeholder="请填写服务详情" v-model="model.content" />
      </u-form-item>
      <u-alert-tips type="warning" title="图片上传提示：" description="服务轮播图和详情图片为空则不更改原图片，若上传提交则完全覆盖原图片。"></u-alert-tips>
      <u-form-item label="服务轮播图" prop="dbimg" label-width="150">
        <u-upload
          multiple
          width="160"
          @on-uploaded="onUploaded('dbimg', $event)"
          :action="uploadUrl"
          name="dbimg"
          show-progress
          :form-data="imagesParams"
          @on-remove="removeDbimg"
        ></u-upload>
      </u-form-item>
      <u-form-item label="详情图片" prop="infoImg" label-width="150" :auto-upload="false">
        <u-upload
          multiple
          width="160"
          @on-uploaded="onUploaded('infoImg', $event)"
          :action="uploadUrl"
          name="img"
          show-progress
          :form-data="imagesParams"
          @on-remove="removeinfoImg"
        ></u-upload>
      </u-form-item>
      <u-form-item label="类别" required>
        <u-cell-group :border="false">
          <u-cell-item title=" " :value="category" @click="showCategories"></u-cell-item>
        </u-cell-group>
      </u-form-item>
    </u-form>
    <u-button @click="submit">提交编辑</u-button>
    <!-- 类别弹窗 -->
    <u-popup v-model="categoriesShow" mode="bottom" length="60%" closeable border-radius="20">
      <view class="category">
        <u-radio-group v-model="category" width="50%">
          <u-radio
            v-for="(item, index) in categoriesList"
            :key="index"
            :name="item.name"
            shape="circle"
            active-color="#fd5123"
            @change="categoryChange(item.id)"
          >{{item.name}}</u-radio>
        </u-radio-group>
      </view>
    </u-popup>
  </view>
</template>

<script>
export default {
  data () {
    return {
      storage: {
        token: '',
        uid: 0,
        info: {}
      },
      // 服务id
      gid: 0,
      // 图片额外参数
      imagesParams: {
        token: '',
        uid: 0
      },
      // 图片上传地址
      uploadUrl: 'https://v5.yiqiwang360.com/api/api/uploadImg',
      // 提交表单
      model: {
        name: '',
        brief: '',
        remaining: '',
        remtype: 1,
        price: '',
        content: '',
        cid: '',
        dbimg: [],
        infoImg: []
      },
      // 是否显示服务分类
      categoriesShow: false,
      // 分类单选框
      categoriesList: [],
      category: '请选择服务所属类别',
      // 验证规则
      rules: {
        // 服务名称
        name: [
          {
            required: true,
            message: '请输入服务名称',
            trigger: 'blur',
          },
          {
            min: 3,
            max: 20,
            message: '名称长度在3到20个字符',
            trigger: 'blur',
          }
        ],
        // 服务简介
        brief: [
          {
            required: true,
            message: '请填写简介'
          },
          {
            max: 200,
            message: '简介不超过200个字符',
            trigger: 'blur',
          }
        ]
      },
      // 服务类型
      serveList: [
        {
          name: '按时间',
          remtype: 1,
          checked: true
        },
        {
          name: '按次数',
          remtype: 2,
          checked: false
        }
      ],
      // 服务数量
      remaining: [
        {
          required: true,
          message: '请填写服务数量',
          trigger: 'blur'
        }
      ]
    }
  },
  onLoad (options) {
    this.gid = options.gid
    this.getStorage()
    this.getCategories()
    this.getGoodDetail()
  },
  onReady () {
    this.$refs.uForm.setRules(this.rules);
  },
  methods: {
    // 获取本地存储
    getStorage () {
      this.storage.token = uni.getStorageSync('token')
      this.storage.uid = uni.getStorageSync('uid')
      this.storage.info = uni.getStorageSync('info')
      this.imagesParams.token = this.storage.token
      this.imagesParams.uid = this.storage.uid
    },
    // 获取服务详情
    async getGoodDetail () {
      const { data: res } = await this.$request({
        url: 'merchant/serviceproductinfo',
        data: {
          id: this.gid
        }
      })
      this.model.name = res.data.name
      this.model.brief = res.data.brief
      this.model.remtype = res.data.remtype
      this.model.remaining = res.data.remaining
      if (this.model.remtype === 1) {
        this.serveList[0].checked = true
        this.serveList[1].checked = false
      } else {
        this.serveList[0].checked = false
        this.serveList[1].checked = true
      }
      if (res.data.price === '免费咨询') { this.model.price === '' } else {
        this.model.price = res.data.price
      }
      this.model.content = res.data.content
      this.model.cid = res.data.cid
      this.categoriesList.map((item) => {
        if (this.model.cid === item.id) return this.category = item.name
      })
    },
    // 提交表单
    submit () {
      this.$refs.uForm.validate(async valid => {
        if (valid) {
          if (this.model.cid === '') return uni.showToast({
            title: '请选择服务所属类别',
            icon: 'none'
          })
          if (this.model.dbimg.length === 0) { delete this.model.dbimg }
          if (this.model.infoImg.length === 0) { delete this.model.infoImg }
          const { data: res } = await this.$request({
            method: 'POST',
            url: 'editProduct',
            data: Object.assign(
              {},
              {
                uid: this.storage.uid,
                token: this.storage.token,
                gid: this.gid
              },
              this.model
            )
          })
          uni.showToast({
            title: '编辑成功',
            icon: 'none',
            success: uni.redirectTo({
              url: '/pages/merchant/goodsManage'
            })
          })
        } else return uni.showToast({
          title: '请正确填写',
          icon: 'none'
        })
      })
    },
    // 类别
    showCategories () {
      this.categoriesShow = true
    },
    categoryChange (id) {
      this.model.cid = id
      setTimeout(() => { this.categoriesShow = false }, 500)
    },
    // 获取服务分类
    async getCategories () {
      const { data: res } = await this.$request({
        url: 'goods/sonlist'
      })
      this.categoriesList = res.data
    },
    // 上传图片保存地址
    onUploaded (name, lists) {
      let newArr = []
      lists.map((item) => {
        newArr.push(item.response.data.data)
      })
      this.model[name] = newArr
    },
    // 移除服务轮播图片
    removeDbimg (index) {
      this.model.dbimg.splice(index, 1)
    },
    // 移除详情图片
    removeinfoImg (index) {
      this.model.infoImg.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  padding: 30rpx;
}
.category {
  padding: 30rpx;
}
</style>
