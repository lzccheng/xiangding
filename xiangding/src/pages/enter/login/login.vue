<template>
	<div class="box">
		<div class="background">
			
		</div>
		<div class="enter">

			<div class="_login">
				<div class="header_icon">
					<img src="" alt="">
				</div>
				<div class="hotelEnter">
					<span class="id">id</span>
					<span class="line">|</span>
					<span class="text"><input type="text" placeholder="账号"></span>
					<span class="icon"><i class="far fa-times-circle"></i></span>
				</div> 
				<div class="agentEnter">
					<span class="id"><i class="fas fa-lock"></i></span>
					<span class="line">|</span>
					<span class="text"><input type="text" placeholder="密码"></span>
					<span class="icon"><i class="fas fa-eye"></i></span>
				</div>
				<router-link tag="p" to="/enter/forgotPassword" class="forget">忘记密码</router-link>
				<router-link tag="div" to="/enter/hotelManage" class="login agentEnter"><span>登录</span> </router-link>
			</div>

			<div class="green_box">
				<div class="green g1"></div>
				<span class="or">OR</span>
				<span class="green g2"></span>
			</div>
			<div class="content">
				<span class="i"><i class="far fa-circle"></i></span>
				<span class="user">用户协议及隐私政策</span>
				<span class="problem">登录遇到问题</span>
			</div>
			<p class="idear">《登录协议》</p>
		</div>
		
	</div>
</template>
<script>
	export default{
		data(){
			return {

			}
		}
	}
</script>
<style scoped lang="scss">
	@import '../../../common/css/common.scss';
	.box{
		width: 100%;
		height: 100%;
		div{
			&.enter{
				width: 100%;
				position: absolute;
				left: 0;
				top: 0;
				._login{
					width: 62%;
					margin: 19% auto rem(40px);
					color: #ffffff;
					input{
						width: 62%;
						border: none;
						background-color: rgba(250, 250, 250,0);
						color: #fff;
						&::-webkit-input-placeholder { 
						    color:    #fff;
						}
						&:-moz-placeholder { 
						    color:    #fff;
						}
						&::-moz-placeholder { 
						    color:    #fff;
						}
						&:-ms-input-placeholder { 
						    color:    #fff;
						}
					}
					div{
						height: rem(42px);
						border-radius: rem(20px);
					}
					.header_icon{
						width: rem(80px);
						height: rem(80px);
						margin: rem(25px) auto;  
						border-radius: 100%;
						background-color: #fff;
					}
				}
				.green_box{
					display: flex;
					align-items: center;
					.green{
						width: 70%;
						border-radius: 0;
						border-bottom: 1px solid #43c122;
					}
					.or{
						color: #43c122;
						font-weight: bold;
						font-size: rem(14px);
					}
					.g1{
						margin-right: rem(15px);				
					}
					.g2{
						margin-left: rem(15px);				
					}
				}
				.content{
					color: #ffffff;
					padding: rem(10px) rem(15px);
					font-size: rem(14px);
					.problem{
						float: right;
					}
				}
				.idear{
					position: fixed;
					bottom: rem(15px);
					left: 40%;
					text-align: center;
					color: #ffffff;
					font-size: rem(14px);
				}
			}
			&.background{
				width: 100%;
				height: 100%;
				background-color: #fff;
				background-image: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523678917746&di=9d67e28303460dfdcd4a4e6734b629f1&imgtype=0&src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F120530%2F188024-1205300PQ373.jpg');
				background-repeat: no-repeat;
				background-attachment: fixed;
				background-position: top;
				filter: blur(4px);
			}
		}
		.hotelEnter{
			line-height: rem(42px);
			background: rgba(250, 250, 250,0.4);
			position: relative;
			.text_box{
				height: rem(30px);
				position: absolute;
				top: -80%;
				left: 0;
				padding: rem(11px) rem(20px);
				font-size: rem(14px);
		     	margin-right: rem(10px);
			}
		}
		.agentEnter{
			line-height: rem(42px);
			background: rgba(250, 250, 250,0.5);
			margin-bottom: rem(20px);
			margin-top: rem(15px);
		}

		.id{
			font-weight: bold;
			margin-left: rem(16px);
			margin-right: rem(8px);
		}
		.line{
			margin-right: rem(5px);
		}
		.forget{
			text-align: center;
			color: #43c122;
			font-size: rem(14px);
		}
		.login{
			text-align: center;
			line-height: rem(42px);
			background-color: #43c122;
			color: #ffffff;
			font-size: rem(14px);
		}
	}
</style>