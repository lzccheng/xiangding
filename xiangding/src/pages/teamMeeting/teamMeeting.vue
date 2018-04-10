<template>
	<div class="box">
		<div class="img">
			<img src="http://image.qmango.com/hotelimg/dl1210/150330/0.jpeg">
		</div>
		<div class="tab">
			<div class="tab_header">
				<div class="header" ref="tab">
					<div v-for='(i,index) in arrItem' :key=index @click='onHandleClick(index,$event)'>{{i}}</div>
				</div>
				<div class="line" ref="line"></div>
			</div>
			<div class="show">
				<div class="tip" v-if="close">
					<p><span class="border">下单优惠</span><span class="text">现在下单即享红包返现</span><span class="close" @click="onHandleClose"><i class="fas fa-times"></i></span></p>
				</div>
				<div v-if="0 == index_" class="body">
					<ul>
						<li class="border_bottom">
							<span class="border_bottom">
								<span class="erea">
									<!-- 广州市 -->
									<div class="select">
										<el-cascader
										    :options="options"
										    v-model="selectedOptions"
										    @change="handleChange">
									 	</el-cascader>
									</div>
									
								</span>
								<!-- <span class="icon"><i class="fas fa-angle-right"></i></span> -->
							</span>
							
							<span class="right">
								<span class="map"><i class="fas fa-map-marker-alt"></i></span>
								<span>附近</span>
							</span>
						</li>
						<li class="border_bottom">
							<!-- <span class="date">3.29</span>
							<span class="day">今天</span>
							<span class="line">到</span>
							<span class="date">3.30</span>
							<span class="day">明天</span>
							<span class="icon_"><i class="fas fa-chevron-right"></i></span> -->
							<div class="date_value">
								<el-date-picker
							      v-model="date_value"
							      type="date"
							      placeholder="入住日期" 
							      :picker-options="pickerOptions1">
							    </el-date-picker>
							</div>
							<div class="date_value input">
								<p class="num">
									<el-input type="number" v-model="input" placeholder="入住天数（数字）"></el-input>
								</p>
							</div>
							
						</li>
						<li class="border_bottom">
							<!-- <span class="text">会议厅间数:</span>
							<span class="icon_"><i class="fas fa-chevron-right"></i></span> -->
							<p>
								<el-input placeholder="请输入数字" v-model="meetting_total" type="number">
							    <template slot="prepend">会议室间数:</template>
							  </el-input>
							</p>
						</li>
						<li class="border_bottom">
							<!-- <span class="text">价格&nbsp;/&nbsp;星级</span>
							<span class="icon_"><i class="fas fa-chevron-right"></i></span> -->
							<div class="pay">
								<span>价格：{{pay[0]}} - {{pay[1]}}</span>
							</div>
							<div>
								<el-slider
							      v-model="pay"
							      range
							      show-stops
							      :max="3000">
							    </el-slider>
							</div>
						</li>
						<li>
							<div class="star">
								<p class="title">星级：</p>
								<p class="startCheck">
									<span><el-radio v-model="starType" label="no">不限</el-radio></span>
									<span><el-radio v-model="starType" label="1">一星级</el-radio></span>
									<span><el-radio v-model="starType" label="2">二星级</el-radio></span>
									<span><el-radio v-model="starType" label="3">三星级</el-radio></span>
									<span><el-radio v-model="starType" label="4">四星级</el-radio></span>
									<span><el-radio v-model="starType" label="5">五星级</el-radio></span>
								</p>
							</div>
						</li>
					</ul>
					<p class="btn"><button>开始搜索</button></p>
					<div class="bottom">
						<div>
							<span><i class="fas fa-history"></i></span>
							<span>浏览记录</span>
						</div>
						<div>
							<span><i class="far fa-star"></i></span>
							<span>收藏酒店</span>
						</div>
					</div>
				</div>
				<div v-if="1 == index_" class="body">
					<ul>
						<li class="border_bottom">
							<span class="border_bottom">
								<span class="erea">
									<!-- 广州市 -->
									<div class="select">
										<el-cascader
										    :options="options"
										    v-model="selectedOptions"
										    @change="handleChange">
									 	</el-cascader>
									</div>
									
								</span>
								<!-- <span class="icon"><i class="fas fa-angle-right"></i></span> -->
							</span>
							
							<span class="right">
								<span class="map"><i class="fas fa-map-marker-alt"></i></span>
								<span>附近</span>
							</span>
						</li>
						<li class="border_bottom">
							<!-- <span class="date">3.29</span>
							<span class="day">今天</span>
							<span class="line">到</span>
							<span class="date">3.30</span>
							<span class="day">明天</span>
							<span class="icon_"><i class="fas fa-chevron-right"></i></span> -->
							<div class="date_value">
								<el-date-picker
							      v-model="date_value"
							      type="date"
							      placeholder="入住日期" 
							      :picker-options="pickerOptions1">
							    </el-date-picker>
							</div>
							<div class="date_value input">
								<p class="num">
									<el-input type="number" v-model="input" placeholder="入住天数（数字）"></el-input>
								</p>
							</div>
							
						</li>
						<li class="border_bottom">
							<!-- <span class="text">会议厅间数:</span>
							<span class="icon_"><i class="fas fa-chevron-right"></i></span> -->
							<p>
								<el-input placeholder="请输入数字" v-model="meetting_total" type="number">
							    <template slot="prepend">团房间数:</template>
							  </el-input>
							</p>
						</li>
						<li class="border_bottom">
							<!-- <span class="text">价格&nbsp;/&nbsp;星级</span>
							<span class="icon_"><i class="fas fa-chevron-right"></i></span> -->
							<div class="pay">
								<span>价格：{{pay[0]}} - {{pay[1]}}</span>
							</div>
							<div>
								<el-slider
							      v-model="pay"
							      range
							      show-stops
							      :max="3000">
							    </el-slider>
							</div>
						</li>
						<li>
							<div class="star">
								<p class="title">星级：</p>
								<p class="startCheck">
									<span><el-radio v-model="starType" label="no">不限</el-radio></span>
									<span><el-radio v-model="starType" label="1">一星级</el-radio></span>
									<span><el-radio v-model="starType" label="2">二星级</el-radio></span>
									<span><el-radio v-model="starType" label="3">三星级</el-radio></span>
									<span><el-radio v-model="starType" label="4">四星级</el-radio></span>
									<span><el-radio v-model="starType" label="5">五星级</el-radio></span>
								</p>
							</div>
						</li>
					</ul>
					<p class="btn"><button>开始搜索</button></p>
					<div class="bottom">
						<div>
							<span><i class="fas fa-history"></i></span>
							<span>浏览记录</span>
						</div>
						<div>
							<span><i class="far fa-star"></i></span>
							<span>收藏酒店</span>
						</div>
					</div>
				</div>
				<div v-if="2 == index_" class="body">
					<!-- <ul>
						<li>
							<span class="border_bottom">
								<span class="erea">广州市</span>
								<span class="icon"><i class="fas fa-angle-right"></i></span>
							</span>
							
							<span class="right">
								<span class="map"><i class="fas fa-map-marker-alt"></i></span>
								<span>附近</span>
							</span>
						</li>
						<li class="border_bottom">
							<span class="date">3.29</span>
							<span class="day">今天</span>
							<span class="line">--</span>
							<span class="date">3.30</span>
							<span class="day">明天</span>
							<span class="icon_"><i class="fas fa-chevron-right"></i></span>
						</li>
						<li class="border_bottom">
							<span class="text">钟点房间数</span>
							<span class="icon_"><i class="fas fa-chevron-right"></i></span>
						</li>
						<li class="border_bottom">
							<span class="text">价格&nbsp;/&nbsp;星级</span>
							<span class="icon_"><i class="fas fa-chevron-right"></i></span>
						</li>
					</ul>
					<p class="btn"><button>开始搜索</button></p>
					<div class="bottom">
						<div>
							<span><i class="fas fa-history"></i></span>
							<span>浏览记录</span>
						</div>
						<div>
							<span><i class="far fa-star"></i></span>
							<span>收藏酒店</span>
						</div>
					</div> -->
					<ul>
						<li class="border_bottom">
							<span class="border_bottom">
								<span class="erea">
									<!-- 广州市 -->
									<div class="select">
										<el-cascader
										    :options="options"
										    v-model="selectedOptions"
										    @change="handleChange">
									 	</el-cascader>
									</div>
									
								</span>
								<!-- <span class="icon"><i class="fas fa-angle-right"></i></span> -->
							</span>
							
							<span class="right">
								<span class="map"><i class="fas fa-map-marker-alt"></i></span>
								<span>附近</span>
							</span>
						</li>
						<li class="border_bottom">
							<!-- <span class="date">3.29</span>
							<span class="day">今天</span>
							<span class="line">到</span>
							<span class="date">3.30</span>
							<span class="day">明天</span>
							<span class="icon_"><i class="fas fa-chevron-right"></i></span> -->
							<div class="date_value">
								<el-date-picker
							      v-model="date_value"
							      type="date"
							      placeholder="入住日期" 
							      :picker-options="pickerOptions1">
							    </el-date-picker>
							</div>
							<div class="date_value input">
								<p class="num">
									<el-input type="number" v-model="input" placeholder="入住天数（数字）"></el-input>
								</p>
							</div>
							
						</li>
						<li class="border_bottom">
							<!-- <span class="text">会议厅间数:</span>
							<span class="icon_"><i class="fas fa-chevron-right"></i></span> -->
							<p>
								<el-input placeholder="请输入数字" v-model="meetting_total" type="number">
							    <template slot="prepend">钟点房间数:</template>
							  </el-input>
							</p>
						</li>
						<li class="border_bottom">
							<!-- <span class="text">价格&nbsp;/&nbsp;星级</span>
							<span class="icon_"><i class="fas fa-chevron-right"></i></span> -->
							<div class="pay">
								<span>价格：{{pay[0]}} - {{pay[1]}}</span>
							</div>
							<div>
								<el-slider
							      v-model="pay"
							      range
							      show-stops
							      :max="3000">
							    </el-slider>
							</div>
						</li>
						<li>
							<div class="star">
								<p class="title">星级：</p>
								<p class="startCheck">
									<span><el-radio v-model="starType" label="no">不限</el-radio></span>
									<span><el-radio v-model="starType" label="1">一星级</el-radio></span>
									<span><el-radio v-model="starType" label="2">二星级</el-radio></span>
									<span><el-radio v-model="starType" label="3">三星级</el-radio></span>
									<span><el-radio v-model="starType" label="4">四星级</el-radio></span>
									<span><el-radio v-model="starType" label="5">五星级</el-radio></span>
								</p>
							</div>
						</li>
					</ul>
					<p class="btn"><button>开始搜索</button></p>
					<div class="bottom">
						<div>
							<span><i class="fas fa-history"></i></span>
							<span>浏览记录</span>
						</div>
						<div>
							<span><i class="far fa-star"></i></span>
							<span>收藏酒店</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import common from '../../common/js/common'
	export default {
		mounted: function(){
			this.$refs.line.style.marginLeft = this.$refs.tab.firstChild.offsetLeft + 'px'
		},
		data(){
			return {
				arrItem: [
					'会议室',
					'团房',
					'钟点房'
				],
				index_: 0,
				close: true,
				options: [
					{
			          value: 'guangdong',
			          label: '广东省',
			          children: [
				          {
				            value: 'guangzhou',
				            label: '广州市'
				          },
				          {
				            value: 'shenzhengshi',
				            label: '深圳市'
				          },
				          {
				            value: 'foshan',
				            label: '佛山市'
				          },
				          {
				            value: 'zhaoqing',
				            label: '肇庆市'
				          },
			          ]
			         }
				],
				pickerOptions1: {
		            disabledDate(time) {
		              return time.getTime() <= (Date.now()-1000*60*60*24);
		            }
		          },
				selectedOptions: ['guangdong','guangzhou'],
				date_value: '',
				input: '',
				meetting_total: '',
				pay: [80,800],
				starType: 'no'
			}
		},
		methods: {
			onHandleClick(i,event){
				event.path[2].lastElementChild.style.marginLeft = event.path[0].offsetLeft + 'px'
				event.path[2].lastElementChild.style.width = common.getStyle(event.path[0],'width')
				this.index_ = i
			},
			onHandleClose(){
				this.close = false
			},
			handleChange(value) {
		        console.log(value);
		      }
		}
	}
