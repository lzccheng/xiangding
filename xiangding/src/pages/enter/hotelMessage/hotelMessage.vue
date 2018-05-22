<template>
	<div class="box">
		<myalert :innerHtml="htmltest_1" title_3="设施设备" @handleCancel="aaa_1" :show="alertShow_1" status="0" />
		<Header title="酒店信息"/>
		<div class="body">
			<p class="input">
			  <span class="message">基本信息</span>
			  <span class="numb">0/11</span>
			</p>
			<p class="input">
			  <span class="name">酒店名称:</span>
			  <span class="color_aaa">银河大酒店</span>
			</p>
			<p class="input">
			  <span class="name">电话号码:</span>
			  <span class="color_aaa">18877892216</span>
			</p>
			<p class="input">
			  <span class="name">酒店区域:</span>
			  <span class="color_aaa">广东</span>
			</p>
			<p class="input">
			  <span class="name">酒店星级:</span>
			  <span class="color_aaa"> <el-rate v-model="value1"></el-rate></span>
			</p>
			<p class="input">
			  <span class="name">房间数量:</span>
			  <span class="color_aaa"><input type="text" placeholder="酒店房间总数"></span>
			</p>
			<p class="input">
			  <span class="name">会议室数量:</span>
			  <span class="color_aaa"><input type="text" placeholder="请输入会议室数量"></span>
			</p>
			<p class="input">
			  <span class="name">最多容纳人数:</span>
			  <span class="color_aaa"><input type="text" placeholder="请输入最多容纳人数"></span>
			</p>
			<p >
			  <span>酒店配套设施:</span>
			</p>
			<p class="bottom">	 
		      <span>
			  	 <el-checkbox-group v-model="checkList">
				    <span class="check_box"><el-checkbox label="夜总会"></el-checkbox></span>
				    <span class="check_box"><el-checkbox label="酒吧"></el-checkbox></span>
				    <span class="check_box"><el-checkbox label="KTV"></el-checkbox></span>
				    <span class="check_box"><el-checkbox label="健身房"></el-checkbox></span>
				  </el-checkbox-group>
			  </span>
			  </p>
			  <p class="input">
			  	<span @click="handleShow_1">
				    <span class="more_icon"><i class="far fa-plus-square"></i></span>
				  	<span class="more">添加更多</span>
			  	</span>
			  </p>
			  <p >
			  	<span class="name">酒店封面图:</span>
			  </p>
			  <p class="box_add ">
			  	<span class="icon_big ">
			  	  <label for="file"><i class="far fa-plus-square"></i></label><br/>
			  	  <input type="file" id="file" style="display: none">
			  	</span>
			  </p>
			  <p class="top">
				  <span class="name">酒店简介:</span>
			  </p>
			  <p class="input">
			  	<span class="color_aaa">
			  	<textarea style="border: none" cols="40" rows="5" placeholder="请填写酒店简介..."></textarea>
			  	</span>
			  </p>
			  <!-- <p class="box_add">
			  	<span class="icon_big">
			  	  <label for="file"><i class="far fa-plus-square"></i></label><br/>
			  	  <input type="file" id="file" style="display: none">
			  	  <span class="text_add">添加酒店封面图</span>
			  	</span>
			  </p> -->
			 
		</div>
		<div class="footer">
		 <router-link tag="p" to="/enter/hotelManage" class="green_btn">
		  	<span>确定修改</span>
		  </router-link>
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
				checkList: ['KTV'],
				value1: null,
				htmltest_1: '<p><input type="text" style="border: #aaa solid 1px;border-radius: 5px;padding: 5px 0;" placeholder="请输入设备名称"></p>',
				alertShow_1: false,
			}
		},
		methods: {
			handleShow_1(){
				this.alertShow_1 = true
			},
			aaa_1(res){
				this.alertShow_1 = false
			},
		}
	}
</script>
<style scoped lang="scss">
	@import "../../../common/css/common.scss";
	.box{
		width: 100%;
		font-size: rem(13px);
		padding-bottom: rem(50px);
		padding-top: rem(20px);
		.body{
			padding: rem(8px) 0 rem(8px) 4%;
			p{
				display: flex;
				margin: rem(13px) 0;
				.name{
					width: 30%;
				}
				.message{
					color: #aaa;
				}
				.color_aaa{
					input{
						width: 92%;
						border: none;
						font-size: rem(13px);
						 -webkit-appearance: none;
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
				.more_icon{
					color: #43c122;
					margin-right: rem(8px);
				}
				&.input{
					border-bottom: #EDEDED solid rem(1px);
					padding-bottom: rem(9px);
				}
				&.bottom{
					margin-bottom: rem(25px);
					.check_box{
						display: inline-block;
						width: 33%;
						padding: rem(3px) 0;
					}
				}
				&.top{
					border-top: #EDEDED solid rem(1px);
					padding-top: rem(10px);
				}
				&.box_add{
					// padding: rem(30px) 36%;
					// border: #aaa solid rem(1px);
					display: inline-block;
					text-align: center;
					// border-radius: rem(5px);
					margin: auto;
					.icon_big{
						color: #aaa;
						font-size: rem(38px);
						padding: 0 20%;
						label{
							padding: 0;
						}
						.text_add{
							color: #000;
							font-size: rem(12px);
						}
					}
				}
				
				
			}
		}
		.footer{
			padding: rem(10px) 5%;
			// .button{
			// 	background-color: #43c122;
			// 	font-size: rem(15px);
			// 	text-align: center;
			// 	padding: rem(10px) 0;
			// 	color: #ffffff;
			// 	margin-top: rem(20px);
			// 	border-radius: rem(5px);
			// }
		}
	}
</style>