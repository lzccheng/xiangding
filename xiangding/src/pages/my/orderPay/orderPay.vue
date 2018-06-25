<template>
	<div class="box">
		<Header :title="title"/>
		
		<div v-for="(i,index_) in arr0" :key="index_">
			<div v-if="index_ == 0">
				<div>
					<div class="top">
						<p class="status">订单状态: {{statusText[i.status]}}</p>
						<!-- <p class="time" v-if="i.status == 0">{{close_time1}}</p> -->
						<!-- <router-link tag="div" to="/my/order/payMethods" class="send">
							<button class="green_btn">付款</button>
						</router-link> -->
					</div>
					<div class="middle_1">
						<p>
							<span class="personal" v-if="realName">客户: {{realName.realname}}</span>
							<span class="phone" v-if="realName">{{realName.mobile}}</span>
						</p>
						<!-- <p class="sex">性别: {{$store.state.userInfo.sex}}</p> -->
						<!-- <p class="sex">身份证号码: 440510199506132352</p> -->
					</div>
					<!-- <div class="middle_2">
						<p>
							<span class="input">备注:</span>
						</p>
					</div> -->
					<div class="middle_3">
						<div class="img">
							<img v-if="realName" :src="realName.thumb" alt="">
						</div>
						<div class="text_box">
							<p class="hotel_name">{{realName.order_sn}}</p>
							<p>
								<span class="room_name" v-if="detailt">{{detailt.title}}</span>
								<span class="money">{{realName.goods_price}}</span>
							</p>
							<p>
								<span class="title" v-if="detailt&&detailt.has_many_params.length">面积：{{detailt.has_many_params?filterArr(detailt.has_many_params,'房间面积'):''}}m²  <span v-if="detailt.brand_id != 3"> / 
									床：{{detailt.has_many_params?filterArr(detailt.has_many_params,'床型'):''}}
								</span></span>
								<span class="numb">×{{realName.goods_total}}</span>
							</p>
							<p><span class="title">预计入住: {{come_time1}}</span></p>
							<p><span class="title">预计退房: {{out_time1}}</span></p>
						</div>

					</div>
					<div class="middle_4">
						<ul>
							<!-- <li class="item">
								<span class="day">入住时间</span>
								<span class="number_box">
								   2018-04-05
								</span>
							</li>
							<li class="item">
								<span class="day">退房时间</span>
								<span class="number_box">
								    2018-04-06
								</span>
							</li> -->
							<li class="item">
							    <span class="day">商品金额</span>
								<span class="number_box">
									<span class="money_icon">¥</span>
									<span class="money_icon" style="padding-left: 0">{{Math.floor(i.goods_price*i.goods_total * 100) / 100 }}</span>
								</span>
							</li>
							<li class="item">
								<span class="day">应付金额</span>
								<span class="number_box">
									<span class="money_icon color">¥</span>
									<span class="money_icon color" style="padding-left: 0">{{i.price}}</span>
								</span>
							</li>
							<div class="send_box" v-if="title == '待付款'">
								<!-- <router-link tag="span" :to="Fn.getUrl({path: '/my/custom'})" class="custom">联系客服</router-link> -->
								<span v-if="isPay" @click="handlePayAgint(i.id)" tag="span"  :to="Fn.getUrl({path: '/my/order/payMethods'})" class="custom">付款</span>
							</div>
							<!-- <div class="send"  v-else>
								<router-link tag="p" :to="Fn.getUrl({path: '/my/custom'})" class="m custom">联系客服</router-link>
							</div> -->
						</ul>
					</div>
					<!-- <div class="middle_5">map</div> -->
					<div class="footer">
						<p>订单编号: {{realName.order_sn}}</p>
						<p>下单时间: {{create}}</p>
						<p class="changePrice" v-if="realName&&isChange"><span @click="handleChangeprice">修改价格</span></p>
					</div>
					<!-- <button @click="sendMessage">test</button> -->
				</div>
				
			</div>
		</div>
		

		
	</div>
