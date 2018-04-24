<template>
	<div class="box">
		<Header title="钟点房发布" />
		<div class="body">
			<ul>
				<li class="item">
					<span class="name">房间类型:</span>
					<span class="select_1">
						<el-select v-model="select2" slot="prepend" placeholder="请选择">
					      <el-option label="商务大床房" value="1"></el-option>
					      <el-option label="总统房" value="2"></el-option>
					      <el-option label="特惠商务房" value="3"></el-option>
					    </el-select>
					</span>
				</li>
				<li class="item">
					<span class="name">房间原价:</span>
					<span class="hide_1"><input type="text" placeholder="请填写房间的原价"></span>
				</li>
				<li class="item">
					<span class="name">房间价格:</span>
					<span class="hide_1"><input type="text" placeholder="请填写房间的价格"></span>
				</li>
				<li class="item">
					<span class="name">服务手机号:</span>
					<span class="hide_1"><input type="text" placeholder="请输入钟点房负责人的手机号码"></span>
				</li>
				<li class="item">
					<span class="name">可住人数:</span>
					<span class="hide_1"><input type="text" placeholder="请输入钟点房可住人数"></span>
				</li>
				<li >
					<el-collapse v-model="activeNames" @change="handleChange">
						<el-collapse-item title="取消政策" name="1">
						    <p class="button">
						    	<span>免费取消</span>
						    	<span class="open">
						    		<el-switch
									  v-model="value2"
									  active-color="#43c122"
									  inactive-color="#999999">
									</el-switch>
						    	</span>
						    </p>
						    <p class="select">
						    	<span>
						    		 <el-checkbox-group v-model="checkList">
									    <el-checkbox label="超过1小时扣费10%"></el-checkbox>
									  </el-checkbox-group>
						    	</span>
						    </p>
						    <p class="add">
						    	<span class="add_icon"><i class="fas fa-plus-square"></i></span>
						    	<span>添加</span>
						    </p>
						 </el-collapse-item>
					</el-collapse>
				</li>
				<li class="item">
					<span class="name">住房时间:</span>
					<span class="select_1">
						<el-select v-model="select3" slot="prepend" placeholder="请选择">
					      <el-option label="3小时" value="1"></el-option>
					      <el-option label="4小时" value="2"></el-option>
					      <el-option label="5小时" value="3"></el-option>
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
					    <span> &nbsp;米</span>
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
			</ul>
			<div class="add_room">
				<span><i class="far fa-plus-square"></i></span>
				<span class="color">添加房间</span>
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
			      select3: '3小时',
			      select4: '1张',
			      select5: '1.2',
			      select6: '是',
			      // activeNames: ['1'],
			      value1: true,
                  value2: true,
                  checkList: ['超过1小时扣费10']
			}
		},
		methods: {
			handleChange(val) {
		        console.log(val);
		      }
		}
	}
</script>
<style scoped lang="scss">
	@import "../../../common/css/common.scss";
	.box{
		width: 100%;
		.body{
			padding: 0 rem(16px);
			p{
				.open{
					float: right;
				}
				.add_icon{
					color: #aaa;
					font-size: rem(14px);
				}
			}
			.item{
				position: relative;
				border-bottom: #e5e5e5 solid rem(1px);
				padding: rem(15px) 0;
				
				.check{
					.check_box{
						display: inline-block;
						width: 33%;
						padding: rem(3px) 0;
					}
				}
				.padding-bottom{
					padding-bottom: rem(10px);
				}
				.name{
					display: inline-block;
					width: 21%;
				}
				.select{
					margin-left: 5%;
			     }
				.hide{
					margin-left: 2%;
					color: #e5e5e5;
				}
				.hide_1{
					color: #e5e5e5;
					input{
						width: 60%;
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
				}
				.add_more{
					color: #43c122;
				}
			}
			.room{
				margin-top: rem(19px);
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
			.add_room{
				text-align: center;
				padding: rem(20px) 0;
				color: #43c122;
				.color{
					color: #000;
				}
			}
		}

		.send{
			padding: rem(10px) rem(20px);
		}
	}
</style>