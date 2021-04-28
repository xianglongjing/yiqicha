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
        <view class="form">
            <u-form :model="form" ref="uForm">11
                <u-picker v-model="date" mode="time" @click="date = true" :params="params"></u-picker>
            </u-form>
            <u-form :model="form" ref="uForm">
                <u-form-item label="毕业学校" label-width="200"><u-input v-model="form.school" placeholder="请输入学校名称"/></u-form-item>
            </u-form>
            <view class="u-border-bottom" style="line-height:100rpx">
                <view class="flex">
                    <text class="u-font-31" style="width:200rpx">学历</text>
                    <u-input v-model="form.education" :type="types" @click="edu = true" placeholder="请选择所在行业"
                             placeholder-style="color:#C0C4CC;margin-top: 30rpx"/>
                </view>
                <view class="flex">
                    <u-action-sheet :list="eduList" v-model="edu" @click="Edu"></u-action-sheet>
                </view>
            </view>
            <view class="u-border-bottom" style="line-height:100rpx">
                <view class="flex">
                    <text class="u-font-31" style="width:200rpx">毕业年份</text>
                    <u-input v-model="form.year" :type="types" @click="years = true" placeholder="请选择毕业年份"
                             placeholder-style="color:#C0C4CC;margin-top: 30rpx"/>
                </view>
                <view class="flex">
                    <u-action-sheet :list="yearList" v-model="years" @click="nian"></u-action-sheet>
                </view>
            </view>
        </view>
        <view class="form">
            <u-form :model="form" ref="uForm">
                <u-form :model="form.unit" ref="uForm">
                    <u-form-item label="公司/单位" label-width="200"><u-input v-model="form.shop" placeholder="请输入公司/单位名称"/></u-form-item>
                </u-form>
            </u-form>
            <view class="u-border-bottom" style="line-height:100rpx">
                <view class="flex">
                    <text class="u-font-31" style="width:200rpx">所在行业</text>
                    <u-input v-model="form.industry" :type="types" @click="shows = true" placeholder="请选择所在行业" placeholder-style="color:#C0C4CC;margin-top: 30rpx"/>
                </view>
                <view class="flex">
                    <u-action-sheet :list="actionSheetList" v-model="shows" @click="actionSheetCallback"></u-action-sheet>
                </view>
            </view>
            <view class="u-border-bottom" style="line-height:100rpx">
                <view class="flex">
                    <text class="u-font-31" style="width:200rpx">身份</text>
                    <u-input v-model="form.identity" :type="types" @click="shens = true" placeholder="请选择身份"
                             placeholder-style="color:#C0C4CC;margin-top: 30rpx"/>
                </view>
                <view class="flex">
                    <u-action-sheet :list="shenfenlist" v-model="shens" @click="shenfen"></u-action-sheet>
                </view>
            </view>
            <view class="u-border-bottom" style="line-height:100rpx">
                <view class="flex">
                    <text class="u-font-31" style="width:200rpx">工作年限</text>
                    <u-input v-model="form.working" :type="types" @click="job = true" placeholder="请选择所在行业"
                             placeholder-style="color:#C0C4CC;margin-top: 30rpx"/>
                </view>
                <view class="flex">
                    <u-action-sheet :list="jobList" v-model="job" @click="Job"></u-action-sheet>
                </view>
            </view>
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
               types: 'select',
               shows: false,
               show: false,
               edu: false,
               shens: false,
               job: false,
               years: false,
               date:false,
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
        methods:{
            async submit() {
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
                this.form = res
                console.log(res)
                // if (!res.list) {
                //   this.followList = []
                //   return this.emptyShow = true
                // }
                // this.followList = res.list.map((item) => {
                //   return Object.assign({}, item, {show: false})
                // })
            },
            DateChange(e){
                var key=e.currentTarget.dataset.target;
                this.item[key]=e.detail.value;
            },
            open() {
                this.show = true;
            },
            actionSheetCallback(index) {
                this.form.industry = this.actionSheetList[index].text;
                this.form.type = this.actionSheetList[index].id;
            },
            shenfen(index) {
                this.form.identity = this.shenfenlist[index].text;
                this.form.type = this.shenfenlist[index].id;
            },
            Job(index) {
                this.form.working = this.jobList[index].text;
                this.form.type = this.jobList[index].id;
            },
            Edu(index) {
                this.form.education = this.eduList[index].text;
                this.form.type = this.eduList[index].id;
            },
            nian(index) {
                this.form.year = this.yearList[index].text;
                this.form.type = this.yearList[index].id;
            },
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