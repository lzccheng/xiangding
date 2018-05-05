<template>
	<div class="box">
		<Header title="银行卡"/>
		<div class="content">
			<div class="card">
				<div class="item">
					<div class="img">
						<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523943975928&di=16eabcd4b8d37c1be98d350f32dbfc7b&imgtype=0&src=http%3A%2F%2Fdown.51rc.com%2Fimagefolder%2Fwutongguo%2FCP%2FLogo%2FL040000%2F32843_20160711172722.gif" alt="">
					</div>
					<div class="msg">
						<p class="title">中国建设银行</p>
						<p class="num">**** **** *** 1234</p>
					</div>
				</div>
			</div>
			<router-link tag="div" to="/my/bindCard" class="add">
				<span><i class="fas fa-plus"></i></span>
				<span>添加银行卡</span>
			</router-link>
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
		height: 100%;
		.content{
			padding: rem(15px) rem(12px);
			background-color: #2D3132;
			min-height: 88%;
			.card{
				.item{
					padding: rem(20px) rem(15px);
					background-color: #0A4898;
					border-radius: rem(10px);
					display: flex;
					.img{
						width: rem(50px);
						height: rem(50px);
						img{
							width: 100%;
							height: 100%;
							border-radius: 100%;
						}
					}
					.msg{
						color: #fff;
						padding-left: rem(15px);
						.title{
							font-size: rem(20px);
							font-weight: bold;
						}
						.num{
							margin-top: rem(10px);
							font-weight: bold;
						}
					}
				}
			}
			.add{
				padding: rem(20px) rem(10px) rem(10px);
				border-bottom: 1px #8C8C8C solid;
				font-size: rem(20px);
				color: #8C8C8C;
			}
		}
	}
</style>