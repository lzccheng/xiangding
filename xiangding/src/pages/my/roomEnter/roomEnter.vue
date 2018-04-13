<template>
	<div class="box">
		<Header title="我的发布"/>
		<div>
			<div v-if="0==index_">
				<div v-for="(i,index) in 20" class="item" :key=index>
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
						<p class="text">可售房间: 20,添加时间2018-1-12</p>
					</div>
				</div>
			</div>
			<div v-if="1==index_">
				<div v-for="(i,index) in 5" class="item_delete" key=index>
					<div>
						<input type="checkbox">
					</div>
					<div class="img">
						<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523425433535&di=f7d324b2c95bd6f203fb8741290c02e3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D41481487a2773912d02b8d219161e374%2Ff3d3572c11dfa9ec3d58042d69d0f703918fc192.jpg" alt="">
					</div>
					<div class="text_box">
						<p class="name_1">特惠商务房</p>
						<p class="name_2">
							<span>¥</span>
							<span class="name_money">299元</span>
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="control">
			<div class="add" @click="onHandleChange(0)" :class="{active:(0==index_)}">
			    <div class="icon_1"><i class="far fa-plus-square"></i></div>
				<span>房间发布</span>
			</div>
			<div class="add" @click="onHandleChange(1)" :class="{active:(1==index_)}">
			    <div class="icon_1"><i class="far fa-minus-square"></i></div>
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
	            value2: true,
	            index_: 0
			}
		},
		methods: {
			onHandleChange(i){
				this.index_ = i
			}
		}
	}
</script>
<style scoped lang="scss">
	@import "../../../common/css/common.scss";
	.box{
		width: 100%;
		padding-bottom: rem(185px);
		.header{
			padding: rem(15px) 10%;
			font-size: rem(22px);
			background-color: #ffffff;
			border-bottom: #aaaaaa solid rem(1px);
			text-align: center;
			span{
				&:first-child{
					float: left;
				}
			}
		}
		.item{
			background-color: #ffffff;
			padding: rem(10px) 0 rem(25px) 2%;
			.img{
				display: inline-block;
				width: 25%;
				height: rem(98px);
				background-color: #e5e5e5;
				border-radius: rem(12px);
			}
			.con_box{
				display: inline-block;
				margin-top: rem(1px);
				width: 72%;
				height: rem(105px);
				float: right;
				.room_name{
					font-size: rem(17px);
					margin-bottom: rem(3px);
					font-weight: bold;
				}
				.money_1{
					color: #e51c23;
				  }
				.money_2{
					font-size: rem(23px);
					color: #e51c23;
				}
				.spec{
					color: #a7a5a6;
					margin-right: 1%;
				}
				.text{
					.text_1{
						margin-right: 12%;
					}
				}
				.text_2{
					.right{
						color: #a7a5a6;
						margin-left: 13%;
					}
				}
			}
		}
		.item_delete{
			display: flex;
			justify-content: spase-around;
			align-items: center;
			margin-bottom: rem(25px);
			div{
				padding: 0 rem(5px);
				&.img{
					width: 25%;
					height: rem(80px);
					img{
						width: 100%;
						height: 100%;
						border-radius: rem(12px);
					}
				}
				&.text_box{
					.name_1{
						font-size: rem(17px);
						margin-bottom: rem(5px);
						font-weight: bold;
					}
					.name_2{
						span{
							color: #e73c46;
						}
						.name_money{
							font-size: rem(16px);
						}
					}
				}
				
			}

		}
		.control{
			position: fixed;
			bottom: rem(40px);
			background-color: #e5e5e5;
			display: flex;
			justify-content: space-around;
			align-items: center;
			width: 100%;
			height: rem(50px);
			.active{
				background-color: #43c122;
				border-radius: rem(28px);
				color: #ffffff;
			}
			.add{
				
				width: 50%;
				height: 100%;
				text-align: center;
				line-height: rem(50px);
				.icon_1{
					display: inline-block;
				}
			}
		}
		.footer{
			position: fixed;
			bottom: 0;
			background-color: #ffffff;
			width: 100%;
			display: flex;
			justify-content: space-around;
			background-color: #e5e5e5;
			.room{
				display: inline-block;
				padding: rem(10px) 0;
				.icon_3{
					display: inline-block;
					color: #43c122;
				}
			}
		}
	}
</style>