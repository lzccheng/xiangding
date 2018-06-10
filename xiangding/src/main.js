// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Element from 'element-ui'
import store from './vuex'
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
window.log = console.log
Vue.config.productionTip = false

Vue.use(Element)


Http.get({route:'member.member.getUserInfo'}).then(res=>{
	window.localStorage.setItem('userInfo',res.data.data.uid)
	store.commit('changeInfo',res.data.data)
    let str = window.location.href
    let a = '&'
    if(str.split('#')[1].indexOf('?') === -1){
      a = '?'
    }
	window.location.href = window.location.href + a + 'mid=' + store.state.userInfo.uid
})
router.beforeEach((to,from,next)=>{
	next()
})

Vue.component('Header',Header)



import './mockjs/api'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  store: store,
  components: { App: App },
  template: '<App/>'
})
