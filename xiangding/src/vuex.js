const state = {
	userInfo: {}
}

const mutations = {
	changeInfo(state,obj){
		state.userInfo = obj
	}
}

export default {
	state,
	mutations
}