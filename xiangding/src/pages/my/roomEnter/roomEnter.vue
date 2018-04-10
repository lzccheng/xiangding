<template>
	<div class="box">
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
		background-color: #e5e5e5;
		padding-top: rem(12px);
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
					margin-bottom: rem(4px);
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
					font-size: rem(16px);
					.text_1{
						margin-right: rem(90px);
					}
				}
				.text_2{
					font-size: rem(16px);
					.right{
						font-size: rem(15px);
						color: #a7a5a6;
						margin-left: rem(90px);
					}
				}
				
			}
		}
	}
</style>