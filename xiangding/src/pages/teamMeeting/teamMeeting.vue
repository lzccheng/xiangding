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
						<li>
						
						</li>
						<li></li>
						<li></li>
					</ul>
				</div>
				<div v-if="1 == index">
					
				</div>
				<div v-if="2 == index">
					
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
						}
					}
					.border_bottom{
						border-bottom: 1px solid #aaa;
						padding-bottom: rem(10px);
					}
				}
			}
		}
	}
</style>