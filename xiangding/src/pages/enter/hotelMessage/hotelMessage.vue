<template>
	<div class="box">
		<Header title="酒店信息"/>
		<div class="body">
			<p>
			  <span class="message">基本信息</span>
			  <span class="numb">0/11</span>
			</p>
			<p>
			  <span>酒店名称:</span>
			  <span class="color_aaa"><input type="text" placeholder="请输入酒店名称"></span>
			</p>
			<p>
			  <span>酒店介绍:</span>
			  <span class="color_aaa"><input type="text" placeholder="请为您的酒店进行介绍"></span>
			</p>
			<p>
			  <span>电话号码:</span>
			  <span class="color_aaa"><input type="text" placeholder="请输入酒店的联系号码"></span>
			</p>
			<p>
			  <span>酒店区域:</span>
			  <span class="color_aaa">广东</span>
			</p>
			<p>
			  <span>酒店星级:</span>
			  <span class="color_aaa"> <el-rate v-model="value1"></el-rate></span>
			</p>
			<p>
			  <span>房间数量:</span>
			  <span class="color_aaa"><input type="text" placeholder="酒店房间总数"></span>
			</p>
			<p>
			  <span>会议室数量:</span>
			  <span class="color_aaa"><input type="text" placeholder="请输入会议室数量"></span>
			</p>
			<p>
			  <span>最多容纳人数:</span>
			  <span class="color_aaa"><input type="text" placeholder="请输入最多容纳人数"></span>
			</p>
			<p>
			  <span>酒店配套设施:</span>
			</p>
			<p>	 
		      <span>
			  	 <el-checkbox-group v-model="checkList">
				    <el-checkbox label="夜总会"></el-checkbox>
				    <el-checkbox label="酒吧"></el-checkbox>
				    <el-checkbox label="KTV"></el-checkbox>
				    <el-checkbox label="健身房"></el-checkbox>
				  </el-checkbox-group>
			  </span>
			  </p>
			  <p>
			    <span class="more_icon"><i class="far fa-plus-square"></i></span>
			  	<span class="more">添加更多</span>
			  </p>
			  <p class="box_add">
			  	<span class="icon_big">
			  	  <i class="far fa-plus-square"></i><br/>
			  	  <span class="text_add">添加酒店封面图</span>
			  	</span>
			  </p>
			 
		</div>
		 <p class="button">
		  	<span>确定修改</span>
		  </p>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				  checkList: ['复选框 A'],
				  value1: null
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
		.body{
			padding: rem(8px) 0 rem(8px) 4%;
			p{
				position: relative;
				margin: rem(13px) 0;
				.message{
					color: #aaa;
				}
				.color_aaa{
					float: right;
					input{
						width: 37%;
						position: absolute;
						right: 0;
						bottom: 0;
						border: none;
						height: rem(20px);
						&::-webkit-input-placeholder { 
						    color:    #aaa;
						}
						&:-moz-placeholder { 
						    color:    #aaa;
						}
						&::-moz-placeholder { 
						    color:    #aaa;
						}
						&:-ms-input-placeholder { 
						    color:    #aaa;
						}
					}
				}
				.more_icon{
					color: #43c122;
				}
				&.box_add{
					padding: rem(30px) 36%;
					border: #aaa solid rem(1px);
					display: inline-block;
					text-align: center;
					border-radius: rem(5px);
					margin: auto;
					.icon_big{
						color: #43c122;
						font-size: rem(60px);
						.text_add{
							color: #000;
							font-size: rem(12px);
						}
					}
				}
				
				
			}
		}
		.button{
			background-color: #43c122;
			text-align: center;
			padding: rem(13px) 0;
			border-radius: rem(5px);
			margin-top: rem(30px);
			span{
				color: #ffffff;
				font-size: rem(14px);
			}
		}
	}
</style>