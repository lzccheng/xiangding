<template>
	<div>
		hotelDetail
		<p>{{id}}</p>
		<star len='2' />
	</div>
</template>
<script>
	import star from '../../../components/star/star'
	export default {
		components: {
			star
		},
		data(){
			return {
				id:0,
				data:{},
			}
		},
		mounted:function(){
			this.getData()
		},
		methods:{
			getData:function(){
				let that = this
				this.$axios({url:'/api/hotelDetail',method:'get',data:{id:this.$route.query.id}}).then((res)=>{
					that.id = res.data.id?res.data.id:0
					this.data = res.data
				}).catch((err)=>{
					console.log(err)
				})
			}
		},
		watch: {
			'$route':function(to,from){
				if(to.name == 'hotelDetail'){
					this.getData()
				}
			}
		}
	}
</script>
<style scoped lang="scss"></style>