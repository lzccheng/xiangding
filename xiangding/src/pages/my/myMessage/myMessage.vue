<template>
	<div class="box">
		<Header title="申请入驻"/>
		
			<div class="form">
				<p class="input">
					<label>姓名</label>
					<input type="text" placeholder="请输入姓名" name="">
				</p>
				<p class="input">
					<label>手机号</label>
					<input type="text" placeholder="请输入手机号" name="">
					<span class="get">绑定手机   &nbsp;<i class="fas fa-chevron-right"></i></span>
				</p>
				<p class="input">
					<label>微信号:</label>
					<input type="text" placeholder="请输入微信号" name="">
				</p>
				<p class="mm">
					<label>地址</label>
					<span class="get">   &nbsp;<i class="fas fa-chevron-right"></i></span>
				</p>
			</div>
			<div class="form">
				<p class="input">
					<label>银行卡</label>
					<span class="get">   &nbsp;<i class="fas fa-chevron-right"></i></span>
				</p>
				<p class="mm">
					<label>余额支付密码</label>
					<span class="get">   &nbsp;<i class="fas fa-chevron-right"></i></span>
				</p>
			</div>
		
			<div class="body">
				<router-link class="button" tag="div" to="/enter/login">
					<span>确认修改</span>
				</router-link>
			</div>
	</div>

</template>
<script>
	export default {
		data(){
			return {
				value1: null,
			}
		},
		methods: {

		}
	}
</script>
<style scoped lang="scss">
	@import '../../../common/css/common.scss';
	.box{
		width: 100%;
		background-color: #e5e5e5;
		position: relative;
		.form{
			background-color: #ffffff;
			margin: rem(8px) 0;
			padding: rem(2px) 0 0 rem(15px);
			border-top: 0.5px solid #aaa;
			border-bottom: 0.5px solid #aaa;
			.mm{
				position: relative;
				padding: rem(13px) rem(8px);
				display: flex;
				label{
					width: 30%;
				}
				input{
					width: 64%;
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
			.input{
				position: relative;
				border-bottom: 0.5px solid #aaa;
				padding: rem(10px) 2%;
				display: flex;
				label{
					width: 30%;
				}
				input{
					width: 40%;
					border: none;
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
				color: #aaa;
				position: absolute;
				top: 0;
				right: 0;
				padding: rem(10px) 4%;
			}
			.btn{
				margin-top: rem(25px);
				button{
					width: 100%;
					border: none; 
					color: #fff;
					border-radius: rem(5px);
					background-color: #43c122;
					padding: rem(12px);
				}
			}
		}
		.body{
			border-top: #aaa solid rem(1px);
			background-color: #ffffff;
			padding-bottom: rem(50px);
			padding-top: rem(30px);
			.button{
				background-color: #8bc34a;
				color: #ffffff;
				font-size: rem(16px);
				text-align: center;
				padding: rem(12px) 0;
			}
		}
	}
</style>