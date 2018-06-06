<template>
	<div class="box">
		<Header title="我的团队"/>
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
				<div v-if="0==index_">
					<div class="VIP" v-for="(i,index) in itemArr1" :key="index">
						<div class="image">
							<img :src="i.avatar" alt="">
						</div>
						<div>
							<p>昵称： {{i.nickname}}</p>
							<p>消费金额： {{i.order_price}}</p>
						</div>
					</div>
				</div>
				<div v-if="1==index_">
					<div class="VIP" v-for="(i,index) in itemArr2" :key="index">
						<div class="image">
							<img :src="i.avatar" alt="">
						</div>
						<div>
							<p>昵称： {{i.nickname}}</p>
							<p>消费金额： {{i.order_price}}</p>
						</div>
					</div>
				</div>
				<div v-if="2==index_">
					<div class="VIP" v-for="(i,index) in itemArr3" :key="index">
						<div class="image">
							<img :src="i.avatar" alt="">
						</div>
						<div>
							<p>昵称： {{i.nickname}}</p>
							<p>消费金额： {{i.order_price}}</p>
						</div>
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
			this.getData(1)
			this.getData(2)
			this.getData(3)
		},
		data(){
			return {
				arrItem: [
					' VIP1 ',
					' VIP2 ',
					' VIP3 '
				],
				index_: 0,
				itemArr1: [],
				itemArr2: [],
				itemArr3: [],
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
			getData(agant){
				let that = this
				let page = 1
				let arr = that['itemArr'+agant]
				let dd = (agant)=>{
					this.Http.get({route:'member.member.getMyAgentData_v2',params:{relationLevel:agant,page:page}}).then(res=>{
						that['itemArr'+agant] = [...that['itemArr'+agant],...res.data.data.data.reverse()]
						if(that['itemArr'+agant].length%10 === 0 && arr.length !== that['itemArr'+agant].length){
							page++
							arr = that['itemArr'+agant]
							dd(agant)
						}
					})
				}
				dd(agant)
			}
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
	@import "../../../common/css/common.scss";
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
			div{
				.VIP{
					display: flex;
					align-items: center;
					border-bottom: #EDEDED solid rem(1px);
					.image{
						padding: rem(10px) rem(10px);
						img{
							width: rem(60px);
							height: rem(60px);
							border: none;
							border-radius: 100%;
						}
					}
				}
			}
		}
	}
</style>


