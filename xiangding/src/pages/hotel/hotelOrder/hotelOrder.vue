<template>
	<div class="box">
		<Header v-if="title === '会议室'" :title="meetingName"/>
		<Header v-else :title="roomName"/>
		<div v-if="detailt">
			<div class="banner">
				<!-- <div class="swiper-container">
				    <div class="swiper-wrapper">
				        <div class="swiper-slide" v-for='(i,index) in data.imgUrl'>
				        	<img :src="i">
				        </div>
				    </div>
				</div> -->
				<img :src="detailt.thumb">
			</div>
			<div class="message">
				<p class="title"><span>{{hotelName}}</span></p>
				<p class="star"><span>{{type1[type]}} | {{star1[type]}}</span></p>
				<div class="msg">
					<div class="img"><img :src="detailt.thumb"></div>
					<div class="text">
						<p  v-if="title === '钟点房'">{{month1}}入住，共{{num_1}}小时</p>
						<p v-else>{{month1}}入住，{{month2}}离开，共{{days}}天</p>
						<p v-if="title === '会议室'">董事长会议厅</p>
						<p v-else>{{detailt.title}}</p>
						<p><span>{{detailt.has_many_params?Fn.filterArr(detailt.has_many_params,'房间面积'):''}}m <sup>2</sup>	
						<span v-if="title === '会议室'">{{detailt.has_many_params?Fn.filterArr(detailt.has_many_params,'可住人数'):''}}人</span> 
						<span  v-else>大床{{detailt.has_many_params?Fn.filterArr(detailt.has_many_params,'床型'):''}}</span> 
						</span><span class="change">￥{{detailt.price}}元</span></p>
					</div>
					<div>
						
					</div>
				</div>
				<div class="hotelSelect">
					<div v-if="title === '会议室'">
						<p class="msg_1">
							<span class="head">窗户</span>
							<span class="text">{{detailt.has_many_params?Fn.filterArr(detailt.has_many_params,'是否有窗'):''}}</span>
							<span class="head">面积</span>
							<span class="text">{{detailt.has_many_params?Fn.filterArr(detailt.has_many_params,'房间面积'):''}}m <sup>2</sup></span>
						</p>
						<p class="msg_1">
							<span class="head">网络</span>
							<span class="text">{{detailt.has_many_params?Fn.filterArr(detailt.has_many_params,'设施'):''}}</span>
							<span class="head">容纳</span>
							<span class="text">{{detailt.has_many_params?Fn.filterArr(detailt.has_many_params,'可住人数'):''}}</span>
						</p>
						<p class="msg_1">
							<span class="head">楼层</span>
							<span class="text">{{detailt.has_many_params?Fn.filterArr(detailt.has_many_params,'楼层'):''}}</span>
							<span class="head">电话</span>
							<span class="text">{{detailt.has_many_params?Fn.filterArr(detailt.has_many_params,'电话'):''}}</span>
						</p>
					</div>
					<div v-else>
						<p class="msg_1">
							<span class="head">床型</span>
							<span class="text">{{detailt.has_many_params?Fn.filterArr(detailt.has_many_params,'床型'):''}}</span>
							<span class="head">面积</span>
							<span class="text">{{detailt.has_many_params?Fn.filterArr(detailt.has_many_params,'房间面积'):''}}m <sup>2</sup></span>
						</p>
						<p class="msg_1">
							<span class="head">窗户</span>
							<span class="text">{{detailt.has_many_params?Fn.filterArr(detailt.has_many_params,'是否有窗'):''}}</span>
							<span class="head">可住</span>
							<span class="text">{{detailt.has_many_params?Fn.filterArr(detailt.has_many_params,'可住人数'):''}}</span>
						</p>
						<p class="msg_1">
							<span class="head">网络</span>
							<span class="text">{{detailt.has_many_params?Fn.filterArr(detailt.has_many_params,'设施'):''}}</span>
							<span class="head">电话</span>
							<span class="text">{{detailt.has_many_params?Fn.filterArr(detailt.has_many_params,'电话'):''}}</span>
						</p>
						<p class="msg_1">
							<span class="head">楼层</span>
							<span class="text">{{detailt.has_many_params?Fn.filterArr(detailt.has_many_params,'楼层'):''}}</span>
							<span class="head">早餐</span>
							<span class="text">{{detailt.has_many_params?Fn.filterArr(detailt.has_many_params,'是否有早餐'):''}}</span>
						</p>
					</div>
				</div>
				<div class="inform">
					<p class="black" v-if="title === '钟点房'" >
						<span >时间</span>
						<!-- <span v-else>天数</span> -->
						<span class="number_box">
						    <span class="icon_s" style="border-right: none"  @click="handleDelete">-</span>
							<span class="number_s">{{num_1}}</span>
							<span class="icon_s radius" style="border-left: none"  @click="handleAdd">+</span>
						</span>
					</p>
					<p class="black">
						<span class="first">
						   <p v-if="title ==='会议室'">会议室间数</p>
						   <p v-else>房间</p>
						   <p v-if="title === '团房'" class="room">注: 团房间最少订购两间及以上</p>
						</span>
						<span class="number_box" >
						    <span class="icon_s"  style="border-right: none"  @click="handleDelete1">-</span>
							<span class="number_s">{{num_2}}</span>
							<span class="icon_s radius" style="border-left: none" @click="handleAdd1">+</span>
						</span>
					</p>
					<p class="black" v-if="title === '会议室'">
						<span>是否需要LED屏</span>
						<span class="check_box" ><el-checkbox v-model="checked1"></el-checkbox></span>
					</p>
					<p class="black" v-if="title === '会议室' && checked1" >
						<span class="right" >
							 <el-radio v-model="radio" label="1">1 × 2米LED屏</el-radio><br/>
	                         <el-radio v-model="radio" label="2">1.5 × 3.5米LED屏</el-radio><br/>  
	                         <el-radio v-model="radio" label="3">2.5 × 5.5米LED屏</el-radio> 
						</span>
					</p>
					<router-link tag="p" :to="Fn.getUrl({path: '/hotel/hotelManage/foodOrder'})" v-if="title === '团房'||title === '会议室'" class="black">
						<span style="color: #43c122">餐饮团购</span>
						<span  class="check_box"><i class="fas fa-chevron-right"></i></span>
					</router-link>
					<!-- <p class="black">
						<span>是否需要发票</span>
						<span class="check_box"><el-checkbox v-model="checked"></el-checkbox></span>
					</p> -->
					<router-link tag="p" :to="Fn.getUrl({path:'/hotelDetail',query:{name: '团房',id: 2,order: true}})" v-if="title === '会议室'" class="black color_green">
						<span>是否需要团房</span>
						<span class="check_box"><i class="fas fa-chevron-right"></i></span>
					</router-link>
					<router-link tag="p" :to="Fn.getUrl({path:'/hotelDetail',query:{name: '会议室',id: 2,order: true}})"  v-if="title === '团房'" class="black">
						<span class="color_green">是否需要会议室</span>
						<span class="check_box"><i class="fas fa-chevron-right"></i></span>
					</router-link>
					<!-- <p class="black" v-if="title !== '会议室'">
						<span>预计到店</span>
						<span class="time" id="clock">
							<span class="line">14</span>
							<span>:</span>
							<span class="line">30</span>
							<span class="line">本日</span>
						</span>
					</p> -->
					<p  class="day"><input type="text" v-model="formData.name" placeholder="请输入入住客人姓名" name=""></p>
					<p  class="day"><input type="text" v-model="formData.tel" placeholder="请输入入住客人的手机号码" name=""></p>

					<!-- <p  class="input_box">
					   <span class="yz_text"><input type="text" placeholder="请输入验证码" name=""></span>
					   <span class="yz_numb"><span>获取验证码</span></span>
					</p> -->
					<div v-if="title !== '会议室'">
						<p class="indent" v-if="money">
						   <span class="minus">立减</span>
						   <span class="farvourable">优惠返现</span>
						   <span class="money">¥{{detailt.price*num_2*money/100*0.4}}</span>
						</p>
						<p class="indent" v-if="money">
						   <span class="minus">奖励</span>
						   <span class="farvourable">推送奖励</span>
						   <span class="money">¥{{detailt.price*num_2*money/100*0.3}}</span>
						</p>
						<p class="indent" v-if="cancel">
						   <span class="cancel">取消</span>
						   <span class="farvourable">免费取消</span>
						   <span class="aaa">已加入免费取消政策</span>
						</p>
						</div>
						<p class="color_aaa">
							<span><i class="far fa-smile"></i></span>
							<span class="text_size">请你在30分钟内完成支付,否则订单会自动取消</span>
						</p>
						<p class="color_aaa">
							<span class="yes_icon"><i class="fas fa-clipboard-check"></i></span>
							<span class="text_size">我们保障快速确认,到店有房,资金安全,请放心预定</span>
						</p>
					</div>
				<div class="footer">
					<p class="need_pay">需支付
						<!-- <router-link class="button" :to="Fn.getUrl({path:'/hotel/payOrder',query:{name: title,date1,date2}})" tag='span'>提交订单</router-link> -->
						<span class="button" @click="handleOrder">提交订单</span>
					</p>

					<p>
						<span class="money_color">{{detailt.price*days}}元</span>
						
					</p>
				</div>
			</div>
		</div>
		
	</div>
