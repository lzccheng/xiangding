import axios from 'axios'
import Fn from './common'
import {Indicator} from 'mint-ui'
import store from '../../vuex'
let getEreaData = (success=()=>{},error=()=>{})=>{
	axios.get('https://www.share-hotel.cn/addons/share/img/ereaPhp/erea.php').then(success,error)
}
// let get = new Promise((success,error)=>{
// 	axios.get()
// })

export default {
	getEreaData,
	get(obj){
		let i = Fn.getKeyByI()
		let type = Fn.getType()
		let mid = store.state.userInfo?store.state.userInfo.uid:''
		let route = obj.route?obj.route:''
		let params = obj.params?{i,type,mid,route,...obj.params} : {i,type,mid,route}
		let config = obj.config?obj.config : {}
		let baseUrl = obj.baseUrl?obj.baseUrl:'/addons/yun_shop/api.php?'
		// baseUrl += 'i='+i+'&type='+type
		// if(mid){
		// 	baseUrl += '&mid=' + mid + '&route='+ obj.route
		// }else{
		// 	baseUrl += '&route='+ obj.route
		// }
		if(obj.msg){
			Indicator.open(obj.msg)
		}
		return new Promise(function(resolve,reject){
			axios.get(baseUrl,{params},{...config}).then(res=>{
				if(obj.msg){
					Indicator.close()
				}
				if(typeof res.data === 'string'){
					Fn.tips('数据加载出错！')
				}
				if(res.data.result == 0 && res.data.data.login_status != undefined && res.data.data.login_status == 0){
					// return console.log(res.data.data.login_url)
					window.location.href = res.data.data.login_url + '&yz_redirect=' + Fn.base64_encode(document.location.href+'?') + "&mid=" + Fn.getKey('mid')
					return 
				}
				resolve(res)
			},err=>{
				if(obj.msg){
					Indicator.close()
				}
				Fn.tips('数据加载出错！')
				reject(err)
			})
		})
	},
	post(obj){
		let i = Fn.getKeyByI()
		let type = Fn.getType()
		let mid = store.state.userInfo?store.state.userInfo.uid:''
		let data = obj.data?{i,type,mid,...obj.data}:{i,type,mid}
		let config = obj.config?obj.config : {}
		let baseUrl = obj.baseUrl?obj.baseUrl:'/addons/yun_shop/api.php?'
		baseUrl += 'i='+i+'&type='+type
		if(mid){
			baseUrl += '&mid=' + mid + '&route='+ obj.route
		}else{
			baseUrl += '&route='+ obj.route
		}
		if(obj.msg){
			Indicator.open(obj.msg)
		}
		return new Promise(function(resolve,reject){
			axios.post(baseUrl,{...data},{...config}).then(res=>{
				if(obj.msg){
					Indicator.close()
				}
				if(typeof res.data === 'string'){
					Fn.tips('数据加载出错！')
				}
				if(res.data.result == 0 && res.data.data.login_status != undefined && res.data.data.login_status == 0){
					window.location.href = res.data.data.login_url + '&yz_redirect=' + Fn.base64_encode(document.location.href+'?') + "&mid=" + Fn.getKey('mid')
					return 
				}
				resolve(res)
			},err=>{
				if(obj.msg){
					Indicator.close()
				}
				Fn.tips('数据加载出错！')
				reject(err)
			})
		})
	},
	imgUpload(dom,obj){
		let i = Fn.getKeyByI()
		let type = Fn.getType()
		let mid = store.state.userInfo?store.state.userInfo.uid:''
		let formData = new FormData()
		formData.append('file',dom.files[0])
		return new Promise(function(resolve,reject){
			if(obj.msg){
				Indicator.open(obj.msg)
			}
			axios({url:'/addons/yun_shop/api.php?i='+i+'&c=entry&do=shop&type='+type+'&m=yun_shop&route=plugin.store-cashier.frontend.store.store.upload',method:'post',data:formData,processData:false,}).then(res=>{
				if(obj.msg){
					Indicator.close()
				}
				if(typeof res.data === 'string'){
					Fn.tips('数据加载出错！')
				}
				if(res.data.result == 0 && res.data.data.login_status != undefined && res.data.data.login_status == 0){
					window.location.href = res.data.data.login_url + '&yz_redirect=' + Fn.base64_encode(document.location.href+'?') + "&mid=" + res.data.data.mid
					return 
				}
				resolve(res)
			},err=>{
				if(obj.msg){
					Indicator.close()
				}
				Fn.tips('数据加载出错！')
				reject(err)
			})
		})
	}
}
