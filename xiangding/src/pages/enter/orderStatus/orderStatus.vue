<template>
	<div class="box">
		<Header title="订单处理"/>
		<div class="body">
			<div v-if="status">
				<div>
					<div class="top">
						<p class="status">订单状态: {{text}}</p>
						<p class="time">2018-02-29 18:32</p>
						
					</div>
					<div class="middle_1">
						<p class="sex">客户: 胡勇蝶</p>
						<p class="photo">手机号码: 15913932217<br/>&nbsp;</p>
						<p class="input">备注:</p>
					</div>
					<div class="middle_3">
						<div class="img">
							<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523425433535&di=f7d324b2c95bd6f203fb8741290c02e3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D41481487a2773912d02b8d219161e374%2Ff3d3572c11dfa9ec3d58042d69d0f703918fc192.jpg" alt="">
						</div>
						<div class="text_box">
							<p class="hotel_name">商务大床房</p>
							<p>
								<span class="money">289.00</span>
							</p>
							<p>
								<span class="title">52m²大床1.8m</span>
								<span class="numb">×1</span>
							</p>
							<p><span class="title">入住人数: 1人</span></p>
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
									<span class="money_icon">289.00</span>
								</span>
							</li>
							<li class="item">
								<span class="day">应付金额</span>
								<span class="number_box">
									<span class="money_icon color">¥</span>
									<span class="money_icon color">289.00</span>
								</span>
							</li>
							<li class="item">
								<span class="day">是否需要发票</span>
								<span class="number_box">
									<span class="money_icon">否</span>
								</span>
							</li>
						</ul>
					</div>
					<div class="footer">
						<p>订单编号: 2153232121</p>
						<p>订单类型: 微信支付</p>
						<p>下单时间: 2018-02-29 21:16:52</p>
						<p>付款时间: 2018-02-29 21:16:52</p>
					</div>
				</div>
			</div>
			<div v-else>
				<div class="top">
					<p class="status">订单状态: 订单处理中</p>
					<p class="time">2018-02-29 18:32</p>
					<div class="send"></div>
					<div class="send_box">
						<span class="custom" @click="handleAgree">同意住房</span>
						<span class="custom" @click="handleAgree">拒绝住房</span>
					</div>
				</div>
				<div class="middle_1">
					<p class="sex">客户: 胡勇蝶</p>
					<p class="photo">手机号码: 15913932217<br/>&nbsp;</p>
					<p class="input">备注:</p>
				</div>
				<div class="middle_3">
					<div class="img">
						<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523425433535&di=f7d324b2c95bd6f203fb8741290c02e3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D41481487a2773912d02b8d219161e374%2Ff3d3572c11dfa9ec3d58042d69d0f703918fc192.jpg" alt="">
					</div>
					<div class="text_box">
						<p class="hotel_name">商务大床房</p>
						<p>
							<span class="money">289.00</span>
						</p>
						<p>
							<span class="title">52m²大床1.8m</span>
							<span class="numb">×1</span>
						</p>
						<p><span class="title">入住人数: 1人</span></p>
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
								<span class="money_icon">289.00</span>
							</span>
						</li>
						<li class="item">
							<span class="day">应付金额</span>
							<span class="number_box">
								<span class="money_icon color">¥</span>
								<span class="money_icon color">289.00</span>
							</span>
						</li>
						<li class="item">
							<span class="day">是否需要发票</span>
							<span class="number_box">
								<span class="money_icon">否</span>
							</span>
						</li>
					</ul>
				</div>
				<div class="footer">
					<p>订单编号: 2153232121</p>
					<p>订单类型: 微信支付</p>
					<p>下单时间: 2018-02-29 21:16:52</p>
					<p>下单时间: 2018-02-29 21:16:52</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		mounted(){
			if(this.$route.query.text){
				this.text = this.$route.query.text
			}
			if(this.$route.query.status){
				this.status = this.$route.query.status
			}
		},
		data(){
			return {
				status: 0,
				text: '同意住房'
			}
		},
		methods: {
			cilck(){
			},
			handleAgree(event){
				this.status = 1
				console.log(event.path[0].innerText)
				this.text = event.path[0].innerText
			}
		},
		watch: {
			$route(to,from){
				if(to.name === "orderStatus"){
					if(this.$route.query.text){
						this.text = this.$route.query.text
					}
					if(this.$route.query.status){
						this.status = this.$route.query.status
					}
				}

			}
		}
	}
</script>
<style scoped lang="scss">
	@import '../../../common/css/common.scss';
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
				margin-top: rem(10px);
				margin-bottom: rem(10px);
			}
			.time{
				font-size: rem(13px);
			}
			.send{
				padding: rem(12px) 0;
			}
			.send_box{
				padding: 0 20%;
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
		.middle_1{
			margin: rem(13px) 0;
			padding: rem(15px) 3%;
			background-color: #ffffff;
			p{
				font-size: rem(14px);
				
				&.sex{
					margin: rem(8px) 0;
					font-weight: bold;
				}
				&.photo{
					margin: rem(8px) 0;
					font-weight: bold;
					border-bottom: #e5e5e5 solid rem(1px);
				}
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
						.money{
							font-size: rem(18px);
							font-weight: bold;
							position: absolute;
							top: rem(-20px);
							right: 0;
						}
						.title{
							color: #bec2c9;
						}
						.numb{
							color: #43c122;
							position: absolute;
							right: 0;
						    top: rem(10px);
						    font-size: rem(14px);
						}
					}
				}
			}
		}
		.middle_4{
			background-color: #ffffff;
			padding: rem(15px) rem(12px);
			margin-bottom: rem(8px);
			ul{
				li{
					margin-bottom: rem(22px);
					.day{
						font-size: rem(13px);
					}
					.color{
						color: #43c122;
					}
					.number_box{
						display: flex;
						float: right;
						.delete{
							border: #43c122 solid rem(1px);
						}
						.number{
							border: #43c122 solid rem(1px);
							border-left: none;
						}
						.money_icon{
							font-size: rem(17px);
							margin-right: rem(5px);
						}
					}
				}
				
			}
		}
		.footer{
			background-color:#ffffff;
			padding: rem(6px) 2% rem(30px);
			margin-bottom: 0;
			p{
				font-size: rem(14px);
				color: #aaa;
				margin-top: rem(7px);
			}
		}
	}
</style>