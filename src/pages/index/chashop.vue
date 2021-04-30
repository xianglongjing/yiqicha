<template>
    <view class="page u-border-top">
        <uni-nav-bar :status-bar="true" left-icon="back" :fixed="true" :border="false" :shadow="false" @clickLeft="goBack">
        </uni-nav-bar>
        <view class="tabs">
            <u-tabs
                    :list="menuList"
                    :current="current"
                    @change="menuChange"
                    bar-width="50" font-size="30"
                    active-color="#E12216" bg-color="none" inactive-color="#000000"
            ></u-tabs>
        </view>
        <view v-if="current==0">
            <view class="white">
                <view class="shop">
                    <u-image mode="aspectFill" border-radius="10"
                             height="80" width="80"
                             src="https://img0.baidu.com/it/u=1643486358,2962398631&fm=26&fmt=auto&gp=0.jpg"></u-image>
                    <view class="right">
                        <view class="name u-margin-bottom-10">{{newsList.cpyname}}</view>
                        <view>
                            <text class="lv">存续</text>
                            <text class="lan">发票抬头</text>
                            <text class="zi">曾用名</text>
                            <text class="lv2">战略融资</text>
                            <text class="gray">浏览：333万+</text>
                        </view>
                    </view>
                </view>
                <view class="intro">
                    <view class="title">简介：暂无</view>
