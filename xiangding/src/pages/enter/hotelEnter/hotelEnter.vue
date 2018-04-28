<template>
	<div class="box">
		<Header title="申请入驻"/>
		
			<div class="form">
				<p class="input">
					<label>申请人:</label>
					<input type="text" placeholder="请输入姓名" name="">
				</p>
				<p class="input">
					<label>联系电话:</label>
					<input @blur="handleCheck" type="text" placeholder="请输入电话号码" name="">
				</p>
				<p class="input">
					<label>验证码:</label>
					<input type="text" placeholder="请输入验证码" name="">
					<span class="get"><span>获取验证码</span></span>
				</p>
				<p class="input">
					<label>账号:</label>
					<input type="text" placeholder="请输入账号" name="">
				</p>
				<p class="input" style="border-bottom: none">
					<label>密码:</label>
					<input type="text" placeholder="******" name="">
					<span class="eye"><i class="fas fa-eye"></i></span>
				</p>
			</div>
			<div class="form">
				<p class="input">
					<label>酒店名称:</label>
					<input type="text" placeholder="请输入酒店名称" name="">
				</p>
				<p class="input">
					<label>酒店星级:</label>
                    <el-rate v-model="value1"></el-rate>
				</p>
				<p class="input">
					<label>前台电话:</label>
					<input @blur="hanndleFixPhone" type="text" placeholder="请输入带有区号的座机号码" name="">
				</p>
				<p class="input">
					<label>电子邮箱:</label>
					<input type="text" placeholder="请输入电子邮箱" name="">
				</p>
				<p class="input">
					<label>所在城市:</label>
					<span class="color_aaa">点击选择地址 
					<span class="down"><i class="fas fa-chevron-down"></i></span>
					</span>
				</p>
				<p class="input">
					<label>街道:</label>
					<span class="color_aaa">请选择所在街道 
					<span class="down"><i class="fas fa-chevron-down"></i></span>
					</span>
				</p>
				<p class="input">
					<label>详细地址:</label>
					<input type="text" placeholder="请输入街道门牌号" name="">
				</p>
				<p class="input">
					<label>地理位置:</label>
					<span>经度: 13.141111 维度: 25.5555</span>
				</p>
				<p class="input">
					<label>酒店收款账号:</label>
					<input @blur="handleCheckCredit" type="text" placeholder="请输入银行卡号" name="">
				</p>
				<p class="input">
					<label>代理服务商姓名:</label>
					<input type="text" placeholder="请输入代理服务商姓名" name="">
				</p>
				<p class="input" style="border-bottom: none">
					<label>代理服务商电话:</label>
					<input type="text" placeholder="请输入代理服务商的电话号码" name="">
				</p>
			</div>
			<div class="form">
				<p class="upload">上传营业执照</p>
				<p class="add_icon">
				<!-- <label for="file"><i class="far fa-plus-square"></i></label>
							<input type="file" id="file" style="display: none"> -->
				   <label for="file"><i class="far fa-plus-square"></i></label>
				   <input type="file" style="display: none" id="file">
				</p>
			</div>
			<div class="form">
				<p class="hotel upload">酒店简介</p>
				<p class="content"><textarea cols="46" rows="10" placeholder="请填写酒店简介..."></textarea></p>
			</div>
			<div class="body">
				<router-link class="button" tag="div" to="/enter/login">
					<span>立即申请</span>
				</router-link>
				<p class="agreement">《入驻协议》</p>
			</div>
	</div>

</template>
<script>
	import common from '../../../common/js/common'
	export default {
		data(){
			return {
				value1: null,
			}
		},
		methods: {
			handleCheck(event){
				let value = event.path[0].value
				// event.path[0].value
				// (/^1[3|4|5|8][0-9]\d{4,8}$/.test(sMobile))
				if(value){
					if(!common.checkPhone(value)){
						this.$message({
				          message: '请输入正确的联系电话',
				          type: 'warning'
				        });
					}
				}else{
					this.$message({
			          message: '联系电话不能为空',
			          type: 'warning'
			        });
				}
			},
			hanndleFixPhone(event){
				let value = event.path[0].value
				if(value){
					if (!common.checkFixedPhone(value)) {
						this.$message({
							message: '请输入正确的座机号码',
							type: 'warning'
						});
					}
				}else{
					this.$message({
						message: '前台电话不能为空',
						type: 'warning'
					})
				}
			},
			handleCheckCredit(event){
				let value = event.path[0].value
				if(value){
					if (!common.checkCredit(value)) {
						this.$message({
							message: '请输入正确的银行卡号',
							type: 'warning'
						});
					}
				}else{
					this.$message({
						message: '银行卡号不能为空',
						type: 'warning'
					})
				}
			},

		}
	}
</script>
<style scoped lang="scss">
	@import '../../../common/css/common.scss';
	.box{
		width: 100%;
		background-color: #e5e5e5;
		position: relative;
		font-size: rem(14px);
		.form{
			background-color: #ffffff;
			margin-top: rem(8px);
			padding: rem(2px) 0 0 rem(15px);
			border-top: 0.5px solid #aaa;
			border-bottom: 0.5px solid #aaa;
			position: relative;
			.input{
				position: relative;
				border-bottom: 0.5px solid #aaa;
				padding: rem(10px) 2%;
				display: flex;
				label{
					width: 32%;

				}
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
			.text{
				margin-top: rem(15px);
				text-align: center;
			}
			.color_aaa{
				color: #aaa;
			}
			.down{
				position: absolute;
				top: rem(10px);
				right: 6%;
			}
			.get{
				position: absolute;
				top: 0;
				right: 0;
				background-color: #43c122;
				height: 100%;
				display: flex;
				align-items: center;
				color: #fff;
				padding: 0 rem(10px);
			}
			.eye{
				color: #43c122;
				font-size: rem(17px);
			}
			.text_img{
				width: 100%;
				height: rem(200px);
				margin-top: rem(15px);
				background-color: #eee;
				border-radius: rem(10px)
			}
			.btn{
				margin-top: rem(25px);
				button{
					width: 100%;
					border: none; 
					color: #fff;
					border-radius: rem(5px);
					background-color: #43c122;
					padding: rem(12px);
				}
			}
			.upload{
				margin: rem(10px) 0;
			}
			.add_icon{
				width: 20%;
				margin-bottom: rem(15px);
				color: #aaa;
				font-size: rem(45px);
			}
			.content{
				color: #aaa;
				textarea{
					border: none;
				}
			}
		}
		.body{
			background-color: #ffffff;
			padding: rem(16px) 5% rem(50px);
			.button{
				background-color: #43c122;
				color: #ffffff;
				text-align: center;
				padding: rem(12px) 0;
				border-radius: rem(5px);
			}
			.agreement{
				background-color: #ffffff;
				text-align: center;
				color: #769de6;
				margin-top: rem(20px);
			}
		}
	}
</style>