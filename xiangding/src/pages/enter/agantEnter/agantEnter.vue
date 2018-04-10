<template>
	<div class="box">
		<div class="aaa">酒店妹妹代理商</div>
		<div class="bbb"></div>
		<div class="form">
                <ul>
                   <li class="ccc"> 
                   <span>代理服务人姓名:</span>
                   <input type="text" class="in"  size="30" maxlength="20" placeholder="  请输入您的真实姓名">
                   </li> 
                   <li class="ccc"> 
                   <span>手机号码:</span>
                   <input type="text" class="in" size="30" maxlength="20" placeholder="  您的真实号码">
                   </li>
                   <li class="ccc"> 
                   <span>身份证号码:</span>
                   <input type="text" class="in" size="30" maxlength="20" placeholder="  您的真实身份证号码">
                   </li>
                </ul>
                <div class="ddd">
                	<span>上传身份证正反面</span>
                </div>
                <div class="eee">
                	<div class="e"></div>
                	<div class="e"></div>
                	<div class="ee">
                		<span class="zheng">身份证正面</span>
                		<span class="fan">身份证反面</span>
                	</div>
                </div>
                <ul>
                	<li class="place">
                	  <div class="select">
                	  	<el-select v-model="value" placeholder="请选择">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
                		</el-select>
                	  </div>
                	  <input type="text" class="input" size="25" maxlength="20" placeholder="      请选择您的酒店代理区域">
                	</li>
                    <li class="place">
                    	<input type="text" class="input_in" size="15" maxlength="20"  placeholder="  代理服务酒店名称">
                    </li>
                    <li class="place">
                    	<input type="text" class="input_in" size="15" maxlength="20" placeholder="  代理服务酒店名称">
                    </li>
                    <li class="place">
                    	<input type="text" class="input_in" size="15" maxlength="20" placeholder="  代理服务酒店名称">
                    </li>
                </ul>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				options: [{
		          value: '选项1',
		          label: '广东'
		        }, {
		          value: '选项2',
		          label: '上海'
		        }, {
		          value: '选项3',
		          label: '北京'
		        }, {
		          value: '选项4',
		          label: '天津'
		        }, {
		          value: '选项5',
		          label: '西安'
		        }],
		        value: ''
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
		background-color: #fff;
		.aaa{
			width: 100%;
			height: rem(43px);
			background-color: #43c122;
			font-size: rem(16px);
			line-height: rem(43px);
			padding-top: rem(5px);
			text-align: center;
			color: #ffffff;
		}
		.bbb{
            width: 100%;
            height: rem(20px);
            background-color: #ebebeb;
		}
		.form{
            width: 100%;
            height: rem(550px);
            .place{
            	width: 93%;
			    height: rem(52px);
			    font-size: rem(15px);
			    padding-left: rem(7px);
			    border-bottom: rem(2px) solid #ececec;
			    padding-bottom: rem(2px);
			    margin-left: rem(8px);
			    margin-top: rem(1px);
			    .select{
				    	width: 20%;
				    	float: left;
				    }
				.input{
					    border: 1px solid #ffffff;
					    height: rem(52px);
					    padding: 0 rem(5px);
					    margin-left: rem(3px);
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
				.input_in{
						    border: 1px solid #ffffff;
						    height: rem(52px);
						    padding: 0 rem(5px);
						    float: left;
						    margin-left: rem(110px);
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
		}
		.ccc{
		    width: 93%;
		    height: rem(52px);
		    font-size: rem(15px);
		    line-height: rem(52px);
		    padding-left: rem(7px);
		    border-bottom: rem(2px) solid #ececec;
		    padding-bottom: rem(2px);
		    margin-left: rem(8px);
		    .in{
			    border: 1px solid #ffffff;
			    height: rem(52px);
			    padding: 0 rem(5px);
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
		.ddd{
			width: 100%;
			height: rem(52px);
			line-height: rem(52px);
			font-size: rem(13px);
			text-align: center;
		}
		.eee{
			width: 100%;
			height: rem(180px);
			margin-bottom: rem(20px);
		}
		.e{
			width: 46%;
			height: rem(130px);
			background-color: #ececec;
			float: left;
			margin-left: rem(10px);
            border-radius: rem(12px);
		}
		.ee{
			width: 100%;
			height: rem(45px);
		    line-height: rem(45px);
			float: left;
			.zheng{
				font-size: rem(14px);
				margin-left: rem(65px);
			}
			.fan{
				font-size: rem(14px);
				margin-left: rem(123px);
			}

		}
		


	}
</style>