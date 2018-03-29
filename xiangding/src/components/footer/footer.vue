<template>
	<div class="box">
		<router-link class="route" tag='div' :to='i.url' v-for='(i ,index) in navItem':key='index'>
			<div @click='Nav(index)'>
				<p :class="{color:indexData==index}"><i :class="i.class"></i></p>
				<p :class="{color:indexData==index}">{{i.name}}</p>
			</div>
		</router-link>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				navItem:[
					{
						name: '首页',
						class:'fa fa-home',
						url: '/'
					},
					{
						name: '酒店',
						class:'fa fa-building',
						url: '/hotel'
					},
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
				indexData: 0
			}
		},
		methods:{
			Nav:function(index){
				this.indexData = index;
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

		.route{
			width: 20%;
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