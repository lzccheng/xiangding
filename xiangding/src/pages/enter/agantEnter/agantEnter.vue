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
		<div v-show="status == '-1'">
			<div class="form">
				<p class="input">
					<label>代理商姓名:</label>
					<input type="text" placeholder="请输入姓名" name="" v-model="formData.realname">
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
				<p class="mm" >
					<label>  &nbsp;&nbsp;身份证号码:</label>
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
								  :limit="1"
								  :on-error="fileError"
								  :on-remove="removeFile1">
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
								  :limit="1"
								  :on-error="fileError"
								  :on-remove="removeFile2">
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
					<!--<router-link tag="p" :to="Fn.getUrl({path:'/my/myagantEnter'})" class="green_btn">立即申请</router-link>-->
					<p class="green_btn" @click="handleFormSubmit">立即申请</p>
				</div>
			</div>
			<div class="agreement_box">
				<span class="agreement" @click="handleShow">《入驻协议》</span>
			</div>
		</div>
		<!--待审核-->
		<div v-show="status == '0'" class="tips">
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
			<div class="sub"><router-link tag="span" :to="Fn.getUrl({path:'/my/myagantEnter'})" class="green_btn">确定</router-link></div>
		</div>
		<!--驳回申请-->
		<div v-show="status == '-2'" class="tips">
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
	import { Indicator,MessageBox } from 'mint-ui'
	export default {
		mounted(){
			if(window.agantStatus == 1){
				this.$router.push(this.Fn.getUrl({path: '/my/myagantEnter'}))
			}
			let that = this
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
          realname: '',
					mobile: '',
					code: '5555',
					IDcard: '',
          idcardb: '',
          idcardf: ''
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
				//https://www.share-hotel.cn/addons/yun_shop/api.php?i=3&type=1&shop_id=null&route=plugin.merchant.frontend.get-info&
				this.Http.get({route:'plugin.merchant.frontend.get-info'}).then(res=>{
					log(res.data.data.status)
					that.status = res.data.data.status
				})
				// this.Http.get({route: 'member.member.isAgent'}).then(res=>{
				// 	if(res.data.result === 1){
				// 		if(res.data.data.is_agent == 1){
				// 			log(res.data.data.is_agent)
				// 			that.$router.push(that.Fn.getUrl({path: '/my/myagantEnter'}))
				// 		}
				// 	}
				// })
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
				console.log(this.fileList1)
				this.formData.idcardf = res.data.img
				this.Fn.tips(res.msg)
			},
			handleSuccess2(res, file, fileList){
				Indicator.close()
				this.formData.idcardb&&this.fileList2.shift()
				this.formData.idcardb = res.data.img
				this.Fn.tips(res.msg)
			},
			removeFile1(){
				this.formData.idcardf = ''
			},
			removeFile2(){
				this.formData.idcardb = ''
			},
			handleRemove(file, fileList) {
	        	console.log(file, fileList);
	      	},
	      	handlePreview(file) {
	        	console.log(file);
	      	},
	      	handleFileUpload(){},
			handleFormSubmit(){
				let that = this
				if(!this.formData.realname){
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
				if(!this.formData.idcardf){
					return this.Fn.tips('请上传身份证正面照')
				}
				if(!this.formData.idcardb){
					return this.Fn.tips('请上传身份证反面照')
				}
				console.log({...this.formData})
				this.Http.post({route:'plugin.merchant.frontend.merchant-apply.staff',data:{...this.formData}}).then(res=>{
					that.Fn.tips(res.data.msg)
					that.getStatus()
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
				let message = `
					<div style="text-align: left;color: #333;font-size: 12px;line-height: 18px;text-indent: 24px;max-height: 350px;overflow-y: auto;">
						<p>本协议由同意并承诺遵守本协议规定接受“享订.酒店预订平台”的享有政治权利的个人（下称“个人”）、广州享订网络科技有限公司（下称“享订”）共同缔结，具有合同效力。</p>
						<p style="font-weight: 600;font-size: 14px;text-indent: 0;">一、协议内容及生效： </p>
						<p>（一）本协议内容包括协议正文及所有“享订”已经发布的或将来可能发布的各类规则。所有规则为协议不可分割的一部分，与协议正文具有同等法律效力。</p>
						<p>（二）由“个人”向“享订”提出线上申请，由“享订”线上授权“个人”代理开发拓展，从事具有合法对外经营的中国境内的酒店经营实体进驻“享订”平台提供的各项服务，承诺接受并遵守各项代理相关规则的规定。“享订”有权根据需要不时地制定、修改本协议或各类规则，如本协议有任何变更，“享订”将在平台上以公示形式通知酒店。任何修订和新规则一经公示，“个人”在七日内如未以书面形式提出相关意见，则新规则即时生效，并成为本协议的一部分。登录或继续使用服务将表示接受经修订的协议。除另行明确声明外，任何“享订”发布的新代理模式，服务范围扩大或功能增强的新内容均受本协议约束。</p>
						<p>（三）“个人”线下签署或在线接受本代理协议，并不导致本协议立即生效，经过“享订”审核通过，并向“个人”发出代理权有效开通通知时，本协议即在“享订”和“个人”之间产生法律效力。</p>
						<p style="font-weight: 600;font-size: 14px;text-indent: 0;"> 二、申请及相关信息提交： </p>
						<p>（一）证明文件提交：“个人”向“享订”申请代理人资格时，必须向“享订”提交相关证明“个人”真是有效的身份的证明及个人账户及其它信息</p>
						<p>（二）相关信息变更的通知：协议期内，主要信息变更（联系电话、指定提现账户）任何变更都应及时通知“享订”，并提交“享订”变更。</p>
						<p>（三）责任条款：“个人”承诺如其未及时通知“享订”申请更改相关信息，将自行承担全部责任，并保证向“享订”提供的全部相关信息真实、准确且不存在超过失效问题。如因上述原因发生纠纷或被相关国家主管机关处罚，“个人”独立承担全部责任，如给“享订”造成损失的，“个人”同意赔偿其全部损失。</p>
						<p style="font-weight: 600;font-size: 14px;text-indent: 0;">  三、“个人”的声明与保证 ： </p>
						<p>（一）“个人”必须向“享订”提供真实、合法、准确、有效个人信息及相关联系方式，指定账户等，并保证其诸如电子邮件、地址、联系电话、联系地址、邮政编码等内容的有效性，保证“享订”及其他用户可以通过上述联系方式与“个人”进行联系。同时，“个人”也有义务在相关资料实际变更时及时更新有关注册资料。</p>
						<p>（二）其有合法的权利缔结本协议，使用“享订”相关代理权。</p>
						<p>（三）其在代理期限内，有义务按照“享订”规定及发布在“享订”平台上的针对“个人”代理人的相关各类代理细则及制度执行。</p>
						<p>（四）其在代理期限内，保证遵守诚实信用的原则，不在代理过程中采取不正当竞争行为，不扰乱代理行为的正常秩序。</p>
						<p>（五）其保证在代理期限内，实施的所有行为均遵守国家法律、法规和“享订”相关规则、规定以及各种社会公共利益及公共道德。如有违反导致任何法律后果的发生，“个人”应以独立承担所有相应的法律责任。情节严重或影响“享订”声誉，“享订有权”取消“个人”代理权利及代理成果； </p>
						<p>（六）其同意配合及遵守“享订”的个人代理人政策，包括发布的新要求及代理模式，“个人”不得有任何异议。 </p>
						<p style="font-weight: 600;font-size: 14px;text-indent: 0;">  四、代理服务保障 ： </p>
						<p>“个人”代理人，需根据“享订”发布代理业务工作职责和服务要求进行有效的代理服务。因“个人”代理服务出现严重失职或单个酒店服务投诉超过三次，“享订”有权取消“个人”的代理资格或取消投诉酒店的代理权，包括代理成果。“享订“将在代理平台上不时公示新增代理义务条款、规定及代理管理制度，如您对新增或修订的内容有异议或不予遵守执行，可即可向“享订”书面申请终止代理，如无，则意味着接受”享订“新增或修订内容。 </p>
						<p style="font-weight: 600;font-size: 14px;text-indent: 0;"> 五、“享订”的权利和义务：</p>
						<p> （一）“享订”有义务在现有技术上维护整个“享订”平台的正常运行，并努力提升和改进技术，使酒店线上交易活动得以顺利进行； </p>
						<p> （二）对“个人”在注册申请代理人服务中所遇到的与申请有关的问题及反映的情况，“享订”及时作出回复； </p>
						<p> （三）“享订”有权对“个人”注册信息及代理人代理开发的酒店的注册数据、产品价格及交易行为进行查阅，发现注册数据、产品价格或交易行为中存在任何问题或怀疑，均有权向“个人”及酒店发出询问或要求改正的通知，或者直接作出删除或对酒店产品页面采取限制性措施等处理；</p>
						<p style="font-weight: 600;font-size: 14px;text-indent: 0;"> 六、协议的终止：  </p>
						<p> （一）自然终止：本协议到期终止或酒店因任何原因终止，则本协议终止。 </p>
						<p>（二）通知解除：协议任何一方均可以提前十五（15）天书面通知的方式终止本协议。 </p>
						<p>（三）“享订”单方解除权： 如“个人”违反“享订”关于代理人的任何规则或本协议中的任何承诺或保证，包括但不限于本协议项下的任何约定，“享订”有权立刻终止“个人”代理资格及代理成果。 </p>
						<p>（四）“个人”在超过九十（90）天的时间内未以代理人“个人”账户及密码登录的，“享订”有权终止“个人”代理权。 </p>
						<p>（五）如非因“享订”的原因，“个人”未能按本协议及附件之规定执行，“享订”有权部分或全部中止或终止本协议。 </p>
						<p>（六）在本代理协议有效期内，“享订”发现“个人”有另外从事“享订”经营模式或类似模式的其它平台的代理行为或就职与类似平台的行为，“享订”有权取消“个人”代理人的权利及代理成果。 </p>
						<p>（七）本代理协议规定的其他协议终止条件发生或实现，导致本代理协议终止。 </p>
						<p style="font-weight: 600;font-size: 14px;text-indent: 0;"> 七、代理协议期限：  </p>
						<p>本协议在符合本协议第一条款约定的条件时即告生效，本协议有效期一年。协议终止后，双方另有约定的除外，本协议自动延续一年，以此类推 。</p>
						<p style="font-weight: 600;font-size: 14px;text-indent: 0;">八、代理成果： </p>
						<p> 本代理协议期限内，属于“个人”代理人开发上线的酒店、共享酒店的代理结果，“享订”给予“个人”代理人开发代理的酒店在“享订”平台实际产生营业额的1%的代理费。“享订”承诺每周二，“个人”可通过“享订”平台提出代理费的提现。“享订”将在提出提现申请的4个小时内，将“个人”代理成果汇入“个人”指定的提现账户中。逾期一日，“享订”将按实际金额支付千分之五的滞纳金。逾期五日，属于“享订”严重违约及全权承担一切违约责任。</p>
						<p style="font-weight: 600;font-size: 14px;text-indent: 0;">九、保密条款： </p>
						<p> （一）本代理协议所称商业秘密包括但不限于本协议、任何补充协议所述内容以及在合作过程中涉及的其他秘密信息。任何一方未经商业秘密提供方同意，均不得将该信息向任何第三方披露、传播、编辑或展示。协议方承诺，本协议终止后仍承担此条款下的保密义务，保密期将另行持续三年。 </p>
						<p>（二）因对方书面同意以及国家行政、司法强制行为而披露商业秘密的，披露方不承担责任；该商业秘密已为公众所知悉的，披露方不承担责任。 </p>
						<p style="font-weight: 600;font-size: 14px;text-indent: 0;">十、违约责任： </p>
						<p>（一）“个人”同意赔偿在代理期间内，因“个人”未能遵守“享订”发布或出台的代理人政策、职责、规范、制度等造成的任何损失（包括但不限于由此产生的全额的诉讼费用和律师费）。还包括诽谤性的、攻击性的或非法传播资料承担违约责任；由于行为，对其它个人及单位造成的损失由“个人”自行承担全部责任。 </p>
						<p>（二）除本协议及“享订”规则另有约定之外，如一方发生违约行为，守约方可以书面通知方式要求违约方在指定的时限内停止违约行为，并就违约行为造成的损失进行索赔，如违约方未能按时停止违约行为，则守约方有权立即终止本协议。 </p>
						<p style="font-weight: 600;font-size: 14px;text-indent: 0;">十一、争议解决及其他： </p>
						<p>（一）本协议之解释与适用，以及与本协议有关的争议，均应依照中华人民共和国法律予以处理，并以广州市天河区人民法院为第一审管辖法院。 </p>
						<p>（二）如本协议的任何条款被视作无效或无法执行，则上述条款可被分离，其余部份则仍具有法律效力。 </p>
					</div>
				`
				MessageBox({
				  title: '享订.酒店个人代理人申请入驻协议',
				  message,
				  confirmButtonText: '我知道了',
				});
				
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
			},
			status(){
				if(this.status === 1){
					log(this.status == -1,99999)
					this.$router.push(this.Fn.getUrl({path: '/my/myagantEnter'}))
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
				padding: rem(30px) 5%;
			}
			.mm{
				position: relative;
				padding: rem(13px) rem(9px) rem(13px) 0;
				display: flex;
				border-bottom: #aaa solid rem(1px);
				margin-bottom: rem(20px);
				margin-left: 4%;
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
