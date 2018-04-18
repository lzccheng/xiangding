<template>
	<div class="box">
		<Header title="历史收益"/>
		<div class="nav">
			<span class="calender"><i class="far fa-calendar-plus"></i></span>
			<span class="time">2018-02-12</span>
		</div>
		<div class="body">
			<div class="header">
				<span class="green"></span>
				<span class="time">1月31日</span>
				<span class="money">
					<span class="m_1">¥</span>
					<span class="m_2">13281</span>
				</span>
			</div>
			<div v-for="(i,index) in 5" class="item" key=index>
					<div class="img">
						<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523425433535&di=f7d324b2c95bd6f203fb8741290c02e3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D41481487a2773912d02b8d219161e374%2Ff3d3572c11dfa9ec3d58042d69d0f703918fc192.jpg" alt="">
					</div>
					<div class="text_box">
						<div class="left">
							<p class="name_1">银河大酒店</p>
							<p class="name_2">商务大床房×1</p>
						</div>
						<div class="right">
							<p class="numb">+ 50.00</p>
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
	@import "../../../common/css/common.scss";
	.box{
		width: 100%;
		.nav{
			background-color: #e5e5e5;
			padding: rem(8px) rem(13px);
			.calender{
				font-size: rem(19px);
				margin-right: 7%;
			}
			.time{
				font-size: rem(14px);
			}
		}
		.body{
			padding: rem(13px) rem(14px);
			div{
				&.header{
					border-bottom: #e5e5e5 solid rem(1px);
					padding-bottom: rem(10px);
					.green{
						border: #43c122 solid rem(2px);
						height: rem(5px);
						margin-right: 4%;
					}
					.time{
						font-weight: bold;
						font-size: rem(14px);
					}
					.money_icon{
						font-size: rem(20px);
					}
					.money{
						float: right;
						color: #ff9800;
						font-size: rem(20px);
						.m_2{
							font-weight: bold;
						}
					}
				}
				
				&.item{
					position: relative;
					width: 100%;
					display: flex;
					justify-content: spase-around;
					align-items: center;
					padding: rem(15px) 0;
					border-bottom: #e5e5e5 solid rem(1px);
					div{
						padding-left: 1%;
						&.img{
							width: 20%;
							height: rem(70px);
							img{
								width: 100%;
								height: 100%;
								border-radius: rem(12px);
							}
						}
						&.text_box{
							width: 80%;
							.left{
								margin-right: 14%;
								.name_1{
									font-size: rem(17px);
									margin-bottom: rem(5px);
									font-weight: bold;
								}
								.name_2{
									font-size: rem(14px);
									color: #aaa;
									span{
										color: #e73c46;
									}	
								}
							}
							.right{
								position: absolute;
								right: 0;
								bottom: 0;
								padding-top: rem(15px);
								p{
									&.numb{
										font-size: rem(18px);
										color: #ff9800;
										line-height: rem(100px);
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