<template>
	<div class="box" @click="onHandleCancel" ref="hotel">
	    <div class="top_box">
			<div class="header">
				<div class="header_">
					<div class="local">
						<span>广州</span>
					</div>
					<div class="input">
						<span><i class="fas fa-search"></i></span>
						<input type="text" placeholder="酒店搜索/关键字">
					</div>
				</div>
				
			</div>
			<div class="select">
				<ul>
					<li>
						<div class="tabss" @click="handleGeneral">
							<span :class="{'color': 0 == show}">价格</span>
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
					<li>
						<div class="tabss" @click="handlePrice">
							<span :class="{'color': 1 == show}">位置</span>
							<span v-if="1 != show"><i class="fas fa-angle-down"></i></span>
						</div>
						<!-- <div class="tabs" ref="local">
							<div class="tabs_" v-if="local" @click="onHandlecancelBubble">
								<p>1米-500米</p>
								<p>500米-1500米</p>
								<p>1500米-3000米</p>
							</div>
						</div> -->
					</li>
					<li>
						<div class="tabss" @click="handleLocal">
							<span :class="{'color': 2 == show}">筛选</span>
							<span v-if="2 != show"><i class="fas fa-angle-down"></i></span>
						</div>
						<!-- <div class="tabs" ref="filter">
							<div class="tabs_" v-if="filter">
								<div class="filter" @click="onHandlecancelBubble">
									<div class="filter_">
										<div class="title">酒店品牌:</div>
										<div class="body">
											   <el-checkbox-group v-model="checkList">
											    <el-checkbox label="维也纳"></el-checkbox>
											    <el-checkbox label="汉庭"></el-checkbox>
											    <el-checkbox label="如家"></el-checkbox>
											    <el-checkbox label="几天"></el-checkbox>
											    <el-checkbox label="锦江"></el-checkbox>
											  </el-checkbox-group>
										</div>
									</div>
									<div class="filter_">
										<div class="title">酒店类型:</div>
										<div class="body">
											   <el-checkbox-group v-model="checkList2">
											    <el-checkbox label="豪华酒店"></el-checkbox>
											    <el-checkbox label="度假酒店"></el-checkbox>
											    <el-checkbox label="商务酒店"></el-checkbox>
											    <el-checkbox label="经济酒店"></el-checkbox>
											    <el-checkbox label="主题酒店"></el-checkbox>
											  </el-checkbox-group>
										</div>
									</div>
									<div class="filter_">
										<div class="title">房间类型:</div>
										<div class="body">
											   <el-checkbox-group v-model="checkList3">
											    <el-checkbox label="双人房"></el-checkbox>
											    <el-checkbox label="大床房"></el-checkbox>
											    <el-checkbox label="单人房"></el-checkbox>
											    <el-checkbox label="套件"></el-checkbox>
											  </el-checkbox-group>
										</div>
									</div>
									<div class="filter_">
										<div class="title">房间数量:</div>
										<div class="body">
											   <el-checkbox-group v-model="checkList4">
											    <el-checkbox label="单间"></el-checkbox>
											    <el-checkbox label="团房"></el-checkbox>
											  </el-checkbox-group>
										</div>
									</div>
									<div class="filter_ none">
										<div class="title">设施:</div>
										<div class="body">
											   <el-checkbox-group v-model="checkList5">
											    <el-checkbox label="WiFi"></el-checkbox>
											    <el-checkbox label="餐饮美食"></el-checkbox>
											    <el-checkbox label="健身房"></el-checkbox>
											    <el-checkbox label="游泳池"></el-checkbox>
											  </el-checkbox-group>
										</div>
									</div>
									<div class="btn"><button class="reset">重置</button><button class="sure">筛选</button></div>
								</div>
							</div>
						</div> -->
					</li>
				</ul>
			</div>
		</div>
		<div class="back" v-if="general" @click="handleBack">
			<div v-if="0 == show" @click="handleCancel">
				<div class="content">
					<p class="m"><span>综合</span></p>
					<p class="m"><span>价格降序</span></p>
					<p class="m none"><span>价格升序</span></p>
				</div>
			</div>
			<div v-if="1 == show" @click="handleCancel">
				<div class="content">
					<p class="m"><span>1米 - 500米</span></p>
					<p class="m"><span>500米 - 1500米</span></p>
					<p class="m none"><span>1500米 - 3000米</span></p>
				</div>
			</div>
			<div v-if="2 == show" @click="handleCancel">
				<div class="content">
				    <div class="back_box">
						<div class="choice_title">
							<p v-for="(i,index) in arrItem" :key="index"  @click="handleShow(index)" :class="{color: item_show==index}">{{i.name}}</p>
						</div>
						<div class="choice_text">
							<div v-for="(i,index_) in arrItem" class="item" v-if="index_ == item_show">
								<p v-for="(item,index) in i.child" :key="index" :class="{color: item.active}" @click="handleColor(index)">{{item.name}}</p>
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
		<div class="hotel">
			<div class="hotelItem" v-for='(i,index) in hotel' :key='index'>
				<router-link :to="{path: '/hotelDetail',query:{id:i.id}}" tag='div'>
					<div class="img">
						<img :src="i.imgUrl">
					</div>
					<div class="msg">
						<span class="flex">
							<span class="min_title">{{i.name}}</span>
						<span><el-rate
							  v-model="i.star"
							  disabled>
							</el-rate>
						</span>
						</span>
						<span>距市中心{{i.distance}}公里&nbsp;/&nbsp;&nbsp;{{i.city[0]}}、{{i.city[1]}}</span>
						<p>
							<span>最大房间：{{i.max_room_erea}}m<sup>2</sup></span>
							<span class="max">&nbsp;&nbsp;&nbsp;&nbsp;最多容纳：{{i.max_people}}人</span>
						</p>
						<span>总房间：{{i.room_total}}间</span>
						<span class="_right">￥{{i.min_price}}起</span>
					</div>
				</router-link>
			</div>
		</div>
	</div>
