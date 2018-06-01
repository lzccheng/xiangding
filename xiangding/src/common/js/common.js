
import store from '../../vuex'
import {Toast} from 'mint-ui'
const getStyle = (obj,attr) => {
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle( obj )[attr]
}
//获取当前位置
const getLocation = (onComplete=function(){},onError=function(){})=>{
	  var map = new AMap.Map('aMap', {
	      resizeEnable: true,
	      zoom: 16
	    }),
	    geolocation = null,
	    geocoder = null

	  // 加载地理位置编码插件
	  AMap.service('AMap.Geocoder', function() { //回调函数
	    //实例化Geocoder
	    geocoder = new AMap.Geocoder({
	      city: "010" //城市，默认：“全国”
	    });
	    //TODO: 使用geocoder 对象完成相关功能
	  });
	  // 加载定位插件
	  map.plugin('AMap.Geolocation', function() {
	    // 初始化定位插件
	    geolocation = new AMap.Geolocation({
	      enableHighAccuracy: true, //是否使用高精度定位，默认:true
	      timeout: 10000, //超过10秒后停止定位，默认：无穷大
	      maximumAge: 0, //定位结果缓存0毫秒，默认：0
	      convert: true, //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
	      showButton: true, //显示定位按钮，默认：true
	      buttonPosition: 'LB', //定位按钮停靠位置，默认：'LB'，左下角
	      buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
	      showMarker: false, //定位成功后在定位到的位置显示点标记，默认：true
	      showCircle: false, //定位成功后用圆圈表示定位精度范围，默认：true
	      panToLocation: true, //定位成功后将定位到的位置作为地图中心点，默认：true
	      zoomToAccuracy: true //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
	    });
	    // 把定位插件加入地图实例
	    map.addControl(geolocation);

	    // 添加地图全局定位事件
	    AMap.event.addListener(geolocation, 'complete', onComplete); //返回定位信息
	    AMap.event.addListener(geolocation, 'error', onError); //返回定位出错信息

	    // 调用定位
	    geolocation.getCurrentPosition();
	  });
}
//根据地址获取经纬度
const getLongAndLat = (addr,success,error)=>{
	let addrArr = addr.split('/')
	AMap.service('AMap.Geocoder',function(){//回调函数
    	//实例化Geocoder
	    var geocoder = new AMap.Geocoder({
	        city: addrArr[1]//城市，默认：“全国”
	    });
	    //TODO: 使用geocoder 对象完成相关功能
	    geocoder.getLocation(addrArr.join(''), function(status, result) {
		    if (status === 'complete' && result.info === 'OK') {
		        //TODO:获得了有效经纬度，可以做一些展示工作
		        //比如在获得的经纬度上打上一个Marker
		        success&&success(result)
		    }else{
		        //获取经纬度失败
		        error&&error(result)
		    }
		});
	})
    
}

