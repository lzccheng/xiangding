<template>
	<div class="box">
		<Header title="申请入驻"/>
		<div v-show="alertShow">
			<myalert :innerHtml="htmltest" title_2="享订入驻协议" @handleCancel="aaa" status="1"/>
		</div>
		<!-- <div class="back" v-if="general" @click="handleClose_back"> 
			<div class="box" @click="cancelBubble">
				<p class="title">享订入驻协议</p>
				<p class="text">hello</p>
				<div class="bottom">
					<p @click="handleClose_back">
					   <span >我知道了</span>
					</p>
				</div>
			</div>
		</div> -->
		<div class="form">
			<p class="input">
				<label>代理商姓名:</label>
				<input type="text" placeholder="请输入姓名" name="" v-model="formData.name">
			</p>
			<p class="input">
				<label>联系电话:</label>
				<input @blur="handleCheck" class="handleCheck" v-model="formData.mobile" type="text" placeholder="请输入电话号码" name="">
			</p>
			<p class="input" style="border-bottom: none">
				<label>验证码:</label>
				<input type="text" style="width: 40%" v-model="formData.code" placeholder="请输入验证码" name="">
				<span class="get" @click="handleGetCode"><span>获取验证码</span></span>
			</p>
		</div>
		<div class="form_1">
			<p class="mm">
				<label>身份证号码:</label>
				<input @blur="handleCheckId" v-model="formData.IDcard" class="handleCheckId" type="text" placeholder="请输入身份证号码" name="">
			</p>
			<div class="photo">
				<p>
					<span class="icon_photo">
					   <label for="file"><i class="fas fa-camera"></i></label>
					    <input type="file" id="file" style="display: none" @change="handleFileUpload">

					</span>
					<span class="icon_photo">
					    <label for="file"><i class="fas fa-camera"></i></label>
					    <input type="file" id="file" style="display: none">

					</span>
				</p>
				<p>
					<span class="on">身份证正面照</span>
					<span class="down">身份证反面照</span>
				</p>
				<!-- <div class="text">身份证正面照:</div>
				<el-upload
				  class="upload-demo"
				  :action="actionUrl"
				  :on-success="handleSuccess1"
				  :before-upload="checkFile"
				  :file-list="fileList1"
				  :on-error="fileError"
				  :limit="fileNum"
				  list-type="picture">
				  <el-button size="small" type="primary">点击上传</el-button>
				  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过3M</div>
				</el-upload>
				<div class="text">身份证反面照:</div>
				<el-upload
				  class="upload-demo"
				  :action="actionUrl"
				  :on-success="handleSuccess2"
				  :on-error="fileError"
				  :before-upload="checkFile"
				  :file-list="fileList2"
				  :limit="fileNum"
				  list-type="picture">
				  <el-button size="small" type="primary">点击上传</el-button>
				  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过3M</div>
				</el-upload> -->
			</div>
			<div class="footer">
			<!-- <router-link tag="p" to="/my/myagantEnter" class="button">立即申请</router-link> -->
				<p class="green_btn" @click="handleFormSubmit">立即申请</p>
			</div>
			<img :src="formData.IDcard_facade">
		</div>
		<div class="agreement_box">
			<span class="agreement" @click="handleShow">《入驻协议》</span>
		</div>
	</div>