</template>
<script>
	import { MessageBox } from 'mint-ui'
	export default {
		mounted(){
			if(this.$route.query.id){
				this.id = this.$route.query.id
			}
			if(this.$route.query.status){
				this.status = this.$route.query.status
			}
			if(this.$route.query.isChange){
				this.isChange = this.$route.query.isChange
			}
			if(this.$route.query.order_id){
				this.order_id = this.$route.query.order_id
			}
			this.getData()
			
		},
		data(){ 
			return {
				arrItem: [
					'订单状态',
					'订单详情',
				],
				statusText:{
                	'-1': '取消状态',
                	'0': '待付款',
                	'1': '待使用',
                	'2': '待使用',
                	'3': '已完成',
                },
				 index_: 1,
				id: 0,
				arr0: [],
				order_sn: '',
				status: '',
				close_time: '',
				come_time: '',
				out_time: '',
				detailt: null,
				arr: [],
				realName: null,
				isChange: false,
				isPay: false,
				title: '',
				order_id: null
			}
		},
		methods: {
			sendMessage(){
				let that = this
				let data = {
					openid: this.$store.state.userInfo.has_one_fans.openid,
					name: '',
					goodsname: '',
					order_id: '',
					price: '',
					address: '',
					url: 'https://www.baidu.com'
				}
				if(that.realName){
					data.name = that.realName.realname
				}
				if(that.detailt){
					data.goodsname = that.detailt.title
				}
				if(that.realName){
					data.order_id = that.realName.order_sn
				}
				if(that.realName){
					data.price = that.realName.price
				}
				if(that.realName){
					data.address = that.realName.mobile
				}
				this.Http.get({route: '',baseUrl: '/jssdk.php?action=1&',params:data}).then(res=>{
		  			log(res)
		  		})
		  // 		
		  		let data1 = {
		  			openid: this.$store.state.userInfo.has_one_fans.openid,
		  			goodsname: '',
		  			price: '',
		  			url: 'https://www.baidu.com'
		  		}
		  		if(that.detailt){
					data1.goodsname = that.detailt.title
				}
				if(that.realName){
					data1.price = that.realName.price
				}
		  		this.Http.get({route: '',baseUrl: '/jssdk.php?action=2&',params:data1}).then(res=>{
		  			log(res)
		  		})
			},
			handleChangeprice(){

				//https://www.share-hotel.cn/web/index.php?c=site&a=entry&m=yun_shop&do=8080&action=true&id=SN20180611203051Nl&i=3&type=1&mid=15&route=plugin.store-cashier.store.admin.order.detail

				//https://www.share-hotel.cn/addons/yun_shop/api.php?i=3&c=entry&do=shop&type=1&m=yun_shop&route=order.detail.updatePrice
				let that = this
				MessageBox.prompt('输入价格').then(action => {
					if(action.value){
						this.Http.get({route: 'order.detail.updatePrice',params: {
							order_sn: that.id,
							price: action.value
						}}).then(res=>{
							log(res)
							if(res.data.result == 1){
								that.Fn.tips(res.data.msg)
								that.arr0 = []
								that.getData()
							}
						})
					}
					
					log(action)
				},err=>{

				});
				
			},
			WXPay(payParams) {
		      var that = this;
		      console.log(payParams)
		      wx.chooseWXPay({
		        appId: payParams.appId,
		        timestamp: payParams.timestamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
		        nonceStr: payParams.nonceStr, // 支付签名随机串，不长于 32 位
		        package: payParams.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
		        signType: payParams.signType, //  签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
		        paySign: payParams.paySign, // 支付签名
		        success: function (res) {
		          // 支付成功后的回调函数
		          that.payText = res.errMsg
		          if (res.errMsg == "chooseWXPay:ok") {
		            that.$router.push(that.fun.getUrl('member'));

		            MessageBox.alert('支付成功', '提示');
		          } else {
		            MessageBox.alert(res.errMsg, '提示');
		          }
		        },
		        cancel: function (res) {
		          //支付取消
		        },
		        fail: function (res) {
		          MessageBox.alert(res.errMsg, '提示fail');
		          // setTimeout(()=>{
		          // 	MessageBox.alert(res.errMsg, '提示fail');
		          // },5000)
		        }
		      });
		    },
		    getWeChatPayParams() {
	          //order.pay.wechatPay
	          var that = this;
	          this.Http.get({route:'order.merge-pay.wechatPay', params:{ order_pay_id: this.order_pay_id }}).then(function (response) {
	            if (response.data.result == 1) {
	            	//https://www.share-hotel.cn/addons/yun_shop/api.php?i=3&type=1&shop_id=null&route=member.member.wxJsSdkConfig
	            	that.Http.get({route:'member.member.wxJsSdkConfig',params:{url:window.location.href}}).then(res=>{
	            		wx.config(res.data.data.config);
		                wx.ready(function(){
		              	    that.WXPay(response.data.data.config);
		                })
		                wx.error(err=>{
		                	MessageBox.alert('err', '提示err')
		                })
	            	})
	              
	            } else {
	              MessageBox.alert(response.data.msg, '提示');
	            }
	          }, function (response) {
	            // error callback
	          });
	        },
			handlePay(order_id){
				let that = this
				Indicator.open('加载中...')
				this.Http.get({route:'order.merge-pay',params:{order_ids:order_id,pid:that.$store.state.userInfo.uid}}).then(ress=>{
			      	that.order_pay_id = ress.data.data.order_pay.id
			      	setTimeout(()=>{
			      		Indicator.close()
			      		that.getWeChatPayParams()
			      	},50)
			    })
			},
			handlePayAgint(order_id){
				//http://localhost:8080/api/addons/yun_shop/api.php?i=3&type=1&mid=10&route=order.create
				this.handlePay(order_id)
			},
			getData(){
				let that = this 
				
				// for(let i=0;i<5;i++){
				// 	this.Http.post({route: 'order.list.index',data:{
				// 		action: 1,
				// 		uid: this.$store.state.userInfo.uid,
				// 		status: i-1,
				// 		order_sn: that.id
				// 	}}).then(res=>{
				// 		if(res.data.result === 1){
				// 			that.arr = [...that.arr,...res.data.data]
				// 		}
				// 	})
				// }
				//https://www.share-hotel.cn/addons/yun_shop/api.php?i=3&c=entry&do=shop&type=1&m=yun_shop&route=order.detail	
				// this.Http.get({route: 'order.detail.updatePrice',params:{order_sn: 'SN20180610225132R9',action: 1,price: 99}}).then(res=>{
				// 	log(555,res)
				// })	
				this.Http.get({route: 'order.detail',params:{order_sn: that.id,action: 1,price: 99}}).then(res=>{
					if(res.data.result === 1){
						that.realName = res.data.data
						that.Http.get({route: 'goods.goods.get-goods',params:{
							action: 1,
							id: that.realName.goods_id
						}}).then(res=>{
							if(res.data.result == 1){
								that.detailt = res.data.data
							}
						})
						that.Http.post({route:'order.create',data:{
							select: 1,
							order_sn: that.realName.order_sn
						}}).then(res=>{
							if(res.data.result == 1){
								if(res.data.data){
									that.close_time = res.data.data.close_time
									that.come_time = res.data.data.come_time
									that.out_time = res.data.data.out_time
								}
							}
						})
						that.Http.get({route: 'order.detail',params:{order_id:that.order_id}}).then(res=>{
							if(res.data.result === 1){
								that.arr0.push(res.data.data)
								that.title = that.statusText[that.arr0[0].status]
							}
						})
						
						log(555,that.realName)
					}
					
				})	
			},
			filterArr(arr,value){
				let dd = arr.filter(i=>{
					if(i.title === value){
						return i
					}
				})
				return dd[0]?dd[0].value:''
			},
			handleClick(i,event){
				this.$refs._line.style.left = event.path[0].offsetLeft + 'px'
				this.$refs._line.style.width =  event.path[0].offsetWidth +'px'
				this.index_ = i
			},
			time(value){
				let dd = new Date(Number(value))
				return dd.getFullYear() + '-' + this.Fn.zero(dd.getMonth()+1) +  this.Fn.zero(dd.getDate())
			}
			
		},
		computed: {
			create(){
				let dd = new Date(Number(this.close_time))
				return dd.getFullYear()+'-'+this.Fn.zero(dd.getMonth()+1)+'-'+this.Fn.zero(dd.getDate()) 
			},
			// title(){
			// 	return this.detail?this.statusText[detail.status]: '待付款'
			// },
			come_time1(){
				let dd = new Date(Number(this.come_time))
				return dd.getFullYear() + '-' + this.Fn.zero(dd.getMonth()+1) + '-' + this.Fn.zero(dd.getDate())
			},
			out_time1(){
				let dd = new Date(Number(this.out_time))
				return dd.getFullYear() + '-' + this.Fn.zero(dd.getMonth()+1) + '-' + this.Fn.zero(dd.getDate())
			},
			close_time1(){
				let that = this
				let dd = new Date(Number(this.close_time))
				let nowdd = new Date().getTime()
				let num = dd - nowdd
				let min = Math.floor(num/1000/60)
				let second = Math.floor(num/1000%60)
				// if(num < 0 && this.arr0[0].status === 0){
				// 	that.Http.post({route:'order.list.index',data:{
				//   			action: 1,
				//   			order_sn: that.order_sn,
				//   			uid: that.$store.state.userInfo.uid,
				//   			del: true
				//   	}}).then(res=>{
				//   		if(res.data.result == 1){
				//   			that.$router.push(that.Fn.getUrl({path: '/my/order'}))
				//   		}
				//   	})
				// }
				return min+'分'+second+'秒后自动关闭订单'
			}
		},
		watch: {
			$route(to,form){
				if(to.name === "orderPay"){
					setTimeout(()=>{
						if(this.$refs._line){
							this.$refs._line.style.left = this.$refs.tab.lastChild.offsetLeft + 'px'
							this.$refs._line.style.width =  this.$refs.tab.lastChild.offsetWidth + 'px'
						}
					},50)
					if(this.$route.query.id){
						this.id = this.$route.query.id
					}
					if(this.$route.query.status){
						this.status = this.$route.query.status
					}
					if(this.$route.query.isChange){
						this.isChange = this.$route.query.isChange
					}
					if(this.$route.query.order_id){
						this.order_id = this.$route.query.order_id
					}
					this.arr0 = []
					this.getData()
					this.isChange = false
				}
			}
		}
	}
