import axios from 'axios'
import Fn from './common'
let getEreaData = (success=()=>{},error=()=>{})=>{
	axios.get('https://www.share-hotel.cn/addons/share/img/ereaPhp/erea.php').then(success,error)
}
// let get = new Promise((success,error)=>{
// 	axios.get()
// })
export default {
	getEreaData,
	get(url,params,BUrl){
		let i = Fn.getKeyByI()
		let type = Fn.getType()
		let mid = Fn.getKey('mid')
		let baseUrl = BUrl?BUrl:'addons/yun_shop/api.php?'
		baseUrl += 'i='+i+'&type='+type
		// axios.get(baseUrl,params).then(success,error)
	}
}