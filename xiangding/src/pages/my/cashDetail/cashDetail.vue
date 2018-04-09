<template>
	<div class="box">
		<div class="header">
		    <div class="big">
		    	<div class="ball"></div>
		    	<div class="text">
		    		<p class="agant">广东省广州市代理商</p>
		    		<p class="number"> 区域编号: 11221411</p>
		    	</div>
		    </div>
	    </div>
	    <div class="nav">
	    	<div class="my_hotel"></div>
	    	<span>我服务的酒店</span>
	    	<div class="total_b">
	    	<div class="total">30</div>
	    	<div class="gt"><i class="fas fa-angle-right"></i></div>
	    	</div>
	    </div>
	    <div class="background"></div>
	    <ul>
	    	<li class="item">
	    		<span class="hotel_name">广州银河大酒店</span>
	    		<div class="num_money">
	    			<p class="detail">详情</p>
	    		</div>
	    		<div class="num_money">
	    			<p class="num">1200</p>
	    			<p class="money">开房数</p>
	    		</div>
	    		<div class="num_money">
	    			<p class="num">1200</p>
	    			<p class="money">开房数</p>
	    		</div>
	    	</li>
	    	<li class="item">
	    		<span class="hotel_name">广州维也纳酒店</span>
	    		<div class="num_money">
	    			<p class="detail">详情</p>
	    		</div>
	    		<div class="num_money">
	    			<p class="num">1200</p>
	    			<p class="money">开房数</p>
	    		</div>
	    		<div class="num_money">
	    			<p class="num">1200</p>
	    			<p class="money">开房数</p>
	    		</div>
	    	</li>
	    	<li class="item">
	    		<span class="hotel_name">广州恒大酒店</span>
	    		<div class="num_money">
	    			<p class="detail">详情</p>
	    		</div>
	    		<div class="num_money">
	    			<p class="num">1200</p>
	    			<p class="money">开房数</p>
	    		</div>
	    		<div class="num_money">
	    			<p class="num">1200</p>
	    			<p class="money">开房数</p>
	    		</div>
	    	</li>
	    	<li class="item">
	    		<span class="hotel_name">广州南洋大酒店</span>
	    		<div class="num_money">
	    			<p class="detail">详情</p>
	    		</div>
	    		<div class="num_money">
	    			<p class="num">1200</p>
	    			<p class="money">开房数</p>
	    		</div>
	    		<div class="num_money">
	    			<p class="num">1200</p>
	    			<p class="money">开房数</p>
	    		</div>
	    	</li>
	    	<li class="item">
	    		<span class="hotel_name">广州银河大酒店</span>
	    		<div class="num_money">
	    			<p class="detail">详情</p>
	    		</div>
	    		<div class="num_money">
	    			<p class="num">1200</p>
	    			<p class="money">开房数</p>
	    		</div>
	    		<div class="num_money">
	    			<p class="num">1200</p>
	    			<p class="money">开房数</p>
	    		</div>
	    	</li>
	    	<li class="item">
	    		<span class="hotel_name">广州银河大酒店</span>
	    		<div class="num_money">
	    			<p class="detail">详情</p>
	    		</div>
	    		<div class="num_money">
	    			<p class="num">1200</p>
	    			<p class="money">开房数</p>
	    		</div>
	    		<div class="num_money">
	    			<p class="num">1200</p>
	    			<p class="money">开房数</p>
	    		</div>
	    	</li>
	    	<li class="item">
	    		<span class="hotel_name">广州银河大酒店</span>
	    		<div class="num_money">
	    			<p class="detail">详情</p>
	    		</div>
	    		<div class="num_money">
	    			<p class="num">1200</p>
	    			<p class="money">开房数</p>
	    		</div>
	    		<div class="num_money">
	    			<p class="num">1200</p>
	    			<p class="money">开房数</p>
	    		</div>
	    	</li>
	    	<li class="item">
	    		<span class="hotel_name">广州银河大酒店</span>
	    		<div class="num_money">
	    			<p class="detail">详情</p>
	    		</div>
	    		<div class="num_money">
	    			<p class="num">1200</p>
	    			<p class="money">开房数</p>
	    		</div>
	    		<div class="num_money">
	    			<p class="num">1200</p>
	    			<p class="money">开房数</p>
	    		</div>
	    	</li>
	    </ul>
	    <div class="page">
	        <div class="page_p">
		    	<div class="up">上一页</div>
		    	<div class="up">下一页</div>
	    	</div>
	    </div>
	</div>
