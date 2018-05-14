<template>
	<div class="box" ref="_alert"  @click="handleCancel">
		<div class="alert" @click="handleBubble">
			<p class="tip_2"  v-show="status === '1'">{{title_2}}</p>
			<p class="tip_3"  v-show="status === '0'">{{title_3}}</p>
			<p class="tip_1" v-html="innerHtml">
				
			</p>
			<p class="choice" v-show="status === '0'">
				<span @click="handleCancel">取消</span>
				<span>确定</span>
			</p>
			<p class="know" v-show="status === '1'">
				<span>我知道了</span>
			</p>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			innerHtml: {
				type: String,
				default: ''
			},
			status: {
				type: String,
				default: ''
			},
			title_2: {
				type: String,
				default: ''
			},
			title_3: {
				type: String,
				default: ''
			},
		},
		mounted(){
			this.$refs._alert.style.width = window.innerWidth + 'px'
			this.$refs._alert.style.height = window.innerHeight + 'px'
		},
		data(){
			return {

			}
		},
		methods: {
			handleCancel(){
				this.$emit('handleCancel',{aa:88})
			},
			handleBubble(e){
				var e = e|| event
				e.cancelBubble = true
			}
		}
	}
</script>
<style scoped lang="scss">
	@import '../../common/css/common';
	.box{
		position: fixed;
		top: 0;
		left: 0;
		background-color: rgba(0,0,0,0.4); 
		z-index: 9999999;
		.alert{
			width: 80%;
			background-color: #ffffff;
			position: absolute;
			top: rem(200px);
			left: 10%;
			text-align: center;
			border-radius: rem(8px);
			// padding-bottom: rem(8px);
			p{
				padding-top: rem(15px);
				
				&:first-child{
					font-weight: bold;
					font-size: rem(16px);
				}
				&.choice{
					display: flex;
					justify-content: space-around;
					span{
						&:last-child{
							color: #43c122;
						}
					}
				}
				&.know{
					padding: rem(16px) 5% 0;
					margin-bottom: rem(10px);	
					span{
						display: inline-block;
						width: 98%;
						border-radius: rem(5px);
						background-color: #43c122;
						color: #fff;
						font-size: rem(14px);
					}
				}
				&.tip_1{
					width: 87%;
					margin: 0 auto;
					// border: #aaa solid rem(1px);
				}
				&.tip_3{
					font-size: rem(14px);
					font-weight: bold;
				}
				span{
					border-top: #aaa solid rem(1px);
					width: 50%;
					padding: rem(10px) 0;
					&:first-child{
						border-right: #aaa solid rem(1px);
					}
				}
			}
		}
	}
</style>