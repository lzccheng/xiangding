<template>
	<div class="box" @click="onHandleCancel" ref="hotel">

		<!-- <div v-for="(i,index) in aa">
			{{i.goods_id}}
		</div> -->

	    <div class="top_box">
			<div class="header">
				<div class="header_">
					<!-- <div class="local">
						<span>广州</span>
					</div> -->
					<router-link tag="div" :to="Fn.getUrl({path: '/hotel/searchPage'})" class="input" >
						<input type="text" placeholder="酒店搜索/关键字">
						<span><i class="fas fa-search"></i></span>
					</router-link>
				</div>
				
			</div>
			<div class="select">
				<ul>
					<li>
						<div class="tabss" @click="handlePrice">
							<span :class="{'color': 1 == show}">位置</span>
							<span v-if="1 != show"><i class="fas fa-angle-down"></i></span>
						</div>
						
					</li>
					<li>
						<div class="tabss" @click="handleLocal">
							<span :class="{'color': 2== show}">筛选</span>
							<span v-if="2 != show"><i class="fas fa-angle-down"></i></span>
						</div>
						
					</li>
					<li>
						<div class="tabss" @click="handleGeneral">
							<span :class="{'color': 0 == show}">星级</span>
							<span v-if="0 != show"><i class="fas fa-angle-down"></i></span>
						</div>
						
						<!-- <div class="tabs" v-if="tabs" ref="tabs">
							<div class="tabs_" @click="onHandlecancelBubble">
								<p>综合</p>
								<p>价格降序</p>
								<p>价格升序</p>
							</div>
						</div> -->
				    </li>
					
				</ul>
			</div>
		</div>
		<div class="back" v-if="general" @click="handleBack" >
			<div v-if="0 == show" @click="handleCancel">
				<div class="content">
					<div class="item">
						<p class="title">价格区间</p>
						<p class="top">
							<span class="input_"><input type="text" v-model="starSelect.price.min" placeholder="最低值"></span>
							<span class="line1"></span>
							<span class="input_"><input type="text" v-model="starSelect.price.max" placeholder="最高值"></span>
						</p>
					</div>
					<div class="item">
						<p class="title">酒店星级</p>
						<p class="rank">
							<span class="star" :class="{color_box: colorBoolen}" @click="handleNo">不限</span>
							<span class="star" :class="{color_box: starItem[0].active}" @click="handleStar(0)">一星/经济</span>
							<span class="star" :class="{color_box: starItem[1].active}" @click="handleStar(1)">二星/舒适</span>
						</p>
						<p class="rank">
							<span class="star" :class="{color_box: starItem[2].active}" @click="handleStar(2)">三星/商务</span>
							<span class="star" :class="{color_box: starItem[3].active}" @click="handleStar(3)">四星/高档</span>
							<span class="star" :class="{color_box: starItem[4].active}" @click="handleStar(4)">五星/豪华</span>
						</p>
					</div>
				</div>
				<div class="button">
					<span @click="handleStarReset">重置</span>
					<span>确定</span>
				</div>
			</div>
			<div v-if="1 == show" @click="handleCancel">
				<div class="local_box">
					<div class="content_">
						<div class="content_nav">
							<div class="nav_item" @click="handleLocalNav(0)">距离我</div>
							<div class="nav_item" @click="handleLocalNav(1)">行政区域</div>
						</div>
						<div class="content_show">
							<div class="show_item" v-show="local_box == 0">
								<ul class="out_tome">
									<li>全城</li>
									<li>1km</li>
									<li>3km</li>
									<li>5km</li>
									<li>10km</li>
								</ul>
							</div>
							<div class="show_item" v-show="local_box == 1">
								<div class="show_item_erea">
									<div class="show_item_Nav">
										<ul>
											<li>天河区</li>
										</ul>
									</div>
									<div class="show_item_item">
										<ul>
											<li>沙里街道</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- <div>
						<div>重置</div>
						<div>完成</div>
					</div> -->
				</div>				
			</div>
			<div v-if="2 == show" @click="handleCancel">
				<div class="content">
				    <div class="back_box">
						<div class="choice_title">
							<p v-for="(i,index) in arrItem" :key="index"  @click="handleShow(index)" :class="{color: item_show==index}"><span>{{i.name}}</span></p>
						</div>
						<div class="choice_text">
							<div v-for="(i,index_) in arrItem" class="item" v-if="index_ == item_show">
								<p v-for="(item,index) in i.child" :key="index" :class="{color: item.active}" @click="handleColor(index)" v-html="item.name"></p>
							</div>
						</div>
						
					</div>
					<div class="button_box">
						<div @click="handleReset">重置</div>
						<div>确定</div>
					</div>
				</div>
			</div>
		</div>
		<div class="hotel" >
			<div class="hotelItem" v-for='(i,index) in hotel' :key='index'>
				<router-link :to="Fn.getUrl({path: '/hotelDetail',query:{id:i.id,hotelName: i.name,date1:dateValue[0].datetime,date2:dateValue[1].datetime}})" tag='div'>
					<div class="img">
						<img :src="i.imgUrl">
					</div>
					<div class="msg">
						<span class="span_width lineHidden">
							<span class="flex">
								<span class="min_title">{{i.name}}</span>
							<span class="stars"><el-rate
								  v-model="i.star"
								  disabled>
								</el-rate>
							</span>
						</span>
						
						</span>
						<span class="span_width lineHidden">距市中心{{i.distance}}公里&nbsp;/&nbsp;&nbsp;{{i.city[0]}}、{{i.city[1]}}</span>
						<p>
							<span>最大房间：{{i.max_room_erea}}m<sup>2</sup></span>
							<!-- <span class="max">&nbsp;&nbsp;&nbsp;&nbsp;最多容纳：{{i.max_people}}人</span> -->
						</p>
						<span>总房间：{{i.room_total}}间</span>
						<span class="_right">
							<span class="text_1">￥</span>
							<span class="num">{{i.min_price}}</span>
							<span class="text_1 size">起</span>
						</span>
					</div>
				</router-link>
			</div>
		</div>
	</div>
