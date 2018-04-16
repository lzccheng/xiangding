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
		<div class="form">
			<p class="mm">
				<label>身份证号码:</label>
				<input type="text" placeholder="请输入身份证号码" name="">
			</p>
			<div class="photo">
					<span class="icon_photo"><i class="fas fa-camera"></i></span>
					<span class="icon_photo"><i class="fas fa-camera"></i></span>
			</div>
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
		position: relative;
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
			.photo{
				border-top: #aaa solid rem(1px);
				border-bottom: #aaa solid rem(1px);
				padding: rem(60px) 3%;
				.icon_photo{
					padding: rem(25px) 15%;
					border: #aaa solid rem(1px);
					border-radius: rem(5px);
					color: #aaa;
					font-size: rem(19px);
					margin-right: 3%;
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
		


	}
</style>