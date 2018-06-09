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
						<input v-model="formData.storetel" type="text" placeholder="请输入带区号得座机号码" class="hanndleFixPhone" name="">
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
						<input v-model="formData.store_hotelname" type="text" class="handleCheckCredit" placeholder="请输入酒店收款姓名" name="">
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
					   <router-link tag="p" :to="Fn.getUrl({path: '/enter/login'})"  @click="handleFormSubmit" class="green_btn">立即申请</router-link>
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
					store_hotelname: ''//酒店收款姓名
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
					console.log(res)
					if(res.data.result === 1){
						this.Fn.tips(res.data.msg)
					}else{
						this.Fn.tips(res.data.msg)
					}
					// that.$message({
				 //          message: '上传成功！',
				 //          type: 'success'
				 //        });
					that.formData.aptitudeImg[0] = res.data.data.img
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
		        if(!this.formData.store_hotelname){
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
				MessageBox({
				  title: '享订入驻协议',
				  message: '酒店入驻协议内容',
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
