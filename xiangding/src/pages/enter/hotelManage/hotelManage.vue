<template>
	<div class="box">
	<!-- <Header title="酒店管理"/> -->
		<div class="_box">
			<div class="_header">
				<span class="_left" @click='_handleClick'><i class="fas fa-arrow-left"></i></span>
				<span> 酒店管理 </span>
			</div>
		</div>
		<div class="header">
		    <div class="big">
		    	<div class="ball">
		    		<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523678917746&di=9d67e28303460dfdcd4a4e6734b629f1&imgtype=0&src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F120530%2F188024-1205300PQ373.jpg" alt="">
		    	</div>
		    	<div class="text">
		    		<p class="agant">银河大酒店</p>
		    		<p class="number"> 编码: 41567</p>
		    	</div>
		    	<router-link tag="div" :to="Fn.getUrl({path: '/enter/hotelMessage'})" class="i"><i class="fas fa-cog"></i></router-link>
		    </div>
	    </div>
	    <div class="line"></div>
	    <div class="hotelServe">
	    	<div class="earning">
				<p class="text"><span>房费收益</span></p>
				<div  class="money"><span>￥</span><span>{{msg.earning}}</span></div>
				<div class="earn">
					<div class="order">
						<p class="icon"><i class="far fa-file"></i></p>
						<p class="text">
							<span>本月房费收益</span><br>
							<span>{{msg.order_num}}</span>
						</p>
					</div>
					<div class="people">
						<p class="icon"><i class="far fa-user"></i></p>
						<p class="text">
							<span>累计金额</span><br>
							<span>{{msg.poeple_num}}</span>
						</p>
					</div>
				</div>
			</div>
	    </div>
	    <div class="line"></div>
	    <div class="item">
	    	<router-link :to="Fn.getUrl({path: '/my/roomEnter'})" tag="div" class="room_1 rooms">
	    		<p class="icon"><i class="fas fa-archive"></i></p>
	    		<p class="name">房态管理</p>
	    	</router-link>
	    	<router-link tag="div" :to="Fn.getUrl({path: '/enter/hotelManage/orderManage'})" class="room_2 rooms">
	    		<p class="icon"><i class="fas fa-th-list"></i></p>
	    		<p class="name">订单管理</p>
	    	</router-link>
	    </div>
	    <div class="item">
	    	<!-- <router-link tag="div" to="/enter/hotelManage/resetPassword" class="room_3 rooms">
	    		<p class="icon"><i class="fas fa-th-list"></i></p>
	    		<p class="name">账号密码</p>
	    	</router-link> -->
	    	<router-link tag="div" :to="Fn.getUrl({path: '/enter/hotelManage/incomeList'})" class="room_3 rooms">
	    		<p class="icon"><i class="fas fa-th-list"></i></p>
	    		<p class="name">收入明细</p>
	    	</router-link>
	    	<router-link tag="div" :to="Fn.getUrl({path: '/enter/hotelManage/foodManage'})" class="room_3 rooms">
	    		<p class="icon"><i class="fas fa-utensils"></i></p>
	    		<p class="name">餐饮管理</p>
	    	</router-link>
	    </div>
	    <div class="item">
	    	<router-link tag="div" :to="Fn.getUrl({path: '/enter/hotelManage/orderDeal'})" class="room_6 rooms">
	    		<p class="icon"><i class="fas fa-th-list"></i></p>
	    		<p class="name">订单处理</p>
	    	</router-link>
	    	<router-link tag="div" :to="Fn.getUrl({path: '/enter/hotelManage/onlineMessage'})" class="room_5 rooms">
	    		<p class="icon"><i class="fas fa-th-list"></i></p>
	    		<p>在线信息</p>
	    	</router-link>
	    </div>
	    
	</div>
</template>
<script>
	export default {
		data(){
			return {
				msg: {
					imgUrl: 'http://imgtu.5011.net/uploads/content/20170428/1436171493371991.jpg',
					id: '147258369',
					earning:'88,888.00',
					order_num: '1369',
					poeple_num: '569',
					income: {
						firstAgent: '2644',
						secondAgent: '9637',
						thirdAgent: '6788'
					}

				}
			}
		},
		methods: {
			_handleClick(){
				this.$router.push('/enter')
			}
		}
	}