</template>
<script>
	import Swiper from 'swiper'
	export default {
		mounted: function(){
			setTimeout(function(){
				var mySwiper = new Swiper ('.swiper-container', {
					loop:true,
					autoplay: true
				})
			},100)
			if(this.$route.query.name){
				this.title = this.$route.query.name
			}
			if(this.$route.query.hotelName){
				this.hotelName = this.$route.query.hotelName
			}
			if(this.$route.query.roomName){
				this.roomName = this.$route.query.roomName
			}
			if(this.$route.query.meetingName){
				this.meetingName = this.$route.query.meetingName
			}
			if(this.$route.query.date1){
				this.date1 = this.$route.query.date1
			}
			if(this.$route.query.date2){
				this.date2 = this.$route.query.date2
			}
			if(this.$route.query.id){
				this.id = this.$route.query.id
			}
			this.type = this.$store.state.hotelInfo.category_id
			this.getData()            
		},
		data(){
			return {
				data:{
					id:0,
					name: '广州银河大酒店',
					imgUrl: [
						'http://pic.35pic.com/normal/04/16/23/5713677_151916236164_2.jpg'
					]
				},
				id:0,
				checked: false,
				checked1: false,
				title: '酒店列表',
				show: false,
				radio: '1',
				num_1: 1,
				num_2: 1,
				roomName: '',
				hotelName: '',
				meetingName: '',
				date1: 0,
				date2: 0,
				type: 0,
				type1: {
					'1': '经济酒店',
					'2': '舒适酒店',
					'3': '商务酒店',
					'4': '高档酒店',
					'5': '豪华酒店',
				},
				star1: {
					'1': '一星级',
					'2': '二星级',
					'3': '三星级',
					'4': '四星级',
					'5': '五星级',
				},
				detailt: null,
				formData: {
					name: '',
					tel: ''
				},
				money: 0,
				cancel: null
			}
		},
		computed: {
			month1(){
				let dd = new Date(Number(this.$route.query.date1))
				return this.Fn.zero(dd.getMonth()+1)+'-'+this.Fn.zero(dd.getDate())
			},
			month2(){
				let dd = new Date(Number(this.$route.query.date2))
				return this.Fn.zero(dd.getMonth()+1)+'-'+this.Fn.zero(dd.getDate())
			},
			days(){
				return Math.round((Number(this.$route.query.date2) - Number(this.$route.query.date1))/1000/60/60/24)
			},
			detailt1(){
				let aa = this.detailt.has_many_params?Fn.filterArr(this.detailt.has_many_params,'取消政策'):''
				this.cancel = aa?true: false
			}
		},
		watch: {
			'$route':function(to,from){
				if(to.name == 'hotelOrder'){
					if(this.$route.query.name){
						this.title = this.$route.query.name
					}else{
						this.title = '酒店列表'
					}
					if(this.$route.query.hotelName){
						this.hotelName = this.$route.query.hotelName
					}
					if(this.$route.query.roomName){
						this.roomName = this.$route.query.roomName
					}
					if(this.$route.query.meetingName){
						this.meetingName = this.$route.query.meetingName
					}
					if(this.$route.query.date1){
						this.date1 = this.$route.query.date1
					}
					if(this.$route.query.date2){
						this.date2 = this.$route.query.date2
					}
					if(this.$route.query.id){
						this.id = this.$route.query.id
					}
					this.type = this.$store.state.hotelInfo.category_id
					this.getData()
				}
			}
		},
		methods:{
			handleOrder(){
				if(!this.formData.name){
					return this.Fn.tips('姓名不能为空')
				}
				if(!this.formData.tel){
					return this.Fn.tips('手机号码不能为空')
				}
				//https://www.share-hotel.cn/addons/yun_shop/api.php?i=3&type=1&shop_id=null&route=order.create
				let that = this
				let address = {"id":1,"uniacid":this.$store.state.userInfo.uniacid,"uid":this.$store.state.userInfo.uid,"username":this.formData.name,"mobile":this.formData.tel,"zipcode":"","province":"北京","city":"北京市","district":"东城区","street":"东四街道","address":"122456","isdefault":1}
				let goods = [
					{
						goods_id: this.id,
						total: this.num_2,
						option_id: 0
					}
				]
				this.Http.post({route:'order.create',data:{
					address: JSON.stringify(address),
					dispatch_type_id: 1,
					goods: JSON.stringify(goods),
					member_coupon_ids: '[]',
					orders: '[]',
					out_time: that.date2,
					come_time: that.date1,
					close_time: new Date().getTime()+1000*60*30
				}}).then(res=>{
					console.log(res)
					that.Fn.tips(res.data.msg)
					if(res.data.result === 1){
						console.log(that.Fn.getUrl({path: '/hotel/payOrder',query: {order_ids: res.data.data.order_id}}),res.data)
						that.$router.push(that.Fn.getUrl({path: '/hotel/payOrder',query: {order_ids: res.data.data.order_id,realname: that.formData.name,tel:that.formData.tel,total: that.num_2}}))
					}
				})
			},
			getData(){
				//https://www.share-hotel.cn/addons/yun_shop/api.php?i=3&type=1&shop_id=null&route=goods.goods.get-goods
				// console.log(this.id)
				let that = this
				that.detailt = null
				this.Http.get({route:'goods.goods.get-goods',params:{id:this.id,action: 1}}).then(res=>{
					that.detailt = res.data.data
				})
				this.Http.post({route:'goods.category.get-category',data:{action_m: 1,brand_id:2,store_id:this.$store.state.hotelInfo.id}}).then(res=>{
					if(res.data.result === 1){
						that.money = res.data.data
					}
				})
			},
			handleBlur(event){
				event.path[0].blur()
			},
			handleDelete(i){
				this.num_1 --
				if(this.num_1<=0){this.num_1=1}
			},
			handleAdd(i){
				this.num_1++
			},
			handleDelete1(i){
				this.num_2 --
				if(this.num_2<=0){this.num_2=1}
			},
			handleAdd1(i){
				this.num_2++
			}
		}
	}
