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
				<input @blur="handleCheck" type="text" placeholder="请输入电话号码" name="">
			</p>
			<p class="input" style="border-bottom: none">
				<label>验证码:</label>
				<input type="text" placeholder="请输入验证码" name="">
				<span class="get"><span>获取验证码</span></span>
			</p>
		</div>
		<div class="form_1">
			<p class="mm">
				<label>身份证号码:</label>
				<input @blur="handleCheckId" type="text" placeholder="请输入身份证号码" name="">
			</p>
			<div class="photo">
				<p>
					<span class="icon_photo">
					   <label for="file"><i class="fas fa-camera"></i></label>
					    <input type="file" id="file" style="display: none">

					</span>
					<span class="icon_photo">
					    <label for="file"><i class="fas fa-camera"></i></label>
					    <input type="file" id="file" style="display: none">
					</span>
				</p>
				<p>
					<span class="on">身份证正面照</span>
					<span class="down">身份证反面照</span>
				</p>
			</div>
			<div class="footer">
			<router-link tag="p" to="/my/myagantEnter" class="button">立即申请</router-link>
			</div>
		</div>
		<p class="know">《入住协议》</p>
	</div>
</template>
<script>
	import common from '../../../common/js/common'
	export default {
		data(){
			return {
				
			}
		},
		methods: {
			handleCheck(event){
				let value = event.path[0].value
				// event.path[0].value
				// (/^1[3|4|5|8][0-9]\d{4,8}$/.test(sMobile))
				if(value){
					if(!common.checkPhone(value)){
						this.$message({
				          message: '请输入正确的联系电话',
				          type: 'warning'
				        });
					}
				}else{
					this.$message({
			          message: '联系电话不能为空',
			          type: 'warning'
			        });
				}
			},
			handleCheckId(event){
				let value = event.path[0].value
				// event.path[0].value
				// (/^1[3|4|5|8][0-9]\d{4,8}$/.test(sMobile))
				// var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
				// var reg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/
				if(value){
					if(!common.checkId(value)){
						this.$message({
				          message: '请输入正确身份证号',
				          type: 'warning'
				        });
					}
				}else{
					this.$message({
			          message: '身份证号不能为空',
			          type: 'warning'
			        });
				}
			},
		}
	}
</script>
<style scoped lang="scss">
	@import "../../../common/css/common.scss";
	.box{
		width: 100%;
		background-color: #e5e5e5;
		position: relative;
		font-size: rem(14px);
		.form_1{
			background-color: #ffffff;
			margin-top: rem(10px);
			border-top: 0.5px solid #aaa;
			padding-bottom: rem(100px);
			.photo{
				position: relative;
				border-top: #aaa solid rem(1px);
				border-bottom: #aaa solid rem(1px);
				padding: rem(43px) 2% rem(80px);
				text-align: center;
				.icon_photo{
					padding: rem(30px) 19%;
					border: #aaa solid rem(1px);
					border-radius: rem(5px);
					color: #aaa;
					font-size: rem(23px);
					text-align: center;
					display: inline-block;
					width: rem(23px);
					margin: 0 rem(4px);
				}
				.on{
					position: absolute;
					top: rem(150px);
					left: 15%;
				}
				.down{
					position: absolute;
					top: rem(150px);
					right: 15%;
				}
			}
			.footer{
				padding: 0 5%;
				.button{
					background-color: #43c122;
					font-size: rem(15px);
					text-align: center;
					padding: rem(10px) 0;
					color: #ffffff;
					margin-top: rem(20px);
					border-radius: rem(5px);
				}
			}
			.mm{
				position: relative;
				padding: rem(13px) rem(9px) rem(13px) 6%;
				display: flex;
				label{
					font-size: rem(14px);
					width: 30%;
					padding-right: rem(3px);
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
			.input{
				position: relative;
				border-bottom: 0.5px solid #aaa;
				padding: rem(10px) rem(8px);
				label{
					display: inline-block;
					font-size: rem(14px);
					width: 30%;
				}
				input{
					width: 45%;
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