</script>
<style scoped lang="scss">
	@import '../../../common/css/common.scss';
	.box{
		width: 100%;
		._box{
			width: 100%;
			height: rem(46px);
			._header{
				width: 100%;
				position: fixed;
				top: 0;
				left: 0;
				z-index: 999;
				text-align: center;
				padding: rem(12px) 0;
				font-size: rem(18px);
				background-color: #fff;
				border-bottom: 1px solid #aaa;
				._left{
					position: absolute;
					top: rem(12px);
					left: rem(10px);
					padding: 0 rem(5px);
					z-index: 999;
				}
			}
		}
		.header{
        	height: rem(125px);
            background-color: #43c122;
            .big{
            	padding: rem(25px) rem(15px);
				display: flex;            	
                .ball{
                	width: rem(75px);
                	height: rem(75px);
                	display: inline-block;
                	img{
                		width: 100%;
						height: 100%;
						border-radius: 50%;
                	}
                }
                .text{
                	width: 67%;
                	height: rem(62px);
                	margin-left: rem(12px);
                	margin-top: rem(6px);
                	.agant{
                		font-size: rem(17px);
                		color: #ffffff;
                		margin-top: rem(3px);
                	}
                	.number{
                		font-size: rem(13px);
                		color: #ffffff;
                		margin-top: rem(8px);
                		padding-left: rem(2px);
                	}
                }
                .i{
                	font-size: rem(25px);
                	color: #ffffff;
                	height: rem(25px);
                }
            }
        }
        .line{
        	border: #e5e5e5 solid rem(6px);
        }
        .hotelServe{
			background-color: #fff;
			padding-bottom: rem(17px);
			.title{
				position: relative;
				padding: rem(10px) rem(20px) rem(20px);
				span{
					&.icon_money{
						background-color: #43c122;
						color: #ffffff;
						padding: rem(1px) rem(6px);
						border-radius: 50%;
						font-size: rem(14px);
					}
					&.content{
						font-size: rem(14px);
					}
					&.deposit{
						position: absolute;
						top: 0;
						right: 0;
						background-color: #43c122;
						letter-spacing: 2px;
						border-radius: rem(28px) 0 0 rem(28px);
						color: #fff;
						padding: rem(8px) rem(22px);
						margin-top: rem(8px);
					}
				}
			}
			.money{
				color: #ff9800;
				font-size: rem(35px);
				text-align: center;
				span{
					&:first-child{
						font-size: rem(20px);
					}
				}
			}
			.earning{
				background-color: #fff;
				text-align: center;
				.text{
					padding-top: rem(15px);
					font-size: rem(14px);
				}
				.money{
					color: #ff9800;
					font-size: rem(35px);
					padding-top: rem(10px);
					span{
						&:first-child{
							font-size: rem(20px);
						}
					}
				}
				.earn{
					padding-top: rem(10px);
					display: flex;
					justify-content: space-around;
					.icon{
							display: inline-block;
							border-radius: 100%;
							font-size: rem(25px);
							color: #fff;
						}
					p{
						display: inline-block;
					}
					.text{
						text-align: left;
						position: relative;
						left: rem(2px);
						top: rem(3px);
						span{
							&:first-child{
								color: #aaa;
							}
						}
					}
					.order{
						.icon{
							padding: rem(5px) rem(10px);
							background-color: #ff9800;
						}
					}
					.people{
						.icon{
							padding: rem(5px) rem(7px);
							background-color: #ff4081;
						}
					}
				}
			}
		}
		.item{
			display: flex;
			justify-content: space-around;
			// flex-direction: row;
			padding: rem(13px) rem(18px);
			color: #ffffff;
			font-size: rem(16px);
			font-weight: bold;
			text-align: center;
			.rooms{
				padding: rem(24px) 13%;
				border-radius: rem(6px);
			}
			.icon{
				font-size: rem(33px);
				margin-bottom: rem(5px);
			}
			.name{
				width: 100%;
			}
			.room_1{
				background-color: #e51c23;
				
			}
			.room_2{
				background-color: #43c122;
			}
			.room_3{
				background-color: #ff9800;
			}
			
			.room_5{
				background-color: #00c2ff;
			}
			.room_6{
				background-color: #43c122;

			}
		}
	}
</style>