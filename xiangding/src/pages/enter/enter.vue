<template>
	<div class="box">
		<div class="hotelEnter">
			22234356546456
			<span></span>
			<span></span>
		</div>
		<div class="agentEnter">
			<span></span>
			<span></span>
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
	@impote '../../common/css/common';
	.box{
		width: 100%;
		height: 100%;
		background: #00FF00 url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522244039309&di=bcbc5d82fcefd9a3c05b0e8922e9cf53&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D9576f49c6f380cd7f213aaaec92dc741%2F902397dda144ad347c8a8cabdaa20cf431ad85e0.jpg') no-repeat fixed top;
		img{
			width: 100%;
			height: 100%;
			position: absolute;
			left: 0;
			top: 0;
		}
		.hotelEnter{
			width: 70%;
			height: rem(500px);
			background:teal;
		}
	}
</style>