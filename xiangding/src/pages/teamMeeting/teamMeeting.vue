<template>
	<div class="box">
		<div class="img">
			<img src="http://image.qmango.com/hotelimg/dl1210/150330/0.jpeg">
		</div>
		<div class="tab">
			<el-tabs v-model="activeName" @tab-click="handleClick">
				<el-tab-pane label="会议室" name="1">
					会议室
				</el-tab-pane>
		    	<el-tab-pane label="团房" name="2">团房</el-tab-pane>
		    	<el-tab-pane label="钟点房" name="3">钟点房</el-tab-pane>
		    
			 </el-tabs>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				activeName: '1'
			}
		},
		methods: {
			handleClick(tab, event) {
		        console.log(tab, event);
		      }
		}
	}
</script>
<style scoped lang="scss">
	@import '../../common/css/common.scss';
	.box{
		background-color: #ededed;
		width: 100%;
		.img{
			img{
				width: 100%;
				height: 200px;
			}
		}
		.tab{
			background-color: #fff;
		}
	}
</style>