<template>
	<div class="box">
	<Header title="在线客服"/>
		<div class="header">
			<div class="img">
				<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523425433535&di=f7d324b2c95bd6f203fb8741290c02e3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D41481487a2773912d02b8d219161e374%2Ff3d3572c11dfa9ec3d58042d69d0f703918fc192.jpg" alt="">
			</div>
			<div class="text_box">
				<p class="text">
				   <span>银河大酒店商务大床房20间以上为团房</span>
				</p>
				<p class="money">
				   <span>¥320-340</span>
				</p>
				<div class="send"><span>发送链接</span></div>
			</div>
		</div>
		<div class="chat_1">
			<div class="back">
				<div class="icon">
				<i class="fab fa-fort-awesome-alt"></i>
				</div>
			</div>
			<div class="chat_2">
				<input type="text">
			  <div class="smile">
			     <i class="far fa-smile"></i>
			  </div>
			</div>
			 <p class="send_s"><span>发送</span></p>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {

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
		height: 100%;
		background-color: #ebebeb;
		.header{
			height: rem(115px);
			background-color: #ffffff;
			margin-top: rem(40px);
			display: flex;
			// .img{
			// 	width: 15%;
			// 	height: rem(50px);
			// 	background-color: #ebebeb;
			// 	margin: rem(10px) 2%;
			// 	float: left;
			// }
			.img{
				width: 15%;
				// max-width: rem(150px);
				height: rem(50px);
				// display: inline-block;
				margin: rem(10px) 2%;
				img{
					width: 100%;
					height: 100%;
				}
			}
			.text_box{
				// display: inline-block;
				font-size: rem(15px);
				padding-top: rem(10px);
				.money{
					color: #ffa500;
					padding-top: rem(10px);
			}
			}
			.send{
				text-align: center;
				margin-top: rem(20px);
				span{
					padding: rem(3px) rem(10px);
					border: #ffa500 solid rem(1px);
					font-size: rem(14px);
					border-radius: rem(20px);
					color: #ffa500;
				}
			}
		}
		.chat_1{
			width: 100%;
			height: rem(35px);
			background-color: #ffffff;
			padding-top: rem(6px);
			border: #a0a1a4 solid rem(1px);
			position: fixed;
			bottom: 0;
			left: 0;
			.back{
				.icon{
					font-size: rem(23px);
					color: #43c122;
					position: absolute;
					bottom: rem(50px);
					right: rem(10px);
				}
			}
			.chat_2{
				display: inline-block;
				width: 82%;
				height: rem(26px);
				line-height: rem(26px);
				border: #a0a1a4 solid rem(1px);
                margin-left: 4%;
                border-radius: rem(15px);
                .smile{
                	font-size: rem(19px);
                	float: right;
                	line-height: rem(28px);
                	margin-right: rem(5px);
                }
                input{
                	width: 86%;
                	margin-left: rem(8px);
                	border: none;
                }
			}
			.send_s{
				float: right;
				font-size: rem(16px);
				margin: rem(2px) 2%;
			}
		}
	}
</style>