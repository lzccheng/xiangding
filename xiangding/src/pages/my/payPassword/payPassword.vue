<template>
	<div class="box">
		<Header title="余额支付密码"/>
		<div>
			<div class="form">
				<p class="input">
					<label>支付密码</label>
					<input type="text" placeholder="请输入支付密码" name="">
				</p>
				<p class="input" style="border-bottom: none">
					<label>确认密码</label>
					<input type="text" placeholder="请输入确认密码" name="">
				</p>
			</div>
			<div class="body">
				<div class="green_btn" >
					<span>确认</span>
				</div>
			</div>
		</div>
		<div v-if="title === ''">
			<div class="form">
				<p class="input"  >
					<label>验证码</label>
					<input type="text" placeholder="请输入验证码" name="">
					<span class="get"><span>获取验证码</span></span>
				</p>
				<p class="input">
					<label>新的支付密码</label>
					<input type="text" placeholder="请输入支付密码" name="">
				</p>
				<p class="input" style="border-bottom: none">
					<label>确认支付密码</label>
					<input type="text" placeholder="请输入确认密码" name="">
				</p>
			</div>
			<div class="body">
				<router-link class="green_btn" tag="div" :to="Fn.getUrl({path: '/enter/login'})">
					<span>确认修改</span>
				</router-link>
			</div>
		</div>
	</div>

</template>
<script>
	export default {
		data(){
			return {
				// value1: null,
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
		font-size: rem(14px);
		padding-top: rem(24px);
		.form{
			background-color: #ffffff;
			margin-top: rem(8px);
			padding: 0 0 0 rem(15px);
			border-top: 0.5px solid #aaa;
			border-bottom: 0.5px solid #aaa;
			.input{
				position: relative;
				border-bottom: 0.5px solid #aaa;
				padding: rem(10px) rem(8px);
				label{
					width: 30%;
					display: inline-block;
				}
				input{
					width: 42%;
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
				position: absolute;
				top: 0;
				right: 0;
				background-color: #43c122;
				height: 100%;
				display: flex;
				align-items: center;
				color: #fff;
				padding: 0 rem(10px);
			}
			.color_aaa{
				color: #aaa;
			}
			// .btn{
			// 	margin-top: rem(25px);
			// 	button{
			// 		width: 100%;
			// 		border: none; 
			// 		color: #fff;
			// 		border-radius: rem(5px);
			// 		background-color: #43c122;
			// 		padding: rem(12px);
			// 	}
			// }
		}
		.body{
			background-color: #ffffff;
			padding: rem(16px) 5% rem(50px);
			margin-top: rem(10px);
			border-top: #aaa solid rem(1px);
		
		}
	}
</style>