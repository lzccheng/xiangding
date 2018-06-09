<template>
	<div class="box">
		<Header :title="hotelName"/>
		<div class="banner" v-if="hotelData">
			<div class="swiper-container">
				<!-- <div class="swiper-wrapper">
			        <div class="swiper-slide" v-for='(i,index) in hotelData' :key='index'>
			        	<img :src="i.banner_thumb">
			        </div>
			    </div> -->
			    <img :src="hotelData.thumb">
			</div>
			<p class="name">{{hotelData.store_name}}</p>
			<p class="name_1" v-if="hotelData">{{type1[hotelData.category_id]}} | {{star1[hotelData.category_id]}}</p>
			<!-- <span class="hearts"><i class="fas fa-heart"></i></span>
			<span class="share"><i class="fas fa-share-alt"></i></span> -->
		</div>
<!-- <<<<<<< HEAD -->
		<div class="msg" v-if="hotelData">
			<p class="tip">
				<span>{{hotelData.address}}</span>
<!-- =======
		<div class="msg">
			<p  class="tip" style="border-top: none;">
				<span>
					<span class="num">4.5分</span>
					<span class="text">非常好</span>
				</span>
				<router-link tag="span" :to="Fn.getUrl({path:'/hotelDetail/comment'})">
					<span style="color: #43c122;">55条评论</span>
					<span style="color: #aaa;"><i class="fas fa-chevron-right"></i></span>
				</router-link>
			</p>
			<p v-for='(i,index) in hotelData' :key='index' class="tip">
				<span>{{i.address}}</span>
>>>>>>> ab51d02638e3e816ee3368040b2fe34af552a569 -->
			</p>

			<!-- <p class="tip"><i class="fas fa-map-marker-alt"></i>  距离您&lt;100米</p> -->
			<p class="line"></p>

			<!-- <p class="provide">
				<span v-for='(i,index) in provide' :key='index' v-if='i.isHave'><i :class="i.icon"></i> {{i.name}}</span>
			</p> -->
			<!-- <span class="talk">
			  <span class="map">地图</span> 
			  <i class="fas fa-chevron-right"></i>
			</span> -->
			
		</div>
		<div class="room">
			<div class="time" id="name">
				<div>
					<span><i class="far fa-calendar-alt"></i></span>
					<span>{{month1}}日</span>
				</div>
				<div></div>
				<div>
					<span>{{month2}}日</span>
					<span><i class="fas fa-chevron-right"></i></span>
				</div>
				
			</div>
			<div class="massage">
				<!-- <div v-if="title === '团房'">
					<p class="horn">
						<span><i class="fas fa-bullhorn"></i></span>
						<span>团房最少订购两间及以上</span>
					</p>
				</div> -->
				<!-- <div v-if="title === '会议室'">
						<router-link v-if="!order" tag="div" :to="Fn.getUrl({path:'/hotelDetail/hotelSelect/hotelOrder',query:{name: title,meetingName: '某某会议室',hotelName,date1:date1,date2:date2}})" v-for='(i,index) in room' :key='index' class="rooms">
							<div>
								<img :src="i.imgUrl">
							</div>
							<div class="title">
								<p>某某会议室</p>
								<p>{{i.area}}m <sup>2</sup> / <span>{{people}}</span>人</p>
							</div>
							<div class="price">
								<p><span class="first">￥</span>{{i.price}}<span class="first">元</span></p>
								<p v-if="title !== '会议室'"><router-link tag="button" :to="Fn.getUrl({path:'/hotelDetail/hotelOrder',query:{name: title}})">订房</router-link></p>
								<p v-else>
									<span >
										<router-link tag="button" :to="Fn.getUrl({path:'/hotelDetail/hotelSelect/hotelOrder',query:{name: title,hotelName,meetingName: '某某会议室',date1:date1,date2:date2}})">预定</router-link>
									</span>	
								</p>
							</div>
						</router-link>
					<div v-else>
						<div v-for='(i,index) in room' :key='index' class="rooms">
							<div>
								<img :src="i.imgUrl">
							</div>
							<div class="title">
								<p>某某会议室</p>
								<p>{{i.area}}m <sup>2</sup> / <span>{{people}}</span>人</p>
							</div>
							<div class="price">
								<p><span class="first">￥</span>{{i.price}}<span class="first">元</span></p>
								<p v-if="title !== '会议室'"><router-link tag="button" :to="Fn.getUrl({path:'/hotelDetail/hotelOrder',query:{name: title}})">订房</router-link></p>
								<p v-else>
									<span  @click="handleBubbole">
										<span class="icon_s" @click="handleDelete(index)"><i class="fas fa-minus-circle"></i></span>
										<span class="icon_s" @click="handleAdd(index)"><i class="fas fa-plus-circle"></i></span>
									</span>
								</p>
							</div>
						</div>
					</div>
				</div> -->

				<div>
					<div v-if="hotelData">
						<router-link tag="div" :to="Fn.getUrl({path:'/hotelDetail/hotelSelect/hotelOrder',query:{name: i.title,roomName:i.title,hotelName,id:i.goods_id,date1:date1,date2:date2}})" v-for='(i,index) in rooms' :key='index' class="rooms">
							<div>
								<img :src="i.thumb">
							</div>
							<div class="title">
								<p>{{i.title}}</p>
								<p>{{i[0]?filterArr(i[0],'房间面积'):'未设定'}}m <sup>2</sup> / <span>{{i[0]?filterArr(i[0],'床型'):'未设定'}}</span>m </p>
							</div>
							<div class="price">
								<p>￥{{i.price}}元</p>
								<p><router-link tag="button" :to="Fn.getUrl({path:'/hotelDetail/hotelSelect/hotelOrder',query:{name: i.title,roomName:i.title,hotelName,date1:date1,date2:date2,id:i.goods_id}})">订房</router-link></p>
							</div>
						</router-link>
						<div v-if="!rooms.length" class="rooms" style="text-align: center">
							<span>暂未发布{{roomData[brand_id]}}</span>
						</div>
					</div>
						
					
					<!-- <div v-else>
						<div v-for='(i,index) in room' :key='index' class="rooms">
							<div>
								<img :src="i.imgUrl">
							</div>
							<div class="title">
								<p>特惠商务房</p>
								<p> {{i.area}}m <sup>2</sup>/<span>{{people}}</span>人</p>
							</div>
							<div class="price">
								<p><span class="first">￥</span>{{i.price}}<span class="first">元</span></p>
								<p>
									<span  @click="handleBubbole">
										<span class="icon_s" @click="handleDelete(index)"><i class="fas fa-minus-circle"></i></span>
										<span class="number_s">{{numarr[index].num}}</span>
										<span class="icon_s" @click="handleAdd(index)"><i class="fas fa-plus-circle"></i></span>
									</span>
								</p>
							</div>
						</div>
					</div> -->
				</div>
				
			</div>
			
		</div>
		<!-- <div class="button" v-if="order">
			<span>取消</span>
			<span>确定</span>
		</div> -->
	</div>
