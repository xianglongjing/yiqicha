<script>
export default {
  onLaunch: function () {
    // console.log('App Launch')
    // #ifdef APP-PLUS
    plus.runtime.getProperty(plus.runtime.appid, function (widgetInfo) {
      // console.log('version:'+widgetInfo.version+'-name:'+widgetInfo.name)
      uni.request({
        url: 'http://v5.yiqiwang360.com/api/versions',
        data: {
          version: widgetInfo.version,
          name: widgetInfo.name
        },
        success: (result) => {
          var data = result.data.data;
          // console.log(data)
          uni.showToast({
            title: data
          })
          var down = ''
          if (data.wgtUrl === '') {
            down = data.pkgUrl
          } else {
            down = data.wgtUrl
          }
          if (data.update && down) {
            uni.downloadFile({
              url: down,
              success: (downloadResult) => {
                // console.log(downloadResult)
                if (downloadResult.statusCode === 200) {
                  plus.runtime.install(downloadResult.tempFilePath, {
                    force: false
                  }, function () {
                    console.log('install success...');
                    plus.runtime.restart();
                  }, function (e) {
                    // console.log(e)
                    console.error('install fail...');
                  });
                }
              }
            });
          }
        }
      });
    });
    // #endif
  },
  onShow: function () {
    // console.log('App Show')
  },
  onHide: function () {
    // console.log('App Hide')
  }
}
</script>

<style lang="scss">
@import "colorui/main.css";
@import "colorui/icon.css";
@import "uview-ui/index.scss";
page {
  background-color: #fff;
}
    .inline-block{
        display: inline-block;
    }
.navbar-icon{
    height: 40rpx;
    width: 40rpx;
    margin-right: 4rpx;
    align-self:center

}
.navbar-text{
    font-size: 26rpx;
    align-self:center
}
.yiqibao{
    padding: 10rpx 20rpx;
    margin: 0 10rpx 20rpx;
    .bao-items{
        display: flex;
        .title-icon{
            width: 140rpx;
            padding-left: 20rpx;
            image{
                vertical-align: text-top;
                height: 30rpx;
                width: 100rpx;
                margin-right: 20rpx;
            }
        }
        .cuIcon-right{
            width: 40rpx;
            color: #fd5123;
        }
        .item{
            flex: 1;
            margin:0 15rpx;
            display:inline-block;
            text{
                font-size: 24rpx;
                color:#fd5123;
                line-height: 30rpx;
            }
            image{
                margin-right: 2rpx;
                vertical-align: bottom;
                width:38rpx;
                height:30rpx;
            }
        }
    }
}
.tool-items{
    .u-dropdown__menu{
        padding-right: 280rpx;
    }
}
    .uni-navbar--fixed{
        z-index: 990!important;
    }

</style>
