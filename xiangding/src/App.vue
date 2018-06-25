<template>
  <div id="app">
    <div class="wrap">
      <!-- <transition name='opacity'> -->
        <keep-alive>
          <router-view class='App_route' ref="App_route"></router-view>
        </keep-alive>
      <!-- </transition> -->
      <div ref="_footer">
        <myFooter/>
      </div>
      
    </div>
  </div>
</template>

<script>
import myFooter from './components/footer/footer'
import wx from 'weixin-js-sdk'
import {Toast} from 'mint-ui'
export default {
  mounted(){
    log(this.$store.state.userInfo)
    let route = this.$route
    if(route.name === 'my' || route.name === 'index' || route.name === 'hotel' || route.name === 'teamMeeting' || route.name === 'enter'){
        this._footerShow()
      }else{
        this._footerHide()
      }
    this.initShare()

  },
  components: {
    myFooter
  },
  name: 'App',
  data(){
    return {
      _footer: true
    }
  },
  methods: {
    //初始化分享设置
    initShare() {
      //不是微信端 不访问
      // if (window.localStorage.type == 5) {
      //   return;
      // }
      let that = this;
      //console.log(document.location.href);
      let _url = document.location.href;
      let json = { url: _url, "i": this.Fn.getKeyByI(), "type": this.Fn.getType() };
      //console.log("json", json);
      this.Http.post({route:'member.member.wxJsSdkConfig', data:json}).then(function(response) {
        if (response.data.result == 1) {
          that.share(response.data.data);
        } else {

        }
      }, function(response) {
        console.log(response);
      });
    },
    //组装分享设置
    share(data) {
      let that = this;
      wx.config(data.config);
      wx.ready(function() {

        let _title = "享订酒店";
        //let _link = location.protocol + '//' + location.host + location.pathname + '?i=' + that.fun.getKeyByI() + "&type=" + that.fun.getTyep() + "&mid=" + data.info.uid;
        //let _link = document.location.href + "&mid=" + data.info.uid;

        let _link = document.location.href;
        let _imgUrl = "https://www.share-hotel.cn/attachment/images/3/2018/06/glnSK2tG5g2Th5VCNl6KhBsph2nnGp.jpg";
        // let _desc = "享订酒店";
        let _desc = "享订酒店";

        // _title = data.share.title;
        // _imgUrl = data.share.icon;
        // _desc =  data.share.desc;

        wx.showOptionMenu();
        wx.onMenuShareTimeline({
          title: _title, // 分享标题
          link: _link, // 分享链接
          imgUrl: _imgUrl, // 分享图标
          path: '#'+window.location.href.split('#')[1],
          success: function() {
            // Toast("分享成功");
          },
          cancel: function() {
            // Toast("取消分享");
          }
        });
        log(1111,_link)
        wx.onMenuShareAppMessage({
          title: _title, // 分享标题
          desc: _desc, // 分享描述
          link: _link, // 分享链接
          imgUrl: _imgUrl, // 分享图标
          type: 'link', // 分享类型,music、video或link，不填默认为link
          path: '#'+window.location.href.split('#')[1],
          dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
          success: function() {
            // Toast("分享成功");
            log(99999,_link)
          },
          cancel: function() {
            // Toast("取消分享");
          }
        });
      });
    },
    _footerShow(){
      this.$refs._footer.style.display = 'block'
    },
    _footerHide(){
      this.$refs._footer.style.display = 'none'
    }
  },
  watch: {
    '$route'(to,from){
      if(to.name === 'my' || to.name === 'index' || to.name === 'hotel' || to.name === 'teamMeeting' || to.name === 'enter'){
        this._footerShow()
      }else{
        this._footerHide()
      }
    }
  }
}
</script>

<style lang='scss'>
@import 'common/css/common.scss';
@import 'common/css/swiper.min';
// @import 'static/css/lzcDate';
// @import 'static/css/mobileSelect';
@import 'static/css/mint';

@media screen and (max-width: 325px) {
    html {
        font-size: 10px;
    }
}
*{
  padding: 0;
  margin: 0;
}
ul,li{
  list-style: none;
}
img{
  border: none;
}
.noscroll{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
}
#app {
  font-family:'微软雅黑' ,Arial;
  font-size: rem(12px);
  color: #555;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  min-height: 100%;
  .wrap{
    min-height: 100%;
  }
}
.App_route{
  position: absolute;
  left: 0;
  top: 0;
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }  
}

.translate-enter-active {
  animation: translate-in .5s;
}
.translate-leave-active {
  animation: translate-in .5s reverse;
}
@keyframes translate-in {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}

  .opacity-enter-active {
    animation: opacity-in .5s;
  }
  .opacity-leave-active {
    animation: opacity-in .5s reverse;
  }
  @keyframes opacity-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
</style>
