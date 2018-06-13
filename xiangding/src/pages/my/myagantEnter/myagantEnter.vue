<template>
	<div class="box">
	<Header title="代理服务商" :router="router"/>
		<div class="header">
		    <div class="big">
		    	<div class="ball">
		    		<img :src="$store.state.userInfo.avatar">
		    	</div>
		    	<div class="text">
		    		<p class="agant">{{name}}</p>
		    		<!-- <p class="number"> 区域编号: 11221411</p> -->
		    	</div>
		    </div>
	    </div>
	    <router-link :to="Fn.getUrl({path: '/my/cashDetail'})" class="nav" tag='span'>
	    	<div class="green"></div>
	    	<span class="hotel">我服务的酒店</span>
	    	<span class="num">{{store_num?store_num: '0'}}</span>
	    </router-link>
	    <div class="line"></div>
	    <div class="hotelServe">
			<p class="title">
				<span class="icon_money"><i class="fas fa-dollar-sign"></i></span>
				<span class="content">收益</span>
				<router-link tag="span" :to="Fn.getUrl({path: '/my/weChatCash',query: {agant: 1}})" class="deposit">提现</router-link>
			</p>
			<div class="earning">
				<p class="text"><span>服务费收益</span></p>
				<p class="money"><span>￥</span><span>{{msg.earning}}</span></p>
				<!-- <div class="earn">
					<div class="order">
						<p class="icon"><i class="far fa-file"></i></p>
						<p class="text">
							<span>本月收益订单数</span><br>
							<span>{{msg.order_num}}</span>
						</p>
					</div>
					<div class="people">
						<p class="icon"><i class="far fa-user"></i></p>
						<p class="text">
							<span>本月消费人数数</span><br>
							<span>{{msg.poeple_num}}</span>
						</p>
					</div>
				</div> -->
			</div>
		</div>
	    <!-- <div class="line"></div> -->
	    <!-- <div class="footer">
	    	<router-link :to="Fn.getUrl({path: '/my/myagantEnter/agantIncome'})" tag="div" class="item">
	    		<span class="detailt"><i class="fab fa-deviantart"></i></span>
	    		<span class="text">本月管理金收益明细</span>
	    		<span class="gt"><i class="fas fa-chevron-right"></i></span>
	    	</router-link>
	    	<router-link :to="Fn.getUrl({path: '/my/myagantEnter/agantHistory'})" tag="div" class="item">
	    		<span class="return"><i class="fas fa-undo"></i></span>
	    		<span class="text">历史管理金收益明细</span>
	    		<span class="gt"><i class="fas fa-chevron-right"></i></span>
	    	</router-link>
	    	
	    </div> -->
	</div>
</template>
<script>
	export default {
		mounted(){
			this.getData()
		},
		data(){
			return {
				router: '/enter',
				store_num: '0',
				name: '',
				msg: {
					imgUrl: 'http://imgtu.5011.net/uploads/content/20170428/1436171493371991.jpg',
					id: '147258369',
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
			getData(){
				let that = this
				setTimeout(function(){
					that.Http.post({route:'finance.earning.earning-count&action=true&',data:{uid: window.localStorage.getItem('userInfo')}}).then(res=>{
						if(res.data.result === 1){
							that.msg.earning = res.data.data.services  
							that.name = res.data.data.services_user_name  
							// that.agantEarning = res.data.data.services
						}
					})
					that.Http.post({route:'finance.earning.earning-count&action=true&',data:{uid: window.localStorage.getItem('userInfo')}}).then(res=>{
	                    that.store_num = res.data.data.store_num
	                })
				},50)
				
			}
		},
		watch: {
			$route(to,form){
				if(to.name === 'myagantEnter'){
					if(form.name === 'my'){
						this.router = '/my'
					}
				}
			}
		}
	}
</script>
<style scoped lang="scss">
	@import "../../../common/css/common.scss";
	.box{
		width: 100%;
		padding-top: rem(20px);
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
                	img{
                		border-radius: 50%;
                		width: 100%;
                		height: 100%;
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
            }
        }
        .nav{
        	display: flex;
        	align-items: center;
        	padding: rem(12px) rem(13px);
        	background-color: #ffffff;
        	.green{
        		width: 0;
        		height: rem(17px);
        		border: #43c14c solid 2px;
        		margin-right: rem(8px);
        		}
        	.hotel{
        		font-size: rem(14px);
        		margin-right: 59%;
        	}
        	.num{
        		background-color: #43c122;
        		font-size: rem(14px);
        		color: #ffffff;
        		padding: rem(2px) rem(13px);
        		border-radius: rem(10px);
        	}
        }
        .line{
            border: #e5e5e5 solid rem(8px);
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
		.earning{
			background-color: #fff;
			text-align: center;
			.text{
				padding-top: rem(20px);
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
		}
        .hotelServe{
			// background-color: #fff;
			padding: rem(10px) 0;
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
		}
		.footer{
			padding: 0 3%;
			.item{
				border-top: #e5e5e5 solid rem(1px);
				padding: rem(13px) 0;
				.detailt{
					background-color: #43c122;
					padding: 0 rem(4px);
					font-size: rem(14px);
					color: #ffffff;
					border-radius: rem(5px);
				}
				.text{
					font-size: rem(14px);
				}
				.gt{
					font-size: rem(14px);
					color: #e5e5e5;
					float: right;
				}
				.return{
					color: #43c122;
					font-size: rem(14px);
				}
		    }
		}
	}
</style>