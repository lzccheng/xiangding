<template>
	<div class="box">
		<div class="msg">
			<div class="me">
				<p>
					<img :src="msg.imgUrl">
					<div class="text">
						<span>{{msg.name}} ({{msg.level_name}})</span><br>
						<span v-show="msg.agent_nickname">推荐人: {{msg.agent_nickname}}</span><br>
						<span>ID: {{msg.id}}</span>
						<router-link tag="span" to="/my/myMessage" class="i"><i class="fas fa-cog"></i></router-link>
					</div>
				</p>
			</div>
			<router-link to='/my/weChatCash' class="cash" tag='div'>
				提现
			</router-link>
		</div>
		<div class="earning">
			<p class="text"><span>当前余额</span></p>
			<p class="money" style="font-family:'微软雅黑' ,Arial !important"><span>￥</span><span>{{msg.earning}}</span></p>
			<div class="earn">
				<div class="order">
					<p class="icon"><i class="far fa-file"></i></p>
					<p class="text">
						<span>本月收益订单数</span><br>
						<span>{{msg.order_num}}</span>
					</p>
				</div>
				<div class="people">
					<p class="icon"><i class="far fa-user"></i></p>
					<p class="text">
						<span>本月消费人数数</span><br>
						<span>{{msg.poeple_num}}</span>
					</p>
				</div>
			</div>
			<div class="agent">
				<router-link tag="div" to="/my/myTeam" class="my_team">
					<p class="icon"><i class="fas fa-users"></i></p>
					<p>我的团队</p>
					<p><i class="fas fa-chevron-right"></i></p>
				</router-link>
				<!-- <ul>
					<li>
						<p><span>VIP1 ({{msg.income.firstAgent}}人)</span></p>
						<p class="right">
							<span>
								<span>收入</span><br>
								<span>0</span>
							</span>
							
							<router-link tag="span" :to="{path: '/my/agantDetailt',query:{agant:1}}" class="detailt">详情</router-link>
						</p>
					</li>
					<li>
						<p><span>VIP2 ({{msg.income.secondAgent}}人)</span></p>
						<p class="right">
							<span>
								<span>收入</span><br>
								<span>0</span>
							</span>
							
							<router-link tag="span" :to="{path: '/my/agantDetailt',query:{agant:2}}" class="detailt">详情</router-link>
						</p>
					</li>
					<li>
						<p><span>VIP3 ({{msg.income.thirdAgent}}人)</span></p>
						<p class="right">
							<span>
								<span>收入</span><br>
								<span>0</span>
							</span>
							
							<router-link tag="span" :to="{path: '/my/agantDetailt',query:{agant:3}}" class="detailt">详情</router-link>
						</p>
					</li>
				</ul> -->
			</div>
		</div>
		<div class="hotelServe">
			<p class="title">
				<span>代理服务商</span>
				<router-link to='/my/cash' class="cash" tag='span'>提现</router-link>
			</p>
			<div class="earning">
				<p class="text"><span>当前收益</span></p>
				<router-link tag="p" to="/my/cashDetail" class="money" style="font-family:'微软雅黑' ,Arial !important"><span>￥</span><span>{{msg.earning}}</span></router-link>
				<div class="earn">
					<div class="order">
						<p class="icon"><i class="far fa-file"></i></p>
						<p class="text">
							<span>本月收益订单数</span><br>
							<span>{{msg.order_num}}</span>
						</p>
					</div>
					<div class="people">
						<p class="icon"><i class="far fa-user"></i></p>
						<p class="text">
							<span>本月消费人数数</span><br>
							<span>{{msg.poeple_num}}</span>
						</p>
					</div>
				</div>
				<!-- <div class="agent">
					<ul>
						<li>
							<p><span>一级代理</span></p>
							<p class="right">
								<span>收入</span><br>
								<span>{{msg.income.firstAgent}}</span>
							</p>
						</li>
						<li>
							<p><span>二级代理</span></p>
							<p class="right">
								<span>收入</span><br>
								<span>{{msg.income.secondAgent}}</span>
							</p>
						</li>
						<li>
							<p><span>三级代理</span></p>
							<p class="right">
								<span>收入</span><br>
								<span>{{msg.income.thirdAgent}}</span>
							</p>
						</li>
					</ul>
				</div> -->
			</div>
		</div>
		<div class="myOrder">
			<p class="text"><span>我的订单</span></p>
			<div class="message">
				<router-link tag="div" :to="{path: '/my/order',query: {status: 0}}">
					<p><i class="far fa-calendar-check"></i></p>
					<p><span>待付款</span></p>
				</router-link>
				<router-link tag="div" :to="{path: '/my/order',query: {status: 1}}">
					<p><i class="far fa-calendar-plus"></i></p>
					<p><span>待使用</span></p>
				</router-link>
				<router-link tag="div" :to="{path: '/my/order',query: {status: 2}}">
					<p><i class="far fa-calendar-alt"></i></p>
					<p><span>全部订单</span></p>
				</router-link>
			</div>
		</div>
		<div class="myOrder">
			<p class="text"><span>我的入口</span></p>
			<div class="message">
				<router-link tag="div" to="/my/roomEnter">
					<p><i class="far fa-star"></i></p>
					<p><span>管理房态入口</span></p>
				</router-link>
				<router-link tag="div" to="/my/myagantEnter">
					<p><i class="far fa-question-circle"></i></p>
					<p><span>代理服务商入口</span></p>
				</router-link>
			</div>
		</div>
		<div class="myOrder">
			<p class="text"><span>系统服务</span></p>
			<div class="message">
				<router-link tag="div" :to="{path: '/my/collection',query: {name: '收藏酒店'}}" >
					<p><i class="far fa-bookmark"></i></p>
					<p><span>我的收藏</span></p>
				</router-link>
				<router-link tag="div" to="/my/feedBack">
					<p><i class="fa fa-question-circle"></i></p>
					<p><span>我要反馈</span></p>
				</router-link>
				<router-link tag="div" to="/my/custom">
					<p><i class="far fa-comments"></i></p>
					<p><span>联系客服</span></p>
				</router-link>
			</div>
		</div>
	</div>
