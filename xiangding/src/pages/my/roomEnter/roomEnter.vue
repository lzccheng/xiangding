<template>
	<div class="box">
		<Header title="我的发布"/>
		<span class="delect" v-if="1==index_">删除</span>
		<div>
			<div v-if="0==index_">
			    <router-link tag="div" :to="{path: '/my/roomSend/roomSend',query:{title: '房间编辑'}} ">
					<div v-for="(i,index) in arr" class="item" :key="index">
						<div class="img">
							<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523425433535&di=f7d324b2c95bd6f203fb8741290c02e3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D41481487a2773912d02b8d219161e374%2Ff3d3572c11dfa9ec3d58042d69d0f703918fc192.jpg" alt="">
						 </div>
						<div class="con_box">
							<p class="room_name">特惠商务房</p>
							<p class="money_item">
								<span class="money_1">¥</span>
								<span class="money_2">299 </span>
								<span class="spec">/间晚</span>
							</p>
							<div class="text_small">
								<p class="text">
								  <span class="text_1">房间面积:&nbsp; 20平方</span>
								  <span class="icon" @click="handleCancel">
									  <el-switch
										  v-model="arr[index].active"
										  active-color="#43c122"
										  inactive-color="#a7a5a6">
									  </el-switch>
								  </span>
								</p>
								<p class="text_2">已住房数:&nbsp; 20间 <span class="right" @click="handleCancel">开启状态</span></p>
								<p class="text">可售房间:&nbsp; 20间</p>
							</div>
						</div>
					</div>
				</router-link>
			</div>
			<div v-if="1==index_">
				<div v-for="(i,index) in 5" class="item_delete" :key="index">
					<div>
						<input type="checkbox" :id="'_'+index">
					</div>
					<label :for="'_'+index">
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
					</label>
					
				</div>
			</div>
		</div>
		<div class="control">
			<div class="add" @click="onHandleChange(0)" >
			    <router-link tag="div" to="/my/roomSend/roomSend" class="icon_1"><i class="far fa-plus-square"></i></router-link>
				<router-link tag="span" :to="{path: '/my/roomSend/roomSend',query:{title: '房间发布' }}" >房间发布</router-link>
			</div>
			<div class="add" style="border-right: #e5e5e5 solid 1px;" v-if="index_ != 1" @click="onHandleChange(1)" >
			    <div class="icon_1"><i class="far fa-minus-square"></i></div>
				<span >删减房间</span>
			</div>
			<div class="add" v-if="index_ == 1" @click="onHandleChange(0)" >
			    <div class="icon_1"><i class="far fa-minus-square"></i></div>
				<span >完成</span>
			</div>
		</div>
		<div class="line_"></div>
		<div class="footer">
			<div class="room_box">
				<router-link tag="div" to="/my/roomEnter/meettingSend" class="room" >
					<div class="icon_3"><i class="far fa-plus-square"></i></div>
					<span>会议室发布</span>
				</router-link>
			</div>
			<div class="room_box">
				<router-link tag="div" to="/my/roomEnter/teamSend" class="room" >
					<div class="icon_3"><i class="far fa-plus-square"></i></div>
					<span>团房发布</span>
				</router-link>
			</div>
			<div class="room_box">
				<router-link tag="div" to="/my/roomEnter/clockSend" class="room left">
					<div class="icon_3"><i class="far fa-plus-square"></i></div>
					<span>钟点房</span>
				</router-link>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				arr: [
					{active: true},
					{active: true},
					{active: true},
					{active: true},
					{active: true},
					{active: true},
					{active: true},
					{active: true},
					{active: true},
					{active: true},
					{active: true}
				],
				value1: true,
	            value2: true,
	            index_: 0
			}
		},
		methods: {
			handleCancel(event){
				event.cancelBubble = true
			},
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
		padding-bottom: rem(150px);
		position: relative;
		padding-top: rem(20px);
		.delect{
			position: fixed;
			top: rem(13px);
			right: 6%;
			z-index: 1000;
			font-size: rem(15px);
			color: red;
		}
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
			padding: rem(15px) 0;
			background-color: #ffffff;
			border-bottom: #aaa solid rem(1px);
			margin-left: 2%;
			div{
				padding: 0 rem(5px) 0 rem(10px);
				&.img{
					width: 25%;
					max-width: rem(150px);
					height: rem(96px);
					display: inline-block;
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
							font-size: rem(14px);
						}
					}
				}
				
			}
			.con_box{
				display: inline-block;
				margin-top: rem(1px);
				width: 65%;
				height: rem(105px);
				float: right;
				position: relative;
				.room_name{
					font-size: rem(17px);
					font-weight: bold;
				}
				.money_item{
					display: inline-block;
					.money_1{
						color: #e51c23;
					  }
					.money_2{
						font-size: rem(16px);
						color: #e51c23;
					}
				}
				.text_small{
					padding-top: rem(5px);
					.text{
						.text_1{
							margin-right: 12%;
						}
						.icon{
							position: absolute;
							top: rem(49px);
							right: 4%;
						}
					}
					.text_2{
						.right{
							color: #a7a5a6;
							position: absolute;
							top: rem(75px);
							right: 5%;
						}
					}
				}
			}
		}
		.item_delete{
			display: flex;
			justify-content: spase-around;
			align-items: center;
			padding: rem(18px) 0;
			margin-left: rem(5px);
			border-bottom: #EDEDED solid rem(1px);
			label{
				display: flex;
				justify-content: spase-around;
			    align-items: center;
				padding: 0 rem(5px);
				.img{
					width: 25%;
					height: rem(80px);
					padding-right: 5%;
					img{
						width: 100%;
						height: 100%;
						border-radius: rem(12px);
					}
				}
				.text_box{

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
			bottom: rem(36px);
			left: 0;
			background-color: #e5e5e5;
			display: flex;
			border-bottom: #ffffff solid rem(1px);
			// justify-content: space-around;
			// align-items: center;
			width: 100%;
			height: rem(50px);
			.active{
				background-color: #43c122;
				border-radius: rem(28px);
				color: #ffffff;
			}
			.add{
				width: 50%;
				text-align: center;
				line-height: rem(50px);
				border-right: #ffffff solid rem(1px);
				.icon_1{
					display: inline-block;
					color: #43c122;
				}
			}
		}
		.line_{
			border: #ffffff solid rem(2px);
			position: fixed;
			bottom: rem(42px);
			width: 100%;
		}
		.footer{
			position: fixed;
			bottom: 0;
			left: 0;
			background-color: #ffffff;
			width: 100%;
			display: flex;
			justify-content: space-around;
			background-color: #e5e5e5;
			.room_box{
				width: 33%;
				
				.room{
					padding: rem(13px) 0;
					text-align: center;
					border-right: #ffffff solid rem(1px);
					.icon_3{
						display: inline-block;
						color: #43c122;
					}
				}
				.left{
					border-right: none;
				}
			}
			
		}
	}
</style>