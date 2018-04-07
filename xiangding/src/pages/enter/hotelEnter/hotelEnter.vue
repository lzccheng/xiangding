<template>
	<div class="box">
		<div class="form">
			<p class="title">入驻酒店妹妹平台</p>
			<p class="input">
				<label>酒店名称：</label>
				<input type="text" placeholder="请与营业执照上的酒店名称保持一致" name="">
			</p>
			<p class="input">
				<label>联系人：</label>
				<input type="text" placeholder="你的真实姓名" name="">
			</p>
			<p class="input">
				<label>前台电话：</label>
				<input type="text" placeholder="请输入带有区号的座机号码" name="">
			</p>
			<p class="input">
				<label>联系手机：</label>
				<input type="text" placeholder="请输入11位的手机号码" name="">
			</p>
			<p class="input">
				<label>电子邮箱：</label>
				<input type="text" placeholder="请输入您的邮箱" name="">
			</p>
			<p class="input">
				<label>公司收款账号：</label>
				<input type="text" placeholder="请输入您的银行卡号" name="">
			</p>
			<p class="input">
				<label>代理服务商名称：</label>
				<input type="text" placeholder="请输入您代理人的姓名" name="">
			</p>
			<p class="text"><span>上传营业执照</span></p>
			<p class="text_img">图片</p>
			<p class="btn"><button>入驻申请</button></p>
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
		background-color: #fff;
		.form{
			padding: rem(20px) rem(10px) 0;
			.title{
				text-align: center;
				font-size: rem(20px);
			}
			.input{
				border: 0.5px solid #aaa;
				padding: rem(5px) rem(8px);
				margin-top: rem(15px); 
				display: flex;
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