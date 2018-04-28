<template>
	<div class="box">
		<Header title="支付订单"/>
		<div class="top">
			<span>待付款</span>
		</div>
		<span class="i"><i class="fas fa-donate"></i></span>
		<div class="custom">
			<p class="numb">
				<span class="icon"><i class="far fa-address-book"></i></span>
				<span>客户: ***</span>
				<span class="phone">手机号码: 13800138000</span>
			</p>
			<p class="numb">
				<span class="icon"><i class="far fa-map"></i></span>
				<span>广州市天河区沙太南路银河大酒店</span>
			</p>
		</div>
		<div class="line"></div>
		<div class="hotel">
			<p class="name">
				<span><i class="fas fa-warehouse"></i></span>
				<span>银河大酒店</span>
			</p>
			<div class="item">
				<div class="img"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523425433535&di=f7d324b2c95bd6f203fb8741290c02e3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D41481487a2773912d02b8d219161e374%2Ff3d3572c11dfa9ec3d58042d69d0f703918fc192.jpg" alt=""></div>
				<div class="text_box">
					<p>商务大床房</p>
					<p class="time">2018-04-08/2018-04-09</p>
					<p class="color">
						<span>¥269</span>
						<span>×1</span>
					</p>
				</div>
			</div>
			<div class="item">
				<div class="img"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523425433535&di=f7d324b2c95bd6f203fb8741290c02e3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D41481487a2773912d02b8d219161e374%2Ff3d3572c11dfa9ec3d58042d69d0f703918fc192.jpg" alt=""></div>
				<div class="text_box">
					<p>商务大床房</p>
					<p class="time">2018-04-08/2018-04-09</p>
					<p class="color">
						<span>¥269</span>
						<span>×1</span>
					</p>
				</div>
			</div>
			<div class="pag">
				<p>
					<span>红包返现</span>
					<span class="color_e">¥ 8</span>
				</p>
				<p>
					<span>发票</span>
					<span>无</span>
				</p>
				<p>
					<span>备注</span>
					<span>无</span>
				</p>
				<p>
					<span>余额抵扣</span>
					<span>
						<el-switch
						  v-model="value2"
						  active-color="#43c122"
						  inactive-color="#A7A5A6">
						</el-switch>
					</span>
				</p>
			</div>
			<div class="totle">
				<span>合计: </span>
				<span class="totle_color">¥ 1149</span>
			</div>
		</div>
		<div class="line"></div>
		<div class="footer">
			<p>订单编号: 2153132121</p>
			<p>交易方式: 微信支付</p>
			<p>下单时间: 2018-02-29 21:16:52</p>
		</div>
		<div  class="button">
			<router-link v-if="title === '团房'||title ==='会议室'" tag="span" to="/my/custom" class="need_pay ">讲价</router-link>
			<router-link v-else tag="span" to="/my/custom" class="need_pay talk">取消订单</router-link>
			<router-link tag="span" to="/my/order/payMethods" class="money_color">立即支付</router-link>
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
				value1: true,
                value2: true,
                title: '酒店列表'
			}
		},
		methods: {

		},
		watch: {
			'$route':function(to,from){
				if(to.name == 'payOrder'){
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
		padding-bottom: rem(100px);
		position: relative;
		.top{
			background-color: #43c122;
			color: #ffffff;
			padding: rem(32px) 0;
			text-align: center;
			span{
				&:first-child{
					font-size: rem(24px);
					padding: 0 rem(10px);
				}
				&:last-child{
					font-size: rem(16px);

				}

			}
		}
		.i{
			position: absolute;
			top: rem(71px);
			left: 34%;
			color: #ffffff;
			font-size: rem(25px);
		}
		.custom{
			padding: rem(14px) 0;
			padding-bottom: rem(8px);
			.numb{
				font-size: rem(14px);
				padding-bottom: rem(8px);
				.icon{
					padding: 0 rem(13px);
					font-size: rem(14px);
				}
				.phone{
					padding-left: 28%;
				}
			}
		}
		.line{
			background-color: #e5e5e5;
			border-top: #aaa solid rem(1px);
			border-bottom: #aaa solid rem(1px);
			padding: rem(5px) 0;
		}
		.hotel{
			font-size: rem(14px);
			position: relative;
			padding: rem(10px) 4% rem(60px);
			p{
				padding-bottom: rem(8px);
				&.name{
					border-bottom: #aaa solid rem(1px);
					span{
						&:first-child{
							padding-right: rem(10px);
						}
						&:last-child{
							font-size: rem(15px);
						}
					}
				}
			}
			.item{
				display: flex;
				padding: rem(13px) 0;
				position: relative;
				.img{
					width: 16%;
					height: rem(60px);
					padding-right: rem(13px);
					img{
						width: 100%;
						height: 100%;
					}
				}
				.text_box{
					.time{
						color: #aaa;
					}
					.color{
						span{
							&:first-child{
								color: #FF9800;
							}
							&:last-child{
								position: absolute;
								bottom: rem(23px);
								right: rem(1px);
								font-size: rem(14px);
							}
						}
					}
				}
			}
			.pag{
				border-bottom: #aaa solid rem(1px);
				p{
					color: #aaa;
					span{
						&:last-child{
							float: right;
						}
						&.color_e{
							color: #FF9800;
						}
					}
				}
			}
			.totle{
				position: absolute;
				bottom: rem(22px);
				right: 8%;
				.totle_color{
					color: #FF9800;
					padding-left: rem(7px);
					font-size: rem(17px);
				}
			}
		}
		.footer{
			font-size: rem(14px);
			color: #aaa;
			padding: rem(15px) 4% rem(50px);
			p{
				padding: rem(7px);
			}
		}
		.button{
				background-color: #ffffff;
				width: 100%;
				border-top: #aaa solid rem(1px);
				position: fixed;
				display: flex;
				justify-content: space-around;
				bottom: 0;
				left: 0;
				z-index: 99;
				text-align: center;
				.need_pay{
					width: 50%;
					font-size: rem(15px);
					color: #FF9800;
					padding: rem(13px) 0;
				}
				.talk{
					color: #000;
				}
				.money_color{
					font-size: rem(15px);
					background-color: #43c122;
					color: #ffffff;
					width: 50%;
					padding: rem(13px) 0;
				}
			
			}
	}
</style>