</template>
<script>
	import common from '../../common/js/common'
	export default {
		mounted: function(){
			this.$axios({url:'/hotel'}).then((res)=>{
				this.hotel = res.data
			})
			console.log(new Date().getTime(),new Date(new Date().getTime()+1000*60*60*24))
		},
		data(){
			return {
				aa: [],
				starSelect: {
					price: {
						min: '',
						max: ''
					},
					
				},
				starItem: [
					{
						name: '一星/经济',
						active: false
					},
					{
						name: '二星/舒适',
						active: false
					},
					{
						name: '三星/商务',
						active: false
					},
					{
						name: '四星/高档',
						active: false
					},
					{
						name: '五星/豪华',
						active: false
					},
				],
				arrItem: [
					{
						name: '酒店品牌',
						child: [
							{
								name: '维也纳',
								active: false
							},
							{
								name: '汉庭',
								active: false
							},
							{
								name: '如家',
								active: false
							},
							{
								name: '7天',
								active: false
							},
							{
								name: '锦江',
								active: false
							},
						]
					},
					{
						name: '酒店类型',
						child: [
							{
								name: '豪华酒店',
								active: false
							},
							{
								name: '度假酒店',
								active: false
							},
							{
								name: '商务酒店',
								active: false
							},
							{
								name: '经济酒店',
								active: false
							},
							{
								name: '主题酒店',
								active: false
							},
						]
					},
					{
						name: '房间类型',
						child: [
							{
								name: '双人房',
								active: false
							},
							{
								name: '大床房',
								active: false
							},
							{
								name: '单人房',
								active: false
							},
							{
								name: '套间',
								active: false
							},
							{
								name: '&nbsp;',
								active: false
							},
						]
					},
					
				],
				tabsItem: [
					{
						name: '综合筛选',
						active: false
					},
					{
						name: '星级价格',
						active: false
					},
					{
						name: '位置距离',
						active: false
					},
				],
				hotel: [],
				tabs: false,
				local: false,
				filter: false,
				checkList: [],
				checkList2: [],
				checkList3: [],
				checkList4: [],
				checkList5: [],
				show: 3,
				value5:2,
				general: false,
				item_show: 0,
				colorBoolen: false,
				windowY: 0,
				local_box: 0,
				dateValue: [
					{
						datetime: new Date().getTime()
					},
					{
						datetime:new Date(new Date().getTime()+1000*60*60*24).getTime()
					}
				],
			}
		},
		methods: {
			handleLocalNav(i){
				this.local_box = i
			},
			onHandleTabs(event){
				event.cancelBubble = true
				this.tabs = !this.tabs
				this.local = false
				this.filter = false
				setTimeout(()=>{
					if(this.$refs.tabs){
						this.$refs.tabs.style.width = common.getStyle(this.$refs.hotel,'width')
						this.$refs.tabs.style.left = '0'
					}
				},50)
			},
			onHandleLocal(){
				event.cancelBubble = true
				this.local = !this.local
				this.tabs = false
				this.filter = false
				this._setTimeout(this.$refs.local)
			},
			onHandleFilter(){
				event.cancelBubble = true
				this.filter = !this.filter
				this.tabs = false
				this.local = false
				this._setTimeout(this.$refs.filter)
			},
			_setTimeout(obj){
				setTimeout(()=>{
					if(obj){
						obj.style.width = common.getStyle(this.$refs.hotel,'width')
						obj.style.left = '0'
					}
				},50)
			},
			handleCancel(event){
				event.cancelBubble = true
			},
			onHandleCancel(){
				this.filter = false
				this.local = false
				this.tabs = false
			},
			handleBack(){
				this.general = false
				this.show = 3
				for(let j = 0;j<this.tabsItem.length;j++){
					this.tabsItem[j].active = false
				}
				this.Fn.removeClass(document.querySelector('html'),'noscroll')
			},
			handleTabChange(i){
				if(this.tabsItem[i].active){
					this.handleBack()
				}else{
					
					if(!this.general){
						this.general = !this.general
					}
					this.show = i
					for(let j = 0;j<this.tabsItem.length;j++){
						this.tabsItem[j].active = false
					}
					this.tabsItem[i].active = true
					this.Fn.addClass(document.querySelector('html'),'noscroll')
				}
				
			},
			handleGeneral(i){
				this.handleTabChange(0)
				
			},
			handlePrice(i){
				this.handleTabChange(1)
				
			},
			handleLocal(i){
				this.handleTabChange(2)

			},
			handleShow(i){
				this.item_show = i
			},
			handleColor(i){
				this.arrItem[this.item_show].child[i].active = !this.arrItem[this.item_show].child[i].active
			},
			handleStarReset(){
				this.starSelect.price.min = ''
				this.starSelect.price.max = ''
				for(let i in this.starItem){
					this.starItem[i].active = false
				}
				this.colorBoolen = true
			},
			handleReset(){
				for(let i = 0;i<this.arrItem.length;i++){
					for(let j = 0;j<this.arrItem[i].child.length;j++ ){
						this.arrItem[i].child[j].active = false
					}
				}
			},
			handleNo(){
				this.colorBoolen = !this.colorBoolen
				for(let i=0;i< this.starItem.length;i++){
					this.starItem[i].active = false
				}
			},
			handleStar(i){
				this.starItem[i].active = !this.starItem[i].active
				this.colorBoolen = false
			},
		},
		computed: {
			// date1(){
			// 	var dd = new Date(this.dateValue[0].datetime)
			// 	return this.Fn.zero(dd.getMonth()+1) + '.' + this.Fn.zero(dd.getDate())
			// },
			// date2(){
			// 	var dd = new Date(this.dateValue[1].datetime)
			// 	return this.Fn.zero(dd.getMonth()+1) + '.' + this.Fn.zero(dd.getDate())
			// }
			
		},
		watch:{
			$route(to,from){
				if(to.name === 'hotel'){
					this.handleBack()
				}
			}
		}
	}
