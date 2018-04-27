<template>
	<div class="box">
		<iframe src="api/sample.php" ref="_iframe" style="display: none"></iframe>
		<div class="_box" ref="_box" @click="onHandleBox">
			<div class="eara none" @click="onHandleCancel" ref="eara">
				<div class="select">
					<span>位置：</span><el-cascader
					    :options="options"
					    v-model="selectedOptions"
					    @change="handleChange">
				 	</el-cascader>
				</div>
				<div class="btn">
					<button class="green_btn" @click="onMeettingSure">确定</button>
				</div>
			</div>
			<div class="day none" @click="onHandleCancel" ref="_day">
				<div class="_day">
					<p>
						<span class="enter">入住日期：</span>
						<!-- <el-date-picker
					      v-model="date_value"
					      type="date"
					      placeholder="入住日期" 
					      :picker-options="pickerOptions1" 
					      @change="datePicker1" 
					      @focus="_blur">
					    </el-date-picker> -->
					    <span class="date_">
			              <input id="date1" onfocus="this.blur()" type="text" readonly="" @focus="handleBlur" placeholder="日期选择特效" data-lcalendar="2016-05-11,2016-05-11" v-model="date1_value"/>
			            </span>
			            <span><i class="fas fa-angle-right"></i></span>
					</p>
					<p>
						<span class="enter">退房日期：</span>
						<!-- <el-date-picker
					      v-model="date_value2"
					      type="date"
					      placeholder="退房日期" 
					      :picker-options="pickerOptions2" 
					      @change="datePicker2" 
					      @focus="_blur">
					    </el-date-picker> -->
					    <span class="date_">
			              <input id="date2" type="text" readonly="" placeholder="日期选择特效" onfocus="this.blur()" data-lcalendar="2016-05-11,2016-05-11" v-model="date2_value"/>
			            </span>
			            <span><i class="fas fa-angle-right"></i></span>
					</p>
					
				</div>
				<div class="btn">
					<button class="green_btn" @click="onMeettingSure">确定</button>
				</div>
			</div>
			<div class="date none" @click="onHandleCancel" ref="_date">
				<el-input-number v-model="meettingNum" :min="1" :max="500"></el-input-number>
				<div class="btn">
					<button class="green_btn" @click="onMeettingSure">确定</button>
				</div>
			</div>
			<div class="style none"  @click="onHandleCancel" ref="_style">
				<div class="padding">
					<p><span>价格：{{pay[0]}} - {{pay[1]}} 元</span></p>
					<el-slider
				      v-model="pay"
				      range
				      :max="8000">
				    </el-slider>
				</div>
				<div>
					<p><span>星级：</span></p>
					<el-rate v-model="star"></el-rate>
				</div>
				<div class="btn">
					<button class="green_btn" @click="onMeettingSure">确定</button>
				</div>
			</div>
		</div>

		<div class="img">
			<img src="http://image.qmango.com/hotelimg/dl1210/150330/0.jpeg">
		</div>
		<div class="tab">
			<div class="tab_header">
				<div class="header" ref="tab">
					<div v-for='(i,index) in arrItem' :key=index @click='onHandleClick(index,$event)'>{{i.name}}</div>
				</div>
				<div class="line" ref="line"></div>
			</div>
			<div class="show">
				<div class="tip" v-if="close">
					<p><span class="border">下单优惠</span><span class="text">现在下单即享红包返现</span><span class="close" @click="onHandleClose"><i class="fas fa-times"></i></span></p>
				</div>
				<div v-for="(i,index) in arrItem" v-if="index == index_" class="body">
					<ul>
						<li>
							<!-- <span class="border_bottom" @click="onHandleErea"> -->
							<span class="border_bottom">
								<!-- <span class="erea"> -->
								<span class="erea" ref="show_erea2">
									<!-- {{selectedOptions[1]}} -->
									<!-- <div class="select">
										<el-cascader
										    :options="options"
										    v-model="selectedOptions"
										    @change="handleChange">
									 	</el-cascader>
									</div> -->
									<input type="text" @focus="handleBlur" :id="i.id" v-model="area_value" onfocus="this.blur()">
									<!-- <p>{{text_erea}}</p> -->
									<input type="hidden" :id="i.h_id">
								</span>
								<span v-if="!show_erea" class="text_erea" @click="handleChange_erea">{{text_erea}}</span>
								<span class="icon"><i class="fas fa-angle-right"></i></span>
							</span>
							
							<span class="right" @click="handleMap">
								<span class="map"><i class="fas fa-map-marker-alt"></i></span>
								<span>我的位置</span>
							</span>
						</li>
						<li class="border_bottom" @click="onHandleDay">
							<span class="date">{{day1}}</span>
							<span class="day">{{computedDate1}}</span>
							<span class="line">--</span>
							<span class="date">{{day2}}</span>
							<span class="day">{{computedDate2}}</span>
							<span class="icon_"><i class="fas fa-chevron-right"></i></span>
							<!-- <div class="date_value">
								<el-date-picker
							      v-model="date_value"
							      type="date"
							      placeholder="入住日期" 
							      :picker-options="pickerOptions1">
							    </el-date-picker>
							</div>
							<div class="date_value input">
								<p class="num">
									<el-input type="number" v-model="input" placeholder="入住天数（数字）"></el-input>
								</p>
							</div> -->
							
						</li>   
						<li class="border_bottom" @click="onHandleMeetting">
							<span class="text">{{i.name}}间数 : {{meettingNum}}</span>
							<span class="icon_"><i class="fas fa-chevron-right"></i></span>
							<!-- <p>
								<el-input placeholder="请输入数字" v-model="meetting_total" type="number">
							    <template slot="prepend">{{i}}间数:</template>
							  </el-input>
							</p> -->
						</li>
						<li class="border_bottom" @click="onHandleStyle">
							<span class="text">价格：{{pay[0]}} - {{pay[1]}} 元 / 星级： {{star}} 星</span>
							<span class="icon_"><i class="fas fa-chevron-right"></i></span>
							<!-- <div class="pay">
								<span>价格：{{pay[0]}} - {{pay[1]}}</span>
							</div>
							<div>
								<el-slider
							      v-model="pay"
							      range
							      show-stops
							      :max="3000">
							    </el-slider>
							</div> -->
						</li>
						<!-- <li>
							<div class="star">
								<p class="title">星级：</p>
								<p class="startCheck">
									<span><el-radio v-model="starType" label="no">不限</el-radio></span>
									<span><el-radio v-model="starType" label="1">一星级</el-radio></span>
									<span><el-radio v-model="starType" label="2">二星级</el-radio></span>
									<span><el-radio v-model="starType" label="3">三星级</el-radio></span>
									<span><el-radio v-model="starType" label="4">四星级</el-radio></span>
									<span><el-radio v-model="starType" label="5">五星级</el-radio></span>
								</p>
							</div>
						</li> -->
					</ul>
					<p class="btn"><router-link :to="{path: '/hotel/hotelSearch',query: {name: arrItem[index_].name}}" tag="button">开始搜索</router-link></p>
					<div class="bottom">
						<router-link tag="div" :to="{path: '/my/collection',query: {name: '浏览记录'}}">
							<span><i class="fas fa-history"></i></span>
							<span>浏览记录</span>
						</router-link>
						<router-link tag="div" :to="{path: '/my/collection',query: {name: '收藏酒店'}}">
							<span><i class="far fa-star"></i></span>
							<span>收藏酒店</span>
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import common from '../../common/js/common'
	let _date = Date.now();
	let _day = {
		'1': '星期一',
		'2': '星期二',
		'3': '星期三',
		'4': '星期四',
		'5': '星期五',
		'6': '星期六',
		'0': '星期日',
	}
	let g_date = new Date()
	let tomo = new Date(g_date.getTime()+1000*60*60*24)
	export default {
		mounted: function(){
			let that = this
			this.$refs.line.style.marginLeft = this.$refs.tab.firstChild.offsetLeft + 'px'
			this.$refs._box.style.width = window.innerWidth + 'px'
	        new LArea().init({
	            'trigger': '#choose_one',
	            'valueTo': '#hidden_one',
	            'keys': {
	                id: 'id',
	                name: 'name'
	            },
	            'type': 1,
	            'data': LAreaData,
	        })
	        let date = new Date()
	        let min_date = date.getFullYear()+'-'+this.zero(date.getMonth()+1)+'-'+this.zero(date.getDate())
	        let min_date2 = new Date(tomo.getTime()).getFullYear()+'-'+this.zero(new Date(tomo.getTime()).getMonth()+1)+'-'+this.zero(new Date(tomo.getTime()).getDate())
	        this.date1_value = min_date
	        this.date2_value = min_date2
	          // console.log(min_date)
	        new LCalendar().init({
	            'trigger': '#date1', //标签id
	            'type': 'date', //date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择,
	            'minDate': min_date, //最小日期
	            'maxDate': (new Date().getFullYear()+2) + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate() //最大日期
	        })
	        new LCalendar().init({
	            'trigger': '#date2', //标签id
	            'type': 'date', //date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择,
	            'minDate': min_date2, //最小日期
	            'maxDate': (new Date().getFullYear()+2) + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate() //最大日期
	        })
	        // this.$axios({url:'/api/jssdka.php',method: 'get'}).then((res)=>{
	        //     // console.log(res.data)
	        //     wx.config({
	        //       debug: false,
	        //       appId: res.data.appId,
	        //       timestamp: res.data.timestamp,
	        //       nonceStr: res.data.nonceStr,
	        //       signature: res.data.signature,
	        //       jsApiList: [
	        //         'getLocation'
	        //       ]
	        //     })
	            
	        //     wx.ready(function(){
	        //       wx.getLocation({
	        //         success: function(res){
	        //           that._lng = res.longitude
	        //           that._lat = res.latitude
	        //           let point = new BMap.Point(res.longitude, res.latitude)
	        //           // console.log('point',point)
	        //           // let map = new BMap.Map("map")
	        //           let myGeo = new BMap.Geocoder()
	        //           // console.log(that)
	        //           myGeo.getLocation(point,function(res){
	        //             console.log(res.surroundingPois[0].title)
	        //             that.text_erea = res.surroundingPois[0].title+'附近'
	        //             that.show_erea = false
	        //             // console.log(that.$refs)
	        //             that.$refs.show_erea2[0].style.display = 'none'
	        //             // alert('你的位置在'+res.surroundingPois[0].title+'附近，地址为：'+res.address+res.surroundingPois[0].address)
	        //           })

	        //           // let geolocation = new BMap.Geolocation()
	        //           // geolocation.getCurrentPosition(function(r){
	        //           //   if(this.getStatus() == BMAP_STATUS_SUCCESS){
	        //           //     console.log(r.point)
	        //           //     var mk = new BMap.Marker(r.point);
	        //           //     mk.setAnimation(BMAP_ANIMATION_BOUNCE);
	        //           //     map.addOverlay(mk);
	        //           //     // map.panTo(r.point);
	        //           //     // map.centerAndZoom(r.point, 15);
	        //           //     myGeo.getLocation(r.point,function(res){
	        //           //       console.log(res)
	        //           //       alert('你的位置在'+res.surroundingPois[0].title+'附近，地址为：'+res.address+res.surroundingPois[0].address)
	        //           //     })
	        //           //     console.log(r)
	        //           //     // alert('您的位置(浏览器定位)：'+r.point.lng+','+r.point.lat);
	        //           //   }
	        //           //   else {
	        //           //     alert('位置获取失败：'+this.getStatus());
	        //           //   }        
	        //           // })
	        //           // console.log(888,map)
	        //           // console.log(999999,res,map)
	        //         },
	        //         fail: function(){
	        //           console.log(777777,'err')
	        //           alert('定位失败！')
	        //         }
	        //       })
	        //     })
	        //   }).catch((err)=>{
	        //     console.log(err)
	        //   })
		},
		data(){
			return {
				_lng: '',
				_lat: '',
				area_value: "广东省,深圳市,南山区",
				arrItem: [
					{
						name:'会议室',
						id: 'choose_one',
						h_id: 'hidden_one'
					},
					{
						name:'团房',
						id: 'choose_two',
						h_id: 'hidden_two'
					},
					{
						name:'钟点房',
						id: 'choose_three',
						h_id: 'hidden_three'
					}
				],
				index_: 0,
				close: true,
				control: true,
				options: [
					{
			          value: '广东省',
			          label: '广东省',
			          children: [
				          {
				            value: '广州市',
				            label: '广州市'
				          },
				          {
				            value: '深圳市',
				            label: '深圳市'
				          },
				          {
				            value: '佛山市',
				            label: '佛山市'
				          },
				          {
				            value: '肇庆市',
				            label: '肇庆市'
				          },
			          ]
			         }
				],
				pickerOptions1: {
		            disabledDate(time) {
		              return time.getTime() <= (Date.now()-1000*60*60*24);
		            }
		          },
		        pickerOptions2: {
		            disabledDate(time) {
		              return time.getTime() <= _date;
		            }
		          },
				selectedOptions: ['广东省','广州市'],
				meettingNum: 1,
				star: 3,
				date_value: new Date(),
				date_value2: tomo,
				date1_value: '',
				date2_value: '',
				input: '',
				meetting_total: '',
				pay: [80,800],
				starType: 'no',
				show_erea: false,
				text_erea: ''
			}
		},
		methods: {
			handleMap(){
				let that = this
				let point = new BMap.Point(window.$local.longitude, window.$local.latitude)
                  // console.log('point',point)
                  // let map = new BMap.Map("map")
                  let myGeo = new BMap.Geocoder()
                  // console.log(that)
                  myGeo.getLocation(point,function(res){
                    that.text_erea = res.surroundingPois[0].title+'附近'
                    that.show_erea = false
                    // console.log(that.$refs)
                    that.$refs.show_erea2[0].style.display = 'none'
                    // alert('你的位置在'+res.surroundingPois[0].title+'附近，地址为：'+res.address+res.surroundingPois[0].address)
                  })
			},
			handleChange_erea(){
				this.show_erea = true
				this.$refs.show_erea2[0].style.display = 'block'
			},
			handleBlur(event){
				event.path[0].blur()
			},
			datePicker1(time){
				_date = time.getTime()
				this.date_value2 = new Date(time.getFullYear()+'/'+(time.getMonth()+1)+'/'+(time.getDate()+1))
			},
			datePicker2(time){
				// console.log(this.date_value.getDate(),this.date_value2.getDate())
			},
			onHandleClick(i,event){
				event.path[2].lastElementChild.style.marginLeft = event.path[0].offsetLeft + 'px'
				event.path[2].lastElementChild.style.width = common.getStyle(event.path[0],'width')
				this.index_ = i
				let that = this
				setTimeout(()=>{
					new LArea().init({
			            'trigger': '#'+that.arrItem[i].id,
			            'valueTo': '#'+that.arrItem[i].h_id,
			            'keys': {
			                id: 'id',
			                name: 'name'
			            },
			            'type': 1,
			            'data': LAreaData
			        })
				},50)
				
			},
			onHandleClose(){
				this.close = false
			},
			handleChange(value) {
		        // console.log(value);
		    },
		    onHandleErea(){
		    	this._boxShow()
		    	this.show(this.$refs.eara)
		    },
		    onHandleBox(){
		    	this._boxHide()
		    	this.hide(this.$refs.eara)
		    	this.hide(this.$refs._day)
		    	this.hide(this.$refs._date)
		    	this.hide(this.$refs._style)
		    },
		    onHandleMeetting(){
		    	this._boxShow()
		    	this.show(this.$refs._date)
		    },
		    onHandleDay(){
		    	this._boxShow()
		    	this.show(this.$refs._day)
		    },
		    onHandleStyle(){
		    	this._boxShow()
		    	this.show(this.$refs._style)
		    },
		    onMeettingSure(){
		    	this.onHandleBox()
		    },
		    _boxShow(){
		    	this.$refs._box.style.height = window.innerHeight + 'px'
		    },
		    _boxHide(){
		    	this.$refs._box.style.height = '0px'
		    },
		    show(obj){
		    	obj.style.display = 'block'
		    },
		    hide(obj){
		    	obj.style.display = 'none'
		    },
		    onHandleCancel(event){
		    	event.cancelBubble = true
		    },
		    onSure(){
		    	this.onHandleBox()
		    },
		    _getTime(time){
		    	let dd = new Date()
		        let day = dd.getDate()
		        let mon = dd.getMonth()+1
		        let year = dd.getFullYear()
		        let str = year+'/'+mon+'/'+day
		        let tody = new Date(str)
				return new Date(tody.getTime()+time)
		    },
		    _time(value){
		    	if(this._getTime(1000*60*60*24).getTime() > value.getTime()){
					return '今天'
				}
				if(this._getTime(2*1000*60*60*24).getTime() > value.getTime() && value.getTime() >=this._getTime(1000*60*60*24).getTime()){
					return '明天'
				}	
				if(this._getTime(3*1000*60*60*24).getTime() > value.getTime() && value.getTime() >=this._getTime(2*1000*60*60*24).getTime()){
					return '后天'
				}
				return _day[value.getDay()]
		    },
		    time_(value){
		    	let dd = new Date()
		        let date = new Date(value).getTime()
		        let tody = dd.getFullYear()+'-'+(dd.getMonth()+1)+'-'+dd.getDate()
		        let tomorrow = new Date(tody).getTime()+1000*60*60*24
		        if(date<tomorrow){
		          return '今天'
		        }
		        if(date>=tomorrow && date<(tomorrow+1000*60*60*24)){
		          return '明天'
		        }
		        if(date>=(tomorrow+1000*60*60*24) && date<(tomorrow+1000*60*60*24*2)){
		          return '后天'
		        }
		        return _day[new Date(value).getDay()]
		    },
		    _blur(event){
		    	event.blur()
		    },
		    zero(value){
		    	return Number(value)<10?'0'+value:value
		    }
		},
		computed: {
			day1(){
				// return (this.date_value.getMonth()+1) + '.' + this.date_value.getDate()
				let date = new Date(this.date1_value).getTime()
          		let date2 = date+1000*60*60*24
          		this.date2_value = new Date(date2).getFullYear()+'-'+this.zero(new Date(date2).getMonth()+1)+'-'+this.zero(new Date(date2).getDate())
				return this.zero((new Date(this.date1_value).getMonth()+1)) + '.' + this.zero(new Date(this.date1_value).getDate())
			},
			day2(){

				// return (this.date_value2.getMonth()+1) + '.' + this.date_value2.getDate()
				if(new Date(this.date1_value).getTime()>new Date(this.date2_value).getTime()){
					let date = new Date(this.date1_value).getTime()
          			let date2 = date+1000*60*60*24
          			this.date2_value = new Date(date2).getFullYear()+'-'+this.zero(new Date(date2).getMonth()+1)+'-'+this.zero(new Date(date2).getDate())
				}
				return this.zero((new Date(this.date2_value).getMonth()+1)) + '.' + this.zero(new Date(this.date2_value).getDate())
			},
			computedDate1(){
				// let value = this.date_value
				// return this._time(value)
				return this.time_(this.date1_value)
			},
			computedDate2(){
				// let value = this.date_value2
				// return this._time(value)
				return this.time_(this.date2_value)
			}
		}
	}
