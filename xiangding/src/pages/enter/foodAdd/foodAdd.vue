<template>
	<div class="box">
		<Header :title="title"/>
		<div class="body">
			<p>
				<span>套餐名称</span>
				<span><input type="text" placeholder="请输入套餐名称"></span>
			</p>
			<p>
				<span>套餐价格</span>
				<span><input type="text" placeholder="请输入套餐价格"></span>
			</p>
			<div class="photo_box">
				<div><span>套餐照片</span></div>
				<div><span><i class="fas fa-plus"></i></span></div>
			</div>
			<div class="botton">
				<p v-if="title === '添加套餐'">添加</p>
				<p v-else>修改</p>
			</div>

		</div>
	</div>
</template>
<script>
	export default {
		mounted(){
			if(this.$route.query.name){
				this.title = this.$route.query.name
			}
		},
		data(){
			return {
				title: ''
			}
		},

		methods: {

		},
		watch: {
			$route (to,from){
				if(to.name === 'foodAdd'){
					this.title = this.$route.query.name
				}
			}
		}
	}
</script>
<style scoped lang="scss">
	@import '../../../common/css/common.scss';
	.box{
		width: 100%;
		font-size: rem(15px);
		.body{
			p{
				padding: rem(13px) 5%;
				border-bottom: #aaa solid rem(1px);
				input{
					color: #aaa;
					border: none;
					margin-left: 15%;
					font-size: rem(15px);
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
			.photo_box{
				padding: rem(13px) 5%;
				border-bottom: #aaa solid rem(1px);
				div{
					&:last-child{
						padding: rem(40px) 0;
						font-size: rem(16px);
						span{
							margin-top: rem(12px);
							padding: rem(30px) 10%;
							border: #aaa solid rem(1px);
						}
					}
				}
			}
			.botton{
				padding: rem(20px) 5%;
				
				text-align: center;
				p{
					background-color: #43c122;
					color: #fff;
					border-radius: rem(5px);
				}
			}
		}
	}
</style>