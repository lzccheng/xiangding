<template>
	<div class="box">
		<div class="img">
			<img src="http://image.qmango.com/hotelimg/dl1210/150330/0.jpeg">
		</div>
		<div class="tab">
			<div class="tab_header">
				<div class="header" ref="tab">
					<div v-for='(i,index) in arrItem' :key=index @click='onHandleClick(index,$event)'>{{i}}</div>
				</div>
				<div class="line" ref="line"></div>
			</div>
			<div class="show">
				<div class="tip">
					<p><span class="border">下单优惠</span><span class="text">现在下单即享红包返现</span></p>
				</div>
				<div v-if="0 == index" class="body">
					<ul>
						<li>
							<span class="border_bottom">
								<span class="erea">广州市</span>
								<span class="icon"><i class="fas fa-angle-right"></i></span>
							</span>
							
							<span class="right">
								<span class="map"><i class="fas fa-map-marker-alt"></i></span>
								<span>附近</span>
							</span>
						</li>
						<li class="border_bottom">
							<span class="date">3.29</span>
							<span class="day">今天</span>
							<span class="line">--</span>
							<span class="date">3.30</span>
							<span class="day">明天</span>
							<span class="icon_"><i class="fas fa-chevron-right"></i></span>
						</li>
						<li class="border_bottom">
							<span class="text">会议厅间数</span>
							<span class="icon_"><i class="fas fa-chevron-right"></i></span>
						</li>
						<li class="border_bottom">
							<span class="text">价格&nbsp;/&nbsp;星级</span>
							<span class="icon_"><i class="fas fa-chevron-right"></i></span>
						</li>
					</ul>
					<p class="btn"><button>开始搜索</button></p>
					<div class="bottom">
						<div>
							<span><i class="fas fa-history"></i></span>
							<span>浏览记录</span>
						</div>
						<div>
							<span><i class="far fa-star"></i></span>
							<span>收藏酒店</span>
						</div>
					</div>
				</div>
				<div v-if="1 == index" class="body">
					<ul>
						<li>
							<span class="border_bottom">
								<span class="erea">广州市</span>
								<span class="icon"><i class="fas fa-angle-right"></i></span>
							</span>
							
							<span class="right">
								<span class="map"><i class="fas fa-map-marker-alt"></i></span>
								<span>附近</span>
							</span>
						</li>
						<li class="border_bottom">
							<span class="date">3.29</span>
							<span class="day">今天</span>
							<span class="line">--</span>
							<span class="date">3.30</span>
							<span class="day">明天</span>
							<span class="icon_"><i class="fas fa-chevron-right"></i></span>
						</li>
						<li class="border_bottom">
							<span class="text">团房间数</span>
							<span class="icon_"><i class="fas fa-chevron-right"></i></span>
						</li>
						<li class="border_bottom">
							<span class="text">价格&nbsp;/&nbsp;星级</span>
							<span class="icon_"><i class="fas fa-chevron-right"></i></span>
						</li>
					</ul>
					<p class="btn"><button>开始搜索</button></p>
					<div class="bottom">
						<div>
							<span><i class="fas fa-history"></i></span>
							<span>浏览记录</span>
						</div>
						<div>
							<span><i class="far fa-star"></i></span>
							<span>收藏酒店</span>
						</div>
					</div>
				</div>
				<div v-if="2 == index" class="body">
					<ul>
						<li>
							<span class="border_bottom">
								<span class="erea">广州市</span>
								<span class="icon"><i class="fas fa-angle-right"></i></span>
							</span>
							
							<span class="right">
								<span class="map"><i class="fas fa-map-marker-alt"></i></span>
								<span>附近</span>
							</span>
						</li>
						<li class="border_bottom">
							<span class="date">3.29</span>
							<span class="day">今天</span>
							<span class="line">--</span>
							<span class="date">3.30</span>
							<span class="day">明天</span>
							<span class="icon_"><i class="fas fa-chevron-right"></i></span>
						</li>
						<li class="border_bottom">
							<span class="text">钟点房间数</span>
							<span class="icon_"><i class="fas fa-chevron-right"></i></span>
						</li>
						<li class="border_bottom">
							<span class="text">价格&nbsp;/&nbsp;星级</span>
							<span class="icon_"><i class="fas fa-chevron-right"></i></span>
						</li>
					</ul>
					<p class="btn"><button>开始搜索</button></p>
					<div class="bottom">
						<div>
							<span><i class="fas fa-history"></i></span>
							<span>浏览记录</span>
						</div>
						<div>
							<span><i class="far fa-star"></i></span>
							<span>收藏酒店</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import common from '../../common/js/common'
	export default {
		mounted: function(){
			this.$refs.line.style.marginLeft = this.$refs.tab.firstChild.offsetLeft + 'px'
		},
		data(){
			return {
				arrItem: [
					'会议室',
					'团房',
					'钟点房'
				],
				index: 0
			}
		},
		methods: {
			onHandleClick(i,event){
				event.path[2].lastElementChild.style.marginLeft = event.path[0].offsetLeft + 'px'
				event.path[2].lastElementChild.style.width = common.getStyle(event.path[0],'width')
				this.index = i
			}
		}
	}
</script>
<style scoped lang="scss">
	@import '../../common/css/common.scss';
	.box{
		background-color: #ededed;
		width: 100%;
		.img{
			img{
				width: 100%;
				height: 200px;
			}
		}
		.tab{
			background-color: #fff;
			.tab_header{
				
				position: relative;
				.header{
					display: flex;
					justify-content: space-around;
					align-items:center;
					border-bottom: 1px solid #aaa;
					padding: rem(13px) 0 rem(15px);
				}
				.line{
					position: absolute;
					left: 0;
					bottom: 0; 
					width: rem(30px);
					height: rem(5px);
					background-color: #8BC34A;
					border-radius: rem(5px);
					transition: all 0.5s;
				}
			}
			.show{
				.tip{
					background-color: #EDEDED;
					padding: rem(10px) rem(20px);
					p{
						.border{
							display: inline-block;
							padding: rem(1px) rem(2px);
							border: 1px solid #FF9800;
							color: #FF9800;
						}
						.text{
							margin-left: rem(15px);
							color: #FF9800;
						}
					}
				}
				.body{
					padding: rem(10px) rem(10px);
					ul{
						li{
							padding: rem(10px) 0;
							.erea{
								font-size: rem(18px);
							}
							.icon{
								margin-left: 55%;
								color: #aaa;
								padding: 0 rem(10px);
							}
							.right{
								margin-left: 5%;
								.map{
									color: #FF9800;
								}
							}
							.date{
								font-size: rem(20px);
								font-weight: bold;
							}
							.line{
								display: inline-block;
								padding: 0 rem(10px);
							}
							.icon_{
								float: right;
								display: inline-block;
								padding: 0 rem(10px);
								color:　#aaa;
							}
							.text{
								color: #aaa;
							}
						}
					}
					.border_bottom{
						border-bottom: 1px solid #aaa;
						padding-bottom: rem(10px);
					}
					.btn{
						margin-top: rem(15px);
						button{
							width: 100%;
							border: none;
							background-color: #8BC34A;
							padding: rem(13px) 0;
							color: #fff;
							border-radius: rem(5px);
						}
					}
					.bottom{
						display: flex;
						justify-content: space-around;
						align-items: center;
						margin-top: rem(15px);
						div{
							padding: rem(15px) 0;
						}
					}
				}
			}
		}
	}
</style>