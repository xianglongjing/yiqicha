<template>
  <view class="wrap">
    <u-form :model="model" :rules="rules" ref="uForm">
      <u-form-item label="名称" prop="name" required>
        <u-input placeholder="请填写服务名称" v-model="model.name" type="text"></u-input>
      </u-form-item>
      <u-form-item label="简介" prop="brief" required>
        <u-input type="textarea" placeholder="请填写服务简介" v-model="model.brief" />
      </u-form-item>
      <u-form-item label="方式" required>
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
    <u-button @click="submit">上传服务</u-button>
    <!-- 类别 -->
    <u-select
      v-model="categoriesShow"
      mode="mutil-column-auto"
      :list="categoriesList"
      safe-area-inset-bottom
      value-name="id"
      label-name="name"
      child-name="child"
      title="请选择服务所属类别"
      @confirm="confirmCategory"
    ></u-select>
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
        remtype: 1,
        remaining: '',
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
        ],
        // 服务数量
        remaining: [
          {
            required: true,
            message: '请填写服务数量',
            trigger: 'blur'
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
      ]
    }
  },
  onLoad () {
    this.getStorage()
    this.getCategories()
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
    // 提交表单
    submit () {
      this.$refs.uForm.validate(async valid => {
        if (valid) {
          if (this.model.cid === '') return uni.showToast({
            title: '请选择服务所属类别',
            icon: 'none'
          })
          uni.showToast({
            title: '上传成功',
            icon: 'none',
            success: uni.redirectTo({
              url: '/pages/merchant/goodsManage'
            })
          })
          const { data: res } = await this.$request({
            method: 'POST',
            url: 'addProduct',
            data: Object.assign(
              {},
              {
                uid: this.storage.uid,
                token: this.storage.token
              },
              this.model
            )
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
    confirmCategory (e) {
      this.category = e[1].label
      this.model.cid = e[1].value
    },
    // 获取服务分类
    async getCategories () {
      const { data: res } = await this.$request({
        url: 'goods/navlist'
      })
      this.categoriesList = res.data.list
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

<style>
</style>
<style scoped lang="scss">
.wrap {
  padding: 30rpx;
}
.category {
  padding: 30rpx;
}
</style>
