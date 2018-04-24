<template>
	<div class="box">
		<Header :title="title"/>
		<div class="banner">
			<div class="swiper-container">
				<div class="swiper-wrapper">
			        <div class="swiper-slide" v-for='(i,index) in imgList' :key='index'>
			        	<img :src="i">
			        </div>
			    </div>
			</div>
			<span class="hearts"><i class="fas fa-heart"></i></span>
			<span class="share"><i class="fas fa-share-alt"></i></span>
		</div>
		<div class="msg">
			<p v-for='(i,index) in tip' :key='index' class="tip">
				<span>{{i}}</span>
			</p>

			<p class="tip"><i class="fas fa-map-marker-alt"></i>  距离您&lt;100米</p>
			<p class="line"></p>


			<p class="provide">
				<span v-for='(i,index) in provide' :key='index' v-if='i.isHave'><i :class="i.icon"></i> {{i.name}}</span>
			</p>
			<span class="talk">
			  <span class="map">地图</span> 
			  <i class="fas fa-chevron-right"></i>
			</span>
			
		</div>
		<div class="room">
			<div class="time">
				<div>
					<p v-if="title === '会议室'">开会</p>
					<p v-else>入住</p>
					<p><span>01-29</span> <span>后天</span></p>
				</div>
				<div>
					<span>共一天</span>
				</div>
				<div>
					<p v-if="title === '会议室'">退厅</p>
					<p v-else>退房</p>
					<p><span>01-30</span> <span>大后天</span></p>
				</div>
			</div>
			<div class="massage">
				<div v-if="title === '团房'">
					<p class="horn">
						<span><i class="fas fa-bullhorn"></i></span>
						<span>团房最少订购两间及以上</span>
					</p>
				</div>
				<div v-if="title === '会议室'">
					<router-link tag="div" :to="{path:'/hotelDetail/hotelSelect',query:{name: title}}">
						<div v-for='(i,index) in room' :key='index' class="rooms">
							<div>
								<img :src="i.imgUrl">
							</div>
							<div class="title">
								<p>某某会议室</p>
								<p>{{i.area}}m <sup>2</sup> / <span>{{people}}</span>人</p>
							</div>
							<div class="price">
								<p>￥{{i.price}}元</p>
								<p><router-link tag="button" :to="{path:'/hotelDetail/hotelSelect',query:{name: title}}">订房</router-link></p>
							</div>
						</div>
					</router-link>
				</div>

				<div v-else>
					<router-link tag="div" :to="{path:'/hotelDetail/hotelSelect',query:{name: title}}">
						<div v-for='(i,index) in room' :key='index' class="rooms">
							<div>
								<img :src="i.imgUrl">
							</div>
							<div class="title">
								<p>{{i.name}}</p>
								<p>{{i.area}}m <sup>2</sup> / <span>大床{{i.bed}}</span>m </p>
							</div>
							<div class="price">
								<p>￥{{i.price}}元</p>
								<p><router-link tag="button" :to="{path:'/hotelDetail/hotelSelect',query:{name: title}}">订房</router-link></p>
							</div>
						</div>
					</router-link>
				</div>
				
			</div>
			
		</div>
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
			this.getData()
			if(this.$route.query.name){
				this.title = this.$route.query.name
			}

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
				people: 100
			}
		},
		methods:{
			getData:function(){
				let that = this
				this.$axios({url:'/api/hotelDetail',method:'get',data:{id:this.$route.query.id}}).then((res)=>{
					that.id = res.data.id?res.data.id:0
					that.data = res.data
					that.imgList = res.data.hotelDetail.imgList
					that.tip = res.data.hotelDetail.tip
					that.provide = res.data.hotelDetail.provide
					that.address = res.data.hotelDetail.address
					that.distance = res.data.hotelDetail.distance
					that.near = res.data.hotelDetail.near
					that.room = res.data.hotelDetail.room
				}).catch((err)=>{
					console.log(err)
				})
			}
		},
		watch: {
			'$route':function(to,from){
				if(to.name == 'hotelDetail'){
					this.getData()
					if(this.$route.query.name){
						this.title = this.$route.query.name
					}else{
						this.title = '酒店列表'
					}
				}
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
		.banner{
			.swiper-container {
			    img{
			    	width: 100%;
			    	height: rem(250px);
			    }
			}
			.hearts{
				color: red;
				font-size: rem(20px);
				position: absolute;
				top: rem(70px);
				right: rem(45px);
				z-index: 100;
				padding: 0 rem(2.5px);
				background-color: rgba(68,68,68,0.6);
				border-radius: rem(60px);
			}
			.share{
				color: #ffffff;
				font-size: rem(17px);
				position: absolute;
				top: rem(70px);
				right: rem(10px);
				z-index: 100;
				padding: rem(2px) rem(6px);
				background-color: rgba(68,68,68,0.6);
				border-radius: rem(100px);
				text-align: center;
			}
		}
		.msg{
			position: relative;
			.tip{
				margin: rem(5px) 0 0 rem(8px);
				width: 90%;
				padding-bottom: rem(5px);
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
					font-size: rem(12px);
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
				justify-content: space-around;
				align-items:center;
				div{
					p{
						text-align: center;
						&:first-child{
							color: #aaa;
						}
						&:nth-child(2){
							font-weight: bold;
						}
					}
					&:nth-child(2){
						padding: rem(5px) rem(12px);
						border-radius: 100%;
						border: 1px solid #43c122;
					}
				}
			}
			.massage{
				.horn{
					background-color: #e5e5e5;
					padding: rem(10px) rem(15px);
					color:  #faa300;
					span{
						padding: 0 rem(10px);
						font-size: rem(14px);
					}
				}
				.rooms{
					margin-top: rem(10px);
					padding: 0 rem(15px);
					display: flex;
					div{
						border-top: #e5e5e5 solid rem(0.5px);
						flex: 1;
						text-align: center;
						padding-top: rem(15px); 
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
									font-size: rem(18px);
									padding-bottom: rem(24px);
								}
								button{
									color: #fff;
									border: none;
									font-size: rem(14px);
									padding: rem(6px) rem(16px);
									background-color: #43c122;
									border-radius: rem(5px);
								}
							}
						}
					}
				}
			}
			
		}
	}
	  
</style>