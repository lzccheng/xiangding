<template>
	<div class="box">
		<div class="msg">
			<div class="me">
				<p>
					<img :src="msg.imgUrl">
					<div class="text">
						<span>{{msg.name}}</span><br>
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
			<p class="text"><span>当前收益</span></p>
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
				<ul>
					<li>
						<p><span>VIP1</span></p>
						<p class="right">
							<span>收入</span><br>
							<span>{{msg.income.firstAgent}}</span>
							<router-link tag="span" :to="{path: '/my/agantDetailt',query:{agant:1}}" class="detailt">详情</router-link>
						</p>
					</li>
					<li>
						<p><span>VIP2</span></p>
						<p class="right">
							<span>收入</span><br>
							<span>{{msg.income.secondAgent}}</span>
							<router-link tag="span" :to="{path: '/my/agantDetailt',query:{agant:2}}" class="detailt">详情</router-link>
						</p>
					</li>
					<li>
						<p><span>VIP3</span></p>
						<p class="right">
							<span>收入</span><br>
							<span>{{msg.income.thirdAgent}}</span>
							<router-link tag="span" :to="{path: '/my/agantDetailt',query:{agant:3}}" class="detailt">详情</router-link>
						</p>
					</li>
				</ul>
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
	export default {
		mounted(){
			let that = this
			setTimeout(()=>{
				// window.location.href = 'https://www.share-hotel.cn/addons/yun_shop/api.php?i=3&do=shop&m=yun_shop&type=3&route=member.login.index'
				// that.$axios.get('/addons/yun_shop/api.php?i=3&do=shop&m=yun_shop&type=3&route=member.login.index').then((res)=>{
				// 	console.log(res)
				// })
			},15000)
			that.$axios.get('/addons/yun_shop/api.php?i=3&do=shop&m=yun_shop&type=1&route=member.login.index',{'show_wechat_login':true}).then((res)=>{
				console.log(res)
				alert('login---status:'+res.data.result)
			})
			// this.$axios.post('/addons/yun_shop/api.php?i=3&do=shop&m=yun_shop&type=1&route=member.login.index').then((res)=>{
			// 	console.log(res)
			// 	this.$axios.get('/addons/yun_shop/api.php?i=3&c=entry&do=shop&m=yun_shop&route=member.member.getUserInfo').then((res)=>{
			// 		console.log(res.data.result)
			// 		alert(res.data.result)
			// 		that.msg.id = res.data.data.uid
			// 		that.msg.name = res.data.data.nickname
			// 		that.msg.imgUrl = res.data.data.avatar
			// 		console.log(res)
			// 	},(err)=>{
			// 		console.log(err)
			// 	})
			// })
			// this.$axios.get('/addons/yun_shop/api.php?i=3&c=entry&do=shop&m=yun_shop&route=member.member.getUserInfo').then((res)=>{
			// 	console.log('getUserInfo---status'+res.data.result)
			// 	alert('getUserInfo---status:'+res.data.result)
			// 	that.msg.id = res.data.data.uid
			// 	that.msg.name = res.data.data.nickname
			// 	that.msg.imgUrl = res.data.data.avatar
			// 	console.log(res)
			// },(err)=>{
			// 	console.log(err)
			// })
		},
		data(){
			return {
				msg: {
					imgUrl: 'http://imgtu.5011.net/uploads/content/20170428/1436171493371991.jpg',
					id: '147258369',
					earning:'88888.00',
					order_num: '1369',
					poeple_num: '569',
					name: 'aaa',
					income: {
						firstAgent: '2644',
						secondAgent: '9637',
						thirdAgent: '6788'
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
				margin: 0 0 rem(20px) rem(40px);
				p{
					display: inline-block;
					
				}
				.text{
						width: 75%;
						position: absolute;
						left: rem(60px);
						top: rem(23px);
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
				padding-top: rem(20px);
				text-align: left;
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
										color: #aaa;
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