</template>
<script>
	export default {
		data(){
			return {

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
		background-color: #fff;
        .header{
        	width: 100%;
        	height: rem(125px);
        	border: #43c122 solid 1px;
            background-color: #43c122;
            .big{
            	width: 90%;
            	height: rem(80px);
            	margin-top: rem(20px);
                .ball{
                	width: rem(75px);
                	height: rem(75px);
                	background-color: #e5e5e5;
                	margin-left: rem(17px);
                	border-radius: 50%;
                	float: left;
                }
                .text{
                	width: rem(230px);
                	height: rem(62px);
                	float: left;
                	margin-left: rem(12px);
                	margin-top: rem(6px);
                	.agant{
                		font-size: rem(17px);
                		color: #ffffff;
                		margin-top: rem(3px);
                	}
                	.number{
                		font-size: rem(13px);
                		color: #ffffff;
                		margin-top: rem(8px);
                		padding-left: rem(2px);
                	}
                }
            }
        }
        .nav{
        	width: 100%;
        	height: rem(45px);
        	.my_hotel{
        		width: rem(3px);
        		height: rem(24px);
        		background-color: #43c122;
        		margin-left: rem(15px);
        		margin-top: rem(12px);
        		float: left;
        	}
        	span{
        		font-size: rem(16px);
        		margin-top: rem(12px);
        		margin-left: rem(5px);
        		float: left;
        	}
        .total_b{
        	    float: right;
        	.total{
        		display: inline-block;
        		width: rem(42px);
        		height: rem(22px);
        		background-color: #43c122;
        		border-radius: rem(20px);
        		margin-right: rem(15px);
        		margin-top: rem(12px);
        		text-align: center;
        		color: #ffffff;
        		font-size: rem(13px);
        		line-height: rem(22px);
        	}
        	.gt{
				display: inline-block;
				margin-right: rem(30px);
				color: #aaaaaa;
				font-size: rem(19px);
				vertical-align: middle;
        	}
        	}
        }
        .background{
        	width: 100%;
        	height: rem(7px);
        	background-color: #ececec;
        }
        .item{
        	width: 97%;
        	height: rem(40px);
        	border-bottom: rem(3px) solid #ececec;
        	margin-left: rem(4px);
        	padding-top: rem(9px);
        	.hotel_name{
        		font-size: rem(15px);
        		margin-top: rem(13px);
        		margin-left: rem(16px);
        		float: left;
        	}
        	.num_money{
        		width: rem(55px);
        		height: rem(35px);
        		float: right;
        		text-align: center;
        		vertical-align: middle;
        		.num{
        			font-size: rem(15px);
        			color: #43c122;
        		}
        		.detail{
                    font-size: rem(13px);
                    margin-top: rem(16px);
        		}
        	}
        }
        .page{
        	width: 100%;
        	height: rem(50px);
        	.page_p{
        		width: rem(180px);
        		height: rem(30px);
        		margin-top: rem(15px);
        		margin-left: 30%;
        		float: left;
        		.up{
        			display: inline-block;
        			width: rem(80px);
        			height: rem(30px);
        			line-height: rem(30px);
        			background-color: #43c122;
        			border-radius: rem(5px);
        			color: #ffffff;
        			font-size: rem(13px);
        			text-align: center;
        			margin-left: rem(6px);
        		}
        	}
        }
	}
</style>