</script>
<style scoped lang="scss">
	@import '../../common/css/common.scss';
	.box{
		background-color: #ededed;
		width: 100%;
		font-size: rem(14px);
		._box{
			width: 100%;
			background-color: rgba(0,0,0,0.5);
			position: absolute;
			left: 0;
			top: 0;
			z-index: 999;
			>div{
				width: 100%;
				background-color: #fff;
				text-align: center;
				position: absolute;
				left: 0;
				bottom: 0;
			}
			.none{
				display: none;
			}
			.btn{
				padding: rem(12px) rem(25px);
			}
			.eara{
				.select{
					display: inline-block;
					padding: rem(5px) rem(8px);
					font-size: rem(14px);
					color: #aaa;
				}
			}
			.day{
				._day{
					padding-top: rem(15px);
					p{
						padding-bottom: rem(10px);
					}
					.enter{
						display: inline-block;
						padding: rem(5px) rem(10px);
					}
					span{
						color: #aaa;
						input{
							// font-size: rem(18px);
							border: none;
							color: #aaa;
						}
					}
				}
			}
			.date{
				padding-top: rem(13px);
				font-size: rem(14px);
			}
			.style{
				padding-top: rem(10px);
				.padding{
					padding: rem(10px) rem(25px) 0
				}
			}
		}

		.img{
			img{
				width: 100%;
				height: 200px;
			}
		}
		.close{
			float: right;
			color: #aaa;
			padding: rem(2px) rem(5px);
		}
		.tab{
			background-color: #fff;
			.tab_header{
				
				position: relative;
				.header{
					display: flex;
					justify-content: space-around;
					align-items:center;
					border-bottom: 1px solid #aaa;
					padding: rem(13px) 0 rem(15px);
				}
				.line{
					position: absolute;
					left: 0;
					bottom: 0; 
					width: rem(30px);
					height: rem(5px);
					background-color: #8BC34A;
					border-radius: rem(5px);
					transition: all 0.8s;
				}
			}
			.show{
				.tip{
					background-color: #EDEDED;
					padding: rem(10px) rem(20px);
					font-size: rem(12px);
					p{
						.border{
							display: inline-block;
							padding: rem(1px) rem(2px);
							border: 1px solid #FF9800;
							color: #FF9800;
						}
						.text{
							margin-left: rem(15px);
							color: #FF9800;
						}
					}
				}
				.body{
					padding: rem(10px) rem(10px);
					ul{
						li{
							padding: rem(10px) 0;
							position: relative;
							.erea{
								// font-size: rem(18px);
								position: relative;
								&.erea_{
									font-size: rem(14px);
									border: none;
								}
								input{
									position: absolute;
									left: rem(10px);
									top: 0;
									border: none;
									font-size: rem(14px);
								}
							}
							.text_erea{
								position: absolute;
								left: rem(8px);
								top: rem(15px);
								width: 70%;
								border-bottom: none;
							}
							.icon{
								margin-left: 65%;
								color: #aaa;
								padding: 0 rem(10px);
							}
							.right{
								margin-left: 3%;
								.map{
									color: #FF9800;
								}
							}
							.date{
								font-size: rem(20px);
							}
							.line{
								display: inline-block;
								padding: 0 rem(10px);
							}
							.icon_{
								float: right;
								display: inline-block;
								padding: 0 rem(10px);
								color:　#aaa;
							}
							.text{
								color: #aaa;
							}
							.date_value{
								display: inline-block;
								width: 49%;
								p{
									display: inline-block;
									&.num{
										width: 80%;
										margin-left: 25%;
									}
								}
							}
							.pay{
								text-align: center;
								color: #aaa;
								font-size: rem(14px);
							}
							.star{
								padding: rem(3px) rem(8px);
								.title{
									font-size: rem(14px);
									padding: rem(8px) 0;
								}
								.startCheck{
									span{
										display: inline-block;
										padding: rem(5px) rem(5px);
									}
								}
							}
							
						}
					}
					.border_bottom{
						border-bottom: 1px solid #aaa;
						padding-bottom: rem(10px);

					}
					.btn{
						margin-top: rem(15px);
						// font-size: rem(16px);
						button{
							width: 100%;
							border: none;
							background-color: #43c122;
							padding: rem(13px) 0;
							color: #fff;
							border-radius: rem(5px);
							font-size: rem(16px);
						}
					}
					.bottom{
						display: flex;
						justify-content: space-around;
						align-items: center;
						margin-top: rem(15px);
						div{
							padding: rem(15px) 0;
						}
					}
				}
			}
		}
	}
</style>