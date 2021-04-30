<template>
    <view class="page">
        <view class="person">
            <view class="p-l">
                <u-image src="http://images.yiqiwang360.com/yiqicha/tou.png" width="140" height="140"></u-image>
                <view class="camera">
                    <u-icon name="camera" color="#ffffff"></u-icon>
                </view>
            </view>
            <view class="p-r">
                <view class="top">
                    <text class="name">韩梅梅</text>
                    <u-icon name="edit-pen" size="35"></u-icon>
                </view>
                <view>账号：123456789</view>
                <view class="flex">
                    <text>资料完善度：</text>
                    <u-line-progress active-color="#E22619" :percent="20" style="width:250rpx" height="20"></u-line-progress>
                </view>
            </view>
        </view>
        <view>
            <u-gap height="20" bg-color="#f8f8f8"></u-gap>
            <u-cell-group>
                <u-cell-item title="生日" :value="form.birthday" @click="showAddress"></u-cell-item>
                <u-cell-item title="毕业学校" :value="form.school" @click="setCompanyName"></u-cell-item>
                <u-cell-item title="学历" :value="form.education" @click="showIndustry"></u-cell-item>
                <u-cell-item title="企业规模" :value="form.insize" @click="showInsize"></u-cell-item>
                <u-cell-item title="所在职位" :value="form.position" @click="showPosition"></u-cell-item>
            </u-cell-group>
            <!-- 企业所在地 -->
            <u-picker v-model="addressShow" mode="time" :params="params" @confirm="submitAddress"></u-picker>
            <!-- 修改企业名称对话框 -->
            <u-modal
                    v-model="editCompanyShow"
                    content
                    title="学校名称"
                    :title-style="{padding: '30rpx 0'}"
                    show-cancel-button
                    confirm-color="#fd5123"
                    @confirm="submitpush('school')"
                    @cancel="cancelCompanyName"
            >
                <view>
                    <u-cell-group>
                        <u-field v-model="newValue" label="名称" placeholder="请输入学校名称"></u-field>
                    </u-cell-group>
                </view>
            </u-modal>
            <!-- 学历选择 -->
            <u-select
                    v-model="industryShow"
                    mode="mutil-column-auto"
                    :list="industryList"
                    title="请选择所在行业"
                    @confirm="confirmIndustry('education', $event)"
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
        <u-button :customStyle="bao" @click="submit">保存</u-button>
    </view>
</template>

