<template>
	<div class="box">
		<Header title="我的发布" router="/enter/hotelManage"/>
		<span class="delect" v-if="1==index_" @click="deleteRoom">删除</span>
		<div>
			<div v-if="0==index_">

					<!-- <div>
						<div class="item" >
								<div class="img">
									<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527917841118&di=13e2586bdcada080d1ab6b2269d37198&imgtype=0&src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F120818%2F214833-120QQ5532077.jpg" alt="">
								 </div>
								<div class="con_box">
									<p class="room_name">ooooo</p>
									<p class="money_item">
										<span class="money_1">¥</span>
										<span class="money_2" @click="handleChangePrice(8)">88888 </span>
										<span class="spec">/间晚</span>
									</p>
									<p class="text">
									  <span class="text_1">房间面积:&nbsp; 8888</span>
									  <span class="icon" @click="handleCancel">
										  <el-switch
                        @change="statusChange(1)"
											  v-model="value2"
											  active-color="#43c122"
											  inactive-color="#a7a5a6">
										  </el-switch>
									  </span>
									</p>
									<p class="text_2"><span class="right" @click="handleCancel">开启状态</span></p>
									<p class="text">可售房间:&nbsp; <span @click="handleChangeStock(8)">55</span>间</p>
								</div>
						</div>
					</div> -->


					<div v-for="(i,index) in arr" class="item" :key="index">
						<div class="img">
							<img :src="i.thumb" alt="">
						 </div>
						<div class="con_box">
							<p class="room_name">{{i.title}}</p>
							<p class="money_item">
								<span class="money_1">¥</span>
								<span class="money_2" @click="handleChangePrice(index)">{{i.price}} </span>
								<span class="spec">/间晚</span>
							</p>
							<div class="text_small">
								<p class="text">
								  <span class="text_1">房间面积:&nbsp; <!-- {{filter(arrItem[index],'房间面积')}} -->{{arrItem[index]?filter(arrItem[index],'房间面积'):''}} m<sup>2</sup></span>
								  <span class="icon" @click="handleCancel">
									  <el-switch @change="statusChange(index,i.id)"
										  v-model="i.active"
										  active-color="#43c122"
										  inactive-color="#a7a5a6">
									  </el-switch>
								  </span>
								</p>
								<p class="text_2"><span class="right" @click="handleCancel">开启状态</span></p>
								<p class="text">可售房间:&nbsp; <span @click="handleChangeStock(index)">{{i.stock}}</span>间</p>
							</div>
						</div>
					</div>

			</div>
			<div v-if="1==index_">
				<div v-for="(i,index) in arr" class="item_delete" :key="index">
					<div class="img">
						<img :src="i.thumb" alt="">
					 </div>
					<div class="text_box">
						<div class="name_1">
						   <p>{{i.title}}</p>
						   <span>¥</span>
						   <span class="name_money">{{i.price}}元</span>
						</div>
						<p class="icon">
							<span>
							   <el-checkbox-group @change="handleCheck(i)" v-model="i.checkedNames">
							    <el-checkbox :label="index">  &nbsp;</el-checkbox>
							  </el-checkbox-group>
							</span>
						</p>
					</div>

				</div>
			</div>
			<!-- <div v-if="1==index_">
				<div class="item_delete" >
					<div class="img">
						<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523425433535&di=f7d324b2c95bd6f203fb8741290c02e3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D41481487a2773912d02b8d219161e374%2Ff3d3572c11dfa9ec3d58042d69d0f703918fc192.jpg" alt="">
					 </div>
					<div class="text_box">
						<div class="name_1">
						   <p>商务特惠房</p>
						   <span>¥</span>
						   <span class="name_money">123元</span>
						</div>
						
						<p class="icon">
							<span>
							   <el-checkbox-group v-model="checkList">
							    <el-checkbox label=""></el-checkbox>
							  </el-checkbox-group></span>
						</p>
					</div>
				</div>
			</div> -->
		</div>
		<div class="control" style="z-index:999999">
			<div class="add" @click="onHandleChange(0)" >
			    <router-link tag="div" :to="Fn.getUrl({path: '/my/roomSend/roomSend'})" class="icon_1"><i class="far fa-plus-square"></i></router-link>
				<router-link tag="span" :to="Fn.getUrl({path: '/my/roomSend/roomSend',query:{title: '房间发布' }})" >房间发布</router-link>
			</div>
			<div class="add" style="border-right: #e5e5e5 solid 1px;" v-if="index_ != 1" @click="onHandleChange(1)" >
			    <div class="icon_1"><i class="far fa-minus-square"></i></div>
				<span >删减房间</span>
			</div>
			<div class="add" v-if="index_ == 1" @click="onHandleChange(0)" >
			    <div class="icon_1"><i class="far fa-minus-square"></i></div>
				<span >完成</span>
			</div>
		</div>
		<div class="line_"></div>
		<div class="footer" style="z-index:999999">
			<div class="room_box" style="border-right: #ffffff solid 1px;">
				<router-link tag="div" :to="Fn.getUrl({path: '/my/roomEnter/meettingSend'})" class="room" >
					<div class="icon_3"><i class="far fa-plus-square"></i></div>
					<span>会议室发布</span>
				</router-link>
			</div>
			<div class="room_box">
				<router-link tag="div" :to="Fn.getUrl({path: '/my/roomEnter/teamSend'})" class="room" >
					<div class="icon_3"><i class="far fa-plus-square"></i></div>
					<span>团房发布</span>
				</router-link>
			</div>
			<!-- <div class="room_box">
				<router-link tag="div" :to="Fn.getUrl({path: '/my/roomEnter/clockSend'})" class="room left">
					<div class="icon_3"><i class="far fa-plus-square"></i></div>
					<span>钟点房</span>
				</router-link>
			</div> -->
		</div>
	</div>
