<template>
	<div class="box">
		<Header title="评论管理"/>
		<div>
			<div class="nav">
				<div class="tab" ref="tab"> 
					<div v-for="(i,index) in arrItem" :key='index' @click="handleClick(index,$event)"> 
						<span>{{i}}</span>
					</div>
				</div>
				<div class="line" ref="_line"></div>
			</div>
			
			<div class="show">
				<div v-if="0==index_" class="show_box">
					<p class="room">商务大床房</p>
					<p class="title">
						<span>小猪佩奇</span>
						<span>2018-06-05  12:30</span>
					</p>
					<div class="text">
						<span>环境优美，地理位置好，交通方便，房间舒适卫生，服务人员很热情。</span>
						<span class="chat"><i class="fas fa-comment-alt"></i>
						</span>
					</div>
				</div>
				<div v-if="1==index_" class="show_box">
					<p class="room">商务大床房</p>
					<p class="title">
						<span>小猪佩奇</span>
						<span>2018-06-05  12:30</span>
					</p>
					<div class="text_1">
						<span>环境优美，地理位置好，交通方便，房间舒适卫生，服务人员很热情。</span>
						<p class="back">
						    <span>
						        佩奇酒店客服： 你说的我都懂
						    </span>
						    <span class="c chat">
						    	<i class="fas fa-comment-alt"></i>
						    </span>
						</p>
					</div>
					
				</div>
				
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		mounted(){
			this._lineLeft()
			
		},
		data(){
			return {
				arrItem: [
					' 未回复 ',
					' 已回复 ',
				],
				index_: 0,
			}
		},
		methods: {
			handleClick(i,e){
				var e = e || event
				this.$refs._line.style.left = e.target.offsetLeft + 'px'
				this.$refs._line.style.width =  e.target.offsetWidth +'px'
				this.index_ = i
			},
			_lineLeft(){
				this.index_ = this.$route.query.status || 0
				this.$refs._line.style.left = this.$refs.tab.children[this.index_].offsetLeft + 'px'
				this.$refs._line.style.width = this.$refs.tab.children[this.index_].offsetWidth + 'px'
			},
		},
		watch: {
			'$route'(to,from){
				if(to.name === 'order'){
					this._lineLeft()
				}
			}
		}
	}
</script>
<style scoped lang="scss">
	 @import '../../../common/css/common.scss';
	.box{
		width: 100%;
		padding-top: rem(20px);
		font-size: rem(14px);
		.nav{
			width: 100%;
			position: fixed;
			left: 0;
			top: rem(48px);
			div{

				&.active{
				}
				&.tab{
					display: flex;
					justify-content: space-around;
					align-items: center;
					background-color: #fff;
					border-bottom: rem(1px) solid #EDEDED;
					div{
						padding: rem(10px) 0;
					}
				}
				&.line{
					width: rem(40px);
					height: rem(5px);
					background-color: #43c122;
					position: absolute;
					left: 0;
					bottom: 0; 
					border-radius: rem(5px);
					transition: all 0.5s;
				}
			}
		}
		.show{
			margin-top: rem(50px);
			.show_box{
				padding: 0 4%;
				p{
					&.room{
						padding: rem(5px) 0;
					    border-bottom: #EDEDED solid rem(1px);
					}
				}
					p{
						&.title{
							display: flex;
							justify-content: space-between;
							padding: rem(10px) 0;
							span{
								&:last-child{
									color: #aaa;
								}
							}
						}
					}
				.text{
					border-bottom: #EDEDED solid rem(1px);
					padding: rem(30px) 0;
					padding-top: 0;
					position: relative;
				}
				span{
					&.chat{
						position: absolute;
						bottom: rem(7px);
						right: 3%;
						color: #43c122;
						font-size: rem(16px);
					}
				}
				.text_1{
					border-bottom: #EDEDED solid rem(1px);
					.back{
						display: flex;
						justify-content: space-between;
						padding: rem(10px) 0;
						.c{
							padding-right: 3%;
						}
					}
				}
			}
		}
	}
</style>



