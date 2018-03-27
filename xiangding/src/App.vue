<template>
  <div id="app">
    <transition name='bounce'>
      <keep-alive>
        <router-view class='App_route'></router-view>
      </keep-alive>
    </transition>
    <myFooter/>
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

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: rem(12px);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
</style>
