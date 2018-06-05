<template>
	<div class="box">
		<Header title="收支明细" />
		<div class="content">
			<div class="show">
				<div class="items">
					<div class="time"><span class="this_m">本月</span><!-- <span class="i"><i class="far fa-calendar-alt"></i></span> --></div>
					<div class="item" v-for="(i,index) in list.data" :key="index">
						<div class="img">
							<img :src="returnJson(data[index][0]?data[index][0].information:'{}','aptitude_imgs')[0]" alt="">
						</div>
						<div class="msg">
              <!--<p>{{returnJson(i[0].information,'thumb')}}</p>-->
              <!--<p><img :src="returnJson(i[0].information,'thumb')" alt=""></p>-->
							<p class="title"><span>{{returnJson(data[index][0]?data[index][0].information:'{}','store_name')}}</span></p>
							<p><span>1间，特惠商务房</span></p>
							<p><span>客户名称：{{data[index][0]?data[index][0].realname:''}}</span></p>
							<p><span>01月27日-01月28日</span></p>
						</div>
						<div class="price">
							<p class="btn"><span>{{returnStatus(data[index][0]?data[index][0].status:'-1')}}</span></p>
							<p class="price_">
								<span>￥</span>
								<span class="num">{{i.price}}</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		mounted(){
			this.getData()
		},
		data(){
			return {
			  data:[],
        list: {}
			}
		},
		methods: {
			getData(){
			  let that = this
				this.Http.post({route:'plugin.store-cashier.store.admin.cashier-order.index',baseUrl:'web/index.php?c=site&a=entry&m=yun_shop&do=1970&action=true&',data:{action:true}}).then(res=>{
					console.log(res)
          that.data = res.data.data.data
          that.list = res.data.data.list
				})
			},
      returnJson(str,key){
			return JSON.parse(str)[key]?JSON.parse(str)[key]:''
      },
      returnStatus(value){
			  let json = {
			    '-1': '取消状态',
          '0': '待付款',
          '1': '已付款',
          '2': '已发货',
          '3': '已完成'
        }
			  return json[value]
      }
		}
	}
</script>
<style scoped lang="scss">
	@import '../../../common/css/common.scss';
	.box{
		width: 100%;
		padding-top: rem(20px);
		.content{
			position: relative;
			.tabs{
				display: flex;
				justify-content: space-around;
				.tab{
					padding: rem(15px) rem(20px);
					color: #43C122;
				}
			}
			.line{
				width: rem(60px);
				height: rem(5px);
				position: absolute;
				left: 0;
				top: rem(42px);
				border-radius: rem(3px);
				background-color: #43C122;
				transition: all 0.5s;
			}
			.show{
				padding: rem(8px) rem(10px);
				.items{
					.time{
						padding: rem(10px);
						margin-bottom: rem(10px);
						border-bottom: 1px solid #aaa;
						.this_m{
							font-size: rem(14px);
						}
						.i{
							font-size: rem(17px);
							float: right;
						}
					}
					.item{
						padding: rem(5px) rem(10px);
						display: flex;
						position: relative;
						.img{
							width: 30%;
							height: rem(100px);
							img{
								width: 100%;
								height: 100%;
								border-radius: rem(5px);
							}
						}
						.msg{
							padding-left: rem(8px);
							.title{
								font-size: rem(18px);
								font-weight: bold;
								color: #333;
							}
							p{
								padding: rem(2px) 0;
							}
						}
						.price{
							// margin-left: 18%;
							position: absolute;
							bottom: rem(5px);
							right: 0;
							.btn{
								margin-top: rem(18px);
								span{
									display: inline-block;
									padding: rem(5px) rem(5px) rem(8px);
									color: #FF9800;
									border: 1px solid #FF9800;
									border-radius: rem(5px);
								}
							}
							.price_{
								color: #60C122;
								font-weight: bold;
								margin-top: rem(10px);
								.num{
									font-size: rem(18px);
								}
							}
						}
					}
				}
			}
		}
	}
</style>
