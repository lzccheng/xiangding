<template>
	<div class="box">
		<div class="header">
		    <i class="fas fa-arrow-left"></i>
			<span class="title">我的发布</span>
		</div>
		<div class="item">
			<div class="img"></div>
			<div class="con_box">
				<p class="room_name">特惠商务房</p>
				<span class="money_1">¥</span>
				<span class="money_2">299</span>
				<span class="spec">/间晚</span>
				<span class="money_1">¥</span>
				<span class="money_2">265</span>
				<span class="spec">×20间/晚</span>
				<p class="text">
				  <span class="text_1">房间面积: 20平方</span>
				  <el-switch
					  v-model="value2"
					  active-color="#aabbfd"
					  inactive-color="#a7a5a6">
				  </el-switch>
				</p>
				<p class="text_2">已住房数: 20间 <span class="right">开启状态</span></p>
				<p class="text">可售房间: 20间 &nbsp; &nbsp;添加时间2018-1-12</p>
			</div>
		</div>
		<div class="item">
			<div class="img"></div>
			<div class="con_box">
				<p class="room_name">特惠商务房</p>
				<span class="money_1">¥</span>
				<span class="money_2">299</span>
				<span class="spec">/间晚</span>
				<span class="money_1">¥</span>
				<span class="money_2">265</span>
				<span class="spec">×20间/晚</span>
				<p class="text">
				  <span class="text_1">房间面积: 20平方</span>
				  <el-switch
					  v-model="value2"
					  active-color="#aabbfd"
					  inactive-color="#a7a5a6">
				  </el-switch>
				</p>
				<p class="text_2">已住房数: 20间 <span class="right">开启状态</span></p>
				<p class="text">可售房间: 20间 &nbsp; &nbsp;添加时间2018-1-12</p>
			</div>
		</div>
		<div class="item">
			<div class="img"></div>
			<div class="con_box">
				<p class="room_name">特惠商务房</p>
				<span class="money_1">¥</span>
				<span class="money_2">299</span>
				<span class="spec">/间晚</span>
				<span class="money_1">¥</span>
				<span class="money_2">265</span>
				<span class="spec">×20间/晚</span>
				<p class="text">
				  <span class="text_1">房间面积: 20平方</span>
				  <el-switch
					  v-model="value2"
					  active-color="#aabbfd"
					  inactive-color="#a7a5a6">
				  </el-switch>
				</p>
				<p class="text_2">已住房数: 20间 <span class="right">开启状态</span></p>
				<p class="text">可售房间: 20间 &nbsp; &nbsp;添加时间2018-1-12</p>
			</div>
		</div>
		<div class="item">
			<div class="img"></div>
			<div class="con_box">
				<p class="room_name">特惠商务房</p>
				<span class="money_1">¥</span>
				<span class="money_2">299</span>
				<span class="spec">/间晚</span>
				<span class="money_1">¥</span>
				<span class="money_2">265</span>
				<span class="spec">×20间/晚</span>
				<p class="text">
				  <span class="text_1">房间面积: 20平方</span>
				  <el-switch
					  v-model="value2"
					  active-color="#aabbfd"
					  inactive-color="#a7a5a6">
				  </el-switch>
				</p>
				<p class="text_2">已住房数: 20间 <span class="right">开启状态</span></p>
				<p class="text">可售房间: 20间 &nbsp; &nbsp;添加时间2018-1-12</p>
			</div>
		</div>
		<div class="item">
			<div class="img"></div>
			<div class="con_box">
				<p class="room_name">特惠商务房</p>
				<span class="money_1">¥</span>
				<span class="money_2">299</span>
				<span class="spec">/间晚</span>
				<span class="money_1">¥</span>
				<span class="money_2">265</span>
				<span class="spec">×20间/晚</span>
				<p class="text">
				  <span class="text_1">房间面积: 20平方</span>
				  <el-switch
					  v-model="value2"
					  active-color="#aabbfd"
					  inactive-color="#a7a5a6">
				  </el-switch>
				</p>
				<p class="text_2">已住房数: 20间 <span class="right">开启状态</span></p>
				<p class="text">可售房间: 20间 &nbsp; &nbsp;添加时间2018-1-12</p>
			</div>
		</div>
		<div class="item">
			<div class="img"></div>
			<div class="con_box">
				<p class="room_name">特惠商务房</p>
				<span class="money_1">¥</span>
				<span class="money_2">299</span>
				<span class="spec">/间晚</span>
				<span class="money_1">¥</span>
				<span class="money_2">265</span>
				<span class="spec">×20间/晚</span>
				<p class="text">
				  <span class="text_1">房间面积: 20平方</span>
				  <el-switch
					  v-model="value2"
					  active-color="#aabbfd"
					  inactive-color="#a7a5a6">
				  </el-switch>
				</p>
				<p class="text_2">已住房数: 20间 <span class="right">开启状态</span></p>
				<p class="text">可售房间: 20间 &nbsp; &nbsp;添加时间2018-1-12</p>
			</div>
		</div>
		<div class="control">
			<div class="add">
			    <div class="icon_1"><i class="far fa-plus-square"></i></div>
				<span>房间发布</span>
			</div>
			<div class="delete">
			    <div class="icon_2"><i class="far fa-minus-square"></i></div>
				<span>删减房间</span>
			</div>
		</div>
		<div class="footer">
				<router-link tag="div" to="/my/roomEnter/meettingSend" class="room" >
					<div class="icon_3"><i class="far fa-plus-square"></i></div>
					<span>会议室发布</span>
				</router-link>
				<router-link tag="div" to="/my/roomEnter/teamSend" class="room" >
					<div class="icon_3"><i class="far fa-plus-square"></i></div>
					<span>团房发布</span>
				</router-link>
				<router-link tag="div" to="/my/roomEnter/clockSend" class="room">
					<div class="icon_3"><i class="far fa-plus-square"></i></div>
					<span>钟点房</span>
				</router-link>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				value1: true,
	            value2: true
				}
		},
		methods: {

		}
	}
