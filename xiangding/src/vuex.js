import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
	userInfo: {}
}

const mutations = {
	changeInfo(state,obj){
		state.userInfo = obj
	}
}
const store = new Vuex.Store({
	state,
	mutations
})
export default store