</template>
<script>
	import myalert from '../../../components/alert/alert'
	export default {
		mounted(){
			// this.$axios.post('/addons/yun_shop/api.php?i=3&c=entry&do=shop&type=1&m=yun_shop&route=plugin.store-cashier.frontend.store.store.upload').then((res)=>{
			// 	console.log(res)
			// })
		},
		components: {
	        myalert
	      },
		data(){
			return {
				// general: false,
				htmltest: '<span style="font-size: 13px; text-align: left;">文字文字文字文字文字文字文字文字文字文字一段文字还有一段</span>',
				alertShow: false,
				general: false,
				formData: {
					name: '',
					mobile: '',
					code: '5555',
					IDcard: '',
					IDcard_back: '',
					IDcard_facade: ''
				},
				actionUrl: process.env.API_ROOT+'?i=3&c=entry&do=shop&type=1&m=yun_shop&route=plugin.store-cashier.frontend.store.store.upload',
				fileList1: [],
				fileList2: [],
				fileNum: 1
			}
		},
		methods: {
			fileError(){
				this.$message.error('上传失败！');
			},
			checkFile(file){
				const isPNG = (file.type === 'image/png' || file.type === 'image/jpeg');
	            const isLt2M = file.size / 1024 / 1024 < 3;
	            console.log(file.size / 1024 / 1024)
	            if (!isPNG) {
	                this.$message.error('图片只能是 JPG或PNG 格式!');
	            }
	            if (!isLt2M) {
	                this.$message.error('图片大小不能超过 3MB!');
	            }
	            return isPNG && isLt2M;
			},
			handleSuccess1(res, file, fileList){
				this.formData.IDcard_facade = res.data.login_url
			},
			handleSuccess2(res, file, fileList){
				this.formData.IDcard_back = res.data.login_url
			},
			handleRemove(file, fileList) {
	        	console.log(file, fileList);
	      	},
	      	handlePreview(file) {
	        	console.log(file);
	      	},
	      	handleFileUpload(){},
			handleFormSubmit(){
				console.log({...this.formData})
				this.$axios.get('?i=3&c=entry&do=shop&m=yun_shop&route=plugin.merchant.frontend.merchant-apply.staff',{params:{...this.formData}}).then((res)=>{
				console.log(res)
			})
				
			},
			handleGetCode(){
				this.$axios.get('?i=3&c=entry&do=shop&type=1&m=yun_shop&route=member.register.sendCode&mobile=' + this.formData.mobile).then((res)=>{
					console.log(res)
				})
			},
			handleShow(){
				this.alertShow = true
			},
			aaa(res){
				this.alertShow = false
			},
			handleCheck(event){
				let value = document.querySelector('.handleCheck').value
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
			handleCheckId(event){
				let value = document.querySelector('.handleCheckId').value
				if(value){
					if(!this.Fn.checkId(value)){
						this.$message({
				          message: '请输入正确身份证号',
				          type: 'warning'
				        });
					}
				}else{
					this.$message({
			          message: '身份证号不能为空',
			          type: 'warning'
			        });
				}
			},
			// handleShow_back(){
			// 	this.$refs.alert_test.style.display = 'block'
			// },
			// handleClose_back(){
			// 	this.general = false
			// },
			// cancelBubble(event){
			// 	event.cancelBubble = true
			// },
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
		.upload-demo{
			padding-bottom: rem(8px);
			text-align: center;
		}
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
				width: 90%;
				background-color: #f8f9fc;
				position: absolute;
				top: rem(80px);
				left: 5%;
				border-radius: rem(8px);
				.title{
					font-size: rem(17px);
					text-align: center;
					font-weight: bold;
					padding-bottom: rem(10px);
				}
				.text{
					padding: 0 4%;
				}
				.bottom{
					padding: 0 3%;
					padding-top: rem(18px);
					text-align: center;
					p{
						background-color: #43c122;
						color: #fff;
						padding: rem(10px) 0;
						border-radius: rem(5px);
					}
				}
			}
		}
		.form_1{
			background-color: #ffffff;
			margin-top: rem(10px);
			border-top: 0.5px solid #aaa;
			padding-bottom: rem(100px);
			.photo{
				position: relative;
				border-top: #aaa solid rem(1px);
				border-bottom: #aaa solid rem(1px);
				padding: rem(43px) 2% rem(80px);
				text-align: center;
				.icon_photo{
					padding: rem(30px) 19%;
					border: #aaa solid rem(1px);
					border-radius: rem(5px);
					color: #aaa;
					font-size: rem(23px);
					text-align: center;
					display: inline-block;
					width: rem(23px);
					margin: 0 rem(4px);
				}
				.on{
					position: absolute;
					top: rem(150px);
					left: 15%;
				}
				.down{
					position: absolute;
					top: rem(150px);
					right: 15%;
				}
				// .text{
				// 	border-top: 1px solid #aaa;
				// 	text-align: center;
				// 	padding: rem(8px) 0;
				// }
			}
			.footer{
				padding: rem(10px) 5%;
			}
			.mm{
				position: relative;
				padding: rem(13px) rem(9px) rem(13px) 6%;
				display: flex;
				label{
					font-size: rem(14px);
					width: 30%;
					padding-right: rem(3px);
				}
				input{
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
		}
		.form{
			background-color: #ffffff;
			margin-top: rem(10px);
			padding: rem(2px) 0 0 rem(15px);
			border-top: 0.5px solid #aaa;
			border-bottom: 0.5px solid #aaa;
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
					width: 45%;
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
			.text{
				margin-top: rem(15px);
				text-align: center;
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
		}
		
		.agreement_box{
			position: absolute;
			bottom: rem(10px);
			left: 0;
			width: 100%;
			text-align: center;
			.agreement{
				background-color: #ffffff;
				color: #769de6;
				
			}
		}

	}
</style>