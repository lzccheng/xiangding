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

const store = new Vuex.Store(Vuexjs)

if(Fn.isWeiXin()){
	window.isWeiXin = 1
}
router.beforeEach((to,from,next)=>{
	if(window.isWeiXin){
		if(!window.Login){
			axios.get('?i=3&c=entry&do=shop&m=yun_shop&route=member.member.getUserInfo').then(res=>{
				if(res.data.data.login_url){
					window.location.href = res.data.data.login_url + '&yz_redirect=' + Fn.base64_encode(window.location.href+'?')
				}else{
					console.log('login success')
					window.Login = 1
					store.commit('changeInfo',res.data.data)
					console.log(res.data)
				}
			},err=>{
				console.log(err)
			})
		}
	}
	
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
