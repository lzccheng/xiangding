<template>
	<div class="box">
		<div class="header">
			<div class="local">
				<span>广州</span>
				<span><i class="fas fa-map-marker-alt"></i></span>
			</div>
			<div class="input">
				<input type="text" placeholder="酒店搜索/关键字">
				<span><i class="fas fa-search"></i></span>
			</div>
		</div>
		<div class="select">
			<ul>
				<li>
					<span>不限位置</span>
					<span><i class="fas fa-angle-down"></i></span>
				</li>
				<li>
					<span>推荐排序</span>
					<span><i class="fas fa-angle-down"></i></span>
				</li>
				<li>
					<span>筛选</span>
					<span><i class="fas fa-angle-down"></i></span>
				</li>
			</ul>
		</div>
		<div class="hotel">
			<div class="hotelItem" v-for='(i,index) in hotel' :key='index'>
				<div class="img">
					<img :src="i.imgUrl">
				</div>
				<div class="msg">
					<span class="min_title">{{i.name}}</span>
					<img :src="i.star">
					<img :src="i.star">
					<img :src="i.star">
					<img :src="i.star"><br>
					<span>距市中心{{i.distance}}公里&nbsp;/&nbsp;&nbsp;{{i.city[0]}}、{{i.city[1]}}</span><br>
					<p>
						<span>最大房间：{{i.max_room_erea}}m<sup>2</sup></span>
						<span class="max">&nbsp;&nbsp;&nbsp;&nbsp;最多容纳：{{i.max_people}}人</span>
					</p>
					<span>总房间：{{i.room_total}}间</span>
					<span class="_right"><span class="team">团队房</span>￥{{i.min_price}}起</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		mounted:function(){
			this.$axios({url:'/api/hotel'}).then((res)=>{
				this.hotel = res.data
			})
		},
		data(){
			return {
				hotel: []
			}
		}
	}
</script>
<style scoped lang='scss'>
	@import '../../common/css/common';
	.box{
		background-color: #fff;
		width: 100%;
		.header{
			padding: rem(10px) rem(15px);
			text-align: center;
			div{
				display: inline-block;
			}
			.local{
				span{
					font-size: rem(14px);
					margin-right: rem(8px);
				}
			}
			.input{
				background-color: #9c9c9c;
				border-radius: rem(10px);
				input{
					display: inline-block;
					width: 100%;
					height: rem(30px);
					border: none;
					background-color: #9c9c9c;
					width:80%;				
				}
				i{

				}
			}
		}
		.select{
			border-bottom: 1px solid #aaa;
			padding-bottom: rem(8px);
			ul{
				display: flex;
				flex-dection: row;
				justify-content: space-around;
			}
		}
		.hotel{
			padding: rem(10px) rem(10px); 
			.hotelItem{
				padding-bottom: rem(15px);
				div{
					display: inline-block;
					vertical-align: top;
				}
				.img{
					width: 30%;
					img{
						width: 100%;
						height: rem(100px);
						border-radius: rem(5px);
					}
				}
				.msg{
					position: relative;
					padding-left: rem(5px);
					width: 65%;
					.min_title{
						font-size: rem(16px);
						font-weight: bold;
					}
					img{
						width: rem(13px);
						height: rem(13px);
						vertical-align: center;
					}
					span{
						display: inline-block;
						padding: rem(3px) 0;
					}
					._right{
						float: right;
						font-weight:bold;
						color: #ff9800;
						.team{
							color: #fff;
							font-size: rem(14px);
							background-color: #ff9800;
							padding: 0 rem(3px);
						}
					}
					p{
						.max{
							position: absolute;
							bottom: rem(22px);
							right: 0;
						}
					}
				}
			}
		}
	}
	
</style>