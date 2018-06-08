<template>
	<div class="box">
		<div class="msg">
			<div class="me">
				<p>
					<img :src="msg.imgUrl">
					<div class="text">
						<span>{{msg.name}} ({{msg.level_name}})</span><br>
						<span v-show="msg.agent_nickname">推荐人: {{msg.agent_nickname}}</span><br>
						<span>ID: {{msg.id}}</span>
						<!-- <router-link tag="span" :to="Fn.getUrl({path: '/my/myMessage'})" class="i"><i class="fas fa-cog"></i></router-link> -->
					</div>
				</p>
			</div>
			<router-link :to="Fn.getUrl({path: '/my/weChatCash'})" class="cash" tag='div'>
				提现
			</router-link>
		</div>
		<div class="earning">
			<p class="text_1"><span>当前收益</span></p>
			<p class="money" style="font-family:'微软雅黑' ,Arial !important"><span>￥</span><span>{{msg.earning}}</span></p>
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
		<div class="earning">
			<router-link tag="div" :to="Fn.getUrl({path: '/my/myTeam'})" class="earn_1" >
				<div class="people">
					<span class="icon" style="background-color: #ff9800;font-size: 19px;padding: 7px 7px;"><i class="fas fa-users"></i></span>
					<span class="text">
						<span>我的团队</span>
					</span>
				</div>
				<div class="order">
					<span style="color: #555555;font-size: 18px;"><i class="fas fa-chevron-right"></i></span>
				</div>
			</router-link>
		</div>
		<div class="hotelServe">
			<p class="title">
				<span>代理服务商</span>
				<router-link :to="Fn.getUrl({path: '/my/cash'})" class="cash" tag='span'>提现</router-link>
			</p>
			<div class="earning">
				<p class="text"><span>当前收益</span></p>
				<router-link tag="p" :to="Fn.getUrl({path: '/my/cashDetail'})" class="money" style="font-family:'微软雅黑' ,Arial !important"><span>￥</span><span>{{msg.agantEarning}}</span></router-link>
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
				<!-- <div class="agent">
					<ul>
						<li>
							<p><span>一级代理</span></p>
							<p class="right">
								<span>收入</span><br>
								<span>{{msg.income.firstAgent}}</span>
							</p>
						</li>
						<li>
							<p><span>二级代理</span></p>
							<p class="right">
								<span>收入</span><br>
								<span>{{msg.income.secondAgent}}</span>
							</p>
						</li>
						<li>
							<p><span>三级代理</span></p>
							<p class="right">
								<span>收入</span><br>
								<span>{{msg.income.thirdAgent}}</span>
							</p>
						</li>
					</ul>
				</div> -->
			</div>
		</div>
		<div class="myOrder">
			<p class="text"><span>我的订单</span></p>
			<div class="message">
				<router-link tag="div" :to="Fn.getUrl({path: '/my/order',query: {status: 0}})">
					<p><i class="far fa-calendar-check"></i></p>
					<p><span>待付款</span></p>
				</router-link>
				<router-link tag="div" :to="Fn.getUrl({path: '/my/order',query: {status: 1}})">
					<p><i class="far fa-calendar-plus"></i></p>
					<p><span>待使用</span></p>
				</router-link>
				<router-link tag="div" :to="Fn.getUrl({path: '/my/order',query: {status: 2}})">
					<p><i class="far fa-calendar-alt"></i></p>
					<p><span>全部订单</span></p>
				</router-link>
			</div>
		</div>
		<div class="myOrder">
			<p class="text"><span>我的入口</span></p>
			<div class="message">
				<router-link tag="div" :to="Fn.getUrl({path: '/my/roomEnter'})">
					<p><i class="far fa-star"></i></p>
					<p><span>管理房态入口</span></p>
				</router-link>
				<router-link tag="div" :to="Fn.getUrl({path: '/my/myagantEnter'})">
					<p><i class="far fa-question-circle"></i></p>
					<p><span>代理服务商入口</span></p>
				</router-link>
			</div>
		</div>
		<div class="myOrder">
			<p class="text"><span>系统服务</span></p>
			<div class="message">
				<!-- <router-link tag="div" :to="Fn.getUrl({path: '/my/collection',query: {name: '收藏酒店'}})" >
					<p><i class="far fa-bookmark"></i></p>
					<p><span>我的收藏</span></p>
				</router-link> -->
				<router-link tag="div" :to="Fn.getUrl({path: '/my/feedBack'})">
					<p><i class="fa fa-question-circle"></i></p>
					<p><span>我要反馈</span></p>
				</router-link>
				<router-link tag="div" :to="Fn.getUrl({path: '/my/custom'})">
					<p><i class="far fa-comments"></i></p>
					<p><span>联系客服</span></p>
				</router-link>
			</div>
		</div>
	</div>
