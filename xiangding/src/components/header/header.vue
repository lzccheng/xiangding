<template>
	<div class="_box">
		<div class="_header">
			<span class="_left" @click='_handleClick'><i class="fas fa-arrow-left"></i></span>
			<span> {{title}} </span>
		</div>
	</div>
</template>
<script>
	export default {
		props: ['title'],
		data(){
			return {

			}
		},
		methods: {
			_handleClick(){
				this.$router.go(-1)

			}
		}
	}
</script>
<style scoped lang="scss">
	@import '../../common/css/common';
	._box{
		width: 100%;
		._header{
			text-align: center;
			padding: rem(12px);
			font-size: rem(18px);
			background-color: #fff;
			._left{
				float: left;
				padding: 0 rem(5px);
				z-index: 999;
			}
		}
	}
</style>