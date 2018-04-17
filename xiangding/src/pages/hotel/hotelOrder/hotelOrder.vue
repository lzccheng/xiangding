<template>
	<div class="box">
		<Header title="酒店支付信息"/>
		<div class="banner">
			<div class="swiper-container">
			    <div class="swiper-wrapper">
			        <div class="swiper-slide" v-for='(i,index) in data.imgUrl'>
			        	<img :src="i">
			        </div>
			    </div>
			</div>
		</div>
		<div class="message">
			<p class="title"><span>{{data.name}}</span></p>
			<p class="star"><span>豪华酒店 | 四星级</span></p>
			<!-- <p class="tip">
				<span><i class="fas fa-wifi"></i> 网络</span>
				<span><i class="fas fa-utensils"></i> 餐饮</span>
				<span><i class="fas fa-heartbeat"></i> 健身</span>
				<span><i class="fab fa-docker"></i> 游泳</span>
				<span><i class="fab fa-product-hunt"></i> 停车位</span>
			</p> -->
			<div class="msg">
				<div class="img"><img :src="data.imgUrl"></div>
				<div class="text">
					<p>01-29入住，1-30离开，共1天</p>
					<p>商务大床房</p>
					<p><span>25m <sup>2</sup>	大床1.8m </span><span>￥289元</span></p>
				</div>
				<div>
					
				</div>
			</div>
			<div class="inform">
				<p class="black">
					<span>天数</span>
					<span class="number_box">
					    <el-input-number size="mini" v-model="num7"></el-input-number>
					</span>
				</p>
				<p class="black">
					<span>房间</span>
					<span class="number_box">
					    <el-input-number size="mini" v-model="num7"></el-input-number>
					</span>
				</p>
				<p class="black">
					<span>是否需要发票</span>
					<span class="check_box"><el-checkbox v-model="checked"></el-checkbox></span>
				</p>
				<p class="black">
					<span>预计到店</span>
					<span class="time">
						<span class="line">14</span>
						<span>:</span>
						<span class="line">30</span>
						<span class="line">本日</span>
					</span>
				</p>
				<p  class="day"><input type="text" placeholder="请输入您的姓名" name=""></p>
				<p  class="day"><input type="text" placeholder="请输入您的手机号码" name=""></p>
				<p  class="input_box">
				   <span class="yz_text"><input type="text" placeholder="请输入验证码" name=""></span>
				   <span class="yz_numb">获取验证码</span>
				</p>
				<p class="indent">
				   <span class="minus">立减</span>
				   <span class="farvourable">优惠返现</span>
				   <span class="money">-¥8.88</span>
				</p>
				<p class="indent">
				   <span class="cancel">取消</span>
				   <span class="farvourable">免费取消</span>
				   <span class="aaa">已加入免费取消政策</span>
				</p>
				<p>备注</p>
				<p class="add_text"><input type="text" placeholder="请输入文字" name=""></p>
				<p class="color_aaa">
					<span><i class="far fa-smile"></i></span>
					<span class="text_size">请你在30分钟内完成支付,否则订单会自动取消</span>
				</p>
				<p class="color_aaa">
					<span><i class="fas fa-clipboard-check"></i></span>
					<span class="text_size">我们保障快速确认,到店有房,资金安全,请放心预定</span>
				</p>
			</div>
			<div class="footer">
				<p class="need_pay">需支付</p>
				<p>
					<span class="money_color">289.00元</span>
					<span class="button">提交订单</span>
				</p>
			</div>
		</div>
	</div>
</template>
<script>
	import Swiper from 'swiper'
	export default {
		mounted: function(){
			setTimeout(function(){
				var mySwiper = new Swiper ('.swiper-container', {
					loop:true,
					autoplay: true
				})
			},100)
		},
		data(){
			return {
				data:{
					id:0,
					name: '广州银河大酒店',
					imgUrl: [
						'http://pic.35pic.com/normal/04/16/23/5713677_151916236164_2.jpg'
					]
				},
				num7: 1,
				checked: true
			}
		}
	}