const isWeiXin = ()=>{
	var ua = window.navigator.userAgent.toLowerCase();
	if (ua.match(/MicroMessenger/i) == 'micromessenger') {
		return true;
	} else {
		return false;
	}
}
const getType = ()=>{
	var ua = window.navigator.userAgent.toLowerCase();
	if (ua.match(/MicroMessenger/i) == 'micromessenger') {
		return "1";
	} else{
		return "5";
	}
}
const getKey = name =>{
	return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null;
}
const getKeyByI = ()=>{
	return 3
}
const getUrl = obj =>{
	let i = getKeyByI()
	let type = isWeiXin()?'1':'5'
	let mid = store.state.userInfo?store.state.userInfo.uid:''
	let query = obj.query?{i,type,mid,...obj.query}:{i,type,mid}
	return {path: obj.path,query}
}
const haveClass = (dom,className)=>{
	let domClass = dom.getAttribute('class')
	let bool = false
	let classArr = domClass?domClass.split(' '):[]
	for(let i=0;i<classArr.length;i++){
		if(classArr[i] === className){
			bool = true
			break
		}
	}
	return bool
}
const addClass = (dom,className)=>{
	if(dom.getAttribute('class')){
		!haveClass(dom,className)&&dom.setAttribute('class',dom.getAttribute('class')+' '+className)
	}else{
		dom.setAttribute('class',className)
	}
}
const removeClass = (dom,className)=>{
	if(dom.getAttribute('class')){
		let arr = dom.getAttribute('class').split(' ')
		let newArr = []
		for(let i = 0;i < arr.length;i++){
			if(arr[i] !== className){
				newArr.push(arr[i])
			}
		}
		dom.setAttribute('class',newArr.join(' '))
	}
}
const zero = value=>(Number(value)>9?value: '0'+value)
const base64_encode = stringToEncode => {
  // eslint-disable-line camelcase
  //  discuss at: http://locutus.io/php/base64_encode/
  // original by: Tyler Akins (http://rumkin.com)
  // improved by: Bayron Guevara
  // improved by: Thunder.m
  // improved by: Kevin van Zonneveld (http://kvz.io)
  // improved by: Kevin van Zonneveld (http://kvz.io)
  // improved by: Rafał Kukawski (http://blog.kukawski.pl)
  // bugfixed by: Pellentesque Malesuada
  //   example 1: base64_encode('Kevin van Zonneveld')
  //   returns 1: 'S2V2aW4gdmFuIFpvbm5ldmVsZA=='
  //   example 2: base64_encode('a')
  //   returns 2: 'YQ=='
  //   example 3: base64_encode('✓ à la mode')
  //   returns 3: '4pyTIMOgIGxhIG1vZGU='

  if (typeof window !== 'undefined') {
    if (typeof window.btoa !== 'undefined') {
      return window.btoa(decodeURIComponent(encodeURIComponent(stringToEncode)))
    }
  } else {
    return new Buffer(stringToEncode).toString('base64')
  }

  var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
  var o1
  var o2
  var o3
  var h1
  var h2
  var h3
  var h4
  var bits
  var i = 0
  var ac = 0
  var enc = ''
  var tmpArr = []

  if (!stringToEncode) {
    return stringToEncode
  }

  stringToEncode = decodeURIComponent(encodeURIComponent(stringToEncode))

  do {
    // pack three octets into four hexets
    o1 = stringToEncode.charCodeAt(i++)
    o2 = stringToEncode.charCodeAt(i++)
    o3 = stringToEncode.charCodeAt(i++)

    bits = o1 << 16 | o2 << 8 | o3

    h1 = bits >> 18 & 0x3f
    h2 = bits >> 12 & 0x3f
    h3 = bits >> 6 & 0x3f
    h4 = bits & 0x3f

    // use hexets to index into b64, and append result to encoded string
    tmpArr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4)
  } while (i < stringToEncode.length)

  enc = tmpArr.join('')

  var r = stringToEncode.length % 3

  return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3)
}
const checkPhone = (value)=>{
	return /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/.test(value)
}
const checkId = (value)=>{
	return /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/.test(value)
}
const checkFixedPhone = (value)=>{
	return /^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/.test(value)
}
const checkCredit= (value)=>{
	return /^([1-9]{1})(\d{14}|\d{18})$/.test(value)
}
const checkPassword= (value)=>{
	return /^([A-Z]|[a-z]|[0-9]|[\`\-\=\[\];\,\./\~\!\@\#\$\%\^\*\(\)_\+\}\{:\?]){6,20}$/.test(value)
}
//^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$

const checkEmail = (value)=>{
	return /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(value)
}
const tips = value =>{
	Toast({
		message: value,
		position: 'top'
	})
}
export default {
	getStyle,
	getLocation,
	getLongAndLat,
	checkPhone,
	checkId,
	checkFixedPhone,
	checkCredit,
	checkPassword,
	checkEmail,
	addClass,
	removeClass,
	haveClass,
	zero,
	base64_encode,
	isWeiXin,
	getUrl,
	getKey,
	getKeyByI,
	getType,
	tips
}