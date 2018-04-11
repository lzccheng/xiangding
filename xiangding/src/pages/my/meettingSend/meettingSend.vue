<template>
	<div class="box">
		<div class="body">
			<ul>
				<li class="item">
				   <span class="title">会议室价格:</span>
				   <span class="hide">请填写会议室价格</span>
				</li>
				<li class="item">
					<span class="title">会议室数量:</span>
					<span class="hide">填写酒店会议室数量</span>
				</li>
				<li class="item">
					<span class="title">会议室面积:</span>
					<span class="select">
						<el-select v-model="select1" slot="prepend" placeholder="请选择">
					      <el-option label="60平方" value="1"></el-option>
					      <el-option label="70平方" value="2"></el-option>
					      <el-option label="80平方" value="3"></el-option>
					    </el-select>
					</span>
				</li>
				<li class="item">
					<span class="title">服务手机号:</span>
					<span class="hide">请输入团房负责人的手机号码</span>
				</li>
				<li class="item">
					<span class="title">可容纳人数:</span>
					<span class="hide">请填写会议室大约可容纳人数</span>
				</li>
				<li class="item">
				    <span class="title">房间照片:</span>
				</li>
			</ul>
			<div class="photo">
				<div class="icon">
					<i class="far fa-plus-square"></i>
				</div>
				<span class="hide_1">最多添加4张</span>
					<div class="add_room">
						<div class="icon_1"><i class="far fa-plus-square"></i></div>
				        <span class="add_text">添加房间</span>
				    </div>
			</div>
		</div>
		<div class="send">
			<button>发布</button>
		</div>
		
	</div>
</template>
<script>
	export default {
		data(){
			return {
				  input3: '',
			      input4: '',
			      input5: '',
			      select1: '60平方',
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
		height: 90%;
		background-color: #e5e5e5;
		.body{
			background-color: #ffffff;
			padding: rem(11px) rem(10px);
			margin-top: rem(10px);
			.item{
				margin-bottom: rem(15px);
				.title{
					text-align: center;
				}
				.hide{
					margin-left: rem(12px);
					color: #e5e5e5;
				}
				.select{
					margin-left: 5%;
				}
			}
			.photo{
				padding-bottom: rem(30px);
				.title_1{
				 }
				.icon{
					display: inline-block;
					border: #c9c9c9 solid rem(1px);
					padding: rem(32px) rem(35px);
					margin-left: rem(120px);
					border-radius: rem(9px);
					color: #43c122;
				 }
				.hide_1{
						color: #e5e5e5;
						margin-left: rem(30px);
					}
				.add_room{
					.icon_1{
						display: inline-block;
						color: #43c122;
						margin-left: 70%;
						margin-top: rem(10px);
					}
				}
			}
		}
		.send{
			padding: 10% 10%;
			button{
				width: 100%;
				padding: rem(10px);
				border-radius: rem(5px);
				color: #fff;
				border: none;
				background-color: #43c122;
			}
		}
		
	}
</style>