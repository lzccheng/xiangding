<template>
	<div class="box">
		<Header :title="title"/>
		<div class="body">
			<p>
				<span>套餐名称</span>
				<span><input type="text" v-model="formData.title" placeholder="请输入套餐名称"></span>
			</p>
			<p>
				<span>套餐价格</span>
				<span><input type="text" v-model="formData.price" placeholder="请输入套餐价格"></span>
			</p>
			<div class="photo_box">
				<div><span>套餐照片</span></div>
				<div>
					<span>
					    <label for="file"><i class="fas fa-plus"></i></label>
					    <input type="file" @change="handleFile" id="file" style="display: none">
					</span>
					<div class="photo_show">
						<img :src="formData.thumb">
					</div>
				</div>
			</div>
			<div class="botton">
				<p v-if="title === '添加套餐'" @click="handleSubmit">添加</p>
				<p v-else @click="handleChange">修改</p>
			</div>

		</div>
	</div>
</template>
<script>
	export default {
		mounted(){
			if(this.$route.query.name){
				this.title = this.$route.query.name
			}
			if(this.$route.query.id){
				this.id = this.$route.query.id
			}
		},
		data(){
			return {
				title: '',
				id: 0,
				formData:{
		            uniaci: 3,
		            display_order: 1,
		            title:'',
		            parentid: 0,
		            is_recommand: 0,
		            goods_sn: new Date().getTime(),
		            product_sn: new Date().getTime()+10,
		            content: '00',
		            childid: 0,
		            brand_id: 6,
		            type: 1,
		            sku: '1',
		            thumb_url: '1',
		            price: '',
		            market_price: '1',
		            cost_price: 0,
		            stock: '1',
		            reduce_stock_method: 1,
		            status: 1,
		            weight: '1',
		            thumb: '',
		            param_title:[
		            	'1'
		            ],
		            param_value:[
		            	'1'
		            ]
	          }
			}
		},

		methods: {
			handleEdit(){

			},
			handleChange(){

			},
			handleFile(e){
		        var e = e || event
		        let that = this
		        console.log(e.target.files[0])
		        this.Http.imgUpload(e.target,{msg:'图片上传中...'}).then(res=>{
		          if(res.data.result === 1){
		            that.formData.thumb = res.data.data.img
		          }
		          that.Fn.tips(res.data.msg)
		        })
		      },
			handleSubmit(){
				if(!this.formData.title){
					return this.Fn.tips('套餐名称不能为空')
				}
				if(!this.formData.price){
					return this.Fn.tips('套餐价格不能为空')
				}else{
					if(this.Fn.checkNumber(this.formData.price)){
						if(Number(this.formData.price)<=0 || Number(this.formData.price)>=10000){
							return this.Fn.tips('套餐价格输入的数字需在0-10000之间')
						}
					}else{
						return this.Fn.tips('套餐价格输入的数字需在0-10000之间')
					}
				}
				if(!this.formData.thumb){
					return this.Fn.tips('请上传套餐照片')
				}
				let that = this
				//https://www.share-hotel.cn/web/index.php?c=site&a=entry&m=yun_shop&do=1022&route=plugin.store-cashier.store.admin.goods.add
				this.Http.post({route:'plugin.store-cashier.store.admin.goods.add',baseUrl: '/web/index.php?c=site&a=entry&m=yun_shop&do=1022&action=true&',data:{...this.formData}}).then(res=>{
					that.Fn.tips(res.data.msg)
					if(res.data.msg === '添加成功'){
						that.$router.push(that.Fn.getUrl({path:'/enter/hotelManage/foodManage'}))
					}
				})
			}
		},
		watch: {
			$route (to,from){
				if(to.name === 'foodAdd'){
					if(this.$route.query.name){
						this.title = this.$route.query.name
					}
					if(this.$route.query.id){
						this.id = this.$route.query.id
					}
				}
			},
			id(){
				let that = this
				this.Http.post({route:'plugin.store-cashier.store.admin.goods.edit&c=site&a=entry&m=yun_shop&do=5468&action=true',baseUrl:'web/index.php?',data:{id:this.id}}).then(res=>{
					console.log(res)
				})
			}
		}
	}
</script>
<style scoped lang="scss">
	@import '../../../common/css/common.scss';
	.box{
		width: 100%;
		font-size: rem(15px);
		padding-top: rem(20px);
		.body{
			p{
				padding: rem(13px) 5%;
				border-bottom: #aaa solid rem(1px);
				input{
					color: #aaa;
					border: none;
					margin-left: 15%;
					font-size: rem(15px);
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
			.photo_box{
				padding: rem(13px) 5%;
				border-bottom: #aaa solid rem(1px);
				div{
					&:last-child{
						padding: rem(40px) 0;
						font-size: rem(16px);
						span{
							margin-top: rem(12px);
							padding: rem(30px) 10%;
							border: #aaa solid rem(1px);
						}
					}
				}
			}
			.botton{
				padding: rem(20px) 5%;
				text-align: center;
				p{
					background-color: #43c122;
					color: #fff;
					border-radius: rem(5px);
				}
			}
		}
	}
</style>