</template>
<script>
	import {  MessageBox } from 'mint-ui'
	export default {
		mounted(){
			this.getData()
		},
		data(){
			return {
				arrItem:[],
				arr: [
				],
				checkedNames:[],
				value1: true,
	            value2: true,
	            index_: 0,
	            deleteItem: [],
	            detail: []
	            // checkList: false,
			}
		},
		methods: {
			filter(arr,value){
				if(arr.length){
					let returnValue = arr.filter(i=>{
						if(i.title === value){
							return i
						}
					})
					return returnValue.length?returnValue[0].value : '' 
				}
				return '' 
			},
			handleCheck(i,id){
				if(this.deleteItem.indexOf(i.id) > -1){
					this.deleteItem.splice(this.deleteItem.indexOf(i.id),1)
				}else{
					this.deleteItem.push(i.id)
				}
			},
      statusChange(i,id){
        let that = this
        setTimeout(()=>{
        	let status_ = that.arr[i].active?1:0
	        that.Http.post({route:'plugin.store-cashier.store.admin.goods.edit',baseUrl:'/web/index.php?c=site&a=entry&m=yun_shop&do=5468&action=true&',data:{id:id,status:status_}}).then(res=>{
	          that.Fn.tips(res.data.msg)
	          that.getData()
	        })
        },15)
      },
      handleChangeStock(i){
        let that = this
        MessageBox.prompt('请输入可售房间数：').then(({value,action})=>{
          that.Http.post({route:'plugin.store-cashier.store.admin.goods.edit',baseUrl:'/web/index.php?c=site&a=entry&m=yun_shop&do=5468&action=true&',data:{id:that.arr[i].id,stock:value}}).then(res=>{
            that.Fn.tips(res.data.msg)
            that.getData()
          })
          // that.arr[i].stock = value
        },camcel=>{
          console.log('cancel')
        })
      },
      handleChangePrice(i){
        let that = this
        MessageBox.prompt('请输入价格').then(({ value, action }) => {
          console.log(value)
          that.Http.post({route:'plugin.store-cashier.store.admin.goods.edit',baseUrl:'/web/index.php?c=site&a=entry&m=yun_shop&do=5468&action=true&',data:{id:that.arr[i].id,price:value}}).then(res=>{
            that.Fn.tips(res.data.msg)
            that.getData()
          })
          // that.arr[i].price = value
        },cancel=>{
          console.log('cancel')
        })
      },
			deleteRoom(){
				let that = this
				// if(that.deleteItem != null){
					MessageBox.confirm('确定执删除选中房间?').then(action => {
						console.log(action)
					  	for(let i=0;i<that.deleteItem.length;i++){
							that.Http.post({route:'plugin.store-cashier.store.admin.goods.delete',baseUrl:'web/index.php?c=site&a=entry&m=yun_shop&do=1210',data:{action:true,id:that.deleteItem[i]}}).then(res=>{
								that.Fn.tips(res.data.msg)
							})
						}
						that.getData()
					});
				// }
				

			},
			getData(){
				let that = this
				this.Http.get({route:'plugin.store-cashier.store.admin.goods.index',baseUrl:'web/index.php?c=site&a=entry&m=yun_shop&do=1210&action=true'}).then(res=>{
					console.log(res.data)
					if(res.data.main){
						let data = res.data.main.filter(i=>{
							if(i.brand_id != 6){
								i['active'] = i.status?true:false
								return i
							}
						})
						that.arrItem = res.data.detail
						that.arr = data
					}else{
						console.log(res.data)
            that.Fn.tips('数据获取失败！')
					}

				})
			},
			handleCancel(event){
				event.cancelBubble = true
			},
			onHandleChange(i){
				this.index_ = i
			}
		},
    watch:{
		  $route(to,from){
		    if(to.name === 'roomEnter'){
		      this.getData()
        	}
      	}
    }
	}
