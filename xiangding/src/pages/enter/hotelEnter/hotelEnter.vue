<template>
	<div class="box">
	<Header title="申请入驻"/>
		<div class="form">
			<p class="input">
				<label>申请人:</label>
				<input type="text" placeholder="请输入姓名" name="">
			</p>
			<p class="input">
				<label>联系电话</label>
				<input type="text" placeholder="请输入电话号码" name="">
			</p>
			<p class="input">
				<label>验证码:</label>
				<input type="text" placeholder="请输入验证码" name="">
			</p>
			<p class="input">
				<label>账号:</label>
				<input type="text" placeholder="请输入账号" name="">
			</p>
			<p class="input">
				<label>密码:</label>
				<input type="text" placeholder="******" name="">
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
		.form{
			background-color: #ffffff;
			margin-top: rem(8px);
			padding: rem(2px) 0 0 rem(15px);
			border-top: 0.5px solid #aaa;
			border-bottom: 0.5px solid #aaa;
			.input{
				border-bottom: 0.5px solid #aaa;
				padding: rem(13px) rem(8px);
				display: flex;
				label{
					font-size: rem(14px);
					width: 35%;
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
		}
	}
</style>