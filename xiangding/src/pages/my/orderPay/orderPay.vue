<template>
	<div class="box">
		<Header :title="title"/>

		<div v-if="!$route.query.isPay">
			<div>
				<div class="top">
					<p class="status">订单状态: 待付款</p>
					<p class="time">47小时56分钟后自动关闭订单</p>
					<!-- <router-link tag="div" to="/my/order/payMethods" class="send">
						<button class="green_btn">付款</button>
					</router-link> -->
				</div>
				<div class="middle_1">
					<p>
						<span class="personal">客户: 胡勇蝶</span>
						<span class="phone">157686191036</span>
					</p>
					<p class="sex">性别: 男</p>
					<p class="sex">身份证号码: 440510199506132352</p>
				</div>
				<!-- <div class="middle_2">
					<p>
						<span class="input">备注:</span>
					</p>
				</div> -->
				<div class="middle_3">
					<div class="img">
						<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523425433535&di=f7d324b2c95bd6f203fb8741290c02e3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D41481487a2773912d02b8d219161e374%2Ff3d3572c11dfa9ec3d58042d69d0f703918fc192.jpg" alt="">
					</div>
					<div class="text_box">
						<p class="hotel_name">银河大酒店</p>
						<p>
							<span class="room_name">商务大床房</span>
							<span class="money">289.00</span>
						</p>
						<p>
							<span class="title">52m²大床1.8m</span>
							<span class="numb">×1</span>
						</p>
						<p><span class="title">预计入住: 2018-04-05 18:30</span></p>
						<p><span class="title">预计退房: 2018-04-06</span></p>
					</div>

				</div>
				<div class="middle_4">
					<ul>
						<!-- <li class="item">
							<span class="day">入住时间</span>
							<span class="number_box">
							   2018-04-05
							</span>
						</li>
						<li class="item">
							<span class="day">退房时间</span>
							<span class="number_box">
							    2018-04-06
							</span>
						</li> -->
						<li class="item">
						    <span class="day">商品金额</span>
							<span class="number_box">
								<span class="money_icon">¥</span>
								<span class="money_icon" style="padding-left: 0">289.00</span>
							</span>
						</li>
						<li class="item">
							<span class="day">应付金额</span>
							<span class="number_box">
								<span class="money_icon color">¥</span>
								<span class="money_icon color" style="padding-left: 0">289.00</span>
							</span>
						</li>
						<div class="send_box">
							<router-link tag="span" to="/my/custom" class="custom">联系客服</router-link>
							<router-link tag="span" to="/my/order/payMethods" class="custom">付款</router-link>
						</div>
					</ul>
				</div>
				<div class="middle_5">map</div>
				<div class="footer">
					<p>订单编号: 2153232121</p>
					<p>下单时间: 2018-02-29 21:16:52</p>
				</div>
			</div>
			
		</div>
		<div v-else>
		
			<div class="show">
								<div v-if="1==index_">
					<div class="body">
						<div>
							<div class="top padding-bottom" >
								<p class="status">订单状态: 已付款</p>
								<p class="time">2018-02-29 18:32</p>
								<div class="send">
								</div>
							</div>
							<div class="middle_1">
								<p>
									<span class="personal">客户: 胡勇蝶</span>
									<span class="phone">157686191036</span>
								</p>
								<p class="sex">性别: 男</p>
								<p class="sex">身份证号码: 440510199506132352</p>
							</div>
							<!-- <div class="middle_2">
								<p>
									<span class="input">备注:</span>
								</p>
							</div> -->
							<div class="middle_3">
								<div class="img">
									<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523425433535&di=f7d324b2c95bd6f203fb8741290c02e3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D41481487a2773912d02b8d219161e374%2Ff3d3572c11dfa9ec3d58042d69d0f703918fc192.jpg" alt="">
								</div>
								<div class="text_box">
									<p class="hotel_name">银河大酒店</p>
									<p>
										<span class="room_name">商务大床房</span>
										<span class="money">289.00</span>
									</p>
									<p>
										<span class="title">52m²大床1.8m</span>
										<span class="numb">×1</span>
									</p>
									<p><span class="title">预计入住: 2018-04-05 18:30</span></p>
									<p><span class="title">预计退房: 2018-04-06</span></p>
								</div>

							</div>
							<div class="middle_4">
								<ul>
									<li class="item">
									    <span class="day">商品金额</span>
										<span class="number_box">
											<span class="money_icon">¥</span>
											<span class="money_icon" style="padding-left: 0">289.00</span>
										</span>
									</li>
									<li class="item">
										<span class="day">应付金额</span>
										<span class="number_box" style="color: #43c122">
											<span class="money_icon">¥</span>
											<span class="money_icon" style="padding-left: 0">289.00</span>
										</span>
									</li>
									<div class="send_box">
										<center><router-link tag="span" to="/my/custom" class="custom">联系客服</router-link></center>
									</div>
								</ul>
							</div>
							<div class="middle_5">map</div>
							<div class="footer">
								<p>订单编号: 2153232121</p>
								<p>订单类型: 微信支付</p>
								<p>下单时间: 2018-02-29 21:16:52</p>
								<p>下单时间: 2018-02-29 21:16:52</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		
	</div>
</template>
<script>
	export default {
		mounted(){
			
		},
		data(){
			return {
				arrItem: [
					'订单状态',
					'订单详情',
				],
				 index_: 1,
				
			}
		},
		methods: {
			handleClick(i,event){
				this.$refs._line.style.left = event.path[0].offsetLeft + 'px'
				this.$refs._line.style.width =  event.path[0].offsetWidth +'px'
				this.index_ = i
			},
			
		},
		computed: {
			title(){
				return this.$route.query.isPay?'待使用':'待付款'
			}
		},
		watch: {
			'$route'(to,form){
				if(to.name === "orderPay"){
					setTimeout(()=>{
						if(this.$refs._line){
							this.$refs._line.style.left = this.$refs.tab.lastChild.offsetLeft + 'px'
							this.$refs._line.style.width =  this.$refs.tab.lastChild.offsetWidth + 'px'
						}
					},50)
				}
			}
		}
	}