</script>
<style scoped lang="scss">
	@import '../../../common/css/swiper.min';
	@import '../../../common/css/common';
	.box{
		width: 100%;
		background-color: #fff;
		img{
			width: 100%;
		}
		.message{
			padding: 0 rem(15px);
			.title{
				padding: rem(5px) 0;
				font-size: rem(20px);
				font-weight: bold;
			}
			.star{
				color: #aaa;
				font-size: rem(14px);
			}
			.tip{
				margin-top: rem(10px);
				span{
					&:first-child{
						margin:0;
					}
					margin-left: rem(10px);
				}
			}
			.msg{
				margin-top: rem(15px);
				div{
					display: inline-block;
					vertical-align: top;
				}
				.img{
					width: 24%;
					img{
						width: 100%;
						height: rem(81px);
						border-radius: rem(7px);
					}
				}
				.text{
					width: 70%;
					padding-left: rem(8px);
					font-size: rem(14px);
					p{
						padding-top: rem(3px);
						span{
							&:first-child{
								color: #aaa;
							}
							&:last-child{
								float: right;
								color: #ffa726;
								font-size: rem(17px);
							}
						}
					}
				}
			}
			.inform{
				margin-top: rem(10px);
				padding-bottom: rem(120px);
				p{
					padding: 0 rem(10px);
					font-size: rem(14px);
					margin: rem(15px) 0;
					&.black{
						margin-top: rem(13px);
				        padding-bottom: rem(20px);
				        border-bottom: #aaa solid rem(1px);
				        position: relative;
					}
					.space{
						display: inline-block;
						width: 60%;
						height: rem(5px);
					}
					.span{
						padding: rem(3px) 3%;
						display: inline-block;
						border: 1px solid teal;
					}
					.number_box{
						float: right;
					}
					.yz_numb{
						background-color: #43c122;
						padding: rem(12px) 4%;
						color: #ffffff;
						position: absolute;
						right: 0;
						bottom: 0;
					}
					.yz_text{
						line-height: rem(43.5px);
					}
					.check_box{
						float: right;
					} 
					.time{
						position: absolute;
						top: rem(2px);
						right: 0;
						span{
							color: #aaa;
							&.line{
								padding: rem(9px) rem(10px);
								margin-right: rem(2px);
								border-top: #43c122 solid rem(1px);
								border-bottom: #43c122 solid rem(1px);
							}
						}
					}
					&.day{
						border-bottom: 0.5px solid #aaa;
					}
					&.add_text{
						border-bottom: 0.5px solid #aaa;
						padding-bottom: rem(40px);
					}
					&.color_aaa{
						color: #aaa;
						.text_size{
							font-size: rem(12px);
						}
					}
					&.input_box{
						display: flex;
						border-bottom: 0.5px solid #aaa;
						margin-top: rem(-15px);
						position: relative;
					}
					input{
						width: 100%;
						border: none;
						height: rem(20px);
						margin-bottom: rem(10px);
						&::-webkit-input-placeholder{
							color: #aaa;
						}
						&:-moz-placeholder{
							color: #aaa;
						}
						&:-ms-input-placeholder{
							color: #aaa;
						}
					}
					&.indent{
						border-bottom: #aaa solid rem(0.5px);
						padding-bottom: rem(10px);
						.minus{
							color: #e51c63;
							border: #e51c63 solid rem(1px);
							font-size: rem(12px);
						}
						.money{
							color: #e51c63;
							float: right;
						}
						.cancel{
							color: #ffb400;
							font-size: rem(12px);
							border: #ffb400 solid rem(1px);
						}
						.aaa{
							color: #aaa;
							float: right;
						}
						.farvourable{
							margin-left: 2%;
						}
					}
				}
			}
			.footer{
				background-color: #ffffff;
				width: 100%;
				padding: rem(15px) 5%;
				border-top: #aaa solid rem(1px);
				position: fixed;
				bottom: 0;
				left: 0;
				.need_pay{
					font-size: rem(15px);
					margin-bottom: rem(15px);
				}
				.money_color{
					font-size: rem(19px);
					color: #ff9800;
				}
				.button{
					padding: rem(7px) 6%;
					background-color: #43c122;
					color: #ffffff;
					float: right;
					border-radius: rem(14px);
					font-size: rem(14px);
					margin-right: 10%;
				}
			}
		}
		
	}
</style>