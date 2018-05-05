<template>
	<div class="box">
		<Header title="申请入驻"/>
		<div class="back" v-if="general" @click="handleClose_back"> 
			<div class="box" @click="cancelBubble">
				<p class="title">享订入驻协议</p>
				<div class="bottom">
					<p @click="handleClose_back">
					   <span >我知道了</span>
					</p>
				</div>
			</div>
		</div>
		<div class="form"> 
			<p class="input">
				<label>申请人:</label>
				<input type="text" placeholder="请输入姓名" name="">
			</p>
			<p class="input">
				<label>联系电话:</label>
				<input @blur="handleCheck" class="handleCheck" type="text" placeholder="请输入电话号码" name="">
			</p>
			<p class="input">
				<label>验证码:</label>
				<input type="text" style="width: 40%" placeholder="请输入验证码" name="">
				<span class="get"><span>获取验证码</span></span>
			</p>
			<p class="input">
				<label>账号:</label>
				<input type="text" placeholder="请输入账号" name="">
			</p>
			<p class="input">
				<label>密码:</label>
				<input type="password" class="pass" placeholder="请输入密码"  name="" @bulr="handleCheckPassword">
				<span class="eye" @click="handlePassword">
					<span ref="eye_one">
						<i  class="fas fa-eye"></i>
					</span>
					<span ref="eye_two">
						<i  class="fas fa-eye-slash"></i>
					</span>
				</span>
			</p>
		</div>
		<div class="form">
			<p class="input">
				<label>酒店名称:</label>
				<input type="text" placeholder="请输入酒店名称" name="">
			</p>
			<p class="input">
				<label>酒店星级:</label>
				<span class="star"><el-rate v-model="value1"></el-rate></span>
			</p>
			
			<p class="input">
				<label>前台电话:</label>
				<input @blur="hanndleFixPhone" type="text" placeholder="请输入带区号得座机号码" class="hanndleFixPhone" name="">
			</p>
			<p class="input">
				<label>电子邮箱:</label>
				<input type="text" placeholder="请输入电子邮箱" name="">
			</p>
			<p class="input">
				<label>所在城市:</label>
				<span class="choice">点击选择地址</span>
				<span><i class="fas fa-chevron-down"></i></span>
			</p>
			<p class="input">
				<label>街道:</label>
				<span class="choice">请选择所在街道</span>
				<span><i class="fas fa-chevron-down"></i></span>
			</p>
			<p class="input">
				<label>详细地址:</label>
				<input type="text" placeholder="请输入街道门牌号" name="">
			</p>
			<p class="input">
				<label>地理位置:</label>
				<span>经度: 13.141111  维度: 23.5555</span>
			</p>
			<p class="input">
				<label>酒店收款账号:</label>
				<input @blur="handleCheckCredit" type="text" class="handleCheckCredit" placeholder="请输入银行卡号" name="">
			</p>
			<p class="input">
				<label>代理服务商姓名:</label>
				<input type="text" placeholder="请输入代理服务商姓名" name="">
			</p>
			<p class="input" style="border-bottom: none">
				<label>代理服务商电话:</label>
				<input style="width: 60%" @blur="handleCheck_" type="text" class="handleCheck_" placeholder="请输入代理服务商的电话号码" name="">
			</p>
		</div>
		<div class="form">
			<p class="input" style="border-bottom: none">
				<label>上传营业执照</label>
			</p>
			<div class="photo">
			    <label for="file"><i class="far fa-plus-square"></i></label>
				   <input type="file" style="display: none" id="file">
			</div>
		</div>
		<div class="form">
			<p class="input" style="border-bottom: none">
				<label>填写酒店简介</label>
			</p>
			<div class="photo">
				<textarea cols="46" rows="10" placeholder="请填写酒店简介..."></textarea>
			</div>	
			
		</div>
		<div class="form" style="border-bottom: none">
			<div class="footer">
			   <router-link tag="p" to="/enter/login" class="button">立即申请</router-link>
			</div>
			<div class="agreement_box">
				<span @click="handleShow_back" class="agreement">《入驻协议》</span>
			</div>
		</div>
		
	</div>