</template> 
<script>
	import { Toast } from 'mint-ui'
	export default {
		mounted(){
			let that = this
			// this.$axios.post('?i=3&mid=0&type=5&shop_id=null&route=member.login.index',{
			// 	mobile: '13927179141',
			// 	mobileErr: '',
			// 	password: '123456',
			// 	passwordErr: '',
			// 	uuid: 0,
			// 	mid:0
			// }).then(res=>{
			// 	console.log(55555555,res)
			// })
			// this.$axios.get('?i=3&c=entry&do=shop&m=yun_shop&route=member.member.getUserInfo').then((res)=>{
			// 	console.log(res.data)
			// 	// console.log(process.env.API_ROOT)

			// 	if(res.data.data.login_url){
			// 		console.log(res.data.data.login_url)
			// 		// window.location.href = res.data.data.login_url + '&yz_redirect=' + that.Fn.base64_encode(window.location.href+'?')
			// 	}else{
			// 		// console.log(res.data)
			// 		that.msg.id = res.data.data.uid
			// 		that.msg.name = res.data.data.nickname
			// 		that.msg.imgUrl = res.data.data.avatar
			// 		that.msg.earning = res.data.data.credit.data
			// 		that.msg.level_name = res.data.data.level_name
			// 		that.msg.agent_nickname = res.data.data.yz_member.agent.nickname
			// 	}
				
			// },(err)=>{
			// 	console.log(err)
			// })
			// this.$axios.get('?i=3&mid=undefined&type=1&shop_id=null&route=member.member.getMyAgent_v2').then((res)=>{
			// 	// console.log(res)
			// 	that.msg.income.firstAgent = res.data.data.level1.total
			// 	that.msg.income.secondAgent = res.data.data.level2.total
			// 	that.msg.income.thirdAgent = res.data.data.level3.total
			// },(err)=>{
			// 	console.log(err)
			// })
			this.Http.get({
				route: 'member.member.getUserInfo'
			}).then(res=>{
				that.msg.id = res.data.data.uid
				that.msg.name = res.data.data.nickname
				that.msg.imgUrl = res.data.data.avatar
				that.msg.earning = res.data.data.credit.data
				that.msg.level_name = res.data.data.level_name
				that.msg.agent_nickname = res.data.data.yz_member.agent.nickname
			})

			let dd = {
				"username":'chenyan',
				"password": '123456',
				"action": 1,
				"submit": '登录'
			}
			this.Http.post({baseUrl: 'web/index.php?c=user&a=login',data:dd}).then(res=>{
				console.log(555555,res)
			})
		},
		data(){
			return {
				msg: {
					imgUrl: '',
					id: '',
					earning:'0',
					order_num: '1369',
					poeple_num: '569',
					name: '',
					level_name: '',
					agent_nickname:'',
					income: {
						firstAgent: 0,
						secondAgent: 0,
						thirdAgent: 0
					}

				}
			}
		}
	}
