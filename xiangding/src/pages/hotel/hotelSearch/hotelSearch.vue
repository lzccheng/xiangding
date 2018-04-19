<template>
	<div class="box">


		<Header :title="title"/>
		<div class="_content">
			<div class="_search">
				<div class="_text">
					<div class="erea">
						<span >广州</span>
					</div>
					<div class="date">
						<span class="posi p1">
							<span><span class="color">3.29 </span> 到</span>
						</span>
						<span class="posi p2">
							<span><span class="color">3.30 </span> 离</span>
						</span>
					</div>
					<div class="search_">
						<span><i class="fas fa-search"></i></span>
						<input type="text" placeholder="酒店 / 品牌" class="">
					</div>
				</div>
			</div>
			<div class="_tabs">
				<div class="tab_">
					<span>综合筛选</span>
					<span><i class="fas fa-angle-down"></i></span>
				</div>
				<div class="tab_">
					<span>星际价格</span>
					<span><i class="fas fa-angle-down"></i></span>
				</div>
				<div class="tab_">
					<span>位置信息</span>
					<span><i class="fas fa-angle-down"></i></span>
				</div>
			</div>
			<div class="free">
				<div class="text">免费取消</div>
				<div class="text">活动优惠</div>
			</div>
			<div class="show">
				<router-link :to="{path: '/hotelDetail',query:{id:2,name: title}}" tag="div" class="item" v-for="(i,index) in 10" :key='index'>
					<div class="img">
						<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523706249725&di=7bd2cda519bba9f885f6504617bc853b&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F9922720e0cf3d7cac93f8f64f81fbe096a63a9d3.jpg" alt="">
					</div>
					<div class="msg">
						<p class="title">
							<span>广州银河大酒店</span>
						</p>
						<p>
							<span>珠江新城、</span>
							<span>五羊商城</span>
						</p>
						<p>
							<span>房间面积：30m <sup>2</sup></span>
						</p>
						<p>
							<span>最多容纳：800人</span>
						</p>
						<p class="cancel">
							<span>立减</span>
							<span>免费取消</span>
						</p>
					</div>
					<div class="price">
						<p class="star">
							<el-rate
							  v-model="star"
							  disabled
							  text-color="#ff9900"
							  score-template="{value}"/>
						</p >
						<p class="pay">
							<span>
								<span>￥</span>
								<span class="num">848</span>
								<span class="text">起</span>
							</span>
						</p>
					</div>
				</router-link>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		mounted(){
			if(this.$route.query.name){
				this.title = this.$route.query.name
			}
		},
		data(){
			return {
				arrItem: [
					{

					}
				],
				star: 5,
				title: '酒店列表'
			}
		},
		methods: {
		},
		watch: {
			$route (to,from){
				if(to.name === 'hotelSearch'){
					this.title = this.$route.query.name
				}
			}
		}
	}
</script>
<style scoped lang="scss">
	@import '../../../common/css/common';
	.box{
		width: 100%;
		._content{
			background-color: #EDEDED;
			._search{
				background-color: #8BC34A;
				padding:rem(5px) rem(10px);
				._text{
					height: rem(30px);
					line-height: rem(30px);
					background-color: #fff;
					border-radius: rem(5px);
					padding: 5px rem(13px);
					>div{
						display: inline-block;
						&.erea{
							padding-right: rem(8px);
							border-right: 1px solid #8BC34A;
							span{
								color: #8BC34A;
								font-size: rem(14px);
							}
						}
						&.date{
							width: 20%;
							position: relative;
							.posi{
								position: absolute;
								left: 0;
								padding-left: rem(10px);
								.color{
									color: #8BC34A;
								}
							}
							.p1{
								top: rem(-30px); 
							}
							.p2{
								top: rem(-12px);
							}
						}
						&.search_{
							width: 50%;
							font-size: rem(16px);
							border-left: 1px solid #8BC34A;
							span{
								display: inline-block;
								padding: 0 rem(8px);
							}
							input{
								width: 70%;
								border: none;
								padding: rem(3px) rm(8px);
								font-size: rem(14px);
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
				}
			}
			._tabs{
				display: flex;
				justify-content: space-around;
				border-bottom: 1px solid #aaa;
				background-color: #fff;
 				.tab_{
					padding: rem(12px);
				}
			}
			.free{
				.text{
					display: inline-block;
					padding: rem(5px) rem(10px);
					margin: rem(8px) rem(12px);
					background-color: #fff;
					border-radius: rem(3px);
				}
			}
			.show{
				background-color: #fff;
				padding: 0 rem(8px);
				.item{
					padding: rem(13px) 0;
					display: flex;
					border-bottom: 1px solid #aaa;
					.img{
						width: 25%;
						height: rem(130px);
						img{
							width: 100%;
							height: 100%;
							border-radius: rem(5px);						}
					}
					p{
						color: #aaa;
					}
					.msg{
						padding: 0 rem(8px);
						.title{
							font-size: rem(16px);
							font-weight: bold;
							color: #000;
							padding-bottom: rem(15px);
						}
						p{
							color: #aaa;
							padding-bottom: rem(5px);
							&.cancel{
								span{
									display: inline-block;
									padding: 0 rem(5px) rem(2px);
									margin: 0 rem(1px);
									border: 1px solid #FFA44F;
									color: #FFA44F;
								}
							}
						}
					}
					.price{
						width: 35%;
						position: relative;
						.star{
						}
						.pay{
							position: absolute;
							right: 0;
							bottom: rem(8px);
							>span{
								span{
									font-weight: bold;
									&:first-child{
										color: #FFA44F;
									}
									&.num{
										font-size:rem(16px);
										color: #FFA44F;
									}
									&.text{
										color: #333;
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