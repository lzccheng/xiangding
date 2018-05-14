<template>
	<div class="box">
		<Header title="绑定手机"/>
		<div>
			<div class="form">
				<p class="input">
					<label>手机号:</label>
					<input @blur="handleCheck" class="handleCheck" type="text" placeholder="请输入手机号" name="">
				</p>
				<p class="input line">
					<label>验证码:</label>
					<input type="text" placeholder="请输入验证码" name="">
					<span class="get">获取验证码</span>
				</p>
			</div>
			<div class="body">
				<div class="green_btn" >
					<span>绑定</span>
				</div>
			</div>
		</div>
		<!-- 修改手机号 -->
		<div class="change_" v-if="title === ''">
		    <p class="icon_box">
				<span class="i color"><i class="fas fa-user"></i></span>
				<span class="line"></span>
				<span class="i"><i class="fas fa-mobile-alt"></i></span>
				<span class="line"></span>
				<span class="i"><i class="far fa-check-circle"></i></span>
			</p>
			<p class="text_box">
				当前绑定手机号:  13800138000
			</p>
			<p class="text_box" style="border-top: none">
				<input type="text"  placeholder="请输入验证码" name="">
				<span class="get">获取验证码</span>
			</p>
			<div class="body" style="border-top: none">
				<div class="green_btn" >
					<span>下一步</span>
				</div>
			</div>
		</div>
		<!-- 绑定手机号 -->
		<div class="fixed_" v-if="title === ''">
				<span class="photo_icon"><i class="fas fa-mobile-alt"></i></span>
		    	<p class="i"><span><i class="fas fa-check-circle"></i></span></p>
		     	<p class="fixed_text">绑定的手机号:   13800138000</p>
		     	<div class="body" style="border-top: none">
					<div class="green_btn">
						<span>更换手机号</span>
					</div>
				</div>
		</div>
	</div>

</template>
<script>
	import common from '../../../common/js/common'
	export default {
		data(){
			return {
				value1: null,
			}
		},
		methods: {
			handleCheck(event){
				let value = document.querySelector('.handleCheck').value
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
		.change_{
			padding: rem(30px) 0;
			text-align: center;
			background-color: #ffffff;
			.icon_box{
				padding-bottom: rem(30px);
			}
			.text_box{
				// margin-top: rem(20px);
				text-align: left;
				border-top: #aaa solid rem(1px);
				border-bottom: #aaa solid rem(1px);
				padding: rem(10px) 5%;
				display: flex;
				position: relative;
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
				span{
					&.get{
						background-color: #43c122;
						color: #ffffff;
						position: absolute;
						top: 0;
						right: 0;
						height: 100%;
						padding: 0 4%;
						display: flex;
						align-items: center;

					}
				}


			}
			.i{
				font-size: rem(30px);
			}
			.color{
				color: #43c122;
			}
			.line{
				display: inline-block;
				border: #aaa dashed rem(2px);
				width: rem(30px);
				height: 0;
				margin: rem(10px) rem(7px);
			}
		}
		.fixed_{
			background-color: #ffffff;
			text-align: center;
			position: relative;
			padding-bottom: rem(100px);
			.photo_icon{
				font-size: rem(120px);
				color: #8A8A8A;
			}
			.i{
				position: absolute;
				top: rem(110px);
				left: 52%;
				font-size: rem(50px);
				span{
					color: #43c122;
				}
			}
			.fixed_text{
				font-size: rem(17px);
				font-weight: bold;
				padding-top: rem(30px);
			}
		}
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
				display: flex;
				align-items: center;
				height: 100%;
				padding: 0 4%;
				
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
			padding: rem(16px) 5% rem(50px);
			margin-top: rem(10px);
			border-top: #aaa solid rem(1px);
			
		}
	}
</style>