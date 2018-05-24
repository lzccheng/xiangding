<template>
	<div class="box">
		<Header title="我的收入"/>
		<div class="money">
			<p>可提现</p>
			<p class="num">0.00</p>
		</div>
		<div class="money_detail">
			<router-link tag="p" :to="Fn.getUrl({path: '/enter/hotelManage/cashStatus'})">
				<span class="text">提现详情</span><br/>
				<span class="status">进行中的交易</span>
				<span class="icon float_right"><i class="fas fa-chevron-right"></i></span>
			</router-link>
		</div>
		<div class="line"></div>
		<div class="detail">
			<router-link tag="p" :to="Fn.getUrl({path: '/enter/hotelManage/myCard'})" class="card">
				<span>我的银行卡</span>
				<span class="float_right"><i class="fas fa-chevron-right"></i></span>
			</router-link>
			<router-link tag="p" :to="Fn.getUrl({path: '/enter/hotelManage/incomeList'})">
				<span>收支明细</span>
				<span class="float_right"><i class="fas fa-chevron-right"></i></span>
			</router-link>
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
	@import '../../../common/css/common.scss';
	.box{
		width: 100%;
		.money{
			background-color: #43C122;
			p{
				color: #fff;
				padding-top: rem(30px);
				text-align: center;
				&.num{
					font-size: rem(26px);
					font-weight: bold;
					padding-bottom: rem(30px);
				}
			}
		}
		.money_detail{
			p{
				padding: rem(10px);
				span{
					&.text{
						font-size: rem(14px);
					}
					&.status{
						color: #aaa;
					}
					&.icon{
						margin-top: rem(-10px);
					}
				}
			}
		}
		.line{
			height: rem(12px);
			background-color: #E2E2E4;
		}
		.float_right{
			float: right;
			color: #888;
		}
		.detail{
			p{
				padding: rem(10px);
				border-bottom: 1px solid #bbbbbb;
			}
			
		}
	}
</style>