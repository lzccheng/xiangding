<template>
	<div class="box">
		<Header title="申请入驻"/>
		<myalert :innerHtml="htmltest" title_2="享订入驻协议" @handleCancel="aaa" :show="alertShow" status="1"/>
		<div v-show="enter_status === 1">
			<!-- <div class="back" v-if="general" @click="handleClose_back">
				<div class="box" @click="cancelBubble">
					<p class="title">享订入驻协议</p>
					<p class="text">hello</p>
					<div class="bottom">
						<p @click="handleClose_back">
						   <span>我知道了</span>
						</p>
					</div>
				</div>
			</div> -->
			<div class="content">
				<div class="form">
					<p class="input">
						<label>申请人:</label>
						<input type="text" placeholder="请输入姓名" name="" v-model="formData.realname">
					</p>
					<p class="input">
						<label>联系电话:</label>
						<input @blur="handleCheck" class="handleCheck" type="text" placeholder="请输入电话号码" name="" v-model="formData.mobile">
					</p>
					<p class="input">
						<label>登录账号:</label>
						<input type="text" placeholder="请输入账号" name="" v-model="formData.username" @blur="checkUsername">
					</p>
					<p class="input" style="border-bottom: none">
						<label>密码:</label>
						<input type="password" class="pass"  placeholder="请输入密码"  name="" @blur ="handleCheckPassword" v-model="formData.password">
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
						<label>酒店简称:</label>
						<input type="text" v-model="formData.storeName" placeholder="请输入酒店名称" name="">
					</p>
					<p class="input">
						<label>酒店星级:</label>
						<span class="star"><el-rate v-model="formData.categoryId"></el-rate></span>
					</p>

					<p class="input">
						<label>前台电话:</label>
						<input v-model="formData.storetel" type="text" placeholder="请输入带区号的前台电话" class="hanndleFixPhone" name="">
					</p>
					<p class="input">
						<label>电子邮箱:</label>
						<input type="text" v-model="formData.storeemail" @blur="checkEmail" placeholder="请输入电子邮箱" name="">
					</p>
					<p class="input" id="erea_choose">
						<label>所在地区:</label>
						<span class="choice lineHidden">{{text_erea}}</span>
						<span><i class="fas fa-chevron-down"></i></span>
					</p>
					<!-- <p class="input">
						<label>街道:</label>
						<span class="choice">请选择所在街道</span>
						<span><i class="fas fa-chevron-down"></i></span> 
					</p> -->
					<p class="input">
						<label>详细地址:</label>
						<input type="text" placeholder="请输入街道门牌号" ref="addr_text" name="" @blur="getLongAndLat">
					</p>
					<p class="input">
						<label>地理位置:</label>
						<span>经度: {{choseLng}} , 维度: {{choseLat}}</span>
						<br/>
						<label v-show="formatAddr"></label>
						<span v-show="formatAddr">{{formatAddr}}</span>
					</p>
					<p class="input">
						<label>酒店收款账户:</label>
						<input v-model="formData.hotelbank" type="text" class="handleCheckCredit" placeholder="请输入酒店银行卡号" name="">
					</p>
					<p class="input">
						<label>酒店收款姓名:</label>
						<input v-model="formData.hotelname" type="text" class="handleCheckCredit" placeholder="请输入酒店收款姓名" name="">
					</p>
					<p class="input">
						<label >代理服务商姓名:</label>
						<input type="text" v-model="formData.dailiname" @blur="checkDailiname" placeholder="请输入代理服务商姓名" name="">
					</p>
					<p class="input" style="border-bottom: none">
						<label>代理服务商电话:</label>
						<input style="width: 60%" v-model="formData.dailitel" @blur="handleCheck_" type="text" class="handleCheck_" placeholder="请输入代理服务商的电话号码" name="">
					</p>
				</div>
				<div class="form">
					<p class="input" style="border-bottom: none">
						<label>上传营业执照</label>
					</p>
					<div class="photo">
					    	<label for="file"><i class="far fa-plus-square"></i></label>
						   <input @change="handleFile" type="file" style="display: none" id="file">
						   <div class="file_img" v-show="formData.aptitudeImg[0]">
						   		<img :src="formData.aptitudeImg[0]">
						   </div>
					</div>
				</div>
				<div class="form">
					<p class="input" style="border-bottom: none">
						<label>上传酒店封面图</label>
					</p>
					<div class="photo">
					    	<label for="file2"><i class="far fa-plus-square"></i></label>
						   <input @change="handleFileChange" type="file" style="display: none" id="file2">
						   <div class="file_img" v-show="formData.thumb">
						   		<img :src="formData.thumb">
						   </div>
					</div>
				</div>
				<div class="form bottom">
					<p class="input" style="border-bottom: none">
						<label>填写酒店简介</label>
					</p>
					<div class="photo" style="padding-left: 2%;">
						<textarea cols="40" rows="5" placeholder="请填写酒店简介..."></textarea>
					</div>

				</div>
				<div class="form" style="border-bottom: none;padding-left: 0">
					<div class="footer">
					   <!-- <router-link tag="p" :to="Fn.getUrl({path: '/enter/login'})"  @click="handleFormSubmit" class="green_btn">立即申请</router-link> -->
					   <p @click="handleFormSubmit" class="green_btn">立即申请</p>
					   <!-- <p>&nbsp;</p> -->
					   <!-- <p @click="handleLogin" class="green_btn">登录</p> -->
					</div>
					<div class="agreement_box">
						<span @click="handleShow" class="agreement">《入驻协议》</span>
					</div>
				</div>
			</div>
		</div>
		<div v-show="enter_status === 2">
			<div class="box_2">
				<div class="img">
					<img src="../../../../static/img/hotelStatus/hotelStatus.gif">
				</div>
				<div>
					<p>你的申请正在加急审核中</p>
					<p>请耐心等待</p>
				</div>
				<router-link :to="Fn.getUrl({path: '/'})" tag="div" class="bttn">去首页溜达溜达</router-link>
			</div>

		</div>
		<!-- <div v-show="enter_status === 3">
			<div class="success">
				<p class="icon_"><span><i class="fas fa-check-circle"></i></span></p>
				<p>你的申请已通过</p>
				<p class="login" @click="handleLogin">登录</p>
			</div>
		</div> -->
	</div>