</script>
<style scoped lang="scss">
	@import '../../common/css/common.scss';
	.box{
		background-color: #ededed;
		width: 100%;
		.img{
			img{
				width: 100%;
				height: 200px;
			}
		}
		.close{
			float: right;
			color: #aaa;
			padding: rem(2px) rem(5px);
		}
		.select{
			display: inline-block;
		}
		.tab{
			background-color: #fff;
			.tab_header{
				
				position: relative;
				.header{
					display: flex;
					justify-content: space-around;
					align-items:center;
					border-bottom: 1px solid #aaa;
					padding: rem(13px) 0 rem(15px);
				}
				.line{
					position: absolute;
					left: 0;
					bottom: 0; 
					width: rem(30px);
					height: rem(5px);
					background-color: #8BC34A;
					border-radius: rem(5px);
					transition: all 0.5s;
				}
			}
			.show{
				.tip{
					background-color: #EDEDED;
					padding: rem(10px) rem(20px);
					p{
						.border{
							display: inline-block;
							padding: rem(1px) rem(2px);
							border: 1px solid #FF9800;
							color: #FF9800;
						}
						.text{
							margin-left: rem(15px);
							color: #FF9800;
						}
					}
				}
				.body{
					padding: rem(10px) rem(10px);
					ul{
						li{
							padding: rem(10px) 0;
							.erea{
								font-size: rem(18px);
							}
							.icon{
								margin-left: 55%;
								color: #aaa;
								padding: 0 rem(10px);
							}
							.right{
								margin-left: 5%;
								.map{
									color: #FF9800;
								}
							}
							.date{
								font-size: rem(20px);
								font-weight: bold;
							}
							.line{
								display: inline-block;
								padding: 0 rem(10px);
							}
							.icon_{
								float: right;
								display: inline-block;
								padding: 0 rem(10px);
								color:　#aaa;
							}
							.text{
								color: #aaa;
							}
							.date_value{
								display: inline-block;
								width: 49%;
								p{
									display: inline-block;
									&.num{
										width: 80%;
										margin-left: 25%;
									}
								}
							}
							.pay{
								text-align: center;
								color: #aaa;
								font-size: rem(14px);
							}
							.star{
								padding: rem(3px) rem(8px);
								.title{
									font-size: rem(14px);
									padding: rem(8px) 0;
								}
								.startCheck{
									span{
										display: inline-block;
										padding: rem(5px) rem(5px);
									}
								}
							}
							
						}
					}
					.border_bottom{
						border-bottom: 1px solid #aaa;
						padding-bottom: rem(10px);
					}
					.btn{
						margin-top: rem(15px);
						button{
							width: 100%;
							border: none;
							background-color: #8BC34A;
							padding: rem(13px) 0;
							color: #fff;
							border-radius: rem(5px);
						}
					}
					.bottom{
						display: flex;
						justify-content: space-around;
						align-items: center;
						margin-top: rem(15px);
						div{
							padding: rem(15px) 0;
						}
					}
				}
			}
		}
	}
</style>