</script>
<style scoped lang="scss">
	@import "../../../common/css/common.scss";
	.box{
		width: 100%;
		background-color: #e5e5e5;
		.nav{
			position: relative;
			font-size: rem(15px);
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
					width: rem(40px);
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
				position: relative;
				.left{
					position: absolute;
					top: rem(29px);
					left: rem(27px);
					._line{
						height: rem(600px);
						border-left: #43c122 solid rem(1px);
					}
					.radius{
						width: rem(12px);
						height: rem(12px);
						background-color: #43c122;
						border-radius: 100%;
						position: absolute;
						left: rem(-6.5px);
					}
					.radius1{
						top: 0;
					}
					.radius2{
						top: rem(80px);
					}
					.radius3{
						top: rem(150px);
					}
					.radius4{
						top: rem(224px);
					}
					.radius5{
						top: rem(295px);
					}
				}
				.content{
					padding: rem(18px) rem(10px) rem(25px) rem(47px);
					background-color: #ffffff;
					p{
						margin-bottom: rem(51px);
						.word{
							font-size: rem(15px);
						 }
						.time{
							float: right;
						 }
						.i{
							color: #aaa;
						}
					}
					.img_box{
						background-color: #43c122;
						border-radius: rem(10px);
						.images{
							width: 100%;
							height: rem(200px);
							margin: 0;
							img{
								width: 100%;
								height: 100%;
								border-radius: rem(10px); 
							}
						}
						.img_text{
							text-align: center;
							font-size: rem(15px);
							color: #ffffff;
							padding: rem(14px) 0;
						}
					}
				}
			}
		}
		.top{
			background-color: #ffffff;
			border-top: #fff solid rem(1px);
			text-align: center;
			padding: rem(20px) 0;
			.status{
				font-size: rem(17px);
				font-weight: bold;
				margin-top: rem(31px);
				margin-bottom: rem(10px);
			}
			.time{
				font-size: rem(13px);
			}
			.send{
				padding: rem(13px) rem(125px);
			}
		}
		.padding-bottom{
			padding-bottom: rem(2px);
		}
		.middle_1{
			margin: rem(13px) 0;
			padding: rem(15px) 3%;
			background-color: #ffffff;
			p{
				.personal{
					font-weight: bold;
					font-size: rem(14px);
				}
				.phone{
					float: right;
					color: #43c122;
					font-size: rem(14px);
				}
			}
			.sex{
				font-size: rem(14px);
				margin: rem(8px) 0;
			}
		}
		.middle_2{
			border-top: #e5e5e5 solid rem(1px);
			background-color: #ffffff;
			padding: rem(14px) rem(10px);
			.input{
				font-size: rem(14px);
			}
		}
		.middle_3{
			display: flex;
			justify-content: spase-around;
			align-items: center;
			background-color: #ffffff;
			div{
				padding: rem(5px) rem(4px);
				&.img{
					width: 23%;
					height: rem(80px);
					img{
						width: 100%;
						height: 100%;
						border-radius: rem(12px);
					}
				}
				&.text_box{
					width: 74%;
					.hotel_name{
						font-size: rem(16px);
						font-weight: bold;
					}
					p{
						position: relative;
						margin-bottom: rem(2px);
						.room_name{
							font-size: rem(13px);
						}
						.money{
							font-size: rem(18px);
							font-weight: bold;
							float: right;
						}
						.title{
							color: #bec2c9;
						}
						.numb{
							color: #43c122;
							position: absolute;
							right: 3%;
						    top: 0;
						    margin-top: rem(3px);
						    font-size: rem(14px);
						}
					}
				}
			}
		}
		.middle_4{
			background-color: #ffffff;
			padding: rem(15px) rem(12px);
			ul{
				li{
					margin-bottom: rem(22px);
					.day{
						font-size: rem(14px);
						
					}
					.color{
						color: #43c122;
					}
					.number_box{
						display: flex;
						float: right;
						width: 30%;
						margin-top: rem(-7px);
						.number_s{
							width: 50%;
							text-align: center;
							display: inline-block;
							border: #DCDFE6 solid rem(1px);
							padding: rem(7px) 0;
						}
						.icon_s{
							width: 25%;
							padding: rem(7px) 0;
							text-align: center;
							border: #DCDFE6 solid rem(1px);
							border-radius: rem(5px) 0 0 rem(5px); 
						}
						.radius{
							border-radius: 0 rem(5px) rem(5px) 0; 
						}
						.delete{
							border: #43c122 solid rem(1px);
						}
						.number{
							border: #43c122 solid rem(1px);
							border-left: none;
						}
						.money_icon{
							font-size: rem(17px);
							margin-right: 2%;
							padding-left: 40%;
						}
					}
				}
				.send_box{
						padding: 0 30%;
						.custom{
							background-color: #43c122;
							color: #ffffff;
							padding: rem(6px) rem(12px);
							font-size: rem(14px);
							border-radius: rem(5px);
							margin-right: rem(8px);

						}
					}
			}
		}
		.middle_5{
			background-color: #ffffff;
			height: rem(60px);
			margin: rem(10px) 0;
		}
		.footer{
			background-color:#ffffff;
			padding: rem(15px) 2%;
			margin-bottom: 0;
			p{
				font-size: rem(14px);
				color: #aaa;
				margin-top: rem(7px);
			}
		}
	}
</style>