</script>
<style scoped lang="scss">
	@import "../../../common/css/common.scss";
	.box{
		width: 100%;
		padding-bottom: rem(150px);
		position: relative;
		padding-top: rem(20px);
		.delect{
			position: fixed;
			top: rem(13px);
			right: 6%;
			z-index: 1000;
			font-size: rem(15px);
		}
		.header{
			padding: rem(15px) 10%;
			font-size: rem(22px);
			background-color: #ffffff;
			border-bottom: #aaaaaa solid rem(1px);
			text-align: center;
			span{
				&:first-child{
					float: left;
				}
			}
		}
		.item{
			padding: rem(15px) 0;
			background-color: #ffffff;
			border-bottom: #aaa solid rem(1px);
			margin-left: 2%;
			div{
				padding: 0 rem(5px) 0 rem(10px);
				&.img{
					width: 25%;
					max-width: rem(150px);
					height: rem(96px);
					display: inline-block;
					img{
						width: 100%;
						height: 100%;
						border-radius: rem(12px);
					}
				}
				&.text_box{
					.name_1{
						font-size: rem(17px);
						margin-bottom: rem(5px);
						font-weight: bold;
					}
					.name_2{
						span{
							color: #e73c46;
						}
						.name_money{
							font-size: rem(14px);
						}
					}
				}

			}
			.con_box{
				display: inline-block;
				margin-top: rem(1px);
				width: 65%;
				height: rem(105px);
				float: right;
				position: relative;
				.room_name{
					font-size: rem(17px);
					font-weight: bold;
				}
				.money_item{
					display: inline-block;
					.money_1{
						color: #e51c23;
					  }
					.money_2{
						font-size: rem(16px);
						color: #e51c23;
					}
				}
					
				.text{
					padding-top: rem(5px);
					.text_1{
						// margin-right: 14%;
					}
					.icon{
						position: absolute;
						top: rem(45px);
						right: 4%;
					}
				}
				.text_2{
					.right{
						color: #a7a5a6;
						position: absolute;
						top: rem(70px);
						right: 5%;
					}
				}
			}
		}
		.item_delete{
			display: flex;
			justify-content: spase-around;
			align-items: center;
			padding: rem(18px) 0;
			margin-left: rem(5px);
			border-bottom: #EDEDED solid rem(1px);
			.img{
				width: 25%;
				height: rem(80px);
				padding-right: 5%;
				img{
					width: 100%;
					height: 100%;
					border-radius: rem(12px);
				}
			}
			.text_box{
				width: 65%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.name_1{
					margin-bottom: rem(5px);
					p{
						font-weight: bold;
						font-size: rem(15px);
						padding-bottom: rem(5px); 
					}
					span{
						color: #e73c46;
						&:last-child{
							font-size: rem(16px);
						}
					}
				}
			
			}

			

		}
		.control{
			position: fixed;
			bottom: rem(42px);
			left: 0;
			background-color: #e5e5e5;
			display: flex;
			border-bottom: #ffffff solid rem(2px);
			// justify-content: space-around;
			// align-items: center;
			width: 100%;
			height: rem(50px);
			.active{
				background-color: #43c122;
				border-radius: rem(28px);
				color: #ffffff;
			}
			.add{
				width: 50%;
				text-align: center;
				line-height: rem(50px);
				border-right: #ffffff solid rem(1px);
				.icon_1{
					display: inline-block;
					color: #43c122;
				}
			}
		}
		.line_{
			border: #ffffff solid rem(5px);
			position: fixed;
			bottom: rem(42px);
			width: 100%;
		}
		.footer{
			position: fixed;
			bottom: 0;
			left: 0;
			background-color: #ffffff;
			width: 100%;
			display: flex;
			justify-content: space-around;
			background-color: #e5e5e5;
			.room_box{
				width: 50%;

				.room{
					padding: rem(13px) 0;
					text-align: center;
					// border-right: #ffffff solid rem(1px);
					.icon_3{
						display: inline-block;
						color: #43c122;
					}
				}
				.left{
					border-right: none;
				}
			}

		}
	}
</style>
