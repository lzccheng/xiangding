import axios from 'axios'
import Fn from './common'
import {Indicator} from 'mint-ui'
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
		let mid = Fn.getKey('mid')
		let params = obj.params?obj.params : {}
		let config = obj.config?obj.config : {}
		let baseUrl = obj.baseUrl?obj.baseUrl:'/addons/yun_shop/api.php?'
		baseUrl += 'i='+i+'&type='+type
		if(mid){
			baseUrl += '&mid=' + mid + '&route='+ obj.route
		}else{
			baseUrl += '&route='+ obj.route
		}
		Indicator.open('数据加载中...')
		return new Promise(function(resolve,reject){
			axios.get(baseUrl,{params},config).then(res=>{
				Indicator.close()
				if(res.data.result == 0 && res.data.data.login_status != undefined && res.data.data.login_status == 0){
					window.location.href = res.data.data.login_url + '&yz_redirect=' + Fn.base64_encode(document.location.href+'?') + "&mid=" + res.data.data.mid
					return 
				}
				resolve(res)
			},err=>{
				Indicator.close()
				reject(err)
			})
		})
	},
	post(obj){
		let i = Fn.getKeyByI()
		let type = Fn.getType()
		let mid = Fn.getKey('mid')
		let config = obj.config?obj.config : {}
		let baseUrl = obj.baseUrl?obj.baseUrl:'/addons/yun_shop/api.php?'
		baseUrl += 'i='+i+'&type='+type
		if(mid){
			baseUrl += '&mid=' + mid + '&route='+ obj.route
		}else{
			baseUrl += '&route='+ obj.route
		}
		Indicator.open('数据加载中...')
		return new Promise(function(resolve,reject){
			axios.post(baseUrl,obj.data,config).then(res=>{
				Indicator.close()
				if(res.data.result == 0 && res.data.data.login_status != undefined && res.data.data.login_status == 0){
					window.location.href = res.data.data.login_url + '&yz_redirect=' + Fn.base64_encode(document.location.href+'?') + "&mid=" + res.data.data.mid
					return 
				}
				resolve(res)
			},err=>{
				Indicator.close()
				reject(err)
			})
		})
	}
}
