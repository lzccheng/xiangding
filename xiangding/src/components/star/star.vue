<template>
	<div class="box">
		<div v-for='i in Number(len)' class="item">
			<img src="../../assets/star.jpg">
		</div>
	</div>
</template>
<script>
	export default {
		props:['len']
	}
</script>
<style scoped lang="scss">
	@import '../../common/css/common.scss';
	.box{
		display: inline;
		.item{
			display:inline-block;
			margin: 0 rem(1px);
			img{
				width: rem(13px);
				height: rem(13px);
				vertical-align: middle;
			}
		}
	}
</style>