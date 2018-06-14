<template>
	<div class="box">
	<!-- <Header title="酒店管理"/> -->
		<div class="_box">
			<!-- <div class="_header">
				<span class="_left" @click='_handleClick'>
					<div class="img">
						<img src="../../../../static/img/leftIcon/left.png" alt="">
					</div>
				</span>
				<span> 酒店管理 </span>
			</div> -->
			<div class="_header">
				<span class="_left" @click='_handleClick'>
					<div class="img">
						<img src="../../../../static/img/leftIcon/left.png" alt="">
					</div>
					
				</span>
				<span>酒店管理</span>
			</div>
		</div>
		<div class="header">
		    <div class="big">
		    	<div class="ball">
		    		<img :src="thumb" alt="">
		    	</div>
		    	<div class="text">
		    		<p class="agant">{{name}}</p>
		    		<!-- <p class="number"> 编码: 41567</p> -->
		    	</div>
		    	<!-- <router-link tag="div" :to="Fn.getUrl({path: '/enter/hotelMessage'})" class="i"><i class="fas fa-cog"></i></router-link>
 -->		    </div>
	    </div>
	    <div class="line"></div>
	    <div class="hotelServe">
	    	<div class="earning">
				<p class="text"><span>房费收益</span></p>
				<div  class="money"><span>￥</span><span>{{msg.earning}}</span></div>
				<div class="button">
					<router-link tag="span" :to="Fn.getUrl({path: '/my/weChatCash',query:{hotel: 1}})">提现</router-link>
				</div>
				<!-- <div class="earn">
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
				</div> -->
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
	    	<!--<router-link tag="div" :to="Fn.getUrl({path: '/enter/hotelManage/orderDeal'})" class="room_6 rooms">-->
	    		<!--<p class="icon"><i class="fas fa-th-list"></i></p>-->
	    		<!--<p class="name">订单处理</p>-->
	    	<!--</router-link>-->
	    	<!-- <router-link tag="div" :to="Fn.getUrl({path: '/enter/hotelManage/onlineMessage'})" class="room_5 rooms">
	    		<p class="icon"><i class="fas fa-th-list"></i></p>
	    		<p>在线信息</p>
	    	</router-link> -->
	    	<!-- <router-link tag="div" :to="Fn.getUrl({path: '/enter/hotelManage/commentManage'})" class="room_2 rooms">
	    		<p class="icon"><i class="fas fa-th-list"></i></p>
	    		<p class="name">评论管理</p>
	    	</router-link> -->
	    </div>
	</div>
</template>
<script>
	import axios from 'axios'
	export default {
		mounted(){
			let that = this
			// this.Http.get({baseUrl:'web/index.php?c=site&a=entry&m=yun_shop&do=1210',route:'plugin.store-cashier.store.admin.goods.index&action="1"',params:{action:true},}).then(res=>{
			// 	console.log(res)
			// })
			// this.Http.get({baseUrl:'web/index.php?c=site&a=entry&m=yun_shop&do=7619&action=true',route:'plugin.store-cashier.store.admin.order.index'}).then(res=>{
			// 	console.log(res)
			// })
      // this.Http.post({route:'plugin.store-cashier.store.admin.cashier-order.get-statistics',baseUrl:'/web/index.php?c=site&a=entry&m=yun_shop&do=6578&'}).then(res=>{
      //   console.log('统计',res)
      //   that.msg.earning = res.data.data.no_settlement
      // })

		      that.Http.post({route:'finance.earning.earning-count&action=true&',data:{action: 1,uid: window.localStorage.getItem('userInfo')}}).then(res=>{
					if(res.data.result === 1){
						log(window.localStorage.getItem('userInfo'),res)
						that.msg.earning = res.data.data.hotel
					}
				})

		      this.Http.post({route:'plugin.store-cashier.store.admin.goods.index',baseUrl:'/web/index.php?c=site&a=entry&m=yun_shop&do=6578&action=true&'}).then(res=>{
		        console.log('首页',res)
		        that.name = res.data.main[0].store_name
		      })

     		 this.Http.get({route: 'plugin.store-cashier.store.admin.store-set.index',baseUrl: '/web/index.php?c=site&a=entry&m=yun_shop&do=9120&action=1&'}).then(res=>{
				log(999,res)
				if(res.data.result === 1){
					that.name = res.data.msg.store_name
					that.thumb = res.data.msg.thumb
				}
			})
		},
		data(){
			return {
				name: '',
				thumb:'',
				msg: {
					imgUrl: 'http://imgtu.5011.net/uploads/content/20170428/1436171493371991.jpg',
					id: '147258369',
					thumb: '',
					earning:'0',
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
					left: rem(10px);
					top: rem(12px);
					padding: 0 rem(5px);
					z-index: 999;
					.img{
						width: rem(24px);
						height: rem(24px);
						img{
							width: 100%;
							height: 100%;
						}
					}
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
				position: relative;
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
				.button{
					position: absolute;
					right: 0;
					top: rem(10px);
					span{
						display: inline-block;
						height: rem(30px);
						width: rem(80px);
						text-align: center;
						line-height: rem(30px);
						border-radius: rem(15px) 0 0 rem(15px);
						background-color: #43c122;
						color: #fff;
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
