<template>
	<div class="box">
		<Header :title="head"/>
		<router-link tag="div" to="/hotelDetail" class="item">
			<div class="img">
				<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523425433535&di=f7d324b2c95bd6f203fb8741290c02e3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D41481487a2773912d02b8d219161e374%2Ff3d3572c11dfa9ec3d58042d69d0f703918fc192.jpg" alt="">
			</div>
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
		</router-link>
		<router-link tag="div" to="/hotelDetail" class="item">
			<div class="img">
				<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523425433535&di=f7d324b2c95bd6f203fb8741290c02e3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D41481487a2773912d02b8d219161e374%2Ff3d3572c11dfa9ec3d58042d69d0f703918fc192.jpg" alt="">
			</div>
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
		</router-link>
		<router-link tag="div" to="/hotelDetail" class="item">
			<div class="img">
				<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523425433535&di=f7d324b2c95bd6f203fb8741290c02e3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D41481487a2773912d02b8d219161e374%2Ff3d3572c11dfa9ec3d58042d69d0f703918fc192.jpg" alt="">
			</div>
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
		</router-link>
		<router-link tag="div" to="/hotelDetail" class="item">
			<div class="img">
				<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523425433535&di=f7d324b2c95bd6f203fb8741290c02e3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D41481487a2773912d02b8d219161e374%2Ff3d3572c11dfa9ec3d58042d69d0f703918fc192.jpg" alt="">
			</div>
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
		</router-link>
		<p class="none">没有更多{{name}}</p>
	</div>
</template>
<script>
	export default {
		mounted(){
			if(this.$route.query.name){
				this.title = this.$route.query.name
			}
		},
		data(){
			return {
				title:''
			}
		},
		methods: {

		},
		computed: {
			name(){
				return this.title === '收藏酒店'?'收藏':'浏览记录'
			},
			head(){
				return this.title === '收藏酒店'?'收藏记录':'浏览记录'
			}
		},
		watch: {
			$route (to,from){
				if(to.name === 'collection'){
					this.title = this.$route.query.name
				}
			}
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
			padding: rem(18px) 6%;
			.icon{
				display: inline-block;
				font-size: rem(23px);
			}
			.collection{
				font-size: rem(16px);
				padding-left: 3%;
			}
		}
		.item{
			padding-top: rem(25px);
			padding-left: 5%;
			.img{
				display:inline-block;
				width: 22%;
				height: rem(80px);
					img{
						width: 100%;
						height: 100%;
						border-radius: rem(12px);
					}
		        }
			.content{
				display: inline-block;
				padding-left: 3%;
				width: 70%;
				.name{
					font-size: rem(15px);
					font-weight: bold;
					margin-bottom: rem(10px);
					}
				.star{
						font-size: rem(15px);
						color: #f5cf1e;
						padding: rem(7px) 1%;
				}
				.money_1{
					font-size: rem(15px);
					color: #ff9800;
				}
				.money_2{
					font-size: rem(20px);
					color: #ff9800;
					padding-left: 1%;
				}
				.time{
					float: right;
					font-size: rem(14px);
				}
			}
		}
		.none{
			color: #bbbbca;
			text-align: center;
			padding-top: rem(40px);
		}
		
	}
</style>