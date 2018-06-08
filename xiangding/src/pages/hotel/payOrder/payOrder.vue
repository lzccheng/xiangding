<template>
	<div class="box">
		<myalert :innerHtml="htmltest" title_3="温馨提示" @handleCancel="aaa" :show="alertShow" status="0" />
	    <div class="back" v-if="general" @click="handleClose_back">
	    	<div class="img_box">
	    		<div class="img"><img src="https://f10.baidu.com/it/u=1208544201,1064095414&fm=72" alt=""></div>
	    	</div>
	    </div>
		<Header title="订单详情"/>
		<div class="top">
			<span>待付款</span>
		</div>
		<span class="i"><i class="fas fa-donate"></i></span>
		<div class="custom">
			<p class="numb">
				<span class="icon"><i class="far fa-address-book"></i></span>
				<span>客户: {{realname}}</span>
				<span class="phone">手机号码: {{tel}}</span>
			</p>
			<p class="numb">
				<span class="icon"><i class="far fa-map"></i></span>
				<span>{{$store.state.hotelInfo.title}}</span>
			</p>
		</div>
		<div class="line"></div>
		<div class="hotel" v-if="orders">
			<p class="name">
				<span><i class="fas fa-warehouse"></i></span>
				<span>{{$store.state.hotelInfo.store_name}}</span>
			</p>
			<div class="item" v-for="(i,index) in orders.has_many_order_goods" :key="index" >
				<div class="img" @click="handleShow_back"><img  :src="i.thumb" alt=""></div>
				<div class="text_box">
					<p>{{i.title}}</p>
					<p class="time">{{time1}}/{{time2}}</p>
					<p class="color">
						<span>¥{{i.price}}</span>
						<span>×{{i.total}}</span>
					</p>
				</div>
			</div>
			
			<div class="item" v-if="title === '会议室'||title === '团房'">
				<div class="img"><img src="https://f10.baidu.com/it/u=1208544201,1064095414&fm=72" alt=""></div>
				<div class="text_box">
					<p>A套餐</p>
					<p class="color">
						<span>¥269</span>
						<span>×1</span>
					</p>
				</div>
			</div>
			<div class="pag">
				<!-- <p>
					<span>红包返现</span>
					<span class="color_e">¥ 8</span>
				</p>
				<p>
					<span>发票</span>
					<span>无</span>
				</p>
				<p>
					<span>备注</span>
					<span>无</span>
				</p>
				<p>
					<span>余额抵扣</span>
					<span>
						<el-switch
						  v-model="value2"
						  active-color="#43c122"
						  inactive-color="#A7A5A6">
						</el-switch>
					</span>
				</p> -->
			</div>
			<div class="totle" v-if="order">
				<span>合计: </span>
				<span class="totle_color">¥ {{order.order_pay.amount}}</span>
			</div>
		</div>
		<div class="line"></div>
		<div class="footer" v-if="orders&&order">
			<p>订单编号: {{orders.order_sn}}</p>
			<p>交易方式: 微信支付</p>
			<p>下单时间: {{order.order_pay.created_at}}</p>
		</div>
		<div  class="button">
			<router-link v-if="title ==='团房' || title ==='会议室'" tag="span" :to="Fn.getUrl({path: '/my/custom'})" class="need_pay ">讲价</router-link>
			<!-- <router-link tag="span" to="/hotelDetail/hotelSelect/hotelOrder" v-else  class="need_pay talk">取消订单</router-link> -->
			<span  v-else @click="handleShow" class="need_pay talk">取消订单</span>
			<!-- <router-link tag="span" :to="Fn.getUrl({path: '/my/order/payMethods'})" class="money_color">立即支付</router-link> -->
			<span class="money_color" @click="handlePay">立即支付</span>
		</div>
	</div>
