<template>
	<div class="box">
		<Header title="提现详情"/>
		<div class="_content">
			<p v-for="(i,index) in arrItem" :key="index" class="item">
				<span class="status">{{i.status}}</span><br/>
				<span>{{i.time}}</span>
				<span class="price" :class="{success: 1==i.class,fail: 2 == i.class,img: 3 == i.class}">{{i.money}}</span>
			</p>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				arrItem: [
					{
						status: '提现成功',
						money: '-1000.00',
						time: '2018-03-10  08:24:05',
						class: 1
					},
					{
						status: '提现审核中',
						money: '-1200.00',
						time: '2018-03-10  08:24:05',
						class: 3
					},
					{
						status: '提现失败',
						money: '-5000.00',
						time: '2018-03-10  08:24:05',
						class: 2

					},
					{
						status: '提现成功',
						money: '-1000.00',
						time: '2018-03-10  08:24:05',
						class: 1
					},
					{
						status: '提现审核中',
						money: '-1200.00',
						time: '2018-03-10  08:24:05',
						class: 3
					},
					{
						status: '提现失败',
						money: '-5000.00',
						time: '2018-03-10  08:24:05',
						class: 2

					},
					{
						status: '提现成功',
						money: '-1000.00',
						time: '2018-03-10  08:24:05',
						class: 1
					},
					{
						status: '提现审核中',
						money: '-1200.00',
						time: '2018-03-10  08:24:05',
						class: 3
					},
					{
						status: '提现失败',
						money: '-5000.00',
						time: '2018-03-10  08:24:05',
						class: 2

					},
				]
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
		._content{
			p{
				padding: rem(10px) rem(15px);
				border-bottom: 1px solid #aaa;
				.status{
					font-weight: bold;
					font-size: rem(16px);
				}
				.price{
					float: right;
					font-size: rem(18px);
					font-weight: bold;
					margin-top: rem(-14px);
				}
				.success{
					color: #43C160;
				}
				.fail{
					color: #aaa;
				}
				.ing{
					color: #333;
				}
			}
		}
	}
</style>