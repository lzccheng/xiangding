<template>
	<div class="box">
		<Header title="修改密码"/>
		<div class="body">
			<div class="box_p">
			  <span><input type="text" placeholder="请输入旧密码"></span>
			</div>
			<div class="box_p">
			  <span><input type="password" class="pass" @blur="handleCheckPassword" placeholder="请输入新密码"></span>
			  <span class="i" @click="handlePassword">
			    <span ref="eye_one">
					<i class="fas fa-eye"></i>
				</span>
				<span ref="eye_two">
					<i  class="fas fa-eye-slash"></i>
				</span>
			  </span>
			</div>
			<div class="post">
			    <router-link tag="p" :to="Fn.getUrl({path: '/enter/login'})" class="green_btn">提交</router-link>
			</div>
			<router-link tag="div" :to="Fn.getUrl({path: '/enter/forgotPassword'})" class="forget">
			    <span class="text">忘记密码</span>
			    <span class="icon"><i class="fas fa-chevron-right"></i></span>
			</router-link>
		</div>
	</div>
</template>
<script>
	export default {
		mounted(){
			this.$refs.eye_two.style.display = 'none'
			this.$refs.eye_one.style.display = 'inline-block'
		},
		data(){
			return {

			}
		},
		methods: {
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
			          message: '新密码不能为空',
			          type: 'warning'
			        });
				}
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
		.body{
			padding: rem(30px) 3%;
			div{
				color: #aaa;
				font-size: rem(14px);
				border-bottom: #e5e5e5 solid rem(1px);
				margin: rem(10px) 0;
				text-align: center;
				// display: flex;
				// justify-conent: center;
				&.box_p{
					// padding: 0 26%;
					position: relative;
					span{
						// display: inline-block;
						// width: 40%;
						input{
							width: 70%;
							border: none;
							background-color: rgba(250, 250, 250,0);
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
						position: absolute;
						top: 0;
						right: 0;
					}
				}
				
			}
			.post{
				padding: rem(19px) 10%;
				padding-bottom: rem(30px);
				border: none;
				
			}
			.forget{
				color: #000;
				padding: rem(10px) 0;
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