<template>
	<div class="box">
		<Header title="反馈"/>
		<div class="body">
			<div class="body_div">
				<textarea name="" id="" cols="43" rows="15" placeholder="请输入您宝贵建议或意见..."></textarea>
			</div>
			<div class="post"><span>提交</span></div>
			<p class="text1"><span>欢迎您为我们提供宝贵建议和意见,您留下的任<br>何信息都将用来改善我们的软件.</span></p>
			<p class="text2"><span>注:  订单相关问题或紧急问题请拨打188-8888-8888 	  &nbsp;获得及时的帮助,意见反馈无法处理订单相关问题</span></p>
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
		.header{
			background-color: #43c122;
			padding: rem(10px) 5%;
			.header_ask{
				font-size: rem(18px);
				color: #fff;
				text-align: center;
				.icon{
					float: left;
					font-weight: bold;
					font-size: rem(20px);
				}
			}
		}
		.body{
			padding: 0 5%;
			.body_div{
				display: flex;
				align-items: center;
				border: #43c122 solid rem(2px);
				border-radius: rem(15px);
				margin-top: rem(22px);
				padding: rem(10px) rem(10px);
			}
			textarea{
				border: none;
				padding: rem(5px) 0;
			}
			.text1{
				font-size: rem(14px);
				text-align: center;
				padding: rem(32px) 8%;
			}
			.text2{
				font-size: rem(15px);
				padding-bottom: rem(30px);
				text-align: center;
			}
			.post{
				padding: rem(10px) 5%;
				background-color: #43c122;
				text-align: center;
				color: #ffffff;
				margin: rem(17px) auto 0;
				border-radius: rem(5px);
				span{
					display: inline-block;
					font-size: rem(14px);
			     	
				}

			}
		}
	}
</style>