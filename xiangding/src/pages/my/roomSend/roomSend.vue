<template>
	<div class="box">
		<Header :title="title" />
		<myalert :innerHtml="htmltest" title_3="取消扣费设置" @handleCancel="aaa" :show="alertShow" status="0" />
		<myalert :innerHtml="htmltest_1" title_3="设施设备" @handleCancel="aaa_1" :show="alertShow_1" status="0" />

		<div class="body">
			<ul>
				<li class="item">
					<span class="name">房间名称:</span>
					<span class="hide_1"><input v-model="formData.title" type="text" placeholder="请填写房间名称"></span>
					<!-- <span class="select_1">
						<el-select v-model="select2" slot="prepend" placeholder="请选择">
					      <el-option label="商务大床房" value="1"></el-option>
					      <el-option label="总统房" value="2"></el-option>
					      <el-option label="特惠商务房" value="3"></el-option>
					    </el-select>
					</span> -->
				</li>
				<li class="item">
					<span class="name">单间原价:</span>
					<span class="hide_1"><input type="text" placeholder="请填写房间原价" v-model="formData.market_price"></span>
				</li>
				<li class="item">
					<span class="name">单间价格:</span>
					<span class="hide_1"><input type="text" placeholder="请填写房间的价格" v-model="formData.price"></span>
				</li>
				<li class="item">
					<span class="name">可售房数:</span>
					<span class="hide_1"><input type="text" placeholder="请填写房间数量" v-model="formData.stock"></span>
				</li>
				<li class="item">
					<span class="name">可住人数:</span>
					<span class="hide_1"><input type="text" placeholder="请填写房间可住人数" v-model="formData.param_value[0]"></span>
				</li>
				<li class="item">
					<span class="name">房间规格:</span>
					<span class="hide_1"><input type="text" placeholder="请输入房间大小(例如：100平方)" v-model="formData.param_value[1]"></span>
				</li>
				<!-- <li >
					<el-collapse v-model="activeNames">
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
						    		 <el-checkbox-group v-model="formData.param_value[2]">
									    <el-checkbox label="超过1小时扣费10%" :disabled="value2"></el-checkbox>
									  </el-checkbox-group>
						    	</span>
						    </p><br/> -->
						    <!--<p class="add_1">-->
						        <!--<span @click="handleShow" :class="{color:value2}" >-->
							    	<!--<span  class="add_icon"><i class="fas fa-plus-square"></i></span>-->
							    	<!--<span class="add_text">添加</span>-->
						    	<!--</span>-->
						    <!--</p>-->
					<!-- 	 </el-collapse-item>
					</el-collapse>
				</li> -->
				<li class="item">
					<span class="name">早餐提供:</span>
					<div class="select_1">
						<el-select v-model="formData.param_value[3]" slot="prepend" placeholder="请选择">
					      <el-option label="有" value="1"></el-option>
					      <el-option label="无" value="2"></el-option>
					    </el-select>
					</div>
				</li>
				<li class="item">
					<span class="name">床型:</span>
					<span class="select_1">
						<el-select v-model="formData.param_value[6]" slot="prepend" placeholder="请选择">
					      <el-option label="1.5米" value="1"></el-option>
					      <el-option label="1.8米" value="2"></el-option>
					      <el-option label="2米" value="3"></el-option>
					    </el-select>
					</span>
				</li>
				<li class="item">
					<span class="name">窗户:</span>
					<div class="select_1">
						<el-select v-model="formData.param_value[4]" slot="prepend" placeholder="请选择">
					      <el-option label="有" value="1"></el-option>
					      <el-option label="无" value="2"></el-option>
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
						<!--<span class="hide_1">最多添加4张</span>-->
					</div>
					<div class="photo_show" v-show="formData.thumb">
						<div>
							<img :src="formData.thumb">
						</div>
					</div>
				</li>
				<li class="item ">
				    <p class="padding-bottom">房间配套设施:</p>
					<div class="check">
					<div class="padding-bottom">
						  <el-checkbox-group v-model="formData.param_value[5]">
						  	<span class="check_box" ><el-checkbox label="24小时热水"></el-checkbox></span>
						  	<span class="check_box"><el-checkbox label="拖鞋"></el-checkbox></span>
						  	<span class="check_box"><el-checkbox label="吹风机"></el-checkbox></span>
						  	<span class="check_box"><el-checkbox label="电视机"></el-checkbox></span>
						  	<span class="check_box"><el-checkbox label="有线无线宽带"></el-checkbox></span>
						  </el-checkbox-group>
					</div>
					<!--<span class="add" @click="handleShow_1">-->
						  <!--<span class="add_more"><i class="far fa-plus-square"></i></span>-->
						  <!--<span>添加更多</span>-->
					<!--</span>-->
					</div>
				</li>
			</ul>
			<div class="send">
				<button v-if="title === '房间发布'" @click="handleRoomSend" class="green_btn">发布</button>
				<button v-else class="green_btn">确定</button>
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
		mounted(){
			if(this.$route.query.title){
				this.title = this.$route.query.title
			}
		},
		data(){
			return {
				htmltest: '<div style="display: block; padding-bottom: 10px;">超过<input type="text" style="width: 19%;border-bottom: #000 solid 1px;text-align: center;">小时</div><div>&nbsp;扣除<input type="text" style="width: 19%;border-bottom: #000 solid 1px;text-align: center;">% &nbsp;&nbsp;&nbsp;&nbsp;</div>',
				htmltest_1: '<p><input type="text" style="border: #aaa solid 1px;border-radius: 5px;padding: 5px 0;" placeholder="请输入设备名称"></p>',
				alertShow: false,
				alertShow_1: false,
				input3: '',
			    input4: '',
			    input5: '',
			    select5: '1.5米',
			    select6: '是',
			    select7: '是',
			    checkList1: ['24小时热水'],
			    value1: true,
          value2: true,
          checkList2: ['超过1小时扣费10%'],
          activeNames:[],
          title: '房间发布',
          formData:{
            uniaci: 3,
            display_order: 1,
            title:'',
            parentid: 0,
            is_recommand: 0,
            goods_sn: new Date().getTime(),
            product_sn: new Date().getTime()+10,
            content: '8888888',
            childid: 0,
            brand_id: 2,
            type: 1,
            sku: '间',
            thumb_url: '999',
            price: '',
            market_price: '',
            cost_price: 0,
            stock: '',
            reduce_stock_method: 1,
            status: 1,
            weight: '1',
            thumb: '',
            param_title:[
              '可住人数',
              '房间面积',
              '取消政策',
              '是否供应早餐',
              '是否有窗户',
              '房间配套设施',
              '床型'
            ],
            param_value:[
              '',
              '',
              ['超过1小时扣费10%'],
              '是',
              '是',
              ['24小时热水'],
              '1.5米'
            ]
          }
			}
		},
		methods: {
			handleRoomSend(){
				// this.Http.get({route:'plugin.store-cashier.store.admin.goods.add',baseUrl: '/web/index.php?c=site&a=entry&m=yun_shop&do=1022&action=true&',params:{...this.formData}}).then(res=>{
				// 	console.log('get',res)
				// })
        if(!this.formData.title){
          return this.Fn.tips('房间名称不能为空！')
        }
        if(!this.formData.market_price){
          return this.Fn.tips('请输入单间原价！')
        }else{
          if(!this.Fn.checkNumber(this.formData.market_price)){
            return this.Fn.tips('单间原价请输入数字！')
          }
        }
        if(!this.formData.price){
          return this.Fn.tips('请输入单间价格！')
        }else{
          if(!this.Fn.checkNumber(this.formData.price)){
            return this.Fn.tips('单间价格请输入数字！')
          }
        }
        if(!this.formData.stock){
          return this.Fn.tips('请输入可售房数！')
        }else{
          if(!this.Fn.checkNumber(this.formData.stock)){
            return this.Fn.tips('可售房数请输入数字！')
          }
        }
        if(!this.formData.param_value[0]){
          return this.Fn.tips('请输入可住人数！')
        }else{
          if(!this.Fn.checkNumber(this.formData.param_value[0])){
            return this.Fn.tips('可住人数请输入数字！')
          }
        }
        if(!this.formData.param_value[1]){
          return this.Fn.tips('请输入房间规格！')
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
			handleShow(){
				if(!this.value2){
					this.alertShow = true
				}
			},
			aaa(res){
				this.alertShow = false
			},
			handleShow_1(){
				this.alertShow_1 = true
			},
			aaa_1(res){
				this.alertShow_1 = false
			},
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
			cancelBubble(e){
				var e = e || event
				e.cancelBubble = true
			},

		},
		watch:{
			$route(to,from){
				if(to.name === 'roomSend'){
					if(this.$route.query.title){
						this.title = this.$route.query.title
					}
				}
			}
		}
	}
</script>
<style scoped lang="scss">
	@import "../../../common/css/common.scss";
	.box{
		width: 100%;
		position: relative;
		font-size: rem(13px);
		padding-top: rem(24px);
		.back{
			background-color: rgba(0,0,0,0.3);
			position: fixed;
			top: 0;
			left: 0;
			height: 100%;
			z-index: 999;
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
					.input{
						width: 100%;
						border: #aaa solid rem(1px);
						border-radius: rem(5px);
						padding: rem(7px) 6%;
						text-align: left;
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
				&.button{
					span{
						// padding-left: rem(10px);
					}
				}
				.open{
					float: right;
				}
				.add_icon{
					color: #409EFF;
					// padding: 0 rem(17px);
					font-size: rem(14px);
				}
				.add_text{
					color: #409EFF;
					// font-size: rem(14px);
				}
			}
			.item{
				position: relative;
				border-bottom: #e5e5e5 solid rem(1px);
				padding: rem(15px) 0;
				// .add{
				// 	font-size: rem(14px);
				// }
				.name_1{
					font-size: rem(13px);
				}
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
					font-size: rem(13px);
				}
				.select{
					margin-left: 5%;

			     }

				// .hide{
				// 	margin-left: 2%;
				// 	color: #aaa;
				// }
				.hide_1{
					input{
						width: 67%;
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
				// .name{
				// 	font-size: rem(13px);
				// }
				.photo{
					padding-bottom: rem(4px);
					.icon{
						display: inline-block;
						border: #c9c9c9 solid rem(1px);
						padding: rem(32px) rem(35px);
						margin-left: 35%;
						border-radius: rem(9px);
						color: #43c122;
						font-size: rem(14px);
					 }
					.hide_1{
						color: #aaa;
						margin-left: 5%;
						// font-size: rem(13px);
					}
			    }
			    .photo_show{
			    	div{
			    		display: inline-block;
              margin: 0 auto;
			    		width: 50%;
			    		border-radius: rem(5px);
			    		img{
                margin: 0 auto;
                border-radius: rem(5px);
			    			width:100%;
			    			heigh: 90px;
			    		}
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
