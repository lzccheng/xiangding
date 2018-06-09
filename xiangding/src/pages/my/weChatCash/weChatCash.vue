<template>
	<div class="box">
		<div class="back" v-if="general" @click="handleClose_back"> 
			<div class="box" @click="cancelBubble">
				<p class="title">享订提现协议</p>
				<p class="text">hello</p>
				<div class="bottom">
					<p @click="handleClose_back">
					   <span>我知道了</span>
					</p>
				</div>
			</div>
		</div>
		<Header title="提现"/>
		<div class="form">
			<p class="input">
				<label>提现方式</label>
				<span class="weChat_text">微信</span>
			</p>
			<p class="input">
				<label>提现金额</label>
				<input type="number" v-model.number="balance" placeholder="请输入提现金额" name="">
			</p>
			<p class="input" style="border-bottom: none">
				<label>可提现金额:</label>
				<span class="weChat_text">{{cash}}</span>
			</p>
		</div>
		<div class="form" style="border-bottom: none">
			<p class="input">
				<label>
				  <p>手续费</p>
				  <p class="text_5" style="border-bottom: none">{{text}}</p>
				</label>
				<!-- <span class="weChat_text">0.00</span> -->
			</p>
			<!-- <p class="input" style="border-bottom: none">
				<label>实际到账:</label>
				<span class="weChat_text">0.00</span>
			</p> -->
		</div>
		<!-- <div class="form">
			<p class="input" style="border-bottom: none">
				<label>验证码</label>
				<input type="text" placeholder="请输入验证码" name="">
				<span class="get"><span>获取验证码</span></span>
			</p> 
		</div> -->
		<div class="know_box">
			<p @click="handleCash" tag="p" :to="Fn.getUrl({path: '/my/applicationCash'})" class="green_btn">提现</p>
			<!-- <p class="know" @click="handleShow_back">《提现协议》</p> -->
		</div>
	</div>
</template>
<script>
	export default {
		mounted(){
			//余额
			//https://www.share-hotel.cn/addons/yun_shop/api.php?i=3&type=1&shop_id=null&route=finance.balance-withdraw.page&
			this.getData()
			//提现
			//https://www.share-hotel.cn/addons/yun_shop/api.php?i=3&type=1&shop_id=null&route=finance.balance-withdraw.withdraw&i=3&type=1&withdraw_type=1&withdraw_money=20
		},
		data(){
			return {
				general: false,
				cash: '0',
				text: '',
				balance: 0
			}
		},
		methods: {
			handleCash(){
				console.log(this.balance)
				if(this.balance <= 0){
					return this.Fn.tips('请输入大于 0 的提现金额')
				}
				let that = this
				this.Http.get({route: 'finance.balance-withdraw.withdraw',params: {
					withdraw_money: this.balance,
					withdraw_type: 1
				}}).then(res=>{
					that.Fn.tips(res.data.msg)
					that.balance = 0
					that.getData()
				})
			},
			getData(){
				let that = this
				this.Http.get({route: 'finance.balance-withdraw.page'}).then(res=>{
					if(res.data.result == 1){
						that.cash = res.data.data.balance
						that.text = res.data.data.poundage
					}
				})
			},
			handleShow_back(){
				this.general = true
			},
			handleClose_back(){
				this.general = false
			},
			cancelBubble(event){
				event.cancelBubble = true
			},
		},
		watch: {
			$route(to,from){
				if(to.name === 'weChatCash'){
					this.getData()
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
		font-size: rem(14px);
		padding-top: rem(20px);
		.back{
			background-color: rgba(0,0,0,0.3);
			position: fixed;
			top: 0;
			left: 0;
			z-index: 1000;
			width: 100%;
			height: 100%;
			.box{
				padding: rem(15px) 0;
				width: 90%;
				background-color: #f8f9fc;
				position: absolute;
				top: rem(80px);
				left: 5%;
				border-radius: rem(8px);
				.title{
					font-size: rem(17px);
					text-align: center;
					font-weight: bold;
					padding-bottom: rem(10px);
				}
				.text{
					padding: 0 4%;
				}
				.bottom{
					padding: 0 3%;
					padding-top: rem(18px);
					text-align: center;
					p{
						background-color: #43c122;
						color: #fff;
						padding: rem(10px) 0;
						border-radius: rem(5px);
					}
				}
			}
		}
		.form{
			background-color: #ffffff;
			margin-top: rem(8px);
			padding: 0 0 0 rem(15px);
			border-top: 0.5px solid #aaa;
			border-bottom: 0.5px solid #aaa;
			.input{
				position: relative;
				border-bottom: 0.5px solid #aaa;
				padding: rem(10px) 2%;
				.text_5{
					color: #aaa;
					font-size: rem(11px);
				}
				.weChat_text{
					font-size: rem(14px);
				}
				label{
					font-size: rem(14px);
					width: 30%;
					display: inline-block;
				}
				.input_top{
					position: relative;
					left: 0;
					top: rem(10px);
				}
				input{
					width: 43%;
					border: none;
					height: rem(20px);
					&::-webkit-input-placeholder { 
					    color:    #aaa;
					}
					&:-moz-placeholder { 
					    color:    #aaa;
					}
					&::-moz-placeholder { 
					    color:    #aaa;
					}
					&:-ms-input-placeholder { 
					    color:    #aaa;
					}
				}
			}
			.text{
				margin-top: rem(15px);
				text-align: center;
			}
			.get{
				background-color: #43c122;
				color: #ffffff;
				position: absolute;
				top: 0;
				right: 0;
				padding: 0 rem(10px);
				height: 100%;
				display: flex;
				align-items: center;
			}
		}
		.button_box{
			padding: rem(20px) 5%;
		}
		.know_box{
			background-color: #ffffff;
			padding: rem(20px) 5%;
			.know{
				text-align: center;
				color: #4e9dea;
				font-size: rem(14px);
				padding: rem(10px) 0;
			}
		}
	}
</style>