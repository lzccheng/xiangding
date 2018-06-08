<template>
	<div class="box">
		<Header title="反馈"/>
		<div class="body">
			<textarea class="body_div"   rows="15" placeholder="请输入您宝贵建议或意见...">
			</textarea>
			<router-link :to="Fn.getUrl({path: '/my'})" tag="div" class="post" ><p class="green_btn">提交</p></router-link>
			<p class="text1"><span>欢迎您为我们提供宝贵建议和意见,您留下的任何<br>信息都将用来改善我们的软件</span></p>
			<p class="text2"><span>注:  订单相关问题或紧急问题请拨打188-8888-8888 	  &nbsp;获得及时的帮助,意见反馈无法处理订单相关问题</span></p>
		</div>
		<!-- <div><span class="green_btn">提交</span></div> -->
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
		.body{
			padding: 0 5%;
			.body_div{
				width: 92%;
				border: #43c122 solid rem(2px);
				border-radius: rem(15px);
				margin-top: rem(22px);
				padding: rem(10px) rem(10px);
			}
			textarea{
				border: none;
				padding: rem(5px) 0;
				font-size: rem(15px);
			}
			.text1{
				font-size: rem(14px);
				text-align: center;
				padding: rem(32px) 3%;
			}
			.text2{
				font-size: rem(15px);
				padding-bottom: rem(30px);
				text-align: center;
			}
			.post{
				padding: rem(10px) 5%;
			}
		}
	}
</style>