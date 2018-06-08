<template>
	<div class="box">
		<Header title="订单列表"/>
		<myalert :innerHtml="htmltest" title_3="温馨提示" @handleCancel="aaa" :show="alertShow" status="0" />
		<!-- <div class="back" v-if="back_show" @click="backHide">
			<div class="alert" @click="cancelBubble">
				<p class="tip">温馨提示</p>
				<p>您确定取消订单吗 ?</p>
				<p>
					<span @click="backHide">取消</span>
					<span>确定</span>
				</p>
			</div>
		</div> -->

		<div>
			<div class="nav">
				<div class="tab" ref="tab"> 
					<div v-for="(i,index) in arrItem" :key='index' @click="handleClick(index,$event)"> 
						<span>{{i}}</span>
					</div>
				</div>
				<div class="line" ref="_line"></div>
			</div>
			
			<div class="show" v-if="">
				<div v-if="0==index_">
					<div class="body">
						<div class="item">
							<!-- <span class="time">预定日期: 03-20</span> -->
							<div class="content_box" v-for="(i,index) in arr0" :key="index">
								<router-link tag="div" :to="Fn.getUrl({path: '/my/order/orderPay',query: {isPay: false,id:i.order_sn}})" class="content">
									<p>
										<span class="title">{{i.order_sn}}</span>
										<!-- <span class="title_t">(豪华酒店 |四星级)</span> -->
										<span class="cross"><i class="f  ar fa-times-circle"></i></span>
									</p>
									<p>
										<span class="titl_hide">{{i.goods_total}}间. {{i.title}}</span>
									</p>
									<p>
										<span class="title_hide">客户名称: {{$store.state.userInfo.realname}}</span>
										<span class="no">
											<span class="money_color">¥</span>
											<span class="money_size">{{i.price}}</span>
										</span>
									</p>
									<p>
										<span class="title_hide">支付剩余时间: 5分钟</span>
										<span class="no_pay">{{i.status_name}}</span>
									</p>
								</router-link>
								<div class="content_2">
								    <div class="plane">
								    	&nbsp;
									    <!-- i class="fas fa-location-arrow"></i> -->
									    <!-- <span class="here">到这里</span> -->
								    </div>
									
									<div class="button">
										<span class="change" @click="handleShow(i.order_sn)">取消订单</span>
										<router-link tag="span" :to="Fn.getUrl({path: '/my/order/orderPay',query: {isPay: 0}})" class="pay">付款</router-link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div v-if="1==index_">
					<div class="body">
						<div class="item">
							<!-- <span class="time">预定日期: 03-20</span> -->
							<div class="content_box" v-for="(i,index) in arr1" :key="index">
								<router-link tag="div" :to="Fn.getUrl({path: '/my/order/orderPay',query:{isPay: 1}})" class="content">
									<p>
										<span class="title">{{i.order_sn}}</span>
										<!-- <span class="title_t">(豪华酒店 |四星级)</span> -->
										<span class="cross"><i class="far fa-times-circle"></i></span>
									</p>
									<p>
										<span class="title_hide">{{i.goods_total}}间.  {{i.title}}</span>
									</p>
									<p>
										<span class="title_hide">客户名称: {{$store.state.userInfo.realname}} </span>
										<span class="no">
											<span class="money_color">¥</span>
											<span class="money_size">{{i.price}}</span>
										</span>
									</p>
									<p style="padding-bottom: 18px;">
										<span class="title_hide"> </span>
										<span class="no_pay">{{i.status_name}}</span>
									</p>
								</router-link>
								<div class="content_2">
								    <div class="plane">
									    <!-- <i class="fas fa-location-arrow"></i>
									    <span class="here">到这里</span> -->
								    </div>
									
									<div class="button">
										<router-link tag="span" :to="Fn.getUrl({path: '/my/cancelRoom'})" class="change">申请退房</router-link>
										<router-link tag="span" :to="Fn.getUrl({path: '/hotelDetail',query:{id:4,hotelName: '银河大酒店'}})" class="pay">再次预定</router-link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div v-if="2==index_">
					<div class="body">
						<div class="item">
							<!-- <span class="time">预定日期: 03-20</span> -->
							<div class="content_box" v-for="(i,index) in arr2" :key="index">
								<router-link tag="div" :to="Fn.getUrl({path: '/my/order/orderPay',query:{isPay: 2}})" class="content">
									<p>
										<span class="title">{{i.order_sn}}</span>
										<!-- <span class="title_t">(豪华酒店 |四星级)</span> -->
										<span class="cross"><i class="far fa-times-circle"></i></span>
									</p>
									<p>
										<span class="title_hide">{{i.goods_total}}间.  {{i.has_many_order_goods.length?i.has_many_order_goods[0].title: ''}}</span>
									</p>
									<p>
										<span class="title_hide">客户名称: {{$store.state.userInfo.realname}} </span>
										<span class="no">
											<span class="money_color">¥</span>
											<span class="money_size">{{i.price}}</span>
										</span>
									</p>
									<p style="padding-bottom: 18px;">
										<span class="title_hide"> </span>
										<span class="no_pay">{{i.status_name}}</span>
									</p>
								</router-link>
								<div class="content_2">
								    <div class="plane">
									    <!-- <i class="fas fa-location-arrow"></i>
									    <span class="here">到这里</span> -->
								    </div>
									<div class="button">
										<router-link tag="span" :to="Fn.getUrl({path: '/hotelDetail',query:{id:4,hotelName: '银河大酒店'}})" class="pay">再次预定</router-link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import myalert from '../../../components/alert/alert'
	import { Indicator,MessageBox } from 'mint-ui'
	export default {
		components: {
			myalert
		},
		mounted(){
			this._lineLeft()
			
		},
		data(){
			return {
				arrItem: [
					'待付款',
					'待使用',
					'全部订单'
				],
				index_: 0,
				htmltest: '',
				htmltest: '<p style="font-size: 14px;padding: 10px 0;">您真的要取消订单吗？</p>',
                alertShow: false,
                arr0: [],
                arr1: [],
                arr2: [],
                statusText:{
                	'-1': '取消状态',
                	'0': '待付款',
                	'1': '待使用',
                	'2': '待使用',
                	'3': '已完成',
                },
                realname: '',
                timesText: {}
				// back_show: false
			} 
		},
		methods: {
			// handleCancel(event){
			// 	this.back_show = true
			// 	document.querySelectorAll('body')[0].style.overflow = 'hidden'
			// 	this.Fn.addClass(document.querySelector('html'),'noscroll')
			// },
			// backHide(){
			// 	this.back_show = false
			// 	document.querySelectorAll('body')[0].style.overflow = 'auto'
			// 	this.Fn.removeClass(document.querySelector('html'),'noscroll')
			// },
			// cancelBubble(event){
			// 	event.cancelBubble = true
			// },
			getData(status,num){
				let that = this
				if(status.all){
					this.Http.post({route:'order.list.index'}).then(res=>{
						that.arr2 = res.data.data.data
						log(that.arr2)
					})
					return 
				}
				this.Http.post({route:'order.list',data:{
					uid:that.$store.state.userInfo.uid,
					action: 1,
					status:status.status,
				}}).then(res=>{
					that['arr'+status.status] = res.data.data.map(i=>{
						that.timesText[i.id] = {
							[i.id]: {
								value: '',
								interval: null
							},
						}
						return i
					})
					if(num){
						this.Http.post({route:'order.list',data:{
							uid:that.$store.state.userInfo.uid,
							action: 1,
							status: num,
						}}).then(ress=>{
							ress.data.data.map(i=>{
								that.timesText[i.id] = {
									[i.id]: {
										value: '',
										interval: null
									},
								}
								that['arr'+status.status].push(i)
								return i
							})
						})
					}
				})
			},
			remaining_time(id,e){
				let that = this
				let date = new Date().getTime()
				let date_15 = new Date().getTime()+1000*60*15
				that.timesText[id].interval = setInterval(function(){
					let times = date_15-date
					if(times<0){
						clearInterval(that.timesText[id].interval)
					}
					let min  = Math.floor(times/1000/60)
					let second = times/1000%60
					console.log(e)
					that.timesText[id].value = min + '分' + second + '秒'
					date += 1000
				},1000)
			},
			aaa(res){
				this.alertShow = false
			},
			handleShow(order_sn){
				let that = this
				MessageBox.confirm('您确定要取消订单吗？','温馨提示').then(action => {
				  	that.Http.post({route:'order.list.index',data:{
				  			action: 1,
				  			order_sn: order_sn,
				  			uid: that.$store.state.userInfo.uid,
				  			del: true
				  	}}).then(res=>{
				  		that.Fn.tips(res.data.msg)
				  		if(that.index_ == 0){
							that.getData({status: 0})
						}
						if(that.index_ == 1){
							that.getData({status: 1},2)
						}
				  	})
				},err=>{

				});
				// this.alertShow = true
			},
			handleClick(i,e){
				var e = e || event
				this.$refs._line.style.left = e.target.offsetLeft + 'px'
				this.$refs._line.style.width =  e.target.offsetWidth +'px'
				this.index_ = i
			},
			onHandleChange(i){
				this.index_ = i
			},
			_lineLeft(){
				this.index_ = this.$route.query.status || 0
				this.$refs._line.style.left = this.$refs.tab.children[this.index_].offsetLeft + 'px'
				this.$refs._line.style.width =  this.$refs.tab.children[this.index_].offsetWidth + 'px'
			},
		},
		watch: {
			$route(to,from){
				if(to.name === 'order'){
					this._lineLeft()
				}
			},
			index_(){
				//https://www.share-hotel.cn/addons/yun_shop/api.php?i=3&type=1&shop_id=null&route=order.list&page=1&i=3&type=1
				if(this.index_ == 0){
					this.getData({status: 0})
				}
				if(this.index_ == 1){
					this.getData({status: 1},2)
				}
				if(this.index_ == 2){
					this.getData({all: 1})
				}
			}
		}
	}