</script>
<style scoped lang="scss">
	@import '../../common/css/common';
	.box{
		width: 100%;
		padding-bottom: rem(50px);
		background-color: #ebebeb;
		.msg{
			height: rem(90px);
			background-color: #43c122;
			position: relative;
			.me{
				position: relative;
				padding-top: rem(15px); 
				margin: 0 0 rem(20px) rem(25px);
				p{
					display: inline-block;
					
				}
				.text{
						width: 75%;
						position: absolute;
						left: rem(60px);
						top: rem(15px);
						margin: rem(5px) rem(8px);
						font-size: rem(14px);
						color: #fff;
						.i{
							position: absolute;
							top: 0;
							right: 0;
							color: #ffffff;
							font-size: rem(25px);
						}
					}
				img{
					width: rem(60px);
					height: rem(60px);
					border-radius: 100%;
					vertical-align: middle;
				}
			}
			.cash{
				position: absolute;
				right: 0;
				top: rem(100px);
				color: #fff;
				background-color: #43c122;
				letter-spacing:2px;
				border-radius: rem(28px) 0 0 rem(28px);
				border: 2px solid #fff;
				border-right: none;
				padding: rem(8px) rem(21px);
			}
		}
		.earn{
			padding-top: rem(10px);
			display: flex;
			justify-content: space-around;
			.icon{
					display: inline-block;
					border-radius: 100%;
					font-size: rem(25px);
					color: #fff;
				}
			p{
				display: inline-block;
			}
			.text{
				text-align: left;
				position: relative;
				left: rem(2px);
				top: rem(3px);
				span{
					&:first-child{
						color: #aaa;
					}
				}
			}
			.order{
				.icon{
					padding: rem(5px) rem(10px);
					background-color: #ff9800;
				}
			}
			.people{
				.icon{
					padding: rem(5px) rem(7px);
					background-color: #ff4081;
				}
			}
		}
		.earning{
			background-color: #fff;
			text-align: center;
			font-size: rem(13px);
			.text{
				padding-top: rem(20px);
			}
			.money{
				color: #ff9800;
				font-size: rem(35px);
				padding-top: rem(10px);
				span{
					&:first-child{
						font-size: rem(20px);
					}
				}
			}
			
			.agent{
				margin-top: rem(20px);
				text-align: left;
				border-top: #e5e5e5 solid rem(10px);
				.my_team{
					display: flex;
					align-items: center;
					font-size: rem(15px);
					padding: rem(8px) 4%;
					p{
						&.icon{
							padding: rem(10px) rem(9px);
							background-color: #FF9800;
							border-radius: 100%;
							color: #fff;
							font-size: rem(16px);
							margin-right: rem(5px);
						}
						&:nth-child(2){
							width: 85%;
						}
					}
					
					
				}
				ul{
					li{
						border-top: 1px solid #d5d5d5;
						padding: rem(12px) rem(20px);
						p{
							display: inline-block;
							&.right{
								float: right;
								margin-top: -0.5rem;
								span{
									&:first-child{
										margin-right: rem(20px);
										text-align: center;
										span{
											&:first-child{
												color: #aaa;
											}
											&:last-child{
												padding-left: rem(10px);
											}
										}
									}
									&.detailt{
										padding-left: rem(12px);
										margin-top: rem(-16px);
										float: right;
										color: #0075FF;
										line-height: rem(41px);
									}
								}
							}
						}
						
					}
				}
			}
		}
		.hotelServe{
			background-color: #fff;
			margin-top: rem(10px);
			padding-bottom: rem(18px);
			.title{
				position: relative;
				padding: rem(10px) rem(20px) rem(20px);
				span{
					&:first-child{
						font-size: rem(16px);
						font-weight: bold;
					}
					&:nth-child(2){
						position: absolute;
						top: 0;
						right: 0;
						background-color: #43c122;
						letter-spacing: 2px;
						border-radius: rem(28px) 0 0 rem(28px);
						color: #fff;
						padding: rem(8px) rem(22px);
						margin-top: rem(8px);
					}
				}
			}
			.money{
				color: #ff9800;
				font-size: rem(35px);
				text-align: center;
				span{
					&:first-child{
						font-size: rem(20px);
					}
				}
			}
		}
		.myOrder{
			.text{
				font-size: rem(16px);
				font-weight: bold;
				padding: rem(10px) rem(15px);
			}
			.message{
				background-color: #fff;
				display: flex;
				justify-content: space-around;
				text-align: center;
				div{
					padding: rem(20px) 0;
					p{
						&:first-child{
							font-size: rem(30px);
						}
						&:nth-child(2){
							font-size: rem(16px);
						}
					}
				}
			}
		}
	}
</style>