<template>
	<div class="box">
		<Header title="推广码"/>
		<div class="img">
			<img src="../../../../static/img/qrcode/qrcode.png" alt="">
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
	@import "../../../common/css/common.scss";
	.box{
		width: 100%;
		padding-top: rem(20px);
		.img{
			width: 100%;
			height: 100%;
			img{
				width: 100%;
				height: 100%;
				background-size: cover; 
		        background-attachment:fixed;
			}
		}
	}
</style>