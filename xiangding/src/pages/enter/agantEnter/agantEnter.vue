<template>
	<div class="box">
		<Header title="申请入驻"/>
		<div class="form">
			<p class="input">
				<label>代理商姓名:</label>
				<input type="text" placeholder="请输入姓名" name="">
			</p>
			<p class="input">
				<label>联系电话:</label>
				<input type="text" placeholder="请输入电话号码" name="">
			</p>
			<p class="mm">
				<label>验证码:</label>
				<input type="text" placeholder="请输入验证码" name="">
				<span class="get">获取验证码</span>
			</p>
		</div>
		<div class="form_1">
			<p class="mm">
				<label>身份证号码:</label>
				<input type="text" placeholder="请输入身份证号码" name="">
			</p>
			<div class="photo">
				<p>
					<span class="icon_photo"><i class="fas fa-camera"></i></span>
					<span class="icon_photo"><i class="fas fa-camera"></i></span>
				</p>
				<p>
					<span class="on">身份证正面照</span>
					<span class="down">身份证反面照</span>
				</p>
			</div>
			<router-link tag="p" to="/my/myagantEnter" class="button">立即申请</router-link>
			
		</div>
		<p class="know">《入住协议》</p>
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
		position: relative;
		.form_1{
			background-color: #ffffff;
			margin-top: rem(10px);
			border-top: 0.5px solid #aaa;
			padding-bottom: rem(100px);
			.photo{
				position: relative;
				border-top: #aaa solid rem(1px);
				border-bottom: #aaa solid rem(1px);
				padding: rem(43px) 3% rem(80px);
				.icon_photo{
					padding: rem(30px) 19%;
					border: #aaa solid rem(1px);
					border-radius: rem(5px);
					color: #aaa;
					font-size: rem(23px);
					margin-right: 4%;
				}
				.on{
					position: absolute;
					top: rem(120px);
					left: 14%;
				}
				.down{
					position: absolute;
					top: rem(120px);
					left: 62%;
				}
			}
			.button{
				background-color: #8bc34a;
				font-size: rem(15px);
				text-align: center;
				padding: rem(10px) 0;
				color: #ffffff;
				margin-top: rem(20px);
			}

			.mm{
				position: relative;
				padding: rem(13px) rem(8px);
				display: flex;
				label{
					font-size: rem(14px);
					width: 30%;
				}
				input{
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
		}
		.form{
			background-color: #ffffff;
			margin-top: rem(10px);
			padding: rem(2px) 0 0 rem(15px);
			border-top: 0.5px solid #aaa;
			border-bottom: 0.5px solid #aaa;
			.mm{
				position: relative;
				padding: rem(13px) rem(8px);
				display: flex;
				label{
					font-size: rem(14px);
					width: 30%;
				}
				input{
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
				padding: rem(10px) rem(8px);
				display: flex;
				label{
					font-size: rem(14px);
					width: 30%;
				}
				input{
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
				background-color: #8bc34a;
				color: #ffffff;
				position: absolute;
				top: 0;
				right: 0;
				padding: rem(13px) rem(12px);
				font-size: rem(14px);
			}
			.eye{
				color: #8bc34a;
				font-size: rem(17px);
			}
			.text_img{
				width: 100%;
				height: rem(200px);
				margin-top: rem(15px);
				background-color: #eee;
				border-radius: rem(10px)
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
			.upload{
				font-size: rem(14px);
				margin: rem(10px) 0;
			}
			.add_icon{
				width: 20%;
				margin-bottom: rem(15px);
				color: #aaa;
				font-size: rem(45px);
			}
			.content{
				color: #aaa;
				margin-bottom: rem(80px);
				font-size: rem(14px);
			}
		}
		.know{
			color: #4ea9ec;
			font-size: rem(14px);
			background-color: #ffffff;
			position: absolute;
			bottom: rem(10px);
			left: 50%;
			margin-left: rem(-42px);
		}


	}
</style>