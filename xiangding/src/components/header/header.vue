<template>
	<div class="_box">
		<div class="_header" ref="_header">
			<span class="_left" @click='_handleClick'>
				<div class="img">
					<img src="../../../static/img/leftIcon/left.png" alt="">
				</div>
				
			</span>
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
		height: rem(27px);
		._header{
			width: 100%;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 999;
			text-align: center;
			padding: rem(12px) 0;
			font-size: rem(18px);
			background-color: #fff;
			border-bottom: 1px solid #aaa;
			._left{
				position: absolute;
				left: rem(10px);
				top: rem(12px);
				padding: 0 rem(5px);
				z-index: 999;
				.img{
					width: rem(24px);
					height: rem(24px);
					img{
						width: 100%;
						height: 100%;
					}
				}
			}
		}
	}
</style>