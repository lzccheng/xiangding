<template>
	<div class="box">
		<Header title="账号"/>
		<div class="body">
			<div>
			  <span ><input type="text" placeholder="请输入旧密码"></span>
			</div>
			<div>
			  <span><input type="text" placeholder="请输入新密码"></span>
			  <span class="i"><i class="fas fa-eye"></i></span>
			</div>
			<div class="post">
			    <router-link tag="p" to="/enter/login" class="button">提交</router-link>
			</div>
			<div class="forget">
			    <span class="text">忘记密码</span>
			    <span class="icon"><i class="fas fa-chevron-right"></i></span>
			</div>
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
		.body{
			padding: rem(30px) rem(10px);
			div{
				color: #aaa;
				font-size: rem(14px);
				border-bottom: #e5e5e5 solid rem(1px);
				margin: rem(10px) 0;
				text-align: right;
				display: flex;
				span{
					margin-left: 20%;
					input{
							width: 70%;
							border: none;
							background-color: rgba(250, 250, 250,0);
							color: #aaa;
							margin-bottom: rem(13px);
							text-align: center;
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
				.i{
					font-size: rem(17px);
				}
			}
			.post{
				padding: rem(19px) 10%;
				border: none;
				color: #ffffff;
				.button{
					padding: rem(6px) 9%;
					background-color: #43c122;
					border-radius: rem(5px);
					margin: 0 auto;
				}
			}
			.forget{
				color: #000;
				.text{
					margin: rem(10px) 3%;
				}
				.icon{
					margin: rem(10px) 0;
					color: #aaa;
					margin-left: 70%;
				}
			}
		}
	}
</style>