<script>
    export default {
       data(){
           return {
               bao:{
                   background:'#F44514',
                   width:'550rpx',
                   margin:'0 auto',
                   height:'80rpx',
                   color:'white',
                   fontSize:'32rpx'
               },
               text:'',
               form: {
                   birthday:'',
                   school: '',
                   education: '',
                   unit: '',
                   year:'',
                   industry:'',
                   identity:'',
                   working:''
               },
               actionSheetList: [
                   {   id:1,
                       text: '企业'
                   },
                   {   id:2,
                       text: '个人工商户'
                   },
                   {   id:3,
                       text: '其他'
                   }
               ],
               jobList: [
                   {
                       id: '1',
                       text: '1年'
                   },
                   {
                       id: '2',
                       text: '2年'
                   }
               ],
               eduList: [
                   {
                       id: '1',
                       text: '本科'
                   },
                   {
                       id: '2',
                       text: '大专'
                   }
               ],
               shenfenlist: [
                   {
                       id: '1',
                       text: '员工'
                   },
                   {
                       id: '2',
                       text: '法定代表人'
                   },
                   {
                       id: '3',
                       text: '股东'
                   },
                   {
                       id: '4',
                       text: '董监高'
                   },
               ],
               yearList: [
                   {
                       id: '1',
                       text: '应届毕业生'
                   },
                   {
                       id: '2',
                       text: '1年及一下'
                   },
                   {
                       id: '3',
                       text: '1-3年'
                   },
                   {
                       id: '4',
                       text: '3-5年'
                   },
               ],
               editCompanyShow: false,
               newValue: '',
               industryShow: false,
               industryList: [
                   { label: '小学' },
                   { label: '初中' },
                   { label: '高中' },
                   { label: '成人专科'},
                   { label: '网络教育'},
                   { label: '开放教育'},
                   { label: '自学考试'},
                   { label: '普通专科'},
                   { label: '成人本科'},
                   { label: '普通本科'},
                   { label: '硕士研究生'},
                   { label: '博士研究生'}
               ],
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
               ],
               params: {
                   year: true,
                   month: true,
                   day: true,
                   hour: false,
                   minute: false,
                   second: false
               },
               // mode: 'date'
           }
       },
        onShow () {
            this.getStorage()
        },
        methods:{
            // 获取本地存储
            getStorage () {
                this.storage.token = uni.getStorageSync('token')
                this.storage.phone = uni.getStorageSync('phone')
            },
            async submit() {
             this.submitpush(val)
            },
            // 修改企业信息
            setCompanyName () {
                this.editCompanyShow = true
                this.newValue = this.form.corporateName
            },
            // async submitCompany (val) {
            //     this.company[val] = this.newValue
            //     const { data: res } = await this.$request({
            //         method: 'POST',
            //         url: 'myhome/editcorporate',
            //         data: {
            //             token: this.storage.token,
            //             uid: this.storage.uid,
            //             corporateName: this.company.corporateName,
            //             insize: this.company.insize,
            //             position: this.company.position,
            //             industry: this.company.industry,
            //             address: this.company.address
            //         }
            //     })
            //     this.newValue = ''
            //     this.getCompany()
            // },
            async tijiao(val) {
                this.form[val] = this.newValue
                const token=uni.getStorageSync('token')
                const {data: res} = await this.$request({
                    method: 'POST',
                    url: 'applets/personal',
                    data: {
                        token: uni.getStorageSync('token'),
                        birthday:this.form.birthday,
                        school:this.form.school,
                        education:this.form.education,
                        unit:this.form.unit,
                        industry:this.form.industry,
                        identity:this.form.identity,
                        working: this.form.working
                    }
                })
                this.newValue = ''
                // this.form = res
                console.log(res)
            },
            async submitpush(val) {
                this.form[val] = this.newValue
                const token=uni.getStorageSync('token')
                const {data: res} = await this.$request({
                    method: 'POST',
                    url: 'applets/personal',
                    data: {
                        token: uni.getStorageSync('token'),
                        birthday:this.form.birthday,
                        school:this.form.school,
                        education:this.form.education,
                        unit:this.form.unit,
                        industry:this.form.industry,
                        identity:this.form.identity,
                        working: this.form.working
                    }
                })
                this.newValue = ''
                // this.form = res
                console.log(res)
            },
            cancelCompanyName () {
                this.newValue = ''
            },
            // 行业
            // async getIndustry () {
            //     const { data: res } = await this.$request({
            //         url: 'goods/navlist'
            //     })
            //     this.industryList = res.data.list
            // },
            showIndustry () {
                this.industryShow = true
            },
            //行业
            confirmIndustry (val,e) {
                this.newValue = e[0].label
                this.submitpush(val)
                this.newValue = ''
            },
            // 企业所在地
            showAddress () {
                this.addressShow = true
            },
            submitAddress (e) {
                const date = new Date();
                let year = date.getFullYear();
                let month = date.getMonth() + 1;
                let day = date.getDate();
                this.newValue = e.year.label + '-' + e.month.label + '-' + e.day.label
                // this.newValue = e.province.label + '-' + e.city.label + '-' + e.area.label
                this.submitpush('birthday')
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
                // this.submitpush(val)
                this.newValue = ''
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
.person{
    background: white;
    margin:30rpx;
    padding:30rpx;
    display: flex;
    .p-l{
        position: relative;
        .camera{
            background: #E22619;
            width:50rpx;
            height:50rpx;
            line-height:50rpx;
            border-radius: 50%;
            text-align: center;
            position: absolute;
            top:100rpx;
            left:90rpx;
        }

    }

    .p-r{
        flex:1;
        padding:0 30rpx;
        .top{
            margin-bottom: 30rpx;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .name{
                font-weight: 600;
                font-size: 30rpx;
            }
        }
        .flex{
            margin-top:5rpx;
            flex-direction: row;
            display: flex;
            align-items: center;
        }
    }
}
    .form{
        background: white;
        margin:30rpx;
        padding:0 20rpx;
        border-radius: 10rpx;
        .flex{
            align-items: center;
        }
    }
</style>