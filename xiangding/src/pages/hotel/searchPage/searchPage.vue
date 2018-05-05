<template>
	<div class="box">
		<div class="content_body">
			<div class="top_box">
				<span @click="handleReturn" class="left_icon"><i class="fas fa-arrow-left"></i></span>
				<span class="search_">
				    <span ><i class="fas fa-search"></i></span>
					<span><input type="text" placeholder="酒店 / 品牌 / 位置" class=""></span>
				</span>
				<span class="select_text">搜索</span>
			</div>
			<div class="history">
				<span>历史记录</span>
				<span><i class="fas fa-trash-alt"></i></span>
			</div>
			<div class="text">
				<span>银河大酒店</span>
				<span class="border">维也纳大酒店</span>
			</div>
			<div class="text">
				<span>七天</span>
				<span class="border">如家</span>
			</div>
			<div class="line"></div>
			<div class="eye">
				<p class="look">
					<div>
						<span v-if="!look" @click="handleLook">
							<span><i class="fas fa-eye"></i></span>
							<span>查看推荐</span>
						</span>
					</div>
					<div v-if="look" class="recommend">
						<p class="title">
							<span>酒店推荐</span>
							<span @click="handleResetLook"><i class="fas fa-eye-slash"></i></span>
						</p>
						<p class="text_">
							<span>银河大酒店</span>
				     		<span class="border">汉庭大酒店</span>
						</p>
						<p class="text_">
							<span class="bottom">七天连锁酒店</span>
							<span class="border bottom">如家大酒店</span>
						</p>
					</div>
					
				</p>
				
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				look: false
			}
		},
		methods: {
			handleLook(){
				this.look = true
			},
			handleResetLook(){
				this.look = false
			},
			handleSearch(){
				this.isSearch = true
			},
			handleReturn(){
				this.$router.back()
			},
		}
	}
</script>
<style scoped lang="scss">
	@import '../../../common/css/common';
	.box{
		width: 100%;
		.content_body{
			font-size: rem(14px);
			.top_box{
				background-color: #43C122;
				// padding: 0 3%;
				display: flex;
				justify-content: center;
				align-items: center;
				padding: rem(7px) 0;
				.left_icon{
					color: #fff;
					font-size: rem(20px);
					width: 10%;
					margin-left: rem(10px);
					
				}
				.search_{
					background-color: #fff;
					border-radius: rem(5px);
					// padding: rem(7px) 16% rem(7px) 3%;
					padding: rem(4px) 0;
					width: 70%;
					span{
						&:first-child{
							font-size: rem(14px);
							padding: 0 5%;
							padding-right: 3%;
						}
						input{
							border: none;
							height: rem(24px);
							// line-height: rem(24px);
						}
					}
					
				}
				.select_text{
					font-size: rem(16px);
					color: #fff;
					width: 15%;
					text-align: center;


				}
			}
			.history{
				padding: rem(8px) 5%;
				border-bottom: #aaa solid rem(1px);

				span{
					&:first-child{
						font-size: rem(14px);
						padding-right: 77%;
					}
					&:last-child{
						font-size: rem(15px);
					}
				}
			}
			.text{
				display: flex;
				justify-content: center;
				span{
					// font-size: rem(14px);
					display: inline-block;
					width: 50%;
					border-right: #aaa solid rem(1px);
					border-bottom: #aaa solid rem(1px);
					padding: rem(10px) 4%;
				}
				.border{
					border-right: none;
					display: inline-block;
				}
			}
			.line{
				border: #EDEDED solid rem(7px);
			}
			.eye{
				border-top: #aaa solid rem(1px);
				padding-top: rem(13px);
				
				font-size: rem(14px);
				// span{
				// 	margin: 0 rem(2px);
				// }
				div{
					text-align: center;
					&.recommend{
						// border-bottom: #aaa solid rem(1px);
						// padding: rem(12px);
						.title{
							padding-bottom: rem(14px);
							span{

								&:first-child{
									margin-right: 67%;
								}	
								&:last-child{
									font-size: rem(16px);
								}
							}
						}
						
						.text_{
							display: flex;
							justify-content: center;
							text-align: left;
							border-top: #aaa solid rem(1px);
							span{
								display: inline-block;
								width: 50%;
								padding: rem(10px) 4%;
								border-right: #aaa solid rem(1px);
							}
							.border{
								border-right: none;
							}
							.bottom{
								border-bottom: #aaa solid rem(1px);
							}
						}
					}
					
				}
			}

		}
	}
</style>