<!--                    <u-image mode="aspectFill" border-radius="10" height="80" width="80" src="https://img0.baidu.com/it/u=1643486358,2962398631&fm=26&fmt=auto&gp=0.jpg"></u-image>-->
                </view>
                <view class="shop-bo">
                    <view class="bo-item u-border-right" style="margin-left:-40rpx">
                        <text class="title">法人代表</text>
                        <text class="red">{{partner.name? partner.name:'—'}}</text>
                    </view>
                    <view class="bo-item u-border-right">
                        <text class="title">注册资金</text>
                        <text>{{newsList.rtdcapital? newsList.rtdcapital:'—'}}</text>
                    </view>
                    <view class="bo-item">
                        <text class="title">成立时间</text>
                        <text>{{newsList.ebhtdate? newsList.ebhtdate:'—'}}</text>
                    </view>
                </view>
                <view class="last gray">
                    <u-image mode="aspectFill" src="http://images.yiqiwang360.com/yiqicha/huanyipi.png" width="30" height="30"></u-image>
                    2小时前更新
                    <view class="button u-margin-left-30">
                        <view class="item">
                            <text class="lv">WEB</text>
                            <text>官网</text>
                        </view>
                        <view class="item">
                            <u-icon name="map" color="#E33329" size="30"></u-icon>
                            <text>地址</text>
                        </view>
                        <view class="item">
                            <u-icon name="email" color="#E33329" size="30"></u-icon>
                            <text>邮箱</text>
                        </view>
                        <view class="item">
                            <u-icon name="phone" color="#E33329" size="30"></u-icon>
                            <text>电话</text>
                        </view>
                    </view>
                </view>
            </view>
            <view class="white" v-if="newsList.partnercount!==0 || newsList.personnelcount!==0">
                <view class="man">
                    <text class="gudong red">股东{{newsList.partnercount}}</text>
                    <view class="infor" v-for="item in partners" :key="item.id">
                        <view class="flex">
                            <u-image mode="aspectFill" border-radius="10"
                                     height="80" width="80"
                                     src="https://img0.baidu.com/it/u=1643486358,2962398631&fm=26&fmt=auto&gp=0.jpg"></u-image>
                            <view class="gray u-margin-left-10">
                                <text class="red">{{item.name ? item.name : '股东'}}</text>
                                <view class="gray">{{item.position ? item.position : '股东'}}</view>
                            </view>
                        </view>
                        <view>
                            <view>
                                <text class="gray">持股比例</text>
                                <text class="red">{{item.ratio}}</text>
                            </view>
                        </view>
                        <view>
                            <view>
                                <text class="gray">他有</text>
                                <text class="red">{{item.corporates_count}}</text>
                                <text class="gray">家公司</text>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="man u-margin-top-20" v-if="newsList.personnelcount!==0">
                    <text class="gudong gao">高管{{newsList.personnelcount}}</text>
                    <view class="infor" v-for="item in partners" :key="item.id">
                        <view class="flex">
                            <u-image mode="aspectFill" border-radius="10"
                                     height="80" width="80"
                                     src="https://img0.baidu.com/it/u=1643486358,2962398631&fm=26&fmt=auto&gp=0.jpg"></u-image>
                            <view class="gray u-margin-left-10">
                                <text class="red">{{item.name}}</text>
                                <view class="gray">{{item.position}}</view>
                            </view>
                        </view>
                        <view>
                            <view>
                                <text class="gray">持股比例</text>
                                <text class="red">{{item.ratio}}</text>
                            </view>
                        </view>
                        <view>
                            <view>
                                <text class="gray">他有</text>
                                <text class="red">{{item.corporates_count}}</text>
                                <text class="gray">家公司</text>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
            <view class="danger">
                <view class="top">
                    <text class="title red">一企查风险</text>
                    <text>风险等级 <text class="level">中等</text></text>
                </view>
                <view class="flex">
                    <u-icon name="volume-up" size="50" color="#888888"></u-icon>
                    <text class="u-margin-left-10">2021-04-12 该公司产生“ <text class="red">法律诉讼</text>”信息</text>
                </view>
                <view class="con">
                    <view class="item">
                        <view>
                            <text>自身风险</text>
                            <text class="num"> <text>17818</text>条</text>
                        </view>
                        <view>该公司的部分股权处于出质状态（4）</view>
                    </view>
                    <view class="item">
                        <view>
                            <text>自身风险</text>
                            <text> <text>17818</text>条</text>
                        </view>
                        <view>该公司投资的英鹏互娱科技（北京）有</view>
                    </view>
                </view>
            </view>
            <view class="tupu">
                <view class="item">
                    <text class="title">一企图谱</text>
                    <view class="con">
                        <u-image mode="aspectFill" border-radius="10"
                                 height="150" width="180"
                                 src="https://img0.baidu.com/it/u=1643486358,2962398631&fm=26&fmt=auto&gp=0.jpg"></u-image>
                        <text class="gray">股权结构</text>
                    </view>
                    <view class="con">
                        <u-image mode="aspectFill" border-radius="10"
                                 height="150" width="180"
                                 src="https://img0.baidu.com/it/u=1643486358,2962398631&fm=26&fmt=auto&gp=0.jpg"></u-image>
                        <text class="gray">股权穿透图</text>
                    </view>
                    <view class="con">
                        <u-image mode="aspectFill" border-radius="10"
                                 height="150" width="180"
                                 src="https://img0.baidu.com/it/u=1643486358,2962398631&fm=26&fmt=auto&gp=0.jpg"></u-image>
                        <text class="gray">企业架构图</text>
                    </view>
                </view>
                <view class="item2">
                    <text class="title">品牌</text>
                    <view class="con">
                        <text class="name">铭远集团</text>
                        <text>融资轮次：战略融资</text>
                        <text class="u-margin-left-30">精品数量:100</text>
                    </view>
                </view>
                <view class="item2">
                    <text class="title">机构</text>
                    <view class="con">
                        <text class="name">铭远集团</text>
                        <text>管理基金：1</text>
                        <text class="u-margin-left-30">投资时间:100</text>
                    </view>
                </view>
            </view>
            <view class="back">
                <text class="title">企业背景</text>
                <u-grid :col="4" style="margin-top:30rpx">
                    <u-grid-item @click="gong(newsList.id)">
                        <view class="num">4</view>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/gaikuang (5).png" width="50" height="50"></u-image>
                        <view class="grid-text">工商信息</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/main?id='+newsList.id)">
                        <view class="num">{{newsList.personnelcount}}</view>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/qiyebeijing4.png" width="50" height="50"></u-image>
                        <view class="grid-text">主要人员</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/gudonginfo?id='+newsList.id)">
                        <view class="num"> {{newsList.partnercount}}</view>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/qiyebeijing3.png" width="50" height="50"></u-image>
                        <view class="grid-text">股东信息</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/waitouzi?id='+newsList.id)">
                        <view class="num"> {{newsList.foreign}}</view>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/qiyebeijing1.png" width="50" height="50"></u-image>
                        <view class="grid-text">对外投资</view>
                    </u-grid-item>
                    <u-grid-item>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/qiyebeijing6.png" width="50" height="50"></u-image>
                        <view class="grid-text">股权结构</view>
                    </u-grid-item>
                    <u-grid-item>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/qiyebeijing5.png" width="50" height="50"></u-image>
                        <view class="grid-text">最终受益人</view>
                    </u-grid-item>
                    <u-grid-item>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/qiyebeijing14.png" width="50" height="50"></u-image>
                        <view class="grid-text">实际控制人</view>
                    </u-grid-item>
                    <u-grid-item>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/qiyebeijing13.png" width="50" height="50"></u-image>
                        <view class="grid-text">实际控制权</view>
                    </u-grid-item>
                    <u-grid-item>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/qiyebeijing9.png" width="50" height="50"></u-image>
                        <view class="grid-text">财务简析</view>
                    </u-grid-item>
                    <u-grid-item>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/qiyebeijing11.png" width="50" height="50"></u-image>
                        <view class="grid-text">企业关系</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/changelog?id='+newsList.id)">
                        <view class="num"> {{newsList.change}}</view>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/qiyebeijing8.png" width="50"
                                 height="50"></u-image>
                        <view class="grid-text">变更记录</view>
                    </u-grid-item>
                    <u-grid-item @click="year(newsList.id)">
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/qiyebeijing7.png" width="50"
                                 height="50"></u-image>
                        <view class="grid-text">企业年报</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/announce')">
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/qiyebeijing12.png" width="60"
                                 height="50"></u-image>
                        <view class="grid-text">企业公示</view>
                    </u-grid-item>
                    <u-grid-item>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/qiyebeijing10.png" width="50"
                                 height="50"></u-image>
                        <view class="grid-text">附近同行</view>
                    </u-grid-item>
                </u-grid>
            </view>
            <view class="back">
                <view class="flex">
                    <text class="title">风险信息</text>
                    <text style="color:#FEC057;font-weight: 620">对风险信息进行解释说明 <text class="cuIcon-right"></text></text>
                </view>
                <u-grid :col="4" style="margin-top:30rpx">
                    <u-grid-item>
                        <view class="num2">4</view>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/fengxianxinxi26.png" width="50" height="50"></u-image>
                        <view class="grid-text">司法解析</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/kaiting?id='+newsList.id)">
                        <view class="num2"> {{newsList.opencourt}}</view>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/fengxianxinxi15.png" width="50" height="50"></u-image>
                        <view class="grid-text">开庭公告</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/lawsus?id='+newsList.id)">
                        <view class="num2"> {{newsList.Proceedings}}</view>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/fengxianxinxi1.png" width="50" height="50"></u-image>
                        <view class="grid-text">法律诉讼</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/lawgongg?id='+newsList.id)">
                        <view class="num2"> {{newsList.court}}</view>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/fengxianxinxi16.png" width="50" height="50"></u-image>
                        <view class="grid-text">法院公告</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/xianzhixiaofeiling?id='+newsList.id)">
                        <view class="num2">{{newsList.consumption}}</view>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/fengxianxinxi6.png" width="50" height="50"></u-image>
                        <view class="grid-text">限制消费令</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/zhongbenanjian?id='+newsList.id)">
                        <view class="num2">{{newsList.cases}}</view>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/fengxianxinxi12.png" width="50" height="50"></u-image>
                        <view class="grid-text">终本案件</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/shixininfo?id='+newsList.id)">
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/fengxianxinxi24.png" width="50" height="50"></u-image>
                        <view class="grid-text">失信信息</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/shixinbeizhixingren?id='+newsList.id)">
                        <view class="num2">{{newsList.debtor}}</view>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/fengxianxinxi14.png" width="50" height="50"></u-image>
                        <view class="grid-text">失信被执行人</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/sifaxiezhu?id='+newsList.id)">
                        <view class="num2">{{newsList.assistance}}</view>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/fengxianxinxi7.png" width="50" height="50"></u-image>
                        <view class="grid-text">司法协助</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/songdagongg?id='+newsList.id)">
                        <view class="num2"> {{newsList.ruling}}</view>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/fengxianxinxi27.png" width="50" height="50"></u-image>
                        <view class="grid-text">送达公告</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/lianxinxi?id='+newsList.id)">
                        <view class="num2"> {{newsList.register}}</view>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/fengxianxinxi22.png" width="50"
                                 height="50"></u-image>
                        <view class="grid-text">立案信息</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/jingyingyichang?id='+newsList.id)">
                        <view class="num2"> {{newsList.business}}</view>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/fengxianxinxi21.png" width="50"
                                 height="50"></u-image>
                        <view class="grid-text">经营异常</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/xingzchufa?id='+newsList.id)">
                        <view class="num2">{{newsList.penalties}}</view>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/fengxianxinxi19.png" width="50"
                                 height="50"></u-image>
                        <view class="grid-text">行政处罚</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/yanzhongweifa?id='+newsList.id)">
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/fengxianxinxi28.png" width="50"
                                 height="50"></u-image>
                        <view class="grid-text">严重违法</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/guquanchuzhi?id='+newsList.id)">
                        <view class="num2"> {{newsList.pledge}}</view>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/fengxianxinxi17.png" width="50"
                                 height="50"></u-image>
                        <view class="grid-text">股权出质</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/guquanzhiya?id='+newsList.id)">
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/fengxianxinxi18.png" width="50"
                                 height="50"></u-image>
                        <view class="grid-text">股权质押</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/shuishouweifa?id='+newsList.id)">
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/fengxianxinxi25.png" width="50"
                                 height="50"></u-image>
                        <view class="grid-text">税收违法</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/dongchandiya?id='+newsList.id)">
                        <view class="num2"> {{newsList.mortgage}}</view>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/fengxianxinxi13.png" width="50"
                                 height="50"></u-image>
                        <view class="grid-text">动产抵押</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/huanbaochufa?id='+newsList.id)">
                        <view class="num2"> {{newsList.protection}}</view>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/fengxianxinxi8.png" width="50"
                                 height="50"></u-image>
                        <view class="grid-text">环保处罚</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/qianshuigonggao?id='+newsList.id)">
                        <view class="num2"> {{newsList.arrears}}</view>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/fengxianxinxi23.png" width="50"
                                 height="50"></u-image>
                        <view class="grid-text">欠税公告</view>
                    </u-grid-item>
                    <u-grid-item>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/huise/fengxianxinxi3.png" width="50"
                                 height="50"></u-image>
                        <view class="grid-text">司法拍卖</view>
                    </u-grid-item>
