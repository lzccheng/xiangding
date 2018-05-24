<template>
	<div class="box">
		<Header title="餐饮管理"/>
		<span v-if="0 == index_c">
			<span class="manage" v-if="index_ != 1" @click="onHandleChange(1)">管理</span>
			<span class="manage" v-if="index_ == 1" @click="onHandleChange(0)">完成</span>
		</span>
		<div class="body">
			<div class="nav">
				<div class="tab" ref="tab"> 
					<div v-for="(i,index) in arrItem" :key='index' @click="handleClick(index,$event)"> 
						<span>{{i}}</span>
					</div>
				</div>
				<div class="line" ref="_line"></div>
			</div>
			<div class="show">
				<div v-if="0 == index_c">
					<div v-if="index_ != 1">
						<router-link  tag="div" :to="Fn.getUrl({path: '/enter/hotelManage/foodAdd',query:{name: '套餐修改'}})" v-for="(i,index) in dataArr" :key="index" class="item">
							<div class="img"><img :src="i.urlImg" alt=""></div>
							<div class="text">
								<p class="child_1">{{i.title}}</p>
								<p class="child_2">¥ {{i.price}}</p>
							</div>
							<div class="icon_1">
							   <span><i class="fas fa-chevron-right"></i></span>
							</div>
						</router-link>
					</div>
					
					<div v-if="index_ == 1">
						<div v-for="(i,index) in dataArr" :key="index" class="item" @click="handleDelect(index)">
							<div class="img"><img :src="i.urlImg" alt=""></div>
							<div class="text">
								<p class="child_1">{{i.title}}</p>
								<p class="child_2">¥ {{i.price}}</p>
							</div>
							<div class="icon">
							   <span> 
							   <el-checkbox-group v-model="i.checkList">
							    <el-checkbox label=""></el-checkbox>
							  </el-checkbox-group></span>
							</div>
						</div>
					</div>
				</div>
				<div v-if="1  == index_c">
					<router-link  tag="div" :to="Fn.getUrl({path: '/enter/hotelManage/mealDetail'})" v-for="(i,index) in dataArr" :key="index" class="item">
						<div class="img"><img :src="i.urlImg" alt=""></div>
						<div class="text">
							<p class="child_1">{{i.title}}</p>
							<p class="child_2">¥ {{i.price}}</p>
							<p class="child_3">{{i.time}}</p>
						</div>
						<div class="icon_1">
						   <span><i class="fas fa-chevron-right"></i></span>
						</div>
					</router-link>
				</div>
			</div>
			
		
		</div>
		<div class="add_box" >
			<div v-if="0 == index_c">
				<router-link tag="p" :to="Fn.getUrl({path: '/enter/hotelManage/foodAdd',query: {name: '添加套餐'}})" v-if="0==index_" class="botton">
					<span><i class="fas fa-plus-circle"></i></span>
					<span>添加</span>
				</router-link>
				<p v-if="1==index_" class="botton ">
					<span><i class="fas fa-trash-alt"></i></span>
					<span>删除</span>
				</p>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		mounted(){
			this._lineLeft()
		},
		data(){
			return {
				arrItem:[
					'发布管理',
					'订单管理'
				],
				dataArr:[
					{
						title: 'A套餐',
						price: '956',
						urlImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523425433535&di=f7d324b2c95bd6f203fb8741290c02e3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D41481487a2773912d02b8d219161e374%2Ff3d3572c11dfa9ec3d58042d69d0f703918fc192.jpg',
						time: '2018-04-30',
						checkList: []
					},
					{
						title: 'B套餐',
						price: '299',
						urlImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523425433535&di=f7d324b2c95bd6f203fb8741290c02e3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D41481487a2773912d02b8d219161e374%2Ff3d3572c11dfa9ec3d58042d69d0f703918fc192.jpg',
						time: '2018-04-30',
						checkList: []
					},
					{
						title: 'C套餐',
						price: '399',
						urlImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523425433535&di=f7d324b2c95bd6f203fb8741290c02e3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D41481487a2773912d02b8d219161e374%2Ff3d3572c11dfa9ec3d58042d69d0f703918fc192.jpg',
						time: '2018-04-30',
						checkList: []
					},
					{
						title: 'D套餐',
						price: '499',
						urlImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523425433535&di=f7d324b2c95bd6f203fb8741290c02e3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D41481487a2773912d02b8d219161e374%2Ff3d3572c11dfa9ec3d58042d69d0f703918fc192.jpg',
						time: '2018-04-30',
						checkList: []
					},
				],
				index_: 0,
				index_c: 0
				
			}
		},
		methods: {
			handleClick(i,e){
				var e = e || event  
				//console.log(e.target,event.path[0])
				this.$refs._line.style.left = e.target.offsetLeft + 'px'
				this.$refs._line.style.width =  e.target.offsetWidth +'px'
				this.index_c = i
			},
			onHandleChange(i){
				this.index_ = i
			},
			_lineLeft(){
				this.index_ = this.$route.query.status || 0
				this.$refs._line.style.left = this.$refs.tab.children[this.index_].offsetLeft + 'px'
				this.$refs._line.style.width =  this.$refs.tab.children[this.index_].offsetWidth + 'px'
			},
			handleDelect(i){
				if(this.dataArr[i].checkList.length){
					this.dataArr[i].checkList.shift('')
				}else{
					this.dataArr[i].checkList.push('')
				}
			},
		},
		watch: {
			'$route'(to,from){
				if(to.name === 'order'){
					this._lineLeft()
				}
			}
		}
	}
</script>
<style scoped lang="scss">
	@import '../../../common/css/common.scss';
	.box{
		width: 100%;
		position: relative;
		min-height: 100%;
		padding-top: rem(20px);
		.manage{
			position: fixed;
			top: rem(17px);
			right: 5%;
			z-index: 999;
			font-size: rem(16px);
		}
		.body{
			// padding-bottom: rem(100px);
			div{
				&.nav{
					position: relative;
					padding: rem(5px) 0;
					font-size: rem(14px);
					border-bottom: #aaa solid rem(1px);
					div{
						&.active{
						}
						&.tab{
							display: flex;
							justify-content: space-around;
							align-items: center;
							background-color: #fff;
							div{
								padding: rem(10px) 0;
							}
						}
						&.line{
							width: rem(37px);
							height: rem(5px);
							background-color: #43c122;
							position: absolute;
							left: 0;
							bottom: 0; 
							border-radius: rem(5px);
							transition: all 0.5s;
						}
					}
				}
				&.item{
					border-bottom: #aaa solid rem(1px);
					padding: rem(15px) 4%;
					display: flex;
					align-items: center;
					.img{
						width: 20%;
						max-width: rem(150px);
						height: rem(68px);
						img{
							width: 100%;
							height: 100%;
							border-radius: rem(5px);
						}
					}
					.text{
						width: 60%;
						padding: 0 6%;
						p{
							&.child_1{
								font-size: rem(16px);
							}

							&.child_2{
								font-size: rem(14px);
								color: #FF9852;
								margin-top: rem(6px);
							}
							&.child_3{
								margin-top: rem(6px);
							}

						}
					}
					.icon_1{
						// padding-left: 50%;
						font-size: rem(17px);
						float: right;
					}
				}
			}
		}
		.add_box{
			position: fixed;
			bottom: 0;
			left: 0;
			z-index: 999;
			width: 100%;
			.botton{
				// background-color: #43c122;
				font-size: rem(14px);
				text-align: center;
				background-color: #43c122;
				padding: rem(13px) 0;
				span{
					color: #ffffff;
					
				}
			}
		}
		
	}
</style>