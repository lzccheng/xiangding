<template>
	<div class="box">
		<Header title="订单列表"/>
		<myalert :innerHtml="htmltest" title_3="温馨提示" @handleCancel="aaa" :show="alertShow" status="0" />
		<!-- <div class="back" v-if="back_show" @click="backHide">
			<div class="alert" @click="cancelBubble">
				<p class="tip">温馨提示</p>
				<p>您确定取消订单吗 ?</p>
				<p>
					<span @click="backHide">取消</span>
					<span>确定</span>
				</p>
			</div>
		</div> -->

		<div>
			<div class="nav">
				<div class="tab" ref="tab"> 
					<div v-for="(i,index) in arrItem" :key='index' @click="handleClick(index,$event)"> 
						<span @click="handleRequest(index)">{{i}}</span>
					</div>
				</div>
				<div class="line" ref="_line"></div>
			</div>
			
			<div class="show" v-if="">
				<div v-if="0==index_">
					<div class="body">
						<div class="item">
							<!-- <span class="time">预定日期: 03-20</span> -->
							<div class="content_box" v-for="(i,index) in arr0" :key="index">
								<router-link tag="div" :to="Fn.getUrl({path: '/my/order/orderPay',query: {isPay: 1,id: i.order_sn,status:i.status}})" class="content">
									<p>
										<span class="title">{{i.order_sn}}</span>
										<!-- <span class="title_t">(豪华酒店 |四星级)</span> -->
										<span class="cross"><i class="f  ar fa-times-circle"></i></span>
									</p>
									<p>
										<span class="titl_hide">{{i.goods_total}}间. {{i.title}}</span>
									</p>
									<p>
										<span class="title_hide">客户名称: {{$store.state.userInfo.realname?$store.state.userInfo.realname:$store.state.userInfo.nickname}}</span>
										<span class="no">
											<span class="money_color">¥</span>
											<span class="money_size">{{i.price}}</span>
										</span>
									</p>
									<p>
										<span class="title_hide">支付剩余时间: 5分钟</span>
										<span class="no_pay">{{i.status_name}}</span>
									</p>
								</router-link>
								<div class="content_2">
								    <div class="plane">
								    	&nbsp;
									    <!-- i class="fas fa-location-arrow"></i> -->
									    <!-- <span class="here">到这里</span> -->
								    </div>
									
									<div class="button">
										<span class="change" @click="handleShow(i.order_sn)">取消订单</span>
										<span @click="handlePayAgint(i.order_id)" :to="Fn.getUrl({path: '/hotel/payOrder',query: {isPay: 0,total:i.goods_total,order_ids:i.id}})" class="pay">付款</span>
										<!-- <span @click="handlePay(i.order_sn)" :to="Fn.getUrl({path: '/hotel/payOrder',query: {isPay: 0,total:i.goods_total,order_ids:i.id}})" class="pay">付款</span> -->
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div v-if="1==index_">
					<div class="body">
						<div class="item">
							<!-- <span class="time">预定日期: 03-20</span> -->
							<div class="content_box" v-for="(i,index) in arr1" :key="index" v-if="!i.refund_id">
								<router-link tag="div" :to="Fn.getUrl({path: '/my/order/orderPay',query:{isPay: 1,id: i.order_sn,status:i.status}})" class="content">
									<p>
										<span class="title">{{i.order_sn}}</span>
										<!-- <span class="title_t">(豪华酒店 |四星级)</span> -->
										<span class="cross"><i class="far fa-times-circle"></i></span>
									</p>
									<p>
										<span class="title_hide">{{i.goods_total}}间.  {{i.title}}</span>
									</p>
									<p>
										<span class="title_hide">客户名称: {{$store.state.userInfo.realname?$store.state.userInfo.realname:$store.state.userInfo.nickname}} </span>
										<span class="no">
											<span class="money_color">¥</span>
											<span class="money_size">{{i.price}}</span>
										</span>
									</p>
									<p style="padding-bottom: 18px;">
										<span class="title_hide"> </span>
										<span class="no_pay">{{i.status_name}}</span>
									</p>
								</router-link>
								<div class="content_2">
								    <div class="plane">
									    <!-- <i class="fas fa-location-arrow"></i>
									    <span class="here">到这里</span> -->
								    </div>
									
									<div class="button">
										<span @click="handleCancelroom(i.order_id,$event)" :to="Fn.getUrl({path: '/my/cancelRoom'})" class="change">申请退房</span>
										<span @click="handleAgaint(i.goods_id,i.goods_total)" :to="Fn.getUrl({path: '/hotelDetail',query:{id:i.goods_id,hotelName: i.title}})" class="pay">再次预定</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div v-if="2==index_">
					<div class="body">
						<div class="item">
							<!-- <span class="time">预定日期: 03-20</span> -->
							<div class="content_box" v-for="(i,index) in arr2" :key="index">
								<router-link tag="div" :to="Fn.getUrl({path: '/my/order/orderPay',query:{isPay: 1,id: i.order_sn,status:i.status}})" class="content">
									<p>
										<span class="title">{{i.order_sn}}</span>
										<!-- <span class="title_t">(豪华酒店 |四星级)</span> -->
										<span class="cross"><i class="far fa-times-circle"></i></span>
									</p>
									<p>
										<span class="title_hide">{{i.goods_total}}间.  {{i.has_many_order_goods?i.has_many_order_goods.length?i.has_many_order_goods[0].title: '':''}}</span>
									</p>
									<p>
										<span class="title_hide">客户名称: {{$store.state.userInfo.realname?$store.state.userInfo.realname:$store.state.userInfo.nickname}} </span>
										<span class="no">
											<span class="money_color">¥</span>
											<span class="money_size">{{i.price}}</span>
										</span>
									</p>
									<p style="padding-bottom: 18px;">
										<span class="title_hide"> </span>
										<span class="no_pay">{{i.status_name}}</span>
									</p>
								</router-link>
								<div class="content_2">
								    <div class="plane">
									    <!-- <i class="fas fa-location-arrow"></i>
									    <span class="here">到这里</span> -->
								    </div>
									<!-- <div class="button">
										<router-link tag="span" :to="Fn.getUrl({path: '/hotelDetail',query:{id:4,hotelName: '银河大酒店'}})" class="pay">再次预定</router-link>
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
	import myalert from '../../../components/alert/alert'
	import { Indicator,MessageBox } from 'mint-ui'
	import wx from 'weixin-js-sdk'
	export default {
		components: {
			myalert
		},
		mounted(){
			this._lineLeft()
			this.handleRequest(this.index_)
		},
		data(){
			return {
				arrItem: [
					'待付款',
					'待使用',
					'全部订单'
				],
				index_: 0,
				htmltest: '',
				htmltest: '<p style="font-size: 14px;padding: 10px 0;">您真的要取消订单吗？</p>',
                alertShow: false,
                arr0: [],
                arr1: [],
                arr2: [],
                statusText:{
                	'-1': '取消状态',
                	'0': '待付款',
                	'1': '待使用',
                	'2': '待使用',
                	'3': '已完成',
                },
                realname: '',
                timesText: {},

				// back_show: false
			} 
		},
		methods: {
			handleAgaint(goods_id,total){
				let that = this
				//http://localhost:8080/api/addons/yun_shop/api.php?i=3&type=1&mid=15&route=order.create
				let addr = {"id":1,"uniacid":3,"uid":that.$store.state.userInfo.uid,"username":that.$store.state.userInfo.realname?that.$store.state.userInfo.realname:that.$store.state.userInfo.nickname,"mobile":"13927179141","zipcode":"","province":"北京","city":"北京市","district":"东城区","street":"东四街道","address":"122456","isdefault":1}
				let goods = [
					{goods_id , total,option_id: 0}
				]
				let data = {
					action: 1,
					address: JSON.stringify(addr),
					close_time: new Date().getTime()+1000*60*30,
					come_time: new Date().getTime(),
					out_time: new Date().getTime()+1000*60*60*24,
					goods: JSON.stringify(goods),
					dispatch_type_id: 1,
					member_coupon_ids: "[]",
					orders: "[]"
				}

				this.Http.post({route: 'order.create',data}).then(res=>{
					if(res.data.result === 1){
						that.Fn.tips('再次预订成功！请到待付款列表付款！')
					}
				})
			},
			handleRequest(i){
				let obj = {status: i,attr: 'arr'+i}
				if(i == 2){
					obj.all = 1
				}
				if(i == 1){
					obj.use = 1
				}
				this.getData(obj)
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
		          that.handleRequest(that.index_)
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
			handleCancelroom(id,e){
				var e = e || event
				let that = this
				this.Http.post({route: 'refund.apply.store',data:{
					content: '111',
					order_id: id,
					reason: '不想要了',
					refund_id: id,
					refund_type: 0,
					type: 1,
					i: 3
				}}).then(res=>{
					//refund_id  0
					if(res.data.result === 1){
						that.Fn.tips('申请退房成功，等待审核！')
					}else{
						that.Fn.tips(res.data.msg)
					}
					that.handleRequest(that.index_)
				})
			},
			handlePayAgint(oder_id){
				let that = this
				this.handlePay(oder_id)
			},
			getData(obj){
				let that = this
				let data = {action: 1,uid: this.$store.state.userInfo.uid}
				if(obj.page){data.page = obj.page}
				if(obj.status || obj.status == 0){data.status = obj.status}
				if(obj.all){
					for(let i=0;i<5;i++){
						data.status = i-1
						this.Http.post({route: 'order.list.index',data}).then(res=>{
							that[obj.attr] = [...res.data.data,...that[obj.attr]]
						})
					}
					return
				}
				if(obj.use){
					that[obj.attr] = []
					for(let i=0;i<2;i++){
						data.status = i+1
						this.Http.post({route: 'order.list.index',data}).then(res=>{
							that[obj.attr] = [...res.data.data,...that[obj.attr]]
						})
					}
					return
				}
				this.Http.post({route: 'order.list.index',data}).then(res=>{
					that[obj.attr] = res.data.data
				})
			},
			remaining_time(id,e){
				let that = this
				let date = new Date().getTime()
				let date_15 = new Date().getTime()+1000*60*15
				that.timesText[id].interval = setInterval(function(){
					let times = date_15-date
					if(times<0){
						clearInterval(that.timesText[id].interval)
					}
					let min  = Math.floor(times/1000/60)
					let second = times/1000%60
					console.log(e)
					that.timesText[id].value = min + '分' + second + '秒'
					date += 1000
				},1000)
			},
			aaa(res){
				this.alertShow = false
			},
			handleShow(order_sn){
				let that = this
				MessageBox.confirm('您确定要取消订单吗？','温馨提示').then(action => {
				  	that.Http.post({route:'order.list.index',data:{
				  			action: 1,
				  			order_sn: order_sn,
				  			uid: that.$store.state.userInfo.uid,
				  			del: true
				  	}}).then(res=>{
				  		if(res.data.result == 1){
				  			that.Fn.tips('取消订单成功')
				  		}else{
				  			that.Fn.tips(res.data.msg)
				  		}
				  		that.handleRequest(that.index_)
				  	})
				},err=>{

				});
				// this.alertShow = true
			},
			handleClick(i,e){
				var e = e || event
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
		},
		watch: {
			$route(to,from){
				if(to.name === 'order'){
					this._lineLeft()
					this.handleRequest(this.index_)
				}
			}
		}
	}
</script>
<style scoped lang="scss">
	@import "../../../common/css/common.scss";
	.box{
		width: 100%;
		min-height: 100%;
		background-color: #e5e5e5;
		padding-top: rem(20px);
		.back{
			width: 100%;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 9999;
			background-color: rgba(0,0,0,0.3);
			height: 100%;
			.alert{
				width: 80%;
				background-color: #ffffff;
				position: absolute;
				top: rem(200px);
				left: 10%;
				text-align: center;
				border-radius: rem(8px);
				.tip{
					font-size: rem(14px);
					font-weight: bold;
				}
				p{
					padding-top: rem(20px);
					&:first-child{
						font-size: rem(14px);
						font-weight: bold;
					}
					display: flex;
					justify-content: space-around;
					span{
						border-top: #aaa solid rem(1px);
						width: 50%;
						padding: rem(10px) 0;
						&:first-child{
							border-right: #aaa solid rem(1px);
						}
						&:last-child{
							color: #43c122;
						}
					}
				}
			}
		}
		.nav{
			position: fixed;
			width: 100%;
			z-index: 999;
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
						position: relative;
						.content{
							margin-bottom: 3%;
							p{
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
								font-size: rem(19px);
								color: #EBE6E4;
								position: absolute;
								top: rem(5px);
								right: rem(10px);
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
								right: rem(15px);
								top: rem(90px);

							}
							.enter{
								display: inline-block;
								margin-top: rem(5px);
								margin-left: 86%;
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
									span{
										padding: rem(5px) rem(16px);
										border-radius: rem(15px);
										&.pay{
											background-color: #43c122;
											color: #fff;
											font-size: rem(14px);
										}
										&.change{
											color: #409eff;
											border: #409eff solid rem(1px);
											font-size: rem(14px);
											margin-right: rem(5px);
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