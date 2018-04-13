<template>
	<div class="box">
		<Header title="酒店详情"/>
		<div class="banner">
			<div class="swiper-container">
				<div class="swiper-wrapper">
			        <div class="swiper-slide" v-for='(i,index) in imgList' :key='index'>
			        	<img :src="i">
			        </div>
			    </div>
			</div>
			<span class="hearts"><i class="fas fa-heart"></i></span>
		</div>
		<div class="msg">
			<p v-for='(i,index) in tip' :key='index' class="tip">
				<span>{{i}}</span>
			</p>
			<p class="provide">
				<span v-for='(i,index) in provide' :key='index' v-if='i.isHave'><i :class="i.icon"></i> {{i.name}}</span>
			</p>
			<span class="talk"><i class="fas fa-comment-dots"></i></span>
			<div class="position">
				<div class="icon">
					<span><i class="fas fa-map-marker-alt"></i></span>
				</div>
				<div class="distance">
					<p>{{address}}</p>
					<p>距离{{distance}}km，附近有 <span v-for='(i,index) in near' :key='index'>{{i}}<span v-if='index!==near.length-1'>、</span></span></p>
				</div>
			</div>
		</div>
		<div class="room">
			<div class="time">
				<div>
					<p>入住</p>
					<p><span>01-29</span> <span>后天</span></p>
				</div>
				<div>
					<span>共一天</span>
				</div>
				<div>
					<p>退房</p>
					<p><span>01-30</span> <span>大后天</span></p>
				</div>
			</div>
			<div class="massage">
				<div v-for='(i,index) in room' :key='index' class="rooms">
					<div>
						<img :src="i.imgUrl">
					</div>
					<div class="title">
						<p>{{i.name}}</p>
						<p>{{i.area}}m <sup>2</sup> / <span>{{i.bed}}</span>m 床</p>
					</div>
					<div class="price">
						<p>￥{{i.price}}元</p>
						<p><router-link tag='button' :to="{path:'/hotelDetail/hotelSelect'}">订房</router-link></p>
					</div>
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
				room: []
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
				font-size: rem(25px);
				position: absolute;
				top: rem(70px);
				right: rem(20px);
				z-index: 999;
			}
		}
		.msg{
			position: relative;
			.tip{
				margin: rem(5px) 0 0 rem(8px);
				width: 90%;
			}
			.provide{
				padding: rem(5px) rem(15px);
				span{
					margin-right: rem(8px);
				}
			}
			.talk{
				position: absolute;
				top: rem(-5px);
				right: rem(20px);
				color: #44c123;
				font-size: rem(40px);
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
				.rooms{
					margin-top: rem(10px);
					padding: 0 rem(15px);
					display: flex;
					div{
						flex: 1;
						text-align: center;
						img{
							width: 100%;
							height: rem(80px);
							border-radius: rem(8px);
						}
						&.title{
							p{
								&:first-child{
									font-size: rem(20px);
									font-weight: bold;
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
									font-size: rem(20px);
									font-weight: bold;
								}
								button{
									color: #fff;
									border: none;
									font-size: rem(16px);
									padding: rem(10px) rem(30px);
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