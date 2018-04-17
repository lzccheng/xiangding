<template>
	<div class="box">
		<Header title="收支明细" />
		<div class="content">			<div class="show">
				<div class="items">
					<div class="time"><span>本月</span></div>
					<div class="item" v-for="(i,index) in 10" :key="index">
						<div class="img">
							<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523878260974&di=ca92c6ce48dc5aa41060706559be1430&imgtype=0&src=http%3A%2F%2Fimgcdn.guoku.com%2Fimages%2Ff4a652a540ac399d50d81825b6e7d644.jpeg" alt="">
						</div>
						<div class="msg">
							<p class="title"><span>银河大酒店</span></p>
							<p><span>1间，特惠商务房</span></p>
							<p><span>客户名称：胡勇碟</span></p>
							<p><span>01月27日-01月28日</span></p>
						</div>
						<div class="price">
							<p class="btn"><span>已完成</span></p>
							<p class="price_">
								<span>￥</span>
								<span class="num">299</span>
							</p>
						</div>
					</div>       
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
	@import '../../../common/css/common.scss';
	.box{
		width: 100%;
		.content{
			position: relative;
			.tabs{
				display: flex;
				justify-content: space-around;
				.tab{
					padding: rem(15px) rem(20px);
					color: #43C122;
				}
			}
			.line{
				width: rem(60px);
				height: rem(5px);
				position: absolute;
				left: 0;
				top: rem(42px);
				border-radius: rem(3px);
				background-color: #43C122;
				transition: all 0.5s;
			}
			.show{
				padding: rem(8px) rem(10px);
				.items{
					.time{
						padding: rem(10px);
						margin-bottom: rem(10px);
						border-bottom: 1px solid #aaa;
					}
					.item{
						padding: rem(5px) rem(10px);
						display: flex;
						.img{
							width: 30%;
							height: rem(100px);
							img{
								width: 100%;
								height: 100%;
								border-radius: rem(5px);
							}
						}
						.msg{
							padding-left: rem(8px);
							.title{
								font-size: rem(18px);
								font-weight: bold;
								color: #333;
							}
							p{
								padding: rem(2px) 0;
							}
						}
						.price{
							margin-left: 10%;
							.btn{
								margin-top: rem(18px);
								span{
									display: inline-block;
									padding: rem(5px) rem(5px) rem(8px);
									color: #FF9800;
									border: 1px solid #FF9800;
									border-radius: rem(5px);
								}
							}
							.price_{
								color: #60C122;
								font-weight: bold;
								margin-top: rem(10px);
								.num{
									font-size: rem(18px);
								}
							}
						}
					}
				}
			}
		}
	}
</style>