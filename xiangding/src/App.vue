<template>
  <div id="app">
    <div class="wrap">
      <!-- <transition name='opacity'> -->
        <keep-alive>
          <router-view class='App_route' ref="App_route"></router-view>
        </keep-alive>
      <!-- </transition> -->
      <div ref="_footer">
        <myFooter :baseURL='$baseURL'/>
      </div>
      
    </div>
  </div>
</template>

<script>
import myFooter from './components/footer/footer'
export default {
  mounted(){
    let route = this.$route
    if(route.name === 'my' || route.name === 'index' || route.name === 'hotel' || route.name === 'teamMeeting' || route.name === 'enter'){
        this._footerShow()
      }else{
        this._footerHide()
      }
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
    _footerShow(){
      this.$refs._footer.style.display = 'block'
    },
    _footerHide(){
      this.$refs._footer.style.display = 'none'
    }
  },
  watch: {
    '$route'(to,from){
      document.body.scrollTop? document.body.scrollTop = 0:document.documentElement.scrollTop = 0
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
@import 'static/css/lzcDate';
@import 'static/css/mobileSelect';

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