</script>
<style scoped lang="scss">
	@import "../../../common/css/common.scss";
	.box{
		width: 100%;
		padding-bottom: rem(185px);
		.header{
			padding: rem(15px) rem(30px);
			font-size: rem(22px);
			background-color: #ffffff;
			border-bottom: #aaaaaa solid rem(1px);
			.title{
				vertical-align: middle;
				margin-left: rem(120px);
			}
		}
		.item{
			background-color: #ffffff;
			padding: rem(10px) rem(9px) rem(25px);
			.img{
				display: inline-block;
				width: 27%;
				height: rem(115px);
				background-color: #e5e5e5;
				border-radius: rem(12px);
			}
			.con_box{
				display: inline-block;
				margin-top: rem(1px);
				.room_name{
					font-size: rem(17px);
					margin-bottom: rem(3px);
					font-weight: bold;
					}
				.money_1{
					font-size: rem(16px);
					color: #e51c23;
				  }
				.money_2{
					font-size: rem(23px);
					color: #e51c23;
				}
				.spec{
					font-size: rem(16px);
					color: #a7a5a6;
					margin-right: rem(20px);
				}
				.text{
					font-size: rem(14px);
					.text_1{
						margin-right: rem(90px);
					}
				}
				.text_2{
					font-size: rem(14px);
					.right{
						font-size: rem(15px);
						color: #a7a5a6;
						margin-left: rem(90px);
					}
				}
				
			}
		}
		.control{
			position: fixed;
			bottom: rem(115px);
			font-size: rem(17px);
			background-color: #e5e5e5;
				.add{
					padding: rem(16px) rem(74px);
					display: inline-block;
					background-color: #43c122;
					color: #ffffff;
					border-radius: rem(28px);
					.icon_1{
						display: inline-block;
					}
				}
				.delete{
					display: inline-block;
					padding: rem(16px) rem(42px);
					.icon_2{
						display: inline-block;
						color: #43c122;
					}
				}
		}
		.footer{
			position: fixed;
			bottom: rem(50px);
			background-color: #ffffff;
			.room{
				display: inline-block;
				padding: rem(21px) rem(26px);
				font-size: rem(16px);
				border-right: #ffffff solid rem(1px);
				background-color: #e5e5e5;
				.icon_3{
					display: inline-block;
					color: #43c122;
				}
			}
		}
	}
</style>