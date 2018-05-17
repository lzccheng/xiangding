import axios from 'axios'
let getEreaData = (success=()=>{},error=()=>{})=>{
	axios.get('https://www.share-hotel.cn/addons/share/img/ereaPhp/erea.php').then(success,error)
}

export default {
	getEreaData
}