</script>
<style scoped lang="scss">
	@import "../../../common/css/common.scss";
	.box{
		width: 100%;
		background-color: #e5e5e5;
		.nav{
			position: relative;
			font-size: rem(15px);
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
					width: rem(40px);
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
				position: relative;
				.left{
					position: absolute;
					top: rem(29px);
					left: rem(27px);
					._line{
						height: rem(600px);
						border-left: #43c122 solid rem(1px);
					}
					.radius{
						width: rem(12px);
						height: rem(12px);
						background-color: #43c122;
						border-radius: 100%;
						position: absolute;
						left: rem(-6.5px);
					}
					.radius1{
						top: 0;
					}
					.radius2{
						top: rem(80px);
					}
					.radius3{
						top: rem(150px);
					}
					.radius4{
						top: rem(224px);
					}
					.radius5{
						top: rem(295px);
					}
				}
				.content{
					padding: rem(18px) rem(10px) rem(25px) rem(47px);
					background-color: #ffffff;
					p{
						margin-bottom: rem(51px);
						.word{
							font-size: rem(15px);
						 }
						.time{
							float: right;
						 }
						.i{
							color: #aaa;
						}
					}
					.img_box{
						background-color: #43c122;
						border-radius: rem(10px);
						.images{
							width: 100%;
							height: rem(200px);
							margin: 0;
							img{
								width: 100%;
								height: 100%;
								border-radius: rem(10px); 
							}
						}
						.img_text{
							text-align: center;
							font-size: rem(15px);
							color: #ffffff;
							padding: rem(14px) 0;
						}
					}
				}
			}
		}
		.top{
			background-color: #ffffff;
			border-top: #fff solid rem(1px);
			text-align: center;
			padding: rem(20px) 0;
			.status{
				font-size: rem(17px);
				font-weight: bold;
				margin-top: rem(31px);
				margin-bottom: rem(10px);
			}
			.time{
				font-size: rem(13px);
			}
			.send{
				padding: rem(13px) rem(125px);
			}
		}
		.padding-bottom{
			padding-bottom: rem(2px);
		}
		.middle_1{
			margin: rem(13px) 0;
			padding: rem(15px) 3%;
			background-color: #ffffff;
			p{
				.personal{
					font-weight: bold;
					font-size: rem(14px);
				}
				.phone{
					float: right;
					color: #43c122;
					font-size: rem(14px);
				}
			}
			.sex{
				font-size: rem(14px);
				margin: rem(8px) 0;
			}
		}
		.middle_2{
			border-top: #e5e5e5 solid rem(1px);
			background-color: #ffffff;
			padding: rem(14px) rem(10px);
			.input{
				font-size: rem(14px);
			}
		}
		.middle_3{
			display: flex;
			justify-content: spase-around;
			align-items: center;
			background-color: #ffffff;
			div{
				padding: rem(5px) rem(4px);
				&.img{
					width: 23%;
					height: rem(80px);
					img{
						width: 100%;
						height: 100%;
						border-radius: rem(12px);
					}
				}
				&.text_box{
					width: 74%;
					.hotel_name{
						font-size: rem(16px);
						font-weight: bold;
					}
					p{
						position: relative;
						margin-bottom: rem(2px);
						.room_name{
							font-size: rem(13px);
						}
						.money{
							font-size: rem(18px);
							font-weight: bold;
							float: right;
						}
						.title{
							color: #bec2c9;
						}
						.numb{
							color: #43c122;
							position: absolute;
							right: 3%;
						    top: rem(20px);
						    margin-top: rem(3px);
						    font-size: rem(14px);
						}
					}
				}
			}
		}
		.middle_4{
			background-color: #ffffff;
			padding: rem(15px) rem(12px);
			ul{
				li{
					margin-bottom: rem(22px);
					.day{
						font-size: rem(14px);
						
					}
					.color{
						color: #43c122;
					}
					.number_box{
						display: flex;
						float: right;
						width: 30%;
						margin-top: rem(-7px);
						.number_s{
							width: 50%;
							text-align: center;
							display: inline-block;
							border: #DCDFE6 solid rem(1px);
							padding: rem(7px) 0;
						}
						.icon_s{
							width: 25%;
							padding: rem(7px) 0;
							text-align: center;
							border: #DCDFE6 solid rem(1px);
							border-radius: rem(5px) 0 0 rem(5px); 
						}
						.radius{
							border-radius: 0 rem(5px) rem(5px) 0; 
						}
						.delete{
							border: #43c122 solid rem(1px);
						}
						.number{
							border: #43c122 solid rem(1px);
							border-left: none;
						}
						.money_icon{
							font-size: rem(17px);
							margin-right: 2%;
							padding-left: 40%;
						}
					}
				}
				.custom{
					background-color: #43c122;
					color: #ffffff;
					padding: rem(6px) rem(12px);
					font-size: rem(14px);
					border-radius: rem(5px);
					margin-right: rem(8px);

				}
				.send_box{
					padding: 0 30%;
					
				}
				.send{
					padding: 0 35%;
					text-align: center;
				}
			}
		}
		.middle_5{
			background-color: #ffffff;
			height: rem(60px);
			margin: rem(10px) 0;
		}
		.footer{
			background-color:#ffffff;
			padding: rem(15px) 2%;
			margin-top: rem(14px);
			p{
				font-size: rem(14px);
				color: #aaa;
				margin-top: rem(7px);
			}
			.changePrice{
				text-align: right;
				margin-top: rem(18px);
				span{
					color: #fff;
					background-color: #43c122;
					padding: rem(8px) rem(12px);
					border-radius: rem(5px);
					font-size: rem(16px);
				}
			}
		}
	}
</style>