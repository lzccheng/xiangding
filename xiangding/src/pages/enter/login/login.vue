<template>
	<div class="box">
	<myalert :innerHtml="htmltest" title_2="享订登录协议" @handleCancel="aaa" :show="alertShow" status="1"/>
		<!-- <div class="back" v-if="general" @click="handleClose_back"> 
			<div class="box" @click="cancelBubble">
				<p class="title">享订登录协议</p>
				<p class="text">Hello</p>
				<div class="bottom">
					<p @click="handleClose_back">
					   <span>我知道了</span>
					</p>
				</div>
			</div>
		</div> -->
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
					<span class="icon_1"><i class="far fa-times-circle"></i></span>
				</div> 
				<div class="agentEnter">
					<span class="id"><i class="fas fa-lock"></i></span>
					<span class="line">|</span>
					<span class="text"><input type="password" class="pass" @blur="handleCheckPassword" placeholder="密码"></span>
					<span class="icon" @click="handlePassword">
						<span ref="eye_one">
							<i class="fas fa-eye"></i>
						</span>
						<span ref="eye_two">
							<i  class="fas fa-eye-slash"></i>
						</span>
					</span>
				</div>
				<router-link tag="p" :to="Fn.getUrl({path: '/enter/forgotPassword'})" class="forget">忘记密码</router-link>
				<router-link tag="div" :to="Fn.getUrl({path: '/enter/hotelManage'})" class="login agentEnter"><span>登录</span> </router-link>
			</div>

			<div class="green_box">
				<div class="green g1"></div>
				<span class="or">OR</span>
				<span class="green g2"></span>
			</div>
			<div class="content">
				<span class="i i_select" @click="handleChoice"><span></span></span>
				<span class="user" @click="handleChoice">用户协议及隐私政策</span>
				<span class="problem">登录遇到问题</span>
			</div>
			<p class="idear" @click="handleShow">《登录协议》</p>
		</div>
		
	</div>
</template>
<script>
	import myalert from '../../../components/alert/alert'
	import { Indicator,MessageBox } from 'mint-ui'
	export default{
		components: {
	        myalert
	      },
		mounted(){
			window.onresize = function(){
				document.querySelector('.background').style.backgroundSize = "100% "+window.innerHeight+"px"
				// alert(document.querySelector('.background').style.height)
			}
			this.$refs.eye_two.style.display = 'none'
			this.$refs.eye_one.style.display = 'inline-block'
		},
		data(){
			return {
				htmltest: '<p style="font-size: 13px; text-align: left;">登录协议内容部分........</p>',
				alertShow: false,
				// general: false
			}
		},
		methods: {
			handleChoice(){
				var dom = document.querySelector('.i_select')
				if(this.Fn.haveClass(dom.children[0],'choice')){
					this.Fn.removeClass(dom.children[0],'choice')
					dom.style.border =  '1px solid #fff'
				}else{
					this.Fn.addClass(dom.children[0],'choice')
					dom.style.border =  '1px solid #43c122'
				}
			},
			// handleShow_back(){
			// 	this.general = true
			// },
			// handleClose_back(){
			// 	this.general = false
			// },
			// cancelBubble(event){
			// 	event.cancelBubble = true
			// },
			handleCheckPassword(){
				let value = document.querySelector('.pass').value
				if(value){
					if(!this.Fn.checkPassword(value)){
						this.$message({
				          message: '请输入正确的密码',
				          type: 'warning'
				        });
					}
				}else{
					this.$message({
			          message: '密码不能为空',
			          type: 'warning'
			        });
				}
			},
			handleShow(){
				MessageBox({
				  title: '享订登录协议',
				  message: '登录协议内容',
				  confirmButtonText: '我知道了',
				});
				// this.alertShow = true
			},
			aaa(res){
				this.alertShow = false
			},
			handlePassword(e){
				let dom = document.querySelector('.pass')
				if(dom.getAttribute('type') === 'password'){
					dom.setAttribute('type','text')
					this.$refs.eye_two.style.display = 'none'
					this.$refs.eye_one.style.display = 'inline-block'
				}else{
					dom.setAttribute('type','password')
					this.$refs.eye_two.style.display = 'inline-block'
					this.$refs.eye_one.style.display = 'none'
				}

				
			},
		}
	}
</script>
<style scoped lang="scss">
	@import '../../../common/css/common.scss';

	.box{
		width: 100%;
		height: 100%;
		// position: relative;
		div{
			position: relative;
			// height: 100%;
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
					display: flex;
					align-items: center;
					.choice{
			    		background-color: #43c122;
			    	}
			    	
					.i{
						display: inline-block;
						width: rem(14px);
						height: rem(14px);
						border-radius: 100%;
						border: #fff solid rem(1px);
						margin-right: 2%;
						display: flex;
				    	align-items: center;
				    	justify-content: center;
				    	.border{
				    		border: rem(1px) #43c122 solid;
				    	}
						span{
							display: inline-block;
							width: rem(10px);
							height: rem(10px);
							border-radius: 100%;
							// background-color: #43c122;
							text-align: center;
						}

					}
					.problem{
						padding-left: 25%;
					}
				}
				.idear{
					position: absolute;
					bottom: rem(-30px);
					left: 40%;
					text-align: center;
					color: #ffffff;
					font-size: rem(14px);
				}
			}
			&.back{
				background-color: rgba(0,0,0,0.3);
				position: fixed;
				top: 0;
				left: 0;
				z-index: 999;
				width: 100%;
				height: 100%;
				// background-color: #fff;
				.box{
					padding: rem(15px) 0;
					padding-bottom: rem(30px);
					width: 90%;
					background-color: #f8f9fc;
					position: absolute;
					top: rem(80px);
					left: 5%;
					height: 15%;
					border-radius: rem(8px);
					.title{
						font-size: rem(17px);
						text-align: center;
						font-weight: bold;
						padding-bottom: rem(10px);
					}
					.text{
						padding: 0 4%;
						font-size: rem(14px);
					}
					.bottom{
						padding: 0 3%;
						padding-top: rem(18px);
						text-align: center;
						p{
							background-color: #43c122;
							color: #fff;
							padding: rem(10px) 0;
							border-radius: rem(5px);
						}
					}
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
			.icon_1{
				font-size: rem(16px);
			}
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
			.icon{
				font-size: rem(17px);
			}
			
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