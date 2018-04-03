<template>
	<div class="box">
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
			<p class="tip">
				<span><i class="fas fa-wifi"></i> 网络</span>
				<span><i class="fas fa-utensils"></i> 餐饮</span>
				<span><i class="fas fa-heartbeat"></i> 健身</span>
				<span><i class="fab fa-docker"></i> 游泳</span>
				<span><i class="fab fa-product-hunt"></i> 停车位</span>
			</p>
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
				<p class="day">
					<span>天数</span>
					<span class="space"></span>
					<span class="span">-</span><span class="span">1</span><span class="span">+</span>
				</p>
				<p class="day">
					<span>房间</span>
					<span class="space"></span>
					<span class="span">-</span><span class="span">1</span><span class="span">+</span>
				</p>
				<p><input type="text" placeholder="请输入你的姓名" name=""></p>
				<p><input type="text" placeholder="请输入你的手机号码" name=""></p>
				<p><input type="text" placeholder="请输入你的身份证号码" name=""></p>
				<p><span>备注：</span></p>
				<p class="indent"><span>需支付</span></p>
				<p class="pay"><span>298.0元</span></p>
				<p class="btn"><button>立即支付</button></p>
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
				}
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
					width: 25%;
					img{
						width: 100%;
						height: rem(70px);
					}
				}
				.text{
					width: 70%;
					padding-left: rem(8px);
					p{
						padding-top: rem(3px); 
						span{
							&:first-child{
								color: #aaa;
							}
							&:last-child{
								float: right;
								color: #ffa726;
							}
						}
					}
				}
			}
			.inform{
				border: 1px solid #ddd;
				margin-top: rem(10px);
				p{
					padding: rem(10px) rem(10px);
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
					input{
						width: 100%;
						border: none;
						height: rem(30px);
						border-bottom: 0.5px solid #aaa;
					}
					&.indent{
						text-indent: rem(20px);
					}
					&.pay{
						text-indent: rem(20px);
						font-size: rem(50px);
						font-weight: bold;
					}
					&.btn{
						text-align: right;
						button{
							border: none;
							font-weight: bold;
							padding: rem(15px) rem(50px);
							color: #fff;
							border-radius: rem(50px);
							background-color: #43c122;
						}
					}
				}
			}
		}
		
	}
</style>