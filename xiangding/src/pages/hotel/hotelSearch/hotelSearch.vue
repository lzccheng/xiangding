<template>

	<div class="box">
		
		<div >
			<Header :title="title"/>
			<div class="_content">
			    <div class="top_box">
					<div class="_search">
						<div class="_text">
							<div class="erea">
								<span >广州</span>
							</div>
							<div class="date">
								<span class="posi p1">
									<span><span class="color">3.29 </span> 到</span>
								</span>
								<span class="posi p2">
									<span><span class="color">3.30 </span> 离</span>
								</span>
							</div>
							<router-link tag="div" to="/hotel/searchPage" class="search_" @click="handleSearch">
								<input type="text" placeholder="酒店 / 品牌" class="">
								<span><i class="fas fa-search"></i></span>
							</router-link>
						</div>
					</div>
					<div class="_tabs">
						<div @click="handleGeneral" class="tab_">
							<span :class="{'color': 0 == show}">综合筛选</span>
							<span v-if="0 != show"><i class="fas fa-angle-down"></i></span>
							<!-- <span v-if="!up" >
							<i class="fas fa-angle-down"></i></span> -->
						</div>
						<div @click="handlePrice" class="tab_">
							<span :class="{'color': 1 == show}">星级价格</span>
							<span v-if="1 != show"><i class="fas fa-angle-down"></i></span>
						</div>
						<div v-if="title !== '会议室'" @click="handleLocal" class="tab_">
							<span :class="{'color': 2 == show}">位置距离</span>
							<span v-if="2 != show"><i class="fas fa-angle-down"></i></span>
						</div>
					</div>
				</div>
				<div v-if="general" @click="handleBack" class="back">
					<div v-if="0 == show" @click="handleCancel">
						<div v-if="title == '酒店列表'">
							<div class="content">
							    <div class="back_box">
									<div class="choice_title">
										<p v-for="(i,index) in arrItem" :key="index"  @click="handleShow(index)" :class="{color: item_show==index}"><span>{{i.name}}</span></p>
									</div>
									<div class="choice_text">
										<div v-for="(i,index_) in arrItem" class="item" v-if="index_ == item_show">
											<p v-for="(item,index) in i.child" :key="index" :class="{color: item.active}" @click="handleColor(index)">{{item.name}}</p>
										</div>
									</div>
								</div>
								<!-- <div class="button">
									<div @click="handleReset">重置</div>
									<div>确定</div>
								</div> -->
							</div>
							<div class="button">
								<span @click="handleReset_">重置</span>
								<span>确定</span>
							</div>
						</div>
						<div v-else>
							<div class="content">
								<div class="item">
									<!-- <p v-if="title !== '会议室'" class="title" ></p> -->
									<p v-if="title === '团房'" class="title" >团房数量</p>
									<p v-if="title === '钟点房'" class="title" >钟点房数量</p>
									<p v-if="title !== '会议室'" class="top">
										<span class="input_"><input type="text" v-model="select.num.min" placeholder="最低值"></span>
										<span class="line1"></span>
										<span class="input_"><input type="text" v-model="select.num.max" placeholder="最高值"></span>
									</p>
								</div>
								<div class="item">
									<p v-if="title === '会议室'" class="title" >会议室面积</p>
									<p v-if="title === '团房'" class="title" >团房面积</p>
									<p v-if="title === '钟点房'" class="title" >钟点房面积</p>
									<p class="top">
										<span class="input_"><input type="text" v-model="select.erea.min" placeholder="最低值"></span>
										<span class="line1"></span>
										<span class="input_"><input type="text" v-model="select.erea.max" placeholder="最高值"></span>
									</p>
								</div>
								<div class="item">
									<p class="title">容纳人数</p>
									<p class="top">
										<span class="input_"><input type="text" v-model="select.people.min" placeholder="最低值"></span>
										<span class="line1"></span>
										<span class="input_"><input type="text" v-model="select.people.max" placeholder="最高值"></span>
									</p>
								</div>
							</div>
							<div class="button">
								<span @click="handleReset">重置</span>
								<span>确定</span>
							</div>
						</div>
						
					</div>
					<div v-if="1 == show" @click="handleCancel">
						<div class="content">
							<div class="item">
								<p class="title">价格区间</p>
								<p class="top">
									<span class="input_"><input type="text" v-model="starSelect.price.min"  placeholder="最低值"></span>
									<span class="line1"></span>
									<span class="input_"><input type="text" v-model="starSelect.price.max" placeholder="最高值"></span>
								</p>
							</div>
							<div class="item">
								<p class="title">酒店星级</p>
								<p class="rank">
									<span class="star" :class="{color_box: colorBoolen}" @click="handleNo">不限</span>
									<span class="star" :class="{color_box: starItem[0].active}" @click="handleStar(0)">一星</span>
									<span class="star" :class="{color_box: starItem[1].active}" @click="handleStar(1)">二星</span>
								</p>
								<p class="rank">
									<span class="star" :class="{color_box: starItem[2].active}" @click="handleStar(2)">三星</span>
									<span class="star" :class="{color_box: starItem[3].active}" @click="handleStar(3)">四星</span>
									<span class="star" :class="{color_box: starItem[4].active}" @click="handleStar(4)">五星</span>
								</p>
							</div>
						</div>
						<div class="button">
							<span @click="handleStarReset">重置</span>
							<span>确定</span>
						</div>
					</div>
					<div v-if="2 == show" @click="handleCancel">
						<div class="content">
							<p class="m top">1米 - 500米</p>
							<p class="m">500米 - 1500米</p>
							<p class="m none">1500米 - 3000米</p>
						</div>
					</div>
				</div>
				<div class="free">
					<div class="text">免费取消</div>
					<div class="text">活动优惠</div>
				</div>
				<div class="show">
					<router-link :to="{path: '/hotelDetail',query:{id:2,name: title}}" tag="div" class="item" v-for="(i,index) in 10" :key='index'>
						<div class="img">
							<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523706249725&di=7bd2cda519bba9f885f6504617bc853b&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F9922720e0cf3d7cac93f8f64f81fbe096a63a9d3.jpg" alt="">
						</div>
						<div class="msg">
							<p class="title">
								<span>广州银河大酒店</span>
							</p>
							<p class="lineHidden">
								<span>珠江新城、</span>
								<span>五羊商城</span>
							</p>
							<p>
								<span>房间面积：30m <sup>2</sup></span>
							</p>
							<p>
								<span>剩余房间: 100间</span>
							</p>
							<p class="cancel">
								<span>立减</span>
								<span>免费取消</span>
							</p>
						</div>
						<div class="price">
							<p class="star lineHidden">
								<el-rate
								  v-model="star"
								  disabled
								  text-color="#ff9900"
								  score-template="{value}"/>
							</p >
							<p class="pay">
								<span>
									<span>￥</span>
									<span class="num">848</span>
									<span class="text">起</span>
								</span>
							</p>
						</div>
					</router-link>
				</div>
			</div>

		</div>
		

		
	</div>
