<template>
	<div class="box">
		<Header title="提现"/>
		<div class="form">
			<p class="input">
				<label>提现方式</label>
				<span class="weChat_text">微信</span>
			</p>
			<p class="input">
				<label>提现金额</label>
				<input type="text" placeholder="请输入提现金额" name="">
			</p>
			<p class="input" style="border-bottom: none">
				<label>可提现金额:</label>
				<input type="text" placeholder="0.99元" name="">
			</p>
		</div>
		<div class="form">
			<p class="input">
				<label>
				  <p>手续费</p>
				  <p class="text_5">收取5%手续费</p>
				</label>
				<input class="input_top" type="text" placeholder="0.00元" name="">
			</p>
			<p class="input" style="border-bottom: none">
				<label>实际到账:</label>
				<input type="text" placeholder="0.00元" name="">
			</p>
		</div>
		<div class="form">
			<p class="input" style="border-bottom: none">
				<label>验证码</label>
				<input type="text" placeholder="请输入验证码" name="">
				<span class="get"><span>获取验证码</span></span>
			</p> 
		</div>
		<div class="button_box">
			<p>提现</p>
		</div>
		<div class="know_box">
		<p class="know">《提现协议》</p>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {

			}
		},
		methods: {

		}
	}
</script>
<style scoped lang="scss">
	 @import "../../../common/css/common.scss";
	.box{
		width: 100%;
		background-color: #e5e5e5;
		font-size: rem(14px);
		.form{
			background-color: #ffffff;
			margin-top: rem(8px);
			padding: rem(2px) 0 0 rem(15px);
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
				top: rem(-1px);
				right: 0;
				padding: 0 rem(10px);
				height: 100%;
				display: flex;
				align-items: center;
			}
		}
		.button_box{
			background-color: #ffffff;
			padding: rem(20px) 5%;
			p{
				color: #ffffff;
				font-size: rem(14px);
				background-color: #43c122;
				padding: rem(14px) 20%;
				text-align: center;
				border-radius: rem(5px);
			}
		}
		.know_box{
			background-color: #ffffff;
			padding: rem(50px) 0 rem(10px);
			.know{
				text-align: center;
				color: #4e9dea;
				font-size: rem(14px);
			}
		}
	}
</style>