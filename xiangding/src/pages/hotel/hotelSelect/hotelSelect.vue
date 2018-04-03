<template>
	<div class="box">
		<div class="title">
			<p><span>商务大床房</span></p>
		</div>
		<div class="img">
			<img src="http://d6.yihaodianimg.com/N03/M04/F3/2C/CgQCs1NuM_WAOOJiAACkJWcB2XA42700.jpg">
		</div>
		<div class="message">
			<p class="msg">
				<span class="head">床型</span>
				<span class="text">2张双人床1.5米</span>
				<span class="head">面积</span>
				<span class="text">28m <sup>2</sup></span>
			</p>
			<p class="msg">
				<span class="head">窗户</span>
				<span class="text">有窗</span>
				<span class="head">可住</span>
				<span class="text">2人</span>
			</p>
			<p class="msg">
				<span class="head">网络</span>
				<span class="text">WiFi供应</span>
				<span class="head">电话</span>
				<span class="text">暂无信息</span>
			</p>
			<p class="msg">
				<span class="head">楼层</span>
				<span class="text">5-15</span>
				<span class="head">早餐</span>
				<span class="text">双早</span>
			</p>
			<div class="line"></div>
			<div class="base">
				<p><span>服务与设施</span></p>
				<p>
					<span class="spanPublic green">24小时热水供应</span>
				</p>
			</div>
			<div class="line"></div>
			<div class="base">
				<p><span>权益与优惠</span></p>
				<p>
					<span class="spanPublic red">活动优惠</span>
					<span>活动限时优惠中，下单立返红包</span>
				</p>
			</div>
			<div class="line"></div>
			<div class="base">
				<p><span>退订政策</span></p>
				<p>
					<span class="spanPublic orange">免费取消</span>
					<span>免费取消订单</span>
				</p>
			</div>
		</div>
		<div class="btn">
			<div class="total">￥289</div>
			<router-link class="pay" to='/hotelDetail/hotelSelect/hotelOrder' tag='div'>预定</router-link>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {

			}
		}
	}
</script>
<style scoped lang="scss">
	@import '../../../common/css/common';
	.box{
		width: 100%;
		background-color: #fff;
		.title{
			p{
				text-align: center;
				padding: rem(20px) 0;
				span{
					font-size: rem(20px);
					font-weight: bold;
				}
			}
		}
		.img{
			img{
				width: 100%;
				height: rem(250px);	
			}
		}
		.message{
			padding: rem(15px) 8%;
			.msg{
				padding: rem(5px) 0;
				.head{
					width: 10%;
					display: inline-block;
					color: #aaa;
				}
				.text{
					width: 38%;
					display: inline-block;
				}
			}
			.line{
				border: 0.5px solid #aaa;
				margin: rem(15px) 0;
			}
			.base{
				p{
					&:first-child{
						padding-bottom: rem(10px);
						span{
							font-size: rem(16px);
							font-weight: bold;
						}
					}
				}
			}
			.spanPublic{
				display: inline-block;
				heigh: rem(25px);
				line-height: rem(25px);
				padding: 0 rem(5px);
				margin-right: rem(15px);
			}
			.green{
				border: 1px solid #8bc34a;
				color: #8bc34a;
			}
			.red{
				border: 1px solid #e51c23;
				color: #e51c23;
			}
			.orange{
				border: 1px solid #ff9800;
				color: #ff9800;
			}
		}
		.btn{
			border-top: 1px solid #aaa;
			text-align: center;

			.total{
				width: 50%;
				height: rem(50px);
				display: inline-block;
				color: red;
				font-size: rem(18px);
				line-height: rem(50px);
			}
			.pay{
				width: 49%;
				height: rem(50px);
				display: inline-block;
				background-color: #8bc34a;
				line-height: rem(50px);
				color: #fff;
				font-size: rem(18px);
			}
		}
	}
</style> 