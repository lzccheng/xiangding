<template>
	<div class="box">
		<Header title="我的信息"/>
		
			<div class="form">
				<p class="input">
					<label>姓名</label>
					<input type="text" placeholder="请输入姓名" name="">
				</p>
				<p class="input">
					<label>手机号</label>
					<input @blur="handleCheck" class="handleCheck" type="text" placeholder="请输入手机号" name="">
					<router-link tag="span" to="/my/bindPhone" class="get">   &nbsp;<i class="fas fa-chevron-right"></i></router-link>
				</p>
				<p class="mm">
					<label>微信号:</label>
					<input type="text" placeholder="请输入微信号" name="">
				</p>
			</div>
			<div class="form">
				<router-link tag="p" to="/my/bindCard" class="input">
					<label>银行卡</label>
					<span  class="get">   &nbsp;<i class="fas fa-chevron-right"></i></span>
				</router-link>
				<router-link tag="p" to="/my/payPassword" class="mm">
					<label>余额支付密码</label>
					<span  class="get">   &nbsp;<i class="fas fa-chevron-right"></i></span>
				</router-link>
			</div>
		
			<div class="body">
				<div class="green_btn" >
					<span>确认修改</span>
				</div>
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
			handleCheck(event){
				let value = document.querySelector('.handleCheck').value
				// event.path[0].value
				// (/^1[3|4|5|8][0-9]\d{4,8}$/.test(sMobile))
				if(value){
					if(!this.Fn.checkPhone(value)){
						this.$message({
				          message: '请输入正确的手机号',
				          type: 'warning'
				        });
					}
				}else{
					this.$message({
			          message: '手机号不能为空',
			          type: 'warning'
			        });
				}
			},
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
			padding: rem(30px) 5% rem(50px);
			background-color: #fff;
			
		}
	}
</style>