<template>
	<div class="box">
		<div class="top_box">
			<div class="header">
				<span @click="onHandleBack" class="icon"><i class="fas fa-arrow-left"></i></span>
				<span class="title">{{agant}}级代理</span>
			</div>
			<div class="search">
				<div class="search_">
					<span class="icon"><i class="fas fa-search"></i></span>
					<span><input type="text" placeholder="请输入您要搜索的名称"></span>
				</div>
			</div>
		</div>
		<div class="agant">
			<ul>
				<li v-for="(i,index) in 6" :key=index>
					<div class="img">
						<img src="http://g.hiphotos.baidu.com/zhidao/pic/item/b8014a90f603738da763cbb9b51bb051f819ec04.jpg" alt="">
					</div>
					<div class="msg">
						<div>小猪佩奇</div>
						<div>粉丝数量：<span class="text">256455</span></div>
						<div>收入：<span class="text">4887</span></div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	let agant = {
		'1': '一',
		'2': '二',
		'3': '三',
	}
	export default {
		mounted(){
			this.agant = agant[this.$route.query.agant]
		},
		data(){
			return {
				agant: ''
			}
		},
		methods: {
			onHandleBack(){
				this.$router.go(-1)
			}
		},
		watch: {
			'$route':function(to,from){
				if(to.name == 'agantDetailt'){
					this.agant = agant[this.$route.query.agant]
				}
			}
		}

	}
</script>
<style scoped lang="scss">
	@import '../../../common/css/common';
	.box{
		width: 100%;
		padding-top: rem(90px);
		padding-bottom: rem(500px);
		.top_box{
			width: 100%;
			position: fixed;
			background-color: #ffffff;
			top: 0;
			left: 0;
			z-index: 999;
			.header{
				span{
					display: inline-block;
					padding: rem(15px) rem(15px);
					font-size: rem(18px);
					&.title{
						display: inline-block;
						text-align: center;
						width: 70%;
					}
					&.icon{
						float: left;
						
					}
				}
			}
			.search{
				background-color: #8BC34A;
				padding: rem(5px) rem(10px);
				.search_{
					background-color: #fff;
					padding: rem(3px) rem(15px);
					border-radius: rem(5px);
					span{
						&.icon{
							padding:rem(2px) rem(5px);
						}
						input{
							border: none;
							width: 80%;
							height: rem(18px);
							padding: rem(3px) rem(8px);
							&:placeholder{
								color: #aaa;
							}
						}
					}
				}
			}
		}
		.agant{
			padding: rem(5px) rem(10px);
			ul{
				li{
					display: flex;
					flex-direction: row;
					align-items: center;
					border-bottom: 1px solid #ccc;
					.img{
						padding: rem(10px) rem(10px);
						img{
							width: rem(50px);
							height: rem(50px);
							border: none;
							border-radius: 100%;
						}
					}
					.msg{
						padding-left: rem(10px);
						.text{
							color: #aaa;
						}
					}
				}
			}
		}
	}
</style>