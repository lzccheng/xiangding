<template>
	<div class="box">
		<div class="top_box">
			<div class="header">
				<span @click="onHandleBack" class="icon"><i class="fas fa-arrow-left"></i></span>
				<span class="title">{{agant}}级代理</span>
			</div>
			<div class="search">
				<div class="search_">
				    <span><input type="text" placeholder="请输入您要搜索的名称"></span>
					<span class="icon"><i class="fas fa-search"></i></span>
					
				</div>
			</div>
		</div>
		<div class="agant">
			<ul>
				<li v-for="(i,index) in arrItem" :key="index">
					<div class="img">
						<img :src="i.avatar" alt="">
					</div>
					<div class="msg">
						<div>昵称：{{i.nickname}}</div>
						<!-- <div>粉丝数量：<span class="text">256455</span></div>
						<div>收入：<span class="text">4887</span></div> -->
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	let agant = {
		'1': '一',
		'2': '二',
		'3': '三',
	}
	export default {
		mounted(){
			let that = this
			this.agant = agant[this.$route.query.agant]
			this.agantLevel = this.$route.query.agant
			this.getAgent()
		},
		data(){
			return {
				agant: '',
				agantLevel: 0,
				arrItem: [

				]
			}
		},
		methods: {
			onHandleBack(){
				this.$router.go(-1)
			},
			getAgent(){
				let that = this
				that.arrItem = []
				const loading = that.$loading({
		            lock: true,
		            text: '加载中..........',
		            background: 'rgba(0, 0, 0, 0.7)'
		          })
				this.$axios.get('?i=3&c=entry&do=shop&m=yun_shop&route=member.member.getMyAgentData_v2&relationLevel='+this.agantLevel).then((res)=>{
					loading.close()
					if(res.data.data.data.length){
						for(let i=0;i<res.data.data.data.length;i++){
							let item = {
								avatar: res.data.data.data[i].avatar,
								nickname: res.data.data.data[i].nickname
							}
							that.arrItem.push(item)
						}
					}
				},()=>{
					loading.close()
				})
			}
		},
		watch: {
			'$route':function(to,from){
				if(to.name == 'agantDetailt'){
					this.agant = agant[this.$route.query.agant]
					this.agantLevel = this.$route.query.agant
					this.getAgent()
				}
			}
		}

	}
</script>
<style scoped lang="scss">
	@import '../../../common/css/common';
	.box{
		width: 100%;
		padding-top: rem(90px);
		.top_box{
			width: 100%;
			position: fixed;
			background-color: #ffffff;
			top: 0;
			left: 0;
			z-index: 999;
			.header{
				span{
					display: inline-block;
					padding: rem(15px) rem(15px);
					font-size: rem(18px);
					&.title{
						display: inline-block;
						text-align: center;
						width: 70%;
					}
					&.icon{
						float: left;
						
					}
				}
			}
			.search{
				background-color: #43c122;
				padding: rem(5px) rem(10px);
				.search_{
					background-color: #fff;
					padding: rem(3px) rem(15px);
					border-radius: rem(5px);
					span{
						&.icon{
							padding:rem(2px) 0;
							padding-left: 5%;
						}
						input{
							border: none;
							width: 82%;
							height: rem(18px);
							padding: rem(3px) rem(8px);
							&:placeholder{
								color: #aaa;
							}
						}
					}
				}
			}
		}
		.agant{
			padding: rem(5px) rem(10px);
			ul{
				li{
					display: flex;
					flex-direction: row;
					align-items: center;
					border-bottom: 1px solid #ccc;
					.img{
						padding: rem(10px) rem(10px);
						img{
							width: rem(50px);
							height: rem(50px);
							border: none;
							border-radius: 100%;
						}
					}
					.msg{
						padding-left: rem(10px);
						.text{
							color: #aaa;
						}
					}
				}
			}
		}
	}
</style>