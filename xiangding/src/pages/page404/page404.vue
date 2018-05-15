<template>
	<div class="box">
		<div class="body">
			<div class="img">
			   <div class="p"><router-link tag="p" to="/">回到首页</router-link></div>
			</div>

		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				imgUrl: '../../../static/img/page404/page404.png'
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
			.img{
				width: 100%;
				height: 100%;
				background: url('../../../static/img/page404/page404.png');
				background-size: cover;
				.p{
					color: #fff;
					padding: 0 34%;
					padding-top: rem(438px);
					p{
						text-align: center;
						background-color: #9CC957;
						padding: rem(3px) 0;
						font-size: rem(20px);
					}
				}
			}
		}
	}
</style>