</template>
<script>
	import Swiper from 'swiper'
	export default {
		components: {
		},
		mounted: function(){
			setTimeout(function(){
				var mySwiper = new Swiper ('.swiper-container', {
					autoplay: true,
				    loop: true,
				  }) 
			},100)
			if(this.$route.query.name){
				this.title = this.$route.query.name
			}
			if(this.$route.query.order){
				this.order = this.$route.query.order
			}
			if(this.$route.query.hotelName){
				this.hotelName = this.$route.query.hotelName
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
			if(this.$route.query.brand_id){
				this.brand_id = this.$route.query.brand_id
			}
			let that = this
			new lzcDatePlugin({
            el: '#name',
            callback: function(res){
              that.date1 = res[0].dateTime;
              that.date2 = res[1].dateTime;
            }

          })
			 // this.getData()
		},
		data(){
			return {
				id: 0,
				data: {},
				imgList: [],
				tip: [],
				provide: [],
				address: '',
				distance: '',
				near: [],
				room: [],
				title: '酒店列表',
				people: 100,
				order: false,
				numarr:[],
				hotelName: '',
				date1: 0,
				date2: 0,
				hotelData:null,
				rooms: [],
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
				roomData: {
					'2': '房间',
					'3': '会议室',
					'4': '团房',
					'5': '钟点房'
				},
				brand_id: ''
			}
		},
		methods:{
			filterArr(arr,value){
				let dd = arr.filter(i=>{
					if(i.title === value){
						return i
					}
				})
				return dd[0]?dd[0].value:'未设定'
			},
			getData:function(){
				let that = this
				// this.Http.get({route:'goods.category.get-children-category',params:{action:true}}).then(res=>{
				// 	console.log(11,res)
				// 	that.arrData = res.data.data[0][0]
				// })
				// this.$axios({url:'/hotelDetail',method:'get',data:{id:this.$route.query.id}}).then((res)=>{
				// 	that.id = res.data.id?res.data.id:0
				// 	that.data = res.data
				// 	that.imgList = res.data.hotelDetail.imgList
				// 	that.tip = res.data.hotelDetail.tip
				// 	that.provide = res.data.hotelDetail.provide
				// 	that.address = res.data.hotelDetail.address
				// 	that.distance = res.data.hotelDetail.distance
				// 	that.near = res.data.hotelDetail.near
				// 	that.room = res.data.hotelDetail.room
				// 	for(let i = 0;i < that.room.length;i++){
				// 		let item = {
				// 			title: '某某会议室',
				// 			num: 0
				// 		}
				// 		that.numarr.push(item)
				// 	}
				// }).catch((err)=>{
				// })
		          this.Http.post({route:'goods.category.get-children-category',data:{action:true,brand_id: this.brand_id}}).then(res=>{
		          		console.log(111,res)
		          		let dd = res.data.data[1].filter(i=>{
		          			if(i.id == that.id){
		          				return i
		          			}
		          		})
		          		// that.hotelData = dd[0]
		          })
			},
			handleBubbole(event){
				event.cancelBubble = true
			},
			handleDelete(i){
				this.numarr[i].num --
				if(this.numarr[i].num<=1){this.numarr[i].num=1}
			},
			handleAdd(i){
				this.numarr[i].num++
			}
		},
		computed: {
			month1(){
				let dd = new Date(Number(this.date1))
				return this.Fn.zero(dd.getMonth()+1)+'-'+this.Fn.zero(dd.getDate())
			},
			month2(){
				let dd = new Date(Number(this.date2))
				return this.Fn.zero(dd.getMonth()+1)+'-'+this.Fn.zero(dd.getDate())
			},
			days(){
				return Math.round((Number(this.date2) - Number(this.date1))/1000/60/60/24)
			}
		},
		watch: {
			'$route':function(to,from){
				if(to.name == 'hotelDetail'){
					
					if(this.$route.query.name){
						this.title = this.$route.query.name
					}else{
						this.title = '酒店列表'
					}
					if(this.$route.query.order){
						this.order = this.$route.query.order
					}else{
						this.order = false
					}
					if(this.$route.query.hotelName){
						this.hotelName = this.$route.query.hotelName
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
					if(this.$route.query.brand_id){
						this.brand_id = this.$route.query.brand_id
					}
					// this.getData()
				}
			},
			id(){

				let that = this
				// that.rooms = []
				// that.rooms = []
				// that.Http.post({route:'goods.category.get-category',data:{action:1,brand_id: 2,store_id: that.id}}).then(res=>{
				// 	console.log(999,res)
				// 	that.rooms = [...res.data.data]
				// })
			    this.Http.post({route:'goods.category.get-category',data:{action:true},msg:'数据加载中...'}).then(res=>{
	          		let dd = res.data.data[1].filter(i=>{
	          			if(i.id == that.id){
	          				return i
	          			}
	          		})
	          		that.hotelData = dd[0]
	          		that.rooms = that.hotelData.goods.filter(i=>{
	          			if(i.brand_id == that.brand_id){
	          				return i
	          			}
	          		})
	          		this.$store.commit('changeHotel',that.hotelData)
		          	console.log(55,that.hotelData)
	          })
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
		position: relative;
		padding-bottom: rem(75px);
		padding-top: rem(20px);
		.banner{
			.swiper-container {
			    img{
			    	width: 100%;
			    	height: rem(250px);
			    }
			}
			.name{
				color: #ffffff;
				font-size: rem(18px);
				font-weight: bold;
				position: absolute;
				top: rem(220px);
				left: rem(15px);
				z-index: 100;
			}
			.name_1{
				color: #ffffff;
				font-size: rem(14px);
				position: absolute;
				top: rem(250px);
				left: rem(15px);
				z-index: 100;
			}
			.hearts{
				color: red;
				font-size: rem(20px);
				position: absolute;
				top: rem(60px);
				right: rem(55px);
				z-index: 100;
				padding: 0 rem(2.5px);
				background-color: rgba(68,68,68,0.6);
				border-radius: rem(60px);
			}
			.share{
				color: #ffffff;
				font-size: rem(17px);
				position: absolute;
				top: rem(60px);
				right: rem(15px);
				z-index: 100;
				padding: rem(2px) rem(5.5px);
				background-color: rgba(68,68,68,0.6);
				border-radius: rem(100px);
				text-align: center;
			}
		}
		.msg{
			position: relative;
			font-size: rem(13px);
			.tip{
				margin: 0 3%;
				width: 90%;
				padding: rem(10px) 0;
				border-top: #EDEDED solid rem(1px);
				display: flex;
				justify-content: space-between;
				span{
					span{
						&.num{
							font-size: rem(17px);
							margin-right: rem(5px);
						}
						&:last-child{
							margin-left: rem(5px);
						}
					}
				}
				
			}
			.line{
				border: #e5e5e5 solid rem(6px);
			}
			.provide{
				padding: rem(10px) rem(15px);
				span{
					margin-right: rem(19px);
				}
			}
			.talk{
				position: absolute;
				top: rem(7px);
				right: rem(20px);
				color: #aaa;
				font-size: rem(15px);
				.map{
					font-size: rem(13px);
					color: #43c122;
				}
			}
			.position{
				padding: rem(20px) rem(20px);
				.icon{
					vertical-align: middle;
					display: inline-block;
					font-size: rem(30px);
					color: #43c122;
				}
				.distance{
					display: inline-block;
					vertical-align: middle;
					padding: 0 rem(15px);
					p{
						padding: rem(1px) 0;
					}
				}
			}
		}
		.room{
			padding-top: rem(15px);
			.time{
				display: flex;
				// justify-content: space-around;
				align-items:center;
				font-size: rem(14px);
				padding-bottom: rem(10px);
				border-bottom: rem(10px) solid #e5e5e5;
				div{
					font-size: rem(16px);
					&:first-child{
						span{
							&:first-child{
								color: #43c122;
								font-size: rem(18px);
								display: inline-block;
								border-right: #e5e5e5 solid rem(1px);
								padding: 0 rem(15px);
							}
							&:nth-child(2){
								padding-left: 6%;
								padding-right: rem(10px);

							}
						}
					}
					&:nth-child(2){
						border: 1px solid #43c122;
						width: 6%;
					}
					&:last-child{
						width: 50%;
						padding-left: 3%;
						span{
							&:first-child{
							}
							&:last-child{
								float: right;
							}

						}
					}
				}
			}
			.massage{
				.horn{
					background-color: #e5e5e5;
					padding: 0 rem(15px);
					padding-bottom: rem(10px);
					color:  #faa300;
					span{
						padding: 0 rem(10px);
						font-size: rem(14px);
					}
				}
				.rooms{
					margin-top: rem(10px);
					padding-left: rem(15px);
					display: flex;
					div{
						border-bottom: #e5e5e5 solid rem(0.5px);
						flex: 1;
						text-align: center;
						padding-bottom: rem(15px); 
						padding-top: rem(5px);
						img{
							width: 100%;
							height: rem(80px);
							border-radius: rem(8px);
						}
						&.title{
							p{
								&:first-child{
									font-size: rem(18px);
								}
								&:nth-child(2){
									color: #aaa;
									margin-top: rem(10px);
								}
							}
						}
						&.price{
							p{
								&:first-child{
									color: #ff9b09;
									font-size: rem(17px);
									padding-bottom: rem(24px);
									// span{
									// 	&.first{
									// 		font-size: rem(15px);
									// 	}
								}

								button{
									color: #fff;
									border: none;
									font-size: rem(14px);
									padding: rem(6px) rem(16px);
									background-color: #43c122;
									border-radius: rem(5px);
								}
								.icon_s{
									font-size: rem(16px);
									color: #43c122;
								}
								.number_s{
									font-size: rem(14px);
									padding: 0 5%;
								}
								
								.button_1{
									display: flex;
									position: fixed;
									bottom: 0;
									left: 0;
									p{
										width: 50%;
									}
								}
							}
						}
					}
				}
			}
			
		}
		.button{
			position: fixed;
			bottom: 0;
			left: 0;
			display: flex;
			width: 100%;
			text-align: center;
			// align-items:center;
			background-color: #ffffff;
			font-size: rem(15px);
			border-top: #aaa solid rem(1px);
			span{
				width: 50%;
				display: inline-block;
				padding: rem(13px);
				&:last-child{
					background-color: #43c122;
					color: #ffffff;
				}
			}
		}
	}
	  
</style>