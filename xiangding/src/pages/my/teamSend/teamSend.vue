<template>
	<div class="box">
		<Header title="团房发布" />
		<div class="body">
			<ul>
				<li class="item">
					<span class="name">房间类型:</span>
					<span class="select_1">
						<el-select v-model="select2" slot="prepend" placeholder="请选择">
					      <el-option label="免费取消" value="1"></el-option>
					      <el-option label="总统房" value="2"></el-option>
					      <el-option label="特惠商务房" value="3"></el-option>
					    </el-select>
					</span>
				</li>
				<li class="item">
					<span class="name">房间价格:</span>
					<span class="hide_1"><input type="text" placeholder="请填写房间的价格"></span>
				</li>
				<li class="item">
					<span class="name">可售房数:</span>
					<span class="hide_1"><input type="text" placeholder="请填写房间数量"></span>
				</li>
				<li class="item">
					<span class="name">数量要求:</span>
					<span class="hide_1"><input type="text" placeholder="请填写团房最低订购间数"></span>
				</li>
				<li class="item">
					<span class="name">服务手机号:</span>
					<span class="hide_1"><input type="text" placeholder="请输入团房负责人的手机号码"></span>
				</li>
				<li class="item">
					<span class="name">早餐提供:</span>
					<span class="hide_1"><input type="text" placeholder="是否提供早餐"></span>
				</li>
				<li class="item">
					<span class="name">可住人数:</span>
					<span class="hide_1"><input type="text" placeholder="请输入可住人数"></span>
				</li>
				<li class="item">
					<span class="name">取消政策:</span>
					<span class="select_1">
						<el-select v-model="select3" slot="prepend" placeholder="请选择">
					      <el-option label="免费取消" value="1"></el-option>
					      <el-option label="付费取消-扣除10%费用" value="2"></el-option>
					      <el-option label="付费取消-扣除20%费用" value="3"></el-option>
					    </el-select>
					</span>
				</li>
				<li class="item">
					<span class="name">规格:</span>
					<div class="select_1">
						<el-select v-model="select1" slot="prepend" placeholder="请选择">
					      <el-option label="60平方" value="1"></el-option>
					      <el-option label="70平方" value="2"></el-option>
					      <el-option label="80平方" value="3"></el-option>
					    </el-select>
					</div>
				</li>
				<li class="item">
					<span class="name">床型:</span>
					<div class="select_1">
						<el-select v-model="select4" slot="prepend" placeholder="请选择">
					      <el-option label="1张" value="1"></el-option>
					      <el-option label="2张" value="2"></el-option>
					    </el-select>
					</div>
				</li>
				<li class="item">
					<span class="name">双人床:</span>
					<div class="select_1">
						<el-select v-model="select5" slot="prepend" placeholder="请选择">
						<el-option label="1.2" value="1"></el-option>
					      <el-option label="1.3" value="2"></el-option>
					      <el-option label="1.5" value="3"></el-option>
					    </el-select>
					</div>
				</li>
				<li class="item">
					<span class="name">窗户:</span>
					<div class="select_1">
						<el-select v-model="select6" slot="prepend" placeholder="请选择">
					      <el-option label="是" value="1"></el-option>
					      <el-option label="否" value="2"></el-option>
					      <el-option label="部分有窗" value="3"></el-option>
					    </el-select>
					</div>
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
						  <el-checkbox-group v-model="checkList">
						    <el-checkbox label="24小时热水"></el-checkbox>
						    <el-checkbox label="拖鞋"></el-checkbox>
						    <el-checkbox label="吹风机"></el-checkbox>
						    <el-checkbox label="电视机"></el-checkbox>
						    <el-checkbox label="有线无线宽带"></el-checkbox>
						  </el-checkbox-group>
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
			      select1: '60平方',
			      select2: '商务大床房',
			      select3: '免费取消',
			      select4: '1张',
			      select5: '1.2',
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
				position: relative;
				border-bottom: #e5e5e5 solid rem(1px);
				padding: rem(15px) 0;
				.select{
					margin-left: 5%;
				}
				.hide{
					margin-left: 2%;
					color: #e5e5e5;
				}
				.hide_1{
					color: #e5e5e5;
					float: right;
					input{
						width: 73%;
						position: absolute;
						right: 0;
						bottom: rem(15px);
						border: none;
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
				.select_1{
					display: inline-block;
					margin-left: 2%;
				}
				.check{
					padding-top: rem(12px);
					padding-left: rem(40px);
					display: inline-block;
				}
			}
			.add{
				margin-left: 60%;
				margin-top: rem(27px);
				.add_more{
					display: inline-block;
					color: #43c122;
				}
				.add_text{
					font-size: rem(13px);
				}
			}
			.room{
				margin-top: rem(19px);
				margin-left: 64%;
				margin-bottom: rem(35px);
			}
			.item_1{
				border-bottom: #e5e5e5 solid rem(1px);
				padding: rem(15px) 0;
				.photo{
				padding-bottom: rem(4px);
				.icon{
					display: inline-block;
					border: #c9c9c9 solid rem(1px);
					padding: rem(32px) rem(35px);
					margin-left: 35%;
					border-radius: rem(9px);
					color: #43c122;
				 }
				.hide_1{
						color: #e5e5e5;
						margin-left: 5%;
					}
			 }
			}
		}
		.send{
			padding: rem(10px) rem(20px);
		}
	}
</style>