</template>
<script>
	import { Toast , MessageBox} from 'mint-ui'
	import wx from 'weixin-js-sdk'
	export default {
		mounted(){
			let that = this
			this.Http.get({
				route: 'member.member.getUserInfo'
			}).then(res=>{
				that.msg.id = res.data.data.uid
				that.msg.name = res.data.data.nickname?res.data.data.nickname:''
				that.msg.imgUrl = res.data.data.avatar
				that.msg.level_name = res.data.data.level_name
				that.msg.agent_nickname = res.data.data.yz_member.agent?res.data.data.yz_member.agent.nickname: ''
			})
			this.Http.post({route:'finance.earning.earning-count&action=true&',data:{uid: this.$store.state.userInfo.uid}}).then(res=>{
				if(res.data.result === 1){
					that.msg.earning = res.data.data.user  
					that.msg.agantEarning = res.data.data.services
				}
			})
		},
		data(){
			return {
				msg: {
					imgUrl: '',
					id: '',
					earning:'0',
					agantEarning: '0',
					order_num: '1369',
					poeple_num: '569',
					name: '',
					level_name: '',
					agent_nickname:'',
					income: {
						firstAgent: 0,
						secondAgent: 0,
						thirdAgent: 0
					},
					order_pay_id: 0	
				}
			}
		},
		methods:{
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
		    pay(){
		    	let that = this
		    	this.Http.get({route:'order.merge-pay',params:{order_ids:127,pid:15}}).then(ress=>{
			      	that.order_pay_id = ress.data.data.order_pay.id
			      	setTimeout(()=>{
			      		that.getWeChatPayParams()
			      	},50)
			    })
		    },
		    newWXPay(payParams) {
	          var that = this;
	          WeixinJSBridge.invoke(
	            'getBrandWCPayRequest', {
	              "appId": payParams.appId,     //公众号名称，由商户传入     
	              "timeStamp": payParams.timeStamp,         //时间戳，自1970年以来的秒数     
	              "nonceStr": payParams.nonceStr, //随机串     
	              "package": payParams.package,
	              "signType": payParams.signType,         //微信签名方式：     
	              "paySign": payParams.paySign //微信签名 
	            },

	            function (res) {
	              // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。 
	              if (res.err_msg == "get_brand_wcpay_request:ok") {
	                that.$router.go(-1);
	                MessageBox.alert('支付成功', '提示');
	              } else {
	                MessageBox.alert('支付失败', '提示');
	              }
	            }
	          );
	        }
		}
	}
</script>
<style scoped lang="scss">
	@import '../../common/css/common';
	.box{
		width: 100%;
		padding-bottom: rem(50px);
		background-color: #ebebeb;
		.msg{
			height: rem(90px);
			background-color: #43c122;
			position: relative;
			.me{
				position: relative;
				padding-top: rem(15px);
				margin: 0 0 rem(20px) rem(25px);
				p{
					display: inline-block;
				}
				.text{
						width: 75%;
						position: absolute;
						left: rem(60px);
						top: rem(15px);
						margin: rem(5px) rem(8px);
						font-size: rem(14px);
						color: #fff;
						.i{
							position: absolute;
							top: 0;
							right: 0;
							color: #ffffff;
							font-size: rem(25px);
						}
					}
				img{
					width: rem(60px);
					height: rem(60px);
					border-radius: 100%;
					vertical-align: middle;
				}
			}
			.cash{
				position: absolute;
				right: 0;
				top: rem(100px);
				color: #fff;
				background-color: #43c122;
				letter-spacing:2px;
				border-radius: rem(28px) 0 0 rem(28px);
				border: 2px solid #fff;
				border-right: none;
				padding: rem(8px) rem(21px);
			}
		}
		.earn{
			margin: rem(10px) 0;
			display: flex;
			align-items: center;
			padding-bottom: rem(18px);
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
				width: 50%;
				.icon{
					padding: rem(5px) rem(10px);
					background-color: #ff9800;
				}
			}
			.people{
				width: 50%;

				.icon{
					padding: rem(5px) rem(7px);
					background-color: #ff4081;
				}
			}
		}
		.earn_1{
			// margin: rem(10px) 0;
			display: flex;
			// justify-content: space-between;
			align-items: center;
			padding: rem(8px) 0;
			margin-top: rem(10px);
			// justify-content: space-around;

			.icon{
				display: inline-block;
				border-radius: 100%;
				font-size: rem(25px);
				color: #fff;
			}
			.text{
				display: inline-block;
				// width: 40%;
				text-align: left;
			}
			.order{
				width: 60%;
				span{
					display: inline-block;
					float: right;
					width: 32%;
				}
			}
			.people{
				width: 40%;
				.icon{
					background-color: #ff9800;
				}
			}
		}
		.earning{
			background-color: #fff;
			text-align: center;
			font-size: rem(13px);
			.text_1{
				padding-top: rem(20px);
			}
			.money{
				color: #ff9800;
				font-size: rem(35px);
				padding: rem(10px) 0;
				span{
					&:first-child{
						font-size: rem(20px);
					}
				}
			}


		}
		.hotelServe{
			background-color: #fff;
			margin-top: rem(10px);
			padding-bottom: rem(18px);
			.title{
				position: relative;
				padding: rem(10px) rem(20px) rem(20px);
				span{
					&:first-child{
						font-size: rem(16px);
						font-weight: bold;
					}
					&:nth-child(2){
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
		.myOrder{
			.text{
				font-size: rem(16px);
				font-weight: bold;
				padding: rem(10px) rem(15px);
			}
			.message{
				background-color: #fff;
				display: flex;
				justify-content: space-around;
				text-align: center;
				div{
					padding: rem(20px) 0;
					p{
						&:first-child{
							font-size: rem(30px);
						}
						&:nth-child(2){
							font-size: rem(16px);
						}
					}
				}
			}
		}
	}
</style>
