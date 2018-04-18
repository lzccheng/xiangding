// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Element from 'element-ui'
import Vuex from 'vuex'
import Vuexjs from './vuex'
import Header from './components/header/header'


// axios.defaults.baseURL = '/api/'
Vue.prototype.$axios = axios
Vue.prototype.$baseURL = '/addons/xiangding/dist'
Vue.config.productionTip = false

Vue.use(Element)
Vue.use(Vuex)

Vue.component('Header',Header)

const store = new Vuex.Store(Vuexjs)

import './mockjs/api'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