<!--                    <u-grid-item @click="go('company/sifapaimai?id='+newsList.id)">-->
<!--                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/huise/fengxianxinxi3.png" width="50"-->
<!--                                 height="50"></u-image>-->
<!--                        <view class="grid-text">司法拍卖</view>-->
<!--                    </u-grid-item>-->
                    <u-grid-item @click="go('company/xunjiapinggu?id='+newsList.id)">
                        <view class="num2"> {{newsList.inquiry}}</view>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/fengxianxinxi11.png" width="50"
                                 height="50"></u-image>
                        <view class="grid-text">询价评估</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/qingsuanxinxi?id='+newsList.id)">
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/fengxianxinxi2.png" width="50"
                                 height="50"></u-image>
                        <view class="grid-text">清算信息</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/zhishichanquanchuzhi?id='+newsList.id)">
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/fengxianxinxi4.png" width="50"
                                 height="50"></u-image>
                        <view class="grid-text">知识产权出质</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/gongshicuigao?id='+newsList.id)">
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/fengxianxinxi9.png" width="50"
                                 height="50"></u-image>
                        <view class="grid-text">公示催告</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/tudizhiya?id='+newsList.id)">
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/fengxianxinxi10.png" width="50"
                                 height="50"></u-image>
                        <view class="grid-text">土地质押</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/jianyizhuxiao?id='+newsList.id)">
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/fengxianxinxi20.png" width="50"
                                 height="50"></u-image>
                        <view class="grid-text">简易注销</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/pochanchongzheng?id='+newsList.id)">
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/fengxianxinxi5.png" width="50"
                                 height="50"></u-image>
                        <view class="grid-text">破产重整</view>
                    </u-grid-item>
                </u-grid>
            </view>
            <view class="back">
                <text class="title">企业发展</text>
                <u-grid :col="4" style="margin-top:30rpx">
                    <u-grid-item @click="go('company/rongzilicheng?id='+newsList.id)">
                        <view class="num3">4</view>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/qiyefazhan3.png" width="50" height="50"></u-image>
                        <view class="grid-text">融资历程</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/touzishijian?id='+newsList.id)">
                        <view class="num3"></view>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/qiyefazhan4.png" width="50" height="50"></u-image>
                        <view class="grid-text">投资事件</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/hexintuandui?id='+newsList.id)">
                        <view class="num3"></view>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/qiyefazhan6.png" width="50" height="50"></u-image>
                        <view class="grid-text">核心团队</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/qiyeyewu?id='+newsList.id)">
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/qiyefazhan7.png" width="50" height="50"></u-image>
                        <view class="grid-text">企业业务</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/jingpinxinxi?id='+newsList.id)">
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/qiyefazhan2.png" width="50" height="50"></u-image>
                        <view class="grid-text">竞品信息</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/touzijigou?id='+newsList.id)">
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/qiyefazhan5.png" width="50" height="50"></u-image>
                        <view class="grid-text">投资机构</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/simujijin?id='+newsList.id)">
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/qiyefazhan1.png" width="50" height="50"></u-image>
                        <view class="grid-text">私募基金</view>
                    </u-grid-item>
                </u-grid>
            </view>
            <view class="back">
                <text class="title">经营信息</text>
                <u-grid :col="4" style="margin-top:30rpx">
                    <u-grid-item @click="go('company/zhaopininfo?id='+newsList.id)">
                        <view class="num4">4</view>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/jingyingxinxi19.png" width="50" height="50"></u-image>
                        <view class="grid-text">招聘信息</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/newsyuqing?id='+newsList.id)">
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/jingyingxinxi14.png" width="50" height="50"></u-image>
                        <view class="grid-text">新闻舆情</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/xingzhengxuke')">
                        <view class="num4">{{newsList.license}}</view>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/jingyingxinxi15.png" width="50" height="50"></u-image>
                        <view class="grid-text">行政许可</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/shuiwupingji?id='+newsList.id)">
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/jingyingxinxi9.png" width="50" height="50"></u-image>
                        <view class="grid-text">税务评级</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/chouchajiancha?id='+newsList.id)">
                        <view class="num4">{{newsList.survey}}</view>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/jingyingxinxi5.png" width="50" height="50"></u-image>
                        <view class="grid-text">抽查检查</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/shuangsuijichoucha?id='+newsList.id)">
                        <view class="num4">{{newsList.stochasticresult}}</view>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/jingyingxinxi10.png" width="50" height="50"></u-image>
                        <view class="grid-text">双随机抽查</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/zizhizhengshu?id='+newsList.id)">
                        <view class="num4">{{newsList.certifications}}</view>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/jingyingxinxi11.png" width="50" height="50"></u-image>
                        <view class="grid-text">资质证书</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/zhaotoubiao?id='+newsList.id)">
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/jingyingxinxi18.png" width="50" height="50"></u-image>
                        <view class="grid-text">招投标</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/chanpinxinxi?id='+newsList.id)">
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/jingyingxinxi4.png" width="50" height="50"></u-image>
                        <view class="grid-text">产品信息</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/wxgongzhonghao?id='+newsList.id)">
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/jingyingxinxi21.png" width="50"
                                 height="50"></u-image>
                        <view class="grid-text">微信公众号</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/weibo?id='+newsList.id)">
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/jingyingxinxi12.png" width="50"
                                 height="50"></u-image>
                        <view class="grid-text">微博</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/gonggaoyanbao?id='+newsList.id)">
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/jingyingxinxi1.png" width="50"
                                 height="50"></u-image>
                        <view class="grid-text">公告研报</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/dikuaigongshi?id='+newsList.id)">
                        <view class="num4">{{newsList.plot}}</view>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/jingyingxinxi6.png" width="50"
                                 height="50"></u-image>
                        <view class="grid-text">地块公示</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/tudizhuanrang?id='+newsList.id)">
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/jingyingxinxi2.png" width="50"
                                 height="50"></u-image>
                        <view class="grid-text">土地转让</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/jckouxinyong?id='+newsList.id)">
                        <view class="num4">{{newsList.import}}</view>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/jingyingxinxi3.png" width="50"
                                 height="50"></u-image>
                        <view class="grid-text">进出口信用</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/zhaiquanxinxi?id='+newsList.id)">
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/jingyingxinxi17.png" width="50"
                                 height="50"></u-image>
                        <view class="grid-text">债券信息</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/goudixinxi?id='+newsList.id)">
                        <view class="num4">{{newsList.purchase}}</view>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/jingyingxinxi13.png" width="50"
                                 height="50"></u-image>
                        <view class="grid-text">购地信息</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/dianxinxuke?id='+newsList.id)">
                        <view class="num4">{{newsList.telecom}}</view>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/jingyingxinxi15.png" width="50"
                                 height="50"></u-image>
                        <view class="grid-text">电信许可</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/gongyingshang?id='+newsList.id)">
                        <view class="num4">{{newsList.supplier}}</view>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/jingyingxinxi7.png" width="50"
                                 height="50"></u-image>
                        <view class="grid-text">供应商</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/kehu?id='+newsList.id)">
                        <view class="num4">{{newsList.client}}</view>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/jingyingxinxi8.png" width="50"
                                 height="50"></u-image>
                        <view class="grid-text">客户</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/shangyetexu?id='+newsList.id)">
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/jingyingxinxi11.png" width="50"
                                 height="50"></u-image>
                        <view class="grid-text">商业特许经营</view>
                    </u-grid-item>

                </u-grid>
            </view>
            <view class="back">
                <text class="title">知识产权</text>
                <u-grid :col="4" style="margin-top:30rpx">
                    <u-grid-item @click="go('company/shangbiaoxinxi?id='+newsList.id)">
                        <view class="num6">{{newsList.trademark}}</view>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/zhishichanquan3.png" width="50" height="50"></u-image>
                        <view class="grid-text">商标信息</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/zhuanliinfo?id='+newsList.id)">
                        <view class="num6">{{newsList.patent}}</view>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/zhishichanquan4.png" width="50" height="50"></u-image>
                        <view class="grid-text">专利信息</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/zhuzuoquan')">
                        <view class="num6">{{newsList.copyright}}</view>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/zhishichanquan1.png" width="50" height="50"></u-image>
                        <view class="grid-text">著作权</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/wangzhanbeian?id='+newsList.id)">
                        <view class="num6">{{newsList.record}}</view>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/zhishichanquan2.png" width="50" height="50"></u-image>
                        <view class="grid-text">网站备案</view>
                    </u-grid-item>
                </u-grid>
            </view>
            <view class="back">
                <text class="title">历史信息</text>
                <u-grid :col="4" style="margin-top:30rpx">
                    <u-grid-item @click="gong(newsList.id)">
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/gaikuang (5).png" width="50" height="50"></u-image>
                        <view class="grid-text">工商信息</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/invest')">
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/qiyebeijing3.png" width="50" height="50"></u-image>
                        <view class="grid-text">历史股东</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/waitouzi?id='+newsList.id)">
                        <view class="num6"> {{newsList.foreign}}</view>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/qiyebeijing1.png" width="50" height="50"></u-image>
                        <view class="grid-text">对外投资</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/kaiting?id='+newsList.id)">
                        <view class="num7"> {{newsList.opencourt}}</view>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/fengxianxinxi15.png" width="50" height="50"></u-image>
                        <view class="grid-text">开庭公告</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/lawsus?id='+newsList.id)">
                        <view class="num6"> {{newsList.Proceedings}}</view>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/fengxianxinxi1.png" width="50" height="50"></u-image>
                        <view class="grid-text">法律诉讼</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/lawgongg?id='+newsList.id)">
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/zhishichanquan2.png" width="50" height="50"></u-image>
                        <view class="grid-text">法院公告</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/shixininfo?id='+newsList.id)">
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/zhishichanquan2.png" width="50" height="50"></u-image>
                        <view class="grid-text">失信信息</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/beiman?id='+newsList.id)">
                        <view class="num6">{{newsList.debtor}}</view>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/fengxianxinxi14.png" width="50" height="50"></u-image>
                        <view class="grid-text">被执行人</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/xianzhixiaofeiling?id='+newsList.id)">
                        <view class="num6">{{newsList.consumption}}</view>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/zhishichanquan2.png" width="50" height="50"></u-image>
                        <view class="grid-text">限制消费令</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/zhongbenanjian?id='+newsList.id)">
                        <view class="num6">{{newsList.cases}}</view>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/zhishichanquan2.png" width="50" height="50"></u-image>
                        <view class="grid-text">终本案件</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/sifaxiezhu?id='+newsList.id)">
                        <view class="num6">{{newsList.assistance}}</view>
                        <u-image mode="aspectFit" src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/zhishichanquan2.png" width="50" height="50"></u-image>
                        <view class="grid-text">司法协助</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/jingyingyichang?id='+newsList.id)">
                        <view class="num6"> {{newsList.business}}</view>
                        <u-image mode="aspectFit"
                                 src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/zhishichanquan2.png" width="50"
                                 height="50"></u-image>
                        <view class="grid-text">经营异常</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/xingzchufa?id='+newsList.id)">
                        <u-image mode="aspectFit"
                                 src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/zhishichanquan2.png" width="50"
                                 height="50"></u-image>
                        <view class="grid-text">行政处罚</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/guquanchuzhi?id='+newsList.id)">
                        <u-image mode="aspectFit"
                                 src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/zhishichanquan2.png" width="50"
                                 height="50"></u-image>
                        <view class="grid-text">股权出质</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/dongchandiya?id='+newsList.id)">
                        <view class="num6">{{newsList.mortgage}}</view>
                        <u-image mode="aspectFit"
                                 src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/zhishichanquan2.png" width="50"
                                 height="50"></u-image>
                        <view class="grid-text">动产抵押</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/qianshuigonggao?id='+newsList.id)">
                        <view class="num6"> {{newsList.arrears}}</view>
                        <u-image mode="aspectFit"
                                 src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/zhishichanquan2.png" width="50"
                                 height="50"></u-image>
                        <view class="grid-text">欠税公告</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/xingzhengxuke')">
                        <view class="num6">{{newsList.license}}</view>
                        <u-image mode="aspectFit"
                                 src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/zhishichanquan2.png" width="50"
                                 height="50"></u-image>
                        <view class="grid-text">行政许可</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/shangbiaoxinxi?id='+newsList.id)">
                        <view class="num6">{{newsList.trademark}}</view>
                        <u-image mode="aspectFit"
                                 src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/zhishichanquan2.png" width="50"
                                 height="50"></u-image>
                        <view class="grid-text">商标信息</view>
                    </u-grid-item>
                    <u-grid-item @click="go('company/wangzhanbeian?id='+newsList.id)">
                        <view class="num6">{{newsList.record}}</view>
                        <u-image mode="aspectFit"
                                 src="http://images.yiqiwang360.com/yiqicha/qyxq/caise/zhishichanquan2.png" width="50"
                                 height="50"></u-image>
                        <view class="grid-text">网站备案</view>
                    </u-grid-item>
                </u-grid>
            </view>
            <view class="cu-bar bg-white tabbar border shop goods-footer u-border-top">
                <view></view>
                <view class="action shop" @click="show = true">
                    <view class="cuIcon-favor">
                        <u-popup v-model="show" mode="center" close-icon-pos="bottom-right" :closeable="true" length="60%">
                            <view class="group">
                                <view class="title u-border-bottom">选择分组</view>
                                <view class="u-padding-left-20">
                                    <text class="u-border-bottom">+新建分组</text>
                                </view>
                                <view class="u-padding-left-20">
                                <u-radio-group v-model="value" @change="radioGroupChange" wrap="true">
                                    <u-radio
                                            @change="radioChange"
                                            v-for="(item, index) in list" :key="index"
                                            :name="item.name"
                                            :disabled="false"
                                    >
                                        {{item.name}}
                                    </u-radio>
                                </u-radio-group>
                                </view>
                            </view>

                        </u-popup>
                    </view>关注
                </view>
                <view class="action shop" @click="callPhone">
                    <view class="cuIcon-dianhua"></view>电话咨询
                </view>
                <view class="btn-group">
                    <button class="ser-btn" open-type='contact'>在线客服</button>
                </view>
            </view>
        </view>
        <view v-if="current==1">
            <view style="text-align: center;margin:50rpx 0">暂无信息</view>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                menuList: [{
                    name: '官方信息'
                }, {
                    name: '自主信息'
                }],
                list: [
                    {
                        name: '默认对手',
                        disabled: false
                    },
                    {
                        name: '竞争对手',
                        disabled: false
                    },
                    {
                        name: '供应商',
                        disabled: false
                    }
                ],
                // u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
                value: 'orange',
                current:0,
                form: {
                    name: '',
                    money: '',
                    real:'',
                    date:''
                },
                show: false,
                newsList:[],
                group:{},
                partner:[],
                partners:[],
                personnels:[]
            }
        },
        onLoad (options) {
            this.getNewList(options.id);
            this.getStorage()
            this.grouplist()
        },
        methods:{
            menuChange(index) {
                this.current = index;
            },
            radioChange(e) {
                // console.log(e);
            },
            // 选中任一radio时，由radio-group触发
            radioGroupChange(e) {
                // console.log(e);
            },
            gong(id){
                uni.navigateTo({
                    url:'/pages/index/shopDetail?id='+id
                })
            },
            year(id){
                uni.navigateTo({
                    url:'/pages/company/yearreport?id='+id
                })
            },
            //获取本地存储
            getStorage() {
                this.storage.token = uni.getStorageSync('token')
            },
            async grouplist() {
                const token=uni.getStorageSync('token')
                const {data: res} = await this.$request({
                    method: 'POST',
                    url: 'applets/groupinglist',
                    data: {
                        token: uni.getStorageSync('token')
                    }
                })
                this.group = res
                this.name=res.gname
                console.log(res)
                // if (!res.list) {
                //   this.followList = []
                //   return this.emptyShow = true
                // }
                // this.followList = res.list.map((item) => {
                //   return Object.assign({}, item, {show: false})
                // })
            },
            // 关注服务商操作
            async follow (id) {
                if (this.storage.token === '') {
                    uni.redirectTo({
                        url: '/pages/mine/login'
                    })
                    return uni.showToast({
                        title: '未登录，请先登录',
                        icon: 'none',
                        duration: 2000
                    })
                }
                const { data: res } = await this.$request({
                    url: 'applets/focus',
                    data: {
                        token: this.storage.token,
                        attention:id,
                        spid: spid
                    }
                })
                this.getShopDetail(spid)
            },
            async getNewList (id) {
                await this.$request({
                    method: 'GET',
                    data: {
                        id:id
                    },
                    url: 'applets/display'
                }).then(res=>{
                    console.log(res.data)
                    this.newsList = res.data
                    this.partner = res.data.partner
                    this.partners = res.data.partners
                    this.personnels = res.data.personnels
                    // if( this.newsList.revocation==0){
                    //     this.newsList.revocation=false
                    // }else{
                    //     this.newsList.revocation=true
                    // }
                })
                /*console.log(11)
                console.log(res)
                this.shopList = res*/
                // this.menuNum = 12 / res.data.length
            },
            goBack(){
                uni.navigateBack({
                    delta: 1
                });
            },
            // 拨打客服电话
            callPhone () {
                uni.makePhoneCall({
                    phoneNumber: '4000361717'
                })
            },
            go (path) {
                let name = path
                let nameArr = name.split('=')
                uni.navigateTo(
                    { url: '/pages/' + path }
                )
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
    page{
        padding-bottom: 100rpx;
    }
    .gray{
        color:#888888;
    }
    .red{
        color:#E75D54;
    }
    .tabs{
        text-align: center;
        background: white;
    }
    .white{
        margin-bottom: 20rpx;
        background: white;
        padding:20rpx;
        .shop{
            display: flex;
            .right{
                flex:1;
                margin-left:20rpx;
                .name{
                    font-weight: 610;
                    font-size: 30rpx;
                }
                .lv{
                    font-size: 25rpx;
                    color:#40A557;
                    background:#ECF7EF;
                    padding:7rpx;
                    border-radius: 10rpx;
                }
                .lan{
                    font-size: 25rpx;
                    color:#70AFEA;
                    background: #E9F2FB;
                    padding:7rpx;
                    border-radius: 10rpx;
                    margin:0 10rpx;
                }
                .zi{
                    font-size: 25rpx;
                    color:#9CA1E0;
                    background: #EEEEFA;
                    padding:7rpx;
                    border-radius: 10rpx;
                    margin:0 10rpx;
                }
                .lv2{
                    font-size: 25rpx;
                    color:#54C8D0;
                    background: #E8F6F9;
                    padding:7rpx;
                    border-radius: 10rpx;
                    margin:0 10rpx;
                }
            }
        }
        .intro{
            display: flex;
            align-items: center;
            .title{
                flex:1;
                margin:30rpx 40rpx 30rpx 0;
            }
        }
        .shop-bo{
            width:80%;
            margin:20rpx auto;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            .title{
                line-height:50rpx;
            }
            .bo-item{
                font-size: 25rpx;
                flex:1;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                text-align: center;
            }
        }
        .last{
            display: flex;
            align-items: center;
            .button{
                display: flex;
                align-items: center;
                color:#E33329;
                .item{
                    background:#FDE9E8;
                    margin:0 10rpx;
                    padding:13rpx 15rpx;
                    font-size: 23rpx;
                    display: flex;
                    align-items: center;
                    border-radius: 40rpx;
                    .lv{
                        font-size: 16rpx;
                        color:#37CC56;
                        border:2rpx solid #37CC56;
                        padding:2rpx;
                        border-radius: 10rpx;
                    }
                }
            }
        }
        .man{
            display: flex;
            .flex{
                margin-bottom: 20rpx;
            }
            .gao{
                color:#35C2F2;
                background: #EAF9FE !important;
            }
            .gudong{
                width:40rpx;
                display: flex;
                padding:25rpx 0;
                background: #FDE9E8;
                text-align: center;
            }
            .infor{
                background: #F8F8F8;
                margin:0 15rpx;
                padding:10rpx;
                width:280rpx;
            }
        }
    }
    .danger{
        margin-bottom: 20rpx;
        background: white;
        padding:25rpx 20rpx;
        .top{
            display: flex;
            align-items: center;
            justify-content: space-between;
            .title{
                font-size: 35rpx;
                font-weight: 640;
            }
            .level{
                color:#EBB400;
                font-size: 32rpx;
                margin-left:20rpx;
                font-weight: 620;
            }
        }
        .flex{
            margin:20rpx 0;
            align-items: center;
            font-size: 30rpx;
        }
        .con{
            display: flex;
            width:600rpx;
            .item{
                background:#F8F8F8;
                margin:0 20rpx 0 0;
                .num{
                    color:#E75D54;
                }
            }
        }
    }
    .tupu{
        margin-bottom: 20rpx;
        background: white;
        padding:20rpx;
        .item{
            display: flex;
            margin:0 0 20rpx 0;
            .title{
                width:58rpx;
                display: flex;
                background: #FDE9E8;
                color:#E75D54;
                text-align: center;
            }
            .con{
                background: #F9F9F9;
                margin:0 15rpx;
                padding:10rpx;
                width:280rpx;
                text-align: center;
            }
        }
        .item2{
            display: flex;
            margin-bottom: 20rpx;
            .title{
                width:40rpx;
                display: flex;
                background: #FDE9E8;
                text-align: center;
                color:#E75D54;
            }
            .con{
                margin:0 15rpx;
                flex:1;
                height:90rpx;
                line-height:90rpx;
                background:#FDE9E8;
                .name{
                    font-size: 30rpx;
                    margin:0 30rpx;
                }
            }
        }
    }
    .back{
        margin-bottom: 20rpx;
        background: white;
        padding:20rpx;
        .grid-text{
            margin-top: 10rpx;
        }
        .num{
            text-align: right;
            position:absolute;
            right:10rpx;
            top:10rpx;
            color:#E75D54;
        }
        .num2{
            text-align: right;
            position:absolute;
            right:10rpx;
            top:10rpx;
            color:#FEC057;
        }
        .num3{
            text-align: right;
            position:absolute;
            right:10rpx;
            top:10rpx;
            color:#1C88DF;
        }
        .num4{
            text-align: right;
            position:absolute;
            right:10rpx;
            top:10rpx;
            color:#A1CA3C;
        }
        .num5{
            text-align: right;
            position:absolute;
            right:10rpx;
            top:10rpx;
            color:#A1CA3C;
        }
        .num6{
            text-align: right;
            position:absolute;
            right:10rpx;
            top:10rpx;
            color:#867DF3;
        }
        .num7{
            text-align: right;
            position:absolute;
            right:10rpx;
            top:10rpx;
            color:#FF9848;
        }
        .flex{
            justify-content: space-between;
            align-items: center;
        }
        .title{
            font-size: 35rpx;
            font-weight: 620;
            padding:30rpx 0;
        }
    }
    .goods-footer {
        z-index:99;
        position: fixed;
        bottom: -6rpx;
        left: 0;
        right: 0;
    }
    .group{
        font-size: 26rpx;
        text-align: left;
        .title{
            padding:30rpx 0;
            text-align: center;
        }
    }
</style>