</template>
<script>


	import wx from 'weixin-js-sdk'
	import myalert from '../../../components/alert/alert'
	import { Indicator ,MessageBox  } from 'mint-ui'
	export default {
		mounted(){
			if(window.hotelStatus === 3){
	        	window.location.href = 'https://www.share-hotel.cn/web/index.php?c=user&a=login&dd=1'
	        }
			this.$refs.eye_two.style.display = 'inline-block'
			this.$refs.eye_one.style.display = 'none'
			let that = this
	        var mobileSelect5 = new MobileSelect({
	            trigger: '#erea_choose',
	            title: '请选择地区',
	            wheels: [
	                      {data : [
	                          {name: '广东省',code: '1',children:[
	                            {name: '广州市',code: '22',children:[
	                              {name:'天河区',code:'55',children:[
	                                {name: '景山街道',code: '666'}
	                              ]}
	                            ]}
	                          ]}
	                        ]
	                      }
	                    ],
	            position: [18,0],
	            keyMap: {
	                id:'code',
	                value: 'name',
	                childs :'children'
	            },
	          triggerDisplayData: false,
	          onShow: function(){
	          },
	          onHide:function(){
	          },
	          callback:function(indexArr, data){
	            that.text_erea = data[1].name+data[2].name+data[3].name
	            that.province = data[0].name
	            that.city = data[1].name
	            that.erea = data[2].name
	            that.struct = data[3].name
	            that.formData.provinceId = data[0].name
	            that.formData.cityId = data[1].name
	            that.formData.districtId = data[2].name
                that.formData.streeId = data[3].name
                that.$refs.addr_text.value = ''
	          }
	        })
	        this.Http.getEreaData((res)=>{
	          mobileSelect5.updateWheels(JSON.parse(res.data))
	        })

	        // console.log(wx)
	        // this.$axios.get('?i=3&type=1&shop_id=null&route=member.member.wxJsSdkConfig').then((res)=>{
	        // 	console.log(res)
	        // 	wx.config(res.data.data.config)
	        // 	wx.ready(function(){
	        // 		console.log(888)
	        // 	})
	        // })
	        this.getEnterStatus()
		},
		components: {
		        myalert
		  },
		data(){
			return {
				aa:3,
				htmltest: '<p style="font-size: 13px; text-align: left;">酒店入驻协议内容......</p>',
				alertShow: false,
				enter_status: 1,
				value1: null,
				// general: false,
				formData: {
					realname: '',  //申请人
					beginTime: "00:00",
					endTime: '00:10',
					mobile: '',		//联系电话
					username: '',	//账号
					password: '',	//密码
					storeName: '',	//酒店名称
					categoryId: 1,	//酒店星级
					storetel: '',	//*酒店前台电话
					storeemail: '', //*酒店电子邮件
					dailiname: '', //*代理服务商姓名
					dailitel: '', //*代理服务商电话
					hotelbank: '',  // 酒店收款账号
					aptitudeImg: [], //营业执照
					remark: '', //备注信息
					provinceId: '', //省
					cityId: '', //市
					districtId: '', //区
					streeId: '', //街道
					lng: '', //经度
					lat: '', //纬度
					address: '', //地址
					thumb: '',
					hotelname: ''//酒店收款姓名
				},
				province: '',
				city: '',
				erea: '',
				struct: '',
				text_erea:'请选择地区',
				choseLng: 0,
				choseLat: 0,
				formatAddr: ''
			}
		},
		methods: {
			handleLogin(){
				window.location.href = 'https://www.share-hotel.cn/web/index.php?c=user&a=login&dd=1'
			},
			getEnterStatus(){
				let that = this
				// this.$axios.get('?i=3&type=1&shop_id=null&route=plugin.store-cashier.frontend.store.store.verify-apply-status&').then(res=>{
		  //       	// console.log(res)
		  //       	that.enter_status = res.data.data.status
		  //       })
		  		this.Http.get({route:'plugin.store-cashier.frontend.store.store.verify-apply-status'}).then(res=>{
		  			that.enter_status = res.data.data.status
		  		})
			},
			handleFileChange(e){
				let that = this
				this.Http.imgUpload(e.target,{msg:'图片上传中...'}).then(res=>{
					that.formData.thumb = res.data.data.img
				})
			},
			handleFile(e){
				var e = e || event
				let that = this
				Indicator .open('图片上传中...')
				//?i=3&c=entry&do=shop&type=1&m=yun_shop&route=plugin.store-cashier.frontend.store.store.upload
				let formData = new FormData()

				formData.append('file',e.target.files[0])
				this.$axios({
					url:'/addons/yun_shop/api.php?i=3&c=entry&do=shop&type=1&m=yun_shop&route=plugin.store-cashier.frontend.store.store.upload',
					method: 'post',
					data: formData,
					processData: false
				}).then((res)=>{
					Indicator .close()
					if(res.data.result === 1){
						this.Fn.tips(res.data.msg)
						that.formData.aptitudeImg[0] = res.data.data.img
						log(that.formData.aptitudeImg[0])
					}else{
						this.Fn.tips(res.data.msg)
					}
					// that.$message({
				 //          message: '上传成功！',
				 //          type: 'success'
				 //        });
					
				},err=>{
					Indicator .close()
					console.log(err)
				})
				// this.Http.post({route:'plugin.store-cashier.frontend.store.store.upload&c=entry&do=shop&m=yun_shop',data:formData,config:{processData: false}}).then(res=>{
				// 	console.log(res)
				// },err=>{
				// 	console.log(err)
				// })
			},
			getLongAndLat(e){
				var e = e || event
				if(!this.struct){
					return this.Fn.tips('请选择地区');
				}
				if(e.target.value){
					let that = this
					let value = e.target.value
					let addr = this.province+'/'+this.city+'/'+this.erea+'/'+this.struct+'/'+e.target.value
					let success = (res)=>{
						console.log(111,res)
						if(res.geocodes[0].formattedAddress.split('|').join('').indexOf(value)<0){
							this.Fn.tips('没找到' + value);
							// that.$message({
					  //         message: '没找到'+value,
					  //         type: 'warning'
					  //       });
						}
						that.choseLng = res.geocodes[0].location.lng
						that.choseLat= res.geocodes[0].location.lat
						that.formData.lng = res.geocodes[0].location.lng
						that.formData.lat= res.geocodes[0].location.lat
						that.formatAddr= res.geocodes[0].formattedAddress
						that.formData.address= res.geocodes[0].formattedAddress
					}
					let error = (res)=>{
						console.log(2222,res)
					}
					this.Fn.getLongAndLat(addr,success)
				}else{
					return this.Fn.tips('请输入详细地址');
				}
			},
			handleFormSubmit(){
				let that = this
				// console.log({...that.formData})
				if(!this.formData.realname){
					return this.Fn.tips('请输入申请人');
					// return this.$message({
				 //          message: '请输入申请人',
				 //          type: 'warning'
				 //        });
				}
				if(this.formData.mobile){
					if(!this.Fn.checkPhone(this.formData.mobile)){
						return this.Fn.tips('请输入正确的联系电话');
					}
				}else{
					return this.Fn.tips('联系电话不能为空');
				}
				if(!this.formData.username){
					return this.Fn.tips('账号不能为空！');
				}
				if(!this.formData.password){
					return this.Fn.tips('密码不能为空');
				}
				if(!this.formData.storeName){
				  return this.Fn.tips('酒店名称不能为空')
        		}
				if(!this.formData.storetel){
					return this.Fn.tips('前台电话不能为空')
				}
				if(this.formData.storeemail){
					if (!this.Fn.checkEmail(this.formData.storeemail)) {
						return this.Fn.tips('请输入正确的电子邮箱')
					}
				}else{
					return this.Fn.tips('电子邮箱不能为空')
				}
		        if(!this.struct){
		          return this.Fn.tips('请选择地区');
		        }
				if(!this.formData.address){
					return this.Fn.tips('请填写地址');
				}
				if(!this.formData.hotelbank){
		          return this.Fn.tips('酒店收款账号不能为空');
		        }
		        //酒店收款姓名
		        if(!this.formData.hotelname){
		          return this.Fn.tips('酒店收款姓名不能为空');
		        }
				if(!this.formData.dailiname){
					return this.Fn.tips('代理服务商姓名不能为空')
				}else{
				  if(this.formData.dailiname === this.formData.realname){
				    return this.Fn.tips('代理服务商姓名不能与申请人相同')
          }
        }
				if(this.formData.dailitel){
					if(!this.Fn.checkPhone(this.formData.dailitel)){
						return this.Fn.tips('请输入正确的代理服务商电话')
					}
				}else{
					return this.Fn.tips('代理服务商电话不能为空')
				}
				if(!this.formData.thumb){
					return this.Fn.tips('请上传酒店封面图')
				}
				// this.$axios.post('?i=3&c=entry&do=shop&m=yun_shop&route=plugin.store-cashier.frontend.store.store.apply',{apply:{...that.formData}}).then((res)=>{
				// 	console.log(res)
				// 	if(res.data.result === 1){
				// 		that.$message({
				//           message: res.data.msg,
				//           type: 'success'
				//         });
				// 		that.getEnterStatus()
				// 	}else{
				// 		return that.$message({
				//           message: res.data.msg,
				//           type: 'warning'
				//         });
				// 	}
				// })
				console.log({...that.formData})
				this.Http.post({route:'plugin.store-cashier.frontend.store.store.apply&c=entry&do=shop&m=yun_shop',data:{apply:{...that.formData}}}).then(res=>{
					if(res.data.result === 1){
						that.getEnterStatus()
					}
					that.Fn.tips(res.data.msg)
				})
			},
			handleCheckPassword(){
				let value = document.querySelector('.pass').value
				if(value){
					// if(!this.Fn.checkPassword(value)){
					// 	this.$message({
				 //          message: '请输入正确的密码',
				 //          type: 'warning'
				 //        });
					// }
				}else{
					this.Fn.tips('密码不能为空')
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
			checkDailiname(){
				if(!this.formData.dailiname){
					return this.Fn.tips('代理服务商姓名不能为空')
				}
			},
			checkEmail(){
				if(this.formData.storeemail){
					if (!this.Fn.checkEmail(this.formData.storeemail)) {
						return this.Fn.tips('请输入正确的电子邮箱')
					}
				}else{
					return this.Fn.tips('电子邮箱不能为空')
				}
			},
			checkUsername(){
				if(!this.formData.username){
					return this.Fn.tips('账号不能为空')
				}
			},
			// handleShow_back(){
			// 	this.general = true
			// 	this.Fn.addClass(document.querySelector('html'),'noscroll')
			// },
			// handleClose_back(){
			// 	this.general = false
			// 	this.Fn.removeClass(document.querySelector('html'),'noscroll')
			// },
			// cancelBubble(event){
			// 	event.cancelBubble = true
			// },
			handleCheck(event){
				let value = document.querySelector('.handleCheck').value
				// event.path[0].value
				// (/^1[3|4|5|8][0-9]\d{4,8}$/.test(sMobile))
				if(value){
					if(!this.Fn.checkPhone(value)){
						this.Fn.tips('请输入正确的联系电话')
					}
				}else{
					this.Fn.tips('联系电话不能为空')
				}
			},
			handleCheck_(event){
				let value = document.querySelector('.handleCheck_').value
				// event.path[0].value
				// (/^1[3|4|5|8][0-9]\d{4,8}$/.test(sMobile))
				if(value){
					if(!this.Fn.checkPhone(value)){
						this.Fn.tips('请输入正确的代理服务商电话')
					}
				}else{
					this.Fn.tips('代理服务商电话不能为空')
				}
			},
			hanndleFixPhone(event){
				let value = document.querySelector('.hanndleFixPhone').value
				if(value){
					if (!this.Fn.checkFixedPhone(value)) {
						this.Fn.tips('请输入正确的座机号码')
					}
				}else{
					this.Fn.tips('前台电话不能为空')
				}
			},
			handleShow(){
				// this.alertShow = true
				let message = `
					<div class="book_" style="text-align: left;color: #333;font-size: 12px;line-height: 18px;text-indent: 24px;max-height: 350px;overflow-y: auto;">
						<p>本协议由同意并承诺遵守本协议规定使用享订.酒店预订平台的合法经营实体酒店（下称“酒店”）、广州享订网络科技有限公司（下称“享订”）共同缔结，具有合同效力。</p>
						<p style="font-weight: 600;font-size: 14px;text-indent: 0;">一、协议内容及生效： </p>
						<p>（一）本协议内容包括协议正文及所有“享订”已经发布的或将来可能发布的各类规则。所有规则为协议不可分割的一部分，与协议正文具有同等法律效力。</p>
						<p>（二）酒店在使用“享订”平台提供的各项服务的同时，承诺接受并遵守各项相关规则的规定。“享订”有权根据需要不时地制定、修改本协议或各类规则，如本协议有任何变更，“享订”将在平台上以公示形式通知酒店。任何修订和新规则一经公示，酒店在七日内如未以书面形式提出相关意见，则新规则即时生效，并成为本协议的一部分。登录或继续使用服务将表示接受经修订的协议。除另行明确声明外，任何使服务范围扩大或功能增强的新内容均受本协议约束。 </p>
						<p>（三）酒店线下签署或在线接受本协议并不导致本协议立即生效，经过“享订”审核通过，并向商户发出服务开通通知时，本协议即在“享订”和入住酒店之间产生法律效力。</p>
						<p style="font-weight: 600;font-size: 14px;text-indent: 0;">二、证明文件提交： </p>
						<p>（一）证明文件提交：酒店需入驻“享订”，必须向“享订”提交其在申请服务时应当提供的证明文件或有效的经营证照上传 。</p>
						<p>（二）证明文件变更的通知：协议期内，上述相关证明文件的任何变更都应及时通知“享订”，并补充提交变更后的证明文件。</p>
						<p>（三）责任条款：酒店承诺如其未及时通知或更新其证明文件或其他证明信息自行承担全部责任，酒店保证向“享订”提供的全部证明文件真实、准确且不存在超过时效问题（即保证所有证明文件在整个合同履行期间都处于有效期内）。如因上述原因发生纠纷或被相关国家主管机关处罚，酒店应当独立承担全部责任，如给“享订”造成损失的，酒店同意赔偿其全部损失。</p>
						<p style="font-weight: 600;font-size: 14px;text-indent: 0;">三、酒店的声明与保证 ： </p>
						<p>（一）酒店必须向“享订”提供真实、合法、准确、有效的注册资料，并保证其诸如电子邮件地址、联系电话、联系地址、邮政编码等内容的有效性及安全性，保证“享订”及其他用户可以通过上述联系方式与自己进行联系。同时，酒店也有义务在相关资料实际变更时及时更新有关注册资料。</p>
						<p>（二）其有合法的主体权利缔结本协议，使用“享订”相关服务。</p>
						<p>（三）其发布于“享订”所有酒店房间类似、价格、图片信息（下称“产品”）真实、准确，符合相关法律法规及“享订”规则。</p>
						<p>（四）其对其发布于“享订”交易信息中所涉产品有合法的销售权、经营许可权。</p>
						<p>（五）其将按照不低于《中华人民共和国消费者权益保护法》及其他法规、部门规章和国家强制性标准规定的要求。</p>
						<p>（六）其在“享订”出售产品，有义务按照使用“享订”消费者实际支付的现金金额为消费者开具正规发票，相关税收应按国家相关规定由酒店自行承担。</p>
						<p>（七）其保证在使用服务进行交易的过程中遵守诚实信用的原则，不在交易过程中采取不正当竞争行为，不扰乱网上交易的正常秩序，不从事与网上交易无关的行为。</p>
						<p>（八）其保证在使用服务时实施的所有行为均遵守国家法律、法规和“享订”相关规则、规定以及各种社会公共利益及公共道德。如有违反导致任何法律后果的发生，酒店应以自己的名义独立承担所有相应的法律责任；</p>
						<p>（九）其承诺拥有合法的权利和资格向“享订”上传有关产品销售信息并进行销售，且前述行为未对任何第三方合法权益，包括但不限于第三方知识产权、物权等构成侵害，如因其行为导致“享订”遭受任何第三方提起的索赔，诉讼或行政责任，其将承担相应责任并使“享订”免责。</p>
						<p>（十）其承诺不在发布的产品中使用任何未获授权品牌的关键字。</p>
						<p>（十一）其承诺接受“享订”对其出售产品是否具有合法销售的不定期检查，及与其它酒店预订平台对比审核后上线，其有义务保留其产品具有合法经营的相关凭证。对于无法保证正常销售的酒店产品，“享订”将根据实际情况对商品的真伪作出判断，并根据本协议以及“享订”相关规则进行处理，酒店对此承担举证不利的后果。</p>
						<p>（十二）其入驻“享订”后，同意并支付约定比例的产品销售额作为佣金，酒店仅提现剩余房费底价；</p>
						<p>（十三）其同意配合“享订”的宣传推广策略，设置分销产品，并由“享订”支付给分销商、代理商、代理人的推广佣金。</p>
						<p>（十四）其同意“享订”的交易模式，通过“享订“线上销售后，在消费者退房，线上审核后，提出房费收入的提现规定。”享订“承诺不超过一个工作日内，将扣除佣金的房费，支付到酒店指定的账户内。</p>
						<p style="font-weight: 600;font-size: 14px;text-indent: 0;">四、消费者保障 ： </p>
						<p>消费者保障，只指酒店根据本协议约定的条款和条件及“享订“其他公示规则的规定，通过”享订“发布酒店产品信息，并向消费者出售产品时，应履行“如实描述”、“消费保障”义务。“享订“将在网站不时公示新增的消费者保障义务或对原消费者保障义务内容进行修订。如您对新增或修订的消费者保障义务持有异议，酒店应当终止本协议，如继续使用”享订“服务，则意味着接受”享订“新增或修订内容。 </p>
						<p>（一）消费者保障内容 </p>
						<p style="text-indent: 38px">1、“如实描述”义务：指对上传于“享订“的产品信息进行如实描述，并对描述的产品信息品质负有举证责任。</p>
						<p style="text-indent: 38px">2、“遵守承诺”义务：指酒店应当严格遵守通过各种方式直接或间接向消费者作出的承诺，包括但不限于通过本协议。</p>
						<p>（二）消费者保障责任及处理  </p>
						<p style="text-indent: 38px">1、酒店明确了解并同意酒店是消费者保障的责任主体。当发生本协议前述酒店应当履行消费者保障义务情形时，酒店应保证消费者的消费者权益。对于消费者因前述问题提出的要求，酒店应积极处理。</p>
						<p style="text-indent: 38px">2、酒店同意当消费者通过“享订“提出的消费者保障维权和赔付申请时，商户应积极配合，在“享订”要求的时间期限内提供相关证据材料，并保证所提交的证据材料真实、合法。</p>
						<p style="font-weight: 600;font-size: 14px;text-indent: 0;">五、“享订”的权利和义务： </p>
						<p>（一）“享订”有义务在现有技术上维护交易平台的正常运行，并努力提升和改进技术，使酒店线上交易活动得以顺利进行；</p>
						<p>（二）对酒店在注册使用服务中所遇到的与交易或注册有关的问题及反映的情况，“享订”及时作出回复；</p>
						<p>（三）“享订”有权对酒店的注册数据、产品价格及交易行为进行查阅，发现注册数据、产品价格或交易行为中存在任何问题或怀疑，均有权向酒店发出询问或要求改正的通知，或者直接作出删除或对酒店产品页面采取限制性措施等处理；</p>
						<p>（四）酒店在此授予“享订”免费的许可使用权利(并有权对该权利进行再授权)，使“享订”有权(全部或部份)使用、复制、修订、改写、发布、翻译、分发、执行和展示酒店公示于其“享订”的各类信息或制作其派生作品，和以现在已知或日后开发的任何形式、媒体或技术，将上述信息纳入其它作品内。</p>
						<p style="font-weight: 600;font-size: 14px;text-indent: 0;">六、协议的终止： </p>
						<p>（一）自然终止：本协议到期终止或酒店因任何原因终止，则本协议终止。</p>
						<p>（二）通知解除：协议任何一方均可以提前十五（15）天书面通知的方式终止本协议。 如酒店通过在线点击“确认退驻”按钮申请终止本协议，则系统会立即使酒店产品页面进入“监管”状态，十五天（15）后店铺正式进入退出流程，酒店在退出流程后三十天（30）天方可处理交易纠纷以及与“享订”之间的账务、发票等结算事宜。</p>
						<p>（三）“享订”单方解除权： 如酒店违反“享订”任何规则或本协议中的任何承诺或保证，包括但不限于本协议项下的任何约定，“享订”有权立刻终止本协议。</p>
						<p>（三）“享订”单方解除权： 如酒店违反“享订”任何规则或本协议中的任何承诺或保证，包括但不限于本协议项下的任何约定，“享订”有权立刻终止本协议。</p>
						<p>（四）酒店在超过九十（90）天的时间内未以“享订”账户及密码登录的，“享订”有权终止本协议。</p>
						<p>（五）如非因“享订”的原因，酒店未能按本协议及附件之规定执行，“享订”有权部分或全部中止或终止本协议。</p>
						<p>（六）本协议规定的其他协议终止条件发生或实现，导致本协议终止。</p>
						<p style="font-weight: 600;font-size: 14px;text-indent: 0;">七、协议期限： </p>
						<p>本协议在符合本协议第一条款约定的条件时即告生效，本协议有效期一年。协议终止后，双方另有约定的除外，本协议自动延续一年，以此类推 </p>
						<p style="font-weight: 600;font-size: 14px;text-indent: 0;">八、保密条款： </p>
						<p>（一）本协议所称商业秘密包括但不限于本协议、任何补充协议所述内容以及在合作过程中涉及的其他秘密信息。任何一方未经商业秘密提供方同意，均不得将该信息向任何第三方披露、传播、编辑或展示。协议方承诺，本协议终止后仍承担此条款下的保密义务，保密期将另行持续三年。 </p>
						<p>（二）因对方书面同意以及国家行政、司法强制行为而披露商业秘密的，披露方不承担责任；该商业秘密已为公众所知悉的，披露方不承担责任。 </p>
						<p style="font-weight: 600;font-size: 14px;text-indent: 0;"> 九、有限责任： </p>
						<p>（一）服务将按“现状”和按“可得到”的状态提供。“享订”在此明确声明对服务不作任何明示或暗示的保证，包括但不限于对服务的可适用性，没有错误或疏漏，持续性，准确性，可靠性，适用于某一特定用途之类的保证，声明或承诺。“享订”对服务所涉的技术和信息的有效性，准确性，正确性，可靠性，质量，稳定，完整和及时性均不作承诺和保证。 </p>
						<p>（二）使用服务下载或者获取任何资料的行为均出于酒店的独立判断并自行承担风险。每一个酒店独自承担因此对其电脑系统或资料灭失造成的损失。</p>
						<p>（三）不论在何种情况下，会员通微商城均不对由于Internet连接故障，电脑，通讯或其他系统的故障，电力故障，罢工，劳动争议，暴乱，起义，骚乱，生产力或生产资料不足，火灾，洪水，风暴，爆炸，不可抗力，战争，政府行为，国际、国内法院的命令或第三方的不作为而造成的不能服务或延迟服务承担责任。</p>
						<p style="font-weight: 600;font-size: 14px;text-indent: 0;"> 十、违约责任： </p>
						<p>（一）酒店同意赔偿由于使用服务（包括但不限于将酒店资料展示在网站上）或违反本协议而给“享订”造成的任何损失（包括但不限于由此产生的全额的诉讼费用和律师费）。酒店同意“享订”不对任何酒店张贴的资料，包括诽谤性的、攻击性的或非法的资料承担任何责任；由于此类材料对其它用户造成的损失由酒店自行承担全部责任。</p>
						<p>（二）除本协议及“享订”规则另有约定之外，如一方发生违约行为，守约方可以书面通知方式要求违约方在指定的时限内停止违约行为，并就违约行为造成的损失进行索赔，如违约方未能按时停止违约行为，则守约方有权立即终止本协议。</p>
						<p style="font-weight: 600;font-size: 14px;text-indent: 0;"> 十一、争议解决及其他： </p>
						<p>（一）本协议之解释与适用，以及与本协议有关的争议，均应依照中华人民共和国法律予以处理，并以广州市天河区人民法院为第一审管辖法院。</p>
						<p>（二）如本协议的任何条款被视作无效或无法执行，则上述条款可被分离，其余部份则仍具有法律效力。</p>
						<p>（三）“享订”于酒店过失或违约时放弃本协议规定的权利的，不得视为“享订”对酒店的其他或以后同类之过失或违约行为放弃要求赔偿的权利。</p>
					</div>
					
				`
				MessageBox({
				  title: '享订.酒店平台线上入驻协议',
				  message,
				  confirmButtonText: '我知道了',
				  // confirmButtonClass: 'color'
				});
				
			},
			aaa(res){
				this.alertShow = false
			},
			handleCheckCredit(event){
				let value = document.querySelector('.handleCheckCredit').value
				if(value){
					if (!this.Fn.checkCredit(value)) {
						this.Fn.tips('请输入正确的银行卡号')
					}
				}else{
					this.Fn.tips('银行卡号不能为空')
				}
			},
		},
		watch: {
			$route(to,from){
				if(to.name === 'hotelEnter'){
					this.getEnterStatus()
				}
			},
			enter_status(){
				if(this.enter_status === 3){
					window.location.href = 'https://www.share-hotel.cn/web/index.php?c=user&a=login&dd=1'
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
		font-size: rem(14px);
		padding-top: rem(5px);
		// .color{
		// 	color: #aaa;
		// }
		.back{
			background-color: rgba(0,0,0,0.3);
			position: fixed;
			top: 0;
			left: 0;
			z-index: 9999;
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
					text-align: center;
					font-size: rem(17px);
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
		.content{
			margin-top: rem(25px);
			.form{
				background-color: #ffffff;
				margin-top: rem(8px);
				padding: rem(2px) 0 0 rem(15px);
				border-top: 0.5px solid #aaa;
				border-bottom: 0.5px solid #aaa;
				.photo{
					color: #aaa;
					font-size: rem(48px);
					padding-bottom: rem(8px);
					padding-left: 3%;

				}
				.file_img{

					img{
						max-height: 80%;
						height:rem(120px);
					}
				}
				textarea{
					border: none;
					font-size: rem(15px);
				}
				.input{
					position: relative;
					border-bottom: 0.5px solid #aaa;
					padding: rem(10px) rem(8px);
					label{
						display: inline-block;
						font-size: rem(14px);
						width: 32%;
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
						padding-right: 5%;
						// display: inline-block;
						// width: 60%;
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
					// text-align: center;

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

		.box_2{
			background-color: #fff;
			text-align: center;
			.img{
				img{
					height:rem(300px);
				}
			}
			.bttn{
				width: 90%;
				margin: 0 auto;
				border-radius: rem(5px);
				padding: rem(8px) 0;
				margin-top: rem(40px);
				background-color: #43c122;
				color: #fff;
				font-size: rem(14px);
			}
		}
		.success{
			background-color: #fff;
			text-align: center;
			.icon_{
				padding-top: rem(80px);
				padding-bottom: rem(15px);
				font-size: rem(55px);
				color: #43c122;
			}
			.login{
				width: 90%;
				margin: 0 auto;
				border-radius: rem(5px);
				margin-top: rem(50px);
				padding: rem(10px) 0;
				background-color: #43c122;
				color: #fff;
				font-size: rem(14px);
			}
		}

	}
</style>