</script>
<style scoped lang="scss">
	@import "../../../common/css/common.scss";
	.box{
		width: 100%;
		min-height: 100%;
		background-color: #e5e5e5;
		padding-top: rem(20px);
		.back{
			width: 100%;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 9999;
			background-color: rgba(0,0,0,0.3);
			height: 100%;
			.alert{
				width: 80%;
				background-color: #ffffff;
				position: absolute;
				top: rem(200px);
				left: 10%;
				text-align: center;
				border-radius: rem(8px);
				.tip{
					font-size: rem(14px);
					font-weight: bold;
				}
				p{
					padding-top: rem(20px);
					&:first-child{
						font-size: rem(14px);
						font-weight: bold;
					}
					display: flex;
					justify-content: space-around;
					span{
						border-top: #aaa solid rem(1px);
						width: 50%;
						padding: rem(10px) 0;
						&:first-child{
							border-right: #aaa solid rem(1px);
						}
						&:last-child{
							color: #43c122;
						}
					}
				}
			}
		}
		.nav{
			position: fixed;
			width: 100%;
			z-index: 999;
			div{
				&.active{
				}
				&.tab{
					display: flex;
					justify-content: space-around;
					align-items: center;
					background-color: #fff;
					div{
						padding: rem(10px) 0;
					}
				}
				&.line{
					width: rem(20px);
					height: rem(5px);
					background-color: #43c122;
					position: absolute;
					left: 0;
					bottom: 0; 
					border-radius: rem(5px);
					transition: all 0.5s;
				}
			}
		}
		.show{
			.body{
				padding: rem(22px) 4%;
				.item{
					.time{
						background-color: #43c122;
						color: #ffffff;
						padding: rem(4px) 2%;
						border-radius: rem(20px);
					}
					.content_box{
						background-color: #ffffff;
						padding: rem(15px) 4%;
						margin: rem(20px) 0;
						border-radius: rem(8px);
						position: relative;
						.content{
							margin-bottom: 3%;
							p{
								padding: rem(3px) 0;
							}
							.title{
								font-size: rem(14px);
								font-weight: bold;
							}
							.title_t{
								font-size: rem(14px);
							}
							.cross{
								font-size: rem(19px);
								color: #EBE6E4;
								position: absolute;
								top: rem(5px);
								right: rem(10px);
							}
							.title_hide{
								color: #bbbbbb;
							}
							.money_size{
								font-size: rem(18px);
								color: #ff9800;
							}
							.money_color{
								color: #ff9800;
							}
							.no{
								float: right;
							}
							.no_pay{
								position: absolute;
								right: rem(15px);
								top: rem(90px);

							}
							.enter{
								display: inline-block;
								margin-top: rem(5px);
								margin-left: 86%;
							}
						}
						.content_2{
							div{
								display: inline-block;
								&.plane{
									padding: rem(5px) rem(8px);
									color: #43c122;
									.here{
										color: #43c122;
									}
								}
								&.button{
									float: right;
									span{
										padding: rem(5px) rem(16px);
										border-radius: rem(15px);
										&.pay{
											background-color: #43c122;
											color: #fff;
											font-size: rem(14px);
										}
										&.change{
											color: #409eff;
											border: #409eff solid rem(1px);
											font-size: rem(14px);
											margin-right: rem(5px);
										}
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