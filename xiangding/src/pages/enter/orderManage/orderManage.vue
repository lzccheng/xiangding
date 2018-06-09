<template>
	<div class="box">
		<Header title="订单管理"/>
		<div class="top_box">
		<!-- <div class="nav">
			<div class="input">
				<span class="addr">广州</span>
				<span class="text"><input type="text" placeholder="酒店/品牌"><i class="fas fa-search"></i></span>
			</div>
			<div class="i"><i class="far fa-calendar-alt"></i></div>
		</div> -->
		<div class="choice">
				<div class="tab" ref="tab">
					<div v-for="(i,index) in arrItem" :key='index' @click="handleClick(index,$event)">
						<span>{{i}}</span>
					</div>
				</div>
				<div class="line" ref="_line"></div>
		</div>
		</div>
		<div class="show">
			<div v-if="0 == index_">
				<div class="body">
					<div class="top">
					    <div class="line_green"></div>
						<div @click="handlePay(0)" :class="{pay_y: (0 == index)}">
							<!-- <p class="numb">10</p> -->
							<p class="text">已付款</p>
						</div>
						<div @click="handlePay(1)" :class="{pay_y: (1 == index)}">
							<!-- <p class="numb">10</p> -->
							<p class="text">未付款</p>
						</div>
					</div>
					<div v-if="0 == index">
						
							<div v-for="(i,index) in havePay" class="item" :key="index">
              					<div tag="div" :to="Fn.getUrl({path: '/enter/hotelManage/orderStatus',query:{id:i.id}})">
									<div>
										<div class="img">
											<img :src="i.thumb" alt="">
										</div>
										<div class="text_box">
											<div class="left">
												<p class="name_1">订单号: {{i.order_sn}}</p>
												<p class="name_1">订单价格：<span>¥{{i.price}}</span></p>
												<!-- <p class="name_2">客户名称: {{i.store_name}}</p> -->
												<p class="name_2"><span>入住: {{time(i.come_time)}}</span>  <span>退房: {{time(i.out_time)}}</span></p>
												<p class="name_2">办理时间: {{time(i.created_time+'000')}}</p>
											</div>
											<div class="right">
												<p class="numb" @click="handleCommit(i.id)">确认入住</i></p>
											</div>
										</div>
									</div>
							   </div>
				            </div>
				        
		            </div>

		            <div v-if="1 == index">
		            	
			            	<div v-for="(i,index) in noPay" class="item" :key="index">
				            	<div tag="div" :to="Fn.getUrl({path: '/enter/hotelManage/orderStatus',query:{id:i.id}})">
									<div class="img">
										<img :src="i.thumb" alt="">
									</div>
									<div class="text_box">
										<div class="left">
											<p class="name_1">订单号: {{i.order_sn}}</p>
											<p class="name_1">订单价格：<span>¥{{i.price}}</span></p>
											<!-- <p class="name_2">客户名称: {{i.store_name}}</p> -->
											<p class="name_2"><span>入住: {{time(i.come_time)}}</span> <span>退房: {{time(i.out_time)}}</span></p>
											<p class="name_2">办理时间: {{time(i.created_time+'000')}}</p>
										</div>
										<!-- <div class="right">
											<p class="numb"><i class="fas fa-chevron-right"></i></p>
										</div> -->
									</div>
								</div>
				            </div>
				        
		            </div>
		        </div>		
			</div>
			<div v-if="1 == index_">
				<div class="body">
					<div v-if="0 == index_1">
							<div v-for="(i,index) in haveEnter" class="item" :key="index">
							<div tag="div" :to="Fn.getUrl({path: '/enter/hotelManage/orderStatus',query:{id:i.id}})">
										<div class="img">
									<img :src="i.thumb" alt="">
								</div>
								<div class="text_box">
									<div class="left">
										<p class="name_1">订单号: {{i.order_sn}}</p>
										<p class="name_1">订单价格：<span>¥{{i.price}}</span></p>
										<!-- <p class="name_2">客户名称: {{i.store_name}}</p> -->
										<p class="name_2"><span>入住: {{time(i.come_time)}}</span> <span>退房: {{time(i.out_time)}}</span></p>
										<p class="name_2">办理时间: {{time(i.created_time+'000')}}</p>
									</div>
									<!-- <div class="right">
										<p class="numb"><i class="fas fa-chevron-right"></i></p>
									</div> -->
								</div>
								</div>
				            </div>
				        
			        </div>
			        <div v-if="1 == index_1">
			        	
							<div v-for="(i,index) in 5" class="item" :key="index">
								<div tag="div" :to="Fn.getUrl({path: '/enter/hotelManage/orderStatus',query:{id:i.id}})">
									<div class="img">
										<img :src="i.thumb" alt="">
									</div>
									<div class="text_box">
										<div class="left">
											<p class="name_1">订单号: {{i.order_sn}}</p>
											<p class="name_1">订单价格：<span>¥{{i.price}}</span></p>
											<!-- <p class="name_2">客户名称: {{$store.state.userInfo.re}}</p> -->
											<p class="name_2"><span>入住: {{time(i.come_time)}}</span> <span>退房: {{time(i.out_time)}}</span></p>
											<p class="name_2">办理时间: {{time(i.created_time+'000')}}</p>
										</div>
										<!-- <div class="right">
											<p class="numb"><i class="fas fa-chevron-right"></i></p>
										</div> -->
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
			let that = this
			this._lineLeft()
			this.getData()
		},
		data(){
			return {
				array:[],
				havePay:[],
				noPay:[],
				haveEnter:[],
				arrItem: [
					'已订房',
					'已住房',
				],
				index_: 0,
				index: 0,
				index_1: 0
			}
		},
		methods: {
			handleCommit(id){
				let that = this

				that.Http.post({route:'finance.earning.earning-count&action=true&',data:{action: 1,uid: window.localStorage.getItem('userInfo')}}).then(res=>{
					if(res.data.result === 1){
						that.Http.post({route: 'plugin.store-cashier.store.admin.order.index',baseUrl: '/web/index.php?c=site&a=entry&m=yun_shop&do=7619&',data:{
							update: 1,
							status: 3,
							id,
							num: res.data.data.num
						}}).then(res=>{
							that.Fn.tips(res.data.msg)
							if(res.data.result == 1){
								that.getData()
							}
						})
					}
				})
				
			},
			time(value){
				let dd = new Date(Number(value))
				return dd.getFullYear()+'-'+this.Fn.zero(dd.getMonth()+1)+'-'+this.Fn.zero(dd.getDate())
			},
			getData(){
				let that = this
				this.Http.get({baseUrl:'web/index.php?c=site&a=entry&m=yun_shop&do=7619&action=true',route:'plugin.store-cashier.store.admin.order.index',params: {
					status: 0
				}}).then(res=>{
					if(res.data.data){
						that.noPay = res.data.data
					}
				})
				this.Http.get({baseUrl:'web/index.php?c=site&a=entry&m=yun_shop&do=7619&action=true',route:'plugin.store-cashier.store.admin.order.index',params: {
					status: 1
				}}).then(res=>{
					if(res.data.data){
						that.havePay = res.data.data
					}
				})
				this.Http.get({baseUrl:'web/index.php?c=site&a=entry&m=yun_shop&do=7619&action=true',route:'plugin.store-cashier.store.admin.order.index',params: {
					status: 2
				}}).then(res=>{
					if(res.data.data){
						that.haveEnter = res.data.data
					}
				})
			},
			handleClick(i,e){
				var e = e || event
				//console.log(e.target,event.path[0])
				this.$refs._line.style.left = e.target.offsetLeft + 'px'
				this.$refs._line.style.width =  e.target.offsetWidth +'px'
				this.index_ = i
			},
			onHandleChange(i){
				this.index_ = i
			},
			_lineLeft(){
				this.index_ = this.$route.query.status || 0
				this.$refs._line.style.left = this.$refs.tab.children[this.index_].offsetLeft + 'px'
				this.$refs._line.style.width =  this.$refs.tab.children[this.index_].offsetWidth + 'px'
			},
			handlePay(i){
				this.index = i
			},
			handleLive(i){
				this.index_1 = i
			}
		},
		watch: {
			'$route'(to,from){
				if(to.name === 'order'){
					this._lineLeft()
					this.getData()
				}
			},
			array(){
				this.array.map(i=>{
					console.log(i)
					if(i.status == 1){
						this.havePay.push(i)
					}
					if(i.status == 0){
						this.noPay.push(i)
					}
					if(i.status == 2||i.status == 3){
						this.haveEnter.push(i)
					}
				})
			}
		}
	}
