<template>
	<div class="box">
		<div class="header">
			<div class="img"></div>
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
		
		<div class="custom">

		</div>
		<div class="chat_1">
			<div class="back">
				<div class="icon">
				<i class="fab fa-fort-awesome-alt"></i>
				</div>
			</div>
			<div class="chat_2">
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
		height: 90%;
		background-color: #ebebeb;
		.header{
			height: rem(115px);
			background-color: #ffffff;
			margin-top: rem(40px);
			.img{
				width: 15%;
				height: rem(50px);
				background-color: #ebebeb;
				margin: rem(10px) 2%;
				float: left;
			}
			.text_box{
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
			bottom: rem(56px);
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
				width: 75%;
				height: rem(26px);
				border: #a0a1a4 solid rem(1px);
                margin-left: 4%;
                border-radius: rem(15px);
                .smile{
                	font-size: rem(20px);
                	float: right;
                	margin: rem(2px) 6%;
                }
			}
			.send_s{
				float: right;
				font-size: rem(16px);
				margin: rem(2px) 5%;
			}
		}
	}
</style>