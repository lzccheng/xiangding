<template>
	<div class="box">
		<div class="img">
			<div class="image">
				<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522736413424&di=852254dd751b973f30bc1945dadb1565&imgtype=0&src=http%3A%2F%2Fwww.ytlhqz.com%2Fmanage%2Fupload%2F%25E4%25B8%25AD%25E5%259B%25BD%25E5%25BB%25BA%25E8%25AE%25BE%25E9%2593%25B6%25E8%25A1%258C.jpg">
			</div>
			<p class="text"><span>卡号：</span><span>**** **** **** 1234</span> <span class="gt">&gt;</span></p>
		</div>
		<div class="cash">
			<p><span>提现金额：</span><input type="text" placeholder="可提现全额(元)80.00" name=""><span class="text">全部提现</span></p>
			<p><span>提现手续费：20%</span><span class="right">24小时内到账</span></p>
		</div>
		<div class="tip">
			<p><span><i class="fas fa-question-circle"></i></span><span>提现规则</span></p>
		</div>
		<div class="btn">
			<button>提现</button>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {

			}
		}
	}
</script>
<style scoped lang="scss">
	@import '../../../common/css/common';
	.box{
		width: 100%;
		height: 90%;
		background-color: #ebebeb;
		.img{
			margin: rem(15px) rem(15px);
			background-color: #fff;
			.image{
				padding: rem(15px) rem(20px);
				img{
					width: 100%;
					height: rem(80px);
				}
			}
			.text{
				padding-bottom: rem(10px);
				color: #aaa;
				text-align: center;
				.gt{
					display: inline-block;
					margin-left:rem(150px);
					font-size: rem(18px);
				}
			}
		}
		.cash{
			background-color: #fff;
			padding: rem(25px) rem(10px) rem(10px);
			p{
				&:first-child{
					span{
						&:first-child{
							font-size: rem(14px);
							font-weight: bold;
						}
					}
					input{
						border: none;
						border-bottom: 1px solid #aaa;
						padding: rem(3px) 0;
					}
					.text{
						color: #43c122;
						display: inline-block;
						margin-left: 15%;
					}
				}
				&:nth-child(2){
					margin-top: rem(20px);
					color: #aaa;
					.right{
						float: right;
					}
				}
			}
		}
		.tip{
			padding: rem(10px) rem(25px);
			p{
				span{
					&:first-child{
						color: #43c122;
						font-size: rem(16px);
					}
					&:nth-child(2){
						color: #aaa;
						display: inline-block;
						padding: rem(2px) rem(10px);
						position: relative;
						left: 0;
						top: rem(-3px);
					}
				}
			}
		}
		.btn{
			text-align: center;
			button{
				border: none;
				color: #fff;
				padding: rem(10px) 40%;
				background-color: #43c122;
				border-radius: rem(5px);
			}
		}
	}
</style>