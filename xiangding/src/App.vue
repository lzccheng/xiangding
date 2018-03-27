<template>
  <div id="app">
    <router-view/>
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
</style>
