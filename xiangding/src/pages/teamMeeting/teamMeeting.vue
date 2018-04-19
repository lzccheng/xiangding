<template>
	<div class="box">

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
						<el-date-picker
					      v-model="date_value"
					      type="date"
					      placeholder="入住日期" 
					      :picker-options="pickerOptions1" 
					      @change="datePicker1" 
					      @focus="_blur">
					    </el-date-picker>
					</p>
					<p>
						<span class="enter">退房日期：</span>
						<el-date-picker
					      v-model="date_value2"
					      type="date"
					      placeholder="退房日期" 
					      :picker-options="pickerOptions2" 
					      @change="datePicker2" 
					      @focus="_blur">
					    </el-date-picker>
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
					<div v-for='(i,index) in arrItem' :key=index @click='onHandleClick(index,$event)'>{{i}}</div>
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
							<span class="border_bottom" @click="onHandleErea">
								<span class="erea">
									{{selectedOptions[1]}}
									<!-- <div class="select">
										<el-cascader
										    :options="options"
										    v-model="selectedOptions"
										    @change="handleChange">
									 	</el-cascader>
									</div> -->
									
								</span>
								<span class="icon"><i class="fas fa-angle-right"></i></span>
							</span>
							
							<span class="right">
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
							<span class="text">{{i}}间数 : {{meettingNum}}</span>
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
					<p class="btn"><router-link :to="{path: '/hotel/hotelSearch',query: {name: arrItem[index_]}}" tag="button">开始搜索</router-link></p>
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
			this.$refs.line.style.marginLeft = this.$refs.tab.firstChild.offsetLeft + 'px'
			this.$refs._box.style.width = window.innerWidth + 'px'
		},
		data(){
			return {
				arrItem: [
					'会议室',
					'团房',
					'钟点房'
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
				input: '',
				meetting_total: '',
				pay: [80,800],
				starType: 'no'
			}
		},
		methods: {
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
		    _blur(event){
		    	event.blur()
		    }
		},
		computed: {
			day1(){
				return (this.date_value.getMonth()+1) + '.' + this.date_value.getDate()
			},
			day2(){

				return (this.date_value2.getMonth()+1) + '.' + this.date_value2.getDate()
			},
			computedDate1(){
				let value = this.date_value
				return this._time(value)
			},
			computedDate2(){
				let value = this.date_value2
				return this._time(value)
			}
		}
	}
</script>
<style scoped lang="scss">
	@import '../../common/css/common.scss';
	.box{
		background-color: #ededed;
		width: 100%;

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
						color: #aaa;
					}
				}
			}
			.date{
				padding-top: rem(13px);
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
							.erea{
								font-size: rem(18px);
							}
							.icon{
								margin-left: 50%;
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
								font-weight: bold;
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
						button{
							width: 100%;
							border: none;
							background-color: #8BC34A;
							padding: rem(13px) 0;
							color: #fff;
							border-radius: rem(5px);
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