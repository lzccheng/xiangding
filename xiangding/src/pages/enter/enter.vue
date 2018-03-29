<template>
	<div class="box">
		<div class="hotelEnter">
			<p><span class="icon"><i class="fas fa-user-plus"></i></span></p>
			<span class="text">酒店入驻</span>
		</div>
		<div class="agentEnter">
			<p><span class="icon"><i class="far fa-handshake"></i></span></p>
			<span class="text">代理服务商入驻</span>
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
	@import '../../common/css/common';
	.box{
		width: 100%;
		height: 90%;
		background: #00FF00 url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522244039309&di=bcbc5d82fcefd9a3c05b0e8922e9cf53&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D9576f49c6f380cd7f213aaaec92dc741%2F902397dda144ad347c8a8cabdaa20cf431ad85e0.jpg') no-repeat fixed top;
		div{
			width: 80%;
			height: rem(200px);
			border-radius: rem(15px);
			margin: rem(50px) auto;
			text-align: center;
		}
		.hotelEnter{
			background: linear-gradient(to bottom, #155880 , #94bf80);
		}
		
		.agentEnter{
			background: linear-gradient(to bottom, #94bf80 , #155880);
		}
		.text{
			color: #fff;
			font-size: rem(16px);
		}
		p{
			padding-top: rem(30px);
			.icon{
				color: #fff;
				font-size: rem(90px);
				margin-top: rem(20px);
			}
		}
	}
</style>