</template>
<script>
	export default {
		mounted(){
			if(this.$route.query.name){
				this.title = this.$route.query.name
			}
		},
		data(){
			return {
				select: {
					num: {
						min: '',
						max: ''
					},
					erea: {
						min: '',
						max: ''
					},
					people: {
						min: '',
						max: ''
					},
				},
				starSelect: {
					price: {
						min: '',
						max: ''
					},
					
				},
				starItem: [
					{
						name: '一星',
						active: false
					},
					{
						name: '二星',
						active: false
					},
					{
						name: '三星',
						active: false
					},
					{
						name: '四星',
						active: false
					},
					{
						name: '五星',
						active: false
					},
				],
				tabsItem: [
					{
						name: '综合筛选',
						active: false
					},
					{
						name: '星际价格',
						active: false
					},
					{
						name: '位置距离',
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
								name: '套件',
								active: false
							},
						]
					},
				],
				colorBoolen: false,
				general: false,
				show: 3,
				item_show: 0,
				star: 5,
				title: '酒店列表',
				isSearch: false,
				look: false
			}
		},
		methods: {
			handleLook(){
				this.look = true
			},
			handleResetLook(){
				this.look = false
			},
			handleGeneral(){
				this.handleTabChange(0)
			},
			handlePrice(){
				this.handleTabChange(1)
			},
			handleLocal(){
				this.handleTabChange(2)
			},
			handleBack(){
				this.general = false
				this.show = 3
				for(let j = 0;j<this.tabsItem.length;j++){
					this.tabsItem[j].active = false
				}
				document.querySelectorAll('body')[0].style.overflow = 'auto'
			},
			handleShow(i){
				this.item_show = i
			},
			handleColor(i){
				this.arrItem[this.item_show].child[i].active = !this.arrItem[this.item_show].child[i].active
			},
			handleReset_(){
				for(let i = 0;i<this.arrItem.length;i++){
					for(let j = 0;j<this.arrItem[i].child.length;j++ ){
						this.arrItem[i].child[j].active = false
					}
				}
			},
			handleTabChange(i){
				if(this.tabsItem[i].active){
					this.handleBack()
				}else{
					this.tabsItem[i].active = true

					if(!this.general){
						this.general = !this.general
					}
					this.show = i
					for(let j = 0;j<this.tabsItem.length;j++){
						if(this.tabsItem[j].active){
							continue
						}
						this.tabsItem[j].active = false
					}
				}
				document.querySelectorAll('body')[0].style.overflow = 'hidden'
			},
			handleCancel(event){
				event.cancelBubble = true
			},
			handleUp(){
				this.up = true
			},
			handleStar(i){
				this.starItem[i].active = !this.starItem[i].active
				this.colorBoolen = false
			},
			handleReset(){
				for(let i in this.select){
					this.select[i].min = ''
					this.select[i].max = ''
				}
			},
			handleStarReset(){
				this.starSelect.price.min = ''
				this.starSelect.price.max = ''
				for(let i in this.starItem){
					this.starItem[i].active = false
				}
				this.colorBoolen = true
			},
			handleNo(){
				this.colorBoolen = !this.colorBoolen
				for(let i=0;i< this.starItem.length;i++){
					this.starItem[i].active = false
				}
			},
			handleSearch(){
				this.isSearch = true
			},
			handleReturn(){
				this.isSearch = false
			},
		},
		watch: {
			$route (to,from){
				if(to.name === 'hotelSearch'){
					if(this.$route.query.name){
						this.title = this.$route.query.name
					}else{
						this.title = '酒店列表'
					}
				}
			}
		}
	}
