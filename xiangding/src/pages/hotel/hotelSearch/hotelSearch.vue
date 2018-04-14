<template>
	<div class="box">
		<Header title="酒店列表"/>
		<div class="_content">
			<div class="_search">
				<div class="_text">
					<div>
						<span >广州</span>
					</div>
						<span>
							<span class="color">3.29  </span>
						</span>
						<span></span>
					<div>
					</div>
					<div>s</div>
				</div>
			</div>
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
	@import '../../../common/css/common';
	.box{
		width: 100%;
		._content{
			._search{
				background-color: #8BC34A;
				padding:rem(5px) rem(10px);
				._text{
					background-color: #fff;
					border-radius: rem(5px);
					padding: 0 rem(13px);
					>div{
						display: inline-block;
					}
				}
			}
		}
	}
</style>