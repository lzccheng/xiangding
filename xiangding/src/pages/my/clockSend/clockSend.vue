<template>
	<div class="box">
		<div class="body">
			<ul>
				<li class="item">
					<span class="name">房间类型:</span>
					<span class="select">
						<el-select v-model="select1" slot="prepend" placeholder="请选择">
					      <el-option label="商务大床房" value="1"></el-option>
					      <el-option label="总统房" value="2"></el-option>
					      <el-option label="特惠商务房" value="3"></el-option>
					    </el-select>
					  </span>
				</li>
				<li class="item">
					<span class="name">房间价格:</span>
					<span class="hide">请填写房间价格</span>
				</li>
				<li class="item">
					<span class="name">服务手机号:</span>
					<span class="hide_1">请输入团房负责人手机号码</span>
				</li>
				<li class="item">
					<span class="name">住房时间:</span>
					<span class="select">
						<el-select v-model="select2" slot="prepend" placeholder="请选择">
					      <el-option label="3小时" value="1"></el-option>
					      <el-option label="4小时" value="2"></el-option>
					      <el-option label="5小时" value="3"></el-option>
					    </el-select>
					  </span>
				</li>
				<li class="item">
					<span class="name">规格:</span>
					<span class="select_1">
						<el-select v-model="select3" slot="prepend" placeholder="请选择">
					      <el-option label="60平方" value="1"></el-option>
					      <el-option label="70平方" value="2"></el-option>
					      <el-option label="80平方" value="3"></el-option>
					    </el-select>
					</span>
				</li>
				<li class="item">
					<span class="name">床型:</span>
					<span class="select_1">
						<el-select v-model="select4" slot="prepend" placeholder="请选择">
					      <el-option label="1张" value="1"></el-option>
					      <el-option label="2张" value="2"></el-option>
					    </el-select>
					</span>
				</li>
				<li class="item">
					<span class="name">双人床:</span>
					<span class="select_2">
						<el-select v-model="select5" slot="prepend" placeholder="请选择">
						<el-option label="1.2米" value="1"></el-option>
					      <el-option label="1.3米" value="2"></el-option>
					      <el-option label="1.5米" value="3"></el-option>
					    </el-select>
					</span>
				</li>
				<li class="item">
					<span class="name">窗户:</span>
					<span class="select_1">
						<el-select v-model="select6" slot="prepend" placeholder="请选择">
					      <el-option label="是" value="1"></el-option>
					      <el-option label="否" value="2"></el-option>
					      <el-option label="部分有窗" value="3"></el-option>
					    </el-select>
					</span>
				</li>
				<li class="item_1">
				    <span class="name">房间照片:</span>
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
			      select1: '商务大床房',
			      select2: '3小时',
			      select3: '60平方',
			      select4: '1张',
			      select5: '1.2米',
			      select6: '是',
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
			padding: 0 rem(12px);
			.item{
				border-bottom: #e5e5e5 solid rem(1px);
				padding: rem(15px) 0;
				.name{
					font-size: rem(15px);
				}
				.select{
					margin-left: rem(40px);
				}
				.hide{
					margin-left: rem(40px);
					color: #e5e5e5;
				}
				.hide_1{
					margin-left: rem(25px);
					color: #e5e5e5;
				}
				.select_1{
					margin-left: rem(69px);
				}
				.select_2{
					margin-left: rem(53px);
				}
			}
			.item_1{
				padding: rem(15px) 0;
				.name{
					font-size: rem(15px);
				}
			}
			.photo{
				padding-bottom: rem(30px);
				.title_1{
					font-size: rem(17px);
				 }
				.icon{
					display: inline-block;
					border: #c9c9c9 solid rem(1px);
					padding: rem(32px) rem(35px);
					margin-left: rem(120px);
					border-radius: rem(9px);
					font-size: rem(27px);
					color: #43c122;
				 }
				.hide_1{
						font-size: rem(15px);
						color: #e5e5e5;
						margin-left: rem(30px);
					}
				.add_room{
					.icon_1{
						display: inline-block;
						color: #43c122;
						margin-left: 67%;
						margin-top: rem(10px);
					}
				}
			}
		}
		.send{
			padding: 10% 10%;
			button{
				@extend .green_btn;
			}
		}
	}
</style>