</script>
<style scoped lang="scss">
	@import '../../../common/css/common';
	.box{
		width: 100%;
		.color{
			color: #43C122;
		}
		.content_body{
			font-size: rem(14px);
			.top_box{
				background-color: #43C122;
				padding: 0 3%;
				display: flex;
				padding: rem(5px) 0;
				.left_icon{
					color: #fff;
					font-size: rem(20px);
					padding: 0 3%;
				}
				.search_{
					background-color: #fff;
					border-radius: rem(5px);
					padding: rem(7px) 15% rem(7px) 3%;
					span{
						// padding: 0 10%;
						&:first-child{
							font-size: rem(14px);
							padding-right: rem(5px);
						}
						input{
							border: none;
							// width: 100%;
						}
					}
					
				}
				.select_text{
					font-size: rem(16px);
					color: #fff;
					padding: 0 4%;
					margin-top: rem(5px);
					// text-align: center;
				}
			}
			.history{
				padding: rem(8px) 5%;
				border-bottom: #aaa solid rem(1px);

				span{
					&:first-child{
						font-size: rem(14px);
						padding-right: 75%;
					}
					&:last-child{
						font-size: rem(17px);
					}
				}
			}
			.text{
				display: flex;
				justify-content: center;
				span{
					// font-size: rem(14px);
					display: inline-block;
					width: 50%;
					border-right: #aaa solid rem(1px);
					border-bottom: #aaa solid rem(1px);
					padding: rem(10px) 4%;
				}
				.border{
					border-right: none;
					display: inline-block;
				}
			}
			.line{
				border: #EDEDED solid rem(7px);
			}
			.eye{
				border-top: #aaa solid rem(1px);
				padding-top: rem(13px);
				
				font-size: rem(14px);
				// span{
				// 	margin: 0 rem(2px);
				// }
				div{
					text-align: center;
					&.recommend{
						// border-bottom: #aaa solid rem(1px);
						// padding: rem(12px);
						.title{
							padding-bottom: rem(14px);
							span{

								&:first-child{
									margin-right: 67%;
								}	
								&:last-child{
									font-size: rem(16px);
								}
							}
						}
						
						.text_{
							display: flex;
							justify-content: center;
							text-align: left;
							border-top: #aaa solid rem(1px);
							span{
								display: inline-block;
								width: 50%;
								padding: rem(10px) 4%;
								border-right: #aaa solid rem(1px);
							}
							.border{
								border-right: none;
							}
							.bottom{
								border-bottom: #aaa solid rem(1px);
							}
						}
					}
					
				}
			}

		}
		._content{
			// position: fixed;
			// top: rem(50px);
			// left: 0;
			// z-index: 999;
			background-color: #EDEDED;
			padding-top: rem(92px);
			position: relative;
			.top_box{
				width: 100%;
				position: fixed;
				top: rem(45px);
				left: 0;
				z-index: 999;
				._search{
					background-color: #43c122;
					padding:rem(5px) rem(10px);
					._text{
						height: rem(30px);
						line-height: rem(30px);
						background-color: #fff;
						border-radius: rem(5px);
						padding: 5px rem(13px);
						position: relative;
						>div{
							display: inline-block;
							&.erea{
								padding-right: rem(8px);
								border-right: 1px solid #43c122;
								span{
									color: #43c122;
									font-size: rem(14px);
								}
							}
							&.date{
								width: 20%;
								position: relative;
								.posi{
									position: absolute;
									left: 0;
									padding-left: rem(10px);

									.color{
										color: #43c122;
									}
								}
								.p1{
									top: rem(-30px); 
								}
								.p2{
									top: rem(-12px);
								}
							}
							&.search_{
								width: 50%;
								font-size: rem(16px);
								border-left: 1px solid #43c122;

								span{
									// display: inline-block;
									position: absolute;
									top: rem(5px);
									right: 5%;
								}
								input{
									width: 70%;
									border: none;
									padding: rem(3px) rm(8px);
									font-size: rem(14px);
									margin-left: rem(12px);
									&::-webkit-input-placeholder { 
									    color:    #aaa;
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
				._tabs{
					display: flex;
					justify-content: space-around;
					border-bottom: 1px solid #aaa;
					background-color: #fff;
	 				.tab_{
						padding: rem(12px);
						font-size: rem(14px);
					}
				}
			}
			.back{
				background-color: rgba(0,0,0,0.3);
				height: 100%;
				position: fixed;
				top: rem(136px);
				left: 0;
				z-index: 9999;
				width: 100%;
				.content{
					background-color: #ffffff;
					padding: 0 0;
					// padding-bottom: rem(10px);
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
								padding: 0 5%;
								p{
								    padding: rem(10px) 20%;
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
						padding-bottom: rem(7px);
					}
					.top{
						padding-top: 0;
					}
					.item{
						padding-bottom: rem(20px);
						p{
							padding-left: 4%;
							&.rank{
								display: flex;
								justify-content: center;
								padding: rem(10px) 0;
								.star{
									padding: rem(8px) 10%;
									background-color: #EDEDED;
									border-radius: rem(5px);
									margin: 0 rem(8px);
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
										border: #000 solid rem(1px);
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
				}
				.button{
					background-color: #ffffff;
					display: flex;
					justify-content: space-around;
					text-align: center;
					font-size: rem(14px);
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
			}
			.free{
				
				.text{
					display: inline-block;
					padding: rem(5px) rem(10px);
					margin: rem(8px) rem(12px);
					background-color: #fff;
					border-radius: rem(3px);
				}
			}
			.show{
				background-color: #fff;
				padding: 0 rem(8px);
				.item{
					padding: rem(13px) 0;
					display: flex;
					border-bottom: 1px solid #aaa;
					.img{
						width: 25%;
						height: rem(130px);
						img{
							width: 100%;
							height: 100%;
							border-radius: rem(5px);						}
					}
					p{
						color: #aaa;
					}
					.msg{
						padding: 0 rem(8px);
						font-size: rem(13px);
						.title{
							font-size: rem(16px);
							font-weight: bold;
							color: #000;
						}
						p{
							color: #aaa;
							padding-bottom: rem(5px);
							&.cancel{
								span{
									display: inline-block;
									padding: 0 rem(5px) rem(2px);
									margin: 0 rem(1px);
									border: 1px solid #FFA44F;
									color: #FFA44F;
								}
							}
						}
					}
					.price{
						width: 37%;
						position: relative;
						.star{
							padding-top: rem(2px);
						}
						.pay{
							position: absolute;
							right: 0;
							bottom: rem(8px);
							>span{
								span{
									color: #FFA44F;
									&:first-child{
										font-size: rem(15px);
									}
									&.num{
										font-size:rem(18px);
									}
									
								}
							}
						}
					}
				}
			}
		}
	}
</style>