</template>
<script>
    import myalert from '../../../components/alert/alert'
    import { Indicator,MessageBox } from 'mint-ui'
    import wx from 'weixin-js-sdk'
	export default {
		components: {
			myalert
		},
		mounted(){
			if(this.$route.query.name){
				this.title = this.$route.query.name
			}
			if(this.$route.query.order_ids){
				this.order_ids = this.$route.query.order_ids
			}
			if(this.$route.query.order_ids){
				this.order_ids = this.$route.query.order_ids
			}
			if(this.$route.query.realname){
				this.realname = this.$route.query.realname
			}
			if(this.$route.query.tel){
				this.tel = this.$route.query.tel
			}
			if(this.$route.query.total){
				this.total = this.$route.query.total
			}
			this.getData()
		},
		data(){
			return {
				value1: true,
                value2: true,
                title: '酒店列表',
                general: false,
                htmltest: '<p style="font-size: 14px;padding: 10px 0;">您真的要取消订单吗？</p>',
                alertShow: false,
                order_ids: null,
                realname:'',
                tel: '',
                order: null,
                total: null,
                orders: null,
                time: null
			}
		},
		methods: {
			WXPay(payParams) {
		      //alert(document.location.href);
		      //console.log(""+payParams.timestamp);
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
		          if (res.errMsg == "chooseWXPay:ok") {
		            that.$router.push(that.fun.getUrl('member'));

		            MessageBox.alert('支付成功', '提示success');
		            //that.$router.push({name:'PayYes',params:{order_id:}});
		          } else {
		            MessageBox.alert(res.errMsg, '提示success');
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
	            	console.log(response.data.data.js)
	            	//https://www.share-hotel.cn/addons/yun_shop/api.php?i=3&type=1&shop_id=null&route=member.member.wxJsSdkConfig
	            	that.Http.get({route:'member.member.wxJsSdkConfig',params:{url:window.location.href}}).then(res=>{
	            		console.log(res.data.data.config)
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
			handlePay(){
				let that = this
		    	this.Http.get({route:'order.merge-pay',params:{order_ids:that.order_ids,pid:that.$store.state.userInfo.uid}}).then(ress=>{
			      	that.order_pay_id = ress.data.data.order_pay.id
			      	setTimeout(()=>{
			      		that.getWeChatPayParams()
			      	},50)
			    })
			},
			getData(){
				//https://www.share-hotel.cn/addons/yun_shop/api.php?i=3&type=1&shop_id=null&route=order.merge-pay&order_ids=156&pid=10
				let that = this
				this.Http.get({route: 'order.merge-pay',params: {order_ids: this.order_ids,pad: 10}}).then(res=>{
					// console.log(res)
					that.order = res.data.data
				})
				this.Http.post({route:'order.list.index'}).then(res=>{
					if(res.data.result == 1){
						let order = res.data.data.data.filter(i=>{
							if(i.id == that.order_ids){
								return i
							}
						})
						that.orders = order[0]
						console.log(that.orders)
						that.Http.post({route:'order.create',data:{select: 1,order_id:that.order_ids}}).then(res=>{
							that.time = res.data.data
							console.log(that.time)
						})
					}
				})

			},
			handleShow_back(){
				this.general = true
			},
			handleClose_back(){
				this.general = false
			},
			aaa(res){
				this.alertShow = false
			},
			handleShow(){
				// this.alertShow = true
				MessageBox.confirm('您确定要取消订单吗？','温馨提示').then(action => {
				});
			},
		},
		computed: {
			time1(){
				if(this.time){
					let dd = new Date(Number(this.time.come_time))
					return dd.getFullYear()+'-'+this.Fn.zero(dd.getMonth()+1)+'-'+this.Fn.zero(dd.getDate())	
				}else{
					return ''
				}
			},
			time2(){
				if(this.time){
					let dd = new Date(Number(this.time.out_time))
					return dd.getFullYear()+'-'+this.Fn.zero(dd.getMonth()+1)+'-'+this.Fn.zero(dd.getDate())	
				}else{
					return ''
				}
			}
		},
		watch: {
			'$route':function(to,from){
				if(to.name == 'payOrder'){
					if(this.$route.query.name){
						this.title = this.$route.query.name
					}else{
						this.title = '酒店列表'
					}
					if(this.$route.query.order_ids){
						this.order_ids = this.$route.query.order_ids
					}
					if(this.$route.query.realname){
						this.realname = this.$route.query.realname
					}
					if(this.$route.query.tel){
						this.tel = this.$route.query.tel
					}
					if(this.$route.query.total){
						this.total = this.$route.query.total
					}
					this.getData()
				}
			},

		}
	}
</script>
<style scoped lang="scss">
	@import '../../../common/css/common';
	.box{
		width: 100%;
		padding-bottom: rem(100px);
		position: relative;
		padding-top: rem(20px);
		.back{
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 9999;
			.img_box{
				text-align: center;
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				display: flex;
				align-items: center;
				background-color: #000;
				// padding: rem(15px) 0;
				.img{
					
					width: 100%;
					// height: rem(20px);
					img{
						width: 100%;
						height: 100%;
					}
				}
			}
		}
		.top{
			background-color: #43c122;
			color: #ffffff;
			padding: rem(32px) 0;
			text-align: center;
			span{
				&:first-child{
					font-size: rem(24px);
					padding: 0 rem(10px);
				}
				&:last-child{
					font-size: rem(16px);

				}

			}
		}
		.i{
			position: absolute;
			top: rem(72px);
			left: 36%;
			color: #ffffff;
			font-size: rem(25px);
		}
		.custom{
			padding: rem(14px) 0;
			padding-bottom: rem(8px);
			.numb{
				font-size: rem(14px);
				padding-bottom: rem(8px);
				.icon{
					padding: 0 rem(13px);
					font-size: rem(14px);
				}
				.phone{
					padding-left: 28%;
				}
			}
		}
		.line{
			background-color: #e5e5e5;
			border-top: #aaa solid rem(1px);
			border-bottom: #aaa solid rem(1px);
			padding: rem(5px) 0;
		}
		.hotel{
			font-size: rem(14px);
			position: relative;
			padding: rem(10px) 4% rem(60px);
			p{
				padding-bottom: rem(8px);
				&.name{
					border-bottom: #aaa solid rem(1px);
					span{
						&:first-child{
							padding-right: rem(10px);
						}
						&:last-child{
							font-size: rem(15px);
						}
					}
				}
			}
			.item{
				display: flex;
				padding: rem(13px) 0;
				position: relative;
				.img{
					width: 16%;
					height: rem(60px);
					padding-right: rem(13px);
					img{
						width: 100%;
						height: 100%;
					}
				}
				.text_box{
					.time{
						color: #aaa;
					}
					.color{
						span{
							&:first-child{
								color: #FF9800;
							}
							&:last-child{
								position: absolute;
								bottom: rem(23px);
								right: rem(1px);
								font-size: rem(14px);
							}
						}
					}
				}
			}
			.pag{
				border-bottom: #aaa solid rem(1px);
				p{
					color: #aaa;
					span{
						&:last-child{
							float: right;
						}
						&.color_e{
							color: #FF9800;
						}
					}
				}
			}
			.totle{
				position: absolute;
				bottom: rem(22px);
				right: 8%;
				.totle_color{
					color: #FF9800;
					padding-left: rem(7px);
					font-size: rem(17px);
				}
			}
		}
		.footer{
			font-size: rem(14px);
			color: #aaa;
			padding: rem(15px) 4% rem(50px);
			p{
				padding: rem(7px);
			}
		}
		.button{
				background-color: #ffffff;
				width: 100%;
				border-top: #aaa solid rem(1px);
				position: fixed;
				display: flex;
				justify-content: space-around;
				bottom: 0;
				left: 0;
				z-index: 99;
				text-align: center;
				font-size: rem(16px);
				.need_pay{
					width: 50%;
					color: #FF9800;
					padding: rem(13px) 0;
				}
				.talk{
					color: #000;
				}
				.money_color{
					background-color: #43c122;
					color: #ffffff;
					width: 50%;
					padding: rem(13px) 0;
				}
			
			}
	}
</style>