<template>
  <view>
    <u-gap height="20" bg-color="#f8f8f8"></u-gap>
    <u-cell-group>
      <u-cell-item title="生日" :value="company.birthday" @click="setCompanyName"></u-cell-item>
      <u-cell-item title="所在行业" :value="company.industry" @click="showIndustry"></u-cell-item>
      <u-cell-item title="企业所在地" :value="company.address" @click="showAddress"></u-cell-item>
      <u-cell-item title="企业规模" :value="company.insize" @click="showInsize"></u-cell-item>
      <u-cell-item title="所在职位" :value="company.position" @click="showPosition"></u-cell-item>
    </u-cell-group>
    <!-- 企业所在地 -->
    <u-picker v-model="addressShow" mode="region" @confirm="submitAddress"></u-picker>
    <!-- 修改企业名称对话框 -->
    <u-modal
      v-model="editCompanyShow"
      content
      title="修改企业名称"
      :title-style="{padding: '30rpx 0'}"
      show-cancel-button
      confirm-color="#fd5123"
      @confirm="submitCompany('corporateName')"
      @cancel="cancelCompanyName"
    >
      <view>
        <u-cell-group>
          <u-field v-model="newValue" label="名称" placeholder="请输入企业名称"></u-field>
        </u-cell-group>
      </view>
    </u-modal>
    <!-- 行业选择 -->
    <u-select
      v-model="industryShow"
      mode="mutil-column-auto"
      :list="industryList"
      safe-area-inset-bottom
      value-name="id"
      label-name="name"
      child-name="child"
      title="请选择所在行业"
      @confirm="confirmIndustry"
    ></u-select>
    <!-- 企业规模 -->
    <u-select
      v-model="insizeShow"
      :list="insizeList"
      mode="single-column"
      @confirm="submitInfo('insize', $event)"
    ></u-select>
    <!-- 所在职位 -->
    <u-select
      v-model="positionShow"
      :list="positionList"
      mode="single-column"
      @confirm="submitInfo('position', $event)"
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
      company: {
        corporateName: '',
        industry: '',
        address: '',
        insize: '',
        position: ''
      },
      editCompanyShow: false,
      newValue: '',
      industryShow: false,
      industryList: [],
      addressShow: false,
      insizeShow: false,
      positionShow: false,
      insizeList: [
        { label: '大型企业（300人及以上）' },
        { label: '中型企业（100~299人）' },
        { label: '小型企业（10~99人）' },
        { label: '微型企业（10人以下）' }
      ],
      positionList: [
        { label: '暂不知道' },
        { label: '普通员工' },
        { label: '基层管理者' },
        { label: '中层管理者' },
        { label: '高层管理者' },
        { label: '企业负责人' }
      ]
    }
  },
  onLoad () { },
  onShow () {
    this.getStorage()
    this.getCompany()
    this.getIndustry()
  },
  methods: {
    // 获取本地存储
    getStorage () {
      this.storage.token = uni.getStorageSync('token')
      this.storage.info = uni.getStorageSync('phone')
    },
    // 获取基本信息
    async getCompany () {
      const { data: res } = await this.$request({
        url: 'myhome/corporate',
        data: {
          uid: this.storage.uid,
          token: this.storage.token
        }
      })
      this.company = res.data
    },
    // 修改企业信息
    setCompanyName () {
      this.editCompanyShow = true
      this.newValue = this.company.corporateName
    },
    async submitCompany (val) {
      this.company[val] = this.newValue
      const { data: res } = await this.$request({
        method: 'POST',
        url: 'myhome/editcorporate',
        data: {
          token: this.storage.token,
          uid: this.storage.uid,
          corporateName: this.company.corporateName,
          insize: this.company.insize,
          position: this.company.position,
          industry: this.company.industry,
          address: this.company.address
        }
      })
      this.newValue = ''
      this.getCompany()
    },
    cancelCompanyName () {
      this.newValue = ''
    },
    showIndustry () {
      this.industryShow = true
    },
    confirmIndustry (e) {
      this.newValue = e[1].label
      this.submitCompany('industry')
      this.newValue = ''
    },
    // 企业所在地
    showAddress () {
      this.addressShow = true
    },
    submitAddress (e) {
      this.newValue = e.province.label + '-' + e.city.label + '-' + e.area.label
      this.submitCompany('address')
      this.newValue = ''
    },
    // 企业规模和职位
    showInsize () {
      this.insizeShow = true
    },
    showPosition () {
      this.positionShow = true
    },
    submitInfo (val, e) {
      this.newValue = e[0].label
      this.submitCompany(val)
      this.newValue = ''
    }
  }
}
</script>
<style lang="scss">
page {
  background-color: #f8f8f8;
}
</style>
<style lang="scss" scoped>
.industry {
  padding: 30rpx;
}
</style>
