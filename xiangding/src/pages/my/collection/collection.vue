<template>
	<div class="box">
		<div class="header">
			<div class="icon">
			   <i class="fas fa-arrow-left"></i>
			 </div>
			<span class="collection">收藏</span>
		</div>
		<div class="item">
			<div class="img"></div>
			<div class="content">
				<span class="name">广州银河大酒店</span>
				<div class="star">
					<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
				</div>
				<span class="money_1">¥</span>
				<span class="money_2">304</span>
				<span class="qi">起</span>
				<span class="time">2018-03-11</span>
			</div>
		</div>
		<div class="item">
			<div class="img"></div>
			<div class="content">
				<span class="name">广州银河大酒店</span>
				<div class="star">
					<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
				</div>
				<span class="money_1">¥</span>
				<span class="money_2">304</span>
				<span class="qi">起</span>
				<span class="time">2018-03-11</span>
			</div>
		</div>
		<div class="item">
			<div class="img"></div>
			<div class="content">
				<span class="name">广州银河大酒店</span>
				<div class="star">
					<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
				</div>
				<span class="money_1">¥</span>
				<span class="money_2">304</span>
				<span class="qi">起</span>
				<span class="time">2018-03-11</span>
			</div>
		</div>
		<div class="item">
			<div class="img"></div>
			<div class="content">
				<span class="name">广州银河大酒店</span>
				<div class="star">
					<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
				</div>
				<span class="money_1">¥</span>
				<span class="money_2">304</span>
				<span class="qi">起</span>
				<span class="time">2018-03-11</span>
			</div>
		</div>
		<p class="none">没有更多收藏</p>
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
		background-color: #fff;
		.header{
			border-bottom: #bbbbbb solid rem(1px);
			padding: rem(18px) rem(30px);
			.icon{
				display: inline-block;
				font-size: rem(23px);
			}
			.collection{
				font-size: rem(20px);
				padding-left: rem(20px);
			}
		}
		.item{
			padding-top: rem(25px);
			padding-left: rem(25px);
			.img{
				display:inline-block;
				width: 22%;
				height: rem(80px);
				background-color: #e5e5e5;
				border-radius: rem(7px);
		        }
			.content{
				display: inline-block;
				padding-left: rem(22px);
				.name{
					font-size: rem(18px);
					font-weight: bold;
					margin-bottom: rem(10px);
					}
				.star{
						font-size: rem(15px);
						color: #f5cf1e;
						padding: rem(7px) rem(3px);
				}
				.money_1{
					font-size: rem(15px);
					color: #ff9800;
				}
				.money_2{
					font-size: rem(25px);
					color: #ff9800;
					padding-left: rem(3px);
				}
				.qi{
					font-size: rem(16px);
					padding-left: rem(3px);
				}
				.time{
					font-size: rem(16px);
					padding-left: rem(80px);

				}
			}
		}
		.none{
			font-size: rem(17px);
			color: #bbbbca;
			text-align: center;
			padding-top: rem(40px);
		}
		
	}
</style>