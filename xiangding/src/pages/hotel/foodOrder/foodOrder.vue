<template>
	<div class="box">
		<Header title="餐饮团购"/>
		<div class="body">
				<div  v-for="(i,index) in dataArr" :key="index" class="item">
					<div class="img"><img :src="i.urlImg" alt=""></div>
					<div class="text">
						<p>{{i.title}}</p>
						<p>¥ {{i.price}}</p>
					</div>
					<div class="icon">
					    <span class="icon_s" @click="handleDelete(index)"><i class="fas fa-minus-circle"></i></span>
						<span class="number_s">{{i.num}}</span>
						<span class="icon_s" @click="handleAdd(index)"><i class="fas fa-plus-circle"></i></span>
					</div>
				</div>
				<div class="botton">
					<p>确定</p>
				</div>
			
			
		
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
						urlImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523425433535&di=f7d324b2c95bd6f203fb8741290c02e3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D41481487a2773912d02b8d219161e374%2Ff3d3572c11dfa9ec3d58042d69d0f703918fc192.jpg',
						checkList: [],
						num: 0
					},
					{
						title: 'B套餐',
						price: '299',
						urlImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523425433535&di=f7d324b2c95bd6f203fb8741290c02e3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D41481487a2773912d02b8d219161e374%2Ff3d3572c11dfa9ec3d58042d69d0f703918fc192.jpg',
						checkList: [],
						num: 0
					},
					{
						title: 'C套餐',
						price: '399',
						urlImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523425433535&di=f7d324b2c95bd6f203fb8741290c02e3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D41481487a2773912d02b8d219161e374%2Ff3d3572c11dfa9ec3d58042d69d0f703918fc192.jpg',
						checkList: [],
						num: 0
					},
					{
						title: 'D套餐',
						price: '499',
						urlImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523425433535&di=f7d324b2c95bd6f203fb8741290c02e3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D41481487a2773912d02b8d219161e374%2Ff3d3572c11dfa9ec3d58042d69d0f703918fc192.jpg',
						checkList: [],
						num: 0 
					},
				],
				// num: 0
			}
		},
		methods: {
			handleDelete(i){
				this.dataArr[i].num --
				if(this.dataArr[i].num<=0){this.dataArr[i].num=0}
			},
			handleAdd(i){
				this.dataArr[i].num++
			}
		}
	}
</script>
<style scoped lang="scss">
	@import '../../../common/css/common';
	.box{
		width: 100%;
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
						padding-left: 35%;
						.icon_s{
							font-size: rem(16px);
							color: #43c122;
						}
						.number_s{
							font-size: rem(14px);
							padding: 0 rem(7px);
						}
					}
				}
				&.botton{
					text-align: center;
					padding: rem(25px) 5%;
					
					p{
						background-color: #43c122;
						color: #ffffff;
						padding: rem(10px) 0;
						border-radius: rem(5px);
					}
				}
			}
		}
	}
</style>