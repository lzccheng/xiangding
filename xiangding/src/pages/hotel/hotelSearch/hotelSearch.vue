<template>
	<div class="box">
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
						<div class="search_">
							<span><i class="fas fa-search"></i></span>
							<input type="text" placeholder="酒店 / 品牌" class="">
						</div>
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
						<span :class="{'color': 1 == show}">星际价格</span>
						<span v-if="1 != show"><i class="fas fa-angle-down"></i></span>
					</div>
					<div @click="handleLocal" class="tab_">
						<span :class="{'color': 2 == show}">位置距离</span>
						<span v-if="2 != show"><i class="fas fa-angle-down"></i></span>
					</div>
				</div>
			</div>
			<div v-if="general" @click="handleBack" class="back">
				<div v-if="0 == show" @click="handleCancel">
					<div class="content">
						<div class="item">
							<p class="title">会议室数量</p>
							<p class="top">
								<span>最低值</span>
								<span class="line">一</span>
								<span>最高值</span>
							</p>
						</div>
						<div class="item">
							<p class="title">会议室面积</p>
							<p class="top">
								<span>最低值</span>
								<span class="line">一</span>
								<span>最高值</span>
							</p>
						</div>
						<div class="item">
							<p class="title">容纳人数</p>
							<p class="top">
								<span>最低值</span>
								<span class="line">一</span>
								<span>最高值</span>
							</p>
						</div>
					</div>
					<div class="button">
						<span>重置</span>
						<span>确定</span>
					</div>
				</div>
				<div v-if="1 == show" @click="handleCancel">
					<div class="content">
						<div class="item">
							<p class="title">价格区间</p>
							<p class="top">
								<span>最低值</span>
								<span class="line">一</span>
								<span>最高值</span>
							</p>
						</div>
						<div class="item">
							<p class="title">酒店星级</p>
							<p class="rank">
								<span class="star">不限</span>
								<span class="color_box">一星</span>
								<span class="star">二星</span>
							</p>
							<p class="rank">
								<span class="star">三星</span>
								<span class="color_box">四星</span>
								<span class="star">五星</span>
							</p>
						</div>
					</div>
					<div class="button">
						<span>重置</span>
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
						<p>
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
						<p class="star">
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
				general: false,
				show: 3,
				arrItem: [
					{

					}
				],
				star: 5,
				title: '酒店列表',
			}
		},
		methods: {
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
			handleBack(){
				this.general = false
				this.show = 3
			},
			handleCancel(event){
				event.cancelBubble = true
			},
			handleUp(){
				this.up = true
			}
		},
		watch: {
			$route (to,from){
				if(to.name === 'hotelSearch'){
					if(this.$route.query.name){
						this.title = this.$route.query.name
					}else{
						this.title = '酒店'
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
				top: rem(50px);
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
									display: inline-block;
									padding: 0 rem(8px);
								}
								input{
									width: 70%;
									border: none;
									padding: rem(3px) rm(8px);
									font-size: rem(14px);
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
					}
				}
			}
			.back{
				background-color: rgba(0,0,0,0.3);
				height: 100%;
				position: fixed;
				top: rem(140px);
				left: 0;
				z-index: 9999;
				width: 100%;
				.content{
					background-color: #ffffff;
					padding: rem(15px) rem(17px);
					.m{
						border-bottom: #aaa solid rem(0.5px);
						padding: rem(10px) rem(15px);
						font-size: rem(14px);
					}
					.none{
						border-bottom: none;
						padding-bottom: rem(1px);
					}
					.top{
						padding-top: 0;
					}
					.item{
						p{
							&.rank{
								display: flex;
								justify-content: center;
								padding: rem(10px) 0;
								.star{
									padding: rem(8px) 10%;
									background-color: #EDEDED;
									border-radius: rem(5px);
								}
								.color_box{
									background-color: #ffffff;
									border: #43c122 solid rem(1px);
									color: #43c122;
									padding: rem(8px) 10%;
									margin: 0 rem(15px);
									border-radius: rem(5px);
								}
							}
							&.title{
								font-size: rem(14px);
							}
							&.top{
								padding: rem(15px) 0;
								display: flex;
								 justify-content:center;
								span{
									padding: rem(8px) 12%;
									background-color: #EDEDED;
									border-radius: rem(5px);
									&.line{
										background-color: #ffffff;
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
						.title{
							font-size: rem(16px);
							font-weight: bold;
							color: #000;
							padding-bottom: rem(15px);
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
						width: 35%;
						position: relative;
						.star{
						}
						.pay{
							position: absolute;
							right: 0;
							bottom: rem(8px);
							>span{
								span{
									font-weight: bold;
									&:first-child{
										color: #FFA44F;
									}
									&.num{
										font-size:rem(16px);
										color: #FFA44F;
									}
									&.text{
										color: #333;
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