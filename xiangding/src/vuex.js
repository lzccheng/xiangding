import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
	userInfo: {},
	hotelInfo: {}
}

const mutations = {
	changeInfo(state,obj){
		state.userInfo = obj
	},
	changeHotel(state,obj){
		state.hotelInfo = obj
	}
}
const store = new Vuex.Store({
	state,
	mutations
})
export default store