</script>
<style scoped lang="scss">
    @import '../../../common/css/common.scss';
	.box{
		width: 100%;
		padding-bottom: rem(180px);
		padding-top: rem(60px);
		.top_box{
			width: 100%;
			position: fixed;
			top: rem(46px);
			left: 0;
			z-index: 999;
			.nav{
				background-color: #43c122;
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
						color: #43c122;
						border-right: #aaa solid rem(1px);
						padding-right: rem(10px);
					}
					.text{
						font-size: rem(14px);
						input{
							margin-left: rem(10px);
							border: none;
							color: #aaa;
							width: 74%;
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
			.choice{
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
		}
			.show{
				padding-top: 0 rem(20px);
				.body{
					.top{
						background-color: #e5e5e5;
						padding: rem(5px) 0;
						position: relative;
						display: flex;
						div{
							width: 50%;
							text-align: center;
							&.pay_y{
								color: #43c122;
							}
							&.line_green{
								border: #43c122 solid rem(0.5px);
								height: rem(25px);
								width: 0;
								position: absolute;
								top: 32%;
								left: 50%;
							}
							.text{
								padding: rem(10px) 0;
							}

						}
					}
					div{
						&.item{
							position: relative;
							// width: 100%;
							// display: flex;
							// justify-content: spase-around;
							// align-items: center;
							padding: rem(15px) 0;
							border-bottom: #e5e5e5 solid rem(1px);
							div{
								padding-left: 1%;
								&.img{
									display: inline-block;
									width: 24%;
									height: rem(93px);
									img{
										width: 100%;
										height: 100%;
										border-radius: rem(12px);
									}
								}
								&.text_box{
									width: 70%;
									display: inline-block;
									.left{
										// margin-right: 14%;
										.name_1{
											font-size: rem(14px);
											margin-bottom: rem(5px);
										}
										.name_2{
											span{
												margin-right: rem(10px);
											}
										}
										.color{
											margin-bottom: none;
											span{
													color: red;
											}
										}
									}
									.right{
										position: absolute;
										right: rem(20px);
										bottom: rem(50px);
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
</style>
