<template>
	<div class="box">
		<Header title="会议室发布" />
		<div v-if="general" class="back" @click="handBack">
			<div class="alert" @click="cancelBubble">
				<p class="tip">LED屏设置</p>
				<p class="tip_1">屏幕大小<input type="text">×<input type="text">米</p>
				<p class="tip_1">价格<input type="text"> 元</p>
				<p class="choice">
					<span @click="backHide">取消</span>
					<span style="color:">确定</span>
				</p>
			</div>
		</div>
		<div class="body">
			<ul>
				<li class="item">
					<span class="name">会议室名称:</span>
					<span class="hide_1"><input type="text" v-model="formData.title" placeholder="请填写会议室名称"></span>
				</li>
				<li class="item">
					<span class="name">会议室原价:</span>
					<span class="hide_1"><input type="text" v-model="formData.market_price" placeholder="请填写会议室原价"></span>
				</li>
				<li class="item">
					<span class="name">会议室价格:</span>
					<span class="hide_1"><input type="text" v-model="formData.price" placeholder="请填写会议室价格"></span>
				</li>
				<!--<li class="item">-->
					<!--<span class="name">会议室数量:</span>-->
					<!--<span class="hide_1"><input type="text" placeholder="请填写酒店会议室数量"></span>-->
				<!--</li>-->
				<li class="item">
					<span class="name">会议室面积:</span>
					<span class="hide_1"><input type="text" v-model="formData.param_value[0]" placeholder="请填写酒店会议室面积(100*100平方)"></span>
				</li>
				<li class="item">
					<span class="name">窗户:</span>
					<div class="select_1">
						<el-select focus="this.blur()" v-model="formData.param_value[1]" slot="prepend" placeholder="请选择">
					      <el-option label="是" value="1"></el-option>
					      <el-option label="否" value="2"></el-option>
					      <el-option label="部分有窗" value="3"></el-option>
					    </el-select>
					</div>
				</li>
				<li class="item">
					<span class="name">提供LED屏:</span>
					<span class="check_box"><el-checkbox v-model="checked1">&nbsp;</el-checkbox></span>
				</li>
				<li class="item" v-if="checked1">
					<span class="right">
						<el-checkbox-group v-model="formData.param_value[2]">
							 <el-checkbox label="1 × 2米LED屏"></el-checkbox><br/>
	                         <el-checkbox label="1.5 × 3.5米LED屏"></el-checkbox><br/>
	                         <el-checkbox label="2.5 × 5.5米LED屏"></el-checkbox>
	                    </el-checkbox-group>
                         <div class="led_money">
                         	<p>299元</p>
                         	<p>499元</p>
                         	<p>599元</p>
                         </div>
                         <span @click="handGeneral">
                            <span class="i">
                            <i class="fas fa-plus-square"></i><span class="text">添加</span>
                            </span>
                         </span>
					</span>
				</li>
				<!-- <li class="item">
					<span class="name">服务手机号:</span>
					<span class="hide_1"><input type="text" placeholder="请输入会议室服务手机号"></span>
				</li> -->
				<li class="item">
					<span class="name">可容纳人数:</span>
					<span class="hide_1"><input type="text" v-model="formData.param_value[3]" placeholder="请输入会议室大约可容纳人数"></span>
				</li>
				<li class="item_1">
				    <span class="name">会议室照片:</span>
				    <div class="photo">
						<div class="icon">
							<label for="file"><i class="far fa-plus-square"></i></label>
							<input type="file" @change="handleFile" id="file" style="display: none">
						</div>
            <div class="photo_show">
              <div v-show="formData.thumb">
                <img :src="formData.thumb">
              </div>
            </div>
						<!--<span class="hide_1">最多添加4张</span>-->
					</div>
				</li>
				<li class="item ">
				    <p class="padding-bottom">会议室配套设施:</p>
					<div class="check">
						<div>
							  <el-checkbox-group v-model="formData.param_value[4]">
							  	<span>
							  	   <el-checkbox label="话筒"></el-checkbox>
							  	</span>
							  	<span>
							  	    <el-checkbox label="有线无线宽带"></el-checkbox>
							  	</span>

							  </el-checkbox-group><br/>
						</div>
						<div >
							  <span class="add_more"><i class="far fa-plus-square"></i></span>
							  <span class="=addmore_text">添加更多</span>
						</div>
					</div>
				</li>
			</ul>
			<!-- <div class="add_room">
				<span><i class="far fa-plus-square"></i></span>
				<span class="color">添加会议室</span>
			</div> -->
			<div class="send">
				<button class="green_btn" @click="handleRoomSend">发布</button>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				  input3: '',
			      input4: '',
			      input5: '',
			      select6: '是',
			      checkList: ['话筒'],
			      checked: true,
			      checked1: false,
			      radio: '1',
			      general: false,
			      checkList2: ['1 × 2米LED屏'],
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
              brand_id: 3,
              type: 1,
              sku: '间',
              thumb_url: '999',
              // price: 0,
              // market_price: ,
              cost_price: 0,
              stock: 1,
              reduce_stock_method: 1,
              status: 1,
              weight: '1',
              thumb: '',
              param_title:[
                '会议室面积',
                '是否有窗户',
                '提供LED屏',
                '可容纳人数',
                '房间配套设施'
              ],
              param_value:[
                '',
                '是',
                ['1 × 2米LED屏'],
                '',
                ['话筒']
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
          return this.Fn.tips('会议室名称不能为空！')
        }
        if(!this.formData.market_price){
          return this.Fn.tips('请输入会议室原价！')
        }else{
          if(!this.Fn.checkNumber(this.formData.market_price)){
            return this.Fn.tips('会议室原价请输入数字！')
          }
        }
        if(!this.formData.price){
          return this.Fn.tips('请输入会议室价格！')
        }else{
          if(!this.Fn.checkNumber(this.formData.price)){
            return this.Fn.tips('会议室价格请输入数字！')
          }
        }
        if(!this.formData.param_value[0]){
          return this.Fn.tips('请输入会议室面积！')
        }
        if(!this.formData.param_value[3]){
          return this.Fn.tips('请输入可容纳人数！')
        }else{
          if(!this.Fn.checkNumber(this.formData.param_value[3])){
            return this.Fn.tips('可容纳人数请输入数字！')
          }
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
			handGeneral(event){
					this.general = true
				},
			handBack(){
				this.general = false
			},
			cancelBubble(event){
				event.cancelBubble = true
			},
			backHide(){
				this.general = false
			}
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
			.item{
				position: relative;
				border-bottom: #e5e5e5 solid rem(1px);
				padding: rem(15px) 0;
				.right{
					position: relative;
					display: inline-block;
					width: 98%;
					.led_money{
						font-size: rem(13px);
						position: absolute;
						top: 0;
						right: 0;
					}
					.i{
						font-size: rem(14px);
						color: #409EFF;
						margin-top: rem(20px);
						display: inline-block;
						.text{
							font-size: rem(15px);
							margin-left: rem(7px);
						}
					}
				}
				.check{
					position: relative;
					padding-bottom: rem(5px);
					div{
						&:first-child{
							span{
								margin-right: 5%;
							}
						}
					}
					// .check_box{
					// 	padding: rem(3px) 5%;
					// }
					// .add_box{
					// 	padding: rem(10px) 0;
					// 	position: absolute;
					// 	bottom: rem(-20px);
					// 	right: 0;

					// }
				}
				.padding-bottom{
					padding-bottom: rem(10px);
				}
				.name{
					display: inline-block;
					width: 22%;
				}
				.check_box{
					float: right;
				}
				.select{
					margin-left: 5%;
			     }
				.hide{
					margin-left: 2%;
					color: #e5e5e5;
				}
				.hide_1{
					color: #e5e5e5;
					input{
						width: 70%;
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
					font-size: rem(14px);
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
				 }
				.hide_1{
					color: #aaa;
					margin-left: 5%;
				}
			 }
        .photo_show{
          width: 50%;
          img{
            width: 100%;
          }
        }
			}
			.add_room{
				text-align: center;
				padding: rem(20px) 0;
				color: #43c122;
				span{
					&:first-child{
						font-size: rem(14px);
					}
					&.color{
						color: #000;
					}
				}

			}
		}

		.send{
			padding: rem(10px) rem(20px);
		}
	}
</style>
