<template>
	<div class="box">
		<Header :title="title_"/>
		<div class="img">
			<img src="http://d6.yihaodianimg.com/N03/M04/F3/2C/CgQCs1NuM_WAOOJiAACkJWcB2XA42700.jpg">
		</div>

		<div class="message">
			<div v-if="title === '会议室'">
				<p class="msg">
					<span class="head">窗户</span>
					<span class="text">有窗</span>
					<span class="head">面积</span>
					<span class="text">28m <sup>2</sup></span>
				</p>
				<p class="msg">
					<span class="head">网络</span>
					<span class="text">WiFi供应</span>
					<span class="head">容纳</span>
					<span class="text">2人</span>
				</p>
				<p class="msg">
					<span class="head">楼层</span>
					<span class="text">5-15</span>
					<span class="head">电话</span>
					<span class="text">暂无信息</span>
				</p>
			</div>
			<div v-else>
				<p class="msg">
					<span class="head">床型</span>
					<span class="text">2张双人床1.5米</span>
					<span class="head">面积</span>
					<span class="text">28m <sup>2</sup></span>
				</p>
				<p class="msg">
					<span class="head">窗户</span>
					<span class="text">有窗</span>
					<span class="head">可住</span>
					<span class="text">2人</span>
				</p>
				<p class="msg">
					<span class="head">网络</span>
					<span class="text">WiFi供应</span>
					<span class="head">电话</span>
					<span class="text">暂无信息</span>
				</p>
				<p class="msg">
					<span class="head">楼层</span>
					<span class="text">5-15</span>
					<span class="head">早餐</span>
					<span class="text">双早</span>
				</p>
			</div>
			<div class="line"></div>
			<div class="base">
				<p><span>服务与设施</span></p>
				<p>
					<span class="spanPublic green">24小时热水供应</span>
				</p>
			</div>
			<div class="line"></div>
			<div class="base">
				<p><span>权益与优惠</span></p>
				<p>
					<span class="spanPublic red">活动优惠</span>
					<span>活动限时优惠中，下单立返红包</span>
				</p>
			</div>
			<div class="line"></div>
			<div v-if="title !== '会议室'" class="base">
				<p><span>退订政策</span></p>
				<p>
					<span class="spanPublic orange" v-if="title === '酒店列表'">免费取消</span>
					<span class="spanPublic orange" v-else>付费取消</span>
					<span v-if="title === '酒店列表'">免费取消订单</span>
					<span v-else class="t ">订单意境付款,不可取消、修改,否则将扣除您全部或部分房费。</span>
				</p>
			</div>
		</div>
		<div class="btn">
			<div class="total">￥289</div>
			<router-link class="pay" :to="{path:'/hotelDetail/hotelSelect/hotelOrder',query:{name: title}}" tag='div'>预定</router-link>
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
				title: '酒店'
			}
		},
		computed: {
			title_(){
				return this.title === '酒店列表'?this.title.slice(0,-2):this.title
			}
		},
		watch: {
			'$route':function(to,from){
				if(to.name == 'hotelSelect'){
					if(this.$route.query.name){
						this.title = this.$route.query.name
					}else{
						this.title = '酒店'
					}
				}
			}
		}
	}
</script>
<style scoped lang="scss">
	@import '../../../common/css/common';
	.box{
		width: 100%;
		background-color: #fff;
		padding-bottom: rem(60px);
		.title{
			p{
				text-align: center;
				padding: rem(20px) 0;
				span{
					font-size: rem(20px);
					font-weight: bold;
				}
			}
		}
		.img{
			img{
				width: 100%;
				height: rem(250px);	
			}
		}
		.message{
			padding: rem(15px) 6%;
			font-size: rem(14px);
			.msg{
				padding: rem(5px) 0;
				.head{
					width: 10%;
					display: inline-block;
					color: #aaa;
				}
				.text{
					width: 38%;
					display: inline-block;
				}
			}
			.line{
				border: 0.5px solid #aaa;
				margin: rem(15px) 0;
			}
			.base{
				p{
					position: relative;
					&:first-child{
						padding-bottom: rem(10px);
						span{
							// font-size: rem(14px);
							font-weight: bold;
						}
					}
				}
			}
			.spanPublic{
				display: inline-block;
				height: rem(25px);
				line-height: rem(25px);
				padding: 0 rem(5px);
				margin-right: rem(15px);
			}
			.t{
				width: 70%;
				display: inline-block;
				position: absolute;
				top: 0;
				right: 0;

			}
			.green{
				border: 1px solid #43c122;
				color: #43c122;
			}
			.red{
				border: 1px solid #e51c23;
				color: #e51c23;
			}
			.orange{
				border: 1px solid #ff9800;
				color: #ff9800;
			}
		}
		.btn{
			width: 100%;
			border-top: 1px solid #aaa;
			text-align: center;
			position: fixed;
			bottom: 0;
			left: 0;
			background-color: #ffffff;
			display: flex;
			.total{
				width: 50%;
				// height: rem(40px);
				// display: inline-block;
				color: red;
				font-size: rem(16px);
				padding: rem(10px) 0;
				// line-height: rem(40px);
			}
			.pay{
				width: 50%;
				// height: rem(40px);
				// display: inline-block;
				background-color: #43c122;
				// line-height: rem(40px);
				color: #fff;
				font-size: rem(16px);
				padding: rem(10px) 0;
			}
		}
	}
</style> 