<template>
	<div class="box">
		<div class="body">
			<ul>
				<li class="item">
					<span class="name">可售房数:</span>
					<span class="hide_1">请填写房间数量</span>
				</li>
				<li class="item">
					<span class="name">数量要求:</span>
					<span class="hide_1">请填写团房最低订购间数</span>
				</li>
				<li class="item">
					<span class="name">服务手机号:</span>
					<span class="hide_1">请输入团房负责人的手机号码</span>
				</li>
				<li class="item">
					<span class="name">早餐提供:</span>
					<span class="hide_1">是否提供早餐</span>
				</li>
				<li class="item">
					<span class="name">可住人数:</span>
					<span class="hide_1">请输入房间可住人数</span>
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
				    <div class="photo">
						<div class="icon">
							<i class="far fa-plus-square"></i>
						</div>
						<span class="hide_1">最多添加4张</span>
					</div>
				</li>
				<li class="item">
					<span class="name">房间配套设施:</span>
					<div class="check">
						<template>
						  <el-checkbox-group v-model="checkList">
						    <el-checkbox label="24小时热水"></el-checkbox>
						    <el-checkbox label="拖鞋"></el-checkbox>
						    <el-checkbox label="吹风机"></el-checkbox>
						    <el-checkbox label="电视机"></el-checkbox>
						    <el-checkbox label="有线无线宽带"></el-checkbox>
						  </el-checkbox-group>
						</template>
						<div class="add">
							<div class="add_more">
								<i class="far fa-plus-square"></i>
							</div>
							<span class="add_text">添加更多</span>
					    </div>
					</div>
				</li>
			</ul>
			<div class="add room">
				<div class="add_more">
					<i class="far fa-plus-square"></i>
				</div>
				<span class="add_text">添加房间</span>
		    </div>
			<div class="send">
				<button class="green_btn">发布</button>
			</div>
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
			      select3: '60平方',
			      select4: '1张',
			      select5: '1.2米',
			      select6: '是',
			      checkList: ['选中且禁用','24小时热水']
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
			padding: 0 rem(16px);
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
				.check{
					padding-top: rem(12px);
					padding-left: rem(40px);
					display: inline-block;
					
				}
			}
			.add{
				margin-left: rem(219px);
				margin-top: rem(27px);
				.add_more{
					display: inline-block;
					font-size: rem(16px);
					color: #43c122;
				}
				.add_text{
					font-size: rem(13px);
				}
			}
			.room{
				margin-top: rem(19px);
				margin-left: 67%;
				margin-bottom: rem(35px);
			}
			.item_1{
				border-bottom: #e5e5e5 solid rem(1px);
				padding: rem(15px) 0;
				.name{
					font-size: rem(15px);
				}
				.photo{
				padding-bottom: rem(4px);
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
			 }
			}
		}
		.send{
			padding: rem(10px) rem(20px);
		}
	}
</style>