<template>
	<div class="box">
		<Header title="订单列表"/>

		<div>
			<div class="nav">
				<div class="tab" ref="tab"> 
					<div v-for="(i,index) in arrItem" :key='index' @click="handleClick(index,$event)"> 
						<span>{{i}}</span>
					</div>
				</div>
				<div class="line" ref="_line"></div>

				<!-- <div><span>待付款</span></div>
				<div><span>待使用</span></div>
				<div><span>全部订单</span></div> -->
			</div>
			
			<div class="show">
				<div v-if="0==index_">
					<div class="body">
						<div class="item">
							<span class="time">预定日期: 03-20</span>
							<div class="content_box" v-for="(i,index) in 2" key="index">
								<div class="content">
									<p>
										<span class="title">银河大酒店</span>
										<span class="title_t">(豪华酒店 |四星级)</span>
										<span class="cross"><i class="far fa-times-circle"></i></span>
									</p>
									<p>
										<span class="title_hide">1间. 特惠商务房</span>
									</p>
									<p>
										<span class="title_hide">客户名称: 胡勇蝶 </span>
										<span class="no">
											<span class="money_color">¥</span>
											<span class="money_size">264</span>
										</span>
										
									</p>
									<p>
										<span class="title_hide">支付剩余时间: 22分44秒 </span>
										<span class="no_pay">未付款</span>
									</p>
								</div>
								<div class="content_2">
								    <div class="plane">
									    <i class="fas fa-location-arrow"></i>
									    <span class="here">到这里</span>
								    </div>
									
									<div class="button">
										<router-link tag="span" :to="{path: '/my/order/orderPay',query: {isPay: false}}" class="pay">付款</router-link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div v-if="1==index_">
					<div class="body">
						<div class="item">
							<span class="time">预定日期: 03-20</span>
							<div class="content_box" v-for="(i,index) in 2" :key="index">
								<router-link tag="div" :to="{path: '/my/order/orderPay',query:{isPay: true}}" class="content">
									<p>
										<span class="title">银河大酒店</span>
										<span class="title_t">(豪华酒店 |四星级)</span>
										<span class="cross"><i class="far fa-times-circle"></i></span>
									</p>
									<p>
										<span class="title_hide">1间. 特惠商务房</span>
									</p>
									<p>
										<span class="title_hide">客户名称: 胡勇蝶 </span>
										<span class="no">
											<span class="money_color">¥</span>
											<span class="money_size">264</span>
										</span>
									</p>
								</router-link>
								<div class="content_2">
								    <div class="plane">
									    <i class="fas fa-location-arrow"></i>
									    <span class="here">到这里</span>
								    </div>
									
									<div class="button">
										<span class="pay">再次预定</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div v-if="2==index_">
					<div class="body">
						<div class="item">
							<span class="time">预定日期: 03-20</span>
							<div class="content_box" v-for="(i,index) in 2" key="index">
								<div class="content">
									<p>
										<span class="title">银河大酒店</span>
										<span class="title_t">(豪华酒店 |四星级)</span>
										<span class="cross"><i class="far fa-times-circle"></i></span>
									</p>
									<p>
										<span class="title_hide">1间. 特惠商务房</span>
									</p>
									<p>
										<span class="title_hide">客户名称: 胡勇蝶 </span>
										<span class="no">
											<span class="money_color">¥</span>
											<span class="money_size">264</span>
										</span>
									</p>
									<p>
										<span class="title_hide"> </span>
										<span class="enter">入住中</span>
									</p>
								</div>
								<div class="content_2">
								    <div class="plane">
									    <i class="fas fa-location-arrow"></i>
									    <span class="here">到这里</span>
								    </div>
									<div class="button">
										<span class="pay">再次预定</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		mounted(){
			console.log(this.$refs)
			this.$refs._line.style.left = this.$refs.tab.firstChild.offsetLeft + 'px'
			this.$refs._line.style.width =  this.$refs.tab.firstChild.offsetWidth + 'px'
		},
		data(){
			return {
				arrItem: [
					'待付款',
					'待使用',
					'全部订单'
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
			}
		}
	}
</script>
<style scoped lang="scss">
	@import "../../../common/css/common.scss";
	.box{
		width: 100%;
		min-height: 90%;
		background-color: #e5e5e5;
		.nav{
			position: relative;
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
				.item{
					.time{
						background-color: #43c122;
						color: #ffffff;
						padding: rem(4px) 2%;
						border-radius: rem(20px);
					}
					.content_box{
						background-color: #ffffff;
						padding: rem(15px) 4%;
						margin: rem(20px) 0;
						border-radius: rem(8px);
						.content{
							margin-bottom: 3%;
							p{
								position: relative;
								padding: rem(3px) 0;
							}
							.title{
								font-size: rem(14px);
								font-weight: bold;
							}
							.title_t{
								font-size: rem(14px);
							}
							.cross{
								font-size: rem(18px);
								color: #e2e2e5;
								float:right;
							}
							.title_hide{
								color: #bbbbbb;
							}
							.money_size{
								font-size: rem(18px);
								color: #ff9800;
							}
							.money_color{
								color: #ff9800;
							}
							.no{
								float: right;
							}
							.no_pay{
								position: absolute;
								right: 0;
								top: 0;

							}
							.enter{
								display: inline-block;
								margin-top: rem(5px);
								margin-left: 88%;
							}
						}
						.content_2{
							div{
								display: inline-block;
								&.plane{
									padding: rem(5px) rem(8px);
									color: #43c122;
									.here{
										color: #43c122;
									}
								}
								&.button{
									float: right;
									padding-top: rem(8px);
									span{
										padding: rem(8px) rem(25px);
										border-radius: rem(15px);
										&.pay{
											background-color: #43c122;
											color: #fff;
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