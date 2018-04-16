<template>
	<div class="box">
		<Header title="申请入驻"/>
		
			<div class="form">
				<p class="input">
					<label>申请人:</label>
					<input type="text" placeholder="请输入姓名" name="">
				</p>
				<p class="input">
					<label>联系电话:</label>
					<input type="text" placeholder="请输入电话号码" name="">
				</p>
				<p class="input">
					<label>验证码:</label>
					<input type="text" placeholder="请输入验证码" name="">
					<span class="get">获取验证码</span>
				</p>
				<p class="input">
					<label>账号:</label>
					<input type="text" placeholder="请输入账号" name="">
				</p>
				<p class="mm">
					<label>密码:</label>
					<input type="text" placeholder="******" name="">
					<span class="eye"><i class="fas fa-eye"></i></span>
				</p>
			</div>
			<div class="form">
				<p class="input">
					<label>酒店名称:</label>
					<input type="text" placeholder="请输入酒店名称" name="">
				</p>
				<p class="input">
					<label>前台电话:</label>
					<input type="text" placeholder="请输入带有区号的座机号码" name="">
				</p>
				<p class="input">
					<label>电子邮箱:</label>
					<input type="text" placeholder="请输入电子邮箱" name="">
				</p>
				<p class="input">
					<label>酒店地址:</label>
					<input type="text" placeholder="点击选择地址" name="">
				</p>
				<p class="input">
					<label>代理商姓名:</label>
					<input type="text" placeholder="请输入代理人的姓名" name="">
				</p>
				<p class="input">
					<label>代理商电话:</label>
					<input type="text" placeholder="请输入代理人的电话号码" name="">
				</p>
			</div>
			<div class="form">
				<p class="upload">上传营业执照</p>
				<p class="add_icon"><i class="far fa-plus-square"></i></p>
			</div>
			<div class="form">
				<p class="hotel upload">酒店简介</p>
				<p class="content">请填写酒店简介...</p>
			</div>
			<div class="body">
				<router-link class="button" tag="div" to="/enter/login">
					<span>立即申请</span>
				</router-link>
				<p class="agreement">《入驻协议》</p>
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
	@import '../../../common/css/common.scss';
	.box{
		width: 100%;
		background-color: #e5e5e5;
		position: relative;
		.form{
			background-color: #ffffff;
			margin-top: rem(8px);
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
				padding: rem(10px) rem(12px);
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
		.body{
			background-color: #ffffff;
			padding-bottom: rem(50px);
			padding-top: rem(16px);
			.button{
				background-color: #8bc34a;
				color: #ffffff;
				font-size: rem(16px);
				text-align: center;
				padding: rem(12px) 0;
			}
			.agreement{
				background-color: #ffffff;
				text-align: center;
				color: #769de6;
				font-size: rem(14px);
				position: absolute;
				bottom: rem(5px);
				left: 38%;
			}
		}
	}
</style>