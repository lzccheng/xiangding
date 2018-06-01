<template>
	<div class="box">
		<Header title="钟点房发布" />
		<myalert :innerHtml="htmltest" title_3="价格设置" @handleCancel="aaa" :show="alertShow" status="0" />
		<myalert :innerHtml="htmltest_1" title_3="取消扣费设置" @handleCancel="aaa_1" :show="alertShow_1" status="0" />
		<!-- <div v-if="general" class="back" @click="handBack">
			<div class="alert" @click="cancelBubble">
				<p class="tip">取消扣费设置</p>
				<p class="tip_1">超过<input type="text">小时</p>
				<p class="tip_1">扣除<input type="text"> &nbsp;&nbsp;%</p>
				<p class="choice">
					<span @click="handBack">取消</span>
					<span>确定</span>
				</p>
			</div>
		</div> -->
		<div class="body">
			<ul>
				<li class="item">
					<span class="name">房间名称:</span>
					<span class="hide_1"><input type="text" v-model="formData.title" placeholder="请填写房间名称"></span>
					<!-- <span class="select_1">
						<el-select v-model="select2" slot="prepend" placeholder="请选择">
					      <el-option label="商务大床房" value="1"></el-option>
					      <el-option label="总统房" value="2"></el-option>
					      <el-option label="特惠商务房" value="3"></el-option>
					    </el-select>
					</span> -->
				</li>
				<li >
					<el-collapse v-model="activeNames" @change="handleChange">
						<el-collapse-item title="价格设置" name="2">
						    <p class="button" style="margin-bottom: 17px">
							    <el-checkbox-group v-model="formData.param_value[0]">
								    <el-checkbox label="1小时99元"></el-checkbox><br/>
								    <el-checkbox label="2小时159元"></el-checkbox><br/>
								    <el-checkbox label="3小时239元"></el-checkbox><br/>
								</el-checkbox-group>
							</p>
						    <!--<p class="add_1">-->
						        <!--<span @click="handleShow" >-->
							    	<!--<span class="add_icon" ><i class="fas fa-plus-square"></i></span>-->
							    	<!--<span class="add_text">添加</span>-->
						    	<!--</span>-->
						    <!--</p>-->
						 </el-collapse-item>
					</el-collapse>
				</li>
				<li class="item">
					<span class="name">可住人数:</span>
					<span class="hide_1"><input type="text" v-model="formData.param_value[1]" placeholder="请填写钟点房可住人数"></span>
				</li>
				<li class="item">
					<span class="name">房间规格:</span>
					<span class="hide_1"><input type="text" v-model="formData.param_value[2]" placeholder="请填写房间大小(100*100平方)"></span>
				</li>
				<li >
					<el-collapse v-model="activeNames" @change="handleChange">
						<el-collapse-item title="取消政策" name="1">
						    <p class="button">
						    	<span>免费取消</span>
						    	<span class="open">
						    		<el-switch
									  v-model="value3"
									  active-color="#43c122"
									  inactive-color="#999999">
									</el-switch>
						    	</span>
						    </p>
						    <p class="select">
						    	<span>
						    		 <el-checkbox-group v-model="formData.param_value[3]">
									    <el-checkbox label="超过1小时扣费10%" :disabled="value3" ></el-checkbox>
									  </el-checkbox-group>
						    	</span>
						    </p><br/>
						    <!--<p class="add_1">-->
						        <!--<span @click="handleShow_1" :class="{color:value3}" >-->
							    	<!--<span class="add_icon" ><i class="fas fa-plus-square"></i></span>-->
							    	<!--<span class="add_text">添加</span>-->
						    	<!--</span>-->
						    <!--</p>-->
						 </el-collapse-item>
					</el-collapse>
				</li>
				<!--<li class="item">-->
					<!--<span class="name">床型:</span>-->
					<!--<span class="select_1">-->
						<!--<el-select v-model="select5" slot="prepend" placeholder="请选择">-->
					      <!--<el-option label="1.5米" value="1"></el-option>-->
					      <!--<el-option label="1.8米" value="2"></el-option>-->
					      <!--<el-option label="2米" value="3"></el-option>-->
					    <!--</el-select>-->
					<!--</span>-->
				<!--</li>-->

				<li class="item">
					<span class="name">窗户:</span>
					<div class="select_1">
						<el-select v-model="formData.param_value[4]" slot="prepend" placeholder="请选择">
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
							<label for="file"><i class="far fa-plus-square"></i></label>
							<input type="file" @change="handleFile" id="file" style="display: none">
						</div>
              <div class="photo_show" v-show="formData.thumb">
                <img :src="formData.thumb" alt="">
              </div>
						<!--<span class="hide_1">最多添加4张</span>-->
					</div>
				</li>
			</ul>
			<!-- <div class="add_room">
				<span><i class="far fa-plus-square"></i></span>
				<span class="color">添加房间</span>
			</div> -->
			<div class="send">
				<button class="green_btn" @click="handleRoomSend">发布</button>
			</div>
		</div>
	</div>
