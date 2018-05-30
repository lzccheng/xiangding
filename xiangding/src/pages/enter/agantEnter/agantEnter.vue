<template>
	<div class="box">
		<Header title="申请入驻"/>
		<myalert :innerHtml="htmltest" title_2="享订入驻协议" @handleCancel="aaa" :show="alertShow" status="1"/>
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
		<!--可申请-->
		<div v-show="status == -1||status == 0">
			<div class="form">
				<p class="input">
					<label>代理商姓名:</label>
					<input type="text" placeholder="请输入姓名" name="" v-model="formData.name">
				</p>
				<p class="input" style="border-bottom: none;">
					<label>联系电话:</label>
					<input @blur="handleCheck" class="handleCheck" v-model="formData.mobile" type="text" placeholder="请输入电话号码" name="">
				</p>
				<!-- <p class="input" style="border-bottom: none">
					<label>验证码:</label>
					<input type="text" style="width: 40%" v-model="formData.code" placeholder="请输入验证码" name="">
					<span class="get" @click="handleGetCode"><span>获取验证码</span></span>
				</p> -->
			</div>
			<div class="form_1">
				<p class="mm">
					<label>身份证号码:</label>
					<input @blur="handleCheckId" v-model="formData.IDcard" class="handleCheckId" type="text" placeholder="请输入身份证号码" name="">
				</p>
				<div class="photo">
					<!-- <p>
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
					
					</p> -->
					<div class="item">
						<div class="msg_tt">身份证正面照</div>
						<div class="icon">
							<div>
								<el-upload
								  :action="actionUrl"
								  :on-success="handleSuccess1"
								  list-type="text"
								  :on-error="fileError"
								  :on-remove="removeFile1"
								  :before-upload="checkFile">
								  <i class="el-icon-plus" v-show="!formData.IDcard_facade"></i>
								</el-upload>
							</div>
							
							<div class="img" v-show="formData.IDcard_facade">
								<img :src="formData.IDcard_facade">
							</div>
						</div>
						
					</div>
					<div class="item">
						<div class="msg_tt">身份证反面照</div>
						<div class="icon">
							<div>
								<el-upload
								  :action="actionUrl"
								  :on-success="handleSuccess2"
								  list-type="text"
								  :on-error="fileError"
								  :on-remove="removeFile2"
								  :before-upload="checkFile">
								  <i class="el-icon-plus" v-show="!formData.IDcard_back"></i>
								</el-upload>
							</div>
							
							<div class="img" v-show="formData.IDcard_back">
								<img :src="formData.IDcard_back">
							</div>
						</div>
						
					</div>
					
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
					<router-link tag="p" :to="Fn.getUrl({path:'/my/myagantEnter'})" class="green_btn">立即申请</router-link>
					<p class="green_btn" @click="handleFormSubmit">立即申请</p>
				</div>
			</div>
			<div class="agreement_box">
				<span class="agreement" @click="handleShow">《入驻协议》</span>
			</div>
		</div>
		<!--待审核-->
		<div v-show="status == 0" class="tips">
			<div class="ico">
				<i class="fas fa-check-circle"></i>
			</div>
			<div class="text">申请已提交，请等待审核！</div>
			<div class="sub"><router-link tag="span" :to="Fn.getUrl({path: '/'})" class="green_btn">去首页逛逛</router-link></div>
		</div>
		<!--已通过-->
		<div v-show="status == 1" class="tips">
			<div class="ico">
				<i class="far fa-check-circle"></i>
			</div>
			<div class="text">恭喜您已通过审核</div>
			<div class="sub"><router-link tag="span" :to="Fn.getUrl({path: '/'})" class="green_btn">去招代理</router-link></div>
		</div>
		<!--驳回申请-->
		<div v-show="status == -2" class="tips">
			<div class="ico">
				<i class="fa fa-check"></i>
			</div>
			<div class="text">您的申请被驳回，请继续努力！</div>
			<div class="sub"><router-link tag="span" :to="Fn.getUrl({path: '/'})" class="green_btn">去首页逛逛</router-link></div>
		</div>
	</div>
