<template>
	<div class="box">
		<Header title="账号"/>
		<div class="body">
			<p class="text">请输入旧密码</p>
			<p class="text">请输入新密码</p>
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
	@import '../../../common/css/common.scss';
	.box{
		width: 100%;
		.body{
			padding: rem(30px) 0;
			p{
				color: #aaa;
				font-size: rem(14px);
				.text{
					border-bottom: #aaa solid rem(1px);
				}
			}
		}
	}
</style>