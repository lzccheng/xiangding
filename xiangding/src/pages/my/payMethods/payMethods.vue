<template>
	<div class="box">
		<Header title="支付订单"/>
		<div class="line"></div>
		<div v-for="(i,index) in arrItem" :key="index"  class="item" @click="handleChange(index)">
			<div class="img"><img :src="i.imgUrl" alt=""></div>
			<div class="text">
				<p>{{i.text}}</p>
				<span class="right">
					<el-radio-group v-model="radio2">
					    <el-radio :label="index">&nbsp;</el-radio>
					  </el-radio-group>
				</span>
			</div>
		</div>
		<!-- <div class="item">
			<div class="img"><img src="../../../../static/img/payMethods/weChat.jpg" alt=""></div>
			<div class="text">
				<p>微信支付</p>
				<span class="right">
					<el-radio-group v-model="radio2">
					    <el-radio :label="1">&nbsp;</el-radio>
					  </el-radio-group>
				</span>
			</div>
		</div>
		<div class="item">
			<div class="img"><img src="../../../../static/img/payMethods/friend.png" alt=""></div>
			<div class="text">
				<p>朋友代付</p>
				<span class="right">
					<el-radio-group v-model="radio2">
					    <el-radio :label="2" checked>&nbsp;</el-radio>
					  </el-radio-group>
				</span>
			</div>
		</div>
		<div class="item">
			<div class="img"><img src="../../../../static/img/payMethods/pag.jpg" alt=""></div>
			<div class="text">
				<p>余额支付</p>
				<span class="right">
					<el-radio-group v-model="radio2">
					    <el-radio :label="3">&nbsp;</el-radio>
					  </el-radio-group>
				</span>
			</div>
		</div> -->
		<div class="bottom_box">
		    <p class="button">确认支付</p>
		</div>
		<p class="know">《支付协议》</p>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				arrItem: [
					{
						imgUrl: 'http://www.share-hotel.cn/addons/share/img/payMethods/weChat.jpg',
						text: '微信支付'
					},
					{
						imgUrl: 'http://www.share-hotel.cn/addons/share/img/payMethods/friend.png',
						text: '朋友代付'
					},
					{
						imgUrl: 'http://www.share-hotel.cn/addons/share/img/payMethods/pag.jpg',
						text: '余额支付'
					}
				],
				radio2: 3
			}
		},
		methods: {
			handleChange(index){
				this.radio2 = index
			}
		}
	}
</script>
<style scoped lang="scss">
	@import "../../../common/css/common.scss";
	.box{
		width: 100%;
		position: relative;
		padding-bottom: rem(60px);
		.line{
			border: #e5e5e5 solid rem(6px);
		}
		.item{
			margin: rem(10px) 0;
			display: flex;
			border-bottom: #aaa solid rem(1px);
			padding-top: rem(5px);
			div{
				margin-bottom: rem(10px);
				&.img{
					width: 8%;
					height: rem(30px);
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
						line-height: rem(35px);
					}
				}
			}
		}
		.bottom_box{
			padding: rem(10px) 12%;
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
			position: absolute;
			bottom: 0;
			left: 40%;
			color: #4e9de6;
			font-size: rem(14px);
		}
	}
</style>