</template>
<script>
	import myalert from '../../../components/alert/alert'
	export default {
		components: {
			myalert
		},
		data(){
			return {
				  htmltest: '<div style="display: block; padding-bottom: 10px;"><input type="text" style="width: 19%;border-bottom: #000 solid 1px;text-align: center;">小时</div><div>&nbsp;<input type="text" style="width: 19%;border-bottom: #000 solid 1px;text-align: center;">元 &nbsp;&nbsp;&nbsp;&nbsp;</div>',
				  htmltest_1: '<div style="display: block; padding-bottom: 10px;">超过<input type="text" style="width: 19%;border-bottom: #000 solid 1px;text-align: center;">小时</div><div>&nbsp;扣除<input type="text" style="width: 19%;border-bottom: #000 solid 1px;text-align: center;">% &nbsp;&nbsp;&nbsp;&nbsp;</div>',
				  alertShow: false,
				  alertShow_1: false,
				  activeNames:[],
				  input3: '',
          input4: '',
          input5: '',
          select2: '商务大床房',
          select3: '3小时',
          select5: '1.5米',
          select6: '是',
          // activeNames: ['1'],
          value1: true,
          value2: true,
          value3: true,
          checkList2: ['超过1小时扣费10%'],
          // general: false,
          checkList1: ['1小时99元'],
          formData:{
              uniaci: 3,
              display_order: 1,
              title:'',
              parentid: 0,
              is_recommand: 0,
              goods_sn: new Date().getTime(),
              product_sn: new Date().getTime(),
              content: '8888888',
              childid: 0,
              brand_id: 5,
              type: 1,
              sku: '间',
              thumb_url: '999',
              price: 0,
              market_price: 0,
              cost_price: 0,
              stock: 1,
              reduce_stock_method: 1,
              status: 1,
              weight: '1',
              thumb: '',
              param_title:[
                '价格设置',
                '可住人数',
                '房间规格',
                '取消政策',
                '是否有窗户'
              ],
              param_value:[
                ['1小时99元'],
                '',
                '',
                ['超过1小时扣费10%'],
                '是'
              ]
            }
			}
		},
		methods: {
      handleFile(e){
        var e = e || event
        let that = this
        console.log(e.target.files[0])
        this.Http.imgUpload(e.target,{msg:'图片上传中...'}).then(res=>{
          console.log(res)
          if(res.data.result === 1){
            that.formData.thumb = res.data.data.img
          }
          that.Fn.tips(res.data.msg)
        })
      },
      handleRoomSend(){
        if(!this.formData.title){
          return this.Fn.tips('房间名称不能为空！')
        }
        if(!this.formData.param_value[1]){
          return this.Fn.tips('请输入可住人数！')
        }else{
          if(!this.Fn.checkNumber(this.formData.param_value[1])){
            return this.Fn.tips('可住人数请输入数字！')
          }
        }
        if(!this.formData.param_value[2]){
          return this.Fn.tips('房间规格不能为空！')
        }
        if(!this.formData.thumb){
          return this.Fn.tips('请上传房间照片！')
        }
        console.log({...this.formData})
        let that = this
        this.Http.post({route:'plugin.store-cashier.store.admin.goods.add',baseUrl: '/web/index.php?c=site&a=entry&m=yun_shop&do=1022&action=true&',data:{...this.formData}}).then(res=>{
          console.log('post',res)
          that.Fn.tips(res.data.msg)
          if(res.data.code === 200){
            that.$router.push(that.Fn.getUrl({path:'/my/roomEnter'}))
          }
        })
      },
			handleChange(val) {
		      },
		    handleShow(){
				this.alertShow = true
			},
			aaa(res){
				this.alertShow = false
			},
			handleShow_1(){
				if(!this.value3){
					this.alertShow_1 = true
				}
			},
			aaa_1(res){
				this.alertShow_1 = false
			},
		 //    handGeneral(event){
			// 	this.general = true
			// 	this.Fn.addClass(document.querySelector('html'),'noscroll')
			// },
			// handBack(){
			// 	this.general = false
			// 	this.Fn.removeClass(document.querySelector('html'),'noscroll')
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
		font-size: rem(13px);
		padding-top: rem(20px);
		.back{
			background-color: rgba(0,0,0,0.3);
			position: fixed;
			top: 0;
			left: 0;
			height: 100%;
			z-index: 9999;
			width: 100%;
			font-size: rem(14px);
			.alert{
				width: 80%;
				background-color: #ffffff;
				position: absolute;
				top: rem(200px);
				left: 10%;
				text-align: center;
				border-radius: rem(8px);
				.choice{
					span{
						&:last-child{
							color: #43c122;
						}
					}
				}
				.tip{
					font-weight: bold;
				}
				.tip_1{
					width: 58%;
					margin: 0 auto;
					input{
						width: 20%;
						text-align: center;
						border-top: none;
						border-left: none;
						border-right: none;
						border-bottom: #333 solid rem(1px);
						margin: 0;
					}
				}
				p{
					padding-top: rem(20px);
					display: flex;
					justify-content: space-around;
					&:first-child{
						font-weight: bold;
					}
					span{
						border-top: #aaa solid rem(1px);
						width: 50%;
						padding: rem(10px) 0;
						&:first-child{
							border-right: #aaa solid rem(1px);
						}
					}
				}
			}
		}
		.body{
			padding: 0 rem(16px);
			p{
				&.add_1{
					.color{
						span{
							color: #C6C9D1;
						}
					}
				}
				.open{
					float: right;
				}
				.add_icon{
					color: #409EFF;
					font-size: rem(14px);
				}
				.add_text{
					color: #409EFF;
					margin-left: rem(4px);
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
					width: 20%;
				}
				.select{
					margin-left: 5%;
			     }
				.hide{
					margin-left: 2%;
					color: #e5e5e5;
				}
				.hide_1{
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
					z-index: 999;
				 }
				.hide_1{
					color: #aaa;
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
			padding: rem(10px) 5%;
		}
	}
</style>
