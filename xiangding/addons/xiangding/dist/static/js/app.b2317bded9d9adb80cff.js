webpackJsonp([1],{"0YaX":function(t,a){},"3CfE":function(t,a){},"7cfn":function(t,a){},"7mYr":function(t,a){},A9Fa:function(t,a){},NHnr:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=s("7+uW"),e={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"box"},t._l(t.navItem,function(a,i){return s("router-link",{key:i,staticClass:"route",attrs:{tag:"div",to:a.url}},[s("div",{on:{click:function(a){t.Nav(i)}}},[s("p",{class:{color:t.indexData==i}},[s("i",{class:a.class})]),t._v(" "),s("p",{class:{color:t.indexData==i}},[t._v(t._s(a.name))])])])}))},staticRenderFns:[]};var n={components:{myFooter:s("VU/8")({data:function(){return{navItem:[{name:"首页",class:"fa fa-home",url:"/"},{name:"酒店",class:"fa fa-building",url:"/hotel"},{name:"团队会议",class:"fas fa-comment-dots",url:"/teamMeeting"},{name:"入驻",class:"fas fa-user-plus",url:"/enter"},{name:"我的",class:"fa fa-user",url:"/my"}],indexData:0}},methods:{Nav:function(t){this.indexData=t}}},e,!1,function(t){s("gieD")},"data-v-40194ba0",null).exports},name:"App"},c={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"wrap"},[a("transition",{attrs:{name:"translate"}},[a("keep-alive",[a("router-view",{staticClass:"App_route"})],1)],1),this._v(" "),a("myFooter",{attrs:{baseURL:this.$baseURL}})],1)])},staticRenderFns:[]};var r=s("VU/8")(n,c,!1,function(t){s("0YaX")},null,null).exports,l=s("/ocq"),_=s("DNVT"),v={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"box"},this._l(Number(this.len),function(t){return a("div",{staticClass:"item"},[a("img",{attrs:{src:s("pAhM")}})])}))},staticRenderFns:[]};var p=s("VU/8")({props:["len"]},v,!1,function(t){s("x74q")},"data-v-7a600f6e",null).exports,o={components:{star:p},mounted:function(){var t=this;this.$axios({url:"/api/bannerData",method:"get",data:{id:123}}).then(function(a){t.arrItem=a.data,setTimeout(function(){new _.a(".swiper-container",{loop:!0,autoplay:!0})},100)}).catch(function(t){console.log(t)}),this.$axios({url:"/api/hotelData",method:"get"}).then(function(a){t.hotel=a.data}).catch(function(t){console.log(t)})},data:function(){return{arrItem:[],hotel:[]}}},m={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"box"},[s("div",{staticClass:"banner"},[s("div",{staticClass:"swiper-container"},[s("div",{staticClass:"swiper-wrapper"},t._l(t.arrItem,function(t,a){return s("div",{key:a,staticClass:"swiper-slide"},[s("router-link",{attrs:{to:{path:"/hotelDetail",query:{id:t.id}},tag:"div"}},[s("div",{staticClass:"iSlide"},[s("img",{staticClass:"img",attrs:{src:t.imgUrl}})])])],1)}))])]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"near"},[s("p",{staticClass:"title"},[t._v("附近推荐酒店")]),t._v(" "),t._l(t.hotel,function(a,i){return s("div",{key:i,staticClass:"hotelRoom"},[s("router-link",{attrs:{to:{path:"/hotelDetail",query:{id:a.id}},tag:"div"}},[s("img",{attrs:{src:a.imgUrl}}),t._v(" "),s("div",[s("p",{staticClass:"min_title"},[s("span",{staticClass:"one"},[t._v(t._s(a.name)),s("star",{attrs:{len:a.star}})],1)]),t._v(" "),s("p",[s("span",[t._v(t._s(a.area)+"  /  "+t._s(a.room_total)+"间房")]),t._v(" "),s("span",{staticClass:"min_price"},[t._v("￥"+t._s(a.min_price)+"起")])])])])],1)})],2)])},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"msg"},[s("ul",[s("li",[s("div",{staticClass:"map"},[s("span",{staticClass:"_right"},[s("i",{staticClass:"fas fa-map-marker-alt"})]),t._v(" "),s("span",[t._v("广州")]),t._v(" "),s("span",{staticClass:"_right"},[s("i",{staticClass:"fas fa-angle-right"})])]),t._v(" "),s("p",{staticClass:"local"},[s("span",[s("i",{staticClass:"fa fa-crosshairs"})]),s("br"),t._v(" "),s("span",[t._v("我的位置")])])]),t._v(" "),s("li",[s("div",{staticClass:"date"},[s("div",{staticClass:"time"},[s("p",[s("span",{staticClass:"text"},[t._v("入住")]),s("br")]),t._v(" "),s("p",[s("span",{staticClass:"day"},[t._v("06")])]),s("p",[s("i",{staticClass:"far fa-calendar-alt"}),t._v(" "),s("span",[t._v("02月")]),t._v(" "),s("span",[t._v("周二")])]),t._v(" "),s("p")]),t._v(" "),s("div",{staticClass:"time"},[s("p",[s("span",{staticClass:"text"},[t._v("退房")]),s("br")]),t._v(" "),s("p",[s("span",{staticClass:"day"},[t._v("10")])]),s("p",[s("i",{staticClass:"far fa-calendar-alt"}),t._v(" "),s("span",[t._v("02月")]),t._v(" "),s("span",[t._v("周五")])]),t._v(" "),s("p")])]),t._v(" "),s("div",{staticClass:"total",staticStyle:{float:"right",color:"#aaa","padding-top":"20px","font-size":"16px"}},[s("span",[t._v("4晚")]),t._v(" "),s("i",{staticClass:"fas fa-angle-right"})])]),t._v(" "),s("li",[s("div",{staticClass:"select"},[s("span",[s("i",{staticClass:"fas fa-search-plus"})]),t._v(" "),s("span",[t._v("星级/类型/价格/设备")]),t._v(" "),s("span",{staticClass:"angle"},[s("i",{staticClass:"fas fa-angle-right"})])])])]),t._v(" "),s("div",{staticClass:"button"},[s("button",[t._v("查找酒店")])])])}]};var d=s("VU/8")(o,m,!1,function(t){s("7mYr")},"data-v-50700155",null).exports,u={mounted:function(){var t=this;this.$axios({url:"/api/hotel"}).then(function(a){t.hotel=a.data})},components:{star:p},data:function(){return{hotel:[]}}},h={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"box"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"hotel"},t._l(t.hotel,function(a,i){return s("div",{key:i,staticClass:"hotelItem"},[s("router-link",{attrs:{to:{path:"/hotelDetail",query:{id:a.id}},tag:"div"}},[s("div",{staticClass:"img"},[s("img",{attrs:{src:a.imgUrl}})]),t._v(" "),s("div",{staticClass:"msg"},[s("span",{staticClass:"min_title"},[t._v(t._s(a.name)),s("star",{attrs:{len:a.star}})],1),t._v(" "),s("span",[t._v("距市中心"+t._s(a.distance)+"公里 /  "+t._s(a.city[0])+"、"+t._s(a.city[1]))]),t._v(" "),s("p",[s("span",[t._v("最大房间："+t._s(a.max_room_erea)+"m"),s("sup",[t._v("2")])]),t._v(" "),s("span",{staticClass:"max"},[t._v("    最多容纳："+t._s(a.max_people)+"人")])]),t._v(" "),s("span",[t._v("总房间："+t._s(a.room_total)+"间")]),t._v(" "),s("span",{staticClass:"_right"},[t._v("￥"+t._s(a.min_price)+"起")])])])],1)}))])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"header"},[a("div",{staticClass:"local"},[a("span",[this._v("广州")]),this._v(" "),a("span",[a("i",{staticClass:"fas fa-map-marker-alt"})])]),this._v(" "),a("div",{staticClass:"input"},[a("input",{attrs:{type:"text",placeholder:"酒店搜索/关键字"}}),this._v(" "),a("span",[a("i",{staticClass:"fas fa-search"})])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"select"},[s("ul",[s("li",[s("span",[t._v("不限位置")]),t._v(" "),s("span",[s("i",{staticClass:"fas fa-angle-down"})])]),t._v(" "),s("li",[s("span",[t._v("推荐排序")]),t._v(" "),s("span",[s("i",{staticClass:"fas fa-angle-down"})])]),t._v(" "),s("li",[s("span",[t._v("筛选")]),t._v(" "),s("span",[s("i",{staticClass:"fas fa-angle-down"})])])])])}]};var f=s("VU/8")(u,h,!1,function(t){s("Qo48")},"data-v-11ccb15f",null).exports,C={components:{},mounted:function(){setTimeout(function(){new _.a(".swiper-container",{autoplay:!0,loop:!0})},100),this.getData()},data:function(){return{id:0,data:{},imgList:[],tip:[],provide:[],address:"",distance:"",near:[],room:[]}},methods:{getData:function(){var t=this;this.$axios({url:"/api/hotelDetail",method:"get",data:{id:this.$route.query.id}}).then(function(a){t.id=a.data.id?a.data.id:0,t.data=a.data,t.imgList=a.data.hotelDetail.imgList,t.tip=a.data.hotelDetail.tip,t.provide=a.data.hotelDetail.provide,t.address=a.data.hotelDetail.address,t.distance=a.data.hotelDetail.distance,t.near=a.data.hotelDetail.near,t.room=a.data.hotelDetail.room}).catch(function(t){console.log(t)})}},watch:{$route:function(t,a){"hotelDetail"==t.name&&(console.log("route"),this.getData())}}},g={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"box"},[s("div",{staticClass:"banner"},[s("div",{staticClass:"swiper-container"},[s("div",{staticClass:"swiper-wrapper"},t._l(t.imgList,function(t,a){return s("div",{key:a,staticClass:"swiper-slide"},[s("img",{attrs:{src:t}})])}))]),t._v(" "),t._m(0)]),t._v(" "),s("div",{staticClass:"msg"},[t._l(t.tip,function(a,i){return s("p",{key:i,staticClass:"tip"},[s("span",[t._v(t._s(a))])])}),t._v(" "),s("p",{staticClass:"provide"},t._l(t.provide,function(a,i){return a.isHave?s("span",{key:i},[s("i",{class:a.icon}),t._v(" "+t._s(a.name))]):t._e()})),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"position"},[t._m(2),t._v(" "),s("div",{staticClass:"distance"},[s("p",[t._v(t._s(t.address))]),t._v(" "),s("p",[t._v("距离"+t._s(t.distance)+"km，附近有 "),t._l(t.near,function(a,i){return s("span",{key:i},[t._v(t._s(a)),i!==t.near.length-1?s("span",[t._v("、")]):t._e()])})],2)])])],2),t._v(" "),s("div",{staticClass:"room"},[t._m(3),t._v(" "),s("div",{staticClass:"massage"},t._l(t.room,function(a,i){return s("div",{key:i,staticClass:"rooms"},[s("div",[s("img",{attrs:{src:a.imgUrl}})]),t._v(" "),s("div",{staticClass:"title"},[s("p",[t._v(t._s(a.name))]),t._v(" "),s("p",[t._v(t._s(a.area)+"m "),s("sup",[t._v("2")]),t._v(" / "),s("span",[t._v(t._s(a.bed))]),t._v("m 床")])]),t._v(" "),s("div",{staticClass:"price"},[s("p",[t._v("￥"+t._s(a.price)+"元")]),t._v(" "),s("p",[s("router-link",{attrs:{tag:"button",to:{path:"/hotelDetail/hotelSelect"}}},[t._v("订房")])],1)])])}))])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"hearts"},[a("i",{staticClass:"fas fa-heart"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"talk"},[a("i",{staticClass:"fas fa-comment-dots"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"icon"},[a("span",[a("i",{staticClass:"fas fa-map-marker-alt"})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"time"},[s("div",[s("p",[t._v("入住")]),t._v(" "),s("p",[s("span",[t._v("01-29")]),t._v(" "),s("span",[t._v("后天")])])]),t._v(" "),s("div",[s("span",[t._v("共一天")])]),t._v(" "),s("div",[s("p",[t._v("退房")]),t._v(" "),s("p",[s("span",[t._v("01-30")]),t._v(" "),s("span",[t._v("大后天")])])])])}]};var b=s("VU/8")(C,g,!1,function(t){s("3CfE")},"data-v-19bf8da2",null).exports,x={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"box"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"hotel"},t._l(t.hotel,function(a,i){return s("div",{key:i,staticClass:"hotelItem"},[s("router-link",{attrs:{to:{path:"/hotelDetail",query:{id:a.id}},tag:"div"}},[s("div",{staticClass:"img"},[s("img",{attrs:{src:a.imgUrl}})]),t._v(" "),s("div",{staticClass:"msg"},[s("span",{staticClass:"min_title"},[t._v(t._s(a.name))]),t._v(" "),s("img",{attrs:{src:a.star}}),t._v(" "),s("img",{attrs:{src:a.star}}),t._v(" "),s("img",{attrs:{src:a.star}}),t._v(" "),s("img",{attrs:{src:a.star}}),s("br"),t._v(" "),s("span",[t._v("距市中心"+t._s(a.distance)+"公里 /  "+t._s(a.city[0])+"、"+t._s(a.city[1]))]),s("br"),t._v(" "),s("p",[s("span",[t._v("最大房间："+t._s(a.max_room_erea)+"m"),s("sup",[t._v("2")])]),t._v(" "),s("span",{staticClass:"max"},[t._v("    最多容纳："+t._s(a.max_people)+"人")])]),t._v(" "),s("span",[t._v("总房间："+t._s(a.room_total)+"间")]),t._v(" "),s("span",{staticClass:"_right"},[s("span",{staticClass:"team"},[t._v("团队房")]),t._v("￥"+t._s(a.min_price)+"起")])])])],1)}))])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"header"},[a("div",{staticClass:"local"},[a("span",[this._v("广州")]),this._v(" "),a("span",[a("i",{staticClass:"fas fa-map-marker-alt"})])]),this._v(" "),a("div",{staticClass:"input"},[a("input",{attrs:{type:"text",placeholder:"酒店搜索/关键字"}}),this._v(" "),a("span",[a("i",{staticClass:"fas fa-search"})])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"select"},[s("ul",[s("li",[s("span",[t._v("不限位置")]),t._v(" "),s("span",[s("i",{staticClass:"fas fa-angle-down"})])]),t._v(" "),s("li",[s("span",[t._v("推荐排序")]),t._v(" "),s("span",[s("i",{staticClass:"fas fa-angle-down"})])]),t._v(" "),s("li",[s("span",[t._v("筛选")]),t._v(" "),s("span",[s("i",{staticClass:"fas fa-angle-down"})])])])])}]};var y=s("VU/8")({mounted:function(){var t=this;this.$axios({url:"/api/hotel"}).then(function(a){t.hotel=a.data})},data:function(){return{hotel:[]}}},x,!1,function(t){s("iaew")},"data-v-48516129",null).exports,E={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"box"},[a("div",{staticClass:"hotelEnter"},[a("p",[a("span",{staticClass:"icon"},[a("i",{staticClass:"fas fa-user-plus"})])]),this._v(" "),a("span",{staticClass:"text"},[this._v("酒店入驻")])]),this._v(" "),a("div",{staticClass:"agentEnter"},[a("p",[a("span",{staticClass:"icon"},[a("i",{staticClass:"far fa-handshake"})])]),this._v(" "),a("span",{staticClass:"text"},[this._v("代理服务商入驻")])])])}]};var $=s("VU/8")({data:function(){return{}}},E,!1,function(t){s("A9Fa")},"data-v-77babc82",null).exports,k={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"box"},[s("div",{staticClass:"msg"},[s("div",{staticClass:"me"},[s("p",[s("img",{attrs:{src:t.msg.imgUrl}})]),s("div",{staticClass:"text"},[s("span",[t._v("最尊贵的会员")]),s("br"),t._v(" "),s("span",[t._v("ID:"+t._s(t.msg.id))])]),t._v(" "),s("p")]),t._v(" "),s("router-link",{staticClass:"cash",attrs:{to:"/my/cash",tag:"div"}},[t._v("\n\t\t\t提现\n\t\t")])],1),t._v(" "),s("div",{staticClass:"earning"},[t._m(0),t._v(" "),s("p",{staticClass:"money"},[s("span",[t._v("￥")]),s("span",[t._v(t._s(t.msg.earning))])]),t._v(" "),s("div",{staticClass:"earn"},[s("div",{staticClass:"order"},[t._m(1),t._v(" "),s("p",{staticClass:"text"},[s("span",[t._v("本月收益订单数")]),s("br"),t._v(" "),s("span",[t._v(t._s(t.msg.order_num))])])]),t._v(" "),s("div",{staticClass:"people"},[t._m(2),t._v(" "),s("p",{staticClass:"text"},[s("span",[t._v("本月消费人数数")]),s("br"),t._v(" "),s("span",[t._v(t._s(t.msg.poeple_num))])])])]),t._v(" "),s("div",{staticClass:"agent"},[s("ul",[s("li",[t._m(3),t._v(" "),s("p",{staticClass:"right"},[s("span",[t._v("收入")]),s("br"),t._v(" "),s("span",[t._v(t._s(t.msg.income.firstAgent))])])]),t._v(" "),s("li",[t._m(4),t._v(" "),s("p",{staticClass:"right"},[s("span",[t._v("收入")]),s("br"),t._v(" "),s("span",[t._v(t._s(t.msg.income.secondAgent))])])]),t._v(" "),s("li",[t._m(5),t._v(" "),s("p",{staticClass:"right"},[s("span",[t._v("收入")]),s("br"),t._v(" "),s("span",[t._v(t._s(t.msg.income.thirdAgent))])])])])])]),t._v(" "),s("div",{staticClass:"hotelServe"},[s("p",{staticClass:"title"},[s("span",[t._v("酒店服务费")]),t._v(" "),s("router-link",{staticClass:"cash",attrs:{to:"/my/cash",tag:"span"}},[t._v("提现")])],1),t._v(" "),s("div",{staticClass:"earning"},[t._m(6),t._v(" "),s("p",{staticClass:"money"},[s("span",[t._v("￥")]),s("span",[t._v(t._s(t.msg.earning))])]),t._v(" "),s("div",{staticClass:"earn"},[s("div",{staticClass:"order"},[t._m(7),t._v(" "),s("p",{staticClass:"text"},[s("span",[t._v("本月收益订单数")]),s("br"),t._v(" "),s("span",[t._v(t._s(t.msg.order_num))])])]),t._v(" "),s("div",{staticClass:"people"},[t._m(8),t._v(" "),s("p",{staticClass:"text"},[s("span",[t._v("本月消费人数数")]),s("br"),t._v(" "),s("span",[t._v(t._s(t.msg.poeple_num))])])])]),t._v(" "),s("div",{staticClass:"agent"},[s("ul",[s("li",[t._m(9),t._v(" "),s("p",{staticClass:"right"},[s("span",[t._v("收入")]),s("br"),t._v(" "),s("span",[t._v(t._s(t.msg.income.firstAgent))])])]),t._v(" "),s("li",[t._m(10),t._v(" "),s("p",{staticClass:"right"},[s("span",[t._v("收入")]),s("br"),t._v(" "),s("span",[t._v(t._s(t.msg.income.secondAgent))])])]),t._v(" "),s("li",[t._m(11),t._v(" "),s("p",{staticClass:"right"},[s("span",[t._v("收入")]),s("br"),t._v(" "),s("span",[t._v(t._s(t.msg.income.thirdAgent))])])])])])])]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("p",{staticClass:"text"},[a("span",[this._v("当前收益")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",{staticClass:"icon"},[a("i",{staticClass:"far fa-file"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",{staticClass:"icon"},[a("i",{staticClass:"far fa-user"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("span",[this._v("一级代理")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("span",[this._v("二级代理")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("span",[this._v("三级代理")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",{staticClass:"text"},[a("span",[this._v("当前收益")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",{staticClass:"icon"},[a("i",{staticClass:"far fa-file"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",{staticClass:"icon"},[a("i",{staticClass:"far fa-user"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("span",[this._v("一级代理")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("span",[this._v("二级代理")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("span",[this._v("三级代理")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"myOrder"},[s("p",{staticClass:"text"},[s("span",[t._v("我的订单")])]),t._v(" "),s("div",{staticClass:"message"},[s("div",[s("p",[s("i",{staticClass:"far fa-calendar-check"})]),t._v(" "),s("p",[s("span",[t._v("待付款")])])]),t._v(" "),s("div",[s("p",[s("i",{staticClass:"far fa-calendar-plus"})]),t._v(" "),s("p",[s("span",[t._v("待使用")])])]),t._v(" "),s("div",[s("p",[s("i",{staticClass:"far fa-calendar-alt"})]),t._v(" "),s("p",[s("span",[t._v("全部订单")])])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"myOrder"},[a("p",{staticClass:"text"},[a("span",[this._v("我的入口")])]),this._v(" "),a("div",{staticClass:"message"},[a("div",[a("p",[a("i",{staticClass:"far fa-star"})]),this._v(" "),a("p",[a("span",[this._v("管理房态入口")])])]),this._v(" "),a("div",[a("p",[a("i",{staticClass:"far fa-question-circle"})]),this._v(" "),a("p",[a("span",[this._v("代理服务商入口")])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"myOrder"},[s("p",{staticClass:"text"},[s("span",[t._v("系统服务")])]),t._v(" "),s("div",{staticClass:"message"},[s("div",[s("p",[s("i",{staticClass:"far fa-bookmark"})]),t._v(" "),s("p",[s("span",[t._v("我的收藏")])])]),t._v(" "),s("div",[s("p",[s("i",{staticClass:"fa fa-question-circle"})]),t._v(" "),s("p",[s("span",[t._v("我要反馈")])])]),t._v(" "),s("div",[s("p",[s("i",{staticClass:"far fa-comments"})]),t._v(" "),s("p",[s("span",[t._v("联系客服")])])])])])}]};var w=s("VU/8")({data:function(){return{msg:{imgUrl:"http://imgtu.5011.net/uploads/content/20170428/1436171493371991.jpg",id:"147258369",earning:"88888.00",order_num:"1369",poeple_num:"569",income:{firstAgent:"2644",secondAgent:"9637",thirdAgent:"6788"}}}}},k,!1,function(t){s("wSFk")},"data-v-38eda691",null).exports,A={mounted:function(){setTimeout(function(){new _.a(".swiper-container",{loop:!0,autoplay:!0})},100)},data:function(){return{data:{id:0,name:"广州银河大酒店",imgUrl:["http://pic.35pic.com/normal/04/16/23/5713677_151916236164_2.jpg"]}}}},D={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"box"},[s("div",{staticClass:"banner"},[s("div",{staticClass:"swiper-container"},[s("div",{staticClass:"swiper-wrapper"},t._l(t.data.imgUrl,function(t,a){return s("div",{staticClass:"swiper-slide"},[s("img",{attrs:{src:t}})])}))])]),t._v(" "),s("div",{staticClass:"message"},[s("p",{staticClass:"title"},[s("span",[t._v(t._s(t.data.name))])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"msg"},[s("div",{staticClass:"img"},[s("img",{attrs:{src:t.data.imgUrl}})]),t._v(" "),t._m(2),t._v(" "),s("div")]),t._v(" "),t._m(3)])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("p",{staticClass:"star"},[a("span",[this._v("豪华酒店 | 四星级")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",{staticClass:"tip"},[s("span",[s("i",{staticClass:"fas fa-wifi"}),t._v(" 网络")]),t._v(" "),s("span",[s("i",{staticClass:"fas fa-utensils"}),t._v(" 餐饮")]),t._v(" "),s("span",[s("i",{staticClass:"fas fa-heartbeat"}),t._v(" 健身")]),t._v(" "),s("span",[s("i",{staticClass:"fab fa-docker"}),t._v(" 游泳")]),t._v(" "),s("span",[s("i",{staticClass:"fab fa-product-hunt"}),t._v(" 停车位")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"text"},[s("p",[t._v("01-29入住，1-30离开，共1天")]),t._v(" "),s("p",[t._v("商务大床房")]),t._v(" "),s("p",[s("span",[t._v("25m "),s("sup",[t._v("2")]),t._v("\t大床1.8m ")]),s("span",[t._v("￥289元")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"inform"},[s("p",{staticClass:"day"},[s("span",[t._v("天数")]),t._v(" "),s("span",{staticClass:"space"}),t._v(" "),s("span",{staticClass:"span"},[t._v("-")]),s("span",{staticClass:"span"},[t._v("1")]),s("span",{staticClass:"span"},[t._v("+")])]),t._v(" "),s("p",{staticClass:"day"},[s("span",[t._v("房间")]),t._v(" "),s("span",{staticClass:"space"}),t._v(" "),s("span",{staticClass:"span"},[t._v("-")]),s("span",{staticClass:"span"},[t._v("1")]),s("span",{staticClass:"span"},[t._v("+")])]),t._v(" "),s("p",[s("input",{attrs:{type:"text",placeholder:"请输入你的姓名",name:""}})]),t._v(" "),s("p",[s("input",{attrs:{type:"text",placeholder:"请输入你的手机号码",name:""}})]),t._v(" "),s("p",[s("input",{attrs:{type:"text",placeholder:"请输入你的身份证号码",name:""}})]),t._v(" "),s("p",[s("span",[t._v("备注：")])]),t._v(" "),s("p",{staticClass:"indent"},[s("span",[t._v("需支付")])]),t._v(" "),s("p",{staticClass:"pay"},[s("span",[t._v("298.0元")])]),t._v(" "),s("p",{staticClass:"btn"},[s("button",[t._v("立即支付")])])])}]};var U=s("VU/8")(A,D,!1,function(t){s("YRZQ")},"data-v-72942742",null).exports,F={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"box"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("div",{staticClass:"btn"},[s("div",{staticClass:"total"},[t._v("￥289")]),t._v(" "),s("router-link",{staticClass:"pay",attrs:{to:"/hotelDetail/hotelSelect/hotelOrder",tag:"div"}},[t._v("预定")])],1)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"title"},[a("p",[a("span",[this._v("商务大床房")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"img"},[a("img",{attrs:{src:"http://d6.yihaodianimg.com/N03/M04/F3/2C/CgQCs1NuM_WAOOJiAACkJWcB2XA42700.jpg"}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"message"},[s("p",{staticClass:"msg"},[s("span",{staticClass:"head"},[t._v("床型")]),t._v(" "),s("span",{staticClass:"text"},[t._v("2张双人床1.5米")]),t._v(" "),s("span",{staticClass:"head"},[t._v("面积")]),t._v(" "),s("span",{staticClass:"text"},[t._v("28m "),s("sup",[t._v("2")])])]),t._v(" "),s("p",{staticClass:"msg"},[s("span",{staticClass:"head"},[t._v("窗户")]),t._v(" "),s("span",{staticClass:"text"},[t._v("有窗")]),t._v(" "),s("span",{staticClass:"head"},[t._v("可住")]),t._v(" "),s("span",{staticClass:"text"},[t._v("2人")])]),t._v(" "),s("p",{staticClass:"msg"},[s("span",{staticClass:"head"},[t._v("网络")]),t._v(" "),s("span",{staticClass:"text"},[t._v("WiFi供应")]),t._v(" "),s("span",{staticClass:"head"},[t._v("电话")]),t._v(" "),s("span",{staticClass:"text"},[t._v("暂无信息")])]),t._v(" "),s("p",{staticClass:"msg"},[s("span",{staticClass:"head"},[t._v("楼层")]),t._v(" "),s("span",{staticClass:"text"},[t._v("5-15")]),t._v(" "),s("span",{staticClass:"head"},[t._v("早餐")]),t._v(" "),s("span",{staticClass:"text"},[t._v("双早")])]),t._v(" "),s("div",{staticClass:"line"}),t._v(" "),s("div",{staticClass:"base"},[s("p",[s("span",[t._v("服务与设施")])]),t._v(" "),s("p",[s("span",{staticClass:"spanPublic green"},[t._v("24小时热水供应")])])]),t._v(" "),s("div",{staticClass:"line"}),t._v(" "),s("div",{staticClass:"base"},[s("p",[s("span",[t._v("权益与优惠")])]),t._v(" "),s("p",[s("span",{staticClass:"spanPublic red"},[t._v("活动优惠")]),t._v(" "),s("span",[t._v("活动限时优惠中，下单立返红包")])])]),t._v(" "),s("div",{staticClass:"line"}),t._v(" "),s("div",{staticClass:"base"},[s("p",[s("span",[t._v("退订政策")])]),t._v(" "),s("p",[s("span",{staticClass:"spanPublic orange"},[t._v("免费取消")]),t._v(" "),s("span",[t._v("免费取消订单")])])])])}]};var j=s("VU/8")({data:function(){return{}}},F,!1,function(t){s("tPIo")},"data-v-f5410c9e",null).exports,R={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"box"},[s("div",{staticClass:"img"},[s("div",{staticClass:"image"},[s("img",{attrs:{src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522736413424&di=852254dd751b973f30bc1945dadb1565&imgtype=0&src=http%3A%2F%2Fwww.ytlhqz.com%2Fmanage%2Fupload%2F%25E4%25B8%25AD%25E5%259B%25BD%25E5%25BB%25BA%25E8%25AE%25BE%25E9%2593%25B6%25E8%25A1%258C.jpg"}})]),t._v(" "),s("p",{staticClass:"text"},[s("span",[t._v("卡号：")]),s("span",[t._v("**** **** **** 1234")]),t._v(" "),s("span",{staticClass:"gt"},[t._v(">")])])]),t._v(" "),s("div",{staticClass:"cash"},[s("p",[s("span",[t._v("提现金额：")]),s("input",{attrs:{type:"text",placeholder:"可提现全额(元)80.00",name:""}}),s("span",{staticClass:"text"},[t._v("全部提现")])]),t._v(" "),s("p",[s("span",[t._v("提现手续费：20%")]),s("span",{staticClass:"right"},[t._v("24小时内到账")])])]),t._v(" "),s("div",{staticClass:"tip"},[s("p",[s("span",[s("i",{staticClass:"fas fa-question-circle"})]),s("span",[t._v("提现规则")])])]),t._v(" "),s("div",{staticClass:"btn"},[s("button",[t._v("提现")])])])}]};var M=s("VU/8")({data:function(){return{}}},R,!1,function(t){s("7cfn")},"data-v-69df0175",null).exports;i.a.use(l.a);for(var N=new l.a({routes:[{path:"/",name:"index",component:d,meta:{title:"首页"}},{path:"/hotel",name:"hotel",component:f,meta:{title:"酒店"}},{path:"/hotelDetail",name:"hotelDetail",component:b,meta:{title:"酒店详情"}},{path:"/hotelDetail/hotelSelect",name:"hotelSelect",component:j,meta:{title:"酒店信息"}},{path:"/hotelDetail/hotelSelect/hotelOrder",name:"hotelOrder",component:U,meta:{title:"酒店支付信息"}},{path:"/teamMeeting",name:"teamMeeting",component:y,meta:{title:"团队会议"}},{path:"/enter",name:"enter",component:$,meta:{title:"入驻"}},{path:"/my",name:"my",component:w,meta:{title:"我的"}},{path:"/my/cash",name:"cash",component:M,meta:{title:"提现"}}],mode:"history"}),q=s("mtWM"),V=s.n(q),I=s("zNUS"),O=s.n(I),B=O.a.Random,S=[],P=["http://file27.mafengwo.net/M00/F4/C0/wKgB6lPNl2KAUJaLAAMQOZWxpCA51.rbook_comment.w1024.jpeg","http://pic.58pic.com/58pic/13/60/16/64b58PICXEK_1024.jpg","http://pic.35pic.com/normal/04/22/11/5713677_130530564135_2.jpg","http://d6.yihaodianimg.com/N04/M09/35/35/CgQDrlOxMtiAAX-JAACqi31CJ7I44800.jpg","http://d6.yihaodianimg.com/N02/M01/20/C4/CgQCslN8UVqAQg-BAACw4isVwDs94800.jpg","http://pic35.photophoto.cn/20150512/0040039395981972_b.jpg","http://pic.58pic.com/58pic/13/60/16/64b58PICXEK_1024.jpg","http://pic.35pic.com/normal/04/22/11/5713677_130530564135_2.jpg","http://d6.yihaodianimg.com/N03/M04/F3/2C/CgQCs1NuM_WAOOJiAACkJWcB2XA42700.jpg","http://pic.35pic.com/normal/04/16/23/5713677_151916236164_2.jpg","http://pic.58pic.com/58pic/13/60/16/64b58PICXEK_1024.jpg","http://pic.35pic.com/normal/04/22/11/5713677_130530564135_2.jpg","http://pic.35pic.com/normal/04/16/23/5713677_151916236164_2.jpg"],Q=0;Q<P.length;Q++){var J={id:B.range(P.length)[Q],imgUrl:P[Q],star:B.natural(1,5),area:B.csentence(2,2).slice(0,-1)+"区",room_total:B.natural(20,500),min_price:B.natural(120,1500),name:B.csentence(2,5).slice(0,-1)+"大酒店",max_room_erea:B.natural(30,200),max_people:B.natural(1,50),city:["珠江新城","五羊商城"],distance:B.float(0,200,2,2),hotelDetail:{imgList:[P[Q],"http://pic.35pic.com/normal/04/16/23/5713677_151916236164_2.jpg"],tip:["免费提供车位以及免费接送附近地铁"],provide:[{name:"网络",isHave:!0,icon:"fas fa-wifi"},{name:"餐饮",isHave:!0,icon:"fas fa-utensils"},{name:"健身",isHave:!0,icon:"fas fa-heartbeat"},{name:"游泳",isHave:!0,icon:"fab fa-docker"},{name:"停车位",isHave:!0,icon:"fab fa-product-hunt"}],address:"广州市天河区广州大道坡天平架",distance:"1.4",near:["大型的万科广场"],room:[{id:B.range(P.length)[Q],name:"特惠商务房",imgUrl:"http://pic.35pic.com/normal/04/16/23/5713677_151916236164_2.jpg",area:B.natural(10,200),price:B.natural(200,1200),bed:1.8},{id:B.range(P.length)[Q],name:"特惠商务房",imgUrl:"http://pic.35pic.com/normal/04/16/23/5713677_151916236164_2.jpg",area:B.natural(10,200),price:B.natural(200,1200),bed:1.8},{id:B.range(P.length)[Q],name:"特惠商务房",imgUrl:"http://pic.35pic.com/normal/04/16/23/5713677_151916236164_2.jpg",area:B.natural(10,200),price:B.natural(200,1200),bed:1.8},{id:B.range(P.length)[Q],name:"特惠商务房",imgUrl:"http://pic.35pic.com/normal/04/16/23/5713677_151916236164_2.jpg",area:B.natural(10,200),price:B.natural(200,1200),bed:1.8},{id:B.range(P.length)[Q],name:"特惠商务房",imgUrl:"http://pic.35pic.com/normal/04/16/23/5713677_151916236164_2.jpg",area:B.natural(10,200),price:B.natural(200,1200),bed:1.8},{id:B.range(P.length)[Q],name:"特惠商务房",imgUrl:"http://pic.35pic.com/normal/04/16/23/5713677_151916236164_2.jpg",area:B.natural(10,200),price:B.natural(200,1200),bed:1.8}]}};S.push(J)}O.a.mock("/api/hotelData","get",function(){return S.slice(5)}),O.a.mock("/api/bannerData","get",function(t){return S.slice(0,5)}),O.a.mock("/api/hotel","get",function(t){return S}),O.a.mock("/api","get",function(){return S}),O.a.mock("/api/hotelDetail","get",function(t){if(t.body)for(var a=JSON.parse(t.body).id,s=0;s<S.length;s++)if(S[s].id==a)return S[s];return{}}),i.a.prototype.$axios=V.a,i.a.prototype.$baseURL="/addons/xiangding/dist",i.a.config.productionTip=!1,new i.a({el:"#app",router:N,components:{App:r},template:"<App/>"})},Qo48:function(t,a){},YRZQ:function(t,a){},gieD:function(t,a){},iaew:function(t,a){},pAhM:function(t,a,s){t.exports=s.p+"static/img/star.b975871.jpg"},tPIo:function(t,a){},wSFk:function(t,a){},x74q:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.b2317bded9d9adb80cff.js.map