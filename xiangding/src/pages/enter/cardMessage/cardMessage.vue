<template>
	<div class="box">
		<Header title="银行卡信息"/>
		
			<div class="form">
				<p class="input">
					<label>开户行</label>
					<input type="text" placeholder="请输入开户行" name="">
				</p>
				<p class="input">
					<label>开户行省份</label>
					<input type="text" placeholder="请输入开户行省份" name="">
				</p>
				<p class="input">
					<label>开户行城市</label>
					<input type="text" placeholder="请输入开户行城市" name="">
				</p>
				<p class="input">
					<label>开户行支行</label>
					<input type="text" placeholder="请输入开户行城市" name="">
				</p>
				<p class="input">
					<label>账号</label>
					<input type="text" placeholder="请输入账号" name="">
				</p>
				<p class="mm">
					<label>姓名</label>
					<input type="text" placeholder="请输入姓名" name="">
				</p>
			</div>
			<div class="body">
				<router-link class="button" tag="div" :to="Fn.getUrl({path: '/enter/login' })">
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
			padding: rem(30px) 5% rem(50px);
			.button{
				background-color: #43c122;
				border-radius: rem(5px);
				color: #ffffff;
				font-size: rem(16px);
				text-align: center;
				padding: rem(12px) 0;
			}
		}
	}
</style>