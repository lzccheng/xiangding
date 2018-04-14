<template>
	<div class="box">
		<Header title="订单管理"/>
		<div class="nav">
			<div class="input">
				<span class="addr">广州</span>
				<span class="text"><i class="fas fa-search"></i><input type="text" placeholder="酒店/品牌"></span>
			</div>
			<div class="i"><i class="far fa-calendar-alt"></i></div>
		</div>
		<div class="choice">
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
						<div class="top">
							<div class="pay_y">
								<p class="numb">10</p>
								<p class="text">已付款</p>
							</div>
							<div class="pay_n">
								<p class="numb">10</p>
								<p class="text">未付款</p>
							</div>
						</div>
						<div v-for="(i,index) in 5" class="item" key=index>
							<div class="img">
								<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523425433535&di=f7d324b2c95bd6f203fb8741290c02e3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D41481487a2773912d02b8d219161e374%2Ff3d3572c11dfa9ec3d58042d69d0f703918fc192.jpg" alt="">
							</div>
							<div class="text_box">
								<div class="left">
									<p class="name_1">订单号: 12315412</p>
									<p class="name_2">客户名称: 胡勇蝶</p>
									<p class="name_2">入住: 3月28  退房: 3月29</p>
									<p class="name_2">办理时间: 2018-1-12</p>
								</div>
								<div class="right">
									<p class="numb"><i class="fas fa-chevron-right"></i></p>
								</div>
							</div>
			            </div>
					</div>
				</div>
				<div v-if="1==index_">
					<div class="body">
						<div class="top">
							<div class="pay_y">
								<p class="numb">10</p>
								<p class="text">在住房</p>
							</div>
							<div class="pay_n">
								<p class="numb">10</p>
								<p class="text">已住房</p>
							</div>
						</div>
						<div v-for="(i,index) in 5" class="item" key=index>
							<div class="img">
								<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523425433535&di=f7d324b2c95bd6f203fb8741290c02e3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D41481487a2773912d02b8d219161e374%2Ff3d3572c11dfa9ec3d58042d69d0f703918fc192.jpg" alt="">
							</div>
							<div class="text_box">
								<div class="left">
									<p class="name_1">订单号: 12315412</p>
									<p class="name_2">客户名称: 胡勇蝶</p>
									<p class="name_2">入住: 3月28  退房: 3月29</p>
									<p class="name_2">办理时间: 2018-1-12</p>
								</div>
								<div class="right">
									<p class="numb"><i class="fas fa-chevron-right"></i></p>
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
			this._lineLeft()
		},
		data(){
			return {
				arrItem: [
					'已订房',
					'已住房',
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
		div{
			&.nav{
				background-color: #8bc34a;
				padding: rem(6px) rem(15px) rem(6px) rem(10px);
				display: flex;
				.input{
					width: 90%;
					background-color: #ffffff;
					border-radius: rem(5px);
					padding: rem(8px) rem(10px);
					margin-right: 4%;
					.addr{
						font-size: rem(14px);
						color: #8bc34a;
						border-right: #aaa solid rem(1px);
						padding-right: rem(10px);
					}
					.text{
						input{
							margin-left: rem(10px);
							border: none;
							color: #aaa;
							&::-webkit-input-placeholder { 
							    color:    #aaa;
							}
							&:-moz-placeholder { 
							    color:    #aaa;
							}
							&::-moz-placeholder { 
							    color:    #aaa;
							}
							&:-ms-input-placeholder { 
							    color:    #aaa;
							}
						}
					}
				}
				.i{
					font-size: rem(21px);
					color: #ffffff;
					font-weight: bold;
					margin-top: rem(2px);
				}
			}
			&.choice{
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
			&.show{
				.body{
					padding: rem(22px) 0;
					.top{
						background-color: #e5e5e5;
						padding: rem(5px) 10%;
						display: flex;
						div{
							&.pay_y{
								color: #69c122;
								padding: 0 28% 0 12%;
								border-right: #8bc34a solid rem(1px);
								.numb{
									font-size: rem(18px);
									text-align: center;
								}
							}
							&.pay_n{
								text-align: center;
								padding-left: 24%;
								.numb{
									font-size: rem(18px);
								}
							}
						}
					}
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
									width: 20%;
									height: rem(70px);
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
											span{
												color: #e73c46;
											}	
										}
									}
									.right{
										position: absolute;
										right: rem(20px);
										bottom: rem(40px);
										p{
											&.numb{
												font-size: rem(16px);
												color: #aaa;
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
	}
</style>