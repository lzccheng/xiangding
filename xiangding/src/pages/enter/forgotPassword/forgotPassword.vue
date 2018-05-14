<template>
	<div class="box">
		<Header title="忘记密码"/>
		<div class="body">
			<div v-if="show">
				<p>
					<span class="chinese">中国大陆 +86</span>
				</p>
				<p class="input">
					<input type="text" placeholder="请输入您绑定的手机号码">
				</p>
				<p class="button"  >
					<span class="green_btn" @click="handleNext">下一步</span>
				</p>
			</div>
			<div v-else class="yz_body">
				<p class="next_item">
					<span>验证码</span>
					<span><input type="text" style="width: 40%" placeholder="请输入您的验证码"></span>
					<span class="green_yz"><span>重发验证码</span></span>
				</p>
				<p class="next_item">
					<span>新密码</span>
					<span><input type="text" placeholder="请输入您的新密码"></span>
				</p>
				<p class="btn">
					<router-link tag="span" to="/enter/login" class="text">确认</router-link>
				</p>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				 options: [{
			          value: '选项1',
			          label: '中国大陆 +86'
			        }],
			        value: '',
			        show: true,
			}
		},
		methods: {
			handleNext(){
				this.show = false
			}
		},
		watch: {
			'$route'(to,from){
				if(to.name === 'forgotPassword'){
					this.show = true
				}
			}
		}
	}
</script>
<style scoped lang="scss">
	@import '../../../common/css/common.scss';
	.box{
		width: 100%;
		position: relative;
		.body{
			padding: rem(30px) 20%;
			.input{
				width: 88%;
				padding: rem(14px) 0 rem(14px) 7%;
				border: #aaa solid rem(1px);
				margin-top: rem(20px);
				input{
					width: 88%;
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
			.button{
				padding: rem(40px) 20%;
				// .text{
				// 	padding: rem(8px) 12%;
				// 	background-color: #43c122;
				// 	font-size: rem(14px);
				// 	color: #ffffff;
				// 	border-radius: rem(5px);
				// }
			}
			.yz_body{
				width: 85%;
				position: absolute;
				top: rem(70px);
				left: 0;
				.btn{
					width: 100%;
					padding: rem(40px) 10%;
				    text-align: center;
				    .text{
						padding: rem(10px) 17%;
						background-color: #43c122;
						font-size: rem(16px);
						color: #ffffff;
						border-radius: rem(5px);
					}
				}
			}
		}
		.next_item{
				position: relative;
				width: 100%;
				padding: rem(10px) 0 rem(10px) 4%;
				border: #aaa solid rem(1px);
				margin-top: rem(20px);
				margin-left: 5%;
				font-size: rem(14px);
				input{
					width: 48%;
					border: none;
					margin-left: 3%;
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
				.green_yz{
					background-color: #43c122;
					color: #ffffff;
					padding: 0 6%;
					display: flex;
					align-items: center;
					height: 100%;
					position: absolute;
					top: 0;
					right: 0;
				}

		}
	}
</style>