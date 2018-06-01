<template>
	<div class="box">
		<Header title="提现申请"/>
		<div class="img">
			<img src="../../../../static/img/applicationCash/applicationCash.png" alt="">
		</div>
		<p class="title">提现申请已提交</p>
		<p class="text"><span>提现至</span><span>微信钱包</span></p>
		<p class="text"><span>提现金额</span><span>¥999</span></p>
		<p class="text"><span>手续费</span><span>¥999</span></p>
		<div class="know_box">
			<p class="green_btn">完成</p>
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
			width: rem(106px);
			height: rem(100px);
			margin: 0 auto;
			padding-top: rem(25px);
			img{
				width: 100%;
				height: 100%;
			}
		}
		p{
			font-size: rem(14px);
			text-align: center;
			&.title{
				font-size: rem(16px);
				padding: rem(10px) 0;
			}
			&.text{
				margin: rem(10px) 20%;
				display: flex;
				justify-content: space-between;
				span{
					&:first-child{
						color: #aaa;
						// display: inline-block;
						// float: left;
					}
					&:last-child{
						display: inline-block;
					}
				}
			}
		}
		.know_box{
			padding: rem(20px) 5%;
		}
	}
</style>