<template>
	<div class="box">
		<Header title="评论"/>
		<div class="top">
			<div>
				<p>4.5</p>
				<p>总体评价</p>
			</div>
			<div>
			   <span><i class="fas fa-star"></i></span>
			   <span><i class="fas fa-star"></i></span>
			   <span><i class="fas fa-star"></i></span>
			   <span><i class="fas fa-star"></i></span>
			   <span><i class="fas fa-star"></i></span>
			</div>
		</div>
		<div class="content">
			<div class="hotel">
				<p>小猪佩奇</p>
				<p class="star">
					<span><i class="fas fa-star"></i></span>
					<span><i class="fas fa-star"></i></span>
					<span><i class="fas fa-star"></i></span>
					<span><i class="fas fa-star"></i></span>
					<span><i class="fas fa-star"></i></span>
				</p>
			</div>
			<p class="text">环境优美，地理位置好，交通方便</p>
			<p class="time">2018-06-04  12: 30</p>
			<p class="service">小猪佩奇客服：你说的我都懂</p>
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
	@import '../../../common/css/common';
	.box{
		width: 100%;
		padding-top: rem(20px);
		.top{
			display: flex;
			align-items:center;
			border-bottom: #EDEDED solid rem(1px);
			padding: rem(10px) 0;
			text-align: center;
			div{
				padding: 0 5%;
				&:first-child{
					border-right: #EDEDED solid rem(1px);
				}
				&:last-child{
					span{
						font-size: rem(18px);
					    color: #FF9800;
					    margin-right: rem(10px);
					}
				}
				p{
					&:first-child{
						color: #FF9800;
						font-size: rem(30px);
					}
				}
			}
		}
		.content{
			padding: rem(27px) 5%;
			padding-top: rem(10px);
			border-bottom: #EDEDED solid rem(1px);
			.hotel{
				display: flex;
				justify-content: space-between;
				p{
					padding-bottom: rem(10px);
					&.star{
						color: #FF9800;
					}
				}
			}
			.time{
				color: #aaa;
				float: right;
			}
			.service{
				margin-top: rem(30px);
				margin-left: 5%;
			}
		}
		
	}
</style>