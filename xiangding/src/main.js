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
import Fn from './common/js/common'
import Http from './common/js/http'
import 'core-js/fn/object/define-properties'
import 'core-js/fn/object/define-property'
//static
// import './static/js/ereaPluginData'
import './static/js/lzcDate'
import './static/js/mobileSelect.min'


axios.defaults.baseURL = process.env.API_ROOT
Vue.prototype.$axios = axios
Vue.prototype.Fn = Fn
Vue.prototype.Http = Http
Vue.prototype.baseUrl = 'addons/yun_shop/api.php?'

Vue.config.productionTip = false

Vue.use(Element)
Vue.use(Vuex)

Vue.component('Header',Header)

const store = new Vuex.Store(Vuexjs)

import './mockjs/api'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  store: store,
  components: { App: App },
  template: '<App/>'
})
