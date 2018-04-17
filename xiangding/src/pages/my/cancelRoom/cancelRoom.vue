<template>
	<div class="box">
		<Header title="退房申请"/>
		<div class="top">
			<div class="img">
				<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523425433535&di=f7d324b2c95bd6f203fb8741290c02e3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D41481487a2773912d02b8d219161e374%2Ff3d3572c11dfa9ec3d58042d69d0f703918fc192.jpg" alt="">
			 </div>
			<div class="text_box">
				<span class="name_1">特惠商务房</span>
				<span class="money">289.00</span>
				<p class="name_2">
					<span class="house_size">52m²大床1.8m</span>
					<span class="num">共一间</span>
				</p>
			</div>
		</div>
		<div class="hr_10"></div>
		<div class="body">
			<p>
				<span>退款原因</span>
				<span class="green">*</span>
				<el-select v-model="value" placeholder="请选择">
				    <el-option
				      v-for="item in options"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value"

				      >
				    </el-option>
				</el-select>
			</p>
			<p>
				<span>房间价格</span>
				<span class="green">*</span>
			</p>
			<p><input type="text" placeholder="¥"></p>
			<p>退款描述 (留言)</p>
			<p class="node"><input type="text" placeholder="请填写退房描述,建议"></p>
			<div class="bottom">确认</div>
		</div>
		
	</div>
</template>
<script>
	export default {
		data(){
			return {
				 options: [{
			          value: '选项1',
			          label: '环境不喜欢'
			        }, {
			          value: '选项2',
			          label: '态度恶劣'
			        }, {
			          value: '选项3',
			          label: '有急事离开'
			        }],
			        value: ''
			}
		},
		methods: {

		}
	}
</script>
<style scoped lang="scss">
	@import "../../../common/css/common.scss";
	.box{
		width: 100%;
		.top{
			display: flex;
			padding: rem(6px) 1%;
			.img{
				width: 22%;
				height: rem(82px);
				img{
					width: 100%;
					height: 100%;
					border-radius: rem(12px);
				}
			}
			.text_box{
				width: 70%;
				padding: rem(10px) 3%;
				.name_1{
					font-size: rem(17px);
					font-weight: bold;
				}
				.money{
					font-size: rem(17px);
					font-weight: bold;
					float: right;
				}
				.name_2{
					margin: rem(15px) 0;
					span{
						color: #aaa;
					}
					.num{
						float: right;
					}
					
					
				}
			}
		}
		.hr_10{
			width: 100%;
			border: #e5e5e5 solid rem(7px);
		}
		.body{
			padding: 0 4%;
			p{
				font-size: rem(14px);
				margin: rem(15px) 0;
				.green{
					color: #43c122;
					margin-right: 10%;
				}
				select{
					width: 100%;
					padding: rem(9px) rem(5px);
					border: #aaa  solid rem(1px);
					border-radius: rem(5px);
					.option{
						color: red;
						border: none;
						border-bottom: 1px solid red;
						&::hover{
							background-color: green;
						}
					}
				}
				input{
						padding: rem(12px) 4%;
						width: 85%;
						border: #aaa solid rem(1px);
						&::-webkit-input-placeholder { 
						    color:    #000;
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
				.node{

					padding: rem(5px) 5% rem(40px) 5%;
					border: #aaa solid rem(1px);
				}
			}
			.bottom{
				background-color: #43c122;
				padding: rem(12px) 20%;
				text-align: center;
				color: #ffffff;
				font-size: rem(14px);
				margin-top: rem(80px);
				border-radius: rem(5px);
			}
		}
		
	}
</style>