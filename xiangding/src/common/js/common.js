
let getStyle = (obj,attr) => {
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle( obj )[attr]
}
export default {
	getStyle
}