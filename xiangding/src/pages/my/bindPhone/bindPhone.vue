<template>
	<div class="box">
		<Header title="绑定手机"/>
			<div class="form">
				<p class="input">
					<label>手机号:</label>
					<input type="text" placeholder="请输入手机号" name="">
				</p>
				<p class="input line">
					<label>验证码:</label>
					<input type="text" placeholder="请输入验证码" name="">
					<span class="get">获取验证码</span>
				</p>
			</div>
			<div class="body">
				<router-link class="button" tag="div" to="/enter/login">
					<span>绑定</span>
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
		font-size: rem(14px);
		.form{
			background-color: #ffffff;
			margin-top: rem(8px);
			padding: rem(2px) 0 0 rem(15px);
			border-top: 0.5px solid #aaa;
			border-bottom: 0.5px solid #aaa;
			.mm{
				position: relative;
				padding: rem(10px) 2%;
				display: flex;
				label{
					font-size: rem(14px);
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
					width: 60%;
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
			.line{
				border-bottom: none;
			}
			.text{
				margin-top: rem(15px);
				text-align: center;
			}
			.color_aaa{
				color: #aaa;
			}
			.get{
				background-color: #43c122;
				color: #ffffff;
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
			background-color: #ffffff;
			// padding-bottom: rem(50px);
			// padding-top: rem(16px);
			padding: rem(16px) 5% rem(50px);
			margin-top: rem(10px);
			border-top: #aaa solid rem(1px);
			.button{
				background-color: #43c122;
				color: #ffffff;
				font-size: rem(16px);
				text-align: center;
				padding: rem(12px) 0;
				border-radius: rem(5px);
			}
		}
	}
</style>