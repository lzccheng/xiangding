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
					<span>距市中心{{i.distance}}公里&nbsp;/&nbsp;&nbsp;{{i.city[0]}}、{{i.city[1]}}</span>
					<p>
						<span>最大房间：{{i.max_room}}m<sup>2</sup></span>
						<span class="max">&nbsp;&nbsp;&nbsp;&nbsp;最多容纳：{{i.max_people}}人</span>
					</p>
					<span>总房间：{{i.room_num}}间</span>
					<span class="_right">￥{{i.min_price}}起</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				hotel: [
					{
						name: '广州银河大酒店',
						imgUrl: 'http://file27.mafengwo.net/M00/F4/C0/wKgB6lPNl2KAUJaLAAMQOZWxpCA51.rbook_comment.w1024.jpeg',
						star:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522234915879&di=7df834c51f02fc1a257dc138835fb7f6&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F57%2F64%2F72d58PICyn8_1024.png',
						distance: '5.27',
						city:['珠江新城','五羊商城'],
						max_room:'430',
						max_people: '10',
						room_num:'800',
						min_price: '300'
					},
					{
						name: '广州银河大酒店',
						imgUrl: 'http://file26.mafengwo.net/M00/8A/3B/wKgB4lMg9kmAa_2PAAE1Wq00s_s28.rbook_comment.w1024.jpeg',
						star:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522234915879&di=7df834c51f02fc1a257dc138835fb7f6&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F57%2F64%2F72d58PICyn8_1024.png',
						distance: '5.27',
						city:['珠江新城','五羊商城'],
						max_room:'430',
						max_people: '10',
						room_num:'800',
						min_price: '300'
					},
					{
						name: '广州银河大酒店',
						imgUrl: 'http://pic.58pic.com/58pic/15/05/36/98b58PICetU_1024.jpg',
						star:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522234915879&di=7df834c51f02fc1a257dc138835fb7f6&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F57%2F64%2F72d58PICyn8_1024.png',
						distance: '5.27',
						city:['珠江新城','五羊商城'],
						max_room:'430',
						max_people: '10',
						room_num:'800',
						min_price: '300'
					}
				]
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