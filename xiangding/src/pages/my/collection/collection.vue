<template>
	<div class="box">
		<Header :title="head"/>
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
				background-color: #e5e5e5;
				border-radius: rem(7px);
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