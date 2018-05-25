<template>
	<div class="box">
		<div class="body">
			<!-- <div class="img">
			   <div class="p"><router-link tag="p" :to="Fn.getUrl({path: '/'})">回到首页</router-link></div>
			</div> -->
			<div class="img">
				<img src="../../../static/img/page404/404.png" alt="">
			</div>
			<div class="text">
				<p style="font-size: 18px;">哇！你访问的页面不小心丢失了！</p>
			</div>
			<div class="p"><router-link tag="p" :to="Fn.getUrl({path: '/'})">回到首页</router-link></div>
			<div class="img_1">
				<img src="../../../static/img/page404/logo.png" alt="">
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				imgUrl: ''
			}
		},
		methods: {

		}
	}
</script>
<style scoped lang="scss">
   @import '../../common/css/common';
	.box{
		width: 100%;
		height: 100%;
		.body{
			width: 100%;
			height: 100%;
			background-color: #E3FDF5;
			text-align: center;
			position: relative;
			.img{
				width: rem(350px);
				height: rem(200px);
				margin: 0 auto;
				padding-top: rem(100px);
				img{
					width: 100%;
				    height: 100%;
				}
			}
			.text{
				p{
					font-weight: bold;
				}
			}
			.p{
				z-index: 999;
				color: #fff;
				padding: rem(40px) 34%;
				p{
					text-align: center;
					background-color: #9CC957;
					padding: rem(3px) 0;
					padding-bottom: rem(4px);
					font-size: rem(20px);
				}
			}
			.img_1{
				margin: 0 auto;
				width: rem(100px);
				height: rem(100px);
				position: fixed;
				right: 0;
				left: 0;
				bottom: 0;
				img{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>