<template>
  <div id="app">
    <div class="wrap">
      <transition name='bounce'>
        <keep-alive>
          <router-view class='App_route'></router-view>
        </keep-alive>
      </transition>
      <myFooter/>
    </div>
  </div>
</template>

<script>
import myFooter from './components/footer/footer'
export default {
  components: {
    myFooter
  },
  name: 'App'
}
</script>

<style lang='scss'>
@import 'common/css/common.scss';
@import 'common/css/swiper.min';

*{
  padding: 0;
  margin: 0;
}

ul,li{
  list-style: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: rem(12px);
  color: #555;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
}
.App_route{
  position: absolute;
  left: 0;
  top: 0;
  padding-bottom: rem(60px);
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
</style>
