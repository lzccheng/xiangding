<template>
	<div class="box">
		<Header title="订单处理"/>
		<div class="nav">
			<div class="tab" ref="tab"> 
				<div v-for="(i,index) in arrItem" :key='index' @click="handleClick(index,$event)"> 
					<span>{{i}}</span>
				</div>
			</div>
			<div class="line" ref="_line"></div>
		</div>
		<div class="show">
			<div v-if="0==index_">
				<div class="body">
					<div v-for="(i,index) in 5" class="item" :key="index">
						<router-link tag="div" :to="{path: '/enter/hotelManage/orderStatus', query: {status: 0}}" class="img">
							<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523425433535&di=f7d324b2c95bd6f203fb8741290c02e3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D41481487a2773912d02b8d219161e374%2Ff3d3572c11dfa9ec3d58042d69d0f703918fc192.jpg" alt="">
						</router-link>
						<router-link tag="div" :to="{path: '/enter/hotelManage/orderStatus', query: {status: 0}}" class="text_box">
							<div class="left">
								<p class="name_1">商务大床房</p>
								<p class="name_2">客户名称: 胡勇蝶</p>
								<p class="name_2">入住: 3月28 &nbsp;&nbsp;退房: 3月29</p>
								<p class="name_2">办理时间: 2018-1-12</p>
							</div>
							<div class="right">
								<p class="numb"><i class="fas fa-chevron-right"></i></p>
							</div>
							 <div class="view">
								<span>拒绝</span>
								<span class="agreement">同意</span>
							</div>
						</router-link>
		            </div>

				</div>
			</div>
			<div v-if="1==index_">
				<div class="body">
					<div v-for="(i,index) in 5" class="item" :key="index">
						<router-link tag="div" :to="{path: '/enter/hotelManage/orderStatus', query: {status: 1}}" class="img">
							<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523425433535&di=f7d324b2c95bd6f203fb8741290c02e3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D41481487a2773912d02b8d219161e374%2Ff3d3572c11dfa9ec3d58042d69d0f703918fc192.jpg" alt="">
						</router-link>
						<router-link tag="div" :to="{path: '/enter/hotelManage/orderStatus', query: {status: 1}}" class="text_box">
							<div class="left">
								<p class="name_1">商务大床房</p>
								<p class="name_2">客户名称: 胡勇蝶</p>
								<p class="name_2">入住: 3月28 &nbsp;&nbsp;退房: 3月29</p>
								<p class="name_2">办理时间: 2018-1-12</p>
							</div>
							<div class="right">
								<p class="numb"><i class="fas fa-chevron-right"></i></p>
							</div>
						</router-link>
		            </div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		mounted(){
			this._lineLeft()
		},
		data(){
			return {
				arrItem: [
					'待处理',
					'已处理',
				],
				index_: 0
			}
		},
		methods: {
			handleClick(i,event){
				this.$refs._line.style.left = event.path[0].offsetLeft + 'px'
				this.$refs._line.style.width =  event.path[0].offsetWidth +'px'
				this.index_ = i
			},
			onHandleChange(i){
				this.index_ = i
			},
			_lineLeft(){
				this.index_ = this.$route.query.status || 0
				this.$refs._line.style.left = this.$refs.tab.children[this.index_].offsetLeft + 'px'
				this.$refs._line.style.width =  this.$refs.tab.children[this.index_].offsetWidth + 'px'
			}
		},
		watch: {
			'$route'(to,from){
				if(to.name === 'order'){
					this._lineLeft()
				}
			}
		}
	}
</script>
<style scoped lang="scss">
	@import '../../../common/css/common.scss';
	.box{
		width: 100%;
		.nav{
			position: relative;
			border-bottom: #aaa solid rem(1px);
			div{
				&.active{
				}
				&.tab{
					display: flex;
					justify-content: space-around;
					align-items: center;
					background-color: #fff;
					div{
						padding: rem(10px) 0;
					}
				}
				&.line{
					width: rem(20px);
					height: rem(5px);
					background-color: #43c122;
					position: absolute;
					left: 0;
					bottom: 0; 
					border-radius: rem(5px);
					transition: all 0.5s;
				}
			}
		}
		.show{
			.body{
				padding: rem(22px) 4%;
				div{
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
								width: 26%;
								height: rem(89px);
								padding-bottom: rem(25px);
								img{
									width: 100%;
									height: 100%;
									border-radius: rem(12px);
								}
							}
							&.text_box{
								width: 74%;
								.left{
									margin-right: 14%;
									.name_1{
										font-size: rem(14px);
										margin-bottom: rem(5px);
									}
									.name_2{
										color: #aaa;
										margin: rem(6px) 0;
										span{
											color: #e73c46;
										}	
									}
								}
								.right{
									position: absolute;
									right: rem(20px);
									bottom: rem(69px);
									p{
										&.numb{
											font-size: rem(16px);
											color: #aaa;
										}
									}
								}
								.view{
									padding-top: rem(10px);
									span{
										position: absolute;
										right: 29%;
										bottom: rem(5px);
										padding: rem(6px) 9%;
										border: #aaa solid rem(1px);
										border-radius: rem(5px);
										margin-right: 3%;
										&.agreement{
											position: absolute;
											right: 0;
											bottom: rem(5px);
											border: #8bc34a solid rem(1px);
											color: #8bc34a;
										}
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