</template>
<script>
	import myalert from '../../../components/alert/alert'
	import { Indicator } from 'mint-ui'
	export default {
		mounted(){
			let that = this
			// this.$axios.post('/addons/yun_shop/api.php?i=3&c=entry&do=shop&type=1&m=yun_shop&route=plugin.store-cashier.frontend.store.store.upload').then((res)=>{
			// 	console.log(res)
			// })
			// https://www.share-hotel.cn/addons/yun_shop/api.php?i=3&type=1&shop_id=null&route=plugin.merchant.frontend.get-center-condition&
			// https://www.share-hotel.cn/addons/yun_shop/api.php?i=3&type=1&shop_id=null&route=plugin.merchant.frontend.get-center-condition&
			// this.Http.get({route:'plugin.merchant.frontend.get-center-condition'}).then(res=>{
			// 	console.log(1111,res)
			// })
			this.getStatus()
		},
		components: {
	        myalert
	      },
		data(){
			return {
				htmltest: '<p style="font-size: 13px; text-align: left;">代理服务商入驻协议内容部分........</p>',
				alertShow: false,
				formData: {
					name: '',
					mobile: '',
					code: '5555',
					IDcard: '',
					IDcard_back: '',
					IDcard_facade: ''
				},
				actionUrl: process.env.API_ROOT+'/addons/yun_shop/api.php?i=3&c=entry&do=shop&type=1&m=yun_shop&route=plugin.store-cashier.frontend.store.store.upload',
				fileList1: [],
				fileList2: [],
				fileNum: 1,
				imageUrl:'',
				status: 8
			}
		},
		methods: {
			getStatus(){
				let that = this
				this.Http.get({route:'plugin.merchant.frontend.get-center-condition'}).then(res=>{
					that.status = res.data.data.status
				})
			},
			fileError(){
				this.Fn.tips('上传失败！');
			},
			checkFile(file){
				Indicator.open('图片上传中...')
				const isPNG = (file.type === 'image/png' || file.type === 'image/jpeg');
	            const isLt2M = file.size / 1024 / 1024 < 3;
	            console.log(file.size / 1024 / 1024)
	            if (!isPNG) {
	            	this.Fn.tips('图片只能是 JPG或PNG 格式!')
	            	Indicator.close()
	            }
	            if (!isLt2M) {
	            	this.Fn.tips('图片大小不能超过 3MB!')
	            	Indicator.close()
	            }
	            return isPNG && isLt2M;
			},
			handleSuccess1(res, file, fileList){
				Indicator.close()
				// this.formData.IDcard_facade&&this.fileList1[0].splice(0,1)
				console.log(this.fileList1)
				this.formData.IDcard_facade = res.data.img
				this.Fn.tips(res.msg)
			},
			handleSuccess2(res, file, fileList){
				Indicator.close()
				this.formData.IDcard_back&&this.fileList2.shift()
				this.formData.IDcard_back = res.data.img
				this.Fn.tips(res.msg)
			},
			removeFile1(){
				this.formData.IDcard_facade = ''
			},
			removeFile2(){
				this.formData.IDcard_back = ''
			},
			handleRemove(file, fileList) {
	        	console.log(file, fileList);
	      	},
	      	handlePreview(file) {
	        	console.log(file);
	      	},
	      	handleFileUpload(){},
			handleFormSubmit(){
				if(!this.formData.name){
					return this.Fn.tips('代理商姓名不能为空')
				}
				if(this.formData.mobile){
					if(!this.Fn.checkPhone(this.formData.mobile)){
						return this.Fn.tips('请输入正确的联系电话')
					}
				}else{
					return this.Fn.tips('联系电话不能为空')
				}
				if(this.formData.IDcard){
					if(!this.Fn.checkId(this.formData.IDcard)){
						return this.Fn.tips('请输入正确的身份证号')
					}
				}else{
					return this.Fn.tips('身份证号不能为空')
				}
				if(!this.formData.IDcard_facade){
					return this.Fn.tips('请上传身份证正面照')
				}
				if(!this.formData.IDcard_back){
					return this.Fn.tips('请上传身份证反面照')
				}
				console.log({...this.formData})
				// this.$axios.post('?i=3&c=entry&do=shop&m=yun_shop&route=plugin.merchant.frontend.merchant-apply.staff',{...this.formData}).then((res)=>{
				// 	console.log(res)
				// })
				this.Http.post({route:'plugin.merchant.frontend.merchant-apply.staff',data:{...this.formData}}).then(res=>{
					console.log(res)
					this.Fn.tips(res.data.msg)
				})

				
			},
			handleGetCode(){
				let that = this
				this.$axios.get('?i=3&c=entry&do=shop&type=1&m=yun_shop&route=member.register.sendCode&mobile=' + this.formData.mobile).then((res)=>{
					console.log(res)
					if(res.data.result === 0){

						return this.Fn.tips(res.data.msg)
					}
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
						this.Fn.tips('请输入正确的联系电话')
					}
				}else{
					this.Fn.tips('联系电话不能为空')
				}
			},
			handleCheckId(event){
				let value = document.querySelector('.handleCheckId').value
				if(value){
					if(!this.Fn.checkId(value)){
						this.Fn.tips('请输入正确身份证号')
					}
				}else{
					this.Fn.tips('身份证号不能为空')
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
		},
		watch: {
			$route(to,from){
				if(to.name === 'agantEnter'){
					this.getStatus()
				}
			}
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
		padding-top: rem(22px);
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
				// position: relative;
				// border-top: #aaa solid rem(1px);
				// border-bottom: #aaa solid rem(1px);
				// padding: rem(43px) 2% rem(80px);
				// text-align: center;
				// .icon_photo{
				// 	padding: rem(30px) 19%;
				// 	border: #aaa solid rem(1px);
				// 	border-radius: rem(5px);
				// 	color: #aaa;
				// 	font-size: rem(23px);
				// 	text-align: center;
				// 	display: inline-block;
				// 	width: rem(23px);
				// 	margin: 0 rem(4px);
				// }
				// .on{
				// 	position: absolute;
				// 	top: rem(150px);
				// 	left: 15%;
				// }
				// .down{
				// 	position: absolute;
				// 	top: rem(150px);
				// 	right: 15%;
				// }
				
				display: flex;
				justify-content: space-around;
				.item{
					i.el-icon-plus{
						font-size: rem(20px);
					}
					text-align: center;
					width: 50%;
					.msg_tt{
						padding: rem(5px) 0;
					}
					.icon{
						width: 80%;
						margin: 0 auto;
						padding: rem(20px) 0;
						border: rem(1px) solid #aaa;
						border-radius: rem(5px);
						.img{
							img{
								width: 100%;
								height: rem(100px);
							}
						}
					}
					
				}
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
		.tips{
			background-color: #fff;
			text-align: center;
			.ico{
				color: #43c122;
				font-size: rem(55px);
				padding-top: rem(100px);
			}
			.text{
				margin-top: rem(15px);
			}
			.sub{
				margin-top: rem(50px);
				padding: 0 5%;
			}
		}
		
	}
</style>