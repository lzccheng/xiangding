<template>
	<div class="box">
		<Header title="支付订单"/>
		<div class="line"></div>
		<div class="back" v-if="general" @click="handleClose_back">
			<div class="box" @click="cancelBubble">
				<p class="title">享订支付协议</p>
				<p class="text">hello</p>
				<div class="bottom">
					<p @click="handleClose_back">
					   <span >我知道了</span>
					</p>
				</div>
			</div>
		</div>
		<div v-for="(i,index) in arrItem" :key="index"  class="item" @click="handleChange(index)">
			<div class="img"><img :src="i.imgUrl" alt=""></div>
			<div class="text">
				<span>{{i.text}}</span>
				<span class="right">
					<el-radio-group v-model="radio2">
					    <el-radio :label="index">&nbsp;</el-radio>
					  </el-radio-group>
				</span>
			</div>
		</div>
		<div class="bottom_box">
		    <p class="button">确认支付</p>
		</div>
		<p class="know"><span @click="handleShow_back">《支付协议》</span></p>
	</div>
</template>
<script>
import { Indicator,MessageBox } from 'mint-ui'
	export default {
		data(){
			return {
				arrItem: [
					{
						// imgUrl: 'http://www.share-hotel.cn/addons/share/img/payMethods/weChat.png',
						imgUrl: '../../../static/img/payMethods/weChat.png',
						text: '微信支付'
					},
					{
						// imgUrl: 'http://www.share-hotel.cn/addons/share/img/payMethods/friend.png',
						imgUrl: '../../../static/img/payMethods/friend.png',
						text: '朋友代付'

					},
					{
						// imgUrl: 'http://www.share-hotel.cn/addons/share/img/payMethods/pag.png',
						imgUrl: '../../../static/img/payMethods/pag.png',
						text: '余额支付'
					}
				],
				radio2: 3,
				general: false
			}
		},
		methods: {
			handleChange(index){
				this.radio2 = index
			},
			handleShow_back(){
				// this.general = true
				MessageBox({
				  title: '享订支付协议',
				  message: '支付协议内容',
				  confirmButtonText: '我知道了',
				});
			},
			handleClose_back(){
				this.general = false
			},
			cancelBubble(event){
				event.cancelBubble = true
			},
		}
	}
</script>
<style scoped lang="scss">
	@import "../../../common/css/common.scss";
	.box{
		width: 100%;
		position: relative;
		padding-bottom: rem(60px);
		padding-top: rem(20px);
		.line{
			border: #e5e5e5 solid rem(6px);
		}
		.back{
			background-color: rgba(0,0,0,0.3);
			width: 100%;
			height: 100%;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 9999;
			.box{
				padding: rem(15px) 0;
				width: 90%;
				position: absolute;
				top: rem(80px);
				left: 5%;
				background-color: #f8f9fc;
				border-radius: rem(8px);
				.title{
					text-align: center;
					font-size: rem(17px);
					font-weight: bold;
					padding-bottom: rem(10px);
				}
				.text{
					padding: 0 4%;
					font-size: rem(14px);
				}
				.bottom{
					text-align: center;
					padding: 0 3%;
					padding-top: rem(18px);
					p{
						background-color: #43c122;
						color: #fff;
						padding: rem(10px) 0;
						border-radius: rem(5px);
					}
				}
			}
		}
		.item{
			display: flex;
			align-items: center;
			justify-content: center;
			border-bottom: #aaa solid rem(1px);
			padding: rem(18px) 0;
			div{
				&.img{
					width: rem(25px);
					height: rem(25px);
					margin-left: 4%;
					img{
						width: 100%;
						height: 100%;
					}
				}
				&.text{
					width: 80%;
					font-size: rem(16px);
					margin-left: 4%;
					p{
						display: inline-block;
					}
					.right{
						float: right;
					}
				}
			}
		}
		.bottom_box{
			padding: rem(10px) 12%;
			margin-top: rem(20px);
			.button{
				background-color: #43c122;
				padding: rem(12px) 10%;
				text-align: center;
				color: #fff;
				font-size: rem(14px);
				border-radius: rem(8px);
			}
		}
		.know{
			text-align: center;
			color: #4e9de6;
			font-size: rem(14px);
			margin-top: rem(15px);
		}
	}
</style>