</script>
<style scoped lang="scss">
	@import '../../../common/css/swiper.min';
	@import '../../../common/css/common';
	.box{
		width: 100%;
		background-color: #fff;
		img{
			width: 100%;
		}
		.message{
			padding: 0 rem(15px);
			.title{
				padding: rem(5px) 0;
				font-size: rem(18px);
				font-weight: bold;
			}
			.star{
				color: #aaa;
				font-size: rem(14px);
			}
			.tip{
				margin-top: rem(10px);
				span{
					&:first-child{
						margin:0;
					}
					// margin-left: rem(10px);
				}
			}

			.msg{
				margin-top: rem(15px);
				div{
					display: inline-block;
					vertical-align: top;
				}
				.img{
					width: 24%;
					img{
						width: 100%;
						height: rem(81px);
						border-radius: rem(7px);
					}
				}
				.text{
					width: 70%;
					padding-left: 3%;
					font-size: rem(14px);
					p{
						padding-top: rem(3px);
						span{
							&:first-child{
								color: #aaa;
							}
							// &.first{
							// 	padding: 0 2%;
							// }
							&.change{
								float: right;
								color: #ffa726;
								font-size: rem(17px);
							}
						
						}
					}
				}
			}
			.hotelSelect{
				padding: rem(7px) 2%;
				font-size: rem(14px);
				.msg_1{
					padding: rem(5px) 0;
					.head{
						// width: 10%;
						display: inline-block;
						color: #aaa;
					}
					.text{
						width: 37%;
						display: inline-block;
					}
				}
			}
			.inform{
				margin-top: rem(10px);
				padding-bottom: rem(120px);
				.color_green{
		        	color: #43c122;
		        }
				p{
					padding: 0 rem(5px);
					font-size: rem(14px);
					margin: rem(12px) 0;
					&.black{
						margin-top: rem(13px);
				        padding-bottom: rem(16px);
				        border-bottom: #EDEDED solid rem(1px);
				        position: relative;
				        span{
				        	&:first-child{
				        		display: inline-block;
				        	&.first{
								margin-left: rem(-5.5px);
							}
				        		p{
				        			margin: 0;
				        			&.room{
				        				color: #E51C23;
				        				font-size: rem(11px);
				        			}
				        		}
				        	}
				        }
					}
					.space{
						display: inline-block;
						width: 60%;
						height: rem(5px);
					}
					.span{
						padding: rem(3px) 3%;
						display: inline-block;
						border: 1px solid teal;
					}
					.yz_numb{
						background-color: #43c122;
						color: #ffffff;
						position: absolute;
						right: 0;
						bottom: 0;
						height: 94%;
						display: flex;
						padding: 0 rem(8px);
						align-items: center;
					}
					.yz_text{
						line-height: rem(43.5px);
					}
					.check_box{
						float: right;
						color: #43c122;
					} 
					.number_box{
						float: right;
						display: flex;
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
					}
					// .top{
					// 	margin-top: rem(3px);
					// }
					.time{
						position: absolute;
						top: rem(-6px);
						right: 0;
						span{
							color: #aaa;
							&.line{
								padding: rem(9px) rem(10px);
								margin-right: rem(2px);
								border-top: #43c122 solid rem(1px);
								border-bottom: #43c122 solid rem(1px);
							}
						}
					}
					&.day{
						border-bottom: rem(1px) solid #EDEDED;
					}
					// &.add_text{
					// 	border-bottom: 0.5px solid red;
					// 	padding-bottom: rem(40px);
					// }
					&.color_aaa{
						color: #aaa;
						.yes_icon{
							padding-right: rem(3px);
						}
						.text_size{
							font-size: rem(12px);
						}
					}
					&.input_box{
						display: flex;
						border-bottom: rem(1px) solid #EDEDED;
						margin-top: rem(-15px);
						position: relative;
					}
					input{
						width: 100%;
						border: none;
						height: rem(20px);
						margin-bottom: rem(10px);
						&::-webkit-input-placeholder{
							color: #aaa;
						}
						&:-moz-placeholder{
							color: #aaa;
						}
						&:-ms-input-placeholder{
							color: #aaa;
						}
					}
					&.indent{
						border-bottom: #EDEDED solid rem(1px);
						padding-bottom: rem(10px);
						.minus{
							color: #e51c63;
							border: #e51c63 solid rem(1px);
							font-size: rem(12px);
						}
						.money{
							color: #e51c63;
							float: right;
						}
						.cancel{
							color: #ffb400;
							font-size: rem(12px);
							border: #ffb400 solid rem(1px);
						}
						.aaa{
							color: #aaa;
							float: right;
						}
						.farvourable{
							margin-left: 2%;
						}
					}
				}
			}
			.footer{
				background-color: #ffffff;
				width: 100%;
				padding: rem(15px) 5%;
				border-top: #aaa solid rem(1px);
				position: fixed;
				bottom: 0;
				left: 0;
				z-index: 99;
				.need_pay{
					font-size: rem(15px);
					margin-bottom: rem(15px);
					.button{
						padding: rem(10px) 6%;
						background-color: #43c122;
						color: #ffffff;
						float: right;
						border-radius: rem(20px);
						font-size: rem(16px);
						margin-right: 10%;
						margin-top: rem(9px);
					}
				}
				.money_color{
					font-size: rem(19px);
					color: #ff9800;
				}
				
			}
		}
		
	}
</style>