</template>
<script>
	export default {
		mounted(){
			this.$refs.eye_two.style.display = 'inline-block'
			this.$refs.eye_one.style.display = 'none'
		},
		data(){
			return {
				value1: null,
				general: false
			}
		},
		methods: {
			handleCheckPassword(){
				let value = document.querySelector('.pass').value
				if(value){
					if(!this.Fn.checkPassword(value)){
						this.$message({
				          message: '请输入正确的密码',
				          type: 'warning'
				        });
					}
				}else{
					this.$message({
			          message: '密码不能为空',
			          type: 'warning'
			        });
				}
			},
			handlePassword(e){
				let dom = document.querySelector('.pass')
				if(dom.getAttribute('type') === 'password'){
					dom.setAttribute('type','text')
					this.$refs.eye_two.style.display = 'none'
					this.$refs.eye_one.style.display = 'inline-block'
				}else{
					dom.setAttribute('type','password')
					this.$refs.eye_two.style.display = 'inline-block'
					this.$refs.eye_one.style.display = 'none'
				}

				
			},
			handleShow_back(){
				this.general = true
			},
			handleClose_back(){
				this.general = false
			},
			cancelBubble(event){
				event.cancelBubble = true
			},
			handleCheck(event){
				let value = document.querySelector('.handleCheck').value
				// event.path[0].value
				// (/^1[3|4|5|8][0-9]\d{4,8}$/.test(sMobile))
				if(value){
					if(!this.Fn.checkPhone(value)){
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
			handleCheck_(event){
				let value = document.querySelector('.handleCheck_').value
				// event.path[0].value
				// (/^1[3|4|5|8][0-9]\d{4,8}$/.test(sMobile))
				if(value){
					if(!this.Fn.checkPhone(value)){
						this.$message({
				          message: '请输入代理服务商的联系电话',
				          type: 'warning'
				        });
					}
				}else{
					this.$message({
			          message: '代理服务商电话不能为空',
			          type: 'warning'
			        });
				}
			},
			hanndleFixPhone(event){
				let value = document.querySelector('.hanndleFixPhone').value
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
				let value = document.querySelector('.handleCheckCredit').value
				if(value){
					if (!this.Fn.checkCredit(value)) {
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
	@import "../../../common/css/common.scss";
	.box{
		width: 100%;
		background-color: #e5e5e5;
		position: relative;
		font-size: rem(14px);
		.back{
			background-color: rgba(0,0,0,0.3);
			position: fixed;
			top: 0;
			left: 0;
			z-index: 999;
			width: 100%;
			height: 100%;
			.box{
				padding: rem(15px) 0;
				text-align: center;
				width: 90%;
				// background-color: #ffffff;
				position: absolute;
				top: rem(80px);
				left: 5%;
				border-radius: rem(8px);
				.title{
					font-size: rem(17px);
					font-weight: bold;
					padding-bottom: rem(30px);
				}
				.bottom{
					padding: 0 3%;
					p{
						background-color: #43c122;
						color: #fff;
						padding: rem(5px) 0;
						border-radius: rem(5px);
					}
				}
			}
		}
		.form{
			background-color: #ffffff;
			margin-top: rem(10px);
			padding: rem(2px) 0 0 rem(15px);
			border-top: 0.5px solid #aaa;
			border-bottom: 0.5px solid #aaa;
			.photo{
				color: #aaa;
				font-size: rem(48px);
				padding-bottom: rem(20px);
				padding-left: 3%;
				textarea{
					border: none;
				}
			}
			.input{
				position: relative;
				border-bottom: 0.5px solid #aaa;
				padding: rem(10px) rem(8px);
				label{
					display: inline-block;
					font-size: rem(14px);
					width: 30%;
				}
				input{
					width: 52%;
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
				.eye{
					color: #43c122;
					font-size: rem(16px);
				}
				.star{
					display: inline-block;
					width: 50%;
				}
				.choice{
					display: inline-block;
					width: 60%;
				}
			}
			// .text{
			// 	margin-top: rem(15px);
			// 	text-align: center;
			// }
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
			.footer{
				padding: rem(20px) 5%;
				text-align: center;
				p{
					background-color: #43c122;
					color: #fff;
					padding: rem(10px) 0;
					border-radius: rem(5px);
				}
			}
			.agreement_box{
				width: 100%;
				text-align: center;
				padding-bottom: rem(10px);
				.agreement{
					background-color: #ffffff;
					color: #769de6;
				}
			}
		}
		
	}
</style>