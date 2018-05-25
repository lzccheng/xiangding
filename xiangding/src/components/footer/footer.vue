<template>
	<div class="box">
		<router-link class="route" tag='div' :to="Fn.getUrl({path:i.url})" v-for='(i ,index) in navItem':key='index'>
			<div @click='Nav(index)'>
				<p :class="{color:indexData==index}"><i :class="i.class"></i></p>
				<p :class="{color:indexData==index}">{{i.name}}</p>
			</div>
		</router-link>
	</div>
</template>
<script>
	import Fn from '../../common/js/common'
	let i = Fn.getKeyByI()
	let type = Fn.getType()
	export default {
		mounted(){
			var routeName = this.$route.name
			if(routeName === 'index'){
				this.indexData = 0
			}
			if(routeName === 'hotel'){
				this.indexData = 1
			}
			if(routeName === 'teamMeeting'){
				this.indexData = 2
			}
			if(routeName === 'enter'){
				this.indexData = 3
			}
			if(routeName === 'my'){
				this.indexData = 4
			}
		},
		data(){
			return {
				navItem:[
					{
						name: '酒店',
						class:'fa fa-home',
						url: '/'
					},
					// {
					// 	name: '酒店',
					// 	class:'fa fa-building',
					// 	url: '/hotel'
					// },
					{
						name: '团队会议',
						class:'fas fa-comment-dots',
						url: '/teamMeeting'
					},
					{
						name: '入驻',
						class:'fas fa-user-plus',
						url: '/enter'
					},
					{
						name: '我的',
						class:'fa fa-user',
						url: '/my'
					}
				],
				i: 3,
				indexData: 0
			}
		},
		methods:{
			Nav:function(index){
				this.indexData = index;
			}
		},
		watch: {
			$route(to,from){
				if(to.name === 'index'){
					this.indexData = 0
				}
				// if(to.name === 'hotel'){
				// 	this.indexData = 1
				// }
				if(to.name === 'teamMeeting'){
					this.indexData = 1
				}
				if(to.name === 'enter'){
					this.indexData = 2
				}
				if(to.name === 'my'){
					this.indexData = 3
				}

			}
		}
	}
</script>
<style scoped lang='scss'>
	@import '../../common/css/common.scss';
	.color{
		transition: color 0.3s;
		color: #43c122;
	}
	p{
		color: #aaa;
	}
	.box{
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		background-color: #fff;
		border-top: 0.5px solid #aaa;
		z-index: 99;
		.route{
			width: 25%;
			display: inline-block;
			height: rem(40px);
			padding: rem(8px) 0 rem(2px);
			margin: 0;

			p{
				padding: 0;
				margin: 0;
				text-align: center;
				font-weight: bold;
			}
		}

	}
</style>