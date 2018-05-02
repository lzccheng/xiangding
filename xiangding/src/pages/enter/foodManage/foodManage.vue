<template>
	<div class="box">
		<Header title="餐饮管理"/>
		<span class="manage">管理</span>
		<div class="body">
			<div  v-for="(i,index) in dataArr" :key="index" class="item">
				<div class="img"><img :src="i.urlImg" alt=""></div>
				<div class="text">
					<p>{{i.title}}</p>
					<p>¥ {{i.price}}</p>
				</div>
				<div class="icon"><span><i class="fas fa-chevron-right"></i></span></div>
			</div>
		</div>
		<div class="add_box">
			<p class="botton">
				<span><i class="fas fa-plus-circle"></i></span>
				<span>添加</span>
			</p>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				dataArr:[
					{
						title: 'A套餐',
						price: '956',
						urlImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523425433535&di=f7d324b2c95bd6f203fb8741290c02e3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D41481487a2773912d02b8d219161e374%2Ff3d3572c11dfa9ec3d58042d69d0f703918fc192.jpg'
					},
					{
						title: 'B套餐',
						price: '299',
						urlImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523425433535&di=f7d324b2c95bd6f203fb8741290c02e3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D41481487a2773912d02b8d219161e374%2Ff3d3572c11dfa9ec3d58042d69d0f703918fc192.jpg'
					},
					{
						title: 'C套餐',
						price: '399',
						urlImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523425433535&di=f7d324b2c95bd6f203fb8741290c02e3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D41481487a2773912d02b8d219161e374%2Ff3d3572c11dfa9ec3d58042d69d0f703918fc192.jpg'
					},
					{
						title: 'D套餐',
						price: '499',
						urlImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523425433535&di=f7d324b2c95bd6f203fb8741290c02e3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D41481487a2773912d02b8d219161e374%2Ff3d3572c11dfa9ec3d58042d69d0f703918fc192.jpg'
					},
				]
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
		position: relative;

		.manage{
			position: absolute;
			top: rem(17px);
			right: 5%;
			z-index: 999;
			font-size: rem(16px);
		}
		.body{
			// padding-bottom: rem(100px);
			div{
				&.item{
					border-bottom: #aaa solid rem(1px);
					padding: rem(15px) 4%;
					display: flex;
					align-items: center;
					.img{
						width: 20%;
						max-width: rem(150px);
						height: rem(68px);
						img{
							width: 100%;
							height: 100%;
							border-radius: rem(5px);
						}
					}
					.text{
						padding: 0 6%;
						p{
							&:first-child{
								font-size: rem(16px);
							}
							&:last-child{
								font-size: rem(14px);
								color: #FF9852;
								margin-top: rem(6px);
							}
						}
					}
					.icon{
						padding-left: 50%;
						font-size: rem(17px);
					}
				}
			}
		}
		.add_box{
			padding: rem(100px) 0;
			.botton{
				// background-color: #43c122;
				font-size: rem(14px);
				text-align: center;
				display: fixed;
				bottom: 0;
				left: 0;
				z-index: 999;
				background-color: #43c122;
				padding: rem(10px) 0;
				span{
					color: #ffffff;
					
				}
			}
		}
		
	}
</style>