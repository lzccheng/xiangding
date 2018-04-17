<template>
	<div class="box">
		<Header title="在线信息"/>
		<div class="content" v-for="(i,index_) in 2" :key='index_'>
			<div class="item">
				<span class="i"><i class="far fa-clock"></i></span>
				<span class="week">本周信息</span>
			</div>
			<div v-for="(i,index) in 3" :key='index'  class="item">
				<div class="img"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523425433535&di=f7d324b2c95bd6f203fb8741290c02e3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D41481487a2773912d02b8d219161e374%2Ff3d3572c11dfa9ec3d58042d69d0f703918fc192.jpg" alt=""></div>
				<router-link tag="div" to="/my/custom"  class="text_box">
					<div class="left">
						<p class="name_1">最强王者</p>
						<p class="name_2">我希望可以减价每间20元</p>
					</div>
					<div class="right">
						<p class="numb">09:16</p>
					</div>
				</router-link>
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
		background-color: #e5e5e5;
		.content{
			margin-bottom: rem(10px);
			background-color: #ffffff;
			font-size: rem(15px);
			div{
				&.item{
					position: relative;
					width: 100%;
					display: flex;
					justify-content: spase-around;
					align-items: center;
					padding: rem(15px) 0;
					border-bottom: #e5e5e5 solid rem(1px);
					.i{
						color: #43c122;
						margin: 0 2%;
					}
					div{
						padding-left: 3%;
						&.img{
							width: 15%;
							height: rem(50px);
							img{
								width: 100%;
								height: 100%;
								border-radius: rem(12px);
							}
						}
						&.text_box{
							width: 76%;
							.left{
								.name_1{
									font-size: rem(14px);
									margin-bottom: rem(5px);
								}
								.name_2{
									color: #aaa;
									font-size: rem(13px);
								}
							}
							.right{
								position: absolute;
								right: rem(20px);
								bottom: rem(40px);
								p{
									&.numb{
										font-size: rem(10px);
										color: #aaa;
									}
								}
							}
						}
					}
				}
			}
		}
	}
</style>