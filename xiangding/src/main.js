// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Element from 'element-ui'
import Vuex from 'vuex'
import Vuexjs from './vuex'

// axios.defaults.baseURL = 'locahost:8080'
Vue.prototype.$axios = axios
Vue.prototype.$baseURL = '/addons/xiangding/dist'
Vue.config.productionTip = false

Vue.use(Element)
Vue.use(Vuex)

const store = new Vuex.Store(Vuexjs)

import './mockjs/mock'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
