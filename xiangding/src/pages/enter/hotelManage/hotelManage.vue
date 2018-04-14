<template>
	<div class="box">
		<div class="_box">
			<div class="_header">
				<span class="_left" @click='_handleClick'><i class="fas fa-arrow-left"></i></span>
				<span> 酒店管理 </span>
			</div>
		</div>
		<div class="header">
		    <div class="big">
		    	<div class="ball"></div>
		    	<div class="text">
		    		<p class="agant">银河大酒店</p>
		    		<p class="number"> 编码: 41567</p>
		    	</div>
		    	<span class="i"><i class="fas fa-cog"></i></span>
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
	    	<router-link to="/my/roomEnter" tag="div" class="room_1 rooms">
	    		<p class="icon"><i class="fas fa-archive"></i></p>
	    		<p>房态管理</p>
	    	</router-link>
	    	<router-link tag="div" to="/enter/hotelManage/orderManage" class="room_2 rooms">
	    		<p class="icon"><i class="fas fa-th-list"></i></p>
	    		<p>订单管理</p>
	    	</router-link>
	    </div>
	    <div class="item">
	    	<router-link tag="div" to="/enter/hotelManage/resetPassword" class="room_3 rooms">
	    		<p class="icon"><i class="fas fa-th-list"></i></p>
	    		<p>账号密码</p>
	    	</router-link>
	    	<div class="room_4 rooms">
	    		<p class="icon"><i class="fas fa-th-list"></i></p>
	    		<p>收入明细</p>
	    	</div>
	    </div>
	    <div class="item">
	    	<div class="room_5 rooms">
	    		<p class="icon"><i class="fas fa-th-list"></i></p>
	    		<p>在线信息</p>
	    	</div>
	    	<div class="room_6 rooms">
	    		<p class="icon"><i class="fas fa-th-list"></i></p>
	    		<p>订单处理</p>
	    	</div>
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
			height: rem(50px);
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
					float: left;
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
                	background-color: #e5e5e5;
                	border-radius: 50%;
                	display: inline-block;
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
			padding: rem(13px) rem(18px);
			color: #ffffff;
			font-size: rem(16px);
			font-weight: bold;
			text-align: center;
			.rooms{
				padding: rem(24px) 14%;
				border-radius: rem(6px);
			}
			.icon{
					font-size: rem(33px);
					margin-bottom: rem(5px);
				}
			.room_1{
				background-color: #e51c23;
				margin-right: rem(14px);
				
			}
			.room_2{
				background-color: #8bc34a;
			}
			.room_3{
				background-color: #ff9800;
				margin-right: rem(14px);
			}
			.room_4{
				background-color: #ff9800;
			}
			.room_5{
				background-color: #00c2ff;
				margin-right: rem(14px);
			}
			.room_6{
				background-color: #8bc34a;
			}
		}
	}
</style>