</script>
<style scoped lang='scss'>
	@import '../../common/css/common';
	.box{
		width: 100%;
		background-color: #fff;
		padding-top: rem(75px);
		position: relative;
		.top_box{
			width: 100%;
			background-color: #ffffff;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 999;
			.header{
				background-color: #43c122;
				padding: rem(5px) rem(10px);
				.header_{
					background-color: #fff;
					border-radius: rem(5px);
					padding: rem(5px) rem(12px);
					display: flex;
					align-items:center;
					position: relative;
					.local{
						font-size: rem(18px);
						color: #43c122;
						padding-right: rem(15px);
						border-right: 1px solid #aaa;
					}
					.input{
						// margin-left: rem(10px);
						padding: rem(3px);
						input{
							width: 88%;
							height: rem(25px);
							border: none;
							vertical-align: middle;
						}
						span{
							font-size: rem(18px);
							// display: inline-block;
							// padding: rem(3px) 0 ;
							// vertical-align: middle;
							color: #aaa;
							position: absolute;
							top: rem(9px);
							right: 5%;
						}
					}
				}
			}
			.scal{
				font-weight: bold;
				color: #43c122;
			}
			.select{
				border-bottom: 1px solid #aaa;
				padding-bottom: rem(8px);
				ul{
					display: flex;
					flex-dection: row;
					justify-content: space-around;
					position: relative;
					li{
						.tabs{
							position: absolute;
							left: -100%;
							top: rem(41px);
							width: 0;
							background-color: rgba(0,0,0,0.5);
							height: 5000%;
							z-index: 99;
							transition: all 0.5s;
							.tabs_{
								z-index: 999;
								background-color: #fff;
								p{
									padding: rem(8px) rem(25px);
									border-bottom: 1px solid #aaa;
								}
							}
						}
						.tabss{
							padding: rem(8px) 0;
							padding-bottom: rem(4px);
							font-size: rem(14px);
							.color{
								color: #43c122;
							}
						}
						.filter{
							.filter_{
								border-bottom: 1px solid #aaa;
								.title{
									font-weight: bold;
									padding: rem(5px) rem(10px);
								}
								.body{
									padding: rem(5px) rem(12px);
								}
							}
							.btn{
								margin-top: rem(15px);
								display: flex;
								border-top: 1px solid #aaa;
								button{
									border: none;
									width: 50%;
									padding: rem(15px) 0; 
									
								}
								.reset{
									background-color: #fff;
									color: #555;
								}
								.sure{
									background-color: #43c122;
									color: #fff;
								}
								.none{
									border: none;
								}
							}
						}
					}
				}
			}
		}
		.back{
			background-color: rgba(0,0,0,0.3);
			position: fixed;
			top: rem(89px);
			left: 0;
			height: 100%;
			z-index: 33;
			width: 100%;
			.button{
				background-color: #ffffff;
				display: flex;
				justify-content: space-around;
				text-align: center;
				span{
					border-top: #aaa solid rem(0.5px);
					width: 50%;
					padding: rem(10px) 0;
					&:first-child{
						border-right: #aaa solid rem(1px);
					}
					&:last-child{
						background-color: #43c122;
						color: #ffffff;
					}
				}
			}
			.content{
				background-color: #ffffff;
				.item{
					padding: rem(10px) 3%;
					p{
						&.rank{
							display: flex;
							justify-content: center;
							padding: rem(6px) 0;
							.star{
								width: 24%;
								text-align: center;
								padding: rem(8px) 0;
								background-color: #EDEDED;
								border-radius: rem(5px);
								margin: 0 4%;
							}
							.color_box{
								background-color: #ffffff;
								border: #43c122 solid rem(1px);
								color: #43c122;
							}
						}
						&.title{
							font-size: rem(14px);
						}
						&.top{
							display: flex;
							padding: rem(15px) 0;
							justify-content:center;
							span{
								background-color: #EDEDED;
								padding: rem(7px) 0;
								border-radius: rem(5px);
								&.line1{
									background-color: #fff;
									padding: 0 rem(14px);
									vertical-align: middle;
									display: inline-block;
									border: #aaa solid rem(1px);
									height: 0;
									margin-top: rem(12px);
								}
								&.input_{
									width: 30%;
									display: inline-block;
									margin: 0 rem(30px);
									input{
										width: 99%;
										border: none;
										padding: rem(2px) 0;
										font-size: rem(10px);
										background-color: #EDEDED;
										text-align: center;
										border-radius: rem(5px);
										&::-webkit-input-placeholder { 
										}
										&:-moz-placeholder { 
										    color:    #aaa;
										}
										&::-moz-placeholder { 
										    color:    #aaa;
										}
										&:-ms-input-placeholder { 
										    color:    #aaa;
										}

									}
								}
							}
						}

					}
					
				}
				.m{
					border-bottom: #aaa solid rem(0.5px);
					padding: rem(10px) rem(15px);
					font-size: rem(14px);
				}
				.none{
					border-bottom: none;
					padding-bottom: rem(10px);
				}
				.back_box{
					display: flex;
					font-size: rem(14px);
					.color{
				    	color: #43c122;
				    }
					.choice_title{
						width: 50%;
						background-color: #EDEDED;
						p{
						    padding: rem(10px) 0;
						    background-color: #EDEDED;
						    &.color{
						    	background-color: #ffffff;
						    }
						 //    &:last-child{
							// 	background-color: transparent;
							// 	color: transparent;
							// 	padding: none;
							// 	width: 0;
							// }
							span{
								margin-left: 8%;
							}
						}
						&:last-child{
							background-color: transparent;
							color: transparent;
						}
					}
					.choice_text{
						width: 50%;
						.item{
							p{
							    padding: rem(10px) 20%;
							    border-bottom: #EDEDED solid rem(1px);
							}
						}
					}
					
				}
				.button_box{
					display: flex;
					text-align: center;
					font-size: rem(14px);
					border-top: #aaa solid rem(0.5px);
					div{
						&:first-child{
							width: 50%;
							border-right: #aaa solid rem(0.5px);
							padding: rem(12px) 0;
						}
						&:last-child{
							width: 50%;
							padding: rem(12px) 0;
							background-color: #43c122;
							color: #ffffff;
						}
					}
				}
			}
			.local_box{
				background-color: #ffffff;
				.content_{
					display: flex;
					.content_nav{
						width: 20%;
						.nav_item{
							padding: rem(5px) rem(8px);
							border-bottom: 1px #ccc solid;
						}
					}
					.content_show{
						width: 80%;
						.show_item{
							width: 100%;
							.out_tome{
								width: 100%;
								li{
									width: 100%;
									padding: rem(5px) rem(10px);
									border-bottom: 1px #ccc solid;
									border-left: 1px #ccc solid;
								}
							}
							.show_item_erea{
								display: flex;
								div{
									padding: rem(5px) rem(10px);
									border-bottom: 1px #ccc solid;
									border-left: 1px #ccc solid;
								}
								.show_item_Nav{
									width:20%;
									text-align: center;
								}
								.show_item_item{
									width: 80%;
								}
							}
						}
					}
				}
			}
		}
		.star{
			background-color: #F2F2F2;
			display: flex;
			justify-content: space-around;
			padding: rem(6px) 0;
			span{
				padding: rem(5px) 6%;
				font-size: rem(14px);
				background-color: #ffffff;
			}
		}
		.hotel{
			padding: rem(10px) rem(5px); 
			font-size: rem(13px);
			padding-bottom: rem(50px);
			.hotelItem{
				padding-bottom: rem(15px);
				div{
					display: inline-block;
					vertical-align: top;
				}
				.img{
					width: 25%;
					img{
						width: 100%;
						height: rem(100px);
						border-radius: rem(5px);
					}
				}
				.msg{
					position: relative;
					padding-left: rem(5px);
					width: 70%;
					.min_title{
						font-size: rem(16px);
						font-weight: bold;
					}
					
					img{
						width: rem(13px);
						height: rem(13px);
						vertical-align: center;
					}
					span{
						display: inline-block;
						padding: rem(2px) 0;
						&:first-child{
							display: inline;
						}
					}
					.span_width{
						padding: 0;
						width: 100%;
					}
					._right{
						float: right;
						.num{
							font-size: rem(18px);
							color: #ff9800;
						}
						.text_1{
							color: #ff9800;
							font-size: rem(15px);
						}
						.size{
							font-size: rem(12px);
						}
					}
					p{
						.max{
							position: absolute;
							bottom: rem(22px);
							right: 0;
						}
					}
				}
			}
		}
	}
	
</style>