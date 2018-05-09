
let getStyle = (obj,attr) => {
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle( obj )[attr]
}
let getLocation = (onComplete=function(){},onError=function(){})=>{
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
let haveClass = (dom,className)=>{
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
let addClass = (dom,className)=>{
	if(dom.getAttribute('class')){
		!haveClass(dom,className)&&dom.setAttribute('class',dom.getAttribute('class')+' '+className)
	}else{
		dom.setAttribute('class',className)
	}
}
let removeClass = (dom,className)=>{
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
let haveClass = (dom,className)=>{
	let oldClass = dom.getAttribute('class')
	let classArr = oldClass?oldClass.split(' '):[]
	let bool = false
	for(let i=0;i<classArr.length;i++){
		if(classArr[i] === className){
			bool = true
			break
		}
	}
	return bool
}
let zero = value=>(Number(value)>9?value: '0'+value)
let checkPhone = (value)=>{
	return /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/.test(value)
}
let checkId = (value)=>{
	return /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/.test(value)
}
let checkFixedPhone = (value)=>{
	return /^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/.test(value)
}
let checkCredit= (value)=>{
	return /^([1-9]{1})(\d{14}|\d{18})$/.test(value)
}
let checkPassword= (value)=>{
	return /^([A-Z]|[a-z]|[0-9]|[\`\-\=\[\];\,\./\~\!\@\#\$\%\^\*\(\)_\+\}\{:\?]){6,20}$/.test(value)
}
//([A-Z]|[a-z]|[0-9]|[`-=[];,./~!@#$%^*()_+}{:?]){6,20}$
export default {
	getStyle,
	getLocation,
	checkPhone,
	checkId,
	checkFixedPhone,
	checkCredit,
	checkPassword,
	addClass,
	removeClass,
	haveClass,
	zero
}