</template>
<script>
	import star from '../../components/star/star'
	import common from '../../common/js/common'
	export default {
		mounted: function(){
			this.$axios({url:'/api/hotel'}).then((res)=>{
				this.hotel = res.data
			})

		},
		components: {
	        star
	      },
		data(){
			return {
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
								name: '套件',
								active: false
							},
						]
					},
					{
						name: '房间数量',
						child: [
							{
								name: '单间',
								active: false
							},
							{
								name: '团房',
								active: false
							},
							
						]
					},
					{
						name: '设施',
						child: [
							{
								name: 'wifi',
								active: false
							},
							{
								name: '餐饮美食',
								active: false
							},
							{
								name: '健身房',
								active: false
							},
							{
								name: '游泳池',
								active: false
							},
						]
					}
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
				item_show: 0
			}
		},
		methods: {
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
			},
			handleGeneral(){
				if(!this.general){
					this.general = !this.general
				}
				this.show = 0
			},
			handlePrice(){
				if(!this.general){
					this.general = !this.general
				}
				this.show = 1
			},
			handleLocal(){
				if(!this.general){
					this.general = !this.general
				}
				this.show = 2
			},
			handleShow(i){
				this.item_show = i
			},
			handleColor(i){
				this.arrItem[this.item_show].child[i].active = !this.arrItem[this.item_show].child[i].active
			},
			handleReset(){
				for(let i = 0;i<this.arrItem.length;i++){
					for(let j = 0;j<this.arrItem[i].child.length;j++ ){
						this.arrItem[i].child[j].active = false
					}
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
		padding-top: rem(100px);
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
					padding: rem(8px) rem(12px);
					display: flex;
					.local{
						font-size: rem(18px);
						color: #43c122;
						padding-right: rem(15px);
						border-right: 1px solid #aaa;
					}
					.input{
						margin-left: rem(20px);
						input{
							width: 70%;
							height: rem(25px);
							border: none;
						}
						span{
							font-size: rem(18px);
							display: inline-block;
							padding: rem(3px) rem(8px);
							vertical-align: middle;
							color: #aaa;
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
			top: rem(97px);
			left: 0;
			height: 100%;
			z-index: 33;
			width: 100%;
			.content{
				background-color: #ffffff;
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
						p{
						    padding: rem(10px) 6%;
						    background-color: #EDEDED;
						    &.color{
						    	background-color: #ffffff;
						    }
						}
					}
					.choice_text{
						width: 50%;
						.item{
							p{
							    padding: rem(10px) 20%;
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
		}
		.hotel{
			padding: rem(10px) rem(5px); 
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
					width: 65%;
					.min_title{
						font-size: rem(16px);
						font-weight: bold;
					}
					.flex{
						display: flex;
					}
					img{
						width: rem(13px);
						height: rem(13px);
						vertical-align: center;
					}
					span{
						display: inline-block;
						padding: rem(3px) 0;
						&:first-child{
							display: inline;
						}
					}
					._right{
						float: right;
						font-weight:bold;
						color: #ff9800;
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