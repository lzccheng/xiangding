<template>
	<div class="box">
		<div class="_box" ref="_box" @click="onHandleBox">
			<div class="date none" @click="onHandleCancel" ref="_date">
				<span class="number_box" >
				    <span class="icon_s"  style="border-right: none"  @click="handleDelete1">-</span>
					<span class="number_s">{{num_2}}</span>
					<span class="icon_s radius" style="border-left: none" @click="handleAdd1">+</span>
				</span>
				<div class="btn">
					<button class="green_btn" @click="onMeettingSure">确定</button>
				</div>
			</div>
			<div class="style none"  @click="onHandleCancel" ref="_style">
				<div>
					<p><span>星级：</span></p>
					<el-rate v-model="star"></el-rate>
				</div>
				<div class="padding">
					<p><span>价格：{{pay[0]}} - {{pay[1]}} 元</span></p>
					<el-slider
				      v-model="pay"
				      range
				      :max="3000">
				    </el-slider>
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
					<div v-for='(i,index) in arrItem' :key="index" @click='onHandleClick(index,$event)'>{{i.name}}</div>
				</div>
				<div class="line" ref="line"></div>
			</div>
			<div class="show">
				<div class="tip" v-if="close">
					<p><span class="border">下单优惠</span><span class="text">现在下单即享红包返现</span><span class="close" @click="onHandleClose"><i class="fas fa-times"></i></span></p>
				</div>
				<div class="body">
					<ul>
						<li>
							<span class="border_bottom">
								<span class="erea" ref="show_erea2">
									<input type="text" id="myErea" v-model="text_erea" onfocus="this.blur()">
								</span>
								<span class="icon"><i class="fas fa-angle-right"></i></span>
							</span>
							
							<span class="right" @click="handleMap">
								<span class="map"><i class="fas fa-map-marker-alt"></i></span>
								<span>我的位置</span>
							</span>
						</li>
						<li class="border_bottom" id="myDatePlugin">
							<span class="date">{{day1}}</span>
							<span class="day">{{computedDate1}}</span>
							<span class="line">--</span>
							<span class="date">{{day2}}</span>
							<span class="day">{{computedDate2}}</span>
							<span class="icon_"><i class="fas fa-chevron-right"></i></span>
							
						</li>   
						<li v-show="name!=='会议室'" class="border_bottom" @click="onHandleMeetting">
							<span class="text">{{name}}间数 : {{num_2}}</span>
							<span class="icon_"><i class="fas fa-chevron-right"></i></span>
						</li>
						<li class="border_bottom" @click="onHandleStyle">
							<span class="text">价格：{{pay[0]}} - {{pay[1]}} 元 / 星级： {{star}} 星</span>
							<span class="icon_"><i class="fas fa-chevron-right"></i></span>
						</li>
					</ul>
					<p class="btn"><router-link :to="Fn.getUrl({path: '/hotel/hotelSearch',query: {name: arrItem[index_].name,province,city,erea,struct,date1:date_value[0].datetime,date2:date_value[1].datetime,category_id,brand_id,seachMinPrice,seachMaxPrice,lng,lat}})" tag="p" class="green_btn">开始搜索</router-link></p>
					<!-- <div class="bottom">
						<router-link tag="div" :to="Fn.getUrl({path: '/my/collection',query: {name: '浏览记录',date1:date_value[0].datetime,date2:date_value[1].datetime}})">
								<span><i class="fas fa-history"></i></span>
								<span>浏览记录</span>
						</router-link>
						<router-link tag="div" :to="Fn.getUrl({path: '/my/collection',query: {name: '收藏酒店',date1:date_value[0].datetime,date2:date_value[1].datetime}})">
							<span><i class="far fa-star"></i></span>
							<span>收藏酒店</span>
						</router-link>
					</div> -->
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
	        var mobileSelect5 = new MobileSelect({
	            trigger: '#myErea',
	            title: '请选择地区',
	            wheels: [
	                        {data : [
		                          {name: '广东省',code: '1',children:[
		                            {name: '广州市',code: '22',children:[
		                              {name:'天河区',code:'55',children:[
		                                {name: '景山街道',code: '666'}
		                              ]}
		                            ]}
		                          ]}
		                        ]
                    		}
	                    ],
	            keyMap: {
	                id:'code',
	                value: 'name',
	                childs :'children'
	            },
	          triggerDisplayData: false,
	          position: [18,0,3],
	          callback:function(indexArr, data){
	            that.text_erea = data[1].name+data[2].name+data[3].name
	            that.province = data[0].name
	            that.city = data[1].name
	            that.erea = data[2].name
            	that.struct = data[3].name
	          }
	        })
	        
	        this.Http.getEreaData((res)=>{
	          mobileSelect5.updateWheels(JSON.parse(res.data));
	        })
	        let lD = new lzcDatePlugin({
           		 el: '#myDatePlugin',
	            callback: function(res){
	              that.date_value[0].datetime = res[0].dateTime;
	              that.date_value[1].datetime = res[1].dateTime;
	            }
	        })
		},
		data(){
			return {
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
					// {
					// 	name:'钟点房',
					// 	id: 'choose_three',
					// 	h_id: 'hidden_three'
					// }
				],
				index_: 0,
				close: true,
				control: true,
				num_2: 1,
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
				star: 0,
				date_value: new Date(),
				date_value2: tomo,
				date1_value: '',
				date2_value: '',
				input: '',
				meetting_total: '',
				pay: [0,3000],
				text_erea: '广州市天河区五山街道',
				date_value: [
		            {
		              datetime: new Date().getTime()
		            },
		            {
		              datetime: new Date(new Date().getTime()+1000*60*60*24).getTime()
		            }
		          ],
		        name: '会议室',
		        province: '广东省',
		        city: '广州市',
		        erea: '天河区',
		        struct: '五山街道',
		        category_id:'',
		        brand_id: 3,
		        seachMinPrice: '',
		        seachMaxPrice: '',
		        lng: '',
		        lat: ''
			}
		},
		methods: {
			handleMap(){
				let that = this
				const loading = that.$loading({
		            lock: true,
		            text: '定位中..........',
		            background: 'rgba(0, 0, 0, 0.7)',
		            // target: '.msg'
		          })
	          common.getLocation(onComplete,onError)
	          function onComplete(data) {
	            loading.close()
	            let addr = data.formattedAddress.split('街道')
	            if(!addr[1]){
	              addr = data.formattedAddress.split('号')
	            }
	            that.text_erea = addr[1]+'附近'
	            let tip = '定位成功！'+that.text_erea
                that.Fn.tips(tip)
	          }
	          /*
	           *解析定位错误信息
	           */
	          function onError(data) {
	            that.Http.get({route: 'member.member.wxJsSdkConfig',params: {url: window.location.href}}).then(res=>{
	              if(res.data.result == 1){
	                wx.config(res.data.data.config)
	                wx.ready(function(){
	                  wx.getLocation({
	                    success:function(res){
	                      // alert('lat:'+res.latitude+',lng:'+res.longitude)
	                      var success = function(status,res){
	                          loading.close()
	                          if(res.regeocode.addressComponent.building){
	                            that.text_erea = res.regeocode.addressComponent.building+'附近'
	                          }else{
	                            that.text_erea = res.regeocode.addressComponent.district+res.regeocode.addressComponent.street+res.regeocode.addressComponent.streetNumber+'附近'
	                          }
	                          that.Fn.tips('定位成功！'+that.text_erea)
	                          that.province = res.regeocode.addressComponent.province
	                          that.city = res.regeocode.addressComponent.city
	                          that.erea = res.regeocode.addressComponent.district
	                          that.struct = res.regeocode.addressComponent.township
	                      }
	                      var error = function(status,res){
	                        loading.close()
	                        that.Fn.tips('定位失败！')
	                      }
	                      that.Fn.getAddress([res.longitude,res.latitude],success,error)
	                    },
	                    fail:function(res){
	                      loading.close()
	                      that.Fn.tips('定位失败！')
	                    }
	                  })
	                })
	              }
	            
	            })
	          }
			},
			handleChange_erea(){
				this.show_erea = true
				this.$refs.show_erea2[0].style.display = 'block'
			},
			// handleBlur(e){
			// 	alert(4555)
			// 	var e = e || event
			// 	e.target.blur()
			// },
			datePicker1(time){
				_date = time.getTime()
				this.date_value2 = new Date(time.getFullYear()+'/'+(time.getMonth()+1)+'/'+(time.getDate()+1))
			},
			datePicker2(time){
				// console.log(this.date_value.getDate(),this.date_value2.getDate())
			},
			onHandleClick(i,e){
				var e = e || event
				this.name = this.arrItem[i].name
				if(e.path){
					e.path[2].lastElementChild.style.marginLeft = e.path[0].offsetLeft + 'px'
					e.path[2].lastElementChild.style.width = common.getStyle(e.path[0],'width')
				}else{
					e.target.parentNode.parentNode.lastElementChild.style.marginLeft = e.target.offsetLeft + 'px'
					e.target.parentNode.parentNode.lastElementChild.style.width = common.getStyle(e.target,'width')
				}
				this.index_ = i
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
		    	document.querySelectorAll('body')[0].style.overflow = 'hidden'
		    },
		    _boxHide(){
		    	this.$refs._box.style.height = '0px'
		    	document.querySelectorAll('body')[0].style.overflow = 'auto'
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
		    },
		    handleBlur(event){
				event.path[0].blur()
			},
			handleDelete1(i){
				this.num_2 --
				if(this.num_2<=0){this.num_2=1}
			},
			handleAdd1(i){
				this.num_2++
			}
		},
		computed: {
			day1(){
				return this.zero((new Date(this.date_value[0].datetime).getMonth()+1)) + '.' + this.zero(new Date(this.date_value[0].datetime).getDate())
			},
			day2(){
				return this.zero((new Date(this.date_value[1].datetime).getMonth()+1)) + '.' + this.zero(new Date(this.date_value[1].datetime).getDate())
			},
			computedDate1(){
				return this.time_(this.date_value[0].datetime)
			},
			computedDate2(){
				return this.time_(this.date_value[1].datetime)
			}
		},
		watch: {
			index_(){
				this.brand_id = this.index_+3
			},
			pay(){
				this.seachMinPrice = this.pay[0]
				this.seachMaxPrice = this.pay[1]
			},
			star(){
				this.category_id = this.star
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
				font-size: rem(20px);
				.number_box{
					display: flex;
					justify-content: center;
					align-items: center;
					width: 50%;
					margin: rem(10px) 25%;
					.number_s{
						width: 60%;
						text-align: center;
						display: inline-block;
						border: #DCDFE6 solid rem(1px);
						padding: rem(7px) 0;
					}
					.icon_s{
						width: 28%;
						padding: rem(7px) 0;
						border: #DCDFE6 solid rem(1px);
						border-radius: rem(5px) 0 0 rem(5px); 
					}
					.radius{
						border-radius: 0 rem(5px) rem(5px) 0; 
					}
				}
			}
			.style{
				padding-top: rem(10px);
				.padding{
					padding: rem(26px) rem(25px) 0
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
					padding: rem(8px) rem(20px);
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
					padding: rem(2px) rem(10px);
					ul{
						li{
							padding: rem(8px) 0;
							position: relative;
							margin-top: rem(1px);
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
								top: rem(8px);
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
						margin-top: rem(13px);
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
						width: 100%;
						display: flex;
						justify-content: space-around;
						align-items: center;
						margin-top: rem(30px);
						padding-bottom: 20%;
						div{
							width: 50%;
							// padding: rem(15px) 0;
							text-align: center;
							border-right: #aaa solid rem(1px);
							&:last-child{
								border-right: none;
							}
						}
					}
				}
			}
		}
	}
</style>